export default function ProcurementPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      {/* HEADER */}
      <h1
        className="text-3xl md:text-4xl font-bold text-center"
        style={{ color: "var(--gold)" }}
      >
        Procurement &amp; Agency Information
      </h1>

      <p className="text-center text-white/70 mt-4">
        For correctional facilities, government agencies, and authorized institutional partners
      </p>

      {/* INTRO */}
      <section className="mt-12 text-white/70 leading-relaxed">
        <p>
          Mighty Success Recovery Inc., DBA LockedIn Systems, is a 501(c)(3) Public Charity
          providing structured commissary and inmate financial support services designed for
          correctional environments.
        </p>

        <p className="mt-4">
          This page is intended to support procurement review, vendor evaluation, and agency
          onboarding processes by providing clear operational, compliance, and service information.
        </p>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="mt-16">
        <h2 className="text-xl font-bold" style={{ color: "var(--gold)" }}>
          Operational Value for Correctional Facilities
        </h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 rounded">
            <h3 className="text-gold font-semibold">Administrative Efficiency</h3>
            <p className="text-white/70 text-sm mt-2">
              Streamlined systems reduce manual processing and help staff manage transactions with
              less administrative overhead.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded">
            <h3 className="text-gold font-semibold">Operational Stability</h3>
            <p className="text-white/70 text-sm mt-2">
              Predictable financial workflows support institutional consistency and reduce
              avoidable service disruptions.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded">
            <h3 className="text-gold font-semibold">Improved Family Access</h3>
            <p className="text-white/70 text-sm mt-2">
              Structured access systems help families support incarcerated individuals more
              efficiently and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-xl font-bold" style={{ color: "var(--gold)" }}>
          Compliance &amp; Organizational Information
        </h2>

        <ul className="mt-6 text-white/70 space-y-2 text-sm">
          <li>• 501(c)(3) Public Charity</li>
          <li>• EIN: 88-1712603</li>
          <li>• NPI: 1295522035</li>
          <li>• SIC Code: 8322</li>
          <li>• Benevity Causes Portal ID: 881712603</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="mt-16">
        <h2 className="text-xl font-bold" style={{ color: "var(--gold)" }}>
          Procurement &amp; Onboarding Process
        </h2>

        <div className="mt-6 space-y-4 text-white/70">
          <p>
            <strong style={{ color: "var(--gold)" }}>1. Initial Contact:</strong> Agencies initiate
            partnership inquiries via the Contact for Partnership page.
          </p>

          <p>
            <strong style={{ color: "var(--gold)" }}>2. Review:</strong> Operational and compliance
            requirements are reviewed for alignment with facility needs.
          </p>

          <p>
            <strong style={{ color: "var(--gold)" }}>3. Integration Planning:</strong> A structured
            onboarding plan is developed for system alignment.
          </p>

          <p>
            <strong style={{ color: "var(--gold)" }}>4. Deployment:</strong> Services are
            implemented in coordination with facility administration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center border-t border-white/10 pt-12">
        <h2 className="text-xl font-bold" style={{ color: "var(--gold)" }}>
          Agency Partnership Inquiries
        </h2>

        <p className="text-white/70 mt-4">
          For procurement requests, system evaluation, or partnership discussions.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 font-semibold rounded"
          style={{ background: "var(--gold)", color: "#000" }}
        >
          Contact for Partnership
        </a>
      </section>
    </main>
  )
}

