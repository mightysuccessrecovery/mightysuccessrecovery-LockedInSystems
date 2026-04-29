"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingBag,
  ArrowLeft,
  AlertTriangle,
  Calendar,
  User,
  Building2,
  MapPin,
  Package,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"
import { calculateFees, getDeliveryDate, formatDate } from "@/lib/data"
import { STRIPE_LINKS } from "@/lib/stripeLinks"
import { cn } from "@/lib/utils"

function isValidEmail(value: string) {
  const v = value.trim()
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "")
}

/** US-style: 10 digits or 11 starting with 1 */
function isValidPhone(value: string) {
  const d = digitsOnly(value)
  return d.length === 10 || (d.length === 11 && d.startsWith("1"))
}

export default function CheckoutPage() {
  const { selectedPackage, selectedInmate } = useCart()
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const canProceed =
    customerName.trim().length > 0 &&
    isValidEmail(customerEmail) &&
    isValidPhone(customerPhone)

  if (!selectedInmate || !selectedPackage) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="py-12 text-center">
              <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="text-lg font-semibold text-foreground">No Package Selected</h3>
              <p className="mt-2 text-muted-foreground">
                {!selectedInmate
                  ? "Please select an inmate and choose a package."
                  : "Please select a commissary package before checking out."}
              </p>
              <Button asChild className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90">
                <Link href={!selectedInmate ? "/facilities" : "/store"}>
                  {!selectedInmate ? "Find Inmate" : "Browse Packages"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const deliveryDate = getDeliveryDate()
  const fees = calculateFees(selectedPackage.price)
  const orderDate = new Date()

  const commissaryPaymentHref =
    selectedPackage.paymentLink ?? STRIPE_LINKS.checkout.url

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/store">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Commissary Services
          </Link>
        </Button>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Checkout</h1>
              <p className="mt-2 text-muted-foreground">Review your order before payment</p>
            </div>

            <Card className="border-border mb-6">
              <CardHeader className="border-b border-border bg-secondary">
                <CardTitle className="text-base flex items-center gap-2">
                  <User className="h-5 w-5 text-gold" />
                  Your information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="checkout-name">Name</Label>
                  <Input
                    id="checkout-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    autoComplete="name"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout-email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="checkout-email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout-phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Phone number
                  </Label>
                  <Input
                    id="checkout-phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(555) 123-4567"
                  />
                  {customerPhone.trim().length > 0 && !isValidPhone(customerPhone) && (
                    <p className="text-sm text-destructive">
                      Enter a valid 10-digit U.S. phone number
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mb-6">
              <CardHeader className="border-b border-border bg-secondary">
                <CardTitle className="text-base flex items-center gap-2">
                  <Package className="h-5 w-5 text-gold" />
                  Selected Package
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-foreground">{selectedPackage.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedPackage.description}
                    </p>
                  </div>
                  <span className="font-semibold text-gold text-lg">
                    ${selectedPackage.price.toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Alert className="border-gold/50 bg-gold/10">
              <AlertTriangle className="h-4 w-4 text-gold" />
              <AlertTitle className="text-foreground font-semibold">
                Notice of Delivery
              </AlertTitle>
              <AlertDescription className="text-muted-foreground mt-2">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Some packages may be delayed due to facility restrictions or holidays</li>
                  <li>Orders are not delivered until the scheduled date</li>
                  <li>No refunds will be issued once an order is placed</li>
                  <li>
                    Do not order if the inmate may be released before the estimated delivery date
                  </li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <div className="lg:w-96 lg:shrink-0">
            <Card className="border-border sticky top-24">
              <CardHeader className="border-b border-border bg-secondary">
                <CardTitle className="text-base">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">State</p>
                      <p className="font-medium text-foreground">{selectedInmate.state}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Facility</p>
                      <p className="font-medium text-foreground">{selectedInmate.facility}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Order Date</p>
                      <p className="font-medium text-foreground">{formatDate(orderDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Estimated Delivery</p>
                      <p className="font-medium text-foreground">{formatDate(deliveryDate)}</p>
                    </div>
                  </div>
                </div>

                <div className="py-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Inmate</p>
                      <p className="font-medium text-foreground">
                        {selectedInmate.lastName}, {selectedInmate.firstName}
                      </p>
                      <p className="text-sm text-muted-foreground">ID: {selectedInmate.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedInmate.gender} - DOB:{" "}
                        {new Date(selectedInmate.dob).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Package Price</span>
                    <span className="font-medium">${selectedPackage.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="font-medium">${fees.serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-bold text-gold text-xl">${fees.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-[30px] text-center">
                  <p className="mb-4 text-[14px] leading-relaxed text-[#6b7280]">
                    Secure payment processing via Stripe. See{" "}
                    <Link href="/fees" className="text-[#6b7280] underline underline-offset-2 hover:text-foreground">
                      fee schedule
                    </Link>{" "}
                    for details.
                  </p>

                  {canProceed ? (
                    <a
                      href={commissaryPaymentHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex cursor-pointer items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#635BFF_0%,#4F46E5_100%)] px-[28px] py-4 text-base font-semibold tracking-[0.3px] text-white no-underline shadow-[0_8px_20px_rgba(99,91,255,0.25)] transition-all duration-200 ease-in-out",
                        "hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(99,91,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#635BFF]",
                      )}
                    >
                      Proceed to Payment
                    </a>
                  ) : (
                    <div
                      aria-disabled
                      className={cn(
                        "inline-flex cursor-not-allowed items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(99,91,255,0.45)_0%,rgba(79,70,229,0.45)_100%)] px-[28px] py-4 text-base font-semibold tracking-[0.3px] text-white opacity-90 shadow-[0_8px_20px_rgba(99,91,255,0.15)]",
                      )}
                    >
                      Proceed to Payment
                    </div>
                  )}
                </div>

                {!canProceed && (
                  <p className="mt-4 text-xs text-center text-destructive">
                    Enter your name, a valid email, and phone number to continue
                  </p>
                )}

                <p className="mt-4 text-xs text-center text-muted-foreground">
                  Payments processed on behalf of Mighty Success Recovery Inc.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
