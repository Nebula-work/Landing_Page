export default function TrustStrip() {
  return (
    <section className="border-t border-b border-[var(--line)] bg-[#fcfcfd] mt-16">
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between gap-8 py-5 flex-wrap">
        <div className="font-mono text-[11.5px] tracking-[0.08em] uppercase text-[var(--ink-4)]">
          Built for production · trusted by infra-first teams
        </div>

        <div className="flex gap-9 flex-wrap">
          <div>
            <div className="text-[22px] font-bold tracking-tight text-[var(--ink)]">&lt; 2%</div>
            <div className="font-mono text-[11px] text-[var(--ink-4)] tracking-[0.06em] uppercase mt-0.5">CPU overhead</div>
          </div>
          <div>
            <div className="text-[22px] font-bold tracking-tight text-[var(--ink)]">12+</div>
            <div className="font-mono text-[11px] text-[var(--ink-4)] tracking-[0.06em] uppercase mt-0.5">Global regions</div>
          </div>
          <div>
            <div className="text-[22px] font-bold tracking-tight text-[var(--ink)]">5</div>
            <div className="font-mono text-[11px] text-[var(--ink-4)] tracking-[0.06em] uppercase mt-0.5">Alert channels</div>
          </div>
          <div>
            <div className="text-[22px] font-bold tracking-tight text-[var(--ink)]">60s</div>
            <div className="font-mono text-[11px] text-[var(--ink-4)] tracking-[0.06em] uppercase mt-0.5">Min interval</div>
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {["us-east-1", "eu-west-2", "ap-south-1", "sa-east-1"].map((region) => (
            <span
              key={region}
              className="inline-flex items-center gap-1.5 font-mono text-[11.5px] px-2.5 py-1 rounded-full bg-white border border-[var(--line-2)] text-[var(--ink-2)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
