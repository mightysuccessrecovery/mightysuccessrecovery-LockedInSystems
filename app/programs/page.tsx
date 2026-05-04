import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Programs — Mighty Success Recovery Inc.",
  description:
    "Recovery-oriented programs and structured financial access services operated by Mighty Success Recovery Inc.",
}

export default function ProgramsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F2A44] sm:text-4xl">Programs</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Mighty Success Recovery Inc. combines nonprofit program investments with secure operational
          services (DBA LockedIn Systems) so families can send funds while donors strengthen community
          outcomes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Recovery &amp; reentry support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Donor-supported initiatives help sustain transitional housing navigation, structured
                accountability programming, and family-stability resources aligned with our mission.
              </p>
              <Button asChild className="mt-2 bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90">
                <Link href="/donate">Donate to programs</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Secure fund transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Our deposit pathway uses transparent fees, optional ACH-first checkout, and documented
                policies suitable for institutional and government-facing reviews.
              </p>
              <Button asChild variant="outline" className="mt-2 border-[#0F2A44]/30 text-[#0F2A44]">
                <Link href="/send-funds">Send funds</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Commissary &amp; facility workflows</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl">
                Existing commissary browsing, facility lookup, and deposit flows remain available for
                authorized users. These tools are designed for operational transparency and audit-ready
                reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="secondary" size="sm">
                  <Link href="/store">Commissary</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/deposit">Guided deposit</Link>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/procurement">Procurement</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
