"use client"

import { use, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Building2, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { US_STATES, getFacilityForState } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { OrderSummary } from "@/components/order-summary"

export default function StateFacilitiesPage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateCode } = use(params)
  const router = useRouter()
  const stateUpper = stateCode.toUpperCase()
  const stateName = US_STATES.find((s) => s.code === stateUpper)?.name || stateCode
  const facility = getFacilityForState(stateCode)
  
  const { selectedState, setSelectedState, setSelectedFacility, setSelectedInmate, setSelectedPackage } = useCart()

  // Set state in context if not already set
  useEffect(() => {
    if (!selectedState || selectedState.code !== stateUpper) {
      setSelectedState({ code: stateUpper, name: stateName })
    }
  }, [selectedState, stateUpper, stateName, setSelectedState])

  const handleFacilitySelect = () => {
    // Clear previous selections
    setSelectedInmate(null)
    setSelectedPackage(null)
    // Set facility
    setSelectedFacility({
      id: facility.id,
      name: facility.name,
      address: facility.address,
    })
    router.push(`/facilities/${stateCode}/${facility.id}/search`)
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6 -ml-2">
              <Link href="/facilities">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to States
              </Link>
            </Button>

            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto lg:mx-0 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <Building2 className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Select Facility</h1>
              <p className="mt-2 text-muted-foreground">
                Facility in <span className="font-medium text-foreground">{stateName}</span>
              </p>
            </div>

            {/* Single Facility */}
            <Card 
              onClick={handleFacilitySelect}
              className="cursor-pointer border-border transition-all hover:border-gold hover:shadow-md"
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                    <Building2 className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{facility.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {facility.address}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
              </CardContent>
            </Card>
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
