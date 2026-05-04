import Link from "next/link"
import { ORG_EMAIL, ORG_PHONE, orgEinDisplay } from "@/lib/org"

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/deposit-policy", label: "Deposit Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
]

const services = [
  { href: "/send-funds", label: "Send Funds" },
  { href: "/donate", label: "Donate" },
  { href: "/programs", label: "Programs" },
  { href: "/facilities", label: "Find an inmate" },
  { href: "/deposit", label: "Guided deposit" },
  { href: "/store", label: "Commissary" },
  { href: "/support", label: "Support" },
  { href: "/legal", label: "Legal & compliance" },
  { href: "/procurement", label: "Procurement" },
]

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="font-bold text-[#0F2A44]">Mighty Success Recovery Inc.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DBA LockedIn Systems. {orgEinDisplay()}.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Contact:</span>{" "}
              <a href={`mailto:${ORG_EMAIL}`} className="text-[#0F2A44] underline underline-offset-2">
                {ORG_EMAIL}
              </a>
              {ORG_PHONE ? (
                <>
                  <br />
                  <span className="font-medium text-foreground">Phone:</span> {ORG_PHONE}
                </>
              ) : null}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Payments &amp; programs
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-muted-foreground transition-colors hover:text-[#0F2A44]"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Policies
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              {legal.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-[#0F2A44]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-lg border border-border bg-background p-4 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-[#0F2A44]">Trust &amp; security</p>
            <p className="mt-2">
              Payments are processed through Stripe with industry-standard encryption. We maintain
              documented policies for procurement, privacy, and transaction support.
            </p>
            <Link
              href="/donate"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#0F2A44] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0F2A44]/90"
            >
              Donate
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl rounded-md border border-dashed border-border bg-muted/30 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground">
          Mighty Success Recovery Inc. is an independent service provider and is not affiliated with any
          correctional institution unless explicitly stated.
        </p>

        <div className="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mighty Success Recovery Inc. · All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
