"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl backdrop-saturate-[180%] border-b border-[var(--line)]">
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Sysmos" width={40} height={40} />
          <span className="font-bold text-lg tracking-tight">Sysmos</span>
          <span className="text-[var(--ink-4)] font-medium text-[13px] ml-1.5 font-mono">/ monitoring</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <a href="#product" className="px-3 py-2 rounded-md text-[var(--ink-2)] text-sm font-medium hover:bg-[#fafafb] hover:text-[var(--ink)] transition-colors">
            Product
          </a>
          <a href="#how" className="px-3 py-2 rounded-md text-[var(--ink-2)] text-sm font-medium hover:bg-[#fafafb] hover:text-[var(--ink)] transition-colors">
            How it works
          </a>
          <a href="#features" className="px-3 py-2 rounded-md text-[var(--ink-2)] text-sm font-medium hover:bg-[#fafafb] hover:text-[var(--ink)] transition-colors">
            Features
          </a>
          <a href="#integrations" className="px-3 py-2 rounded-md text-[var(--ink-2)] text-sm font-medium hover:bg-[#fafafb] hover:text-[var(--ink)] transition-colors">
            Integrations
          </a>
          <a href="#pricing" className="px-3 py-2 rounded-md text-[var(--ink-2)] text-sm font-medium hover:bg-[#fafafb] hover:text-[var(--ink)] transition-colors">
            Pricing
          </a>
          <a href="/docs" className="px-3 py-2 rounded-md text-[var(--ink-2)] text-sm font-medium hover:bg-[#fafafb] hover:text-[var(--ink)] transition-colors">
            Docs
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href="https://app.sysmos.org" target="_blank" rel="noopener noreferrer" className="text-[var(--ink-2)] text-sm font-medium px-2 py-2 hover:text-[var(--brand-deep)] transition-colors">
            Log in
          </a>
          <a
            href="https://app.sysmos.org"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[var(--brand)] text-white text-sm font-medium px-4 py-2.5 rounded-lg border border-[var(--brand)] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_1px_2px_rgba(168,85,217,0.35)] hover:bg-[var(--brand-deep)] hover:border-[var(--brand-deep)] transition-all"
          >
            Start free
            <span className="opacity-70 font-mono text-xs">→</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
