"use client"

import { ORG_EMAIL, ORG_PHONE, orgEinDisplay } from "@/lib/org"

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-[#0F2A44]">Contact for Partnership</h1>

      <p className="mt-4 text-center text-gray-600">
        For correctional facilities, government agencies, and authorized partners
      </p>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm text-gray-600 leading-relaxed">
        {orgEinDisplay()}. This site uses SSL/TLS encryption for data in transit. Payments are processed
        by Stripe; we do not store full card or bank numbers on our servers.
      </p>

      {ORG_PHONE ? (
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray-700">
          <strong>Phone:</strong> {ORG_PHONE}
        </p>
      ) : null}

      <a
        href={`mailto:${ORG_EMAIL}?subject=Partnership%20Request`}
        className="email-box mx-auto mt-10 block max-w-xl text-black no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
      >
        <strong>Email Support Only</strong>
        <br />
        {ORG_EMAIL}
      </a>
      <p className="mx-auto mt-3 max-w-xl text-center text-xs text-gray-600">
        If your device doesn’t open email automatically, use{" "}
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(ORG_EMAIL)}&su=Partnership%20Request`}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[#0F2A44] underline"
        >
          Gmail
        </a>{" "}
        or{" "}
        <a
          href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(ORG_EMAIL)}&subject=Partnership%20Request`}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[#0F2A44] underline"
        >
          Outlook
        </a>
        .
      </p>

      <form
        action="https://formspree.io/f/xlgaqvro"
        method="POST"
        className="mx-auto mt-10 max-w-xl space-y-4"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          autoComplete="name"
          className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization / Agency"
          autoComplete="organization"
          className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
        />

        <input
          type="text"
          name="title"
          placeholder="Title / Role"
          className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          autoComplete="email"
          className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
        />

        <button
          type="submit"
          className="w-full rounded bg-[#0F2A44] py-3 font-semibold text-white hover:opacity-95"
        >
          Submit Partnership Request
        </button>
      </form>
    </main>
  )
}
