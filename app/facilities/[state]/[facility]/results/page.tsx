"use client"

import { use, useMemo, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Users, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { US_STATES, getFacilityForState, generateInmatesByLetter, searchInmates, ALPHABET } from "@/lib/data"
import { useCart } from "@/components/cart-provider"
import { OrderSummary } from "@/components/order-summary"

export default function InmateResultsPage({
  params,
  searchParams,
}: {
  params: Promise<{ state: string; facility: string }>
  searchParams: Promise<{ id?: string; lastName?: string; letter?: string }>
}) {
  const { state: stateCode, facility: facilityId } = use(params)
  const { id: searchId, lastName: searchLastName, letter: searchLetter } = use(searchParams)

  const stateUpper = stateCode.toUpperCase()
  const stateName = US_STATES.find((s) => s.code === stateUpper)?.name || stateCode
  const facility = getFacilityForState(stateCode)

  const { selectedState, selectedFacility, setSelectedState, setSelectedFacility } = useCart()

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

  const inmates = useMemo(() => {
    // If letter filter is used, generate inmates by letter
    if (searchLetter && ALPHABET.includes(searchLetter.toUpperCase())) {
      return generateInmatesByLetter(stateCode, searchLetter, 5)
    }

    // If ID search
    if (searchId) {
      return searchInmates(stateCode, searchId, "id")
    }

    // If lastName search
    if (searchLastName) {
      return searchInmates(stateCode, searchLastName, "lastName")
    }

    return []
  }, [stateCode, searchId, searchLastName, searchLetter])

  const searchDescription = searchLetter
    ? `Last names starting with "${searchLetter.toUpperCase()}"`
    : searchId
    ? `ID matching "${searchId}"`
    : searchLastName
    ? `Last name matching "${searchLastName}"`
    : ""

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
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Select the Correct Inmate
              </h1>
              {facility && (
                <p className="mt-2 text-muted-foreground">
                  Results from <span className="font-medium text-foreground">{facility.name}</span>
                </p>
              )}
              {searchDescription && (
                <p className="mt-1 text-sm text-muted-foreground">{searchDescription}</p>
              )}
            </div>

            {/* Alphabet Quick Links */}
            <div className="mb-6 flex flex-wrap gap-1 justify-center lg:justify-start">
              {ALPHABET.map((letter) => (
                <Link
                  key={letter}
                  href={`/facilities/${stateCode}/${facilityId}/results?letter=${letter}`}
                  className={`w-8 h-8 flex items-center justify-center text-sm rounded border transition-colors ${
                    searchLetter?.toUpperCase() === letter
                      ? "bg-gold text-gold-foreground border-gold"
                      : "border-border hover:border-gold hover:text-gold"
                  }`}
                >
                  {letter}
                </Link>
              ))}
            </div>

            {/* Results */}
            {inmates.length > 0 ? (
              <Card className="border-border overflow-hidden">
                <CardHeader className="bg-secondary border-b border-border">
                  <CardTitle className="text-base">
                    {inmates.length} Inmate{inmates.length !== 1 ? "s" : ""} Found
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold">Inmate ID</TableHead>
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="font-semibold">Gender</TableHead>
                          <TableHead className="font-semibold">DOB</TableHead>
                          <TableHead className="font-semibold text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inmates.map((inmate) => (
                          <TableRow key={inmate.id} className="hover:bg-secondary/50">
                            <TableCell className="font-mono text-sm">{inmate.id}</TableCell>
                            <TableCell className="font-medium">
                              {inmate.lastName}, {inmate.firstName}
                            </TableCell>
                            <TableCell>{inmate.gender}</TableCell>
                            <TableCell>
                              {new Date(inmate.dob).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                asChild
                                size="sm"
                                className="bg-gold text-gold-foreground hover:bg-gold/90"
                              >
                                <Link
                                  href={`/facilities/${stateCode}/${facilityId}/confirm/${encodeURIComponent(inmate.id)}`}
                                >
                                  <UserCheck className="mr-1 h-4 w-4" />
                                  Select
                                </Link>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border">
                <CardContent className="py-12 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold text-foreground">No Inmates Found</h3>
                  <p className="mt-2 text-muted-foreground">
                    No inmates match your search criteria. Try selecting a letter above.
                  </p>
                  <Button
                    asChild
                    className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90"
                  >
                    <Link href={`/facilities/${stateCode}/${facilityId}/search`}>
                      Try Different Search
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
