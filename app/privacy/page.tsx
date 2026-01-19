"use client"

import Link from "next/link"
import { Server, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-7xl flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Server className="h-6 w-6" />
            <span>Sysmos</span>
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <div className="container max-w-4xl px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 18, 2026</p>
            </div>

            {/* Beta Notice */}
            <div className="rounded-lg border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/50 p-6">
              <h2 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                ⚠️ Development Preview Notice
              </h2>
              <p className="text-orange-700 dark:text-orange-300">
                Sysmos is currently in active development and beta testing. During this period, data may be lost, 
                modified, or deleted without prior notice. We strongly recommend not relying solely on Sysmos 
                for critical monitoring needs until the service reaches general availability. By using this 
                service, you acknowledge and accept these limitations.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Sysmos ("we," "our," or "us"). We are committed to protecting your privacy and 
                ensuring the security of your personal information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our server monitoring platform and 
                related services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-foreground">2.1 Account Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name and email address</li>
                <li>Organization or company name (if applicable)</li>
                <li>Account credentials (passwords are encrypted)</li>
                <li>Billing information (processed securely through our payment providers)</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground">2.2 Server and Infrastructure Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide our monitoring services, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Server metrics (CPU, memory, disk usage, network statistics)</li>
                <li>Application logs and error reports</li>
                <li>System configuration information</li>
                <li>IP addresses and hostnames of monitored servers</li>
                <li>Custom metrics and alerts you configure</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground">2.3 Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect information about how you interact with our platform, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>Pages visited and features used</li>
                <li>Time spent on the platform</li>
                <li>Referring URLs and navigation patterns</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our monitoring services</li>
                <li>Send alerts and notifications about your infrastructure</li>
                <li>Process transactions and send billing information</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and prevent security threats and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Data Storage and Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Development Phase Notice:</strong> During our beta period, 
                data retention policies may change, and historical data may be purged as we iterate on our 
                infrastructure. We recommend maintaining your own backups of critical configuration data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Service providers who assist in operating our platform (hosting, analytics, payment processing)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your explicit consent</li>
                <li>Successor entities in case of merger, acquisition, or asset sale</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@sysmos.org.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience, remember your preferences, 
                and analyze platform usage. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide services. 
                Monitoring data retention periods vary by subscription plan. Upon account deletion, we will 
                remove your personal data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data may be transferred to and processed in countries other than your own. We ensure 
                appropriate safeguards are in place to protect your data in accordance with applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sysmos is not intended for users under 18 years of age. We do not knowingly collect personal 
                information from children. If you believe we have collected data from a minor, please contact us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes 
                by posting the new policy on this page and updating the "Last updated" date. Your continued use 
                of the service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="text-muted-foreground mt-2 flex flex-row gap-2">
                <p>Email:</p>
                <a href="mailto:contact@sysmos.org" className="text-blue-600"> contact@sysmos.org</a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Sysmos. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
