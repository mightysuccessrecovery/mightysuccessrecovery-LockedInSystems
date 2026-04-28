"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const supportLinks = [
  { href: "/support", label: "Support" },
  {
    href: "/support/payment-inquiry",
    label: "Payment & Transaction Support Inquiry",
  },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "Facilities" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About / Mission" },
  { href: "/deposit", label: "Deposit Access" },
  { href: "/commissary", label: "Commissary Access" },
  { href: "/procurement", label: "Procurement" },
]

const legalLinks = [
  { href: "/legal", label: "Legal & Compliance" },
  { href: "/privacy", label: "Privacy Statement" },
  { href: "/terms", label: "Terms & Conditions" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      {/* SSL Security Mini Banner */}
      <div className="bg-emerald-600 py-1.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-white text-xs">
            <Lock className="h-3 w-3" />
            <span>SSL Secured | 256-bit Encryption</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/images/lockedin-logo.png"
                  alt="LockedIn Systems Logo"
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-gold/30 group-hover:ring-gold/50 transition-all"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-foreground group-hover:text-gold transition-colors">LockedIn Systems</p>
                <p className="text-xs text-muted-foreground">operated by Mighty Success Recovery Inc.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden flex-wrap items-center gap-6 text-sm lg:flex">
              {navLinks.map((link) =>
                link.href === "/support" ? (
                  <div key={link.href} className="group relative">
                    <Link
                      href="/support"
                      className="text-gray-700 transition-colors hover:text-[#0F2A44]"
                    >
                      Support
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 mt-2 w-80 rounded-lg border border-border bg-white p-2 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <Link
                        href="/support/payment-inquiry"
                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-[#0F2A44]"
                      >
                        Payment &amp; Transaction Support Inquiry
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 transition-colors hover:text-[#0F2A44]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background lg:hidden shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.href === "/support" ? (
                  <li key={link.href}>
                    <Link
                      href="/support"
                      className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gold/10 hover:text-[#0F2A44]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Support
                    </Link>
                    <div className="mb-1 pl-3">
                      {supportLinks
                        .filter((l) => l.href !== "/support")
                        .map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gold/10 hover:text-[#0F2A44]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {s.label}
                          </Link>
                        ))}
                    </div>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gold/10 hover:text-[#0F2A44]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
              <li className="my-2 border-t border-border pt-3">
                <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Legal</p>
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
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
