import { Receipt, Calculator, Info, Scale, FileText } from "lucide-react"
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
            Fees &amp; Transaction Processing Disclosure
          </h1>
          <p className="mt-2 text-muted-foreground">LockedIn Systems operated by Mighty Success Recovery Inc.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            This disclosure is provided for transparency, compliance review, and audit reference.
          </p>
        </div>

        {/* Overview */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-5 w-5 text-gold" />
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              This page describes how transaction-related fees are calculated and disclosed for deposit
              transactions processed through this platform. The intent is to provide a clear, standalone
              disclosure suitable for institutional review, procurement evaluation, and audit reference.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              All fees are disclosed in advance as part of the checkout experience or documentation
              provided to authorized institutional partners, as applicable.
            </p>
          </CardContent>
        </Card>

        {/* Definitions */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Info className="h-5 w-5 text-gold" />
              Definitions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-muted-foreground">
                The following defined terms apply for purposes of this disclosure:
              </p>
              <ul className="space-y-3">
                <li className="text-foreground">
                  <strong>Deposit Amount</strong> (the “Amount”): the deposit amount entered by the user.
                </li>
                <li className="text-foreground">
                  <strong>Fixed Fee</strong>: a fixed fee determined from the fee table below based on the
                  applicable Amount tier.
                </li>
                <li className="text-foreground">
                  <strong>Variable Fee</strong>: a fee equal to <strong>3.0000%</strong> of the Total
                  Transaction Amount.
                </li>
                <li className="text-foreground">
                  <strong>Total Transaction Amount</strong> (the “Total”): the total amount charged for the
                  transaction, inclusive of the Amount, the Fixed Fee, and the Variable Fee.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Fee structure explanation */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5 text-gold" />
              Fee Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              The Total Transaction Amount (the “Total”) shall be equal to (i) the Deposit Amount (the
              “Amount”); plus (ii) the Fixed Fee determined from the fee table below (the “Fixed Fee”);
              plus (iii) a fee equal to <strong>3.0000%</strong> of the Total Transaction Amount (the
              “Variable Fee”).
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The Variable Fee is calculated to equal 3.0000% of the Total, and is derived as described
              in the Formula section below.
            </p>
          </CardContent>
        </Card>

        {/* Formula */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Calculator className="h-5 w-5 text-gold" />
              Formula
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              For clarity, the Variable Fee is calculated by dividing the sum of the Deposit Amount and
              the Fixed Fee by <strong>0.97</strong> and then subtracting from this number the sum of the
              Deposit Amount and the Fixed Fee, such that the Variable Fee equals 3.0000% of the Total
              Transaction Amount.
            </p>
            <div className="mt-5 rounded-lg border border-border bg-background p-4 text-sm">
              <p className="font-semibold text-foreground">Equations</p>
              <p className="mt-3 font-mono text-muted-foreground">
                (Deposit Amount + Fixed Fee) / 0.97 = Total Transaction Amount
              </p>
              <p className="mt-2 font-mono text-muted-foreground">
                Total Transaction Amount − (Deposit Amount + Fixed Fee) = Variable Fee
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fee table */}
        <Card className="border-border mb-8 overflow-hidden">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="text-base">Fee Table</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Amount Tier</TableHead>
                  <TableHead className="font-semibold text-right">Fixed Fee + Variable Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>$0.00 – $25.00</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$3.25 + 3.0000%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$25.01 – $100.00</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$4.50 + 3.0000%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$100.01 – $200.00</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$6.00 + 3.0000%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$200.01 and up</TableCell>
                  <TableCell className="text-right font-semibold text-gold">$7.50 + 3.0000%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Compliance / Institutional Use */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Scale className="h-5 w-5 text-gold" />
              Compliance and Institutional Use
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              This disclosure is intended to support review by state and local correctional agencies,
              including Ohio correctional procurement and contracting review, county sheriff offices,
              and multi-state correctional procurement and RFP evaluation environments.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fee calculations, documentation, and related transaction records are intended to be
              presented in a manner suitable for institutional audit review and standard procurement
              documentation practices. Applicable requirements may vary by jurisdiction and facility.
            </p>
          </CardContent>
        </Card>

        {/* Transparency & disclosure commitments */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Info className="h-5 w-5 text-gold" />
              Transparency and Disclosure Commitments
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>Fee components are defined, documented, and disclosed in advance, as applicable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>
                  Fees are presented using consistent terminology (Amount, Fixed Fee, Variable Fee, Total).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">•</span>
                <span>
                  Transaction processing is performed through third-party payment providers and facility-authorized
                  systems, as applicable.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Institutional access / procurement request */}
        <Alert className="border-gold/50 bg-gold/10">
          <Info className="h-4 w-4 text-gold" />
          <AlertDescription className="text-foreground">
            <strong>Institutional access and procurement requests:</strong> Authorized institutional partners may
            request additional fee documentation or supporting materials by contacting{" "}
            <a
              href="mailto:info@mightysuccessrecovery.org"
              className="font-medium text-gold hover:underline"
            >
              info@mightysuccessrecovery.org
            </a>
            .
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
