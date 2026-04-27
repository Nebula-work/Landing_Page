"use client";

import { motion } from "framer-motion";

const endpoints = [
  { name: "api.acme.co/v1/users", status: "up", latency: "42ms", uptime: "99.98%", region: "US-East" },
  { name: "api.acme.co/v1/payments", status: "up", latency: "87ms", uptime: "99.95%", region: "EU-West" },
  { name: "api.acme.co/v1/auth", status: "down", latency: "—", uptime: "98.12%", region: "AP-South" },
  { name: "api.acme.co/v1/webhooks", status: "up", latency: "23ms", uptime: "100%", region: "US-West" },
];

const tabs = ["API Monitors", "Flows", "Servers"];

// Simulated response time data points for the sparkline chart
const chartPoints = [45, 42, 48, 52, 38, 55, 62, 44, 41, 39, 47, 50, 43, 38, 42, 46, 51, 48, 44, 40];

function buildPath(points: number[], width: number, height: number, padding = 4) {
  const maxVal = Math.max(...points);
  const minVal = Math.min(...points);
  const range = maxVal - minVal || 1;
  const stepX = (width - padding * 2) / (points.length - 1);

  return points
    .map((p, i) => {
      const x = padding + i * stepX;
      const y = padding + (1 - (p - minVal) / range) * (height - padding * 2);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildAreaPath(points: number[], width: number, height: number, padding = 4) {
  const linePath = buildPath(points, width, height, padding);
  const stepX = (width - padding * 2) / (points.length - 1);
  const lastX = padding + (points.length - 1) * stepX;
  return `${linePath} L${lastX.toFixed(1)},${(height - padding).toFixed(1)} L${padding},${(height - padding).toFixed(1)} Z`;
}

const chartW = 600;
const chartH = 80;
const linePath = buildPath(chartPoints, chartW, chartH);
const areaPath = buildAreaPath(chartPoints, chartW, chartH);

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative mx-auto w-full max-w-3xl"
  >
    {/* Glow behind */}
    <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />

    <div className="relative surface-elevated overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/60" />
        <span className="h-3 w-3 rounded-full opacity-60" style={{ background: "hsl(45 93% 47%)" }} />
        <span className="h-3 w-3 rounded-full bg-green-500/60" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">dashboard — sysmos</span>
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 border-b border-border px-4 py-2">
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              i === 0
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 border-b border-border p-4">
        {[
          { label: "Uptime", value: "99.97%", color: "text-green-400" },
          { label: "Avg Latency", value: "48ms", color: "text-primary" },
          { label: "Incidents (30d)", value: "2", color: "text-yellow-400" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="text-center"
          >
            <div className={`text-xl font-bold font-mono ${s.color}`}>{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Animated response time chart */}
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">Response Time (ms) — last 20 checks</span>
          <span className="text-xs font-mono text-primary">avg 45ms</span>
        </div>
        <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-16 sm:h-20" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map((frac) => (
            <line
              key={frac}
              x1={0}
              y1={chartH * frac}
              x2={chartW}
              y2={chartH * frac}
              className="stroke-border"
              strokeWidth={0.5}
              strokeDasharray="4 4"
            />
          ))}
          {/* Gradient fill under the line */}
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(198 93% 55%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(198 93% 55%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <motion.path
            d={areaPath}
            fill="url(#chartGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
          {/* Animated line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="hsl(198 93% 55%)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
          />
          {/* Pulsing dot at the end */}
          <motion.circle
            cx={chartW - 4}
            cy={(() => {
              const last = chartPoints[chartPoints.length - 1];
              const max = Math.max(...chartPoints);
              const min = Math.min(...chartPoints);
              return 4 + (1 - (last - min) / (max - min || 1)) * (chartH - 8);
            })()}
            r={4}
            fill="hsl(198 93% 55%)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 1], scale: [0, 1.3, 1] }}
            transition={{ delay: 2.3, duration: 0.5 }}
          />
        </svg>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="px-4 py-2 text-left font-medium">Endpoint</th>
              <th className="px-4 py-2 text-left font-medium">Status</th>
              <th className="px-4 py-2 text-left font-medium">Latency</th>
              <th className="px-4 py-2 text-left font-medium hidden sm:table-cell">Uptime</th>
              <th className="px-4 py-2 text-left font-medium hidden sm:table-cell">Region</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((e, i) => (
              <motion.tr
                key={e.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="px-4 py-2.5 font-mono text-foreground">{e.name}</td>
                <td className="px-4 py-2.5">
                  <span className={`inline-flex items-center gap-1.5 ${e.status === "up" ? "text-green-400" : "text-destructive"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${e.status === "up" ? "bg-green-400 animate-pulse-glow" : "bg-destructive"}`} />
                    {e.status}
                  </span>
                </td>
                <td className="px-4 py-2.5 font-mono text-muted-foreground">{e.latency}</td>
                <td className="px-4 py-2.5 font-mono text-muted-foreground hidden sm:table-cell">{e.uptime}</td>
                <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">{e.region}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

export default DashboardMockup;
