import type { Metadata } from "next"
import ProductPageShell from "@/components/landing/ProductPageShell"
import { PRODUCT_PAGES } from "@/content/products"

export const metadata: Metadata = {
  title: "Alerting — Sysmos",
  description:
    "Route alerts to Slack, Discord, PagerDuty, email, or any HTTP webhook — with severity routing, quiet hours, and dedup.",
}

export default function Page() {
  return <ProductPageShell page={PRODUCT_PAGES["alerting"]} />
}
