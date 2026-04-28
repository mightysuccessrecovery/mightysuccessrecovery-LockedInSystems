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
        </nav>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; Mighty Success Recovery Inc. &bull; All Rights Reserved
      </div>
    </footer>
  )
}
