export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="text-center py-24 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
          Correctional Commissary &amp; Inmate Financial Support Services
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          A 501(c)(3) Public Charity providing secure, structured, and transparent commissary and
          inmate financial support services for correctional facilities and their families.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded px-6 py-3 font-semibold text-white"
            style={{ background: "#0F2A44" }}
          >
            Contact for Partnership
          </a>

          <a
            href="/procurement"
            className="rounded border px-6 py-3 font-semibold"
            style={{ borderColor: "#0F2A44", color: "#0F2A44" }}
          >
            Request Demonstration
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Agency partnerships and system demonstrations available upon request
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 border-t border-gray-200 px-6 py-16 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6">
          <h3 className="font-semibold text-[#0F2A44]">Operational Efficiency</h3>
          <p className="mt-3 text-sm text-gray-600">
            Streamlined financial workflows reduce administrative burden on correctional staff and
            improve transaction processing consistency.
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <h3 className="font-semibold text-[#0F2A44]">Financial Transparency</h3>
          <p className="mt-3 text-sm text-gray-600">
            Structured reporting and system visibility support accountability and audit readiness.
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <h3 className="font-semibold text-[#0F2A44]">Family Access Support</h3>
          <p className="mt-3 text-sm text-gray-600">
            Improves clarity and structure for families supporting incarcerated individuals.
          </p>
        </div>
      </section>

      {/* FACILITY SUPPORT */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-[#0F2A44]">
            Facility Support &amp; Integration
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Designed for correctional facilities seeking structured commissary and inmate financial
            workflow support without disrupting existing operational systems.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-sm md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6 text-gray-600">
            • Transaction coordination systems
            <br />
            • Family funding access processing
            <br />
            • Administrative workload reduction
            <br />
            • Operational reporting support
          </div>

          <div className="rounded-lg border bg-white p-6 text-gray-600">
            • Non-disruptive integration model
            <br />
            • Facility-aligned workflow structure
            <br />
            • Transparent reporting framework
            <br />
            • Scalable operational design
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL OVERVIEW */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0F2A44]">Organizational Overview</h2>

        <p className="mt-6 leading-relaxed text-gray-600">
          Mighty Success Recovery Inc. operates as a nonprofit organization focused on structured
          financial access systems within correctional environments.
        </p>

        <p className="mt-4 leading-relaxed text-gray-600">
          DBA LockedIn Systems serves as the operational platform supporting commissary and inmate
          financial coordination services for institutional partners.
        </p>
      </section>

      {/* SUPPORT & ASSISTANCE */}
      <section className="border-t border-gray-200 bg-[var(--background)] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F2A44] md:text-3xl">
            Support &amp; Assistance
          </h2>

          <p className="mt-6 text-center text-gray-700 leading-relaxed">
            Facilities and authorized users may access support for operational questions, account
            assistance, and system guidance.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <p className="text-center font-semibold text-[#0F2A44]">Support Areas:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Account and access support</li>
              <li>Transaction inquiries</li>
              <li>System navigation guidance</li>
              <li>Operational clarification</li>
            </ul>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-gray-600">
            Response times are structured to align with institutional operational requirements.
          </p>
        </div>
      </section>

      {/* FEES & SERVICE STRUCTURE */}
      <section className="border-t border-gray-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F2A44] md:text-3xl">
            Fees &amp; Service Structure
          </h2>

          <p className="mt-6 text-center text-gray-700 leading-relaxed">
            This platform is designed to maintain transparent and structured service fees associated
            with operational processing.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <p className="text-center font-semibold text-[#0F2A44]">Fee Principles:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Fees are applied only to service processing where applicable</li>
              <li>No hidden or undisclosed charges</li>
              <li>Fee structures are designed to support operational sustainability</li>
            </ul>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-gray-600">
            Detailed fee breakdowns may be provided to authorized institutional partners upon request.
            See our{" "}
            <a href="/fees" className="font-medium text-[#0F2A44] underline-offset-2 hover:underline">
              Fees page
            </a>{" "}
            for current transaction tiers.
          </p>
        </div>
      </section>

      {/* AGENCY PARTNERSHIP */}
      <section className="border-t border-gray-200 px-6 py-20 text-center bg-white">
        <h2 className="text-2xl font-bold text-[#0F2A44]">Agency Partnership Inquiries</h2>

        <p className="mt-3 text-gray-600">
          Request evaluation, demonstration, or procurement documentation.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block rounded px-8 py-3 font-semibold text-white"
          style={{ background: "#0F2A44" }}
        >
          Contact for Partnership
        </a>
      </section>
    </main>
  )
}
