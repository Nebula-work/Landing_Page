import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-6 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #e6e3ee 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6 text-center flex flex-col items-center gap-5">
        {/* Pill */}
        <div className="inline-flex items-center gap-2.5 pl-3.5 pr-3.5 py-1.5 bg-white border border-[var(--line-2)] rounded-full text-[13px] text-[var(--ink-2)] shadow-[0_1px_0_rgba(15,17,21,0.04),0_1px_2px_rgba(15,17,21,0.04)]">
          <span className="bg-[var(--brand-soft)] text-[var(--brand-deep)] font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
            NEW
          </span>
          <span>eBPF agent v2.0 — &lt;2% CPU overhead</span>
          <span className="text-[var(--ink-4)] font-mono text-xs">↗</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(40px,5.6vw,68px)] leading-[1.02] font-bold tracking-[-0.035em] max-w-[940px]">
          Full-stack monitoring,<br />
          <span className="bg-gradient-to-b from-[var(--brand)] to-[var(--brand-deep)] bg-clip-text text-transparent">
            from API to kernel.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[640px] text-lg text-[var(--ink-3)] leading-relaxed">
          Sysmos gives small teams a single pane of glass for distributed API health
          checks and kernel-level server observability — without the enterprise price tag.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-2.5 flex-wrap justify-center">
          <a
            href="https://app.sysmos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--brand)] text-white text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--brand)] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_1px_2px_rgba(168,85,217,0.35)] hover:bg-[var(--brand-deep)] hover:border-[var(--brand-deep)] transition-all"
          >
            Start monitoring free →
          </a>
          <a
            href="https://app.sysmos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-[var(--ink-2)] text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--line-2)] hover:bg-[#fafafb] hover:text-[var(--ink)] transition-all"
          >
            Book a 15-min demo
          </a>
        </div>

        {/* Meta */}
        <div className="flex gap-5 flex-wrap justify-center text-[13px] text-[var(--ink-3)] font-mono">
          <span><span className="text-[var(--brand)] mr-1.5">✓</span> Free forever for 1 user</span>
          <span><span className="text-[var(--brand)] mr-1.5">✓</span> No credit card</span>
          <span><span className="text-[var(--brand)] mr-1.5">✓</span> Up in under 5 minutes</span>
        </div>
      </div>

      {/* Product showcase frame */}
      <div className="relative mt-12 px-6">
        <div className="max-w-[1180px] mx-auto rounded-[20px] bg-gradient-to-b from-[#fdfbff] to-white border border-[var(--line-2)] shadow-[0_1px_0_rgba(15,17,21,0.04),0_24px_60px_-20px_rgba(15,17,21,0.18)] overflow-hidden relative">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(600px 200px at 50% -10%, rgba(168,85,217,0.12), transparent 70%)" }} />

          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)] bg-[#fafafb] relative z-10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d8d8df]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#d8d8df]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#d8d8df]" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-[var(--ink-4)]">
              app.sysmos.io / api-monitor
            </div>
            <div className="w-12" />
          </div>

          {/* Screenshot */}
          <Image
            src="/api-monitor-analytics.png"
            alt="Sysmos API monitor analytics"
            width={1180}
            height={600}
            className="w-full block relative z-10"
            priority
          />

          {/* Live band */}
          <div className="flex items-center gap-3.5 px-4 py-2.5 border-t border-[var(--line)] font-mono text-xs text-[var(--ink-3)] bg-[#fafafb] relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[var(--ok)] font-medium">
              <span className="w-[7px] h-[7px] rounded-full bg-[var(--ok)] shadow-[0_0_0_4px_rgba(22,163,74,0.18)] animate-pulse" />
              LIVE
            </span>
            <span>last check 4s ago</span>
            <span className="text-[var(--line-2)]">|</span>
            <span className="text-[var(--ink-2)]">us-east-1</span>
            <span className="text-[var(--ink-2)]">eu-west-2</span>
            <span className="text-[var(--ink-2)]">ap-south-1</span>
            <span className="flex-1" />
            <span>p95 <strong className="text-[var(--ink-2)]">146ms</strong></span>
            <span>uptime <strong className="text-[var(--ok)]">100.00%</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}
