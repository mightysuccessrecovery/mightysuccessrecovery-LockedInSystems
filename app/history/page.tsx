"use client"

import { useState } from "react"
import {
  History,
  Search,
  Phone,
  Shield,
  CheckCircle,
  Clock,
  ShoppingBag,
  DollarSign,
  Heart,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getTransactionHistory, type TransactionRecord } from "@/app/actions/history"

export default function HistoryPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState<"phone" | "verify" | "history">("phone")
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState<TransactionRecord[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSendCode = () => {
    if (phoneNumber.length >= 10) {
      setIsLoading(true)
      setError(null)
      // Simulate sending verification code
      setTimeout(() => {
        setIsLoading(false)
        setStep("verify")
      }, 1500)
    }
  }

  const handleVerifyCode = async () => {
    if (verificationCode.length >= 4) {
      setIsLoading(true)
      setError(null)
      
      // Simulate verification delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Fetch real transaction history from Stripe
      const result = await getTransactionHistory(phoneNumber)
      
      setIsLoading(false)
      
      if (result.success) {
        setTransactions(result.transactions)
        setStep("history")
      } else {
        setError(result.error || "Failed to fetch history")
      }
    }
  }

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "commissary":
        return <ShoppingBag className="h-4 w-4 text-gold" />
      case "deposit":
        return <DollarSign className="h-4 w-4 text-gold" />
      case "donation":
        return <Heart className="h-4 w-4 text-gold" />
      default:
        return <ShoppingBag className="h-4 w-4 text-gold" />
    }
  }

  const getStatusBadge = (status: string) => {
    const isSuccess = ["completed", "succeeded", "delivered"].includes(status.toLowerCase())
    return (
      <Badge
        variant="outline"
        className={
          isSuccess
            ? "border-green-600/50 bg-green-600/10 text-green-600"
            : "border-gold/50 bg-gold/10 text-gold"
        }
      >
        {isSuccess ? (
          <CheckCircle className="mr-1 h-3 w-3" />
        ) : (
          <Clock className="mr-1 h-3 w-3" />
        )}
        {status}
      </Badge>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
            <History className="h-6 w-6 text-gold" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Transaction History
          </h1>
          <p className="mt-2 text-muted-foreground">
            View your past deposits, commissary orders, and donations
          </p>
        </div>

        {error && (
          <Alert className="mb-6 border-destructive/50 bg-destructive/10">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">{error}</AlertDescription>
          </Alert>
        )}

        {step === "phone" && (
          <Card className="mx-auto max-w-md border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-gold" />
                Enter Your Phone Number
              </CardTitle>
              <CardDescription>
                We&apos;ll send a verification code to confirm your identity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formatPhoneNumber(phoneNumber)}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="h-12"
                />
                <p className="text-xs text-muted-foreground">
                  Enter the phone number used during your transactions
                </p>
              </div>

              <Button
                onClick={handleSendCode}
                disabled={phoneNumber.length < 10 || isLoading}
                className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Verification Code"
                )}
              </Button>

              <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 text-gold" />
                <span>Your information is securely protected</span>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "verify" && (
          <Card className="mx-auto max-w-md border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-gold" />
                Verify Your Identity
              </CardTitle>
              <CardDescription>
                Enter the 6-digit code sent to {formatPhoneNumber(phoneNumber)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="000000"
                  value={verificationCode}
                  onChange={(e) =>
                    setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  className="h-12 text-center text-2xl tracking-widest"
                  maxLength={6}
                />
              </div>

              <Button
                onClick={handleVerifyCode}
                disabled={verificationCode.length < 4 || isLoading}
                className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching transactions...
                  </>
                ) : (
                  "Verify & Search History"
                )}
              </Button>

              <div className="text-center">
                <Button
                  variant="link"
                  onClick={() => {
                    setStep("phone")
                    setVerificationCode("")
                    setError(null)
                  }}
                  className="text-sm text-muted-foreground"
                >
                  Use a different phone number
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "history" && (
          <Card className="border-border overflow-hidden">
            <CardHeader className="border-b border-border bg-secondary">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Your Transactions ({transactions.length})
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setStep("phone")
                    setPhoneNumber("")
                    setVerificationCode("")
                    setTransactions([])
                    setError(null)
                  }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  New Search
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {transactions.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <History className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">No Transactions Found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We couldn&apos;t find any transactions associated with this phone number.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Make sure you&apos;re using the same phone number you used during checkout.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold">Date</TableHead>
                        <TableHead className="font-semibold">Details</TableHead>
                        <TableHead className="font-semibold">Amount</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((item) => (
                        <TableRow key={item.id} className="hover:bg-secondary/50">
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getTypeIcon(item.type)}
                              <span className="capitalize">{item.type}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </TableCell>
                          <TableCell>
                            <div>
                              {item.inmateName && (
                                <p className="font-medium">{item.inmateName}</p>
                              )}
                              {item.facilityName && (
                                <p className="text-xs text-muted-foreground">{item.facilityName}</p>
                              )}
                              {item.packageName && (
                                <p className="text-xs text-gold">{item.packageName}</p>
                              )}
                              {!item.inmateName && !item.facilityName && !item.packageName && (
                                <p className="text-muted-foreground">-</p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">
                            ${item.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>
                            {item.receiptUrl && (
                              <a
                                href={item.receiptUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-gold hover:underline"
                              >
                                Receipt
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
