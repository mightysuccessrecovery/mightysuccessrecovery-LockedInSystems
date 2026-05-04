"use client"

import { useMemo, useState, useTransition } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  CreditCard,
  Landmark,
  Lock,
  Mail,
  Shield,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { StripeCheckout } from "@/components/stripe-checkout"
import { startSendFundsCheckout } from "@/app/actions/stripe"
import { computeSendFundsTotals } from "@/lib/payments"
import { ORG_EMAIL, ORG_PHONE } from "@/lib/org"
import { cn } from "@/lib/utils"

type PayMethod = "ach" | "card"

export default function SendFundsPage() {
  const [senderName, setSenderName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [facilityName, setFacilityName] = useState("")
  const [amountStr, setAmountStr] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<PayMethod>("ach")
  const [coverProcessingFee, setCoverProcessingFee] = useState(false)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const [complete, setComplete] = useState(false)
  const [pending, startTransition] = useTransition()

  const amount = parseFloat(amountStr)
  const amountValid = !Number.isNaN(amount) && amount >= 10 && amount <= 500

  const totals = useMemo(() => {
    if (!amountValid) return null
    return computeSendFundsTotals(amount, paymentMethod, coverProcessingFee)
  }, [amount, amountValid, paymentMethod, coverProcessingFee])

  const formValid =
    senderName.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.trim()) &&
    recipientName.trim().length > 1 &&
    facilityName.trim().length > 1 &&
    amountValid

  const startCheckout = () => {
    setCheckoutError(null)
    if (!formValid || !totals) return
    startTransition(async () => {
      try {
        const secret = await startSendFundsCheckout({
          senderName: senderName.trim(),
          senderEmail: senderEmail.trim(),
          recipientName: recipientName.trim(),
          facilityName: facilityName.trim(),
          amount,
          paymentMethod,
          coverProcessingFee,
        })
        setClientSecret(secret)
      } catch (e) {
        setCheckoutError(e instanceof Error ? e.message : "Unable to start checkout.")
      }
    })
  }

  if (complete) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-background to-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <Card className="border-border shadow-sm">
            <CardContent className="space-y-4 pt-10 pb-10 text-center">
              <CheckCircle className="mx-auto h-14 w-14 text-emerald-600" aria-hidden />
              <h1 className="text-2xl font-bold text-[#0F2A44]">Payment received</h1>
              <p className="text-muted-foreground leading-relaxed">
                Thank you. You will receive a confirmation email from Stripe when processing is
                finalized. For questions, contact{" "}
                <a className="font-medium text-[#0F2A44] underline" href={`mailto:${ORG_EMAIL}`}>
                  {ORG_EMAIL}
                </a>
                {ORG_PHONE ? (
                  <>
                    {" "}
                    or call <span className="font-medium">{ORG_PHONE}</span>
                  </>
                ) : null}
                .
              </p>
              <Button asChild className="mt-4 bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90">
                <Link href="/">Return home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (clientSecret) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-background py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Button
            type="button"
            variant="ghost"
            className="mb-6 -ml-2"
            onClick={() => {
              setClientSecret(null)
              setCheckoutError(null)
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Edit details
          </Button>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 text-emerald-600" />
            <span>256-bit SSL · Payments processed by Stripe</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0F2A44] sm:text-3xl">Secure checkout</h1>
          <p className="mt-2 text-muted-foreground">
            Complete your transfer for <span className="font-medium text-foreground">{recipientName}</span>
          </p>
          <Card className="mt-6 border-border">
            <CardContent className="pt-6">
              <StripeCheckout
                clientSecret={clientSecret}
                onComplete={() => setComplete(true)}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-background to-muted/20 py-8 md:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Shield className="h-3.5 w-3.5 text-[#0F2A44]" />
            Inmate fund deposit (not a tax-deductible donation)
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2A44] sm:text-4xl">
            Send funds securely
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Bank transfer (ACH) is the lower-fee option and is selected by default. Card payments post
            faster with a higher estimated processing cost.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <Card className="border-border lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Recipient &amp; sender</CardTitle>
              <CardDescription>
                Funds are processed only for approved facilities and authorized recipients.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="senderName">Sender name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="senderName"
                    className="pl-9"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderEmail">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="senderEmail"
                    type="email"
                    className="pl-9"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipientName">Recipient name</Label>
                <Input
                  id="recipientName"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Legal name on facility records"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facilityName">Facility name</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="facilityName"
                    className="pl-9"
                    value={facilityName}
                    onChange={(e) => setFacilityName(e.target.value)}
                    placeholder="Institution or facility name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (USD)</Label>
                <Input
                  id="amount"
                  inputMode="decimal"
                  value={amountStr}
                  onChange={(e) => setAmountStr(e.target.value)}
                  placeholder="10.00 – 500.00"
                />
                {!amountValid && amountStr.length > 0 && (
                  <p className="text-sm text-destructive">Enter an amount between $10 and $500.</p>
                )}
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-sm font-semibold text-foreground">Payment method</p>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(v) => setPaymentMethod(v as PayMethod)}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <label
                    className={cn(
                      "flex cursor-pointer flex-col gap-1 rounded-lg border p-3 transition-colors",
                      paymentMethod === "ach"
                        ? "border-emerald-600/60 bg-emerald-50/80 ring-1 ring-emerald-600/30"
                        : "border-border hover:border-muted-foreground/40",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="ach" id="pm-ach" />
                      <Landmark className="h-4 w-4 text-emerald-700" />
                      <span className="font-medium">Bank transfer (ACH)</span>
                    </div>
                    <span className="pl-6 text-xs text-muted-foreground">
                      1–3 business days · <span className="font-semibold text-emerald-800">Lower fee option</span>
                    </span>
                  </label>
                  <label
                    className={cn(
                      "flex cursor-pointer flex-col gap-1 rounded-lg border p-3 transition-colors",
                      paymentMethod === "card"
                        ? "border-[#0F2A44]/50 bg-secondary ring-1 ring-[#0F2A44]/20"
                        : "border-border hover:border-muted-foreground/40",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="card" id="pm-card" />
                      <CreditCard className="h-4 w-4 text-[#0F2A44]" />
                      <span className="font-medium">Card</span>
                    </div>
                    <span className="pl-6 text-xs text-muted-foreground">Instant authorization · higher estimated fee</span>
                  </label>
                </RadioGroup>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-dashed border-border p-3">
                <Checkbox
                  id="cover"
                  checked={coverProcessingFee}
                  onCheckedChange={(v) => setCoverProcessingFee(v === true)}
                />
                <label htmlFor="cover" className="text-sm leading-snug text-muted-foreground">
                  Cover processing fee to support our services (adds the estimated processing line to
                  your total).
                </label>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                All transactions are subject to identity verification and fraud prevention protocols.
              </p>

              {checkoutError && (
                <p className="rounded-md border border-destructive/40 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                  {checkoutError}
                </p>
              )}

              <Button
                type="button"
                disabled={!formValid || pending}
                className="h-12 w-full bg-[#0F2A44] text-base text-white hover:bg-[#0F2A44]/90"
                onClick={startCheckout}
              >
                {pending ? "Preparing secure checkout…" : "Send funds securely"}
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Card className="sticky top-28 border-border">
              <CardHeader>
                <CardTitle className="text-base">Fee breakdown</CardTitle>
                <CardDescription>Estimates for planning; Stripe shows final charge.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {totals ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-medium">${totals.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing (est.)</span>
                      <span className="font-medium">
                        ${totals.processingFeeEstimate.toFixed(2)}
                        {!coverProcessingFee && (
                          <span className="ml-1 text-xs font-normal text-muted-foreground">
                            (org subsidized if unchecked)
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="font-medium">${totals.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                      <span>Total</span>
                      <span className="text-[#0F2A44]">${totals.total.toFixed(2)}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground">Enter a valid amount to see totals.</p>
                )}
                <Link
                  href="/deposit-policy"
                  className="mt-4 inline-block text-xs font-medium text-[#0F2A44] underline-offset-2 hover:underline"
                >
                  Deposit &amp; refund policies
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
