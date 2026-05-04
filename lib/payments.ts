/** Fixed service fee for standalone send-funds checkout (per product requirements). */
export const SEND_FUNDS_SERVICE_FEE = 3.5

/** Estimated Stripe-style processing (shown in UI; not a Stripe quote). */
export function estimateCardProcessingFee(amount: number): number {
  if (amount <= 0) return 0
  const raw = amount * 0.029 + 0.3
  return Math.round(raw * 100) / 100
}

export function estimateAchProcessingFee(amount: number): number {
  if (amount <= 0) return 0
  const raw = Math.max(0.25, amount * 0.008)
  const capped = Math.min(raw, 5)
  return Math.round(capped * 100) / 100
}

export function estimateProcessingFee(
  amount: number,
  method: "card" | "ach"
): number {
  return method === "ach"
    ? estimateAchProcessingFee(amount)
    : estimateCardProcessingFee(amount)
}

export type SendFundsTotals = {
  amount: number
  processingFeeEstimate: number
  serviceFee: number
  processingPassThrough: number
  total: number
}

export function computeSendFundsTotals(
  amount: number,
  method: "card" | "ach",
  coverProcessingFee: boolean
): SendFundsTotals {
  const processingFeeEstimate = estimateProcessingFee(amount, method)
  const serviceFee = SEND_FUNDS_SERVICE_FEE
  const processingPassThrough = coverProcessingFee ? processingFeeEstimate : 0
  const total =
    Math.round((amount + serviceFee + processingPassThrough) * 100) / 100
  return {
    amount,
    processingFeeEstimate,
    serviceFee,
    processingPassThrough,
    total,
  }
}
