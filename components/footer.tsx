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
          <Link href="/about" className="block hover:text-[#0F2A44]">
            Platform Overview
          </Link>
          <Link href="/services" className="block hover:text-[#0F2A44]">
            Services
          </Link>
          <Link href="/partnerships" className="block hover:text-[#0F2A44]">
            Partnerships
          </Link>
          <Link href="/fees" className="block hover:text-[#0F2A44]">
            Fees
          </Link>
          <Link href="/support" className="block hover:text-[#0F2A44]">
            Support
          </Link>
          <Link href="/contact" className="block hover:text-[#0F2A44]">
            Contact
          </Link>
        </nav>

        {/* COLUMN 3 */}
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-[#0F2A44]">Organization</p>
            <nav className="mt-2 space-y-2 text-gray-600">
              <Link href="/mission" className="block hover:text-[#0F2A44]">
                Mission
              </Link>
              <Link href="/legal" className="block hover:text-[#0F2A44]">
                Legal &amp; Compliance
              </Link>
              <Link href="/privacy" className="block hover:text-[#0F2A44]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-[#0F2A44]">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold text-[#0F2A44]">Support Our Mission</p>
            <p className="mt-2 text-sm text-gray-600">
              Support our nonprofit mission initiatives.
            </p>
            <Link
              href="/donate"
              className="mt-3 inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "#0F2A44" }}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold text-[#0F2A44]">Accepted Payment Methods</p>
            <p className="mt-2 text-sm text-gray-600">
              We accept secure payments via Stripe-powered processing.
            </p>
            <div className="mt-4">
              <div className="payment-methods">
                <h3 className="sr-only">Accepted Payment Methods</h3>
                <div className="logos flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <img src="/assets/visa.svg" alt="Visa" className="h-6 w-auto opacity-80" />
                  <img src="/assets/mastercard.svg" alt="Mastercard" className="h-6 w-auto opacity-80" />
                  <img src="/assets/amex.svg" alt="American Express" className="h-6 w-auto opacity-80" />
                  <img src="/assets/discover.svg" alt="Discover" className="h-6 w-auto opacity-80" />
                </div>
              </div>
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
