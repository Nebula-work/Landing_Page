import type { Metadata } from "next"
import ProductPageShell from "@/components/landing/ProductPageShell"
import { PRODUCT_PAGES } from "@/content/products"

export const metadata: Metadata = {
  title: "API Monitoring — Sysmos",
  description:
    "Synthetic API health checks from 12+ global regions with DNS/TCP/TLS/server timing breakdowns, body assertions, and SSL validation.",
}

export default function Page() {
  return <ProductPageShell page={PRODUCT_PAGES["api-monitoring"]} />
}
