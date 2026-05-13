import type { Metadata } from "next"
import ProductPageShell from "@/components/landing/ProductPageShell"
import { PRODUCT_PAGES } from "@/content/products"

export const metadata: Metadata = {
  title: "Flow Builder — Sysmos",
  description:
    "Multi-step API flow testing on a visual canvas. Extract variables across steps, assert per request, run on a schedule.",
}

export default function Page() {
  return <ProductPageShell page={PRODUCT_PAGES["flow-builder"]} />
}
