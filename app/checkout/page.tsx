"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingBag,
  ArrowLeft,
  AlertTriangle,
  CreditCard,
  Calendar,
  User,
  Building2,
  MapPin,
  CheckCircle,
  Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/components/cart-provider"
import { StripeCheckout } from "@/components/stripe-checkout"
import { PhoneVerification } from "@/components/phone-verification"
import { startCommissaryCheckout } from "@/app/actions/stripe"
import { calculateFees, getDeliveryDate, formatDate } from "@/lib/data"

export default function CheckoutPage() {
  const { selectedPackage, selectedInmate, clearSelection } = useCart()
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [verifiedPhone, setVerifiedPhone] = useState("")
  const [showPayment, setShowPayment] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

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

  if (isComplete) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="py-12 text-center">
              <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h3 className="text-2xl font-bold text-foreground">Order Confirmed!</h3>
              <p className="mt-2 text-muted-foreground">
                Your commissary order for {selectedInmate.firstName} {selectedInmate.lastName} has been placed successfully.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                A confirmation email will be sent to your email address.
              </p>
              <Button
                asChild
                className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90"
                onClick={() => clearSelection()}
              >
                <Link href="/">Return Home</Link>
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

  const handlePhoneVerified = (phone: string) => {
    setIsPhoneVerified(true)
    setVerifiedPhone(phone)
  }

  const handleProceedToPayment = () => {
    if (isPhoneVerified) {
      // If package has a Stripe payment link, redirect directly to Stripe
      if (selectedPackage.paymentLink) {
        window.location.href = selectedPackage.paymentLink
      } else {
        // Fallback to embedded checkout
        setShowPayment(true)
      }
    }
  }

  const fetchClientSecret = async () => {
    const secret = await startCommissaryCheckout(
      [
        {
          id: selectedPackage.id,
          name: selectedPackage.name,
          price: selectedPackage.price,
          quantity: 1,
        },
      ],
      {
        inmateId: selectedInmate.id,
        inmateName: `${selectedInmate.firstName} ${selectedInmate.lastName}`,
        facility: selectedInmate.facility,
        state: selectedInmate.state,
        phone: verifiedPhone,
        packageName: selectedPackage.name,
      }
    )
    return secret
  }

  if (showPayment) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 -ml-2"
            onClick={() => setShowPayment(false)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Order Summary
          </Button>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Complete Payment</h1>
            <p className="mt-2 text-muted-foreground">
              Ordering for {selectedInmate.firstName} {selectedInmate.lastName} at {selectedInmate.facility}
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <StripeCheckout fetchClientSecret={fetchClientSecret} />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/store">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Link>
        </Button>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Checkout</h1>
              <p className="mt-2 text-muted-foreground">Review your order before payment</p>
            </div>

            {/* Phone Verification */}
            {!isPhoneVerified ? (
              <div className="mb-6">
                <PhoneVerification
                  onVerified={handlePhoneVerified}
                  title="Phone Verification Required"
                  description="For your security, please verify your phone number before completing your order."
                />
              </div>
            ) : (
              <Alert className="mb-6 border-green-500/50 bg-green-500/10">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-foreground">
                  Phone verified: {verifiedPhone}
                </AlertDescription>
              </Alert>
            )}

            {/* Order Item */}
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

            {/* Notice */}
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

          {/* Order Summary Sidebar */}
          <div className="lg:w-96 lg:shrink-0">
            <Card className="border-border sticky top-24">
              <CardHeader className="border-b border-border bg-secondary">
                <CardTitle className="text-base">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                {/* Order Details */}
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

                {/* Inmate Details */}
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

                {/* Pricing */}
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

                {/* Checkout Button */}
                <Button
                  onClick={handleProceedToPayment}
                  disabled={!isPhoneVerified}
                  className="w-full mt-6 bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Payment
                </Button>

                {!isPhoneVerified && (
                  <p className="mt-2 text-xs text-center text-destructive">
                    Phone verification required
                  </p>
                )}

                <p className="mt-3 text-xs text-center text-muted-foreground">
                  Secure payment processing via Stripe
                </p>
                <p className="mt-2 text-xs text-center text-muted-foreground">
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
