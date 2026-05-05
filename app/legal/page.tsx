import { Building2, FileText, DollarSign, Globe, Scale, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LegalPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
            <Scale className="h-7 w-7 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Legal & Compliance Transparency
          </h1>
          <p className="mt-2 text-muted-foreground">
            LockedIn Systems operated by Mighty Success Recovery Inc.
          </p>
        </div>

        {/* Section A: Organization Information */}
        <Card className="border-border mb-6">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Building2 className="h-5 w-5 text-gold" />
              A. Organization Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-1">
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-sm text-muted-foreground">Organization Name</p>
                  <p className="font-semibold text-foreground">Mighty Success Recovery Inc.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section B: Platform Purpose Statement */}
        <Card className="border-border mb-6">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-5 w-5 text-gold" />
              B. Platform Purpose Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              LockedIn Systems is a digital platform designed to facilitate commissary purchases
              and deposits for incarcerated individuals through approved facility systems.
            </p>
          </CardContent>
        </Card>

        {/* Section C: Funding & Use of Funds Disclosure */}
        <Card className="border-border mb-6">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <DollarSign className="h-5 w-5 text-gold" />
              C. Funding & Use of Funds Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-foreground leading-relaxed">
              All funds processed through LockedIn Systems are used to support the operational
              costs of the platform and to advance the mission of Mighty Success Recovery Inc.,
              including:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex h-2 w-2 mt-2 shrink-0 rounded-full bg-gold" />
                <span className="text-foreground">System operations and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-2 w-2 mt-2 shrink-0 rounded-full bg-gold" />
                <span className="text-foreground">Technology infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-2 w-2 mt-2 shrink-0 rounded-full bg-gold" />
                <span className="text-foreground">Support services for families</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-2 w-2 mt-2 shrink-0 rounded-full bg-gold" />
                <span className="text-foreground">Program development aligned with reentry support initiatives</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section D: Multi-State Online Operations Statement */}
        <Card className="border-border mb-6">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Globe className="h-5 w-5 text-gold" />
              D. Multi-State Online Operations Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              LockedIn Systems operates as an online platform providing services across multiple
              U.S. states in compliance with applicable state and federal regulations. The
              organization acknowledges that regulatory requirements may vary by jurisdiction
              and maintains a compliance-first operational approach.
            </p>
          </CardContent>
        </Card>

        {/* Section E: Compliance Statement */}
        <Card className="border-border mb-6">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <Scale className="h-5 w-5 text-gold" />
              E. Compliance Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              The organization adheres to applicable laws and regulations for its operations.
              All funds are processed through approved payment service providers (e.g., Stripe).
            </p>
            <p className="mt-4 text-foreground leading-relaxed">
              Payments are processed through licensed payment service providers and applied to
              inmate accounts by authorized correctional facility systems.
            </p>
          </CardContent>
        </Card>

        {/* Section F: No Legal Advice Clause */}
        <Card className="border-border mb-6">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-5 w-5 text-gold" />
              F. No Legal Advice Clause
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Alert className="border-border bg-secondary mb-4">
              <AlertTriangle className="h-4 w-4 text-gold" />
              <AlertDescription className="text-foreground">
                This platform does not provide legal or correctional facility
                advisory services.
              </AlertDescription>
            </Alert>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                The information provided through LockedIn Systems is for general informational
                purposes only and does not constitute legal advice or any
                other form of professional counsel.
              </p>
              <p>
                Users should consult with qualified professionals for advice specific to their
                individual circumstances. Mighty Success Recovery Inc. and LockedIn Systems
                make no representations or warranties regarding the accuracy, completeness,
                or applicability of any information provided.
              </p>
              <p>
                Use of this platform does not create an attorney-client relationship,
                advisor relationship, or any other professional service relationship
                between the user and Mighty Success Recovery Inc.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="rounded-lg border border-border bg-secondary p-6 text-center">
          <p className="text-sm text-muted-foreground">
            This page is provided for transparency purposes and reflects the operational
            disclosure of Mighty Success Recovery Inc. For questions regarding compliance
            or organizational matters, please contact{" "}
            <a
              href="mailto:info@mightysuccessrecovery.org?subject=Mighty%20Success%20Recovery%20Inquiry"
              className="font-medium text-gold hover:underline"
            >
              info@mightysuccessrecovery.org
            </a>
            . If your device doesn’t open email automatically, use{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mightysuccessrecovery.org&su=Mighty%20Success%20Recovery%20Inquiry"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gold hover:underline"
            >
              Gmail
            </a>{" "}
            or{" "}
            <a
              href="https://outlook.office.com/mail/deeplink/compose?to=info@mightysuccessrecovery.org&subject=Mighty%20Success%20Recovery%20Inquiry"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gold hover:underline"
            >
              Outlook
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
