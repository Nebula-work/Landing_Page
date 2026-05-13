import type { Metadata } from "next"
import ProductPageShell from "@/components/landing/ProductPageShell"
import { PRODUCT_PAGES } from "@/content/products"

export const metadata: Metadata = {
  title: "Server Observability — Sysmos",
  description:
    "Kernel-level Linux observability powered by an eBPF agent — under 2% CPU overhead, 30MB RSS, one-command install.",
}

export default function Page() {
  return <ProductPageShell page={PRODUCT_PAGES["server-observability"]} />
}
