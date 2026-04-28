import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 text-sm md:grid-cols-3 md:gap-8">
        {/* COLUMN 1 */}
        <div>
          <p className="font-bold text-[#0F2A44]">Mighty Success Recovery Inc.</p>
          <p className="mt-2 text-gray-600">DBA LockedIn Systems</p>
          <p className="mt-2 text-gray-600">501(c)(3) Public Charity</p>
        </div>

        {/* COLUMN 2 */}
        <nav className="space-y-2 text-gray-600">
          <Link href="/" className="block hover:text-[#0F2A44]">
            Home
          </Link>
          <Link href="/facilities" className="block hover:text-[#0F2A44]">
            Facilities
          </Link>
          <Link href="/support" className="block hover:text-[#0F2A44]">
            Support
          </Link>
          <Link href="/about" className="block hover:text-[#0F2A44]">
            Mission
          </Link>
          <Link href="/history" className="block hover:text-[#0F2A44]">
            History
          </Link>
        </nav>

        {/* COLUMN 3 */}
        <nav className="space-y-2 text-gray-600">
          <Link href="/privacy" className="block hover:text-[#0F2A44]">
            Privacy Statement
          </Link>
          <Link href="/terms" className="block hover:text-[#0F2A44]">
            Terms and Conditions
          </Link>
          <Link href="/fees" className="block hover:text-[#0F2A44]">
            Fees
          </Link>
          <Link href="/donate" className="block hover:text-[#0F2A44]">
            Donate
          </Link>
          <p className="pt-1 text-xs text-gray-500">Support our nonprofit mission initiatives</p>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold text-[#0F2A44]">Accepted Payment Methods</p>
            <p className="mt-2 text-sm text-gray-600">
              We accept secure payments via Stripe-powered processing.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {["Visa", "Mastercard", "American Express", "Discover"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                  aria-label={label}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold text-[#0F2A44]">Support Our Mission</p>
            <p className="mt-2 text-sm text-gray-600">
              As a nonprofit organization, donations support transitional housing, reentry programs,
              and family stability initiatives.
            </p>
            <Link
              href="/donate"
              className="mt-4 inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white md:ml-auto"
              style={{ background: "#0F2A44" }}
            >
              Donate
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>All payments are processed securely via licensed third-party payment providers.</p>
          <p className="mt-2">&copy; Mighty Success Recovery Inc. &bull; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
