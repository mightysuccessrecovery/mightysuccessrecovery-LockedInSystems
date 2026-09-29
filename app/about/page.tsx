import type { Metadata } from "next"
import Link from "next/link"
import { IntakeActions } from "@/components/intake-actions"

export const metadata: Metadata = {
  title: "Mission & Purpose — LockedIn Systems",
  description:
    "Mighty Success Recovery Inc. helps individuals and families build stability, independence, and a stronger future through practical support, recovery resources, housing, and community services.",
}

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Mission &amp; Purpose</h1>
          <p className="mt-2 text-sm text-muted-foreground">501(c)(3) Public Charity</p>
          <p className="mt-6 text-lg font-semibold text-[#0F2A44]">
            Building Stability. Supporting Recovery. Creating Opportunity.
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Mighty Success Recovery Inc. helps individuals and families build stability, independence,
            and a stronger future by connecting people with practical support, recovery resources,
            housing opportunities, life-skills development, employment resources, and community
            services.
          </p>
        </div>

        <div className="mt-10 space-y-10 text-foreground">
          <section>
            <h2 className="text-lg font-semibold">Sober Living &amp; Recovery Housing</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Mighty Success Recovery Inc. provides sober living and recovery housing designed to give
              individuals a safe, structured, and supportive place to build stability and continue
              working toward recovery and independence.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Our recovery housing focuses on accountability, community, life skills, employment
              readiness, recovery support, and connection to community resources. Residents are expected
              to participate in applicable programming and follow house and community standards.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Clinical therapy and licensed behavioral health treatment are provided by outside qualified
              providers when needed. Mighty Success Recovery Inc. focuses on housing, recovery support,
              practical resources, life skills, and community stability.
            </p>
            <p className="mt-4 rounded-lg border border-border bg-secondary p-5 font-medium leading-relaxed text-foreground">
              Our goal is not simply to provide a place to sleep. Our goal is to help individuals build
              the stability, skills, support, and confidence they need to move forward.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Correctional Support Systems</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The organization supports structured fund access systems within correctional
              environments through operational coordination that aligns with facility-authorized
              processes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Family Access &amp; Stability</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Services are designed to improve clarity, access, and stability for families supporting
              incarcerated individuals, while maintaining compliance and institutional workflow
              alignment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Accessibility &amp; inclusive access</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              LockedIn Systems is committed to supporting users who are{" "}
              <span className="font-medium text-foreground">blind or have low vision</span>, users with{" "}
              <span className="font-medium text-foreground">
                intellectual or developmental disabilities
              </span>
              , and users with{" "}
              <span className="font-medium text-foreground">speech impairments</span>. We work to present
              clear, structured information and to assist through our support channels when additional
              help is needed to complete a transaction or understand available services.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              If you or someone you support needs accommodations or step-by-step guidance, please reach
              out through{" "}
              <Link href="/support" className="font-medium text-gold hover:underline">
                Support
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-medium text-gold hover:underline">
                Contact
              </Link>
              , and our team will work with you to address your request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Reentry &amp; Transitional Support</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Through structured funding support and program development, the organization contributes
              to initiatives that promote housing stability, recovery support, and reintegration
              pathways for individuals transitioning from incarceration.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Community Impact Areas</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Focus areas include housing and recovery stability initiatives for individuals and
              families, including support for veterans, first responders, and individuals experiencing
              disability-related or behavioral health challenges.
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-secondary p-5">
                <h3 className="text-sm font-semibold text-foreground">Housing &amp; Stability</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Transitional and supportive housing</li>
                  <li>Halfway housing and structured residential support</li>
                  <li>Family stabilization initiatives</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-secondary p-5">
                <h3 className="text-sm font-semibold text-foreground">Recovery &amp; Reintegration</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Recovery and sober living environments</li>
                  <li>Reentry and post-incarceration support services</li>
                  <li>Support for veterans and first responders</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Operational Philosophy</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Programs emphasize compliance, clear documentation, and structured workflows that align
              with institutional requirements and community service standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Nonprofit Commitment</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Mighty Success Recovery Inc. operates under a nonprofit framework intended to support
              families, institutional partners, and community reintegration outcomes through
              structured programs and responsible operational stewardship.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Strategic Vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The organization’s strategic vision prioritizes measurable stability outcomes, improved
              access to support services, and scalable program development aligned with long-term
              reintegration pathways.
            </p>
          </section>

          <section className="rounded-lg border border-border bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">
              For funding disclosures and compliance statements, please visit our{" "}
              <Link href="/legal" className="font-medium text-gold hover:underline">
                Legal &amp; Compliance Transparency
              </Link>{" "}
              page.
            </p>
          </section>

          <section>
            <IntakeActions />
          </section>
        </div>
      </div>
    </div>
  )
}
