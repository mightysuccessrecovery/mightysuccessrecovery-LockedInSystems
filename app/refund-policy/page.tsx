import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refund Policy — Mighty Success Recovery Inc.",
  description: "Refund eligibility and timelines for deposits, transfers, and related service fees.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F2A44]">Refund policy</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          This policy describes how refund requests are evaluated for payments processed on behalf of
          Mighty Success Recovery Inc. It is not legal advice; consult counsel for your situation.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#0F2A44]">Deposits &amp; transfers</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
          <li>
            If a transfer has <strong className="text-foreground">not</strong> been completed or disbursed,
            we will work with our payment processor to attempt cancellation or refund where permitted
            by network rules.
          </li>
          <li>
            Once funds are disbursed to an institutional or designated account per facility procedures,
            refunds may need to be coordinated through the facility&apos;s own policies.
          </li>
          <li>
            Partial refunds are generally not available for completed service-fee components unless
            required by law or processor policy.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-[#0F2A44]">Donations</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Charitable donations are ordinarily non-refundable once processed. If you believe a donation
          was made in error, contact us promptly with transaction identifiers so we can review in line
          with nonprofit best practices and card-network rules.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#0F2A44]">How to request review</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Email{" "}
          <a href="mailto:info@mightysuccessrecovery.org" className="font-medium text-[#0F2A44] underline">
            info@mightysuccessrecovery.org
          </a>{" "}
          with the email used at checkout, approximate date and amount, and whether the payment was a
          donation or a deposit. You may also use{" "}
          <Link href="/support/payment-inquiry" className="font-medium text-[#0F2A44] underline">
            Payment &amp; transaction support
          </Link>
          .
        </p>

        <p className="mt-10 text-sm text-muted-foreground">
          Related:{" "}
          <Link href="/deposit-policy" className="font-medium text-[#0F2A44] underline">
            Deposit Policy
          </Link>
          ,{" "}
          <Link href="/terms" className="font-medium text-[#0F2A44] underline">
            Terms of Service
          </Link>
          .
        </p>
      </article>
    </div>
  )
}
