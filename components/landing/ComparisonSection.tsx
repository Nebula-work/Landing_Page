"use client";

import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

type Support = "yes" | "no" | "partial";

interface Row {
  feature: string;
  sysmos: Support;
  datadog: Support;
  uptimerobot: Support;
  betterstack: Support;
}

const rows: Row[] = [
  { feature: "Multi-region API monitoring", sysmos: "yes", datadog: "yes", uptimerobot: "yes", betterstack: "yes" },
  { feature: "Visual API flow builder", sysmos: "yes", datadog: "no", uptimerobot: "no", betterstack: "no" },
  { feature: "eBPF server agent", sysmos: "yes", datadog: "partial", uptimerobot: "no", betterstack: "yes" },
  { feature: "SSL certificate monitoring", sysmos: "yes", datadog: "yes", uptimerobot: "yes", betterstack: "yes" },
  { feature: "Slack, Discord, PagerDuty alerts", sysmos: "yes", datadog: "yes", uptimerobot: "partial", betterstack: "yes" },
  { feature: "Custom webhook alerts", sysmos: "yes", datadog: "yes", uptimerobot: "yes", betterstack: "yes" },
  { feature: "HTTP/gRPC kernel tracing", sysmos: "yes", datadog: "partial", uptimerobot: "no", betterstack: "partial" },
  { feature: "Anomaly detection (EWMA)", sysmos: "yes", datadog: "yes", uptimerobot: "no", betterstack: "partial" },
  { feature: "Team RBAC & org management", sysmos: "yes", datadog: "yes", uptimerobot: "partial", betterstack: "yes" },
  { feature: "Free tier available", sysmos: "yes", datadog: "partial", uptimerobot: "yes", betterstack: "partial" },
  { feature: "No per-host / per-seat pricing", sysmos: "yes", datadog: "no", uptimerobot: "partial", betterstack: "no" },
  { feature: "Open & inspectable agent", sysmos: "yes", datadog: "no", uptimerobot: "no", betterstack: "partial" },
];

const competitors = [
  { key: "sysmos" as const, label: "Sysmos", highlight: true },
  { key: "datadog" as const, label: "Datadog", highlight: false },
  { key: "uptimerobot" as const, label: "UptimeRobot", highlight: false },
  { key: "betterstack" as const, label: "Better Stack", highlight: false },
];

function CellIcon({ value }: { value: Support }) {
  if (value === "yes") return <Check className="h-4 w-4 text-green-400" />;
  if (value === "partial") return <Minus className="h-4 w-4 text-yellow-400" />;
  return <X className="h-4 w-4 text-muted-foreground/40" />;
}

const ComparisonSection = () => (
  <section id="comparison" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <span className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Compare
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          How Sysmos{" "}
          <span className="text-gradient">stacks up</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          One platform that combines what others sell separately — and it&apos;s free during beta.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 px-4 text-left font-medium text-muted-foreground w-[40%]">Feature</th>
              {competitors.map((c) => (
                <th
                  key={c.key}
                  className={`py-3 px-4 text-center font-semibold ${c.highlight ? "text-primary" : "text-muted-foreground"}`}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-border/50 hover:bg-secondary/20 transition-colors"
              >
                <td className="py-3 px-4 text-foreground">{row.feature}</td>
                {competitors.map((c) => (
                  <td
                    key={c.key}
                    className={`py-3 px-4 ${c.highlight ? "bg-primary/[0.03]" : ""}`}
                  >
                    <div className="flex justify-center">
                      <CellIcon value={row[c.key]} />
                    </div>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center text-xs text-muted-foreground"
      >
        Comparison based on publicly available feature sets as of April 2026. &quot;Partial&quot; means limited or paid-tier only.
      </motion.p>
    </div>
  </section>
);

export default ComparisonSection;
