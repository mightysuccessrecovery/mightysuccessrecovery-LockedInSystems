import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "LockedIn Systems | Inmate Care & Facility Solutions",
  description:
    "LockedIn Systems, a DBA of Mighty Success Recovery Inc., delivers secure inmate services, transparent family connection, and structured sober living and halfway housing support.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    title: "LockedIn Systems | Inmate Care & Facility Solutions",
    description:
      "LockedIn Systems, a DBA of Mighty Success Recovery Inc., delivers secure inmate services, transparent family connection, and structured sober living and halfway housing support.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "LockedIn Systems | Inmate Care & Facility Solutions",
    description:
      "LockedIn Systems, a DBA of Mighty Success Recovery Inc., delivers secure inmate services, transparent family connection, and structured sober living and halfway housing support.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
