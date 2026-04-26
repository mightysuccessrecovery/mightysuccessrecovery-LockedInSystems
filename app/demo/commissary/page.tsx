"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const MOCK_ITEMS = [
  { id: "1", name: "Snack Pack A", price: 12.5, note: "Sample bundle" },
  { id: "2", name: "Hygiene Kit", price: 18.0, note: "Toiletries" },
  { id: "3", name: "Beverage Mix", price: 8.75, note: "Drinks" },
  { id: "4", name: "Stationery Set", price: 6.25, note: "Writing supplies" },
] as const

export default function DemoCommissaryPage() {
  const [message, setMessage] = useState<string | null>(null)

  async function placeDemoOrder() {
    setMessage(null)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "commissary_demo_order",
          items: MOCK_ITEMS.map((i) => ({ id: i.id, name: i.name, price: i.price })),
        }),
      })
      const json = (await res.json()) as { success?: boolean; message?: string }
      if (json.success) {
        setMessage("Demo order recorded (no payment or fulfillment).")
      } else {
        setMessage("Could not record demo order.")
      }
    } catch {
      setMessage("Request failed. Try again.")
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/demo" className="text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to demo hub
          </Link>
        </Button>

        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
            <ShoppingBag className="h-5 w-5 text-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Commissary (demo)</h1>
            <p className="text-sm text-muted-foreground">Mock catalog — for demonstration only</p>
          </div>
        </div>

        <div className="space-y-3">
          {MOCK_ITEMS.map((item) => (
            <Card key={item.id} className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 py-3">
                <CardTitle className="text-base font-medium">{item.name}</CardTitle>
                <Badge variant="secondary" className="text-gold">
                  ${item.price.toFixed(2)}
                </Badge>
              </CardHeader>
              <CardContent className="pb-3 pt-0 text-sm text-muted-foreground">
                {item.note}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button
            type="button"
            onClick={placeDemoOrder}
            className="w-full bg-gold text-gold-foreground hover:bg-gold/90 sm:w-auto"
          >
            Place Demo Order
          </Button>
          {message && (
            <p className="mt-3 text-sm text-foreground" role="status">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
