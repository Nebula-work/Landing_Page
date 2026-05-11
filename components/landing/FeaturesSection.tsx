import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="py-24" id="features">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section head */}
        <div className="text-center max-w-[760px] mx-auto mb-14 flex flex-col gap-3.5 items-center">
          <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)] mr-2 align-middle" />
            Inside the product
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.03em]">
            Built for the teams shipping production code <span className="text-[var(--brand-deep)]">at 2am.</span>
          </h2>
          <p className="text-[17px] text-[var(--ink-3)]">
            Sysmos is the monitoring tool we wished existed when we were on-call: fast to set up, calm to look at, honest about what it knows.
          </p>
        </div>

        {/* Feature 1 */}
        <FeatureRow
          eyebrow="API monitoring"
          title="Find slow endpoints before your customers do."
          lead="Multi-region synthetic checks with full timing breakdowns — DNS, TCP, TLS, server, transfer. Catch regional degradations and SSL expiries early."
          bullets={[
            "Real-time uptime and p50 / p95 / p99 latency, per region",
            "Status, response body, and SSL certificate validation",
            "Configurable intervals, retries, and degradation thresholds",
            "Alert on first failure or after N consecutive failures",
          ]}
          image="/api-monitor-analytics.png"
          imageAlt="API monitor analytics"
          cta="See API monitoring"
        />

        {/* Feature 2 - flipped */}
        <FeatureRow
          eyebrow="Timing breakdown"
          title={<>Know <em>where</em> the latency lives.</>}
          lead="Every check decomposes into DNS, TCP, TLS handshake, server processing, and content transfer — so you can tell the CDN from the database."
          bullets={[
            "Per-phase Avg and Max for the last 1h / 24h / 7d",
            "Compare regions side-by-side",
            "Pinpoint TLS handshake regressions and DNS flakiness",
          ]}
          image="/api-monitor-timing.png"
          imageAlt="Timing breakdown"
          flip
        />

        {/* Feature 3 */}
        <FeatureRow
          eyebrow="API flow builder"
          title="Test the journey, not just the endpoint."
          lead="Chain multi-step API flows — login, fetch, mutate, verify — with extracted variables and per-step assertions. Replay them on a schedule."
          bullets={[
            "Visual canvas with drag-to-connect steps",
            "Headers, query params, body, and response inspectors",
            "Variable extraction for stateful test chains",
            "Run on demand or on a schedule, alert on regressions",
          ]}
          image="/flow-builder-canvas.png"
          imageAlt="Flow builder canvas"
        />

        {/* Feature 4 - flipped */}
        <FeatureRow
          eyebrow="Alerting"
          title="Alerts where your team actually is."
          lead="Connect Slack, Discord, PagerDuty, email, or any HTTP endpoint via webhook. Multiple instances of the same provider — one Slack channel for warns, another for criticals."
          bullets={[
            "Five built-in channel types, plus generic webhooks",
            "Severity-based routing and quiet hours",
            "Connection health visible at a glance",
          ]}
          image="/alert-channels.png"
          imageAlt="Alert channels"
          flip
        />

        {/* Feature 5 */}
        <FeatureRow
          eyebrow="Workspace"
          title="A workspace built for small teams."
          lead="Invite teammates, scope access with admin / developer / viewer roles, track quotas across organizations — all in the same dashboard."
          bullets={[
            "Role-based permissions matrix",
            "Per-organization usage and limits",
            "API keys for CI / CD and infra-as-code",
          ]}
          image="/role-management.png"
          imageAlt="Role management"
        />
      </div>
    </section>
  )
}

function FeatureRow({
  eyebrow,
  title,
  lead,
  bullets,
  image,
  imageAlt,
  flip,
  cta,
}: {
  eyebrow: string
  title: React.ReactNode
  lead: string
  bullets: string[]
  image: string
  imageAlt: string
  flip?: boolean
  cta?: string
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 items-center py-14 border-t border-[var(--line)] ${flip ? "lg:grid-cols-[1.3fr_1fr]" : ""}`}>
      <div className={`flex flex-col gap-4 ${flip ? "lg:order-2" : ""}`}>
        <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--brand-deep)]">
          {eyebrow}
        </div>
        <h2 className="text-[34px] font-bold tracking-[-0.025em] leading-tight">{title}</h2>
        <p className="text-[17px] text-[var(--ink-3)]">{lead}</p>
        <ul className="flex flex-col gap-2.5 mt-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 items-start text-[14.5px] text-[var(--ink-2)]">
              <span className="text-[var(--brand-deep)] font-mono flex-shrink-0 mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>
        {cta && (
          <div className="mt-2">
            <a href="#" className="inline-flex items-center gap-2 bg-transparent text-[var(--ink-2)] text-[14.5px] font-medium px-4 py-2.5 rounded-lg border border-[var(--line-2)] hover:bg-[#fafafb] hover:text-[var(--ink)] transition-all group">
              {cta}
              <span className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        )}
      </div>
      <div className={`rounded-[14px] border border-[var(--line-2)] overflow-hidden bg-white shadow-[0_1px_0_rgba(15,17,21,0.04),0_8px_24px_-8px_rgba(15,17,21,0.08)] ${flip ? "lg:order-1" : ""}`}>
        <Image src={image} alt={imageAlt} width={700} height={450} className="w-full block" />
      </div>
    </div>
  )
}
