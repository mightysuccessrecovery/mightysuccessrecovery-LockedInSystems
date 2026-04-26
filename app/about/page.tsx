import { Heart, Users, Shield, Target, Home, Briefcase, HandHeart, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
            <Heart className="h-7 w-7 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            About Mighty Success Recovery Inc.
          </h1>
          <p className="mt-2 text-muted-foreground">
            501(c)(3) Public Charity | EIN: 88-1712603
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Serving Summit County, Ohio, and Surrounding Communities
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-gold" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              Mighty Success Recovery Inc. is dedicated to providing recovery-focused residential 
              support and community-based services to individuals experiencing homelessness, 
              intellectual and developmental disabilities, behavioral health and substance use 
              challenges, justice-involvement, and veterans.
            </p>
            <p className="mt-4 text-foreground leading-relaxed">
              Our mission is to empower residents through holistic care, life skills training, 
              job readiness, and family support to promote independence, stability, and long-term 
              well-being.
            </p>
          </CardContent>
        </Card>

        {/* About Us */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-gold" />
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <p className="text-foreground leading-relaxed">
              Mighty Success Recovery Inc. is a 
              501(c)(3) public charity serving Summit County, Ohio, and surrounding communities. 
              We offer trauma-informed, holistic programs that integrate housing stabilization, 
              substance use counseling, mobile food pantry services, crisis intervention, and 
              community referrals.
            </p>
            <p className="text-foreground leading-relaxed">
              Our organization supports justice-involved youth and adults, veterans, and families, 
              helping them achieve independence, stability, and successful reintegration into society. 
              We operate as a hub of resources, collaboration, and empowerment, working closely with 
              local agencies, 211 services, and community partners.
            </p>
            <p className="text-foreground leading-relaxed">
              Mighty Success Recovery Inc. provides harm reduction resources such as Naloxone and 
              test strips, along with access to supportive services, sober living, and community-based 
              programs. Our mission is to promote safety, stability, and long-term recovery through 
              compassionate, structured support.
            </p>
          </CardContent>
        </Card>

        {/* Our Story */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="flex items-center gap-2">
              <HandHeart className="h-5 w-5 text-gold" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              Mighty Success Recovery Inc. was founded with a passion to help individuals and 
              families overcome life&apos;s most difficult challenges, including addiction, homelessness, 
              and reentry after incarceration. Inspired by personal experiences and a commitment to 
              community impact, the organization was created to provide real support, resources, and 
              opportunities for individuals to rebuild their lives.
            </p>
            <p className="mt-4 text-foreground leading-relaxed">
              Our goal has always been to offer a safe, structured environment where people can heal, 
              grow, and achieve long-term success.
            </p>
          </CardContent>
        </Card>

        {/* Services We Provide */}
        <div className="mb-8">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Services We Provide</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <Home className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Housing & Residential Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Housing stabilization, sober living environments, and structured residential programs
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <Heart className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Behavioral Health Services</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Substance use counseling, harm reduction resources, Naloxone distribution, and crisis intervention
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <Briefcase className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Life Skills & Job Readiness</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Life skills training, job readiness programs, and employment support services
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <Users className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Community & Family Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mobile food pantry, community referrals, family support services, and 211 coordination
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-8">
          <h2 className="mb-6 text-lg font-semibold text-foreground">Our Core Values</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Transparency</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Clear and honest communication in all operations
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Accountability</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Responsible stewardship of resources and trust
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Heart className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground">Dignity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Treating all individuals with respect and care
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* LockedIn Systems */}
        <Card className="border-border mb-8">
          <CardHeader className="border-b border-border bg-primary text-primary-foreground">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold" />
              About LockedIn Systems
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-foreground leading-relaxed">
              LockedIn Systems is a program of Mighty Success Recovery Inc. dedicated to supporting 
              rehabilitation, family connection, and structured reentry support systems for individuals 
              impacted by incarceration.
            </p>
            <p className="mt-4 text-foreground leading-relaxed">
              Through this platform, we provide secure commissary access, financial deposit tools, 
              and family support infrastructure designed to maintain dignity, stability, and connection 
              during incarceration.
            </p>
            <h4 className="mt-6 font-semibold text-foreground">What LockedIn Systems Provides:</h4>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">
                  1
                </div>
                <span className="text-foreground">
                  <strong>Secure Commissary Access</strong> — Purchase commissary packages for
                  incarcerated individuals through approved facility systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">
                  2
                </div>
                <span className="text-foreground">
                  <strong>Financial Deposit Tools</strong> — Deposit funds directly to inmate
                  accounts quickly and securely
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-semibold text-gold">
                  3
                </div>
                <span className="text-foreground">
                  <strong>Family Support Infrastructure</strong> — Maintain connection and provide
                  support during incarceration
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Legal Link */}
        <div className="rounded-lg border border-border bg-secondary p-6 text-center">
          <p className="text-sm text-muted-foreground">
            For information about our nonprofit status, funding disclosures, and compliance
            statements, please visit our{" "}
            <Link href="/legal" className="font-medium text-gold hover:underline">
              Legal & Compliance Transparency
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  )
}
