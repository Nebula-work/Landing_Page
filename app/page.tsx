"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
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
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background">
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
            <Button onClick={handleJoinWaitlist}>
              Join waitlist
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">


        {/* <section className="relative w-full min-h-screen flex items-start justify-start overflow-hidden bg-white">
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[132px] pt-[173px] pb-0">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-6 w-full max-w-[1192px]">
                  <h1 className="text-[84px] font-semibold leading-[89px] tracking-[-3.5px] text-center text-[#171717] w-full">
                    Create, inspect, and apply synthetic surveillance broadly.
                  </h1>
                  <p className="text-xl leading-[35px] text-center text-[#5F5F5F] w-full">
                    Start with a stunning homepage. Stay motivated without hurting your pocket.
                  </p>
                </div>
                <Button
                  className="bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white rounded-full px-7 py-3 text-base font-semibold shadow-[inset_0px_-1.5px_0px_0px_rgba(255,255,255,0.32),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.32)] hover:opacity-90"
                >
                  Start for free
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <span className="text-sm leading-[20px] text-[#A3A3A3]">Want to talk or get a live demo?</span>
                <Link href="#" className="text-sm leading-[20px] text-[#525252] hover:underline">
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
          
            <div className="absolute inset-0  overflow-hidden pointer-events-none">
           
            <div className="absolute left-7 top-[300px] w-[720.78px] h-[700.34px]">
              <Image
              src="/figma-assets/hero-gradient-right.svg"
              alt=""
              width={721}
              height={701}
              className="w-full h-full object-cover"
              priority
              />
            </div>
         
            <div className="absolute right-7 top-[300px] w-[720.78px] h-[700.34px]">
              <Image
              src="/figma-assets/hero-gradient-left.svg"
              alt=""
              width={721}
              height={701}
              className="w-full h-full object-cover"
              priority
              />
            </div>
            </div>

          
            <div className="absolute inset-0 pointer-events-none transform translate-y-[150px]">
            
            <div className="absolute left-[152px] top-[325px] w-[88px] h-[88px]">
              <Image
              src="/figma-assets/floating-image-1.png"
              alt=""
              width={88}
              height={88}
              className="w-full h-full object-cover rounded-full"
              />
            </div>
           
            <div className="absolute left-[942px] top-[561px] w-[88px] h-[72px]">
              <Image
              src="/figma-assets/floating-image-2.png"
              alt=""
              width={88}
              height={72}
              className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="absolute left-[296px] top-[485px] w-[88px] h-[88px]">
              <Image
              src="/figma-assets/floating-image-3.png"
              alt=""
              width={88}
              height={88}
              className="w-full h-full object-cover rounded-full"
              />
            </div>
           
            <div className="absolute left-[108px] top-[615px] w-[88px] h-[88px]">
              <Image
              src="/figma-assets/floating-image-4.png"
              alt=""
              width={88}
              height={88}
              className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="absolute left-[1100px] top-[586px] w-[88px] h-[88px]">
              <Image
              src="/figma-assets/floating-image-5.png"
              alt=""
              width={88}
              height={88}
              className="w-full h-full object-cover rounded-full"
              />
            </div>
         
            <div className="absolute left-[1180px] top-[400px] w-[88px] h-[88px]">
              <Image
              src="/figma-assets/floating-image-6.png"
              alt=""
              width={88}
              height={88}
              className="w-full h-full object-cover rounded-full"
              />
            </div>
            </div>

          
          <div className="absolute left-1/2 top-[700px] transform -translate-x-1/2 z-10 pointer-events-auto cursor-pointer">
            <div className="w-[94px] h-[93px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[24px] p-2 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/figma-assets/play-button.svg"
                  alt="Play"
                  width={60}
                  height={60}
                  className="ml-1"
                />
              </div>
            </div>
          </div>

          

        </section> */}

        {/* Hero Section */}
        <section className="relative w-full min-h-[auto] md:min-h-[90vh] flex flex-col items-center justify-start overflow-hidden bg-white selection:bg-orange-100 pt-16 md:pt-20 lg:pt-28 pb-12 md:pb-0">

          {/* 1. Main Text Content & CTA */}
          <div className="relative z-10 w-full max-w-5xl px-4 md:px-6 flex flex-col items-start md:items-center gap-6 md:gap-8 mb-4">
            <div className="space-y-6 text-left md:text-center lg:w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#171717] w-full md:max-w-[90%] md:mx-auto">
                Real-time server monitoring that prevents downtime
                <br className="hidden md:block" />
                and keeps your infrastructure reliable at scale.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#5F5F5F] max-w-2xl mx-0 md:mx-auto">
                Gain full visibility into your servers, logs, and metrics. Prevent downtime before it impacts your users.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-center gap-6">
              <Button
                onClick={handleJoinWaitlist}
                className="h-12 px-8 text-base md:h-14 md:px-10 md:text-lg bg-gradient-to-br from-[#FB432C] to-[#FF591E] text-white rounded-full font-semibold shadow-[0_10px_20px_rgba(251,67,44,0.2),inset_0px_-1.5px_0px_0px_rgba(255,255,255,0.32)] hover:scale-105 transition-transform"
              >
                Join waitlist
              </Button>

              {/* Desktop: Want to talk text */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-[#A3A3A3]">Want to talk or get a live demo?</span>
                <Link href="#" className="text-sm font-medium text-[#525252] hover:text-[#FB432C] transition-colors flex items-center gap-1">
                  Get in touch <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Visualization Area (Gradients + Icons + Play Button) */}
          <div className="relative w-full max-w-[1440px] flex items-center justify-center mt-6 md:mt-12">

            {/* Background Gradients - Centered in this wrapper */}
            {/* Mobile Version (Swapped Sources) */}
            <div className="absolute left-0 right-0 bottom-0 top-[-70%] flex md:hidden items-center justify-center pointer-events-none select-none">
              <div className="absolute left-[50%] w-[100%] h-full opacity-60 mix-blend-multiply flex items-center justify-end">
                <Image
                  src="/figma-assets/hero-gradient-left.svg"
                  alt=""
                  width={721}
                  height={701}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="absolute right-[50%] w-[100%] h-full opacity-60 mix-blend-multiply flex items-center justify-start">
                <Image
                  src="/figma-assets/hero-gradient-right.svg"
                  alt=""
                  width={721}
                  height={701}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Desktop Version (Original Sources) */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none select-none">
              <div className="absolute left-[-10%] w-[60%] h-full opacity-60 mix-blend-multiply flex items-center justify-end">
                <Image
                  src="/figma-assets/hero-gradient-right.svg"
                  alt=""
                  width={721}
                  height={701}
                  className="w-full h-auto object-contain md:translate-y-[-10%]"
                  priority
                />
              </div>
              <div className="absolute right-[-10%] w-[60%] h-full opacity-60 mix-blend-multiply flex items-center justify-start">
                <Image
                  src="/figma-assets/hero-gradient-left.svg"
                  alt=""
                  width={721}
                  height={701}
                  className="w-full h-auto object-contain md:translate-y-[-10%]"
                  priority
                />
              </div>
            </div>

            {/* Floating Decorative Images - Positioned relative to the Play Button Center */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left Group */}
              <div className="absolute left-[5%] top-[20%] md:left-[10%] md:top-[10%] animate-bounce [animation-duration:3s]">
                <Image src="/figma-assets/floating-image-1.png" alt="" width={88} height={88} className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[88px] lg:h-[88px]" />
              </div>
              <div className="absolute left-[15%] top-[50%] md:left-[20%] md:top-[45%] animate-bounce [animation-duration:4s]">
                <Image src="/figma-assets/floating-image-3.png" alt="" width={88} height={88} className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[88px] lg:h-[88px]" />
              </div>
              <div className="absolute left-[0%] top-[70%] md:left-[8%] md:top-[75%] animate-bounce [animation-duration:5s]">
                <Image src="/figma-assets/floating-image-4.png" alt="" width={88} height={88} className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[88px] lg:h-[88px]" />
              </div>

              {/* Right Group */}
              <div className="absolute right-[5%] top-[25%] md:right-[15%] md:top-[10%] animate-bounce [animation-duration:3.5s]">
                <Image src="/figma-assets/floating-image-6.png" alt="" width={88} height={88} className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[88px] lg:h-[88px]" />
              </div>
              <div className="absolute right-[15%] top-[55%] md:right-[22%] md:top-[50%] animate-bounce [animation-duration:4.5s]">
                <Image src="/figma-assets/floating-image-2.png" alt="" width={88} height={72} className="w-[32px] h-[26px] md:w-[64px] md:h-[50px] lg:w-[88px] lg:h-[72px]" />
              </div>
              <div className="absolute right-[2%] top-[80%] md:right-[10%] md:top-[75%] animate-bounce [animation-duration:5.5s]">
                <Image src="/figma-assets/floating-image-5.png" alt="" width={88} height={88} className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] lg:w-[88px] lg:h-[88px]" />
              </div>
            </div>

            {/* Play Button - The Visual Center */}
            <div className="relative z-20 py-8 md:py-24 lg:py-2">
              <button className="group relative w-16 h-16 md:w-20 md:h-20 lg:w-[94px] lg:h-[93px] translate-y-3 lg:translate-y-[45px] bg-gradient-to-br from-[#FB432C] to-[#FF591E] rounded-[20px] md:rounded-[24px] flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95">
                <div className="w-10 h-10 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-white rounded-full flex items-center justify-center shadow-inner group-hover:bg-gray-50 transition-colors">
                  <Image
                    src="/figma-assets/play-button.svg"
                    alt="Play"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px] ml-1"
                  />
                </div>
                <span className="absolute inset-0 rounded-[24px] bg-orange-500/20 animate-ping -z-10 group-hover:animate-none" />
              </button>
            </div>
          </div>

          {/* Mobile: Want to talk text (Positioned at bottom) */}
          <div className="flex md:hidden items-center gap-2 mt-4 relative z-20">
            <span className="text-sm text-[#A3A3A3]">Want to talk or get a live demo?</span>
            <Link href="#" className="text-sm font-medium text-[#525252] hover:text-[#FB432C] transition-colors flex items-center gap-1">
              Get in touch <span>→</span>
            </Link>
          </div>

        </section>

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Complete Infrastructure Monitoring for Modern Teams
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-xl">
                    Sysmos gives you real-time visibility into your entire infrastructure. Track performance, get
                    alerts, and resolve issues before they impact your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={handleJoinWaitlist}>
                    Join waitlist
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#demo">Watch Demo</Link>
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Dashboard Preview"
                    width={1200}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="text-xl font-medium">Trusted by leading companies worldwide</div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company ${i} logo`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything you need to monitor your infrastructure
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Sysmos provides comprehensive monitoring tools to keep your systems running smoothly.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Server className="h-10 w-10" />}
                title="Real-time Monitoring"
                description="Track CPU, memory, disk, and network metrics in real-time across all your servers."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10" />}
                title="Intelligent Alerting"
                description="Get notified about issues before they affect your users with customizable alert thresholds."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Fast Deployment"
                description="Set up in minutes with our lightweight agent that works across all major operating systems."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18.4 9.6a9 9 0 1 1 -4.8 4.8" />
                  </svg>
                }
                title="Advanced Analytics"
                description="Visualize performance trends and identify bottlenecks with powerful dashboards and reports."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9" />
                    <path d="M12 3v9l9 0" />
                  </svg>
                }
                title="Historical Data"
                description="Access historical performance data to track trends and plan capacity upgrades."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                title="Team Collaboration"
                description="Collaborate with your team using role-based access control and shared dashboards."
              />
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="w-full py-16 md:py-24 bg-white border-y border-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-600">Integrations</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Works with your favorite tools
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Connect Sysmos with your existing stack in seconds.
              </p>
            </div>
            <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Integration Icons (Using Lucide for simplicity) */}
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <Cloud className="w-10 h-10 text-gray-600 group-hover:text-blue-500" />
                </div>
                <span className="font-medium text-gray-600">AWS</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <Cloud className="w-10 h-10 text-gray-600 group-hover:text-sky-500" />
                </div>
                <span className="font-medium text-gray-600">Azure</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-gray-600 group-hover:text-blue-600"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
                </div>
                <span className="font-medium text-gray-600">Docker</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-orange-50 transition-colors">
                  <Workflow className="w-10 h-10 text-gray-600 group-hover:text-orange-500" />
                </div>
                <span className="font-medium text-gray-600">Kubernetes</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-green-50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-gray-600 group-hover:text-green-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                </div>
                <span className="font-medium text-gray-600">Terraform</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-purple-50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-gray-600 group-hover:text-purple-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </div>
                <span className="font-medium text-gray-600">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple setup, powerful monitoring
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get started in minutes and gain immediate visibility into your infrastructure.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <StepCard
                number="1"
                title="Install the Agent"
                description="Deploy our lightweight agent on your servers with a single command."
              />
              <StepCard
                number="2"
                title="Configure Monitoring"
                description="Set up monitoring for your services and customize alert thresholds."
              />
              <StepCard
                number="3"
                title="Get Insights"
                description="Access real-time dashboards and receive alerts when issues arise."
              />
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Dashboard Demo"
                  width={1200}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm">
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
                      className="mr-2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
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
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Testimonials</div>
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
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to take control of your infrastructure?
              </h2>
              <p className="max-w-[700px] md:text-xl">Join our waitlist to be notified when we launch.</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" onClick={handleJoinWaitlist}>
                  Join waitlist
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#demo" className={"text-white"}>Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
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
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
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

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 rounded-full bg-orange-50 p-4 text-orange-600 ring-1 ring-orange-100">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
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


function TestimonialCard({ quote, author, role, avatar }) {
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
