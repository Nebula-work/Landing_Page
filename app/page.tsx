import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import SocialProofBar from "@/components/landing/SocialProofBar"
import ProductPillarsSection from "@/components/landing/ProductPillarsSection"
import ProductShowcaseSection from "@/components/landing/ProductShowcaseSection"
import ProblemSection from "@/components/landing/ProblemSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import HowItWorksSection from "@/components/landing/HowItWorksSection"
import OpenSourceSection from "@/components/landing/OpenSourceSection"
import IntegrationsSection from "@/components/landing/IntegrationsSection"
import ComparisonSection from "@/components/landing/ComparisonSection"
import TrustSection from "@/components/landing/TrustSection"
import UseCasesSection from "@/components/landing/UseCasesSection"
import FAQSection from "@/components/landing/FAQSection"
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
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProductPillarsSection />
        <ProductShowcaseSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <OpenSourceSection />
        <IntegrationsSection />
        <ComparisonSection />
        <TrustSection />
        <UseCasesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
