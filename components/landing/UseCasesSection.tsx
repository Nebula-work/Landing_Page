"use client";

import { Layers, Server, Rocket, Code2, Container, ShieldCheck, Database, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  { icon: Layers, label: "SaaS API Monitoring" },
  { icon: Rocket, label: "E-commerce Uptime" },
  { icon: GitBranch, label: "CI/CD Pipeline Validation" },
  { icon: ShieldCheck, label: "Infrastructure Compliance" },
  { icon: Container, label: "Microservice Health" },
  { icon: Database, label: "Database Performance" },
  { icon: Server, label: "Internal APIs" },
  { icon: Code2, label: "DevOps Teams" },
];

const UseCasesSection = () => (
  <section id="use-cases" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Built for teams that{" "}
          <span className="text-gradient">ship fast</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From startups to enterprises, Sysmos fits your monitoring needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {cases.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-3 surface-card px-6 py-4 hover:glow-border transition-shadow duration-300"
          >
            <c.icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
