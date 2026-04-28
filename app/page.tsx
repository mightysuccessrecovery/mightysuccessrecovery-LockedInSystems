import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="border-b border-white/10 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Correctional Commissary &amp; Inmate Financial Support Services
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          A 501(c)(3) Public Charity providing secure, compliant, and accountable commissary
          and inmate fund support services for correctional facilities and their families.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded bg-gold px-6 py-3 font-semibold text-black"
          >
            Contact for Partnership
          </Link>

          <Link
            href="#demo"
            className="rounded border border-gold px-6 py-3 text-gold"
          >
            Request a Demonstration
          </Link>
        </div>
      </section>

      {/* BANNER */}
      <section id="demo" className="bg-gold py-3 text-center font-semibold text-black">
        Agency Partnerships &amp; Platform Demonstration Available
      </section>

      {/* SERVICES */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {[
          "Inmate Fund Processing Support",
          "Commissary Coordination Services",
          "Family Payment Access Systems",
          "Transaction Tracking & Reporting",
        ].map((item, i) => (
          <div key={i} className="rounded border border-white/10 p-6">
            <h3 className="font-semibold text-gold">{item}</h3>
          </div>
        ))}
      </section>

      {/* VALUE / COMPARISON SECTION */}
      <section className="mx-auto max-w-5xl border-b border-white/10 px-6 py-20">
        <h2 className="text-center text-2xl font-bold text-gold md:text-3xl">
          Operational Benefits for Correctional Facilities &amp; Families
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-white/70">
          Our services are designed to support correctional operations by improving financial access
          systems for families while reducing administrative burden on facility staff.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded border border-white/10 p-6">
            <h3 className="font-semibold text-gold">Reduced Administrative Burden</h3>
            <p className="mt-3 text-sm text-white/70">
              Streamlined payment and commissary support systems reduce manual processing and help
              facility staff focus on core operational responsibilities.
            </p>
          </div>

          <div className="rounded border border-white/10 p-6">
            <h3 className="font-semibold text-gold">Improved Family Affordability</h3>
            <p className="mt-3 text-sm text-white/70">
              Our structure is designed to minimize unnecessary fees and improve access for families
              supporting incarcerated individuals.
            </p>
          </div>

          <div className="rounded border border-white/10 p-6">
            <h3 className="font-semibold text-gold">Better Inmate Stability</h3>
            <p className="mt-3 text-sm text-white/70">
              Consistent and reliable access to funds and commissary support contributes to reduced
              stress, fewer disruptions, and improved institutional stability.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-white/60">
          By improving access and transparency, facilities can reduce avoidable disputes, improve
          communication flow, and enhance overall operational efficiency.
        </p>
      </section>

      {/* COMPLIANCE */}
      <section className="border-t border-white/10 px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gold">Security &amp; Compliance</h2>

        <p className="mx-auto mt-4 max-w-3xl text-white/70">
          Secure payment processing via Stripe, encrypted transactions, audit logs, and controlled
          access systems designed for correctional environments.
        </p>
      </section>

      {/* NONPROFIT */}
      <section className="border-t border-white/10 px-6 py-16 text-center">
        <h2 className="text-xl font-bold text-gold">501(c)(3) Public Charity</h2>

        <p className="mt-4 text-white/60">
          EIN: 88-1712603 &bull; NPI: 1295522035 &bull; SIC: 8322 &bull; Benevity ID: 881712603
        </p>
      </section>
    </main>
  )
}
