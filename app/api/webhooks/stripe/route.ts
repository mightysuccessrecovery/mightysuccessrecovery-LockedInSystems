import Stripe from "stripe"
import { getStripe } from "@/lib/stripe"
import { appendTransactionRecord } from "@/lib/transaction-log"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    console.warn("[stripe-webhook] STRIPE_WEBHOOK_SECRET not set; webhook disabled")
    return new Response("Webhook not configured", { status: 503 })
  }

  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  if (!sig) {
    return new Response("Missing stripe-signature", { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed", err)
    return new Response("Invalid signature", { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const md = session.metadata ?? undefined
    const flat: Record<string, string> | null = md
      ? Object.fromEntries(
          Object.entries(md).map(([k, v]) => [k, v === null || v === undefined ? "" : String(v)])
        )
      : null

    await appendTransactionRecord({
      event: event.type,
      stripeObjectId: session.id,
      amountTotal: session.amount_total,
      currency: session.currency,
      paymentStatus: session.payment_status,
      metadata: flat,
      customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
    })
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
