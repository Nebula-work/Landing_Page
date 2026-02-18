import { Clock, Eye, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Clock, title: "Instant Detection", desc: "Catch issues in seconds, not minutes. Multi-region checks ensure no blind spots." },
  { icon: Eye, title: "Complete Visibility", desc: "One dashboard for uptime, latency, SSL, and incidents across every endpoint." },
  { icon: TrendingUp, title: "Performance Insights", desc: "Track response time trends and spot regressions before they impact users." },
  { icon: Shield, title: "Zero Surprises", desc: "SSL expiry alerts, scheduled maintenance windows, and proactive health checks." },
];

const ProblemSection = () => (
  <section className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Why teams switch to{" "}
          <span className="text-gradient">Uptime</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground text-lg"
        >
          Know when your API breaks. Before your users do.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group surface-card p-6 hover:glow-border transition-all duration-300"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-2">{r.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
