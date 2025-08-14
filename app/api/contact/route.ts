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

    const userConfirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Message Confirmation - EMKC</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            Message Received - Thank You!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Excellent Miracle Group of Schools. We have successfully received your message and will respond within 24 hours.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType || "General"}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #3498db; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p>If you have any urgent inquiries, please call us at <strong>+234 803 395 5391</strong>.</p>
          
          <p>Best regards,<br>
          <strong>Excellent Miracle Group of Schools</strong><br>
          Admissions Team</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #7f8c8d; font-size: 12px;">
            This is an automated confirmation email. Please do not reply to this email.
            <br>Visit us at: <a href="https://emkc.sch.ng" style="color: #3498db;">emkc.sch.ng</a>
          </p>
        </div>
      </body>
      </html>
    `

    const userResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email, name }],
        subject: `Message Confirmation - EMKC`,
        htmlContent: userConfirmationHtml,
        headers: {
          "X-Mailer": "EMKC Contact Form",
          "X-Priority": "3",
          "List-Unsubscribe": "<mailto:unsubscribe@emkc.sch.ng>",
        },
      }),
    })

    if (!userResponse.ok) {
      const error = await userResponse.text()
      console.error(`Brevo error (user confirmation): ${userResponse.status} - ${error}`)
      // Don't fail the entire request if user confirmation fails
      console.log("Team email sent successfully, but user confirmation failed")
    }

    return NextResponse.json(
      {
        message:
          "Message sent successfully! We'll get back to you within 24 hours. A confirmation has been sent to your email.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
