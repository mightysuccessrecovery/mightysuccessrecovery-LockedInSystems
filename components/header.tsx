"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "Facilities" },
  { href: "/deposit", label: "Deposit Money" },
  { href: "/store", label: "Commissary Services" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
  { href: "/fees", label: "Fees" },
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

      {/* Platform Positioning Banner */}
      <div className="border-b border-border bg-secondary/60 py-2.5 sm:py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-5xl text-center text-xs text-muted-foreground leading-snug sm:text-sm">
            We provide a secure platform that supports commissary services, deposits, and approved
            support services for individuals in correctional facilities and their families.
          </p>
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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className="inline-flex h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-gold/10 hover:text-gold focus:bg-gold/10 focus:text-gold focus:outline-none"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
