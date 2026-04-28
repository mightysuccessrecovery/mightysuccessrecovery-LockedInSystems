import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Services</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This page summarizes operational services available through LockedIn Systems for
            correctional facilities and authorized users.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-secondary p-6">
            <h2 className="text-base font-semibold text-foreground">Inmate Deposits</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Structured deposit processing workflows intended to align with facility-authorized
              inmate account systems.
            </p>
            <Link href="/deposit" className="mt-4 inline-flex text-sm font-medium text-gold hover:underline">
              Deposit Access
            </Link>
          </div>

          <div className="rounded-lg border border-border bg-secondary p-6">
            <h2 className="text-base font-semibold text-foreground">Commissary Services</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Commissary purchase workflows and facility-approved package selection, where available.
            </p>
            <Link href="/commissary" className="mt-4 inline-flex text-sm font-medium text-gold hover:underline">
              Commissary Access
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-secondary p-6">
          <h2 className="text-base font-semibold text-foreground">Fees and Support</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Fee disclosures and support channels are maintained for institutional review and user
            assistance.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/fees" className="font-medium text-gold hover:underline">
              Fees
            </Link>
            <Link href="/support" className="font-medium text-gold hover:underline">
              Support
            </Link>
            <Link href="/support/payment-inquiry" className="font-medium text-gold hover:underline">
              Payment Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

