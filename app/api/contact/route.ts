import { NextResponse } from "next/server"

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3 // Max 3 requests per 15 minutes

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
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

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before sending another message." },
        { status: 429 },
      )
    }

    const { name, email, phone, subject, message, inquiryType } = await request.json()

    // Enhanced validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Name, email, subject, and message are required." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long." }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error("BREVO_API_KEY missing in environment variables.")
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
    }

    const senderEmail = "noreply@emkc.sch.ng"
    const senderName = "EMKC Contact Form"

    const teamHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Inquiry Type:</strong> ${inquiryType || "General"}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #3498db; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p style="color: #7f8c8d; font-size: 12px; margin-top: 30px;">
            This message was sent through the contact form on emkc.sch.ng
          </p>
        </div>
      </body>
      </html>
    `

    const teamResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: "info@emkc.sch.ng", name: "EMKC Admissions Team" }],
        replyTo: { email, name },
        subject: `[EMKC Contact] ${inquiryType || "General"}: ${subject.substring(0, 50)}`,
        htmlContent: teamHtml,
        headers: {
          "X-Mailer": "EMKC Contact Form",
          "X-Priority": "3",
        },
      }),
    })

    if (!teamResponse.ok) {
      const error = await teamResponse.text()
      console.error(`Brevo error (team): ${teamResponse.status} - ${error}`)
      return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
    }

    // Users will only receive emails they explicitly request

    return NextResponse.json(
      {
        message: "Message sent successfully! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
