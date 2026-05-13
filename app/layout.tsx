import type React from "react"
import type { Metadata } from "next"
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-display" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCBTH8LH');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} ${inter.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCBTH8LH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
