"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What can I monitor with Sysmos?",
    a: "Sysmos covers three areas: (1) API Monitoring — distributed health checks from multiple global regions with SSL tracking, latency breakdown, and uptime metrics. (2) API Flow Builder — visual multi-step workflow automation for chaining API calls with conditional logic and assertions. (3) Server Monitoring Agent — an eBPF-powered agent that monitors CPU, memory, disk, network, HTTP/gRPC traffic, database queries, and security events at the kernel level.",
  },
  {
    q: "Is Sysmos really free?",
    a: "Yes. During the public beta, all features are available to every user at no cost and with no credit card required. When we introduce paid plans in the future, existing users will be notified in advance. Everyone gets a free tier by default — paid plans will unlock higher limits and additional capabilities.",
  },
  {
    q: "How does the Server Monitoring Agent work?",
    a: "The agent is a lightweight Go binary that uses eBPF probes (Linux kernel 5.8+) to observe system and network activity at the kernel level — without modifying your applications. It targets less than 2% CPU overhead. Data is buffered locally for offline resilience and auto-replayed when connectivity returns. The agent code is fully inspectable — no black-box binaries on your servers.",
  },
  {
    q: "What is the API Flow Builder?",
    a: "The Flow Builder lets you create multi-step API workflows using a visual drag-and-drop canvas. You can chain HTTP requests, extract values from responses using JSONPath, add conditional routing, validate assertions, and schedule flows to run automatically. It's ideal for integration testing, synthetic monitoring, and automated regression checks — without writing test scripts.",
  },
  {
    q: "What alerting channels are supported?",
    a: "Sysmos supports Slack, Discord, Email, PagerDuty, SMS (via Twilio), and custom Webhooks with optional HMAC-SHA256 signing. You can configure alert cooldowns and consecutive-failure thresholds to avoid alert fatigue.",
  },
  {
    q: "How is Sysmos different from Datadog or UptimeRobot?",
    a: "Sysmos combines API monitoring, visual API flow automation, and eBPF-based server observability in one platform — features that competitors typically sell as separate, expensive products. The server agent is fully inspectable (unlike proprietary agents), and the flow builder is a unique capability that no major monitoring tool offers natively. Plus, it's free during beta with no per-host or per-seat pricing.",
  },
  {
    q: "What monitoring regions are available?",
    a: "API monitoring checks currently run from US-East-1, US-West-1, EU-Central-1, and AP-Southeast-1. More regions are being added based on user demand.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 lg:py-28 border-t border-border/50">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          FAQ
        </span>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Frequently asked questions
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Everything you need to know about Sysmos.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
