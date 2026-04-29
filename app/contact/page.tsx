"use client"

export default function Contact() {
  const fields = ["Full Name", "Organization / Agency", "Title / Role", "Email"] as const

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-[#0F2A44]">Contact for Partnership</h1>

      <p className="mt-4 text-center text-gray-600">
        For correctional facilities, government agencies, and authorized partners
      </p>

      {/* EMAIL BOX — whole card opens mail */}
      <a
        href="mailto:info@mightysuccessrecovery.org?subject=Partnership%20inquiry"
        className="mx-auto mt-10 block max-w-xl rounded-lg border border-gray-300 bg-white p-6 text-center shadow-sm transition-colors hover:border-[#0F2A44] hover:bg-gray-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
      >
        <p className="font-semibold text-[#0F2A44]">Primary Contact Email</p>
        <p className="mt-2 font-medium text-[#0F2A44] underline underline-offset-2">
          info@mightysuccessrecovery.org
        </p>
        <p className="mt-3 text-xs text-gray-600">Tap or click anywhere in this box to email us</p>
      </a>

      {/* OPTIONAL DETAILS (compose your message in email when the link opens) */}
      <div className="mx-auto mt-10 max-w-xl space-y-4">
        {fields.map((p) => (
          <input
            key={p}
            type="text"
            name={p.toLowerCase().replace(/\s+/g, "-")}
            placeholder={p}
            className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
            autoComplete={
              p === "Email" ? "email" : p === "Full Name" ? "name" : "organization"
            }
          />
        ))}

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
        />

        <a
          href="mailto:info@mightysuccessrecovery.org?subject=Partnership%20Request"
          className="mt-2 block w-full rounded bg-[#0F2A44] py-3 text-center text-sm font-semibold text-white no-underline transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
        >
          Submit Partnership Request
        </a>
      </div>
    </main>
  )
}
