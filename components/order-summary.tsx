"use client"

import { MapPin, Building2, User, Package, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { calculateFees } from "@/lib/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function OrderSummary() {
  const pathname = usePathname()
  const {
    selectedState,
    selectedFacility,
    selectedInmate,
    selectedPackage,
    clearAll,
  } = useCart()

  // Don't show on home page, checkout page, deposit page, donation page, or certain other pages
  const hiddenPaths = ["/", "/checkout", "/deposit", "/donation", "/support", "/about", "/fees", "/privacy", "/terms", "/legal", "/history"]
  if (hiddenPaths.includes(pathname)) {
    return null
  }

  // Don't show if nothing is selected
  if (!selectedState && !selectedFacility && !selectedInmate && !selectedPackage) {
    return null
  }

  const fees = selectedPackage ? calculateFees(selectedPackage.price) : null

  return (
    <Card className="border-gold/30 bg-gold/5 sticky top-4">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-base flex items-center gap-2">
          <Package className="h-4 w-4 text-gold" />
          Order Summary
        </CardTitle>
        {(selectedState || selectedFacility || selectedInmate || selectedPackage) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        {/* State */}
        <div className="flex items-start gap-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${selectedState ? "bg-gold/20" : "bg-muted"}`}>
            <MapPin className={`h-4 w-4 ${selectedState ? "text-gold" : "text-muted-foreground"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">State</p>
            {selectedState ? (
              <p className="font-medium text-foreground truncate">{selectedState.name}</p>
            ) : (
              <Link href="/facilities" className="text-sm text-gold hover:underline flex items-center gap-1">
                Select State <ChevronRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        </div>

        {/* Facility */}
        <div className="flex items-start gap-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${selectedFacility ? "bg-gold/20" : "bg-muted"}`}>
            <Building2 className={`h-4 w-4 ${selectedFacility ? "text-gold" : "text-muted-foreground"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Facility</p>
            {selectedFacility ? (
              <p className="font-medium text-foreground truncate">{selectedFacility.name}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                {selectedState ? "Select facility" : "Select state first"}
              </p>
            )}
          </div>
        </div>

        {/* Inmate */}
        <div className="flex items-start gap-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${selectedInmate ? "bg-gold/20" : "bg-muted"}`}>
            <User className={`h-4 w-4 ${selectedInmate ? "text-gold" : "text-muted-foreground"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Inmate</p>
            {selectedInmate ? (
              <div>
                <p className="font-medium text-foreground truncate">
                  {selectedInmate.lastName}, {selectedInmate.firstName}
                </p>
                <p className="text-xs text-muted-foreground">ID: {selectedInmate.id}</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {selectedFacility ? "Search for inmate" : "Select facility first"}
              </p>
            )}
          </div>
        </div>

        {/* Package */}
        <div className="flex items-start gap-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${selectedPackage ? "bg-gold/20" : "bg-muted"}`}>
            <Package className={`h-4 w-4 ${selectedPackage ? "text-gold" : "text-muted-foreground"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Package</p>
            {selectedPackage ? (
              <div>
                <p className="font-medium text-foreground truncate">{selectedPackage.name}</p>
                <p className="text-xs text-gold">${selectedPackage.price.toFixed(2)}</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {selectedInmate ? "Select package" : "Select inmate first"}
              </p>
            )}
          </div>
        </div>

        {/* Totals */}
        {selectedPackage && fees && (
          <div className="pt-3 mt-3 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Package</span>
              <span className="font-medium">${selectedPackage.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service Fee</span>
              <span className="font-medium">${fees.serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-gold text-lg">${fees.total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        {selectedInmate && selectedPackage && (
          <Button
            asChild
            className="w-full bg-gold text-gold-foreground hover:bg-gold/90 mt-4"
          >
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
