"use client"

export default function Contact() {
  const fields = ["Full Name", "Organization / Agency", "Title / Role", "Email"] as const

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-[#0F2A44]">Contact for Partnership</h1>

      <p className="mt-4 text-center text-gray-600">
        For correctional facilities, government agencies, and authorized partners
      </p>

      <a
        href="mailto:info@mightysuccessrecovery.org?subject=Mighty%20Success%20Recovery%20Inquiry"
        className="email-box mx-auto mt-10 max-w-xl rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2A44]"
      >
        <div className="black-box rounded text-center text-sm font-semibold">
          info@mightysuccessrecovery.org
        </div>
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

      </div>
    </main>
  )
}
