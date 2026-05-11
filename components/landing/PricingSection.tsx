export default function PricingSection() {
  return (
    <section className="py-24 bg-[#fcfcfd] border-t border-b border-[var(--line)]" id="pricing">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section head */}
        <div className="text-center max-w-[760px] mx-auto mb-14 flex flex-col gap-3.5 items-center">
          <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)] mr-2 align-middle" />
            Pricing
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.03em]">
            Honest pricing for honest infrastructure.
          </h2>
          <p className="text-[17px] text-[var(--ink-3)]">
            Start free. Scale when you need to. No &quot;contact sales&quot; walls until you actually want them.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr] gap-4">
          {/* Free */}
          <div className="border border-[var(--line)] rounded-[14px] p-7 bg-white flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Free</h3>
            <div className="text-[40px] font-bold tracking-[-0.03em]">
              $0<span className="font-mono text-xs text-[var(--ink-4)] font-medium ml-1">/mo</span>
            </div>
            <p className="text-sm text-[var(--ink-3)]">Perfect for solo developers and personal projects.</p>
            <ul className="flex flex-col gap-2">
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>10 API monitors · 5 flows</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>1 region · 60s min interval</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>5 team members · 1 organization</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>7-day log retention</li>
            </ul>
            <a href="#" className="mt-auto inline-flex items-center gap-2 bg-transparent text-[var(--ink-2)] text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--line-2)] hover:bg-[#fafafb] hover:text-[var(--ink)] transition-all group">
              Start free
              <span className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Team - Featured */}
          <div className="relative border border-[#2a1f33] rounded-[14px] p-7 flex flex-col gap-4 overflow-hidden" style={{ background: "linear-gradient(180deg, #1a1023 0%, #0f1115 100%)" }}>
            {/* Glow */}
            <div className="absolute inset-[-1px] pointer-events-none" style={{ background: "radial-gradient(400px 200px at 80% -20%, rgba(168,85,217,0.4), transparent 60%)" }} />
            <span className="relative self-start font-mono text-[10.5px] tracking-[0.08em] uppercase px-2 py-1 rounded-full bg-[var(--brand)] text-white">
              Most popular
            </span>
            <h3 className="relative text-lg font-semibold tracking-tight text-white">Team</h3>
            <div className="relative text-[40px] font-bold tracking-[-0.03em] text-white">
              $29<span className="font-mono text-xs text-[#b6acc4] font-medium ml-1">/mo</span>
            </div>
            <p className="relative text-sm text-[#b6acc4]">For startups running real production workloads.</p>
            <ul className="relative flex flex-col gap-2">
              <li className="text-sm flex gap-2 items-start text-[#d8d3e0]"><span className="text-[var(--brand)] font-mono">✓</span>100 monitors · 50 flows</li>
              <li className="text-sm flex gap-2 items-start text-[#d8d3e0]"><span className="text-[var(--brand)] font-mono">✓</span>All 12 regions · 30s interval</li>
              <li className="text-sm flex gap-2 items-start text-[#d8d3e0]"><span className="text-[var(--brand)] font-mono">✓</span>Unlimited members · 5 orgs</li>
              <li className="text-sm flex gap-2 items-start text-[#d8d3e0]"><span className="text-[var(--brand)] font-mono">✓</span>30-day retention · all integrations</li>
              <li className="text-sm flex gap-2 items-start text-[#d8d3e0]"><span className="text-[var(--brand)] font-mono">✓</span>Server agent included</li>
            </ul>
            <a href="#" className="relative mt-auto inline-flex items-center gap-2 bg-[var(--brand)] text-white text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--brand)] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_1px_2px_rgba(168,85,217,0.35)] hover:bg-[var(--brand-deep)] hover:border-[var(--brand-deep)] transition-all group">
              Start 14-day trial
              <span className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Business */}
          <div className="border border-[var(--line)] rounded-[14px] p-7 bg-white flex flex-col gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Business</h3>
            <div className="text-[40px] font-bold tracking-[-0.03em]">
              $99<span className="font-mono text-xs text-[var(--ink-4)] font-medium ml-1">/mo</span>
            </div>
            <p className="text-sm text-[var(--ink-3)]">For small enterprises with strict SLAs.</p>
            <ul className="flex flex-col gap-2">
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>Unlimited monitors and flows</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>10s interval · custom regions</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>SSO · audit logs · SLA</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>1-year retention</li>
              <li className="text-sm flex gap-2 items-start text-[var(--ink-2)]"><span className="text-[var(--brand-deep)] font-mono">✓</span>Priority support</li>
            </ul>
            <a href="#" className="mt-auto inline-flex items-center gap-2 bg-transparent text-[var(--ink-2)] text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--line-2)] hover:bg-[#fafafb] hover:text-[var(--ink)] transition-all group">
              Talk to us
              <span className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
