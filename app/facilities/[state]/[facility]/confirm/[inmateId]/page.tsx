"use client"

import { use, useMemo, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, UserCheck, AlertTriangle, ShoppingBag, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { US_STATES, getFacilityForState, searchInmates } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { OrderSummary } from "@/components/order-summary"

export default function InmateConfirmPage({
  params,
}: {
  params: Promise<{ state: string; facility: string; inmateId: string }>
}) {
  const { state: stateCode, facility: facilityId, inmateId: encodedInmateId } = use(params)
  const router = useRouter()
  const { selectedState, selectedFacility, setSelectedState, setSelectedFacility, setSelectedInmate } = useCart()

  const inmateId = decodeURIComponent(encodedInmateId)
  const stateUpper = stateCode.toUpperCase()
  const stateName = US_STATES.find((s) => s.code === stateUpper)?.name || stateCode
  const facility = getFacilityForState(stateCode)

  // Set state and facility in context if not already set
  useEffect(() => {
    if (!selectedState || selectedState.code !== stateUpper) {
      setSelectedState({ code: stateUpper, name: stateName })
    }
    if (!selectedFacility || selectedFacility.id !== facility.id) {
      setSelectedFacility({
        id: facility.id,
        name: facility.name,
        address: facility.address,
      })
    }
  }, [selectedState, selectedFacility, stateUpper, stateName, facility, setSelectedState, setSelectedFacility])

  // Generate the inmate dynamically based on ID
  const inmate = useMemo(() => {
    const results = searchInmates(stateCode, inmateId, "id")
    return results[0] || null
  }, [stateCode, inmateId])

  const handleConfirmForStore = () => {
    if (inmate && facility) {
      setSelectedInmate({
        id: inmate.id,
        firstName: inmate.firstName,
        lastName: inmate.lastName,
        gender: inmate.gender,
        dob: inmate.dob,
        facility: facility.name,
        state: stateName,
      })
      router.push("/store")
    }
  }

  const handleConfirmForDeposit = () => {
    if (inmate && facility) {
      setSelectedInmate({
        id: inmate.id,
        firstName: inmate.firstName,
        lastName: inmate.lastName,
        gender: inmate.gender,
        dob: inmate.dob,
        facility: facility.name,
        state: stateName,
      })
      router.push("/deposit")
    }
  }

  if (!inmate || !facility) {
    return (
      <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="py-12 text-center">
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />
              <h3 className="text-lg font-semibold text-foreground">Inmate Not Found</h3>
              <p className="mt-2 text-muted-foreground">
                The requested inmate could not be found.
              </p>
              <Button asChild className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90">
                <Link href="/facilities">Start Over</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6 -ml-2">
              <Link href={`/facilities/${stateCode}/${facilityId}/search`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Search
              </Link>
            </Button>

            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto lg:mx-0 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <UserCheck className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Confirm Inmate</h1>
              <p className="mt-2 text-muted-foreground">
                Please verify this is the correct individual
              </p>
            </div>

            {/* Inmate Details Card */}
            <Card className="border-border mb-6">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-base">Inmate Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Inmate ID</dt>
                    <dd className="font-mono font-medium text-foreground">{inmate.id}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Name</dt>
                    <dd className="font-medium text-foreground">
                      {inmate.lastName}, {inmate.firstName}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Gender</dt>
                    <dd className="font-medium text-foreground">{inmate.gender}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Date of Birth</dt>
                    <dd className="font-medium text-foreground">
                      {new Date(inmate.dob).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Facility</dt>
                    <dd className="font-medium text-foreground">{facility.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">State</dt>
                    <dd className="font-medium text-foreground">{stateName}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Warning */}
            <Alert className="mb-6 border-gold/50 bg-gold/10">
              <AlertTriangle className="h-4 w-4 text-gold" />
              <AlertDescription className="text-foreground">
                <strong>Please verify before continuing.</strong> All orders are final and
                non-refundable. Ensure this is the correct inmate before proceeding.
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleConfirmForStore}
                className="flex-1 bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Confirm & Shop Commissary
              </Button>
              <Button
                onClick={handleConfirmForDeposit}
                variant="outline"
                className="flex-1 h-12 text-base border-gold text-gold hover:bg-gold/10"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Confirm & Deposit Money
              </Button>
            </div>
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
