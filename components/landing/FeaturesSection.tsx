"use client";

import { Globe, Zap, ShieldCheck, BarChart3, Workflow, GitBranch, Variable, CalendarClock, Cpu, Activity, Network, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  // API Monitoring
  {
    icon: Globe,
    title: "Global Multi-Region Checks",
    desc: "Run health checks from US-East, US-West, EU-Central, and AP-Southeast simultaneously.",
    category: "API Monitoring",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    desc: "Instant notifications via Slack, Discord, PagerDuty, Email, SMS, or Webhooks.",
    category: "API Monitoring",
  },
  {
    icon: ShieldCheck,
    title: "SSL Certificate Monitoring",
    desc: "Track certificate expiry dates and get notified before they lapse.",
    category: "API Monitoring",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    desc: "Monitor latency breakdown (DNS, TLS, TTFB), uptime %, and response trends.",
    category: "API Monitoring",
  },
  // API Flows
  {
    icon: Workflow,
    title: "Visual Flow Builder",
    desc: "Drag-and-drop canvas to build multi-step API workflows with ease.",
    category: "API Flows",
  },
  {
    icon: GitBranch,
    title: "Conditional Logic & Assertions",
    desc: "Add branching conditions and response assertions to validate behavior.",
    category: "API Flows",
  },
  {
    icon: Variable,
    title: "Variable Extraction",
    desc: "Extract values from responses with JSONPath and pass them to subsequent steps.",
    category: "API Flows",
  },
  {
    icon: CalendarClock,
    title: "Scheduled Runs",
    desc: "Schedule flows to run on intervals. Track execution history and analytics.",
    category: "API Flows",
  },
  // Server Agent
  {
    icon: Cpu,
    title: "eBPF Kernel Monitoring",
    desc: "Observe system activity at the kernel level — zero code changes required.",
    category: "Server Agent",
  },
  {
    icon: Activity,
    title: "Resource Tracking",
    desc: "CPU, memory, disk I/O, and network bandwidth with per-process breakdown.",
    category: "Server Agent",
  },
  {
    icon: Network,
    title: "HTTP/gRPC Tracing",
    desc: "L7 protocol inspection traces HTTP and gRPC traffic without instrumentation.",
    category: "Server Agent",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    desc: "EWMA-based anomaly detection alerts you when metrics drift beyond thresholds.",
    category: "Server Agent",
  },
];

const categoryColors: Record<string, string> = {
  "API Monitoring": "text-primary",
  "API Flows": "text-violet-400",
  "Server Agent": "text-emerald-400",
};

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Everything you need to{" "}
          <span className="text-gradient">stay reliable</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Comprehensive tools for API health, workflow automation, and infrastructure observability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group surface-card p-6 hover:glow-border transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <span className={`text-[10px] font-medium uppercase tracking-wider ${categoryColors[f.category] || "text-muted-foreground"}`}>
                {f.category}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
