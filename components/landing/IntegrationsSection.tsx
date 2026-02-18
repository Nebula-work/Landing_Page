import { motion } from "framer-motion";

const integrations = [
  {
    name: "Slack",
    category: "Team Chat",
    description: "Post incident alerts directly to Slack channels. Notify your on-call team instantly.",
    color: "hsl(var(--primary))",
    bg: "hsl(var(--primary) / 0.08)",
    logo: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
  },
  {
    name: "Discord",
    category: "Community",
    description: "Send real-time incident reports to your Discord server and keep your community informed.",
    color: "hsl(235 86% 65%)",
    bg: "hsl(235 86% 65% / 0.08)",
    logo: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    name: "Twilio",
    category: "SMS & Voice",
    description: "Receive SMS or phone call alerts for critical incidents. Never miss a P0 outage.",
    color: "hsl(4 86% 58%)",
    bg: "hsl(4 86% 58% / 0.08)",
    logo: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20.8c-4.852 0-8.8-3.948-8.8-8.8S7.148 3.2 12 3.2s8.8 3.948 8.8 8.8-3.948 8.8-8.8 8.8zM9.6 10.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zm4.8 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zm-4.8 4.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zm4.8 0a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    category: "Notifications",
    description: "Send detailed incident reports to any email address. Supports custom templates.",
    color: "hsl(142 71% 45%)",
    bg: "hsl(142 71% 45% / 0.08)",
    logo: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    name: "PagerDuty",
    category: "On-Call",
    description: "Escalate incidents automatically through PagerDuty's on-call scheduling.",
    color: "hsl(25 95% 53%)",
    bg: "hsl(25 95% 53% / 0.08)",
    logo: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M16.407 2.1H7.25L5.617 21.9h11.48L18.73 2.1zM12 15.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"/>
      </svg>
    ),
  },
  {
    name: "Webhooks",
    category: "Custom",
    description: "POST incident payloads to any URL. Build custom integrations with your own tooling.",
    color: "hsl(var(--primary))",
    bg: "hsl(var(--primary) / 0.08)",
    logo: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/>
        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/>
        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const IntegrationsSection = () => (
  <section id="integrations" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-14">
        <span className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Integrations
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Alert your team{" "}
          <span className="text-gradient">wherever they work</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Connect Sysmos to the tools your team already uses. Get notified the way you want, every time.
        </p>
      </div>

      {/* Integration cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {integrations.map((integration) => (
          <motion.div
            key={integration.name}
            variants={cardVariants}
            className="group surface-card p-6 hover:glow-border transition-all duration-300 cursor-default"
          >
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: integration.bg, color: integration.color }}
              >
                {integration.logo}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground">{integration.name}</h3>
                  <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {integration.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </div>

            {/* Bottom connector line  */}
            <div
              className="mt-4 h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, ${integration.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-center text-sm text-muted-foreground"
      >
        More integrations coming soon —{" "}
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          request one
        </a>
      </motion.p>
    </div>
  </section>
);

export default IntegrationsSection;
