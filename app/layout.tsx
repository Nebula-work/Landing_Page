import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sysmos – Real-time Server Monitoring & Infrastructure Observability",
  description:
    "Sysmos provides real-time server monitoring, alerts, logs, and metrics to prevent downtime and keep your infrastructure reliable at scale.",
  keywords: [
    "server monitoring",
    "infrastructure monitoring",
    "devops monitoring",
    "real time monitoring",
    "cloud monitoring",
    "on-prem monitoring",
    "sysmos",
  ],
  authors: [{ name: "Sysmos" }],
  creator: "Sysmos",
  openGraph: {
    title: "Sysmos – Prevent Downtime with Real-Time Monitoring",
    description:
      "Gain full visibility into your servers, logs, and metrics. Detect issues before they impact users.",
    url: "https://sysmos.org",
    siteName: "Sysmos",
    images: [
      {
        url: "https://sysmos.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sysmos Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysmos – Real-Time Infrastructure Monitoring",
    description:
      "Prevent downtime and monitor servers, metrics, and logs in real time.",
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



