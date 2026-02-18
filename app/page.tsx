"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, ReactNode } from "react"
import { Check, Server, Shield, Zap, Cloud, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import HeroSection from "@/components/landing/HeroSection"
import ProblemSection from "@/components/landing/ProblemSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import HowItWorksSection from "@/components/landing/HowItWorksSection"
import IntegrationsSection from "@/components/landing/IntegrationsSection"
import CTASection from "@/components/landing/CTASection"

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Waitlist submission:", { name, email })
    // You can add API call here
    setIsWaitlistOpen(false)
    setName("")
    setEmail("")
  }

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
      "Real-time server monitoring that prevents downtime and keeps your infrastructure reliable at scale.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1024",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky items-center flex top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-7xl flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Server className="h-6 w-6" />
            <span>Sysmos</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild>
              <Link href="https://app.sysmos.org/" target="blank">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection/>

       <ProblemSection/>

       <FeaturesSection/>
       <HowItWorksSection/>
       <IntegrationsSection/>

        {/* Pricing Section */}
        <section id="pricing" className="mx-auto max-w-7xl px-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <PricingSkeletonCard />
              <PricingSkeletonCard highlighted />
              <PricingSkeletonCard />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mx-auto max-w-7xl px-10 mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by teams worldwide</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See what our customers have to say about Sysmos.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Sysmos has completely transformed how we manage our infrastructure. We can identify and fix issues before they impact our customers."
                author="Sarah Johnson"
                role="CTO, TechCorp"
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The real-time alerts have saved us countless hours of downtime. The setup was incredibly easy and the interface is intuitive."
                author="Michael Chen"
                role="DevOps Lead, Startup Inc."
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="As our infrastructure grew, we needed a solution that could scale with us. Sysmos has been the perfect fit for our enterprise needs."
                author="Emily Rodriguez"
                role="Infrastructure Manager, Enterprise Co."
                avatar="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mx-auto max-w-7xl px-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently asked questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about Sysmos.
              </p>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does Sysmos work?</AccordionTrigger>
                  <AccordionContent>
                    Sysmos works by installing a lightweight agent on your servers. This agent collects performance
                    metrics and sends them to our secure cloud platform, where you can view dashboards, set up alerts,
                    and analyze trends.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 14-day free trial for all plans. No credit card is required to get started.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What operating systems are supported?</AccordionTrigger>
                  <AccordionContent>
                    Sysmos supports all major operating systems including Linux (Ubuntu, CentOS, Debian, etc.),
                    Windows Server, and macOS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How secure is my data?</AccordionTrigger>
                  <AccordionContent>
                    Security is our top priority. All data is encrypted in transit and at rest. We use industry-standard
                    security practices and regularly undergo security audits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I integrate Sysmos with other tools?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Sysmos offers integrations with popular tools like Slack, PagerDuty, and more. We also
                    provide a comprehensive API for custom integrations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How does billing work?</AccordionTrigger>
                  <AccordionContent>
                    We offer monthly and annual billing options. Annual plans come with a 20% discount. You can upgrade
                    or downgrade your plan at any time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection/>
      </main>

      <footer className="w-full flex items-center justify-center border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Server className="h-6 w-6" />
                <span>Sysmos</span>
              </div>
              <p className="text-sm text-muted-foreground">Complete infrastructure monitoring for modern teams.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Product</div>
              <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Integrations
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Changelog
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Resources</div>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Documentation
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                API Reference
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Blog
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Community
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Company</div>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Partners
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Legal</div>
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                GDPR
              </Link>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sysmos. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6h-4z" />
                  <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  <path d="M16.5 7.5v.001" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69c-2.67.6-3.22-1.29-3.22-1.29-.44-1.11-1.08-1.4-1.08-1.4-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.28 1.05 2.83.8.09-.65.35-1.09.63-1.34-2.2-.25-4.51-1.11-4.51-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5A10 10 0 0 0 12 2z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Be among the first to experience Sysmos. We'll notify you when we launch.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsWaitlistOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Join Waitlist</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 rounded-full bg-orange-50 p-4 text-orange-600 ring-1 ring-orange-100">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

interface StepCardProps {
  number: string
  title: string
  description: string
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed max-w-sm">{description}</p>
    </div>
  )
}

function PricingCard({ title, price, description, features, buttonText, highlighted = false, onButtonClick }: { title: string; price: string; description: string; features: string[]; buttonText: string; highlighted?: boolean; onButtonClick?: () => void }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${highlighted ? "bg-gray-900 text-white shadow-2xl scale-105 z-10 ring-1 ring-gray-900 animate-breathing-highlighted" : "bg-white border border-gray-200 hover:shadow-xl hover:border-gray-300 animate-breathing"}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className={`text-xl font-bold ${highlighted ? "text-gray-100" : "text-gray-900"}`}>{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className={`ml-2 text-sm ${highlighted ? "text-gray-400" : "text-gray-500"}`}>/month</span>
        </div>
        <p className={`mt-4 text-sm ${highlighted ? "text-gray-300" : "text-gray-500"}`}>{description}</p>
      </div>
      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`mr-3 h-5 w-5 ${highlighted ? "text-orange-500" : "text-green-500"}`} />
            <span className={highlighted ? "text-gray-200" : "text-gray-600"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        onClick={onButtonClick || undefined}
        className={`w-full h-12 rounded-xl font-semibold text-base transition-all ${highlighted ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}`}
      >
        {buttonText}
      </Button>
    </div>
  )
}

function PricingSkeletonCard({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all
      ${highlighted
          ? "bg-gray-900 text-white shadow-2xl scale-105 z-10 ring-1 ring-gray-900 animate-breathing-highlighted"
          : "bg-white border border-gray-200 animate-breathing"
        }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          Coming Soon
        </div>
      )}

      {/* Title */}
      <div className="mb-6">
        <div className={`h-5 w-24 rounded bg-gray-300 ${highlighted && "bg-gray-700"}`} />

        {/* Price */}
        <div className="mt-4 flex items-baseline space-x-2">
          <div className={`h-10 w-20 rounded bg-gray-300 ${highlighted && "bg-gray-700"}`} />
          <div className={`h-4 w-12 rounded bg-gray-200 ${highlighted && "bg-gray-600"}`} />
        </div>

        {/* Description */}
        <div className={`mt-4 h-4 w-full rounded bg-gray-200 ${highlighted && "bg-gray-700"}`} />
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-4">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="flex items-center space-x-3">
            <div className={`h-5 w-5 rounded-full bg-gray-300 ${highlighted && "bg-gray-600"}`} />
            <div className={`h-4 w-full rounded bg-gray-200 ${highlighted && "bg-gray-700"}`} />
          </li>
        ))}
      </ul>

      {/* Button */}
      <div
        className={`h-12 w-full rounded-xl
        ${highlighted ? "bg-gray-700" : "bg-gray-300"}`}
      />
    </div>
  )
}


interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-lg border bg-background p-6">
      <div className="mb-4 text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 opacity-50"
        >
          <path d="M11.3 3.3c-3.8 0-6.9 3.1-6.9 6.9 0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9zm0 13.1c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2 0 3.4-2.8 6.2-6.2 6.2z" />
          <path d="M7.9 7.7c-.1.2-.1.4-.1.6 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.3-.1-.6-.3-.8-.3-.3-.7-.4-1.1-.3-.3.1-.6.3-.7.5zM12.7 7.7c-.1.2-.1.4-.1.6 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.3-.1-.6-.3-.8-.3-.3-.7-.4-1.1-.3-.3.1-.6.3-.7.5z" />
          <path d="M9.5 10.3c-.5 0-.8.4-.8.8 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7c0-.4-.3-.8-.8-.8s-.8.4-.8.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.4-.3-.8-.8-.8z" />
        </svg>
      </div>
      <p className="mb-4 flex-1">{quote}</p>
      <div className="flex items-center">
        <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <Image src={avatar || "/placeholder.svg"} alt={author} width={40} height={40} className="object-cover" />
        </div>
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  )
}
