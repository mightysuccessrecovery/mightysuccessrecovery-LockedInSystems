import Link from "next/link"
import { ArrowRight, Building2, CreditCard, Heart, Landmark, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { orgEinDisplay } from "@/lib/org"

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0c2238] via-[#0F2A44] to-[#0F2A44] px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Mighty Success Recovery Inc. · DBA LockedIn Systems
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
            Secure fund transfers &amp; support services for families and communities
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            Send funds quickly and securely or support recovery programs that change lives.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-white text-[#0F2A44] hover:bg-white/90"
            >
              <Link href="/send-funds">
                Send funds now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate to our mission
              </Link>
            </Button>
          </div>
          <div className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
              <span>Secure payments powered by Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-gold" />
              <span>501(c)(3) verified organization</span>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-lg text-xs text-white/60">{orgEinDisplay()}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-[#0F2A44] sm:text-3xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Two clear paths: deposits for loved ones, and tax-deductible donations for mission programs.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F2A44]/10 text-sm font-bold text-[#0F2A44]">
              1
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Enter recipient details</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Provide sender contact information, recipient name, and facility so we can route the
              transfer with the metadata institutions expect.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F2A44]/10 text-sm font-bold text-[#0F2A44]">
              2
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Choose payment method</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <span className="inline-flex items-center gap-1 font-medium text-foreground">
                <Landmark className="h-3.5 w-3.5 text-emerald-700" />
                Bank (ACH)
              </span>{" "}
              is the lower-fee default;{" "}
              <span className="inline-flex items-center gap-1 font-medium text-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                card
              </span>{" "}
              is available when you need instant authorization.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F2A44]/10 text-sm font-bold text-[#0F2A44]">
              3
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Funds processed securely</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Stripe-hosted checkout, webhook confirmation logging, and published deposit and refund
              policies support transparency for families and agency reviewers.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0F2A44] sm:text-3xl">Built for compliance conversations</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Documented fees, identity verification messaging, ACH-first options, and separate
                donation vs. deposit journeys make it easier to align with procurement and contract
                diligence.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>· Published legal, privacy, deposit, and refund policies</li>
                <li>· Stripe webhook logging for completed checkouts (configure STRIPE_WEBHOOK_SECRET)</li>
                <li>· Facility lookup and commissary flows preserved for operational continuity</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="default" className="bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90">
                  <Link href="/procurement">Procurement &amp; demos</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/legal">Legal &amp; compliance hub</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-[#0F2A44]">Still need the classic flows?</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Browse commissary packages, use guided deposit with facility selection, or reach our
                support team — all existing tools remain available.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="secondary" size="sm">
                  <Link href="/store">Commissary</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/deposit">Guided deposit</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0F2A44]">Agency partnership inquiries</h2>
        <p className="mt-3 text-muted-foreground">
          Request evaluation, demonstration, or procurement documentation.
        </p>
        <Button asChild className="mt-8 bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90">
          <Link href="/contact">Submit partnership request</Link>
        </Button>
      </section>
    </div>
  )
}
