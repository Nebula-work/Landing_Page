import { motion } from "framer-motion";

const endpoints = [
  { name: "api.acme.co/v1/users", status: "up", latency: "42ms", uptime: "99.98%", region: "US-East" },
  { name: "api.acme.co/v1/payments", status: "up", latency: "87ms", uptime: "99.95%", region: "EU-West" },
  { name: "api.acme.co/v1/auth", status: "down", latency: "—", uptime: "98.12%", region: "AP-South" },
  { name: "api.acme.co/v1/webhooks", status: "up", latency: "23ms", uptime: "100%", region: "US-West" },
];

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
        <span className="ml-3 text-xs text-muted-foreground font-mono">dashboard — uptime monitor</span>
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
