"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/send-funds", label: "Send Funds" },
  { href: "/donate", label: "Donate" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
]

const footerLegalMobile = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/deposit-policy", label: "Deposits" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="bg-emerald-600 py-1.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white text-xs">
            <Lock className="h-3 w-3 shrink-0" aria-hidden />
            <span>SSL secured · 256-bit encryption · Payments powered by Stripe</span>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/images/lockedin-logo.png"
                  alt="Mighty Success Recovery Inc. — LockedIn Systems"
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-gold/30 transition-all group-hover:ring-gold/50"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-foreground transition-colors group-hover:text-[#0F2A44]">
                  Mighty Success Recovery Inc.
                </p>
                <p className="text-xs text-muted-foreground">DBA LockedIn Systems · 501(c)(3)</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-[#0F2A44]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-gold/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-background shadow-lg lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm text-foreground transition-colors hover:bg-gold/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="my-2 border-t border-border pt-3">
                <p className="px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Quick legal
                </p>
                {footerLegalMobile.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-gold/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
