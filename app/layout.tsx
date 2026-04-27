import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sysmos — API Monitoring, Flow Automation & Server Observability",
  description:
    "Distributed API monitoring from multiple regions, visual API flow builder for workflow automation, and eBPF-powered server observability agent — all in one platform.",
  keywords: [
    "api monitoring",
    "api flow builder",
    "workflow automation",
    "server monitoring",
    "ebpf monitoring",
    "infrastructure observability",
    "ssl monitoring",
    "uptime monitoring",
    "server agent",
    "devops",
    "sysmos",
  ],
  authors: [{ name: "Sysmos" }],
  creator: "Sysmos",
  openGraph: {
    title: "Sysmos — API Monitoring, Flow Automation & Server Observability",
    description:
      "Monitor APIs from multiple regions, automate API workflows visually, and observe server infrastructure with eBPF — unified in one platform.",
    url: "https://sysmos.org",
    siteName: "Sysmos",
    images: [
      {
        url: "https://sysmos.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sysmos Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysmos — API Monitoring, Flow Automation & Server Observability",
    description:
      "Distributed API monitoring, visual flow builder, and eBPF server agent — one platform for full observability.",
    images: ["https://sysmos.org/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://sysmos.org"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
