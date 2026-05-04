'use server'

import { getStripe } from '@/lib/stripe'
import { COMMISSARY_PACKAGES, calculateFees } from '@/lib/data'
import {
  SEND_FUNDS_SERVICE_FEE,
  computeSendFundsTotals,
  estimateProcessingFee,
} from '@/lib/payments'

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const siteUrl = rawSiteUrl.endsWith('/') ? rawSiteUrl.slice(0, -1) : rawSiteUrl

type CheckoutPm = 'card' | 'us_bank_account'

function sendFundsPaymentMethodTypes(preference: 'ach' | 'card'): CheckoutPm[] {
  return preference === 'ach' ? ['us_bank_account', 'card'] : ['card', 'us_bank_account']
}

interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CheckoutMetadata {
  inmateId: string
  inmateName: string
  facility: string
  state: string
  phone?: string
  packageName?: string
  customerName?: string
  customerEmail?: string
}

// Start checkout session for commissary orders
export async function startCommissaryCheckout(
  items: CheckoutItem[],
  metadata: CheckoutMetadata
) {
  // Validate items server-side
  const validatedLineItems = items.map((item) => {
    const pkg = COMMISSARY_PACKAGES.find((p) => p.id === item.id)
    if (!pkg) {
      throw new Error(`Package with id "${item.id}" not found`)
    }
    // Use server-side price, not client-side
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: pkg.name,
          description: `Commissary package for ${metadata.inmateName}`,
        },
        unit_amount: pkg.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    }
  })

  // Calculate subtotal from server-validated prices
  const subtotal = items.reduce((sum, item) => {
    const pkg = COMMISSARY_PACKAGES.find((p) => p.id === item.id)
    return sum + (pkg?.price ?? 0) * item.quantity
  }, 0)

  // Calculate fees
  const fees = calculateFees(subtotal)

  // Add service fee as a line item
  validatedLineItems.push({
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Service Fee',
        description: 'Processing and delivery fee',
      },
      unit_amount: Math.round(fees.serviceFee * 100),
    },
    quantity: 1,
  })

  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    return_url: `${siteUrl}/checkout`,
    line_items: validatedLineItems,
    mode: 'payment',
    metadata: {
      type: 'commissary',
      inmateId: metadata.inmateId,
      inmateName: metadata.inmateName,
      facilityName: metadata.facility,
      state: metadata.state,
      phone: metadata.phone || '',
      packageName: metadata.packageName || '',
      customerName: metadata.customerName || '',
      customerEmail: metadata.customerEmail || '',
    },
    payment_intent_data: {
      metadata: {
        type: 'commissary',
        inmateId: metadata.inmateId,
        inmateName: metadata.inmateName,
        facilityName: metadata.facility,
        state: metadata.state,
        phone: metadata.phone || '',
        packageName: metadata.packageName || '',
        customerName: metadata.customerName || '',
        customerEmail: metadata.customerEmail || '',
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}

// Start checkout session for deposits
export async function startDepositCheckout(
  amount: number,
  metadata: CheckoutMetadata
) {
  // Validate amount
  if (amount < 10 || amount > 300) {
    throw new Error('Deposit amount must be between $10 and $300')
  }

  // Calculate fees
  const fees = calculateFees(amount)

  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    return_url: `${siteUrl}/deposit`,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Inmate Account Deposit',
            description: `Deposit to account for ${metadata.inmateName}`,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Service Fee',
            description: 'Processing fee',
          },
          unit_amount: Math.round(fees.serviceFee * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: {
      type: 'deposit',
      depositAmount: amount.toString(),
      inmateId: metadata.inmateId,
      inmateName: metadata.inmateName,
      facilityName: metadata.facility,
      state: metadata.state,
      phone: metadata.phone || '',
    },
    payment_intent_data: {
      metadata: {
        type: 'deposit',
        depositAmount: amount.toString(),
        inmateId: metadata.inmateId,
        inmateName: metadata.inmateName,
        facilityName: metadata.facility,
        state: metadata.state,
        phone: metadata.phone || '',
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}

export interface SendFundsCheckoutInput {
  senderName: string
  senderEmail: string
  recipientName: string
  facilityName: string
  amount: number
  paymentMethod: 'ach' | 'card'
  coverProcessingFee: boolean
}

// Standalone send-funds flow (ACH + card via Stripe Checkout)
export async function startSendFundsCheckout(input: SendFundsCheckoutInput) {
  const amount = Number(input.amount)
  if (Number.isNaN(amount) || amount < 10 || amount > 500) {
    throw new Error('Transfer amount must be between $10 and $500')
  }
  const senderName = input.senderName?.trim()
  const senderEmail = input.senderEmail?.trim()
  const recipientName = input.recipientName?.trim()
  const facilityName = input.facilityName?.trim()
  if (!senderName || !senderEmail || !recipientName || !facilityName) {
    throw new Error('Please complete all required fields')
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    throw new Error('Invalid email address')
  }

  const totals = computeSendFundsTotals(
    amount,
    input.paymentMethod,
    input.coverProcessingFee
  )
  const processingEstimate = estimateProcessingFee(amount, input.paymentMethod)

  const lineItems = [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Inmate account transfer',
          description: `${recipientName} — ${facilityName}`,
        },
        unit_amount: Math.round(amount * 100),
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Service fee',
          description: 'Per-transfer service fee',
        },
        unit_amount: Math.round(SEND_FUNDS_SERVICE_FEE * 100),
      },
      quantity: 1,
    },
  ]

  if (input.coverProcessingFee && totals.processingPassThrough > 0) {
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Processing fee support',
          description:
            'Optional contribution toward payment processing costs (estimated)',
        },
        unit_amount: Math.round(totals.processingPassThrough * 100),
      },
      quantity: 1,
    })
  }

  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    return_url: `${siteUrl}/send-funds`,
    customer_email: senderEmail,
    payment_method_types: sendFundsPaymentMethodTypes(input.paymentMethod),
    line_items: lineItems,
    mode: 'payment',
    metadata: {
      type: 'send_funds',
      sender_name: senderName.slice(0, 500),
      sender_email: senderEmail.slice(0, 500),
      recipient_name: recipientName.slice(0, 500),
      facility_name: facilityName.slice(0, 500),
      payment_method_pref: input.paymentMethod,
      cover_processing_fee: input.coverProcessingFee ? 'true' : 'false',
      processing_fee_estimate: String(processingEstimate),
      transfer_amount: String(amount),
    },
    payment_intent_data: {
      metadata: {
        type: 'send_funds',
        sender_name: senderName.slice(0, 500),
        sender_email: senderEmail.slice(0, 500),
        recipient_name: recipientName.slice(0, 500),
        facility_name: facilityName.slice(0, 500),
        payment_method_pref: input.paymentMethod,
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}

export interface DonationCheckoutOptions {
  email?: string
  name?: string
  message?: string
  phone?: string
  /** Controls method order in Checkout (ACH recommended default). */
  paymentPreference?: 'ach' | 'card'
}

// Start checkout session for donations
export async function startDonationCheckout(
  amount: number,
  options?: DonationCheckoutOptions
) {
  if (amount < 5) {
    throw new Error('Minimum donation amount is $5')
  }

  const email = options?.email?.trim() ?? ''
  const name = options?.name?.trim() ?? ''
  const message = options?.message?.trim() ?? ''
  const phone = options?.phone?.trim() ?? ''

  const paymentPreference = options?.paymentPreference ?? 'ach'
  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    return_url: `${siteUrl}/donate`,
    ...(email ? { customer_email: email } : {}),
    payment_method_types:
      paymentPreference === 'card'
        ? ['card', 'us_bank_account']
        : ['us_bank_account', 'card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation — Mighty Success Recovery Inc.',
            description: 'Tax-deductible to the extent allowed by law',
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: {
      type: 'donation',
      phone: phone.slice(0, 500),
      donor_name: name.slice(0, 500),
      donor_email: email.slice(0, 500),
      donor_message: message.slice(0, 500),
    },
    payment_intent_data: {
      metadata: {
        type: 'donation',
        phone: phone.slice(0, 500),
        donor_name: name.slice(0, 500),
        donor_email: email.slice(0, 500),
        donor_message: message.slice(0, 500),
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}
