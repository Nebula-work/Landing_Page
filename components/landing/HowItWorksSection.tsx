export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#fcfcfd] border-t border-b border-[var(--line)]" id="how">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section head */}
        <div className="text-center max-w-[760px] mx-auto mb-14 flex flex-col gap-3.5 items-center">
          <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)] mr-2 align-middle" />
            How it works
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.03em]">
            From signup to first alert <span className="text-[var(--brand-deep)]">in under 5 minutes.</span>
          </h2>
          <p className="text-[17px] text-[var(--ink-3)]">
            No SDK to wire up, no agents to compile. Add an endpoint, install the agent with one line, route alerts where your team already lives.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[var(--line)] rounded-[14px] bg-white overflow-hidden">
          {/* Step 1 */}
          <div className="p-7 border-b md:border-b-0 md:border-r border-[var(--line)] flex flex-col gap-3.5">
            <span className="self-start font-mono text-[11px] tracking-[0.1em] text-[var(--brand-deep)] bg-[var(--brand-tint)] border border-[var(--brand-soft)] px-2 py-1 rounded-md">
              STEP 01
            </span>
            <h3 className="text-lg font-semibold tracking-tight">Add an API endpoint</h3>
            <p className="text-sm text-[var(--ink-3)]">
              Paste a URL, pick the regions you care about, and set an interval. SSL and status validation are on by default.
            </p>
            <div className="mt-2 font-mono text-xs bg-[#0f1115] text-[#d6d3df] p-3.5 rounded-lg leading-relaxed overflow-auto">
              <span>POST /v1/monitors</span>{"\n"}
              <span>{"{"}</span>{"\n"}
              {"  "}<span className="text-[#c084e8]">&quot;name&quot;</span>: <span className="text-[#86efac]">&quot;checkout-api&quot;</span>,{"\n"}
              {"  "}<span className="text-[#c084e8]">&quot;url&quot;</span>:  <span className="text-[#86efac]">&quot;https://api.acme.io/health&quot;</span>,{"\n"}
              {"  "}<span className="text-[#c084e8]">&quot;regions&quot;</span>: [<span className="text-[#86efac]">&quot;us-east-1&quot;</span>, <span className="text-[#86efac]">&quot;eu-west-2&quot;</span>],{"\n"}
              {"  "}<span className="text-[#c084e8]">&quot;interval&quot;</span>: 60{"\n"}
              <span>{"}"}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-7 border-b md:border-b-0 md:border-r border-[var(--line)] flex flex-col gap-3.5">
            <span className="self-start font-mono text-[11px] tracking-[0.1em] text-[var(--brand-deep)] bg-[var(--brand-tint)] border border-[var(--brand-soft)] px-2 py-1 rounded-md">
              STEP 02
            </span>
            <h3 className="text-lg font-semibold tracking-tight">Install the agent</h3>
            <p className="text-sm text-[var(--ink-3)]">
              One curl command on each Linux host. The eBPF agent starts streaming kernel-level metrics within seconds.
            </p>
            <div className="mt-2 font-mono text-xs bg-[#0f1115] text-[#d6d3df] p-3.5 rounded-lg leading-relaxed overflow-auto">
              <span className="text-[#6b7280]"># Linux x86_64 / arm64</span>{"\n"}
              curl -fsSL get.sysmos.io | sh{"\n"}
              sysmos agent start \{"\n"}
              {"  "}--token $SYSMOS_TOKEN{"\n"}
              {"\n"}
              <span className="text-[#6b7280]"># &lt; 2% CPU · 30MB RSS</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-7 flex flex-col gap-3.5">
            <span className="self-start font-mono text-[11px] tracking-[0.1em] text-[var(--brand-deep)] bg-[var(--brand-tint)] border border-[var(--brand-soft)] px-2 py-1 rounded-md">
              STEP 03
            </span>
            <h3 className="text-lg font-semibold tracking-tight">Route alerts to your channels</h3>
            <p className="text-sm text-[var(--ink-3)]">
              Connect Slack, Discord, PagerDuty, custom webhooks, or email. Same provider can fan-out to multiple channels by severity.
            </p>
            <div className="mt-2 font-mono text-xs bg-[#0f1115] text-[#d6d3df] p-3.5 rounded-lg leading-relaxed overflow-auto">
              alerts:{"\n"}
              {"  "}- severity: <span className="text-[#86efac]">&quot;critical&quot;</span>{"\n"}
              {"    "}channels:{"\n"}
              {"      "}- <span className="text-[#c084e8]">slack</span>: <span className="text-[#86efac]">&quot;#oncall&quot;</span>{"\n"}
              {"      "}- <span className="text-[#c084e8]">pagerduty</span>: <span className="text-[#86efac]">&quot;primary&quot;</span>{"\n"}
              {"  "}- severity: <span className="text-[#86efac]">&quot;warn&quot;</span>{"\n"}
              {"    "}channels:{"\n"}
              {"      "}- <span className="text-[#c084e8]">discord</span>: <span className="text-[#86efac]">&quot;#monitoring&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
