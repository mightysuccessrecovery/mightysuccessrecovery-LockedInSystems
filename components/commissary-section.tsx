"use client"

import { STRIPE_LINKS } from "@/lib/stripeLinks"
import { redirectToPayment } from "@/lib/redirect"
import { Button } from "@/components/ui/button"

export default function CommissarySection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Available Commissary Packs
      </h2>

      <div className="flex flex-col gap-3 sm:max-w-md">
        {STRIPE_LINKS.commissary.map((item) => (
          <Button
            key={item.name}
            type="button"
            variant="outline"
            className="h-auto w-full justify-between gap-4 py-4 text-left"
            onClick={() => redirectToPayment(item.url)}
          >
            <span className="font-medium">{item.name}</span>
            <span className="shrink-0 text-gold">${item.price}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
