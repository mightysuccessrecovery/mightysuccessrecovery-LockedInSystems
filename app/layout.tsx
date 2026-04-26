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
  title: "LockedIn Systems — Secure Commissary & Deposit Platform",
  description:
    "LockedIn Systems operated by Mighty Success Recovery Inc. — A secure, nonprofit-style commissary and inmate deposit platform.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    title: "LockedIn Systems — Secure Commissary & Deposit Platform",
    description:
      "LockedIn Systems operated by Mighty Success Recovery Inc. — A secure, nonprofit-style commissary and inmate deposit platform.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "LockedIn Systems — Secure Commissary & Deposit Platform",
    description:
      "LockedIn Systems operated by Mighty Success Recovery Inc. — A secure, nonprofit-style commissary and inmate deposit platform.",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" }
    ],
    apple: [{ url: "/apple-icon.png" }],
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
