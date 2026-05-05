"use client"

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-[#0F2A44]">Contact for Partnership</h1>

      <p className="mt-4 text-center text-gray-600">
        For correctional facilities, government agencies, and authorized partners
      </p>

      <a
        href="mailto:info@mightysuccessrecovery.org?subject=Partnership%20Request"
        className="email-box mx-auto mt-10 block max-w-xl text-black no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
      >
        <strong>Email Support Only</strong>
        <br />
        info@mightysuccessrecovery.org
      </a>
      <p className="mx-auto mt-3 max-w-xl text-center text-xs text-gray-600">
        If your device doesn’t open email automatically, use{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mightysuccessrecovery.org&su=Partnership%20Request"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[#0F2A44] underline"
        >
          Gmail
        </a>{" "}
        or{" "}
        <a
          href="https://outlook.office.com/mail/deeplink/compose?to=info@mightysuccessrecovery.org&subject=Partnership%20Request"
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
