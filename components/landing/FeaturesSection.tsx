import { Globe, Zap, ShieldCheck, BarChart3, Radio, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Globe,
    title: "Global Monitoring",
    desc: "Run checks from multiple regions worldwide. Get a true picture of availability.",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    desc: "Instant notifications via Email, Slack, or Webhooks when things go wrong.",
  },
  {
    icon: ShieldCheck,
    title: "SSL Certificate Monitoring",
    desc: "Get notified before certificates expire. Prevent unexpected outages.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    desc: "Monitor latency, uptime %, and response time trends over time.",
  },
  {
    icon: Radio,
    title: "Realtime Dashboard",
    desc: "See incidents and recovery live. Share status with your team.",
  },
  {
    icon: Terminal,
    title: "CLI & Tunnel Support",
    desc: "Monitor local services securely through our CLI tunneling feature.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Everything you need to{" "}
          <span className="text-gradient">stay online</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Comprehensive monitoring tools designed for modern infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group surface-card p-6 hover:glow-border transition-all duration-300"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-5 w-5 text-primary" />
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
