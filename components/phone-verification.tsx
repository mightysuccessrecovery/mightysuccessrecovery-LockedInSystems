"use client"

import { useState } from "react"
import { Phone, MessageSquare, ArrowRight, CheckCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface PhoneVerificationProps {
  onVerified: (phone: string) => void
  title?: string
  description?: string
}

export function PhoneVerification({
  onVerified,
  title = "Phone Verification Required",
  description = "For your security, please verify your phone number before proceeding with payment.",
}: PhoneVerificationProps) {
  const [phone, setPhone] = useState("")
  const [verificationMethod, setVerificationMethod] = useState<"sms" | "call" | null>(null)
  const [codeSent, setCodeSent] = useState(false)
  const [code, setCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState("")

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
    setError("")
  }

  const isValidPhone = () => {
    const digits = phone.replace(/\D/g, "")
    return digits.length === 10
  }

  const handleSendCode = async (method: "sms" | "call") => {
    if (!isValidPhone()) {
      setError("Please enter a valid 10-digit phone number")
      return
    }

    setIsVerifying(true)
    setVerificationMethod(method)
    setError("")

    // Simulate sending code (in production, this would call an API)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setCodeSent(true)
    setIsVerifying(false)
  }

  const handleVerifyCode = async () => {
    if (code.length !== 6) {
      setError("Please enter the 6-digit verification code")
      return
    }

    setIsVerifying(true)
    setError("")

    // Simulate verification (in production, this would validate with backend)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, accept any 6-digit code
    if (code.length === 6) {
      onVerified(phone)
    } else {
      setError("Invalid verification code. Please try again.")
    }

    setIsVerifying(false)
  }

  const handleResendCode = () => {
    setCode("")
    setCodeSent(false)
    setVerificationMethod(null)
    setError("")
  }

  return (
    <Card className="border-border">
      <CardHeader className="border-b border-border bg-secondary">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Phone className="h-5 w-5 text-gold" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {!codeSent ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="pl-10 h-12 text-lg"
                  maxLength={14}
                />
              </div>
            </div>

            {error && (
              <Alert className="border-destructive/50 bg-destructive/10">
                <AlertDescription className="text-destructive">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                How would you like to receive your verification code?
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => handleSendCode("sms")}
                  disabled={!isValidPhone() || isVerifying}
                  className="h-12 bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  {isVerifying && verificationMethod === "sms" ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <MessageSquare className="mr-2 h-4 w-4" />
                  )}
                  Text Me
                </Button>
                <Button
                  onClick={() => handleSendCode("call")}
                  disabled={!isValidPhone() || isVerifying}
                  variant="outline"
                  className="h-12 border-gold text-gold hover:bg-gold/10"
                >
                  {isVerifying && verificationMethod === "call" ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Phone className="mr-2 h-4 w-4" />
                  )}
                  Call Me
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-center">
              <CheckCircle className="mx-auto mb-2 h-8 w-8 text-gold" />
              <p className="text-sm text-foreground">
                {verificationMethod === "sms"
                  ? "A verification code has been sent to"
                  : "You will receive a call at"}
              </p>
              <p className="font-semibold text-foreground mt-1">{phone}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Enter 6-Digit Verification Code</Label>
              <Input
                id="code"
                type="text"
                placeholder="000000"
                value={code}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 6)
                  setCode(digits)
                  setError("")
                }}
                className="h-14 text-center text-2xl tracking-widest font-mono"
                maxLength={6}
              />
            </div>

            {error && (
              <Alert className="border-destructive/50 bg-destructive/10">
                <AlertDescription className="text-destructive">{error}</AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleVerifyCode}
              disabled={code.length !== 6 || isVerifying}
              className="w-full h-12 bg-gold text-gold-foreground hover:bg-gold/90"
            >
              {isVerifying ? (
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="mr-2 h-4 w-4" />
              )}
              Verify & Continue
            </Button>

            <div className="text-center">
              <Button
                variant="link"
                onClick={handleResendCode}
                className="text-gold hover:text-gold/80"
              >
                Didn&apos;t receive a code? Try again
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
