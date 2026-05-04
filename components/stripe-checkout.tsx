'use client'

import { useCallback, useMemo } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = publishableKey ? loadStripe(publishableKey) : null

interface StripeCheckoutProps {
  /** Prefetched Checkout Session client secret. */
  clientSecret?: string | null
  /** Fetch a client secret when Checkout initializes. */
  fetchClientSecret?: () => Promise<string>
  onComplete?: () => void
}

export function StripeCheckout({
  clientSecret,
  fetchClientSecret,
  onComplete,
}: StripeCheckoutProps) {
  const fetchCb = useCallback(async () => {
    if (!fetchClientSecret) throw new Error('Missing fetchClientSecret')
    return fetchClientSecret()
  }, [fetchClientSecret])

  const options = useMemo(() => {
    if (clientSecret) {
      return { clientSecret, ...(onComplete ? { onComplete } : {}) }
    }
    return { fetchClientSecret: fetchCb, ...(onComplete ? { onComplete } : {}) }
  }, [clientSecret, fetchCb, onComplete])

  if (!stripePromise) {
    return (
      <div className="rounded-md border border-border bg-secondary p-4 text-sm text-muted-foreground">
        Stripe is not configured. Set <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to enable checkout.
      </div>
    )
  }

  if (!clientSecret && !fetchClientSecret) {
    return (
      <div className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        Checkout is not ready.
      </div>
    )
  }

  return (
    <div id="checkout" className="relative min-h-[420px] w-full">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options as any}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
