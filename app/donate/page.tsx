import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Support Our Mission</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mighty Success Recovery Inc. is a nonprofit organization supporting structured programs
            that promote stability, accountability, and reintegration outcomes.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Donations help sustain mission-aligned initiatives and community support efforts.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-lg border border-border bg-secondary p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Donation processing will be connected securely in a future update.
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex w-full items-center justify-center rounded px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
            style={{ background: "#0F2A44" }}
          >
            Donate Securely
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            Placeholder only — no payment is processed on this page yet.
          </p>
        </div>
      </div>
    </div>
  )
}

