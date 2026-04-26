import Link from "next/link"
import { Building2, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const facilities = [
  { name: "Summit County Jail", id: "summit-county" as const },
  { name: "Franklin County Jail", id: "franklin-county" as const },
  { name: "Demo Facility A", id: "demo-a" as const },
]

export default function DemoFacilitySelectPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-10 md:py-14">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
            <Building2 className="h-5 w-5 text-gold" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Select Facility (Demo)
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Mock list only — choose a facility to open its demo dashboard.
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="text-base">Facilities</CardTitle>
            <CardDescription>Click a name to continue</CardDescription>
          </CardHeader>
          <CardContent className="divide-y divide-border p-0">
            {facilities.map((f) => (
              <Link
                key={f.id}
                href={`/facility/${f.id}`}
                className="flex items-center justify-between gap-3 px-4 py-4 text-foreground transition-colors hover:bg-secondary/80"
              >
                <span className="font-medium">{f.name}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
