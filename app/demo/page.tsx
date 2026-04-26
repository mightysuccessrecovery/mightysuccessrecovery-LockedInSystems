import Link from "next/link"
import { Package, Banknote, Headphones } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const panels = [
  {
    href: "/demo/commissary",
    title: "Commissary Preview",
    description: "Browse a sample commissary catalog (mock items only).",
    icon: Package,
  },
  {
    href: "/demo/deposits",
    title: "Deposit Flow Preview",
    description: "Try a non-production deposit form with instant feedback.",
    icon: Banknote,
  },
  {
    href: "/demo/support",
    title: "Support System Preview",
    description: "Send a demo support request (no real ticketing integration).",
    icon: Headphones,
  },
] as const

export default function DemoLandingPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Facility System Demo
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Isolated preview area — not connected to live facility or payment systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {panels.map((panel) => {
            const Icon = panel.icon
            return (
              <Card
                key={panel.href}
                className="border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <CardTitle className="text-lg">{panel.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {panel.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                    <Link href={panel.href}>Open</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Demo routes only — your production store, checkout, and support pages are unchanged.
        </p>
      </div>
    </div>
  )
}
