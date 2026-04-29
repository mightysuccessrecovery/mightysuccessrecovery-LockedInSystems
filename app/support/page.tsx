import { Mail, Clock, AlertCircle, CheckCircle, Calendar, ListOrdered } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <Mail className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Support
          </h1>
          <p className="mt-4 text-foreground leading-relaxed">
            Facilities and authorized users may access support for operational questions, account
            assistance, and system guidance.
          </p>
          <p className="mt-2 text-muted-foreground">
            Support is available 7 days a week via email only.
          </p>
        </div>

        <Card className="border-border mb-8 text-left">
          <CardHeader>
            <CardTitle className="text-base">Support Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
              <li>Account and access support</li>
              <li>Transaction inquiries</li>
              <li>System navigation guidance</li>
              <li>Operational clarification</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Response times are structured to align with institutional operational requirements.
            </p>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card className="border-border mb-8">
          <CardHeader className="text-center border-b border-border bg-secondary">
            <CardTitle className="text-lg">Email Support Only</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <a
              href="mailto:info@mightysuccessrecovery.org"
              className="inline-flex cursor-pointer items-center gap-3 rounded-lg bg-gold/10 px-6 py-4 text-lg font-semibold text-gold underline-offset-4 transition-colors hover:bg-gold/15 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Mail className="h-6 w-6 shrink-0 text-gold" aria-hidden />
              <span className="break-all">info@mightysuccessrecovery.org</span>
            </a>
          </CardContent>
        </Card>

        {/* Transaction history requests */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ListOrdered className="h-5 w-5 text-gold" />
              Transaction History Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              If you need a history of your transactions, please send a detailed email to our
              support team with your full name, account information, and request details. Our team
              will review and respond as soon as possible.
            </p>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="border-border mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle className="h-5 w-5 text-gold" />
              Required Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              All support requests must include the following information:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">
                  1
                </div>
                <span className="text-foreground">
                  <strong>Facility Name</strong> — The correctional facility where the inmate is
                  housed
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">
                  2
                </div>
                <span className="text-foreground">
                  <strong>Inmate Name</strong> — Full legal name of the inmate
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">
                  3
                </div>
                <span className="text-foreground">
                  <strong>Inmate ID</strong> — The facility-assigned identification number
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Warning */}
        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-foreground">
            <strong>Important:</strong> Requests missing required information will not be processed.
            Please avoid sending multiple duplicate emails as this delays response times.
          </AlertDescription>
        </Alert>

        {/* Response Time */}
        <Card className="border-border mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-5 w-5 text-gold" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Structured response times</h4>
                <p className="text-muted-foreground">
                  Response timelines align with institutional operational requirements. Where
                  applicable, we aim to acknowledge inquiries within two business days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Hours */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Calendar className="h-5 w-5 text-gold" />
              Support Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Calendar className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Available 7 Days a Week</h4>
                  <p className="text-muted-foreground">
                    Email Support Only
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-secondary p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Requests submitted on weekends or holidays
                  will be handled on the next business day.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support & Donations */}
        <Card className="border-border mt-8">
          <CardHeader>
            <CardTitle className="text-base">Support &amp; Donations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Optional contributions help fund housing, sober living, and reintegration programs for
              individuals and families in need.
            </p>
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link href="/donate">Make a Donation</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
