import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message, inquiryType } = await request.json()

    // Enhanced validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Name, email, subject, and message are required." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      console.error("BREVO_API_KEY missing in environment variables.")
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
    }

    // Common sender details
    const senderEmail = "noreply@emkc.sch.ng";
    const senderName = "Excellent Miracle Kiddies College";

    // Email to school team
    const teamHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    const teamResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: "info@emkc.sch.ng", name: "Admissions Team" }],
        replyTo: { email, name },
        subject: `New Inquiry: ${subject.substring(0, 50)}`,
        htmlContent: teamHtml,
      }),
    })

    if (!teamResponse.ok) {
      const error = await teamResponse.text()
      console.error(`Brevo error (team): ${teamResponse.status} - ${error}`)
      return NextResponse.json(
        { error: "Failed to send message to school." },
        { status: teamResponse.status }
      )
    }

    // Confirmation email to user (as a copy)
    const userHtml = `
      <p>Dear ${name},</p>
      <p>Thank you for contacting Excellent Miracle Kiddies College. We've received your message and will respond shortly.</p>
      
      <h3>Your Message Copy:</h3>
      <p><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr/>
      <p><em>This email is a copy of your submission for your records.</em></p>
      <p>Best regards,<br/>The Admissions Team<br/>
      Excellent Miracle Kiddies College</p>
    `

    // Send copy to the user
    const userResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email, name }],
        subject: `Confirmation: ${subject.substring(0, 50)}`,
        htmlContent: userHtml,
      }),
    })

    if (!userResponse.ok) {
      const error = await userResponse.text()
      console.warn(`Brevo warning (user copy): ${userResponse.status} - ${error}`)
      // Don't fail the request - primary email succeeded
    }

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })

  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}