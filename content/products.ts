import type { ProductPageData } from "@/components/landing/ProductPageShell"

export const PRODUCT_PAGES: Record<string, ProductPageData> = {
  "api-monitoring": {
    slug: "api-monitoring",
    iconKey: "Pulse",
    badge: "API Monitoring",
    title: ["Catch slow endpoints", "before your customers do."],
    lead:
      "Synthetic health checks running from 12+ global regions, with full DNS/TCP/TLS/server timing breakdowns. Verify status, body and SSL on every probe.",
    metaPills: ["12+ regions", "30s min interval", "p50 / p95 / p99", "SSL validation"],
    heroShot: "/screenshots/api-monitor-analytics.png",
    heroChrome: "app.sysmos.io / api-monitors / checkout-api",
    benefits: [
      {
        iconKey: "Globe",
        title: "Multi-region by default",
        meta: "Distributed",
        body: "Each check runs in parallel across the regions you pick. Catch regional degradations the second they happen — not when a customer complains.",
      },
      {
        iconKey: "Pulse",
        title: "Real performance breakdown",
        meta: "Timing",
        body: "DNS → TCP → TLS → server → transfer for every probe. See exactly where the latency lives, per region, over any time window.",
      },
      {
        iconKey: "Shield",
        title: "Status, body, and SSL checks",
        meta: "Validation",
        body: "Validate response codes, JSON paths, response body content, and SSL certificates. Get warned before certificates expire.",
      },
    ],
    spec: [
      ["Regions",        "12+ global edge locations across NA, EU, APAC, SA"],
      ["Min interval",   "30 seconds (Team plan), 10 seconds (Business)"],
      ["Protocols",      "HTTP, HTTPS, HTTP/2"],
      ["Auth",           "Basic, Bearer, custom headers, mTLS"],
      ["Assertions",     "Status, latency, JSON path, regex on body, SSL expiry"],
      ["Retries",        "Configurable per-monitor with exponential backoff"],
      ["Data retention", "Up to 1 year on Business plan"],
    ],
    shotPairs: [
      { label: "Per-region latency",      src: "/screenshots/api-monitor-analytics.png" },
      { label: "Phase timing breakdown",  src: "/screenshots/api-monitor-timing.png" },
      { label: "Monitor configuration",   src: "/screenshots/api-monitor-config.png" },
      { label: "Active monitors list",    src: "/screenshots/api-monitors.png" },
    ],
    code: `POST /v1/monitors
{
  "name": "checkout-api",
  "url":  "https://api.acme.io/health",
  "method": "GET",
  "regions": ["us-east-1", "eu-west-2", "ap-south-1"],
  "interval": 30,
  "assert": {
    "status": 200,
    "max_latency_ms": 500,
    "body_contains": "ok"
  }
}`,
    codeLabel: "POST · create monitor",
  },

  "server-observability": {
    slug: "server-observability",
    iconKey: "Server",
    badge: "Server Observability",
    title: ["Kernel-level visibility,", "without the overhead."],
    lead:
      "A lightweight eBPF-powered agent that streams syscall, CPU, memory, disk and network metrics from your Linux hosts — designed to feel free and read like Linux.",
    metaPills: ["< 2% CPU", "30MB RSS", "Linux x86 / arm", "eBPF"],
    heroShot: "/screenshots/api-monitor-analytics.png",
    heroChrome: "app.sysmos.io / servers / prod-web-01",
    benefits: [
      {
        iconKey: "Pulse",
        title: "Lightweight by design",
        meta: "Performance",
        body: "The agent uses eBPF programs in-kernel — under 2% CPU and 30MB RSS on a typical production host. No JVM, no daemons fan-out.",
      },
      {
        iconKey: "Layers",
        title: "Every layer, one timeline",
        meta: "Correlation",
        body: "CPU, memory, disk I/O, network, and process-level metrics aligned on a single timeline. Click a spike, see what was running.",
      },
      {
        iconKey: "Shield",
        title: "Drop-in, secure install",
        meta: "Install",
        body: "One curl command. Read-only eBPF programs, signed binaries, no kernel modules. SOC 2 controls and audit logs included.",
      },
    ],
    spec: [
      ["Platforms",      "Linux x86_64 / arm64 · kernel 4.18+"],
      ["Footprint",      "< 2% CPU · ~30MB RSS · ~5MB disk"],
      ["Metrics",        "CPU, memory, disk, network, processes, file I/O, TCP retransmits"],
      ["Sampling",       "1Hz default, configurable 0.1Hz–10Hz"],
      ["Transport",      "TLS 1.3 to ingest endpoint, mTLS optional"],
      ["Data residency", "EU and US regions"],
      ["Compliance",     "SOC 2 in progress · DPA available"],
    ],
    shotPairs: [
      { label: "Host overview · prod-web-01", src: "/screenshots/api-monitor-analytics.png" },
      { label: "Process-level CPU + memory",  src: "/screenshots/api-monitor-timing.png" },
    ],
    code: `# Linux x86_64 / arm64 — < 2% CPU
curl -fsSL get.sysmos.io | sh

sysmos agent start \\
  --token $SYSMOS_TOKEN \\
  --tags "env=prod,svc=web,region=us-east-1"

# Verify
systemctl status sysmos-agent`,
    codeLabel: "bash · install agent",
  },

  "flow-builder": {
    slug: "flow-builder",
    iconKey: "Layers",
    badge: "Flow Builder",
    title: ["Test the journey,", "not just the endpoint."],
    lead:
      "Multi-step API flows with extracted variables and per-step assertions. Reproduce real customer journeys — login, fetch, mutate, verify — on a schedule.",
    metaPills: ["Visual canvas", "Variable extraction", "Scheduled runs", "Per-step asserts"],
    heroShot: "/screenshots/flow-builder-canvas.png",
    heroChrome: "app.sysmos.io / flows / checkout-journey",
    benefits: [
      {
        iconKey: "Layers",
        title: "Visual canvas",
        meta: "Authoring",
        body: "Drag-to-connect steps with full request and response inspectors. No YAML to memorize — but you can export to YAML or JSON anytime.",
      },
      {
        iconKey: "Pulse",
        title: "Stateful test chains",
        meta: "Variables",
        body: "Extract values from a response (auth token, order id) and reuse them in the next request. Build real journeys, not isolated probes.",
      },
      {
        iconKey: "Bell",
        title: "Schedule + alert",
        meta: "Continuous",
        body: "Run flows on demand or on a schedule. Failures route through the same alert channels as your API monitors.",
      },
    ],
    spec: [
      ["Steps per flow", "Unlimited"],
      ["Methods",        "GET, POST, PUT, PATCH, DELETE, custom"],
      ["Extractors",     "JSON path, regex, header, cookie"],
      ["Assertions",     "Status, body, header, latency, JSON path"],
      ["Scheduling",     "1 min – 24h intervals, cron expressions"],
      ["Concurrency",    "Parallel branches with merge"],
      ["History",        "Last 1000 runs per flow, full request/response"],
    ],
    shotPairs: [
      { label: "Canvas · drag-to-connect",       src: "/screenshots/flow-builder-canvas.png" },
      { label: "Flow list · status at a glance", src: "/screenshots/flow-builder-list.png" },
    ],
    code: `flow: "checkout-journey"
steps:
  - name: login
    POST: /v1/auth
    body: { email: "test@acme.io", password: "$SECRET" }
    extract:
      token: "$.access_token"

  - name: create_order
    POST: /v1/orders
    headers: { Authorization: "Bearer \${token}" }
    assert: { status: 201, latency_ms: "<800" }`,
    codeLabel: "yaml · flow definition",
  },

  alerting: {
    slug: "alerting",
    iconKey: "Bell",
    badge: "Alerting",
    title: ["Alerts where", "your team actually is."],
    lead:
      "Connect Slack, Discord, PagerDuty, email or any HTTP endpoint. Route severities to different channels — warnings to one Slack, criticals to PagerDuty.",
    metaPills: ["5 channel types", "Severity routing", "Quiet hours", "Webhook fallback"],
    heroShot: "/screenshots/alert-channels.png",
    heroChrome: "app.sysmos.io / alert-channels",
    benefits: [
      {
        iconKey: "Bell",
        title: "Channels you already use",
        meta: "Integrations",
        body: "Slack and Discord channel webhooks, PagerDuty services, SMTP email, and generic HTTP webhooks for anything else.",
      },
      {
        iconKey: "Shield",
        title: "Severity routing",
        meta: "Routing",
        body: "Map warn → one channel, critical → another. Same provider can be connected multiple times for different teams or services.",
      },
      {
        iconKey: "Globe",
        title: "Quiet hours and dedup",
        meta: "Hygiene",
        body: "On-call rotations, quiet hours per channel, and built-in deduplication so a flapping endpoint doesn't fan out into 200 messages.",
      },
    ],
    spec: [
      ["Channels",     "Slack, Discord, PagerDuty, Email/SMTP, Webhook"],
      ["Routing",      "By severity, monitor tag, or organization"],
      ["Dedup window", "Configurable, default 5 minutes"],
      ["Quiet hours",  "Per channel, per weekday, with timezone"],
      ["Templating",   "Custom message body with mustache variables"],
      ["Audit",        "Full delivery log with retry status"],
    ],
    shotPairs: [{ label: "Alert channel manager", src: "/screenshots/alert-channels.png" }],
    code: `alerts:
  - severity: "critical"
    channels:
      - slack: "#oncall"
      - pagerduty: "primary"
  - severity: "warn"
    channels:
      - discord: "#monitoring"
      - webhook: "https://hooks.acme.io/sysmos"`,
    codeLabel: "yaml · routing rules",
  },

  integrations: {
    slug: "integrations",
    iconKey: "Globe",
    badge: "Integrations",
    title: ["Connects to the tools", "your team already runs on."],
    lead:
      "Sysmos plugs straight into Slack, Discord, PagerDuty, email, and any HTTP endpoint via webhook. Same provider, multiple instances — fan out by team, severity or service.",
    metaPills: ["5 built-in", "Generic webhooks", "Per-team", "Per-severity"],
    heroShot: "/screenshots/alert-channels.png",
    heroChrome: "app.sysmos.io / integrations",
    benefits: [
      {
        iconKey: "Bell",
        title: "Notifications",
        meta: "Reach you",
        body: "Slack, Discord, PagerDuty and Email channels — connect each provider as many times as you need.",
      },
      {
        iconKey: "Layers",
        title: "Custom webhooks",
        meta: "Programmable",
        body: "Send any alert to any HTTP endpoint with full templating. Bridge into your internal incident tooling.",
      },
      {
        iconKey: "Server",
        title: "Server agent",
        meta: "Linux",
        body: "The eBPF agent installs in one command and streams metrics straight into your Sysmos workspace.",
      },
    ],
    spec: [
      ["Slack",       "Channel webhooks · OAuth · multiple workspaces"],
      ["Discord",     "Channel webhooks with embeds"],
      ["PagerDuty",   "Events API v2 · per-service routing"],
      ["Email",       "SMTP and managed (no infra required)"],
      ["Webhooks",    "Any HTTP endpoint · mustache templating · retries"],
      ["Linux agent", "x86_64 / arm64 · kernel 4.18+"],
    ],
    shotPairs: [{ label: "Connected channels", src: "/screenshots/alert-channels.png" }],
    integrationGrid: true,
  },
}
