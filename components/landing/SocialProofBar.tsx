"use client";

import { motion } from "framer-motion";

const SocialProofBar = () => (
  <section className="py-12 lg:py-16 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by developers and engineering teams building the future
        </p>

        {/* Logo placeholder grid — replace with real logos when available */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[
            "Your Company",
            "Startup Co.",
            "DevTeam Inc.",
            "CloudOps",
            "ScaleUp",
          ].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground/40"
            >
              {/* Placeholder logo block — swap with <Image /> when real logos arrive */}
              <div className="h-8 w-24 rounded-md border border-dashed border-border flex items-center justify-center">
                <span className="text-[10px] font-medium text-muted-foreground/50">{name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {[
            { value: "Free during beta", label: "No credit card required" },
            { value: "4 Regions", label: "US, EU, AP monitoring" },
            { value: "Open Agent", label: "Inspectable eBPF agent" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-sm font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialProofBar;
