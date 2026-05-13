import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#fafafb] pt-14 pb-7 mt-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(4,1fr)] gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-[280px]">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Sysmos" width={40} height={40} />
              <span className="font-bold text-lg tracking-tight">Sysmos</span>
            </div>
            <p className="text-[13.5px] text-[var(--ink-3)]">
              Full-stack monitoring for modern infrastructure. From API health to kernel syscalls, observed in one place.
            </p>
            <div className="flex gap-2 mt-1 font-mono text-[11.5px] text-[var(--ink-4)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
                All systems operational
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.08em] uppercase text-[var(--ink-4)] mb-3 font-medium">Product</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/products/api-monitoring" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">API monitoring</Link></li>
              <li><Link href="/products/server-observability" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Server observability</Link></li>
              <li><Link href="/products/flow-builder" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Flow builder</Link></li>
              <li><Link href="/products/alerting" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Alerting</Link></li>
              <li><Link href="/products/integrations" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.08em] uppercase text-[var(--ink-4)] mb-3 font-medium">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="/docs" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Documentation</a></li>
              {/* <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">API reference</a></li>
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Changelog</a></li> */}
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Status page</a></li>
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.08em] uppercase text-[var(--ink-4)] mb-3 font-medium">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Blog</a></li>
              {/* <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Customers</a></li>
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Careers</a></li> */}
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.08em] uppercase text-[var(--ink-4)] mb-3 font-medium">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="/privacy" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Terms</a></li>
              {/* <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">Security</a></li> */}
              {/* <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">DPA</a></li>
              <li><a href="#" className="text-sm text-[var(--ink-2)] hover:text-[var(--brand-deep)] transition-colors">SOC 2</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-[var(--line)] flex justify-between flex-wrap gap-3 text-[12.5px] text-[var(--ink-4)] font-mono">
          <span>&copy; 2026 Sysmos, Inc. · Built for teams who care about uptime.</span>
          <span>v2.0 · last deploy 4m ago</span>
        </div>
      </div>
    </footer>
  )
}
