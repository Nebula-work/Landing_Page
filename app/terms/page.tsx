import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-[#0f1115]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar />

      <main>
        {/* Page header */}
        <div className="border-b border-[var(--line)] bg-[#fafafb]">
          <div className="max-w-[1240px] mx-auto px-6 py-12 md:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-3)] hover:text-[var(--brand-deep)] transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] mb-3">
              Terms of Service
            </h1>
            <p className="text-[var(--ink-3)] text-base">Last updated: January 18, 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[760px] mx-auto px-6 py-14 space-y-10">

          {/* Beta Notice */}
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
            <h2 className="text-base font-semibold text-orange-800 mb-2">Beta Service Notice</h2>
            <p className="text-sm text-orange-700 mb-3">
              <strong>Sysmos is currently in beta development.</strong> By using this service, you acknowledge
              and agree to the following:
            </p>
            <ul className="text-sm text-orange-700 space-y-1.5 ml-4 list-disc list-inside">
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

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">1. Acceptance of Terms</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              By accessing or using Sysmos ("Service"), you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to these Terms, you may not use the Service. These Terms
              constitute a legally binding agreement between you and Sysmos.
            </p>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              If you are using the Service on behalf of an organization, you represent and warrant that you
              have authority to bind that organization to these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">2. Description of Service</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              Sysmos is a server monitoring platform that provides real-time visibility into your
              infrastructure, including servers, logs, metrics, and alerts. The Service includes:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Server performance monitoring and metrics collection</li>
              <li>Log aggregation and analysis</li>
              <li>Alerting and notification systems</li>
              <li>Dashboard and visualization tools</li>
              <li>API access for integrations</li>
              <li>Agent software for data collection</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">3. Account Registration</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              To use certain features of the Service, you must create an account. You agree to:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We reserve the right to suspend or terminate accounts that violate these Terms or for
              any other reason at our discretion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">4. Acceptable Use</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">You agree not to use the Service to:</p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
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

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">5. Your Data and Content</h2>

            <h3 className="text-base font-semibold text-[var(--ink-2)]">5.1 Ownership</h3>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              You retain ownership of all data, content, and configurations you submit to the Service
              ("Your Content"). We do not claim ownership of Your Content.
            </p>

            <h3 className="text-base font-semibold text-[var(--ink-2)]">5.2 License Grant</h3>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              By using the Service, you grant us a limited, non-exclusive license to access, process,
              and display Your Content solely to provide and improve the Service.
            </p>

            <h3 className="text-base font-semibold text-[var(--ink-2)]">5.3 Your Responsibilities</h3>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">You are responsible for:</p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Ensuring you have the right to submit Your Content</li>
              <li>Maintaining backups of Your Content</li>
              <li>Compliance with data protection laws regarding data you monitor</li>
              <li>Obtaining necessary consents for monitoring activities</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">6. Pricing and Payment</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              During our beta period, certain features may be available at no cost. Future pricing will
              be announced before general availability. For paid plans:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to modify pricing with 30 days' notice</li>
              <li>Failure to pay may result in service suspension</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">7. Intellectual Property</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              The Service, including its design, features, and content (excluding Your Content), is owned
              by Sysmos and protected by intellectual property laws. You may not copy, modify, distribute,
              or create derivative works without our express permission.
            </p>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              The Sysmos name, logo, and all related trademarks are our property. You may not use them
              without our prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">8. Third-Party Services</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              The Service may integrate with or link to third-party services (e.g., cloud providers,
              notification services). Your use of third-party services is subject to their respective
              terms and policies. We are not responsible for third-party services or their availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">9. Disclaimer of Warranties</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
              <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF THE SERVICE</li>
              <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
              <li>SECURITY OF DATA OR TRANSMISSIONS</li>
            </ul>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We do not warrant that the Service will meet your requirements or that any errors will be
              corrected. Use of the Service is at your own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">10. Limitation of Liability</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYSMOS AND ITS AFFILIATES, OFFICERS, EMPLOYEES,
              AND AGENTS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
              <li>LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL</li>
              <li>COST OF SUBSTITUTE SERVICES</li>
              <li>DAMAGES ARISING FROM SERVICE INTERRUPTION OR DATA LOSS</li>
              <li>DAMAGES EXCEEDING THE AMOUNT PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM</li>
            </ul>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              This limitation applies regardless of the legal theory and even if we have been advised of
              the possibility of such damages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">11. Indemnification</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              You agree to indemnify, defend, and hold harmless Sysmos and its affiliates from any claims,
              damages, losses, and expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your Content or data you submit to the Service</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">12. Service Modifications and Termination</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">We reserve the right to:</p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Modify, suspend, or discontinue the Service at any time</li>
              <li>Change features, functionality, or pricing</li>
              <li>Impose limits on certain features or access</li>
              <li>Terminate your account for violation of these Terms</li>
            </ul>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              You may terminate your account at any time by contacting support. Upon termination, your
              right to use the Service ceases, and we may delete Your Content after a reasonable period.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">13. Governing Law and Disputes</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              These Terms are governed by the laws of the jurisdiction in which Sysmos operates, without
              regard to conflict of law principles. Any disputes arising from these Terms or the Service
              shall be resolved through binding arbitration, except where prohibited by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">14. Changes to Terms</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We may update these Terms from time to time. We will notify you of material changes by
              posting the updated Terms and revising the "Last updated" date. Your continued use of the
              Service after changes take effect constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">15. General Provisions</h2>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li><strong className="text-[var(--ink-2)]">Entire Agreement:</strong> These Terms constitute the
                entire agreement between you and Sysmos regarding the Service.</li>
              <li><strong className="text-[var(--ink-2)]">Severability:</strong> If any provision is found
                unenforceable, the remaining provisions remain in effect.</li>
              <li><strong className="text-[var(--ink-2)]">Waiver:</strong> Failure to enforce any right does not
                waive that right.</li>
              <li><strong className="text-[var(--ink-2)]">Assignment:</strong> You may not assign your rights
                under these Terms without our consent.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">16. Contact Information</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-[15px]">
              <span className="text-[var(--ink-3)]">Email: </span>
              <a href="mailto:contact@sysmos.org" className="text-[var(--brand)] hover:text-[var(--brand-deep)] transition-colors">
                contact@sysmos.org
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
