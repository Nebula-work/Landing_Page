"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashboardMockup from "@/components/landing/DashboardMockup";
import GlobeNetwork from "@/components/landing/GlobeNetwork";
import { motion } from "framer-motion";

const stats = [
  { value: "4 Regions", label: "Global monitoring" },
  { value: "6+", label: "Alert channels" },
  { value: "<60s", label: "Check intervals" },
];

const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
    <GlobeNetwork />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full animate-pulse-glow" style={{ background: "hsl(142 69% 58%)" }} />
          Free during beta — no credit card required
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          Stop debugging outages.
          <br />
          <span className="text-gradient">Start preventing them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Sysmos combines multi-region API monitoring, visual workflow automation,
          and kernel-level server observability — so your team catches issues before
          users notice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button size="lg" className="gap-2 font-semibold px-6" asChild>
            <Link href="https://app.sysmos.org/">
              Start Monitoring — Free <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="font-semibold px-6" asChild>
            <Link href="#product">See How It Works</Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-3 text-xs text-muted-foreground"
        >
          Free for all users during beta. No credit card. No usage limits.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 200 }}
                className="text-xl sm:text-2xl font-bold font-mono text-primary"
              >
                {s.value}
              </motion.div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <DashboardMockup />
    </div>
  </section>
);

export default HeroSection;
