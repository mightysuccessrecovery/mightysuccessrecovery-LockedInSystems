"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, DollarSign, Mail, User, MessageSquare, CreditCard, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { StripeCheckout } from "@/components/stripe-checkout"
import { PhoneVerification } from "@/components/phone-verification"
import { startDonationCheckout } from "@/app/actions/stripe"

const PRESET_AMOUNTS = [25, 50, 100, 250, 500, 1000]

export default function DonationPage() {
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [verifiedPhone, setVerifiedPhone] = useState("")
  const [showPayment, setShowPayment] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const selectedAmount = customAmount ? parseFloat(customAmount) : parseFloat(amount) || 0

  const handleAmountSelect = (value: number) => {
    setAmount(value.toString())
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount("")
  }

  const handlePhoneVerified = (phone: string) => {
    setIsPhoneVerified(true)
    setVerifiedPhone(phone)
  }

  const handleProceedToPayment = () => {
    if (selectedAmount >= 5 && email && isPhoneVerified) {
      setShowPayment(true)
    }
  }

  const fetchClientSecret = async () => {
    const secret = await startDonationCheckout(selectedAmount, verifiedPhone)
    return secret
  }

  if (isComplete) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="py-12 text-center">
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
              <p className="mt-2 text-muted-foreground">
                Your donation of ${selectedAmount.toFixed(2)} to Mighty Success Recovery Inc. has been received.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                A receipt will be sent to {email}.
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

  if (showPayment) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 -ml-2"
            onClick={() => setShowPayment(false)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Donation Form
          </Button>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Complete Your Donation</h1>
            <p className="mt-2 text-muted-foreground">
              Donating ${selectedAmount.toFixed(2)} to Mighty Success Recovery Inc.
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <StripeCheckout fetchClientSecret={fetchClientSecret} />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <Heart className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Support Our Mission
          </h1>
          <p className="mt-2 text-muted-foreground">
            Donate to Mighty Success Recovery Inc.
          </p>
        </div>

        {/* Trust Verification */}
        <div className="mb-6 rounded-lg border border-gold/30 bg-gold/5 p-4 text-center">
          <p className="text-sm font-medium text-foreground">
            Your support helps us maintain and improve the platform.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="border-border mb-8">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground leading-relaxed">
              Your donation supports continued access to secure commissary and deposit services for
              incarcerated individuals and their families, helping keep loved ones connected.
            </p>
          </CardContent>
        </Card>

        {/* Phone Verification */}
        {!isPhoneVerified ? (
          <div className="mb-6">
            <PhoneVerification
              onVerified={handlePhoneVerified}
              title="Phone Verification Required"
              description="For your security, please verify your phone number before making a donation."
            />
          </div>
        ) : (
          <Alert className="mb-6 border-green-500/50 bg-green-500/10">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertDescription className="text-foreground">
              Phone verified: {verifiedPhone}
            </AlertDescription>
          </Alert>
        )}

        {/* Donation Form */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg">Make a Donation</CardTitle>
            <CardDescription>
              All donations are tax-deductible to the extent allowed by law
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Preset Amounts */}
            <div>
              <Label className="mb-3 block">Select Amount</Label>
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
            </div>

            {/* Custom Amount */}
            <div className="space-y-2">
              <Label htmlFor="customAmount">Or Enter Custom Amount (minimum $5)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-10 h-12"
                  min="5"
                  step="0.01"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-muted-foreground">(optional)</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-muted-foreground">(optional)</span>
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Textarea
                    id="message"
                    placeholder="Share why you're supporting our mission..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="pl-10 min-h-24"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            {selectedAmount > 0 && (
              <Card className="border-border bg-secondary">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Donation Amount</span>
                    <span className="text-2xl font-bold text-gold">
                      ${selectedAmount.toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleProceedToPayment}
              disabled={selectedAmount < 5 || !email || !isPhoneVerified}
              className="w-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Proceed to Payment
            </Button>

            {!isPhoneVerified && (
              <p className="text-xs text-center text-destructive">
                Phone verification required before proceeding to payment
              </p>
            )}

            <p className="text-xs text-center text-muted-foreground">
              Secure payment processing via Stripe
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
