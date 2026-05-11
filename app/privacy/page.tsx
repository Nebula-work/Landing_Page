import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-[var(--ink-3)] text-base">Last updated: January 18, 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[760px] mx-auto px-6 py-14 space-y-10">

          {/* Beta Notice */}
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
            <h2 className="text-base font-semibold text-orange-800 mb-2">Development Preview Notice</h2>
            <p className="text-sm text-orange-700">
              Sysmos is currently in active development and beta testing. During this period, data may be lost,
              modified, or deleted without prior notice. We strongly recommend not relying solely on Sysmos
              for critical monitoring needs until the service reaches general availability. By using this
              service, you acknowledge and accept these limitations.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">1. Introduction</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              Welcome to Sysmos ("we," "our," or "us"). We are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our server monitoring platform and
              related services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">2. Information We Collect</h2>

            <h3 className="text-base font-semibold text-[var(--ink-2)]">2.1 Account Information</h3>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">When you create an account, we collect:</p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Name and email address</li>
              <li>Organization or company name (if applicable)</li>
              <li>Account credentials (passwords are encrypted)</li>
              <li>Billing information (processed securely through our payment providers)</li>
            </ul>

            <h3 className="text-base font-semibold text-[var(--ink-2)]">2.2 Server and Infrastructure Data</h3>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">To provide our monitoring services, we collect:</p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Server metrics (CPU, memory, disk usage, network statistics)</li>
              <li>Application logs and error reports</li>
              <li>System configuration information</li>
              <li>IP addresses and hostnames of monitored servers</li>
              <li>Custom metrics and alerts you configure</li>
            </ul>

            <h3 className="text-base font-semibold text-[var(--ink-2)]">2.3 Usage Data</h3>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We automatically collect information about how you interact with our platform, including:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Browser type and version</li>
              <li>Pages visited and features used</li>
              <li>Time spent on the platform</li>
              <li>Referring URLs and navigation patterns</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">3. How We Use Your Information</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">We use the collected information to:</p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Provide, maintain, and improve our monitoring services</li>
              <li>Send alerts and notifications about your infrastructure</li>
              <li>Process transactions and send billing information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Detect and prevent security threats and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">4. Data Storage and Security</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure data centers with physical security measures</li>
            </ul>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              <strong className="text-[var(--ink-2)]">Development Phase Notice:</strong> During our beta period,
              data retention policies may change, and historical data may be purged as we iterate on our
              infrastructure. We recommend maintaining your own backups of critical configuration data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">5. Data Sharing and Disclosure</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Service providers who assist in operating our platform (hosting, analytics, payment processing)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your explicit consent</li>
              <li>Successor entities in case of merger, acquisition, or asset sale</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">6. Your Rights and Choices</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              Depending on your location, you may have the right to:
            </p>
            <ul className="text-[var(--ink-3)] text-[15px] space-y-1.5 ml-4 list-disc list-inside">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability (receive your data in a structured format)</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:contact@sysmos.org" className="text-[var(--brand)] hover:text-[var(--brand-deep)] transition-colors">
                contact@sysmos.org
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">7. Cookies and Tracking</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We use cookies and similar technologies to enhance your experience, remember your preferences,
              and analyze platform usage. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">8. Data Retention</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We retain your data for as long as your account is active or as needed to provide services.
              Monitoring data retention periods vary by subscription plan. Upon account deletion, we will
              remove your personal data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">9. International Data Transfers</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              Your data may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place to protect your data in accordance with applicable laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">10. Children's Privacy</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              Sysmos is not intended for users under 18 years of age. We do not knowingly collect personal
              information from children. If you believe we have collected data from a minor, please contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">11. Changes to This Policy</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              We may update this Privacy Policy from time to time. We will notify you of significant changes
              by posting the new policy on this page and updating the "Last updated" date. Your continued use
              of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--ink)]">12. Contact Us</h2>
            <p className="text-[var(--ink-3)] leading-relaxed text-[15px]">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
