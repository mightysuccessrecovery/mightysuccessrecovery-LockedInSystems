import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  let body: unknown = {}
  try {
    body = await request.json()
  } catch {
    // Non-JSON or empty body — echo as empty object for demo
  }

  return NextResponse.json({
    success: true,
    message: "Demo action received",
    data: body,
  })
}
