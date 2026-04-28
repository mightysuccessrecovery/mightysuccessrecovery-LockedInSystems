export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-white py-10 text-center">
      <p className="font-bold text-[var(--primary)]">
        Mighty Success Recovery Inc. | LockedIn Systems
      </p>

      <p className="mt-2 text-gray-700">501(c)(3) Public Charity</p>

      <p className="mt-2 text-sm text-gray-600">
        EIN: 88-1712603 &bull; NPI: 1295522035 &bull; SIC: 8322 &bull; Benevity ID: 881712603
      </p>

      <p className="mt-2 text-gray-600">
        <a
          href="mailto:info@mightysuccessrecovery.org"
          className="hover:text-[var(--primary)] hover:underline"
        >
          info@mightysuccessrecovery.org
        </a>
      </p>

      <p className="mt-3">
        <a href="/procurement" className="text-gray-600 hover:text-[var(--primary)]">
          Procurement
        </a>
      </p>

      <p className="mt-6 text-sm text-gray-500">
        &copy; Mighty Success Recovery Inc. &bull; All Rights Reserved
      </p>
    </footer>
  )
}
