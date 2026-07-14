import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ─── Types ────────────────────────────────────────────────────────────────────

interface InquiryBody {
  name: string
  company?: string
  phone: string
  email?: string
  product?: string
  message?: string
}

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
// Reads from environment variables — never hard-code credentials here.
// See .env.local.example for setup instructions.

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,   // your Gmail / SMTP email
      pass: process.env.SMTP_PASS,   // Gmail App Password (not your normal password)
    },
  })
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function ownerEmailHTML(data: InquiryBody): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry — Sanjay Industries</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(11,31,58,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0B1F3A;padding:28px 36px;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                Sanjay Industries
              </p>
              <p style="margin:4px 0 0;font-size:11px;color:#EAB308;letter-spacing:2px;text-transform:uppercase;">
                New Website Inquiry
              </p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background:#EAB308;padding:12px 36px;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#0B1F3A;">
                🔔 You have received a new inquiry from your website
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Name -->
                <tr>
                  <td style="padding-bottom:16px;border-bottom:1px solid #E5E7EB;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:1px;">Name</p>
                    <p style="margin:0;font-size:17px;font-weight:600;color:#1F2937;">${data.name}</p>
                  </td>
                </tr>

                <!-- Company -->
                ${data.company ? `
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #E5E7EB;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:1px;">Company</p>
                    <p style="margin:0;font-size:16px;color:#1F2937;">${data.company}</p>
                  </td>
                </tr>` : ''}

                <!-- Phone -->
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #E5E7EB;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:1px;">Phone</p>
                    <a href="tel:${data.phone.replace(/\s/g,'')}" style="font-size:18px;font-weight:700;color:#0B1F3A;text-decoration:none;">
                      📞 ${data.phone}
                    </a>
                  </td>
                </tr>

                <!-- Email -->
                ${data.email ? `
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #E5E7EB;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <a href="mailto:${data.email}" style="font-size:16px;color:#0B1F3A;">${data.email}</a>
                  </td>
                </tr>` : ''}

                <!-- Product -->
                ${data.product ? `
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #E5E7EB;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:1px;">Product Interest</p>
                    <p style="margin:0;font-size:16px;color:#1F2937;">${data.product.replace(/-/g,' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                  </td>
                </tr>` : ''}

                <!-- Message -->
                ${data.message ? `
                <tr>
                  <td style="padding:16px 0;">
                    <p style="margin:0 0 8px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <p style="margin:0;font-size:15px;color:#1F2937;line-height:1.7;background:#F8FAFC;border-left:3px solid #EAB308;padding:14px 16px;border-radius:0 8px 8px 0;">
                      ${data.message.replace(/\n/g, '<br/>')}
                    </p>
                  </td>
                </tr>` : ''}

              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 36px 32px;">
              ${data.phone ? `
              <a href="tel:${data.phone.replace(/\s/g,'')}"
                 style="display:inline-block;background:#0B1F3A;color:#ffffff;font-size:14px;font-weight:600;padding:14px 28px;border-radius:10px;text-decoration:none;margin-right:12px;">
                📞 Call Back Now
              </a>` : ''}
              ${data.email ? `
              <a href="mailto:${data.email}?subject=Re: Your inquiry at Sanjay Industries"
                 style="display:inline-block;background:#EAB308;color:#0B1F3A;font-size:14px;font-weight:600;padding:14px 28px;border-radius:10px;text-decoration:none;">
                ✉️ Reply via Email
              </a>` : ''}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFC;padding:20px 36px;border-top:1px solid #E5E7EB;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;line-height:1.6;">
                This inquiry was submitted via the contact form at <strong>sanjaydyes.com</strong><br/>
                Sanjay Industries · Plot No. C-1/B-5, GIDC Naroda, Ahmedabad, Gujarat 382330
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

function autoReplyHTML(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(11,31,58,0.08);">
          <tr>
            <td style="background:#0B1F3A;padding:28px 36px;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">Sanjay Industries</p>
              <p style="margin:4px 0 0;font-size:11px;color:#EAB308;letter-spacing:2px;text-transform:uppercase;">Dyes & Chemicals · Ahmedabad</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px;">
              <p style="margin:0 0 16px;font-size:18px;font-weight:600;color:#1F2937;">Dear ${name},</p>
              <p style="margin:0 0 16px;font-size:15px;color:#6B7280;line-height:1.7;">
                Thank you for reaching out to <strong style="color:#0B1F3A;">Sanjay Industries</strong>.
                We have received your inquiry and our team will get back to you within <strong>24 business hours</strong>.
              </p>
              <p style="margin:0 0 24px;font-size:15px;color:#6B7280;line-height:1.7;">
                For urgent requirements, you may also contact us directly:
              </p>
              <table cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;padding:20px;width:100%;">
                <tr>
                  <td style="font-size:14px;color:#1F2937;padding:6px 0;">
                    📞 <strong>Mr. Arvind Patel</strong> — <a href="tel:+917313727060" style="color:#0B1F3A;">+91 73137 27060</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:14px;color:#1F2937;padding:6px 0;">
                    📍 Plot No. C-1/B-5, GIDC Naroda, Ahmedabad, Gujarat 382330
                  </td>
                </tr>
                <tr>
                  <td style="font-size:14px;color:#1F2937;padding:6px 0;">
                    🕐 Mon – Sat: 9:00 AM – 6:00 PM
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:14px;color:#9CA3AF;">
                Warm regards,<br/>
                <strong style="color:#0B1F3A;">Team Sanjay Industries</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#F8FAFC;padding:16px 36px;border-top:1px solid #E5E7EB;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;">
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

// ─── POST Handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: InquiryBody = await req.json()

    // Basic validation
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      )
    }

    // Check environment variables are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.OWNER_EMAIL) {
      console.error(
        'EMAIL NOT CONFIGURED — add SMTP_USER, SMTP_PASS, OWNER_EMAIL to .env.local\n' +
        'See .env.local.example for instructions.'
      )
      return NextResponse.json(
        { error: 'Email service not configured. Please call us directly at +91 73137 27060.' },
        { status: 500 }
      )
    }

    const transporter = createTransporter()
    const ownerEmail = process.env.OWNER_EMAIL   // set in .env.local — Mr. Arvind Patel's email

    // 1. Email to owner
    await transporter.sendMail({
      from: `"Sanjay Industries Website" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: `🔔 New Inquiry from ${body.name}${body.company ? ` — ${body.company}` : ''}`,
      html: ownerEmailHTML(body),
      replyTo: body.email || undefined,
    })

    // 2. Auto-reply to customer (only if they provided email)
    if (body.email) {
      await transporter.sendMail({
        from: `"Sanjay Industries" <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: 'We received your inquiry — Sanjay Industries',
        html: autoReplyHTML(body.name),
      })
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please call us directly.' },
      { status: 500 }
    )
  }
}
