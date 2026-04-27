"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center surface-elevated p-12 lg:p-16 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Stop duct-taping your{" "}
            <span className="text-gradient">monitoring stack.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-3 max-w-lg mx-auto">
            API monitoring, flow automation, and server observability — one platform,
            one dashboard, zero complexity.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Free for all users during beta. No credit card required.
          </p>
          <Button size="lg" className="gap-2 font-semibold px-8" asChild>
            <Link href="https://app.sysmos.org/">
              Create Free Account <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
