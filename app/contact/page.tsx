"use client"

export default function Contact() {
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
        name="contact"
        method="POST"
        action="/contact"
        data-netlify="true"
        className="mx-auto mt-10 max-w-xl space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#0F2A44]">Full Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#0F2A44]">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#0F2A44]">Phone Number</span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#0F2A44]">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded border border-black/70 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-[#0F2A44] focus:ring-2 focus:ring-[#0F2A44]/20"
          />
        </label>

        <button
          type="submit"
          className="w-full cursor-pointer rounded bg-[#0F2A44] py-3 font-semibold text-white hover:opacity-95"
        >
          Submit Partnership Request
        </button>
      </form>
    </main>
  )
}
