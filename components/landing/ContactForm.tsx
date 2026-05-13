"use client"

import { useState, type FormEvent } from "react"

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string }

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>({ kind: "idle" })

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ kind: "sending" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({ kind: "error", message: data?.error || "Something went wrong. Please try again." })
        return
      }
      setStatus({ kind: "ok", message: "Thanks — we'll be in touch shortly. Check your inbox for confirmation." })
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again or email us directly." })
    }
  }

  const sending = status.kind === "sending"

  return (
    <form className="sys-form" onSubmit={onSubmit}>
      <div className="sys-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          className="sys-input"
          type="text"
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          disabled={sending}
        />
      </div>

      <div className="sys-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          className="sys-input"
          type="email"
          required
          maxLength={200}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@acme.io"
          disabled={sending}
        />
      </div>

      <div className="sys-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="sys-textarea"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're working on or what you'd like help with."
          disabled={sending}
        />
      </div>

      <div className="sys-form-foot">
        <span
          className="sys-form-status"
          style={{ color: status.kind === "error" ? "var(--err, #dc2626)" : "var(--ok)" }}
        >
          {status.message}
        </span>
        <button type="submit" className="btn-sys btn-sys-brand" disabled={sending}>
          {sending ? "Sending…" : "Send message →"}
        </button>
      </div>
    </form>
  )
}
