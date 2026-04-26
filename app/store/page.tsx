"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ShoppingBag, AlertTriangle, User, Check, Package, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getPackagesForFacility, calculateFees } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { OrderSummary } from "@/components/order-summary"

export default function StorePage() {
  const router = useRouter()
  const { selectedState, selectedFacility, selectedInmate, selectedPackage, setSelectedPackage } = useCart()
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null)

  // Get facility-specific packages
  const availablePackages = useMemo(() => {
    if (selectedState && selectedFacility) {
      return getPackagesForFacility(selectedState.code, selectedFacility.id)
    }
    return []
  }, [selectedState, selectedFacility])

  const handleSelectPackage = (pkg: typeof availablePackages[0]) => {
    setSelectedPackage({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      description: pkg.description,
      image: pkg.image,
      paymentLink: pkg.paymentLink,
      priceId: pkg.priceId,
    })
  }

  const handleProceedToCheckout = () => {
    if (selectedPackage && selectedInmate) {
      // If package has a Stripe payment link, redirect directly to Stripe
      if (selectedPackage.paymentLink) {
        window.location.href = selectedPackage.paymentLink
      } else {
        // Fallback to embedded checkout
        router.push("/checkout")
      }
    }
  }

  const fees = selectedPackage ? calculateFees(selectedPackage.price) : null

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto lg:mx-0 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <ShoppingBag className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Commissary Store
              </h1>
              <p className="mt-2 text-muted-foreground">
                Select one package for your loved one
              </p>
            </div>

            {/* Inmate Selection Warning */}
            {!selectedInmate ? (
              <Alert className="mb-8 border-gold/50 bg-gold/10">
                <AlertTriangle className="h-4 w-4 text-gold" />
                <AlertDescription className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-foreground">
                    Please select an inmate before shopping.
                  </span>
                  <Button
                    asChild
                    size="sm"
                    className="bg-gold text-gold-foreground hover:bg-gold/90"
                  >
                    <Link href="/facilities">
                      <User className="mr-2 h-4 w-4" />
                      Find Inmate
                    </Link>
                  </Button>
                </AlertDescription>
              </Alert>
            ) : (
              <Card className="mb-6 border-border bg-secondary">
                <CardContent className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                      <User className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {selectedInmate.lastName}, {selectedInmate.firstName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedInmate.facility} | ID: {selectedInmate.id}
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/facilities">Change</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Facility-specific notice */}
            {selectedFacility && (
              <Alert className="mb-6 border-border bg-secondary">
                <Info className="h-4 w-4 text-gold" />
                <AlertDescription className="text-foreground">
                  <strong>Facility-Specific Items:</strong> The packages below are approved for{" "}
                  <span className="font-medium">{selectedFacility.name}</span>. Each facility has
                  different allowed items based on their commissary rules.
                </AlertDescription>
              </Alert>
            )}

            {/* Important Notice */}
            <Alert className="mb-6 border-border bg-secondary">
              <Package className="h-4 w-4 text-gold" />
              <AlertDescription className="text-foreground">
                <strong>One item per order.</strong> Select a package below, then proceed to checkout.
              </AlertDescription>
            </Alert>

            {/* Packages Grid */}
            {availablePackages.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {availablePackages.map((pkg) => {
                  const isSelected = selectedPackage?.id === pkg.id
                  const isHovered = hoveredPackage === pkg.id

                  return (
                    <Card
                      key={pkg.id}
                      onClick={() => selectedInmate && handleSelectPackage(pkg)}
                      onMouseEnter={() => setHoveredPackage(pkg.id)}
                      onMouseLeave={() => setHoveredPackage(null)}
                      className={`cursor-pointer transition-all overflow-hidden ${
                        isSelected
                          ? "border-gold ring-2 ring-gold/20 bg-gold/5"
                          : isHovered && selectedInmate
                          ? "border-gold/50"
                          : "border-border"
                      } ${!selectedInmate ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      {/* Package Image */}
                      <div className="relative h-40 w-full overflow-hidden bg-secondary">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold shadow-lg">
                            <Check className="h-5 w-5 text-gold-foreground" />
                          </div>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-base">
                              {pkg.name}
                            </CardTitle>
                            <CardDescription className="mt-1">{pkg.description}</CardDescription>
                          </div>
                          <span className="text-xl font-bold text-gold ml-4">
                            ${pkg.price.toFixed(2)}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button
                          size="sm"
                          disabled={!selectedInmate}
                          className={
                            isSelected
                              ? "bg-gold text-gold-foreground hover:bg-gold/90 w-full"
                              : "bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                          }
                        >
                          {isSelected ? "Selected" : "Select Package"}
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <Card className="border-border">
                <CardContent className="py-12 text-center">
                  <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold text-foreground">No Packages Available</h3>
                  <p className="mt-2 text-muted-foreground">
                    Please select a facility first to see available packages.
                  </p>
                  <Button
                    asChild
                    className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90"
                  >
                    <Link href="/facilities">Select Facility</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Mobile Checkout Button */}
            {selectedPackage && selectedInmate && (
              <div className="mt-8 lg:hidden">
                <Card className="border-gold/30 bg-gold/5">
                  <CardContent className="py-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Package</span>
                      <span className="font-medium">{selectedPackage.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-medium">${selectedPackage.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span className="font-medium">${fees?.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-gold text-lg">${fees?.total.toFixed(2)}</span>
                    </div>
                    <Button
                      onClick={handleProceedToCheckout}
                      className="w-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
                    >
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="hidden lg:block">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
