import type { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ChannelIcons, PRODUCT_MENU, SysmosIcons, type IconKey } from "./icons"

type Benefit = { iconKey: IconKey; title: string; meta: string; body: string }
type Shot = { label: string; src: string }

export type ProductPageData = {
  slug: string
  iconKey: IconKey
  badge: string
  title: [string, string]
  lead: string
  metaPills: string[]
  heroShot: string
  heroChrome: string
  benefits: Benefit[]
  spec: [string, string][]
  shotPairs?: Shot[]
  code?: string
  codeLabel?: string
  integrationGrid?: boolean
}

export default function ProductPageShell({ page }: { page: ProductPageData }) {
  const Icon = SysmosIcons[page.iconKey]

  return (
    <div className="min-h-screen bg-white text-[#0f1115]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar active="products" />

      <div className="sysmos-container sys-crumb">
        <Link href="/">Sysmos</Link>
        <span className="sep">/</span>
        <Link href="/#product">Products</Link>
        <span className="sep">/</span>
        <span style={{ color: "var(--ink-2)" }}>{page.badge}</span>
      </div>

      {/* Hero */}
      <section className="product-hero">
        <div className="product-hero-grid" />
        <div className="sysmos-container">
          <div className="product-hero-inner">
            <div className="product-hero-text">
              <span className="badge">
                <span className="ico">
                  <Icon width={16} height={16} />
                </span>
                {page.badge}
              </span>
              <h1>
                {page.title[0]} <span className="accent">{page.title[1]}</span>
              </h1>
              <p className="lead">{page.lead}</p>
              <div className="product-hero-cta">
                <a className="btn-sys btn-sys-brand" href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer">
                  Start free →
                </a>
                <Link className="btn-sys btn-sys-ghost" href="/docs">
                  Read the docs
                </Link>
              </div>
              <div className="product-hero-meta">
                {page.metaPills.map((p) => (
                  <span key={p}>· {p}</span>
                ))}
              </div>
            </div>
            <div className="product-hero-shot">
              <div className="chrome">
                <span className="d" />
                <span className="d" />
                <span className="d" />
                <span style={{ marginLeft: 8 }}>{page.heroChrome}</span>
              </div>
              <Image src={page.heroShot} alt={page.badge} width={1200} height={750} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sys-bleed">
        <div className="sysmos-container">
          <div className="product-section-head">
            <div className="eyebrow">
              <span className="dot" />
              What you get
            </div>
            <h2>The essentials, none of the bloat.</h2>
          </div>
          <div className="benefits">
            {page.benefits.map((b) => {
              const BIcon = SysmosIcons[b.iconKey]
              return (
                <div key={b.title} className="benefit">
                  <div className="ico">
                    <BIcon />
                  </div>
                  <div className="meta">{b.meta}</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {page.integrationGrid && <IntegrationsBlock />}

      {/* Screenshots */}
      {page.shotPairs && page.shotPairs.length > 0 && (
        <section className="sys-bleed sys-bg-soft">
          <div className="sysmos-container">
            <div className="product-section-head">
              <div className="eyebrow">
                <span className="dot" />
                Inside the product
              </div>
              <h2>How it actually looks.</h2>
            </div>
            <div
              className="shot-row"
              style={{ gridTemplateColumns: page.shotPairs.length === 1 ? "1fr" : undefined }}
            >
              {page.shotPairs.map((s) => (
                <div className="shot-card" key={s.label}>
                  <div className="label">{s.label}</div>
                  <Image src={s.src} alt={s.label} width={1200} height={750} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Code */}
      {page.code && (
        <section className="sys-bleed">
          <div className="sysmos-container">
            <div className="product-section-head">
              <div className="eyebrow">
                <span className="dot" />
                For your CI
              </div>
              <h2>API-first. Infrastructure-as-code friendly.</h2>
              <p style={{ maxWidth: 640 }}>
                Everything you can do in the UI you can do via the API or Sysmos config. Drop monitors and flows into your
                repo and version them like the rest of your infrastructure.
              </p>
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div className="shot-card">
                <div className="label">{page.codeLabel}</div>
                <pre
                  style={{
                    margin: 0,
                    padding: "18px 22px",
                    background: "#0f1115",
                    color: "#d6d3df",
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 13,
                    lineHeight: 1.65,
                    overflow: "auto",
                  }}
                >
                  {page.code}
                </pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Spec table */}
      <section className="sys-bleed sys-bg-soft">
        <div className="sysmos-container">
          <div className="product-section-head">
            <div className="eyebrow">
              <span className="dot" />
              Specs
            </div>
            <h2>The details, on the record.</h2>
          </div>
          <div className="spec">
            {page.spec.map(([k, v]) => (
              <div key={k} className="spec-row">
                <div>{k}</div>
                <div>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="sys-bleed">
        <div className="sysmos-container">
          <div className="product-section-head">
            <div className="eyebrow">
              <span className="dot" />
              Related products
            </div>
            <h2>Better together.</h2>
            <p>
              Every Sysmos product shares the same workspace, team, and alert routing. No glue code, no duplicate billing.
            </p>
          </div>
          <div className="related">
            {PRODUCT_MENU.filter((p) => !p.href.endsWith(page.slug)).map((p) => {
              const RIcon = SysmosIcons[p.iconKey]
              return (
                <Link key={p.href} className="related-card" href={p.href}>
                  <div className="ico">
                    <RIcon />
                  </div>
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sys-bleed" style={{ paddingTop: 0 }}>
        <div className="sysmos-container">
          <div className="sys-cta">
            <h2>Get {page.badge.toLowerCase()} running in 5 minutes.</h2>
            <p>Free forever for one user. No credit card. Up before standup.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <a className="btn-sys btn-sys-brand" href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer">
                Start free →
              </a>
              <a className="btn-sys btn-sys-ghost" href="mailto:hello@sysmos.org">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function IntegrationsBlock() {
  const items: { name: string; meta: string; logo: ReactElement }[] = [
    { name: "Slack",       meta: "Channel webhook",   logo: <ChannelIcons.Slack /> },
    { name: "Discord",     meta: "Channel webhook",   logo: <ChannelIcons.Discord /> },
    { name: "PagerDuty",   meta: "Incident routing",  logo: <ChannelIcons.PagerDuty /> },
    { name: "Webhook",     meta: "Any HTTP endpoint", logo: <ChannelIcons.Webhook /> },
    { name: "Email/SMTP",  meta: "Distribution list", logo: <ChannelIcons.Email /> },
    { name: "Linux agent", meta: "eBPF · x86 / arm",  logo: <ChannelIcons.Linux /> },
  ]
  return (
    <section className="sys-bleed sys-bg-soft">
      <div className="sysmos-container">
        <div className="product-section-head">
          <div className="eyebrow">
            <span className="dot" />
            Channels
          </div>
          <h2>All five channels, plus generic webhooks.</h2>
        </div>
        <div className="sys-integrations-grid">
          {items.map((it) => (
            <div className="sys-integration" key={it.name}>
              <div className="logo">{it.logo}</div>
              <div className="name">{it.name}</div>
              <div className="meta">{it.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
