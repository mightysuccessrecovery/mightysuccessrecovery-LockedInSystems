"use client"

import { useState, useMemo } from "react"
import { Search, MapPin, Building2, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { US_STATES, getFacilityForState } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { OrderSummary } from "@/components/order-summary"
import { useRouter } from "next/navigation"

// Generate all facilities from all states
const ALL_FACILITIES = US_STATES.map((state) => {
  const facility = getFacilityForState(state.code)
  return {
    ...facility,
    stateCode: state.code,
    stateName: state.name,
  }
})

export default function FacilitiesPage() {
  const [search, setSearch] = useState("")
  const [searchMode, setSearchMode] = useState<"state" | "facility">("state")
  const router = useRouter()
  const { setSelectedState, setSelectedFacility, setSelectedInmate, setSelectedPackage } = useCart()

  const filteredStates = useMemo(() => {
    if (!search) return US_STATES
    const searchLower = search.toLowerCase()
    return US_STATES.filter(
      (state) =>
        state.name.toLowerCase().includes(searchLower) ||
        state.code.toLowerCase().includes(searchLower)
    )
  }, [search])

  const filteredFacilities = useMemo(() => {
    if (!search) return ALL_FACILITIES
    const searchLower = search.toLowerCase()
    return ALL_FACILITIES.filter(
      (facility) =>
        facility.name.toLowerCase().includes(searchLower) ||
        facility.stateName.toLowerCase().includes(searchLower) ||
        facility.stateCode.toLowerCase().includes(searchLower)
    )
  }, [search])

  const handleStateSelect = (state: { code: string; name: string }) => {
    // Clear previous selections when selecting a new state
    setSelectedFacility(null)
    setSelectedInmate(null)
    setSelectedPackage(null)
    // Set the new state
    setSelectedState({ code: state.code, name: state.name })
    router.push(`/facilities/${state.code.toLowerCase()}`)
  }

  const handleFacilitySelect = (facility: typeof ALL_FACILITIES[0]) => {
    // Clear previous selections
    setSelectedInmate(null)
    setSelectedPackage(null)
    // Set state and facility
    setSelectedState({ code: facility.stateCode, name: facility.stateName })
    setSelectedFacility({ id: facility.id, name: facility.name, address: facility.address ?? "" })
    router.push(`/facilities/${facility.stateCode.toLowerCase()}/${facility.id}/search`)
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div>
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <div className="mx-auto lg:mx-0 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                {searchMode === "state" ? (
                  <MapPin className="h-6 w-6 text-gold" />
                ) : (
                  <Building2 className="h-6 w-6 text-gold" />
                )}
              </div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                {searchMode === "state" ? "Select State" : "Search Facilities"}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {searchMode === "state"
                  ? "Choose a state to find correctional facilities"
                  : "Search for a facility by name or location"}
              </p>
            </div>

            {/* Search Mode Toggle */}
            <div className="mb-6 flex gap-2">
              <Button
                variant={searchMode === "state" ? "default" : "outline"}
                onClick={() => {
                  setSearchMode("state")
                  setSearch("")
                }}
                className={searchMode === "state" ? "bg-gold text-gold-foreground hover:bg-gold/90" : ""}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Search by State
              </Button>
              <Button
                variant={searchMode === "facility" ? "default" : "outline"}
                onClick={() => {
                  setSearchMode("facility")
                  setSearch("")
                }}
                className={searchMode === "facility" ? "bg-gold text-gold-foreground hover:bg-gold/90" : ""}
              >
                <Building2 className="mr-2 h-4 w-4" />
                Search by Facility
              </Button>
            </div>

            {/* Search Input */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={searchMode === "state" ? "Search states..." : "Search facilities by name or state..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* States Grid */}
            {searchMode === "state" && (
              <>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredStates.map((state) => (
                    <Card 
                      key={state.code} 
                      onClick={() => handleStateSelect(state)}
                      className="cursor-pointer border-border transition-all hover:border-gold hover:shadow-md"
                    >
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-sm font-semibold text-foreground">
                            {state.code}
                          </div>
                          <span className="font-medium text-foreground">{state.name}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredStates.length === 0 && (
                  <Card className="border-border">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">No states found matching your search.</p>
                    </CardContent>
                  </Card>
                )}
              </>
            )}

            {/* Facilities Grid */}
            {searchMode === "facility" && (
              <>
                <div className="space-y-3">
                  {filteredFacilities.map((facility) => (
                    <Card 
                      key={facility.id} 
                      onClick={() => handleFacilitySelect(facility)}
                      className="cursor-pointer border-border transition-all hover:border-gold hover:shadow-md"
                    >
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                            <Building2 className="h-6 w-6 text-gold" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{facility.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {facility.stateName} ({facility.stateCode})
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredFacilities.length === 0 && (
                  <Card className="border-border">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">No facilities found matching your search.</p>
                    </CardContent>
                  </Card>
                )}
              </>
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
