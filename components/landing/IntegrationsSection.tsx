export default function IntegrationsSection() {
  const items = [
    { name: "Slack", meta: "Channel webhook", logo: <SlackIcon /> },
    { name: "Discord", meta: "Channel webhook", logo: <DiscordIcon /> },
    { name: "PagerDuty", meta: "Incident routing", logo: <PagerDutyIcon /> },
    { name: "Webhook", meta: "Any HTTP endpoint", logo: <WebhookIcon /> },
    { name: "Email/SMTP", meta: "Distribution list", logo: <EmailIcon /> },
    { name: "Linux agent", meta: "eBPF · x86 / arm", logo: <LinuxIcon /> },
  ]

  return (
    <section className="py-24 pt-16" id="integrations">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section head */}
        <div className="text-center max-w-[760px] mx-auto mb-14 flex flex-col gap-3.5 items-center">
          <div className="font-mono text-[11.5px] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)] mr-2 align-middle" />
            Integrations
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] font-bold tracking-[-0.03em]">
            Plugs into the tools your team already uses.
          </h2>
          <p className="text-[17px] text-[var(--ink-3)]">
            Same provider can be connected multiple times — fan out severities to different Slack channels, route critical incidents to PagerDuty, ping a custom webhook for everything else.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 px-3.5 border border-[var(--line)] rounded-[10px] bg-white flex flex-col items-center gap-2.5 text-center transition-colors hover:border-[var(--brand-soft)] hover:bg-[var(--brand-tint)]"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center">
                {item.logo}
              </div>
              <div className="text-[13px] font-medium text-[var(--ink-2)]">{item.name}</div>
              <div className="font-mono text-[10.5px] text-[var(--ink-4)]">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path fill="#E01E5A" d="M5 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0v-5z" />
      <path fill="#36C5F0" d="M9 5a2 2 0 1 1 2-2v2H9zm0 1a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4h5z" />
      <path fill="#2EB67D" d="M19 9a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-4 0V4a2 2 0 0 1 4 0v5z" />
      <path fill="#ECB22E" d="M15 19a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 0 1 0-4h5a2 2 0 0 1 0 4h-5z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#5865F2">
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function PagerDutyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#06AC38">
      <path d="M16.965 1.18C15.085.164 13.747 0 10.74 0H3.5v13.84h7.488c2.6 0 4.595-.156 6.343-1.27 1.91-1.198 2.948-3.227 2.948-5.674 0-2.547-1.13-4.595-3.314-5.716zm-3.06 9.054c-1.018.66-2.18.785-4.087.785H7.061V3.05h2.832c1.7 0 2.985.14 4.029.836 1.146.755 1.751 1.989 1.751 3.494 0 1.553-.622 2.728-1.768 3.522zM7.061 18.15h3.541V24H7.061z" />
    </svg>
  )
}

function WebhookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0f1115" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 14l-3 5" /><circle cx="6" cy="20" r="2" />
      <path d="M14 14l3 5" /><circle cx="18" cy="20" r="2" />
      <path d="M12 14l0 -7" /><circle cx="12" cy="5" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0f1115" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  )
}

function LinuxIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#0f1115">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a3 3 0 0 0 .075.348c.025-.054.05-.108.075-.16.4-.835 1.31-1.735 1.96-2.45.45-.51.85-.95.85-1.345 0-.5-.45-.95-.45-1.65 0-.5.5-1.55.85-1.55.7 0 1.55.4 1.55.85 0 .25-.85.5-.85 1.7 0 .55.7 1.05.85 1.5.55.85 1.95 1.7 2.5 2.55.5.7.95 1.45 1.05 2.45.05.4-.05.85-.45 1.05-.7.4-1.45.45-2.05.45-.5 0-1.05-.05-1.55-.05-.5 0-1 0-1.55.05-.4 0-.85-.05-1.25-.25-.55-.3-.85-.85-.95-1.45-.15-.85-.05-1.7.15-2.5.05-.15.05-.25 0-.4-.05-.15-.15-.25-.3-.3-.7-.3-1.5-.05-1.85.55-.45.7-.4 1.65 0 2.4.5.85 1.4 1.45 2.4 1.7.85.2 1.75.25 2.65.2.95-.05 1.85-.05 2.8 0 .85.05 1.7.1 2.55-.05.95-.15 1.85-.45 2.55-1.15.55-.55.85-1.25.85-2 0-.5-.1-1-.3-1.45-.3-.7-.85-1.25-1.4-1.75-.5-.45-1.05-.85-1.55-1.3-.7-.65-1.4-1.35-1.85-2.2-.45-.85-.55-1.85-.4-2.8.15-1 .55-1.95 1.05-2.85.5-.95 1.1-1.85 1.55-2.85.45-1 .65-2.05.55-3.1-.05-.5-.2-1-.45-1.45z" />
    </svg>
  )
}
