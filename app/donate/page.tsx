"use client"

import { useMemo, useState, useTransition } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  CreditCard,
  Heart,
  Landmark,
  Mail,
  MessageSquare,
  Sparkles,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { StripeCheckout } from "@/components/stripe-checkout"
import { startDonationCheckout } from "@/app/actions/stripe"
import { ORG_EMAIL, ORG_PHONE, orgEinDisplay } from "@/lib/org"
import { cn } from "@/lib/utils"

const PRESETS = [10, 25, 50]

type PayPref = "ach" | "card"

export default function DonatePage() {
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [payPref, setPayPref] = useState<PayPref>("ach")
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [pending, startTransition] = useTransition()

  const selected =
    customAmount.trim() !== "" ? parseFloat(customAmount) : parseFloat(amount) || 0
  const amountOk = !Number.isNaN(selected) && selected >= 5

  const summary = useMemo(() => {
    if (!amountOk) return null
    return selected.toFixed(2)
  }, [amountOk, selected])

  const canContinue = amountOk && email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const beginCheckout = () => {
    setError(null)
    if (!canContinue) return
    startTransition(async () => {
      try {
        const secret = await startDonationCheckout(selected, {
          email: email.trim(),
          name: name.trim(),
          message: message.trim(),
          paymentPreference: payPref,
        })
        setClientSecret(secret)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Could not start donation checkout.")
      }
    })
  }

  if (done) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-background to-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <Card className="border-border">
            <CardContent className="space-y-4 pt-10 pb-10 text-center">
              <CheckCircle className="mx-auto h-14 w-14 text-emerald-600" />
              <h1 className="text-2xl font-bold text-[#0F2A44]">Thank you</h1>
              <p className="text-muted-foreground leading-relaxed">
                Your gift of <span className="font-semibold text-foreground">${summary}</span> helps
                sustain recovery-oriented programs and family support services.
              </p>
              <p className="text-sm text-muted-foreground">
                A receipt will be sent to <span className="font-medium">{email}</span> when available.
              </p>
              <Button asChild className="bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90">
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
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Button
            type="button"
            variant="ghost"
            className="mb-6 -ml-2"
            onClick={() => {
              setClientSecret(null)
              setError(null)
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-[#0F2A44] sm:text-3xl">Complete your donation</h1>
          <p className="mt-2 text-muted-foreground">
            ${summary} · Tax-deductible to the extent allowed by law
          </p>
          <Card className="mt-6 border-border">
            <CardContent className="pt-6">
              <StripeCheckout clientSecret={clientSecret} onComplete={() => setDone(true)} />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-background to-muted/20 py-8 md:py-14">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-100">
            <Heart className="h-6 w-6 text-rose-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0F2A44] sm:text-4xl">Donate to our mission</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Mighty Success Recovery Inc. is a <span className="font-medium text-foreground">501(c)(3)</span>{" "}
            public charity. Your donation supports recovery programs, reentry readiness, and family
            stability—not individual commissary transfers.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">{orgEinDisplay()}</p>
        </div>

        <Card className="mb-8 border-border border-l-4 border-l-rose-200 bg-card">
          <CardContent className="flex gap-3 pt-6">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Every contribution helps us keep services accessible and invest in structured programs
                that strengthen communities impacted by incarceration.
              </p>
              <p className="font-medium text-foreground">
                Prefer lower fees? Choose bank (ACH) before checkout—more of your gift supports the mission.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg">Choose an amount</CardTitle>
            <CardDescription>Preset tiers or enter a custom amount (minimum $5).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-3 gap-3">
              {PRESETS.map((p) => (
                <Button
                  key={p}
                  type="button"
                  variant={amount === String(p) && customAmount === "" ? "default" : "outline"}
                  className={cn(
                    "h-12",
                    amount === String(p) && customAmount === ""
                      ? "bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90"
                      : "",
                  )}
                  onClick={() => {
                    setAmount(String(p))
                    setCustomAmount("")
                  }}
                >
                  ${p}
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="customDonation">Custom amount</Label>
              <Input
                id="customDonation"
                inputMode="decimal"
                placeholder="Enter amount (min $5)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setAmount("")
                }}
              />
            </div>

            <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-sm font-semibold text-foreground">Suggested payment method</p>
              <RadioGroup
                value={payPref}
                onValueChange={(v) => setPayPref(v as PayPref)}
                className="grid gap-3 sm:grid-cols-2"
              >
                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm",
                    payPref === "ach"
                      ? "border-emerald-600/50 bg-emerald-50/60 ring-1 ring-emerald-600/25"
                      : "border-border",
                  )}
                >
                  <RadioGroupItem value="ach" id="d-ach" />
                  <Landmark className="h-4 w-4 text-emerald-700" />
                  <span>
                    <span className="font-medium">Bank (ACH)</span>
                    <span className="block text-xs text-muted-foreground">Lower fee · 1–3 days</span>
                  </span>
                </label>
                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm",
                    payPref === "card"
                      ? "border-[#0F2A44]/40 bg-secondary ring-1 ring-[#0F2A44]/15"
                      : "border-border",
                  )}
                >
                  <RadioGroupItem value="card" id="d-card" />
                  <CreditCard className="h-4 w-4 text-[#0F2A44]" />
                  <span>
                    <span className="font-medium">Card</span>
                    <span className="block text-xs text-muted-foreground">Instant · higher fee</span>
                  </span>
                </label>
              </RadioGroup>
              <p className="text-xs text-muted-foreground">
                Both options appear at Stripe Checkout; this choice highlights what we recommend.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-6">
              <div className="space-y-2">
                <Label htmlFor="d-name">Name (optional)</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="d-name"
                    className="pl-9"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="d-email"
                    type="email"
                    className="pl-9"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-msg">Message (optional)</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea
                    id="d-msg"
                    className="min-h-[88px] pl-9"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share why you are giving today…"
                  />
                </div>
              </div>
            </div>

            {summary && (
              <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3 text-sm">
                <span className="text-muted-foreground">Your gift</span>
                <span className="text-xl font-bold text-[#0F2A44]">${summary}</span>
              </div>
            )}

            {error && (
              <p className="rounded-md border border-destructive/40 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}

            <Button
              type="button"
              className="h-12 w-full bg-[#0F2A44] text-base text-white hover:bg-[#0F2A44]/90"
              disabled={!canContinue || pending}
              onClick={beginCheckout}
            >
              {pending ? "Preparing secure checkout…" : "Continue to secure donation"}
            </Button>

            <p className="text-center text-xs text-muted-foreground leading-relaxed">
              Questions?{" "}
              <a href={`mailto:${ORG_EMAIL}`} className="font-medium text-[#0F2A44] underline">
                {ORG_EMAIL}
              </a>
              {ORG_PHONE ? (
                <>
                  {" "}
                  · <span className="font-medium">{ORG_PHONE}</span>
                </>
              ) : null}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
