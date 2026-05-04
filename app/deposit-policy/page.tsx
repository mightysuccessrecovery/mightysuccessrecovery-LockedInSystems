import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Deposit Policy — Mighty Success Recovery Inc.",
  description: "Processing times, failed transactions, refunds, chargebacks, and verification for fund deposits.",
}

export default function DepositPolicyPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-10 md:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0F2A44]">Deposit policy</h1>
        <p className="lead text-muted-foreground not-prose mt-4 text-lg leading-relaxed">
          This policy applies to <strong className="text-foreground">inmate fund deposits and transfers</strong>{" "}
          processed through Mighty Success Recovery Inc. (DBA LockedIn Systems) payment channels.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Processing times</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            <strong className="text-foreground">Card payments</strong> are typically authorized immediately;
            settlement timing follows card network and banking schedules.
          </li>
          <li>
            <strong className="text-foreground">ACH / bank transfer</strong> commonly settles within{" "}
            <strong className="text-foreground">1–3 business days</strong> and may require additional
            verification steps depending on the financial institution.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold">Failed transactions</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          A transfer may fail due to insufficient funds, incorrect account details, institution holds,
          or risk controls. Failed attempts are not charged. You may retry using another eligible
          payment method shown at checkout.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Refunds</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Refund eligibility depends on transfer status, facility rules, and whether disbursement has
          occurred. See our{" "}
          <Link href="/refund-policy" className="font-medium text-[#0F2A44] underline">
            Refund Policy
          </Link>{" "}
          for the full framework and timelines.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Chargebacks</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          If a cardholder initiates a chargeback, we cooperate with Stripe and financial partners to
          supply available transaction metadata (including recipient and facility fields submitted at
          checkout). Chargebacks may delay or reverse settlement until resolved.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Verification &amp; compliance</h2>
        <blockquote className="mt-4 border-l-4 border-[#0F2A44]/30 pl-4 text-muted-foreground italic">
          All transactions are subject to identity verification and fraud prevention protocols.
        </blockquote>
        <blockquote className="mt-4 border-l-4 border-emerald-600/30 pl-4 text-muted-foreground italic">
          Funds are processed only for approved facilities and authorized recipients.
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">
          Questions:{" "}
          <a href="mailto:info@mightysuccessrecovery.org" className="font-medium text-[#0F2A44] underline">
            info@mightysuccessrecovery.org
          </a>
        </p>
      </article>
    </div>
  )
}
