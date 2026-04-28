export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="text-center py-24 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
          Correctional Commissary &amp; Inmate Financial Support Services
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          A 501(c)(3) Public Charity providing secure, compliant, and structured commissary and
          inmate fund support services for correctional facilities and their families.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          This platform is designed to improve operational efficiency, financial transparency, and
          family access coordination.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-6 py-3 rounded font-semibold text-white"
            style={{ background: "var(--primary)" }}
          >
            Contact for Partnership
          </a>

          <a
            href="/partnership"
            className="px-6 py-3 rounded font-semibold border"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
          >
            Partnership
          </a>

          <a
            href="/procurement"
            className="px-6 py-3 rounded font-semibold"
            style={{ background: "var(--gold)", color: "#111" }}
          >
            Request a Demonstration
          </a>
        </div>

        {/* SMALL INFO STRIP */}
        <div
          className="mt-10 inline-block px-4 py-2 rounded-full border text-sm"
          style={{
            borderColor: "var(--border)",
            color: "var(--muted)",
          }}
        >
          Agency Partnerships &amp; Platform Demonstration Available
        </div>
      </section>

      {/* FACILITY SUPPORT */}
      <section className="border-t border-gray-200 bg-[var(--background)] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#0F2A44] md:text-3xl">
            Facility Support &amp; Operational Integration
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We provide structured support tools designed for correctional facilities seeking to
            improve commissary and inmate financial workflows.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <p className="text-center font-semibold text-[#0F2A44]">Key Areas of Support:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Transaction coordination systems</li>
            <li>Family funding access processes</li>
            <li>Administrative workload reduction</li>
            <li>Reporting and transparency tools</li>
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-gray-600">
          Our systems are designed to integrate with existing facility operations without disrupting
          established procedures.
        </p>
      </section>

      {/* ORGANIZATIONAL HISTORY */}
      <section className="border-t border-gray-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F2A44] md:text-3xl">
            Organizational History
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Mighty Success Recovery Inc. was established as a nonprofit organization focused on
            improving structured financial access systems within correctional environments.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            DBA LockedIn Systems represents the operational platform supporting commissary and inmate
            financial coordination services.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            The organization operates under a nonprofit framework intended to support families and
            correctional facility operations through structured financial systems.
          </p>
        </div>
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
    </main>
  )
}
