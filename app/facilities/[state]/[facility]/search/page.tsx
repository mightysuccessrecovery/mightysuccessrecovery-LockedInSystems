"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { US_STATES, getFacilityForState, ALPHABET } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { OrderSummary } from "@/components/order-summary"

export default function InmateSearchPage({
  params,
}: {
  params: Promise<{ state: string; facility: string }>
}) {
  const { state: stateCode, facility: facilityId } = use(params)
  const router = useRouter()

  const stateUpper = stateCode.toUpperCase()
  const stateName = US_STATES.find((s) => s.code === stateUpper)?.name || stateCode
  const facility = getFacilityForState(stateCode)

  const { selectedState, selectedFacility, setSelectedState, setSelectedFacility } = useCart()

  const [inmateId, setInmateId] = useState("")
  const [lastName, setLastName] = useState("")
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

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

  const handleSearch = () => {
    const searchParams = new URLSearchParams()
    if (inmateId) searchParams.set("id", inmateId)
    if (lastName) searchParams.set("lastName", lastName)
    router.push(`/facilities/${stateCode}/${facilityId}/results?${searchParams.toString()}`)
  }

  const handleLetterSelect = (letter: string) => {
    setSelectedLetter(letter)
    router.push(`/facilities/${stateCode}/${facilityId}/results?letter=${letter}`)
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6 -ml-2">
              <Link href={`/facilities/${stateCode}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Facilities
              </Link>
            </Button>

            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto lg:mx-0 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <Search className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Search Inmate</h1>
              {facility && (
                <p className="mt-2 text-muted-foreground">
                  at <span className="font-medium text-foreground">{facility.name}</span>
                </p>
              )}
            </div>

            {/* A-Z Alphabet Filter */}
            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Browse by Last Name</CardTitle>
                <CardDescription>
                  Click a letter to see inmates whose last name starts with that letter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {ALPHABET.map((letter) => (
                    <Button
                      key={letter}
                      variant={selectedLetter === letter ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleLetterSelect(letter)}
                      className={
                        selectedLetter === letter
                          ? "bg-gold text-gold-foreground hover:bg-gold/90 w-9 h-9"
                          : "w-9 h-9 hover:border-gold hover:text-gold"
                      }
                    >
                      {letter}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Or Search Form */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or search directly</span>
              </div>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Search by ID or Name</CardTitle>
                <CardDescription>
                  Enter Inmate ID or Last Name. You may leave fields blank if unknown.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="inmateId">Inmate ID</Label>
                  <Input
                    id="inmateId"
                    type="text"
                    placeholder={`e.g., ${stateUpper}-1234`}
                    value={inmateId}
                    onChange={(e) => setInmateId(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-xs text-muted-foreground">Format: {stateUpper}-0000</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="e.g., Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-xs text-muted-foreground">Leave blank if you entered ID</p>
                </div>

                <Button
                  onClick={handleSearch}
                  disabled={!inmateId && !lastName}
                  className="w-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 text-base"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Search Inmates
                </Button>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-6 border-border bg-secondary">
              <CardContent className="py-4">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Need Help?</strong> If you cannot find the inmate,
                  please contact{" "}
                  <Link href="/support" className="text-gold hover:underline">
                    support
                  </Link>
                  .
                </p>
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
