import { Shield, Lock, Eye, Database, Bell, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <Shield className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Privacy Statement</h1>
          <p className="mt-2 text-muted-foreground">
            LockedIn Systems operated by Mighty Success Recovery Inc.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Last Updated: April 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="rounded-lg border border-[color:rgb(15_42_68_/_12%)] bg-secondary/30 px-6 py-6 text-muted-foreground leading-relaxed md:px-8">
            <p className="text-foreground font-medium">
              We are committed to protecting the privacy and security of all users and institutional
              partners.
            </p>
            <p className="mt-4">
              Information collected is limited to what is necessary to:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Process transactions</li>
              <li>Maintain system access</li>
              <li>Support operational functions</li>
            </ul>
            <p className="mt-4">
              We do not sell or distribute personal data to third parties unrelated to service
              operations.
            </p>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Database className="h-5 w-5 text-gold" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                We collect information necessary to process transactions and provide our services:
              </p>
              <ul className="mt-3 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Transaction history and order details</li>
                <li>Inmate information (name, ID, facility) for order fulfillment</li>
                <li>Device and browser information for security purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Eye className="h-5 w-5 text-gold" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>Your information is used exclusively for:</p>
              <ul className="mt-3 space-y-2">
                <li>Processing deposits and commissary orders</li>
                <li>Communicating order status and support responses</li>
                <li>Verifying transactions and preventing fraud</li>
                <li>Complying with legal requirements</li>
                <li>Improving our services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Lock className="h-5 w-5 text-gold" />
                Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>We implement robust security measures to protect your data:</p>
              <ul className="mt-3 space-y-2">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Secure payment processing via Stripe (PCI DSS compliant)</li>
                <li>Regular security audits and monitoring</li>
                <li>Limited employee access to personal data</li>
                <li>Secure data storage with encryption at rest</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Bell className="h-5 w-5 text-gold" />
                No Sale of Personal Data
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  We do not sell, rent, or trade your personal information.
                </strong>
              </p>
              <p className="mt-3">
                Your data is never shared with third parties for marketing purposes. We only share
                information when required to:
              </p>
              <ul className="mt-3 space-y-2">
                <li>Process your transactions (payment processors)</li>
                <li>Fulfill orders to correctional facilities</li>
                <li>Comply with legal obligations or court orders</li>
                <li>Protect the rights and safety of our users</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-5 w-5 text-gold" />
                Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-muted-foreground">
              <p>LockedIn Systems complies with:</p>
              <ul className="mt-3 space-y-2">
                <li>Applicable US state correctional commissary policies</li>
                <li>Federal and state data protection regulations</li>
                <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
                <li>Consumer protection laws</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-5 w-5 text-gold" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>For privacy-related questions or concerns, please contact us at:</p>
              <a
                href="mailto:info@mightysuccessrecovery.org?subject=Mighty%20Success%20Recovery%20Inquiry"
                className="mt-2 inline-flex items-center gap-2 text-gold hover:underline"
              >
                <Mail className="h-4 w-4" />
                info@mightysuccessrecovery.org
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
