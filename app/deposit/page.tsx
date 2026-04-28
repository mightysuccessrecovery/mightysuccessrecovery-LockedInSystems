"use client"

import { useState } from "react"
import Link from "next/link"
import {
  DollarSign,
  User,
  Building2,
  CreditCard,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/components/cart-provider"
import { StripeCheckout } from "@/components/stripe-checkout"
import { TransactionSecurityNotice } from "@/components/transaction-security-notice"
import { startDepositCheckout } from "@/app/actions/stripe"
import { calculateFees } from "@/lib/data"

const PRESET_AMOUNTS = [25, 50, 100, 200, 300]

export default function DepositPage() {
  const { selectedInmate } = useCart()
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [showPayment, setShowPayment] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const selectedAmount = customAmount ? parseFloat(customAmount) : parseFloat(amount) || 0
  const fees = calculateFees(selectedAmount)

  const handleAmountSelect = (value: number) => {
    setAmount(value.toString())
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount("")
  }

  const handleProceedToPayment = () => {
    if (selectedAmount >= 10 && selectedAmount <= 300 && selectedInmate) {
      setShowPayment(true)
    }
  }

  const fetchClientSecret = async () => {
    if (!selectedInmate) {
      throw new Error("No inmate selected")
    }
    const secret = await startDepositCheckout(selectedAmount, {
      inmateId: selectedInmate.id,
      inmateName: `${selectedInmate.firstName} ${selectedInmate.lastName}`,
      facility: selectedInmate.facility,
      state: selectedInmate.state,
      phone: "",
    })
    return secret
  }

  if (isComplete) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="py-12 text-center">
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h3 className="text-2xl font-bold text-foreground">Deposit Successful!</h3>
              <p className="mt-2 text-muted-foreground">
                Your deposit of ${selectedAmount.toFixed(2)} for {selectedInmate?.firstName} {selectedInmate?.lastName} has been processed.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Funds will be available within 24-48 hours.
              </p>
              <Button asChild className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90">
                <Link href="/">Return Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (showPayment && selectedInmate) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 -ml-2"
            onClick={() => setShowPayment(false)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Deposit Form
          </Button>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Complete Deposit</h1>
            <p className="mt-2 text-muted-foreground">
              Depositing ${selectedAmount.toFixed(2)} for {selectedInmate.firstName} {selectedInmate.lastName}
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <StripeCheckout
                fetchClientSecret={fetchClientSecret}
                onComplete={() => setIsComplete(true)}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <TransactionSecurityNotice />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <DollarSign className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Deposit Money</h1>
          <p className="mt-2 text-muted-foreground">
            Send funds to your loved one securely
          </p>
        </div>

        {/* Inmate Selection */}
        {!selectedInmate ? (
          <Alert className="mb-6 border-gold/50 bg-gold/10">
            <AlertTriangle className="h-4 w-4 text-gold" />
            <AlertDescription className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-foreground">
                Please select an inmate to make a deposit.
              </span>
              <Button
                asChild
                size="sm"
                className="bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <Link href="/facilities">
                  <User className="mr-2 h-4 w-4" />
                  Find Inmate
                </Link>
              </Button>
            </AlertDescription>
          </Alert>
        ) : (
          <Card className="mb-6 border-border">
            <CardHeader className="border-b border-border bg-secondary">
              <CardTitle className="text-base flex items-center gap-2">
                <User className="h-5 w-5 text-gold" />
                Recipient Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <User className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {selectedInmate.lastName}, {selectedInmate.firstName}
                    </p>
                    <p className="text-sm text-muted-foreground">ID: {selectedInmate.id}</p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <Building2 className="h-3 w-3" />
                      {selectedInmate.facility}
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/facilities">Change</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Deposit Form */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg">Select Deposit Amount</CardTitle>
            <CardDescription>
              Choose a preset amount or enter a custom amount ($10 - $300)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Preset Amounts */}
            <div className="grid grid-cols-3 gap-3">
              {PRESET_AMOUNTS.map((preset) => (
                <Button
                  key={preset}
                  variant={amount === preset.toString() ? "default" : "outline"}
                  onClick={() => handleAmountSelect(preset)}
                  className={
                    amount === preset.toString()
                      ? "bg-gold text-gold-foreground hover:bg-gold/90"
                      : "border-border hover:border-gold hover:text-gold"
                  }
                >
                  ${preset}
                </Button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="space-y-2">
              <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  min="10"
                  max="300"
                  step="0.01"
                />
              </div>
              {customAmount && (parseFloat(customAmount) < 10 || parseFloat(customAmount) > 300) && (
                <p className="text-sm text-destructive">Amount must be between $10 and $300</p>
              )}
            </div>

            {/* Fee Breakdown */}
            {selectedAmount > 0 && (
              <Card className="border-border bg-secondary">
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deposit Amount</span>
                      <span className="font-medium">${selectedAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span className="font-medium">${fees.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="font-semibold text-foreground">Total Charge</span>
                      <span className="font-bold text-gold text-lg">
                        ${fees.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleProceedToPayment}
              disabled={!selectedInmate || selectedAmount < 10 || selectedAmount > 300}
              className="w-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Proceed to Payment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Secure payment processing via Stripe. See{" "}
              <Link href="/fees" className="text-gold hover:underline">
                fee schedule
              </Link>{" "}
              for details.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
