export default function ProcurementPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      {/* HEADER */}
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold text-[#0F2A44] md:text-4xl">
          Procurement &amp; Agency Information
        </h1>

        <p className="mt-3 text-gray-600">
          For correctional facilities, government agencies, and authorized institutional partners
        </p>
      </section>

      {/* INTRO */}
      <section className="mx-auto mt-12 max-w-4xl leading-relaxed text-gray-700">
        <p>
          Mighty Success Recovery Inc., DBA LockedIn Systems, is a 501(c)(3) Public Charity
          providing structured commissary and inmate support services designed specifically
          for correctional environments.
        </p>

        <p className="mt-4">
          This procurement page is intended to support agency review, vendor evaluation, and onboarding
          due diligence by providing transparent operational structure, compliance identifiers, and
          service delivery information.
        </p>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-[#0F2A44]">
          Operational Value for Correctional Facilities
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-[#0F2A44]">Administrative Efficiency</h3>
            <p className="mt-3 text-sm text-gray-600">
              Streamlined transaction systems reduce manual workload for staff and support more
              efficient commissary and inmate fund processing workflows.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-[#0F2A44]">Operational Stability</h3>
            <p className="mt-3 text-sm text-gray-600">
              Predictable processing reduces administrative interruptions, helping maintain
              consistent facility operations and reporting structure.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-[#0F2A44]">Improved Family Access</h3>
            <p className="mt-3 text-sm text-gray-600">
              Structured access pathways allow families to support incarcerated individuals more
              efficiently through transparent and trackable systems.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="mx-auto mt-20 max-w-4xl border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-[#0F2A44]">Compliance &amp; Organizational Information</h2>

        <p className="mt-4 text-gray-600">
          The organization operates under verified nonprofit and regulatory identifiers:
        </p>

        <ul className="mt-6 space-y-2 text-sm text-gray-700">
          <li>• 501(c)(3) Public Charity</li>
          <li>• EIN: 88-1712603</li>
          <li>• NPI: 1295522035</li>
          <li>• SIC Code: 8322 (Social Services)</li>
          <li>• Benevity Causes Portal ID: 881712603</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-[#0F2A44]">
          Procurement &amp; Onboarding Process
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-gray-700">
          <div>
            <p className="font-semibold text-[#0F2A44]">1. Initial Contact</p>
            <p className="text-sm text-gray-600">
              Agencies initiate partnership requests through the Contact for Partnership channel.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#0F2A44]">2. Operational Review</p>
            <p className="text-sm text-gray-600">
              Requirements are reviewed to ensure alignment with facility operational needs and
              compliance expectations.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#0F2A44]">3. Integration Planning</p>
            <p className="text-sm text-gray-600">
              A structured onboarding plan is developed in coordination with facility administration.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#0F2A44]">4. Deployment</p>
            <p className="text-sm text-gray-600">
              Services are implemented with coordination between operational stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-4xl border-t border-gray-200 pt-12 text-center">
        <h2 className="text-xl font-bold text-[#0F2A44]">Agency Partnership Inquiries</h2>

        <p className="mt-3 text-gray-600">
          For procurement requests, system evaluation, or institutional partnership discussions.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block rounded px-6 py-3 font-semibold text-white"
          style={{ background: "#0F2A44" }}
        >
          Contact for Partnership
        </a>
      </section>
    </main>
  )
}
