import type { Metadata } from "next"
import { FacilityLookup } from "@/components/facility-lookup"

export const metadata: Metadata = {
  title: "Agency/Facility Lookup — LockedIn Systems",
  description:
    "Look up correctional facilities and agencies to see fees, timing, service availability, and contact information.",
}

export default function FacilityLookupPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FacilityLookup />
      </div>
    </div>
  )
}
