"use server"

import type Stripe from "stripe"
import { getStripe } from "@/lib/stripe"

export interface TransactionRecord {
  id: string
  type: "commissary" | "deposit" | "donation"
  date: string
  amount: number
  status: string
  inmateName?: string
  facilityName?: string
  packageName?: string
  receiptUrl?: string
}

export async function getTransactionHistory(phoneNumber: string): Promise<{
  success: boolean
  transactions: TransactionRecord[]
  error?: string
}> {
  try {
    const stripe: Stripe = getStripe()

    // Clean phone number - remove all non-digits
    const cleanPhone = phoneNumber.replace(/\D/g, "")
    
    if (cleanPhone.length < 10) {
      return { success: false, transactions: [], error: "Invalid phone number" }
    }

    // Search for payment intents with this phone number in metadata
    const paymentIntents = await stripe.paymentIntents.search({
      query: `metadata["phone"]:"${cleanPhone}"`,
      limit: 100,
    })

    // Also search for charges (for payment links)
    const charges = await stripe.charges.search({
      query: `metadata["phone"]:"${cleanPhone}"`,
      limit: 100,
    })

    // Also try searching by customer phone
    const paymentIntentsAlt = await stripe.paymentIntents.search({
      query: `metadata["customerPhone"]:"${cleanPhone}"`,
      limit: 100,
    })

    // Combine and deduplicate results
    const allPaymentIntents = [...paymentIntents.data, ...paymentIntentsAlt.data]
    const seenIds = new Set<string>()
    const uniquePaymentIntents = allPaymentIntents.filter(pi => {
      if (seenIds.has(pi.id)) return false
      seenIds.add(pi.id)
      return true
    })

    // Map payment intents to transaction records
    const piTransactions: TransactionRecord[] = uniquePaymentIntents.map((pi) => {
      const metadata = pi.metadata || {}
      
      // Determine transaction type based on metadata
      let type: "commissary" | "deposit" | "donation" = "commissary"
      if (metadata.type === "deposit") type = "deposit"
      else if (metadata.type === "donation") type = "donation"
      else if (metadata.packageName || metadata.packageId) type = "commissary"

      return {
        id: pi.id,
        type,
        date: new Date(pi.created * 1000).toISOString(),
        amount: pi.amount / 100, // Convert from cents
        status: pi.status === "succeeded" ? "completed" : pi.status,
        inmateName: metadata.inmateName || metadata.inmate_name,
        facilityName: metadata.facilityName || metadata.facility_name,
        packageName: metadata.packageName || metadata.package_name,
        receiptUrl: pi.latest_charge ? undefined : undefined, // Would need to fetch charge for receipt
      }
    })

    // Map charges to transaction records
    const chargeTransactions: TransactionRecord[] = charges.data
      .filter((ch) => !seenIds.has(ch.payment_intent as string))
      .map((ch) => {
        const metadata = ch.metadata || {}
        
        let type: "commissary" | "deposit" | "donation" = "commissary"
        if (metadata.type === "deposit") type = "deposit"
        else if (metadata.type === "donation") type = "donation"

        return {
          id: ch.id,
          type,
          date: new Date(ch.created * 1000).toISOString(),
          amount: ch.amount / 100,
          status: ch.status === "succeeded" ? "completed" : ch.status,
          inmateName: metadata.inmateName || metadata.inmate_name,
          facilityName: metadata.facilityName || metadata.facility_name,
          packageName: metadata.packageName || metadata.package_name,
          receiptUrl: ch.receipt_url || undefined,
        }
      })

    // Combine and sort by date (newest first)
    const allTransactions = [...piTransactions, ...chargeTransactions]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return {
      success: true,
      transactions: allTransactions,
    }
  } catch (error) {
    console.error("Error fetching transaction history:", error)
    return {
      success: false,
      transactions: [],
      error: "Failed to fetch transaction history. Please try again.",
    }
  }
}
