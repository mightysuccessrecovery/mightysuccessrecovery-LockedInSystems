import { IntakeFormButtons } from "@/components/intake-form-buttons"

const textLinkClassName =
  "inline-flex min-h-11 items-center font-semibold text-[#0F2A44] underline underline-offset-4 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"

export default function Home() {
  return (
    <main>
      <div className="bg-[#0F2A44] px-6 py-2.5 text-center">
        <p className="text-xs text-white/90 sm:text-sm">
          LockedIn Systems is a DBA of Mighty Success Recovery Inc., a registered 501(c)(3) Public
          Charity.
        </p>
      </div>

      <section className="bg-white px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-[#0F2A44]/20 bg-gray-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0F2A44]">
            Institutional &amp; Reentry Solutions
          </span>
          <h1 className="mt-6 text-4xl font-bold text-[#0F2A44] md:text-5xl">
            LockedIn Systems: Technology &amp; Facility Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Delivering secure inmate services, transparent family connection, and structured sober
            living and halfway housing support.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-1 sm:flex-row sm:flex-wrap">
            <a href="/procurement" className={textLinkClassName}>
              Request Demonstration
            </a>
            <a href="/contact" className={textLinkClassName}>
              Contact for Partnership
            </a>
          </div>
          <div className="mt-2">
            <IntakeFormButtons />
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Agency partnerships and system demonstrations available upon request.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 border-t border-gray-200 px-6 py-16 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6">
          <h3 className="font-semibold text-[#0F2A44]">Operational Efficiency</h3>
          <p className="mt-3 text-sm text-gray-600">
            Streamlined payment workflows reduce administrative burden on facility staff and
            ensure transaction consistency.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <h3 className="font-semibold text-[#0F2A44]">Transaction Transparency</h3>
          <p className="mt-3 text-sm text-gray-600">
            Structured real-time reporting and system visibility maintain strict accountability and
            complete audit readiness.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <h3 className="font-semibold text-[#0F2A44]">Family &amp; Housing Access</h3>
          <p className="mt-3 text-sm text-gray-600">
            Improves funding clarity for families while supporting direct pathways into structured
            sober living and halfway housing.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-[#0F2A44]">
            Facility Support &amp; System Integration
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            Designed for facilities seeking structured commissary and inmate fund
            workflows without disrupting existing operational systems.
          </p>
          <ul className="mx-auto mt-10 max-w-4xl space-y-4 text-sm text-gray-700">
            <li className="rounded-lg border bg-white p-5">
              <strong className="text-[#0F2A44]">Financial &amp; Workflow Coordination:</strong>{" "}
              Secure transaction coordination and family funding access processing.
            </li>
            <li className="rounded-lg border bg-white p-5">
              <strong className="text-[#0F2A44]">Transitional Care Alignment:</strong> Integrated
              pathways connecting facility release planning to sober living and halfway housing.
            </li>
            <li className="rounded-lg border bg-white p-5">
              <strong className="text-[#0F2A44]">Administrative Relief:</strong> Automated workflow
              structures designed to minimize staff friction and workload.
            </li>
            <li className="rounded-lg border bg-white p-5">
              <strong className="text-[#0F2A44]">Compliance &amp; Reporting:</strong> Clear,
              audit-ready reporting frameworks built for institutional standards.
            </li>
            <li className="rounded-lg border bg-white p-5">
              <strong className="text-[#0F2A44]">Non-Disruptive Integration:</strong> Scalable
              operational design tailored to existing facility infrastructure.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6">
          <h3 className="text-xl font-semibold text-[#0F2A44]">Organizational Overview</h3>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong className="text-[#0F2A44]">Mighty Success Recovery Inc.</strong> operates as a
            nonprofit organization focused on structured fund access and reentry systems within
            institutional environments.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            <strong className="text-[#0F2A44]">DBA LockedIn Systems</strong> serves as the operational
            platform supporting commissary, inmate coordination, and transitional housing pathways
            for institutional partners.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <h3 className="text-xl font-semibold text-[#0F2A44]">Fees &amp; Service Structure</h3>
          <p className="mt-4 leading-relaxed text-gray-600">
            This platform is designed to maintain fully transparent service fees associated with
            operational processing.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Fees applied only to service processing where applicable.</li>
            <li>No hidden or undisclosed charges.</li>
            <li>Fee structures designed to support long-term operational sustainability.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Detailed fee breakdowns are provided to authorized institutional partners. See our{" "}
            <a href="/fees" className="font-medium text-[#0F2A44] underline-offset-2 hover:underline">
              Fees page
            </a>{" "}
            for transaction tiers.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-[#0F2A44] px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Support &amp; Institutional Assistance</h2>
          <p className="mt-6 leading-relaxed text-white/85">
            Facilities and authorized users may access operational support, account assistance, and
            system guidance aligned with institutional requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full border border-white/25 px-4 py-2">
              Account &amp; Access Support
            </span>
            <span className="rounded-full border border-white/25 px-4 py-2">
              Transaction Inquiries
            </span>
            <span className="rounded-full border border-white/25 px-4 py-2">System Navigation</span>
            <span className="rounded-full border border-white/25 px-4 py-2">
              Operational Clarification
            </span>
          </div>
        </div>
      </section>

      <section id="partnership" className="border-t border-gray-200 bg-white px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#0F2A44]">Agency Partnership Inquiries</h2>
        <p className="mt-3 text-gray-600">
          Request evaluation materials, system demonstrations, or procurement documentation.
        </p>
        <a href="/contact" className={`mt-6 ${textLinkClassName}`}>
          Submit Partnership Request
        </a>
      </section>
    </main>
  )
}
