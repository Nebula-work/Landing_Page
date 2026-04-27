"use client";

import { Shield, Lock, Eye, Code2, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Lock,
    title: "Encrypted Everything",
    desc: "All data encrypted in transit (TLS 1.3) and at rest. API keys are hashed and never stored in plain text.",
  },
  {
    icon: Shield,
    title: "SSRF Protection",
    desc: "Built-in safeguards prevent private network access from API monitors. Your infrastructure stays isolated.",
  },
  {
    icon: Eye,
    title: "Inspectable Agent",
    desc: "The server monitoring agent is open and auditable. Know exactly what runs on your infrastructure.",
  },
  {
    icon: Code2,
    title: "Secure by Design",
    desc: "mTLS client certificates, Ed25519 signature verification for agent updates, and hardware-bound API keys.",
  },
  {
    icon: Globe,
    title: "GDPR Aware",
    desc: "Data residency considerations built in. We process monitoring data — not user PII.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    desc: "Granular RBAC with per-endpoint permissions. Control who can view, edit, or manage each part of your setup.",
  },
];

const TrustSection = () => (
  <section className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <span className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Security
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Built for teams that{" "}
          <span className="text-gradient">take security seriously</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Enterprise-grade security practices from day one — not bolted on after the fact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group surface-card p-6 hover:glow-border transition-all duration-300"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
