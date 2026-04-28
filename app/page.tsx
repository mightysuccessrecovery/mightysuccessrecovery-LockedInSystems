export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="text-center py-24 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
          Correctional Commissary &amp; Inmate Financial Support Services
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          A 501(c)(3) Public Charity providing secure, compliant, and accountable commissary
          and inmate fund support services for correctional facilities and their families.
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
    </main>
  )
}
