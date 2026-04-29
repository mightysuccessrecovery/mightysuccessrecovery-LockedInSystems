"use client"

import { useState } from "react"
import Link from "next/link"
import {
  DollarSign,
  User,
  Building2,
  CreditCard,
  MapPin,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/components/cart-provider"
import { TransactionSecurityNotice } from "@/components/transaction-security-notice"
import { calculateFees } from "@/lib/data"
import { STRIPE_LINKS } from "@/lib/stripeLinks"

const PRESET_AMOUNTS = [25, 50, 100, 200, 300]

export default function DepositPage() {
  const { selectedState, selectedFacility, selectedInmate } = useCart()
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")

  const selectedAmount =
    customAmount !== "" ? parseFloat(customAmount) : parseFloat(amount) || 0
  const fees = selectedAmount > 0 ? calculateFees(selectedAmount) : null

  const handleAmountSelect = (value: number) => {
    setAmount(value.toString())
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount("")
  }

  const recipientReady = !!(selectedState && selectedFacility && selectedInmate)

  const amountValid = selectedAmount >= 10 && selectedAmount <= 300

  const canProceed = recipientReady && amountValid

  const handleProceedToPayment = () => {
    if (!canProceed) return
    window.open(STRIPE_LINKS.deposit.url, "_blank", "noopener,noreferrer")
  }

  const stateFacilitySearchHref =
    selectedState && selectedFacility
      ? `/facilities/${selectedState.code.toLowerCase()}/${selectedFacility.id}/search`
      : null
  const facilityListHref =
    selectedState !== null ? `/facilities/${selectedState.code.toLowerCase()}` : null

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <TransactionSecurityNotice />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <DollarSign className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Deposit Money</h1>
          <p className="mt-2 text-muted-foreground">
            Choose state and facility, find your recipient, enter an amount, then pay securely
          </p>
        </div>

        {/* 1–3 Recipient path */}
        <div className="space-y-4 mb-8">
          <Card className="border-border">
            <CardHeader className="border-b border-border bg-secondary pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-foreground">
                  1
                </span>
                <MapPin className="h-5 w-5 text-gold" />
                State
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {selectedState ? (
                <>
                  <p className="font-medium text-foreground">{selectedState.name}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/facilities">Change state</Link>
                  </Button>
                </>
              ) : (
                <Button asChild className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link href="/facilities">
                    Select state
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card
            className={`border-border ${!selectedState ? "opacity-60 pointer-events-none" : ""}`}
          >
            <CardHeader className="border-b border-border bg-secondary pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-foreground">
                  2
                </span>
                <Building2 className="h-5 w-5 text-gold" />
                Facility
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {!selectedState ? (
                <p className="text-sm text-muted-foreground">Select a state first.</p>
              ) : selectedFacility ? (
                <>
                  <div>
                    <p className="font-medium text-foreground">{selectedFacility.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedFacility.address}</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={facilityListHref!}>Change facility</Link>
                  </Button>
                </>
              ) : (
                <Button asChild className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link href={facilityListHref!}>
                    Select facility
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card
            className={`border-border ${!selectedFacility ? "opacity-60 pointer-events-none" : ""}`}
          >
            <CardHeader className="border-b border-border bg-secondary pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-foreground">
                  3
                </span>
                <User className="h-5 w-5 text-gold" />
                Inmate
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {!selectedFacility ? (
                <p className="text-sm text-muted-foreground">Select a facility first.</p>
              ) : selectedInmate ? (
                <>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                      <User className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {selectedInmate.lastName}, {selectedInmate.firstName}
                      </p>
                      <p className="text-sm text-muted-foreground">ID: {selectedInmate.id}</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={stateFacilitySearchHref!}>Change inmate</Link>
                  </Button>
                </>
              ) : (
                <Button asChild className="w-full sm:w-auto bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link href={stateFacilitySearchHref!}>
                    Find inmate
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {!recipientReady && (
          <Alert className="mb-6 border-gold/50 bg-gold/10">
            <AlertTriangle className="h-4 w-4 text-gold" />
            <AlertDescription className="text-foreground">
              Complete steps 1–3 above (or use{" "}
              <Link href="/facilities" className="font-medium text-gold underline underline-offset-2">
                Find an inmate
              </Link>
              ) before choosing a deposit amount.
            </AlertDescription>
          </Alert>
        )}

        {/* 4 Amount + pay */}
        <Card className={`border-border ${!recipientReady ? "opacity-60" : ""}`}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-foreground">
                4
              </span>
              Deposit amount
            </CardTitle>
            <CardDescription>
              Choose a preset or custom amount ($10 – $300). You can adjust the final amount on
              Stripe if your link allows it.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {PRESET_AMOUNTS.map((preset) => (
                <Button
                  key={preset}
                  type="button"
                  variant={amount === preset.toString() ? "default" : "outline"}
                  disabled={!recipientReady}
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

            <div className="space-y-2">
              <Label htmlFor="deposit-customAmount">Or enter custom amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="deposit-customAmount"
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  disabled={!recipientReady}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  min="10"
                  max="300"
                  step="0.01"
                />
              </div>
              {customAmount !== "" &&
                (parseFloat(customAmount) < 10 || parseFloat(customAmount) > 300) && (
                  <p className="text-sm text-destructive">Amount must be between $10 and $300</p>
                )}
            </div>

            {fees && recipientReady && (
              <Card className="border-border bg-secondary">
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deposit amount</span>
                      <span className="font-medium">${selectedAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee (est.)</span>
                      <span className="font-medium">${fees.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="font-semibold text-foreground">Total (est.)</span>
                      <span className="font-bold text-gold text-lg">${fees.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Button
              type="button"
              onClick={handleProceedToPayment}
              disabled={!canProceed}
              className="w-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Proceed to Payment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {!canProceed && recipientReady && !amountValid && (
              <p className="text-xs text-center text-destructive">
                Enter a deposit amount between $10 and $300 to continue.
              </p>
            )}

            <p className="text-xs text-center text-muted-foreground">
              Secure payment processing via Stripe. See{" "}
              <Link href="/fees" className="text-gold hover:underline">
                fee schedule
              </Link>{" "}
              for details. You may enter the final amount on Stripe&apos;s checkout page.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
