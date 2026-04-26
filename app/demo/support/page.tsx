"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function DemoSupportPage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitted(false)
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "support_demo", name, message }),
      })
      const json = (await res.json()) as { success?: boolean }
      if (res.ok && json.success) {
        setSubmitted(true)
      } else {
        setError("Could not submit demo request.")
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
            <Headphones className="h-5 w-5 text-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Support (demo)</h1>
            <p className="text-sm text-muted-foreground">Not the live support inbox</p>
          </div>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg">Contact (demo)</CardTitle>
            <CardDescription>
              Submissions are stored only in the API response for this session — not forwarded to
              support staff.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="text-sm font-medium text-foreground" role="status">
                Request submitted (demo mode)
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-support-name">Name</Label>
                  <Input
                    id="demo-support-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-support-message">Message</Label>
                  <Textarea
                    id="demo-support-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-24"
                    placeholder="How can we help? (demo)"
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                  Send (demo)
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
