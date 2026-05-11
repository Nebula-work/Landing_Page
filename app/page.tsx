import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import TrustStrip from "@/components/landing/TrustStrip"
import ProductPillarsSection from "@/components/landing/ProductPillarsSection"
import HowItWorksSection from "@/components/landing/HowItWorksSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import IntegrationsSection from "@/components/landing/IntegrationsSection"
import PricingSection from "@/components/landing/PricingSection"
import CTASection from "@/components/landing/CTASection"
import Footer from "@/components/landing/Footer"

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sysmos",
    applicationCategory: "DevOpsTool",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Distributed API monitoring, visual API flow automation, and eBPF-powered server observability — unified in one platform.",
    featureList: [
      "Multi-region API monitoring",
      "Visual API flow builder",
      "eBPF server monitoring agent",
      "Real-time alerts via Slack, Discord, PagerDuty, Email, Webhooks",
      "SSL certificate monitoring",
      "Anomaly detection",
      "Team collaboration with RBAC",
    ],
  }

  return (
    <div className="min-h-screen bg-white text-[#0f1115]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProductPillarsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
