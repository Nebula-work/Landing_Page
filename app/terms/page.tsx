"use client"

import Link from "next/link"
import { Server, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
         <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl h-14 flex items-center px-6 gap-4">
      <Link href="/" className="flex items-center gap-2 font-bold text-base">
        <Server className="h-6 w-6" />
            <span>Sysmos</span>
      </Link>
      <div className="ml-auto">
        <Button size="sm" variant="outline" asChild>
          <Link href="/">
            <ArrowLeft size={14} className="mr-1" /> Back
          </Link>
        </Button>
      </div>
    </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="container max-w-4xl px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 18, 2026</p>
            </div>

            {/* Beta Notice */}
            <div className="rounded-lg border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/50 p-6">
              <h2 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                ⚠️ Beta Service Notice
              </h2>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                <strong>Sysmos is currently in beta development.</strong> By using this service, you acknowledge 
                and agree to the following:
              </p>
              <ul className="list-disc list-inside text-orange-700 dark:text-orange-300 space-y-2 ml-2">
                <li><strong>Data Loss Risk:</strong> Your data, configurations, and monitoring history may be lost, 
                corrupted, or deleted at any time without prior notice.</li>
                <li><strong>Service Interruptions:</strong> The service may experience downtime, outages, or 
                degraded performance during development and updates.</li>
                <li><strong>Feature Changes:</strong> Features may be added, modified, or removed without 
                advance notice.</li>
                <li><strong>No SLA Guarantees:</strong> During beta, we do not provide service level agreements 
                or uptime guarantees.</li>
                <li><strong>Not for Production Critical Use:</strong> Do not rely on Sysmos as your sole 
                monitoring solution for mission-critical infrastructure.</li>
              </ul>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Sysmos ("Service"), you agree to be bound by these Terms of Service 
                ("Terms"). If you do not agree to these Terms, you may not use the Service. These Terms 
                constitute a legally binding agreement between you and Sysmos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you are using the Service on behalf of an organization, you represent and warrant that you 
                have authority to bind that organization to these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sysmos is a server monitoring platform that provides real-time visibility into your 
                infrastructure, including servers, logs, metrics, and alerts. The Service includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Server performance monitoring and metrics collection</li>
                <li>Log aggregation and analysis</li>
                <li>Alerting and notification systems</li>
                <li>Dashboard and visualization tools</li>
                <li>API access for integrations</li>
                <li>Agent software for data collection</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use certain features of the Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or for 
                any other reason at our discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Collect or harvest user data without consent</li>
                <li>Use the Service for illegal monitoring or surveillance activities</li>
                <li>Resell or redistribute the Service without authorization</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Use automated systems to excessively burden the Service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Your Data and Content</h2>
              
              <h3 className="text-xl font-medium text-foreground">5.1 Ownership</h3>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of all data, content, and configurations you submit to the Service 
                ("Your Content"). We do not claim ownership of Your Content.
              </p>

              <h3 className="text-xl font-medium text-foreground">5.2 License Grant</h3>
              <p className="text-muted-foreground leading-relaxed">
                By using the Service, you grant us a limited, non-exclusive license to access, process, 
                and display Your Content solely to provide and improve the Service.
              </p>

              <h3 className="text-xl font-medium text-foreground">5.3 Your Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Ensuring you have the right to submit Your Content</li>
                <li>Maintaining backups of Your Content</li>
                <li>Compliance with data protection laws regarding data you monitor</li>
                <li>Obtaining necessary consents for monitoring activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                During our beta period, certain features may be available at no cost. Future pricing will 
                be announced before general availability. For paid plans:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to modify pricing with 30 days' notice</li>
                <li>Failure to pay may result in service suspension</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service, including its design, features, and content (excluding Your Content), is owned 
                by Sysmos and protected by intellectual property laws. You may not copy, modify, distribute, 
                or create derivative works without our express permission.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Sysmos name, logo, and all related trademarks are our property. You may not use them 
                without our prior written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service may integrate with or link to third-party services (e.g., cloud providers, 
                notification services). Your use of third-party services is subject to their respective 
                terms and policies. We are not responsible for third-party services or their availability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, 
                INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF THE SERVICE</li>
                <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                <li>SECURITY OF DATA OR TRANSMISSIONS</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not warrant that the Service will meet your requirements or that any errors will be 
                corrected. Use of the Service is at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYSMOS AND ITS AFFILIATES, OFFICERS, EMPLOYEES, 
                AND AGENTS SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL</li>
                <li>COST OF SUBSTITUTE SERVICES</li>
                <li>DAMAGES ARISING FROM SERVICE INTERRUPTION OR DATA LOSS</li>
                <li>DAMAGES EXCEEDING THE AMOUNT PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This limitation applies regardless of the legal theory and even if we have been advised of 
                the possibility of such damages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Sysmos and its affiliates from any claims, 
                damages, losses, and expenses (including reasonable legal fees) arising from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your Content or data you submit to the Service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Service Modifications and Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify, suspend, or discontinue the Service at any time</li>
                <li>Change features, functionality, or pricing</li>
                <li>Impose limits on certain features or access</li>
                <li>Terminate your account for violation of these Terms</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may terminate your account at any time by contacting support. Upon termination, your 
                right to use the Service ceases, and we may delete Your Content after a reasonable period.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Governing Law and Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the jurisdiction in which Sysmos operates, without 
                regard to conflict of law principles. Any disputes arising from these Terms or the Service 
                shall be resolved through binding arbitration, except where prohibited by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">14. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. We will notify you of material changes by 
                posting the updated Terms and revising the "Last updated" date. Your continued use of the 
                Service after changes take effect constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">15. General Provisions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Entire Agreement:</strong> These Terms constitute the 
                entire agreement between you and Sysmos regarding the Service.</li>
                <li><strong className="text-foreground">Severability:</strong> If any provision is found 
                unenforceable, the remaining provisions remain in effect.</li>
                <li><strong className="text-foreground">Waiver:</strong> Failure to enforce any right does not 
                waive that right.</li>
                <li><strong className="text-foreground">Assignment:</strong> You may not assign your rights 
                under these Terms without our consent.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
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
