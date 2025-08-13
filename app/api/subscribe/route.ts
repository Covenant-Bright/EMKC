import { NextResponse } from "next/server"

const subscribeRateLimit = new Map<string, { count: number; resetTime: number }>()

function checkSubscribeRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 5 // Max 5 subscription attempts per hour

  const record = subscribeRateLimit.get(ip)

  if (!record || now > record.resetTime) {
    subscribeRateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : "unknown"

    if (!checkSubscribeRateLimit(ip)) {
      return NextResponse.json({ error: "Too many subscription attempts. Please try again later." }, { status: 429 })
    }

    const { email, consent } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    if (!consent) {
      return NextResponse.json(
        {
          error: "You must consent to receive our newsletter",
        },
        { status: 400 },
      )
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
        attributes: {
          CONSENT_DATE: new Date().toISOString(),
          CONSENT_SOURCE: "website_newsletter",
          OPT_IN: true,
        },
      }),
    })

    let data: any = null
    try {
      const text = await res.text()
      data = text ? JSON.parse(text) : null
    } catch {}

    if (!res.ok) {
      if (res.status === 400 && data?.code === "duplicate_parameter") {
        return NextResponse.json({ message: "You're already subscribed to our newsletter!" }, { status: 200 })
      }
      console.error("Brevo error:", data)
      return NextResponse.json({ error: "Subscription failed. Please try again later." }, { status: 500 })
    }

    const welcomeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to EMKC Newsletter</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c3e50;">Welcome to EMKC Newsletter!</h2>
          
          <p>Thank you for subscribing to the Excellent Miracle Kiddies College newsletter.</p>
          
          <p>You'll receive updates about:</p>
          <ul>
            <li>School events and activities</li>
            <li>Academic programs and achievements</li>
            <li>Important announcements</li>
            <li>Educational resources</li>
          </ul>
          
          <p>Best regards,<br/>
          The EMKC Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            You received this email because you subscribed to our newsletter at emkc.sch.ng<br/>
            <a href="{{unsubscribe}}" style="color: #3498db;">Unsubscribe</a> | 
            <a href="mailto:info@emkc.sch.ng" style="color: #3498db;">Contact Us</a>
          </p>
        </div>
      </body>
      </html>
    `

    // Send welcome email
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: "noreply@emkc.sch.ng", name: "EMKC Newsletter" },
        to: [{ email }],
        subject: "Welcome to EMKC Newsletter!",
        htmlContent: welcomeHtml,
        headers: {
          "List-Unsubscribe": "<{{unsubscribe}}>",
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      }),
    })

    return NextResponse.json({ message: "Successfully subscribed! Check your email for confirmation." })
  } catch (err) {
    console.error("Subscribe error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
