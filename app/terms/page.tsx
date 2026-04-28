import {
  FileText,
  AlertCircle,
  CreditCard,
  Package,
  Shield,
  Mail,
  Phone,
  Scale,
  UserCheck,
  RefreshCw,
  Clock,
  Gavel,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <FileText className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Terms & Conditions</h1>
          <p className="mt-2 text-muted-foreground">
            LockedIn Systems operated by Mighty Success Recovery Inc.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Last Updated: April 2026</p>
        </div>

        <div className="mb-8 rounded-lg border border-[color:rgb(15_42_68_/_12%)] bg-secondary/30 px-6 py-6 text-muted-foreground leading-relaxed md:px-8">
          <p className="text-foreground font-medium">
            By accessing this system, users agree to use the platform solely for authorized
            operational purposes.
          </p>
          <p className="mt-4">
            The organization reserves the right to:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>Maintain system integrity</li>
            <li>Restrict unauthorized access</li>
            <li>Update service structure as needed</li>
          </ul>
          <p className="mt-4">
            All services are provided in accordance with applicable nonprofit operational guidelines
            and institutional agreements.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-gold/50 bg-gold/10">
          <AlertCircle className="h-4 w-4 text-gold" />
          <AlertDescription className="text-foreground">
            Please read these Terms &amp; Conditions in full, including the sections below, and our{" "}
            <Link href="/privacy" className="font-medium text-gold underline-offset-2 hover:underline">
              Privacy Statement
            </Link>
            , before making any transactions.
          </AlertDescription>
        </Alert>

        {/* Content */}
        <div className="space-y-6">
          {/* Section 1: Agreement to Terms */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-5 w-5 text-gold" />
                1. Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                These Terms & Conditions ("Terms") constitute a legally binding agreement between
                you ("User," "you," or "your") and Mighty Success Recovery Inc. ("we," "us," or
                "our") operating the LockedIn Systems platform.
              </p>
              <p className="mt-3">
                By accessing, browsing, or using our platform, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and our{" "}
                <Link href="/privacy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree to these Terms, you must not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Section 2: Description of Services */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Package className="h-5 w-5 text-gold" />
                2. Description of Services
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>LockedIn Systems provides the following services:</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Commissary Package Ordering:</strong> Facilitating the purchase and
                  delivery of approved commissary items to incarcerated individuals at participating
                  correctional facilities.
                </li>
                <li>
                  <strong>Deposit Services:</strong> Enabling the transfer of funds to inmate
                  accounts through secure third-party payment processors (Stripe).
                </li>
              </ul>
              <p className="mt-3">
                All services are subject to facility approval and availability. We act as an
                intermediary platform and do not directly operate correctional facilities or control
                facility policies.
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Third-Party Processing */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CreditCard className="h-5 w-5 text-gold" />
                3. Third-Party Payment Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                All payments on LockedIn Systems are processed through Stripe, a PCI-compliant
                third-party payment processor. By using our services, you acknowledge and agree
                that:
              </p>
              <ul className="mt-3 space-y-2">
                <li>Your payment card information is transmitted directly to Stripe</li>
                <li>
                  We do not store, process, or have access to your complete payment card details
                </li>
                <li>
                  Funds are handled by third-party processors in accordance with their terms of
                  service
                </li>
                <li>
                  You are subject to Stripe&apos;s terms and conditions for payment processing
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 4: User Responsibility */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <UserCheck className="h-5 w-5 text-gold" />
                4. User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                You are solely responsible for ensuring the accuracy of all information provided
                when using our services, including but not limited to:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Inmate Information:</strong> Correct full legal name and inmate ID number
                </li>
                <li>
                  <strong>Facility Selection:</strong> Accurate selection of the correctional
                  facility where the inmate is currently housed
                </li>
                <li>
                  <strong>Payment Details:</strong> Valid and accurate payment information
                </li>
                <li>
                  <strong>Contact Information:</strong> Current phone number and email address for
                  verification and communication
                </li>
              </ul>
              <p className="mt-3 font-semibold text-foreground">
                Transactions processed with incorrect information cannot be reversed or refunded.
                Please verify all details carefully before confirming any transaction.
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Fees Disclosure */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CreditCard className="h-5 w-5 text-gold" />
                5. Fees Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                All transactions on LockedIn Systems are subject to service fees. Fees cover
                platform operations, payment processing, and service maintenance.
              </p>
              <p className="mt-3">
                A complete breakdown of our fee structure is available on our{" "}
                <Link href="/fees" className="text-gold hover:underline">
                  Fees page
                </Link>
                . All applicable fees are displayed before you confirm any transaction.
              </p>
              <p className="mt-3">
                Fees are non-refundable except where required by applicable law.
              </p>
            </CardContent>
          </Card>

          {/* Section 6: No Refunds Policy */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <RefreshCw className="h-5 w-5 text-gold" />
                6. No Refunds Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <Alert className="mb-4 border-destructive/50 bg-destructive/10">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-foreground font-semibold">
                  All transactions are final. No refunds will be issued.
                </AlertDescription>
              </Alert>
              <p>
                By completing a transaction on LockedIn Systems, you acknowledge and agree that all
                payments, deposits, and purchases are final and non-refundable.
              </p>
              <p className="mt-3">
                Please verify all inmate information, facility selection, and transaction details
                carefully before confirming any payment.
              </p>
            </CardContent>
          </Card>

          {/* Section 7: Identity Verification (OTP) */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Phone className="h-5 w-5 text-gold" />
                7. Identity Verification (OTP)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                To protect against fraud and ensure transaction security, we require identity
                verification before processing any payment. This verification includes:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Phone Number Verification:</strong> You must provide a valid phone number
                  capable of receiving SMS text messages or voice calls
                </li>
                <li>
                  <strong>One-Time Password (OTP):</strong> A unique verification code will be sent
                  to your phone via SMS or voice call
                </li>
                <li>
                  <strong>Code Entry:</strong> You must enter the correct OTP to proceed with your
                  transaction
                </li>
              </ul>
              <p className="mt-3">
                This verification is required for all deposit transactions and commissary purchases.
                Failure to complete verification will prevent transaction processing.
              </p>
            </CardContent>
          </Card>

          {/* Section 8: Service Availability */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-5 w-5 text-gold" />
                8. Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                Service availability on LockedIn Systems is subject to the following conditions:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  Commissary items and deposit services are only available for approved correctional
                  facilities
                </li>
                <li>
                  Specific items may be restricted or unavailable based on individual facility
                  policies
                </li>
                <li>
                  Delivery times are estimates only and may vary based on facility schedules and
                  processing times
                </li>
                <li>
                  We do not guarantee delivery timing beyond the estimated dates provided at
                  checkout
                </li>
              </ul>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue services to any facility at
                any time without prior notice.
              </p>
            </CardContent>
          </Card>

          {/* Section 9: Limitation of Liability */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <AlertCircle className="h-5 w-5 text-gold" />
                9. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                To the fullest extent permitted by applicable law, Mighty Success Recovery Inc. and
                LockedIn Systems shall not be liable for:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  Decisions, policies, or actions taken by correctional facilities or their staff
                </li>
                <li>
                  Delays, refusals, or modifications to orders imposed by facility administration
                </li>
                <li>Inmate transfers, releases, or disciplinary actions</li>
                <li>Errors or failures by third-party payment processors</li>
                <li>User errors in entering transaction or inmate information</li>
                <li>
                  Any indirect, incidental, special, consequential, or punitive damages arising from
                  your use of our services
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 10: Indemnification */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-5 w-5 text-gold" />
                10. Indemnification
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                You agree to indemnify, defend, and hold harmless Mighty Success Recovery Inc., its
                officers, directors, employees, agents, and affiliates from and against any and all
                claims, damages, losses, liabilities, costs, and expenses (including reasonable
                attorneys&apos; fees) arising from or related to:
              </p>
              <ul className="mt-3 space-y-2">
                <li>Your use or misuse of the LockedIn Systems platform</li>
                <li>Your violation of these Terms & Conditions</li>
                <li>Your provision of incorrect or fraudulent information</li>
                <li>Any dispute between you and an incarcerated individual or facility</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 11: Governing Law */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Gavel className="h-5 w-5 text-gold" />
                11. Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the
                laws of the State of Ohio, without regard to its conflict of law provisions.
              </p>
              <p className="mt-3">
                Any disputes arising under or in connection with these Terms shall be subject to the
                exclusive jurisdiction of the state and federal courts located in Ohio.
              </p>
            </CardContent>
          </Card>

          {/* Section 12: Changes to Terms */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Scale className="h-5 w-5 text-gold" />
                12. Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                We reserve the right to modify, update, or replace these Terms & Conditions at any
                time at our sole discretion. Changes will be effective immediately upon posting to
                our platform.
              </p>
              <p className="mt-3">
                Your continued use of LockedIn Systems following the posting of any changes
                constitutes your acceptance of such changes. We encourage you to review these Terms
                periodically for updates.
              </p>
              <p className="mt-3">
                Material changes to these Terms will be indicated by updating the &quot;Last
                Updated&quot; date at the top of this page.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-5 w-5 text-gold" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                For questions, concerns, or inquiries regarding these Terms & Conditions, please
                contact us:
              </p>
              <div className="mt-4 rounded-lg bg-secondary p-4">
                <p className="font-semibold text-foreground">Mighty Success Recovery Inc.</p>
                <a
                  href="mailto:info@mightysuccessrecovery.org"
                  className="mt-3 inline-flex items-center gap-2 text-gold hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  info@mightysuccessrecovery.org
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
