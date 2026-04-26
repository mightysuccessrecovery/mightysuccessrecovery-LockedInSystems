import Link from "next/link"
import Image from "next/image"
import { Lock, Shield, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Security Badges */}
      <div className="border-b border-primary-foreground/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <Lock className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">SSL Secured</p>
                <p className="text-xs text-primary-foreground/60">256-bit encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                <Shield className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold">Trusted</p>
                <p className="text-xs text-primary-foreground/60">Service organization</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                <CreditCard className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">Stripe</p>
                <p className="text-xs text-primary-foreground/60">Secure payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/lockedin-logo.png"
                alt="LockedIn Systems Logo"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-gold/30"
              />
              <div>
                <p className="font-bold text-lg">LockedIn Systems</p>
                <p className="text-xs text-primary-foreground/70">operated by Mighty Success Recovery Inc.</p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 text-center md:text-left max-w-xs">
              We provide a platform to support incarcerated individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/facilities" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Find Facility
              </Link>
              <Link href="/deposit" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Deposit Money
              </Link>
              <Link href="/store" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Commissary Store
              </Link>
              <Link href="/support" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Support
              </Link>
              <Link href="/fees" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Fees
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/legal" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Legal & Compliance
              </Link>
              <Link href="/privacy" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Privacy Statement
              </Link>
              <Link href="/terms" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium">
                Mighty Success Recovery Inc.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-primary-foreground/60">
                &copy; {new Date().getFullYear()} Mighty Success Recovery Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
