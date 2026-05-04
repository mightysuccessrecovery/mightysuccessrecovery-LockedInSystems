import { redirect } from "next/navigation"

/** Legacy URL — consolidated donation flow lives at /donate */
export default function DonationLegacyRedirect() {
  redirect("/donate")
}
