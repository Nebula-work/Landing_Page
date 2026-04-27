import Link from "next/link";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const Footer = () => (
  <footer className="w-full border-t bg-background py-10 md:py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              S
            </span>
            <span>Sysmos</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            API monitoring, flow automation, and server observability for modern teams.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col gap-2">
            <div className="font-medium text-sm">{category}</div>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sysmos. All rights reserved.
        </div>
        <div className="flex gap-4">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={s.label}
            >
              <s.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
