"use client";

import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const OpenSourceSection = () => (
  <section className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        {/* Left: text */}
        <div>
          <span className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Open Agent
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            Know exactly what runs{" "}
            <span className="text-gradient">on your servers</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Unlike proprietary agents from Datadog or New Relic, the Sysmos server agent
            is fully inspectable. Audit every eBPF probe, every metric collected, every
            byte sent. No black boxes on your infrastructure.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Go source code — read, audit, and verify",
              "eBPF C probes compiled with bpf2go — no hidden kernel modules",
              "Ed25519 signed updates with automatic rollback",
              "Configurable YAML — control exactly what gets monitored",
              "< 2% CPU overhead target — lightweight by design",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="gap-2" asChild>
            <Link href="https://app.sysmos.org/">
              Get Started <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Right: install snippet mock */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="surface-elevated p-6 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full opacity-60" style={{ background: "hsl(45 93% 47%)" }} />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">terminal</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <span className="text-muted-foreground"># Install the Sysmos agent</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-green-400">$</span>{" "}
              <span className="text-foreground">curl -sSL https://install.sysmos.org | sh</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground"
            >
              <div>Downloading sysmos-agent v1.0.0...</div>
              <div>Verifying Ed25519 signature... OK</div>
              <div>Installing to /usr/local/bin/sysmos-agent</div>
              <div>Creating systemd service...</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <span className="text-green-400">$</span>{" "}
              <span className="text-foreground">sysmos-agent --api-key YOUR_KEY</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-2"
            >
              <Terminal className="h-3 w-3 text-green-400" />
              <span className="text-green-400">Agent registered. Metrics flowing.</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default OpenSourceSection;
