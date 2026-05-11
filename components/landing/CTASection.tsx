export default function CTASection() {
  return (
    <section className="py-24 pt-8">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="relative bg-gradient-to-b from-[#fcfbff] to-white border border-[var(--line)] rounded-[20px] p-16 px-8 text-center flex flex-col gap-4 items-center overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #ece8f3 1px, transparent 0)",
              backgroundSize: "22px 22px",
              maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 80%)",
            }}
          />

          <div className="relative font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)] mr-2 align-middle" />
            Get started
          </div>
          <h2 className="relative text-[40px] font-bold tracking-[-0.03em]">
            Stop guessing why production is slow.
          </h2>
          <p className="relative max-w-[540px] text-[16.5px] text-[var(--ink-3)]">
            Ship Sysmos to your stack today and have your first multi-region check, server agent, and Slack alert running before standup.
          </p>
          <div className="relative flex gap-2.5 flex-wrap justify-center">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 bg-[var(--brand)] text-white text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--brand)] shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_1px_2px_rgba(168,85,217,0.35)] hover:bg-[var(--brand-deep)] hover:border-[var(--brand-deep)] transition-all"
            >
              Start free →
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent text-[var(--ink-2)] text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--line-2)] hover:bg-[#fafafb] hover:text-[var(--ink)] transition-all"
            >
              Book a demo
            </a>
          </div>
          <div className="relative flex gap-4 font-mono text-xs text-[var(--ink-4)] mt-2 flex-wrap justify-center">
            <span>SOC 2 in progress</span>
            <span>·</span>
            <span>EU + US data residency</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
