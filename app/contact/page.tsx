"use client"

export default function Contact() {
  const fields = ["Full Name", "Organization / Agency", "Title / Role", "Email"] as const

  return (
    <main className="min-h-screen px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-gold">Contact for Partnership</h1>

      <p className="mt-4 text-center text-white/60">
        For correctional facilities, government agencies, and authorized partners
      </p>

      {/* EMAIL BOX */}
      <div className="mx-auto mt-10 max-w-xl border border-white/10 p-6 text-center">
        <p className="font-semibold text-gold">Primary Contact Email</p>
        <p className="mt-2 text-white">
          <a href="mailto:info@mightysuccessrecovery.org" className="underline hover:text-gold">
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
            className="w-full border border-white/10 bg-transparent p-3 text-white placeholder:text-white/40"
            autoComplete={
              p === "Email" ? "email" : p === "Full Name" ? "name" : "organization"
            }
          />
        ))}

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full border border-white/10 bg-transparent p-3 text-white placeholder:text-white/40"
        />

        <button
          type="submit"
          className="w-full bg-gold py-3 font-semibold text-black hover:bg-gold/90"
        >
          Submit Partnership Request
        </button>
      </form>
    </main>
  )
}
