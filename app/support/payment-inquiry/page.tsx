"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type InquiryReason =
  | "Payment Issue"
  | "Transaction Not Received"
  | "Refund Request Inquiry"
  | "Fraud or Unauthorized Transaction"
  | "Other"

type FormState = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  stateWherePaymentWasMade: string
  orderId: string
  receiptDate: string
  servicePurchased: string
  amountCharged: string
  reasonForInquiry: InquiryReason | ""
  issueDescription: string
  sendCopy: boolean
}

export default function PaymentInquiryPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    stateWherePaymentWasMade: "",
    orderId: "",
    receiptDate: "",
    servicePurchased: "",
    amountCharged: "",
    reasonForInquiry: "",
    issueDescription: "",
    sendCopy: false,
  })

  const reasons = useMemo<InquiryReason[]>(
    () => [
      "Payment Issue",
      "Transaction Not Received",
      "Refund Request Inquiry",
      "Fraud or Unauthorized Transaction",
      "Other",
    ],
    []
  )

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder submit handler — ready for API integration
    console.log("Payment inquiry submitted", form)
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background py-8 md:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Payment &amp; Transaction Support Inquiry
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            All payments are processed through third-party payment providers and facility-authorized
            systems. Refund eligibility is determined by the payment processor and/or correctional
            facility policies.
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="border-b border-border bg-secondary">
            <CardTitle className="text-base">Inquiry Form</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                    autoComplete="given-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                    autoComplete="family-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    value={form.phoneNumber}
                    onChange={(e) => setForm((p) => ({ ...p, phoneNumber: e.target.value }))}
                    autoComplete="tel"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stateWherePaymentWasMade">State Where Payment Was Made</Label>
                  <Input
                    id="stateWherePaymentWasMade"
                    value={form.stateWherePaymentWasMade}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, stateWherePaymentWasMade: e.target.value }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderId">Order ID</Label>
                  <Input
                    id="orderId"
                    value={form.orderId}
                    onChange={(e) => setForm((p) => ({ ...p, orderId: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="receiptDate">Receipt Date</Label>
                  <Input
                    id="receiptDate"
                    type="date"
                    value={form.receiptDate}
                    onChange={(e) => setForm((p) => ({ ...p, receiptDate: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicePurchased">Service Purchased</Label>
                  <Input
                    id="servicePurchased"
                    value={form.servicePurchased}
                    onChange={(e) => setForm((p) => ({ ...p, servicePurchased: e.target.value }))}
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="amountCharged">Amount Charged</Label>
                  <Input
                    id="amountCharged"
                    value={form.amountCharged}
                    onChange={(e) => setForm((p) => ({ ...p, amountCharged: e.target.value }))}
                    inputMode="decimal"
                    placeholder="e.g., 79.75"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Reason for Inquiry</Label>
                  <Select
                    value={form.reasonForInquiry}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, reasonForInquiry: v as InquiryReason }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {reasons.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="issueDescription">Describe your issue</Label>
                  <Textarea
                    id="issueDescription"
                    value={form.issueDescription}
                    onChange={(e) => setForm((p) => ({ ...p, issueDescription: e.target.value }))}
                    placeholder="Please provide details. Do not include sensitive payment information."
                    rows={6}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="sendCopy"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-border"
                  checked={form.sendCopy}
                  onChange={(e) => setForm((p) => ({ ...p, sendCopy: e.target.checked }))}
                />
                <Label htmlFor="sendCopy" className="text-sm text-foreground font-normal">
                  Send me a copy of my response
                </Label>
              </div>

              <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                Submit Inquiry
              </Button>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Refunds, if applicable, are subject to the policies of the payment processor and
                correctional facility. Not all transactions are eligible for refunds.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

