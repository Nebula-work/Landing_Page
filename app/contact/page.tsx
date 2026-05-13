import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactForm from "@/components/landing/ContactForm"
import { ChannelIcons } from "@/components/landing/icons"

export const metadata: Metadata = {
  title: "Contact — Sysmos",
  description:
    "Get in touch with the Sysmos team. Drop us a message, email us directly, or join the community on Discord.",
}

const CONTACT_EMAIL = "contact@sysmos.org"
const DISCORD_URL = "https://discord.gg/WdN74xXnzZ"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f1115]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar />

      <div className="sysmos-container sys-crumb">
        <Link href="/">Sysmos</Link>
        <span className="sep">/</span>
        <span style={{ color: "var(--ink-2)" }}>Contact</span>
      </div>

      <section className="sys-bleed" style={{ paddingBottom: 0 }}>
        <div className="sysmos-container">
          <div className="product-section-head" style={{ marginBottom: 32 }}>
            <div className="eyebrow">
              <span className="dot" />
              Contact
            </div>
            <h2>Get in touch.</h2>
            <p>
              Questions, feedback, or a problem you&apos;d like Sysmos to solve? Drop us a message — we usually reply
              within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="sys-bleed" style={{ paddingTop: 32 }}>
        <div className="sysmos-container">
          <div className="sys-contact-grid">
            <ContactForm />

            <div className="sys-contact-cards">
              <a className="sys-contact-card" href={`mailto:${CONTACT_EMAIL}`}>
                <div className="ico">
                  <ChannelIcons.Email />
                </div>
                <h3>Email us directly</h3>
                <p>For sales, partnerships, or anything you&apos;d rather not put through a form.</p>
                <span className="value">{CONTACT_EMAIL}</span>
              </a>

              <a className="sys-contact-card" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <div className="ico">
                  <ChannelIcons.Discord />
                </div>
                <h3>Join the community</h3>
                <p>Chat with the team and other Sysmos users on Discord — get help, share feedback, see what&apos;s next.</p>
                <span className="value">discord.gg/sysmos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
