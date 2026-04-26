import { use } from "react"
import { Building2, Package, Banknote, Headphones } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function FacilityDashboardPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id: facilityId } = use(params)

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 text-gold" />
            <span>Facility ID</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Facility Dashboard</h1>
          <p className="mt-2 font-mono text-sm text-foreground/90 sm:text-base">{facilityId}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border">
            <CardHeader className="border-b border-border bg-secondary">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-gold" />
                <CardTitle className="text-base">Commissary Activity</CardTitle>
              </div>
              <CardDescription>Demo summary for this facility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4 text-sm text-muted-foreground">
              <p>Orders (demo): 12 this week</p>
              <p>Last order: 2 days ago</p>
              <p>Status: All deliveries on schedule (static placeholder)</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="border-b border-border bg-secondary">
              <div className="flex items-center gap-2">
                <Banknote className="h-5 w-5 text-gold" />
                <CardTitle className="text-base">Deposit Activity</CardTitle>
              </div>
              <CardDescription>Demo summary for this facility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4 text-sm text-muted-foreground">
              <p>Deposits (demo): 28 this month</p>
              <p>Total volume: $4,200 (illustrative)</p>
              <p>Status: No flags (static placeholder)</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="border-b border-border bg-secondary">
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-gold" />
                <CardTitle className="text-base">Support Requests</CardTitle>
              </div>
              <CardDescription>Demo summary for this facility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4 text-sm text-muted-foreground">
              <p>Open (demo): 3 tickets</p>
              <p>Resolved (demo): 14 this month</p>
              <p>Avg response: 24h (static placeholder)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
