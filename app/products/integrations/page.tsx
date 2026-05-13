import type { Metadata } from "next"
import ProductPageShell from "@/components/landing/ProductPageShell"
import { PRODUCT_PAGES } from "@/content/products"

export const metadata: Metadata = {
  title: "Integrations — Sysmos",
  description:
    "Sysmos integrates with Slack, Discord, PagerDuty, email, and any HTTP endpoint via webhook — plus a Linux eBPF agent.",
}

export default function Page() {
  return <ProductPageShell page={PRODUCT_PAGES["integrations"]} />
}
