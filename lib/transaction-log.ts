import { mkdir, appendFile } from "fs/promises"
import path from "path"

const LOG_REL = path.join("data", "transactions.ndjson")

export type TransactionLogRecord = {
  event: string
  stripeObjectId: string
  amountTotal: number | null
  currency: string | null
  paymentStatus: string | null
  metadata: Record<string, string> | null
  customerEmail: string | null
}

export async function appendTransactionRecord(
  record: TransactionLogRecord
): Promise<void> {
  const line = JSON.stringify({ ...record, loggedAt: new Date().toISOString() }) + "\n"
  const filePath = path.join(process.cwd(), LOG_REL)
  try {
    await mkdir(path.dirname(filePath), { recursive: true })
    await appendFile(filePath, line, "utf8")
  } catch (err) {
    console.error("[transaction-log] append failed", err)
  }
}
