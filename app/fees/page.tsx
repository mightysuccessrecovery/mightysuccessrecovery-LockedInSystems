import { Receipt, Calculator, Info, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FeesPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <Receipt className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            LockedIn Systems Transaction Fees
          </h1>
          <p className="mt-2 text-muted-foreground">
            Transparent, simple pricing for all transactions
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Mighty Success Recovery Inc.
          </p>
        </div>

        {/* How Fees Work */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5 text-gold" />
              How Fees Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-secondary p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Simple Fee Formula:</p>
              <p className="text-lg font-semibold text-foreground">
                Total = Deposit Amount + Fixed Service Fee
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (Processing costs are included in the service fee)
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">No hidden charges</strong> — All fees are
                  shown before checkout
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Processing included</strong> — Payment
                  processing costs are built into the service fee
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Supports operations</strong> — Fees
                  help maintain and improve the platform
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fee Table */}
        <Card className="border-border mb-8 overflow-hidden">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="text-base">Fixed Fee Schedule</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Transaction Amount</TableHead>
                  <TableHead className="font-semibold text-right">Service Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>$0.00 – $25.00</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$3.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$25.01 – $100.00</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$4.75</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$100.01 – $200.00</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$6.25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$200.01+</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$7.75</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Example Calculations */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="text-base">Example Calculations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Example 1 */}
            <div className="rounded-lg bg-secondary p-4">
              <p className="text-sm text-muted-foreground mb-3">
                For a <span className="font-semibold text-foreground">$20.00</span> deposit:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deposit Amount</span>
                  <span className="font-medium">$20.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Fee ($0–$25 tier)</span>
                  <span className="font-medium">$3.50</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2">
                  <span className="font-semibold text-foreground">Total Charge</span>
                  <span className="font-bold text-gold text-lg">$23.50</span>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="rounded-lg bg-secondary p-4">
              <p className="text-sm text-muted-foreground mb-3">
                For a <span className="font-semibold text-foreground">$75.00</span> deposit:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deposit Amount</span>
                  <span className="font-medium">$75.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Fee ($25.01–$100 tier)</span>
                  <span className="font-medium">$4.75</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2">
                  <span className="font-semibold text-foreground">Total Charge</span>
                  <span className="font-bold text-gold text-lg">$79.75</span>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="rounded-lg bg-secondary p-4">
              <p className="text-sm text-muted-foreground mb-3">
                For a <span className="font-semibold text-foreground">$150.00</span> deposit:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deposit Amount</span>
                  <span className="font-medium">$150.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Fee ($100.01–$200 tier)</span>
                  <span className="font-medium">$6.25</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2">
                  <span className="font-semibold text-foreground">Total Charge</span>
                  <span className="font-bold text-gold text-lg">$156.25</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Disclosure */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Info className="h-5 w-5 text-gold" />
              Important Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>
                  Fees include payment processing costs and support platform operations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>
                  All fees are <strong className="text-foreground">non-refundable</strong> except
                  where required by applicable law
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>
                  Fees are clearly displayed before you confirm any transaction
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>
                  The same fee structure applies to both deposits and commissary orders
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Info Alert */}
        <Alert className="border-gold/50 bg-gold/10">
          <Info className="h-4 w-4 text-gold" />
          <AlertDescription className="text-foreground">
            All fees support the operation and maintenance of the LockedIn Systems platform by
            Mighty Success Recovery Inc. Questions? Contact us at{" "}
            <a
              href="mailto:info@mightysuccessrecovery.org"
              className="text-gold hover:underline font-medium"
            >
              info@mightysuccessrecovery.org
            </a>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
