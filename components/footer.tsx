export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-center">
      <p className="font-bold text-gold">Mighty Success Recovery Inc. | LockedIn Systems</p>

      <p className="mt-2 text-white/60">501(c)(3) Public Charity</p>

      <p className="mt-2 text-sm text-white/40">
        EIN: 88-1712603 &bull; NPI: 1295522035 &bull; SIC: 8322 &bull; Benevity ID: 881712603
      </p>

      <p className="mt-2 text-white/60">
        <a
          href="mailto:info@mightysuccessrecovery.org"
          className="hover:text-gold hover:underline"
        >
          info@mightysuccessrecovery.org
        </a>
      </p>

      <p className="mt-3">
        <a href="/procurement" className="text-white/70 hover:text-white">
          Procurement
        </a>
      </p>

      <p className="mt-6 text-sm text-white/40">
        &copy; Mighty Success Recovery Inc. &bull; All Rights Reserved
      </p>
    </footer>
  )
}
