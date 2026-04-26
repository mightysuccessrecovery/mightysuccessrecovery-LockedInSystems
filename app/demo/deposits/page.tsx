"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DemoDepositsPage() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [facilityId, setFacilityId] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "deposit_demo",
          name,
          amount: amount ? Number.parseFloat(amount) : null,
          facilityId: facilityId.trim() || null,
        }),
      })
      const json = (await res.json()) as { success?: boolean }
      if (res.ok && json.success) {
        setSuccess(true)
      } else {
        setError("Could not submit demo form.")
      }
    } catch {
      setError("Request failed. Try again.")
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/demo" className="text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to demo hub
          </Link>
        </Button>

        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
            <Banknote className="h-5 w-5 text-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Deposits (demo)</h1>
            <p className="text-sm text-muted-foreground">No real money movement</p>
          </div>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg">Sample deposit</CardTitle>
            <CardDescription>Data is only echoed by the demo API — not sent to a processor.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Name</Label>
                <Input
                  id="demo-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-amount">Amount</Label>
                <Input
                  id="demo-amount"
                  type="number"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-facility">Facility ID (optional)</Label>
                <Input
                  id="demo-facility"
                  value={facilityId}
                  onChange={(e) => setFacilityId(e.target.value)}
                  placeholder="e.g. FAC-001"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {success && (
                <p className="text-sm font-medium text-foreground" role="status">
                  Success (demo): your form was received. No real deposit was made.
                </p>
              )}
              <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                Submit (demo)
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
