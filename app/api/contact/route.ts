import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@sysmos.org"
const FROM_TEAM = process.env.CONTACT_FROM_EMAIL || "Sysmos Contact <noreply@query.sysmos.org>"
const FROM_ACK = process.env.CONTACT_ACK_FROM_EMAIL || "Sysmos <hello@query.sysmos.org>"

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>")
}

function teamEmailHtml(name: string, email: string, message: string) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#fafafb;font-family:Inter,system-ui,sans-serif;color:#0f1115;">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px;">
    <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8e9a;margin-bottom:8px;">Sysmos · new contact message</div>
    <h1 style="font-size:22px;margin:0 0 16px;letter-spacing:-0.02em;">${esc(name)} sent a message</h1>
    <div style="background:#fff;border:1px solid #ececf0;border-radius:14px;padding:22px;">
      <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:#5a5e6b;">From</div>
      <div style="margin:4px 0 16px;font-size:14.5px;">${esc(name)} &lt;<a href="mailto:${esc(email)}" style="color:#8a3fbf;text-decoration:none;">${esc(email)}</a>&gt;</div>
      <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:#5a5e6b;">Message</div>
      <div style="margin-top:6px;font-size:14.5px;line-height:1.6;color:#2a2d35;">${esc(message)}</div>
    </div>
    <div style="margin-top:16px;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;color:#8a8e9a;">Reply directly to this email to respond to ${esc(name)}.</div>
  </div>
</body></html>`
}

function ackEmailHtml(name: string) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#fafafb;font-family:Inter,system-ui,sans-serif;color:#0f1115;">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px;">
    <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8e9a;margin-bottom:8px;">Sysmos</div>
    <h1 style="font-size:22px;margin:0 0 12px;letter-spacing:-0.02em;">Thanks, ${esc(name)} — we got your message.</h1>
    <p style="font-size:15px;line-height:1.6;color:#2a2d35;margin:0 0 18px;">
      One of us will be in touch within one business day. If it's urgent, you can also reach us on
      <a href="https://discord.gg/sysmos" style="color:#8a3fbf;text-decoration:none;">Discord</a>.
    </p>
    <div style="background:#fff;border:1px solid #ececf0;border-radius:14px;padding:20px;font-size:14px;color:#5a5e6b;">
      In the meantime, you might find these useful:
      <ul style="margin:10px 0 0;padding-left:20px;line-height:1.7;">
        <li><a href="https://sysmos.org/docs" style="color:#8a3fbf;text-decoration:none;">Documentation</a></li>
        <li><a href="https://sysmos.org/products/api-monitoring" style="color:#8a3fbf;text-decoration:none;">API monitoring</a></li>
        <li><a href="https://sysmos.org/products/server-observability" style="color:#8a3fbf;text-decoration:none;">Server observability</a></li>
      </ul>
    </div>
    <div style="margin-top:18px;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;color:#8a8e9a;">— The Sysmos team</div>
  </div>
</body></html>`
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const { name, email, message } = (await req.json()) as {
      name?: string
      email?: string
      message?: string
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 })
    }

    const teamSend = await resend.emails.send({
      from: FROM_TEAM,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Sysmos contact — ${name}`,
      html: teamEmailHtml(name, email, message),
    })

    if (teamSend.error) {
      return NextResponse.json({ error: teamSend.error.message }, { status: 502 })
    }

    await resend.emails.send({
      from: FROM_ACK,
      to: email,
      subject: "We got your message — Sysmos",
      html: ackEmailHtml(name),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
