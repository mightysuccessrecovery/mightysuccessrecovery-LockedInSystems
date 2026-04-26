import Link from "next/link"
import Image from "next/image"
import { DollarSign, ShoppingBag, MapPin, HeadphonesIcon, Shield, Lock, CheckCircle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* SSL Security Banner */}
      <div className="bg-emerald-600 py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white text-sm">
            <Lock className="h-4 w-4" />
            <span className="font-medium">SSL Secured</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">256-bit Encryption</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Your data is protected</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background py-16 md:py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/lockedin-logo.png"
                  alt="LockedIn Systems Logo"
                  width={140}
                  height={140}
                  className="rounded-full shadow-2xl border-4 border-gold/40 ring-4 ring-gold/10"
                />
                <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              LockedIn Systems
            </h1>
            <p className="mt-3 text-xl text-gold font-semibold">
              operated by Mighty Success Recovery Inc.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Secure processing services for authorized facilities and partners.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-700">
                <Lock className="h-4 w-4" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-gold/10 px-4 py-1.5 text-sm text-gold">
                <Shield className="h-4 w-4" />
                <span>Trusted Organization</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm text-blue-700">
                <CreditCard className="h-4 w-4" />
                <span>Stripe Payments</span>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                <Link href="/deposit">
                  <DollarSign className="mr-2 h-6 w-6" />
                  Send Funds
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                <Link href="/store">
                  <ShoppingBag className="mr-2 h-6 w-6" />
                  Commissary Services
                </Link>
              </Button>
            </div>

            {/* Secondary Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/facilities">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Facility
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/support">
                  <HeadphonesIcon className="mr-2 h-5 w-5" />
                  Get Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Send support to your loved ones in just a few simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-border hover:border-gold/50 transition-colors bg-background shadow-sm hover:shadow-md">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 shadow-inner">
                  <MapPin className="h-8 w-8 text-gold" />
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gold text-gold-foreground font-bold text-sm mb-4">1</div>
                <h3 className="text-xl font-semibold text-foreground">Find Facility</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Search by state to locate the correctional facility where your loved one is housed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-gold/50 transition-colors bg-background shadow-sm hover:shadow-md">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 shadow-inner">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gold text-gold-foreground font-bold text-sm mb-4">2</div>
                <h3 className="text-xl font-semibold text-foreground">Verify Inmate</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Search by Inmate ID or last name to locate and confirm the correct individual.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-gold/50 transition-colors bg-background shadow-sm hover:shadow-md">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 shadow-inner">
                  <ShoppingBag className="h-8 w-8 text-gold" />
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gold text-gold-foreground font-bold text-sm mb-4">3</div>
                <h3 className="text-xl font-semibold text-foreground">Send Support</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Deposit funds or purchase commissary packages securely through our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Your Security is Our Priority</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                <Lock className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-semibold">SSL Certificate</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">256-bit encryption protects all data</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                <CreditCard className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-semibold">Stripe Payments</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">PCI-compliant payment processing</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                <Shield className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-semibold">Trusted Organization</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">Committed to transparency and service</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                <CheckCircle className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-semibold">Data Protection</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">Your information stays private</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
