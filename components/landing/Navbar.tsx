"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { PRODUCT_MENU, SysmosIcons } from "./icons"

interface NavbarProps {
  active?: "products" | "integrations" | null
}

export default function Navbar({ active = null }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <nav className="sys-nav">
      <div className="sysmos-container sys-nav-row">
        <Link href="/" className="sys-nav-brand">
          <Image src="/logo.png" alt="Sysmos" width={26} height={26} />
          <span>Sysmos</span>
          <span className="domain">/ monitoring</span>
        </Link>

        <div className="sys-nav-links">
          <div className={"sys-nav-products" + (active === "products" ? " is-active" : "")}>
            <button className="sys-nav-products-trigger" aria-haspopup="true" type="button">
              Products
              <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginLeft: 2 }}>
                <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ProductsMenu />
          </div>
          <Link href="/#how">How it works</Link>
          <Link href="/#features">Features</Link>
          <Link href="/products/integrations" className={active === "integrations" ? "is-active" : ""}>
            Integrations
          </Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
        </div>

        <div className="sys-nav-cta">
          <a href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer" className="btn-sys btn-sys-link">
            Log in
          </a>
          <a href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer" className="btn-sys btn-sys-brand">
            Start free
            <span style={{ opacity: 0.7, fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span>
          </a>
          <button
            className="sys-nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            type="button"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={"sys-mobile-sheet" + (open ? " is-open" : "")}>
        <div className={"ms-section" + (productsOpen ? " is-open" : "")}>
          <button className="ms-link" type="button" onClick={() => setProductsOpen((p) => !p)}>
            Products
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              style={{ transform: productsOpen ? "rotate(180deg)" : "none", transition: "120ms" }}
            >
              <path d="M3 5 L7 9 L11 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="ms-sub-list">
            {PRODUCT_MENU.map((it) => (
              <Link key={it.href} className="ms-sub" href={it.href} onClick={() => setOpen(false)}>
                <div>{it.name}</div>
                <div className="ms-sub-desc">{it.desc}</div>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/#how" onClick={() => setOpen(false)}>How it works</Link>
        <Link href="/#features" onClick={() => setOpen(false)}>Features</Link>
        <Link href="/products/integrations" onClick={() => setOpen(false)}>Integrations</Link>
        <Link href="/#pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <Link href="/docs" onClick={() => setOpen(false)}>Docs</Link>
        <div className="ms-cta">
          <a className="btn-sys btn-sys-ghost" href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer">
            Log in
          </a>
          <a className="btn-sys btn-sys-brand" href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer">
            Start free →
          </a>
        </div>
      </div>
    </nav>
  )
}

function ProductsMenu() {
  return (
    <div className="sys-products-menu" role="menu">
      <div className="sys-products-menu-inner">
        <div className="sys-products-menu-grid">
          {PRODUCT_MENU.map((it) => {
            const Icon = SysmosIcons[it.iconKey]
            return (
              <Link key={it.href} className="sys-products-menu-item" href={it.href}>
                <div className="sys-pm-icon">
                  <Icon />
                </div>
                <div>
                  <div className="sys-pm-name">{it.name}</div>
                  <div className="sys-pm-desc">{it.desc}</div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="sys-products-menu-foot">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              One platform
            </div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 4, maxWidth: 320 }}>
              Every Sysmos product shares the same workspace, team, and alert routing — no glue code.
            </div>
          </div>
          <Link className="btn-sys btn-sys-ghost btn-sys-arrow" href="/">
            See the platform
          </Link>
        </div>
      </div>
    </div>
  )
}
