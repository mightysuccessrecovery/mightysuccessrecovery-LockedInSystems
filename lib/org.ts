/** Public org facts for trust/compliance UI. Override via env in production. */

export const ORG_NAME = "Mighty Success Recovery Inc."
export const ORG_DBA = "LockedIn Systems"

export const ORG_EMAIL =
  process.env.NEXT_PUBLIC_ORG_EMAIL ?? "info@mightysuccessrecovery.org"

export const ORG_PHONE = process.env.NEXT_PUBLIC_ORG_PHONE?.trim() ?? ""

/** Set NEXT_PUBLIC_ORG_EIN to display full EIN (e.g. 12-3456789). */
export const ORG_EIN = process.env.NEXT_PUBLIC_ORG_EIN?.trim() ?? ""

export function orgEinDisplay(): string {
  return ORG_EIN ? `EIN ${ORG_EIN}` : "501(c)(3) public charity — EIN available upon request"
}
