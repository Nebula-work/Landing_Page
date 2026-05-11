import { Activity, Server, Layers } from "lucide-react"

export default function ProductPillarsSection() {
  const items = [
    {
      icon: <Activity className="w-5 h-5" />,
      kicker: "API monitoring",
      title: "Distributed health checks, instantly verified",
      body: "Run synthetic checks from multiple global regions on every endpoint — get latency, status, SSL, and timing breakdowns in real time.",
      visual: <CheckrowVisual />,
    },
    {
      icon: <Server className="w-5 h-5" />,
      kicker: "Server observability",
      title: "Kernel-level visibility, without the noise",
      body: "A lightweight eBPF-powered agent captures syscalls, network, CPU, and memory data with under 2% overhead. Drop-in for Linux servers.",
      visual: <ServerVisual />,
    },
    {
      icon: <Layers className="w-5 h-5" />,
      kicker: "Centralized dashboard",
      title: "One pane of glass for everything",
      body: "Monitors, flows, alerts, team, plan — all in one workspace. Designed for small teams to share context and respond fast.",
      visual: <PaneVisual />,
    },
  ]

  return (
    <section className="py-24" id="product">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section head */}
        <div className="text-center max-w-[760px] mx-auto mb-14 flex flex-col gap-3.5 items-center">
          <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)] mr-2 align-middle" />
            What Sysmos does
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.03em]">
            Three products. <span className="text-[var(--brand-deep)]">One platform.</span>
          </h2>
          <p className="text-[17px] text-[var(--ink-3)]">
            From the public-facing API your customers hit to the kernel call deep inside your VM — Sysmos covers the full stack so you stop juggling tools.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative p-7 bg-white border border-[var(--line)] rounded-[14px] flex flex-col gap-4 min-h-[380px] transition-all duration-150 hover:border-[var(--line-2)] hover:shadow-[0_1px_0_rgba(15,17,21,0.04),0_8px_24px_-8px_rgba(15,17,21,0.08)]"
            >
              <div className="w-11 h-11 rounded-[10px] bg-[var(--brand-tint)] text-[var(--brand-deep)] flex items-center justify-center border border-[var(--brand-soft)]">
                {item.icon}
              </div>
              <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--brand-deep)]">
                {item.kicker}
              </div>
              <h3 className="text-[19px] font-semibold tracking-tight">{item.title}</h3>
              <p className="text-[var(--ink-3)] text-[14.5px] flex-1">{item.body}</p>
              <div className="h-[130px] rounded-[10px] border border-[var(--line)] bg-[#fcfbff] relative overflow-hidden">
                {item.visual}
              </div>
              <a href="#" className="inline-flex items-center gap-1.5 text-[13.5px] text-[var(--ink-2)] font-medium group">
                Explore
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckrowVisual() {
  const heights = [55, 68, 72, 60, 80, 74, 90, 82, 76, 68, 72, 84, 90, 78, 70]
  return (
    <div className="flex gap-1 items-end h-full p-4">
      {heights.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm opacity-85"
          style={{
            height: `${h}%`,
            background: "linear-gradient(180deg, #c084e8, #a855d9)",
          }}
        />
      ))}
    </div>
  )
}

function ServerVisual() {
  return (
    <svg viewBox="0 0 300 130" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855d9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a855d9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,90 C30,80 50,60 80,65 C110,70 130,40 160,55 C190,70 210,30 240,40 C260,46 280,70 300,55 L300,130 L0,130 Z" fill="url(#sg)" />
      <path d="M0,90 C30,80 50,60 80,65 C110,70 130,40 160,55 C190,70 210,30 240,40 C260,46 280,70 300,55" fill="none" stroke="#a855d9" strokeWidth="1.6" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5a5e6b">
        <text x="12" y="20">cpu</text><text x="50" y="20">1.6%</text>
        <text x="100" y="20">mem</text><text x="138" y="20">412mb</text>
        <text x="200" y="20">net</text><text x="232" y="20">8.2mb/s</text>
      </g>
    </svg>
  )
}

function PaneVisual() {
  return (
    <div className="grid grid-cols-[80px_1fr] h-full">
      <div className="border-r border-[var(--line)] bg-white p-2.5 flex flex-col gap-1.5">
        {["Dash", "API", "Server", "Flow", "Alerts", "Team"].map((t, i) => (
          <div
            key={i}
            className="text-[9.5px] font-mono px-1.5 py-0.5 rounded"
            style={{
              color: i === 1 ? "var(--brand-deep)" : "var(--ink-4)",
              background: i === 1 ? "var(--brand-tint)" : "transparent",
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="p-2.5 grid grid-cols-2 gap-1.5">
        <div className="bg-white border border-[var(--line)] rounded-md p-1.5">
          <div className="text-[8px] font-mono text-[var(--ink-4)]">UPTIME</div>
          <div className="font-bold text-sm">100%</div>
        </div>
        <div className="bg-white border border-[var(--line)] rounded-md p-1.5">
          <div className="text-[8px] font-mono text-[var(--ink-4)]">P95</div>
          <div className="font-bold text-sm">146ms</div>
        </div>
        <div className="bg-white border border-[var(--line)] rounded-md p-1.5 col-span-2">
          <div className="text-[8px] font-mono text-[var(--ink-4)]">FAILURES</div>
          <div className="font-bold text-sm text-[var(--ok)]">0</div>
        </div>
      </div>
    </div>
  )
}
