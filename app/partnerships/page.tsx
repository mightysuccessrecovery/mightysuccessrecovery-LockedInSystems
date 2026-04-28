import Link from "next/link"

export default function PartnershipsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Partnerships</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Partnership engagement is intended for correctional facilities, government agencies, and
            authorized institutional partners.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-secondary p-6">
          <h2 className="text-base font-semibold text-foreground">Agency partnership inquiries</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Request evaluation, demonstration, or procurement documentation.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold text-white"
              style={{ background: "#0F2A44" }}
            >
              Contact for Partnership
            </Link>
            <Link
              href="/procurement"
              className="inline-flex items-center justify-center rounded border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: "#0F2A44", color: "#0F2A44" }}
            >
              Request Demonstration
            </Link>
          </div>
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          <p>
            For formal disclosures and compliance transparency, please reference the{" "}
            <Link href="/legal" className="font-medium text-gold hover:underline">
              Legal &amp; Compliance Transparency
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  )
}

