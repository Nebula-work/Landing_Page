"use client";

import { Globe, Workflow, Server, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

/* ── Animated chart helpers ────────────────────────────────── */

function buildSvgPath(points: number[], w: number, h: number, pad = 4) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = (w - pad * 2) / (points.length - 1);
  return points
    .map((p, i) => {
      const x = pad + i * step;
      const y = pad + (1 - (p - min) / range) * (h - pad * 2);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

/* ── Animated API Monitoring mock ──────────────────────────── */

const latencyData = [52, 48, 55, 44, 42, 60, 38, 45, 50, 41, 47, 43, 39, 46, 42];
const latencyPath = buildSvgPath(latencyData, 400, 60);

const ApiMonitorMock = () => (
  <div className="space-y-4">
    {/* Latency sparkline */}
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] text-muted-foreground font-medium">Response Time</span>
        <span className="text-[10px] font-mono text-primary">avg 46ms</span>
      </div>
      <svg viewBox="0 0 400 60" className="w-full h-12" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pillarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(198 93% 55%)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="hsl(198 93% 55%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <motion.path
          d={latencyPath}
          fill="none"
          stroke="hsl(198 93% 55%)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
    {/* Endpoint rows */}
    {[
      { endpoint: "/v1/users", status: "up", latency: "42ms", region: "US-East" },
      { endpoint: "/v1/payments", status: "up", latency: "87ms", region: "EU-Central" },
      { endpoint: "/v1/auth", status: "down", latency: "—", region: "AP-South" },
    ].map((e, i) => (
      <motion.div
        key={e.endpoint}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.1 }}
        className="flex items-center justify-between text-xs font-mono px-4 py-2 rounded-lg bg-secondary/50"
      >
        <span className="text-foreground">{e.endpoint}</span>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground hidden sm:inline">{e.region}</span>
          <span className="text-muted-foreground">{e.latency}</span>
          <span className={`flex items-center gap-1.5 ${e.status === "up" ? "text-green-400" : "text-destructive"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${e.status === "up" ? "bg-green-400 animate-pulse-glow" : "bg-destructive"}`} />
            {e.status}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ── Animated Flow Builder mock ────────────────────────────── */

const flowSteps = [
  { label: "GET /users", color: "hsl(198 93% 55%)", status: "200 OK" },
  { label: "Extract token", color: "hsl(265 80% 60%)", status: "$.token" },
  { label: "POST /orders", color: "hsl(25 95% 53%)", status: "201 Created" },
  { label: "Assert 201", color: "hsl(142 71% 45%)", status: "Pass" },
];

const FlowBuilderMock = () => (
  <div className="py-2">
    <div className="flex flex-col gap-3">
      {flowSteps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="relative"
        >
          <div className="flex items-center gap-3">
            {/* Step number with animated connector */}
            <div className="flex flex-col items-center">
              <motion.div
                className="h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: step.color }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 300 }}
              >
                {i + 1}
              </motion.div>
              {i < flowSteps.length - 1 && (
                <motion.div
                  className="w-px h-3"
                  style={{ background: step.color }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.15 }}
                />
              )}
            </div>

            {/* Step card */}
            <div className="flex-1 flex items-center justify-between px-4 py-2 rounded-lg bg-secondary/50 border border-border">
              <span className="text-xs font-mono text-foreground">{step.label}</span>
              <motion.span
                className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                style={{ color: step.color, background: `${step.color}15` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3 }}
              >
                {step.status}
              </motion.span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    {/* Execution status */}
    <motion.div
      className="mt-4 flex items-center justify-between px-4 py-2 rounded-lg border border-green-500/20 bg-green-500/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <span className="text-xs text-muted-foreground">Flow execution</span>
      <span className="flex items-center gap-1.5 text-xs font-medium text-green-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-glow" />
        All steps passed
      </span>
    </motion.div>
  </div>
);

/* ── Animated Server Agent mock ────────────────────────────── */

const metrics = [
  { label: "CPU", value: 23, max: 100, unit: "%", color: "hsl(142 71% 45%)" },
  { label: "Memory", value: 67, max: 100, unit: "%", color: "hsl(198 93% 55%)" },
  { label: "Disk I/O", value: 42, max: 100, unit: "%", color: "hsl(45 93% 47%)" },
  { label: "Network", value: 34, max: 100, unit: "%", color: "hsl(265 80% 60%)" },
];

const processes = [
  { name: "nginx", cpu: "2.1%", mem: "148 MB", pid: "1024" },
  { name: "postgres", cpu: "8.4%", mem: "512 MB", pid: "2048" },
  { name: "node", cpu: "4.2%", mem: "256 MB", pid: "3072" },
];

const ServerAgentMock = () => (
  <div className="space-y-4">
    {/* Animated metric bars */}
    <div className="grid grid-cols-2 gap-3">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-3 rounded-lg bg-secondary/50"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground font-medium">{m.label}</span>
            <span className="text-xs font-mono font-bold" style={{ color: m.color }}>
              {m.value}{m.unit}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: m.color }}
              initial={{ width: "0%" }}
              whileInView={{ width: `${m.value}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Process table */}
    <div className="rounded-lg bg-secondary/50 overflow-hidden">
      <div className="px-3 py-1.5 border-b border-border/50">
        <span className="text-[10px] text-muted-foreground font-medium">Top Processes</span>
      </div>
      {processes.map((p, i) => (
        <motion.div
          key={p.pid}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.1 }}
          className="flex items-center justify-between px-3 py-1.5 text-[10px] font-mono border-b border-border/30 last:border-0"
        >
          <span className="text-foreground">{p.name}</span>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">PID {p.pid}</span>
            <span className="text-primary">{p.cpu}</span>
            <span className="text-muted-foreground">{p.mem}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Anomaly status */}
    <motion.div
      className="flex items-center justify-between px-3 py-2 rounded-lg border border-green-500/20 bg-green-500/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      <span className="text-[10px] text-muted-foreground">Anomaly Detection</span>
      <span className="flex items-center gap-1.5 text-[10px] font-medium text-green-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-glow" />
        No anomalies detected
      </span>
    </motion.div>
  </div>
);

/* ── Pillar definitions ────────────────────────────────────── */

const pillars = [
  {
    id: "api-monitoring",
    icon: Globe,
    label: "API Monitoring",
    headline: "Distributed API Monitoring from Multiple Regions",
    description:
      "Run health checks from US-East, US-West, EU-Central, and AP-Southeast simultaneously. Know exactly where and when your APIs fail — before your users do.",
    features: [
      "Multi-region checks every 30 seconds",
      "Response time breakdown (DNS, TLS, TTFB, total)",
      "SSL certificate expiry tracking & alerts",
      "Status code validation & response body matching",
      "Uptime percentage & incident timeline",
      "Live metric streaming via SSE",
    ],
    mockLabel: "api-monitor",
    mockContent: <ApiMonitorMock />,
  },
  {
    id: "api-flows",
    icon: Workflow,
    label: "API Flow Builder",
    headline: "Visual Workflow Automation for API Testing",
    description:
      "Build multi-step API workflows with a drag-and-drop canvas. Chain requests, extract variables, add conditional logic, and validate responses — all visually.",
    features: [
      "Drag-and-drop visual flow canvas",
      "Conditional routing based on response values",
      "Variable extraction with JSONPath",
      "Request chaining with data passing",
      "Scheduled & on-demand execution",
      "Flow analytics & execution history",
    ],
    mockLabel: "flow-builder",
    mockContent: <FlowBuilderMock />,
  },
  {
    id: "server-agent",
    icon: Server,
    label: "Server Agent",
    headline: "Kernel-Level Server Observability with eBPF",
    description:
      "Install a lightweight agent that uses eBPF probes to monitor CPU, memory, disk, network, HTTP/gRPC traffic, database queries, and security events — without modifying your applications.",
    features: [
      "eBPF kernel probes — zero code changes",
      "CPU, memory, disk, network metrics",
      "HTTP/gRPC request tracing at L7",
      "Database query monitoring",
      "EWMA-based anomaly detection",
      "Offline buffering with auto-replay",
    ],
    mockLabel: "server-metrics",
    mockContent: <ServerAgentMock />,
  },
];

/* ── Section ───────────────────────────────────────────────── */

const ProductPillarsSection = () => (
  <section id="product" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <span className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Platform
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Three products.{" "}
          <span className="text-gradient">One platform.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need to keep your APIs healthy, your workflows automated, and your infrastructure visible.
        </p>
      </div>

      <Tabs defaultValue="api-monitoring" className="w-full">
        <TabsList className="mx-auto mb-8 flex w-fit bg-secondary/50 p-1 rounded-xl">
          {pillars.map((p) => (
            <TabsTrigger
              key={p.id}
              value={p.id}
              className="flex items-center gap-2 px-4 py-2.5 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg"
            >
              <p.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{p.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {pillars.map((p) => (
          <TabsContent key={p.id} value={p.id}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Left: text */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  {p.headline}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {p.description}
                </p>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: animated mock */}
              <div className="surface-elevated p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full opacity-60" style={{ background: "hsl(45 93% 47%)" }} />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    {p.mockLabel}
                  </span>
                </div>
                {p.mockContent}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default ProductPillarsSection;
