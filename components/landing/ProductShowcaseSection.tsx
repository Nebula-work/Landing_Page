"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Workflow, Bell, Users } from "lucide-react";

const categories = [
  {
    id: "monitoring",
    icon: Monitor,
    label: "API Monitoring",
    screenshots: [
      {
        src: "/screenshots/api-monitors.png",
        alt: "Sysmos API Monitor dashboard showing active monitors, endpoints, regions, and status",
        caption: "Monitor all your API endpoints from a single dashboard. See status, latency, regions, and health at a glance.",
      },
      {
        src: "/screenshots/api-monitor-analytics.png",
        alt: "Sysmos API monitor analytics with uptime timeline, response time chart, P95/P99 latency, and success rate",
        caption: "Deep analytics per monitor — uptime timeline, avg/P95/P99 response times, success rate, and failure tracking over time.",
      },
      {
        src: "/screenshots/api-monitor-timing.png",
        alt: "Sysmos detailed timing breakdown showing DNS lookup, TCP connection, TLS handshake, server processing, and content transfer charts",
        caption: "Pinpoint exactly where latency comes from. Timing breakdown across DNS, TCP, TLS handshake, server processing, and content transfer.",
      },
      {
        src: "/screenshots/api-monitor-config.png",
        alt: "Sysmos API monitor configuration showing endpoint, method, interval, alert rules, performance thresholds, and validation",
        caption: "Fine-grained monitor configuration — set intervals, timeouts, alert thresholds, expected status codes, and performance budgets.",
      },
    ],
  },
  {
    id: "flows",
    icon: Workflow,
    label: "Flow Builder",
    screenshots: [
      {
        src: "/screenshots/flow-builder-canvas.png",
        alt: "Sysmos API Flow Builder visual canvas with connected nodes, step configuration, and run results",
        caption: "Build multi-step API workflows visually. Configure each step, chain requests, and see pass/fail results in real time.",
      },
      {
        src: "/screenshots/flow-builder-list.png",
        alt: "Sysmos API Flow Builder list view showing flows with steps, status, and last modified dates",
        caption: "Manage all your API flows in one place. Track steps, connections, enable/disable flows, and view execution history.",
      },
    ],
  },
  {
    id: "alerts",
    icon: Bell,
    label: "Integrations & Alerts",
    screenshots: [
      {
        src: "/screenshots/alert-channels.png",
        alt: "Sysmos alert channel integrations showing Discord, Email, Slack, PagerDuty, and Webhook options",
        caption: "Connect your team's tools — Slack, Discord, PagerDuty, Email, and custom Webhooks. Get alerted wherever you work.",
      },
      {
        src: "/screenshots/plan-usage.png",
        alt: "Sysmos Plan & Usage page showing free plan details, organization quotas, and account limits",
        caption: "Free plan with generous limits. Track your usage, quotas, and account limits from a clear dashboard.",
      },
    ],
  },
  {
    id: "team",
    icon: Users,
    label: "Team & RBAC",
    screenshots: [
      {
        src: "/screenshots/role-management.png",
        alt: "Sysmos role-based access control matrix with Admin, Developer, and Viewer permissions",
        caption: "Granular role-based access control. Define exactly what Admin, Developer, and Viewer roles can do across your organization.",
      },
      {
        src: "/screenshots/team-management.png",
        alt: "Sysmos team management page showing members, roles, and organization details",
        caption: "Manage your team members, view roles, and organize your workspace with full visibility.",
      },
      {
        src: "/screenshots/invite-member.png",
        alt: "Sysmos invite team member modal with email and role selection",
        caption: "Invite team members with a specific role — Admin, Developer, or Viewer. Onboard your team in seconds.",
      },
    ],
  },
];

const ProductShowcaseSection = () => {
  const [activeCategory, setActiveCategory] = useState("monitoring");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const currentScreenshot = currentCategory.screenshots[activeImageIndex];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveImageIndex(0);
  };

  return (
    <section id="showcase" className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Inside the Product
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            See Sysmos{" "}
            <span className="text-gradient">in action</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real screenshots from the Sysmos dashboard. No mockups — this is what you get.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border surface-card"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeImageIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-5xl"
          >
            {/* Browser frame */}
            <div className="surface-elevated overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full opacity-60" style={{ background: "hsl(45 93% 47%)" }} />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  app.sysmos.org — {currentCategory.label.toLowerCase()}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative w-full">
                <Image
                  src={currentScreenshot.src}
                  alt={currentScreenshot.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  quality={90}
                  priority={activeCategory === "monitoring"}
                />
              </div>
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {currentScreenshot.caption}
            </p>

            {/* Thumbnail navigation (for categories with multiple screenshots) */}
            {currentCategory.screenshots.length > 1 && (
              <div className="flex justify-center gap-3 mt-6">
                {currentCategory.screenshots.map((ss, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-24 sm:w-32 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      i === activeImageIndex
                        ? "border-primary glow-border"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={ss.src}
                      alt={ss.alt}
                      width={256}
                      height={144}
                      className="w-full h-auto"
                      quality={50}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
