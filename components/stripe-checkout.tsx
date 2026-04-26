'use client'

import { useCallback } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = publishableKey ? loadStripe(publishableKey) : null

interface StripeCheckoutProps {
  fetchClientSecret: () => Promise<string>
  onComplete?: () => void
}

export function StripeCheckout({ fetchClientSecret, onComplete }: StripeCheckoutProps) {
  const fetchClientSecretCallback = useCallback(fetchClientSecret, [fetchClientSecret])

  if (!stripePromise) {
    return (
      <div className="rounded-md border border-border bg-secondary p-4 text-sm text-muted-foreground">
        Stripe is not configured. Set <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to enable checkout.
      </div>
    )
  }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret: fetchClientSecretCallback,
          ...(onComplete ? { onComplete } : {}),
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
