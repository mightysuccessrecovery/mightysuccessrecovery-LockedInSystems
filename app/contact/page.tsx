"use client"

export default function Contact() {
  const fields = ["Full Name", "Organization / Agency", "Title / Role", "Email"] as const

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-[#0F2A44]">Contact for Partnership</h1>

      <p className="mt-4 text-center text-gray-600">
        For correctional facilities, government agencies, and authorized partners
      </p>

      {/* EMAIL BOX */}
      <div className="mx-auto mt-10 max-w-xl rounded-lg border border-gray-300 bg-white p-6 text-center">
        <p className="font-semibold text-[#0F2A44]">Primary Contact Email</p>
        <p className="mt-2 text-gray-700">
          <a
            href="mailto:info@mightysuccessrecovery.org"
            className="font-medium text-[#0F2A44] underline underline-offset-2 hover:opacity-90"
          >
            info@mightysuccessrecovery.org
          </a>
        </p>
      </div>

      {/* FORM */}
      <form
        className="mx-auto mt-10 max-w-xl space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
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
