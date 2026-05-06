"use client"

import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site"

export default function Contact() {
  const mailPartnership = `mailto:${SITE_EMAIL}?subject=Partnership%20Request`
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_EMAIL)}&su=${encodeURIComponent("Partnership Request")}`
  const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(SITE_EMAIL)}&subject=${encodeURIComponent("Partnership Request")}`

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-16 sm:px-6 md:py-20">
      <h1 className="text-center text-3xl font-bold text-[#0F2A44]">Contact for Partnership</h1>

      <p className="mt-4 text-center text-gray-600">
        For correctional facilities, government agencies, and authorized partners
      </p>

      <div className="mx-auto mt-10 max-w-xl rounded-lg border border-black/15 bg-white px-5 py-6 shadow-sm sm:px-6">
        <p className="text-sm leading-relaxed text-gray-700">
          Primary communication is handled via email. Phone support is available for verified agencies
          and partnership inquiries.
        </p>
        <div className="mt-5 space-y-3 border-t border-gray-200 pt-5 text-sm text-gray-800">
          <p>
            <span className="font-semibold text-[#0F2A44]">Phone:</span>{" "}
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="font-medium text-[#0F2A44] underline-offset-2 hover:underline"
            >
              {SITE_PHONE_DISPLAY}
            </a>{" "}
            <span className="text-gray-600">(For verified partners and urgent inquiries)</span>
          </p>
          <p>
            <span className="font-semibold text-[#0F2A44]">Email:</span>{" "}
            <a href={mailPartnership} className="font-medium text-[#0F2A44] underline-offset-2 hover:underline">
              {SITE_EMAIL}
            </a>
          </p>
          <p>
            <span className="font-semibold text-[#0F2A44]">Response Time:</span>{" "}
            <span className="text-gray-700">24–48 business hours</span>
          </p>
        </div>
      </div>

      <p className="mx-auto mt-4 max-w-xl text-center text-xs text-gray-600">
        If your device doesn&apos;t open email automatically, use{" "}
        <a href={gmailUrl} target="_blank" rel="noreferrer" className="font-medium text-[#0F2A44] underline">
          Gmail
        </a>{" "}
        or{" "}
        <a href={outlookUrl} target="_blank" rel="noreferrer" className="font-medium text-[#0F2A44] underline">
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

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-gray-800">
            Phone Number (Optional but Recommended)
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="(555) 555-0100"
            autoComplete="tel"
            className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
          />
        </div>

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
