// app/api/subscribe/route.ts
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error("BREVO_API_KEY missing")
      return NextResponse.json({ error: "Configuration error" }, { status: 500 })
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [1],
        updateEnabled: true,
      }),
    })

    let data: any = null
    try {
      const text = await res.text()
      data = text ? JSON.parse(text) : null
    } catch {}

    if (!res.ok) {
      if (res.status === 400 && data?.code === "duplicate_parameter") {
        return NextResponse.json({ message: "Already subscribed!" }, { status: 200 })
      }
      console.error("Brevo error:", data)
      return NextResponse.json({ error: "Subscription failed" }, { status: res.status })
    }

    return NextResponse.json({ message: "Successfully subscribed!" })
  } catch (err) {
    console.error("Subscribe error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
