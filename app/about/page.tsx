import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Mighty Success Recovery Inc. – Mission &amp; Purpose
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">501(c)(3) Public Charity</p>
        </div>

        <div className="mt-10 space-y-10 text-foreground">
          <section>
            <h2 className="text-lg font-semibold">Mission Overview</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Mighty Success Recovery Inc. is a nonprofit organization committed to structured,
              recovery-informed support and community stabilization efforts. Programs are designed to
              strengthen long-term stability, accountability, and reintegration outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Correctional Support Systems</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The organization supports structured financial access systems within correctional
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
        </div>
      </div>
    </div>
  )
}
