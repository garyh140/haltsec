import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  ChevronDown,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Network,
  Phone,
  Shield,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Inline SVGs ─────────────────────────────────────────────────────────────

function HexGridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hex"
          x="0"
          y="0"
          width="60"
          height="52"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="30,2 56,16 56,36 30,50 4,36 4,16"
            fill="none"
            stroke="oklch(var(--primary))"
            strokeWidth="0.8"
          />
        </pattern>
        <pattern
          id="grid"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="oklch(var(--primary))"
            strokeWidth="0.4"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4" />
    </svg>
  );
}

function ShieldSvg() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <path
        d="M24 4L8 10v14c0 9.4 6.8 18.2 16 20 9.2-1.8 16-10.6 16-20V10L24 4z"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        fill="oklch(var(--primary)/0.1)"
      />
      <path
        d="M17 24l5 5 9-9"
        stroke="oklch(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkSvg() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="4" fill="oklch(var(--primary))" />
      <circle
        cx="8"
        cy="12"
        r="3"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        fill="oklch(var(--primary)/0.1)"
      />
      <circle
        cx="40"
        cy="12"
        r="3"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        fill="oklch(var(--primary)/0.1)"
      />
      <circle
        cx="8"
        cy="36"
        r="3"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        fill="oklch(var(--primary)/0.1)"
      />
      <circle
        cx="40"
        cy="36"
        r="3"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        fill="oklch(var(--primary)/0.1)"
      />
      <line
        x1="11"
        y1="14"
        x2="21"
        y2="22"
        stroke="oklch(var(--primary)/0.6)"
        strokeWidth="1.5"
      />
      <line
        x1="37"
        y1="14"
        x2="27"
        y2="22"
        stroke="oklch(var(--primary)/0.6)"
        strokeWidth="1.5"
      />
      <line
        x1="11"
        y1="34"
        x2="21"
        y2="26"
        stroke="oklch(var(--primary)/0.6)"
        strokeWidth="1.5"
      />
      <line
        x1="37"
        y1="34"
        x2="27"
        y2="26"
        stroke="oklch(var(--primary)/0.6)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GradCapSvg() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <polygon
        points="24,8 44,18 24,28 4,18"
        fill="oklch(var(--primary)/0.15)"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 23v10c0 3.3 4.5 6 10 6s10-2.7 10-6V23"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="18"
        x2="44"
        y2="30"
        stroke="oklch(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Service cards data ────────────────────────────────────────────────────

const services = [
  {
    id: "vulnerability",
    icon: <ShieldSvg />,
    title: "Vulnerability Assessment",
    description:
      "Identify security weaknesses before attackers do. Our comprehensive assessments combine automated scanning with expert manual testing — covering web applications, networks, and infrastructure — to deliver prioritized, actionable remediation guidance.",
    tags: ["Pen Testing", "Risk Analysis", "Remediation"],
  },
  {
    id: "consulting",
    icon: <NetworkSvg />,
    title: "Strategic Security Consulting",
    description:
      "Build a security program that aligns with your business. Our CISSPs and senior consultants design tailored security frameworks, roadmaps, and policies — translating complex technical risks into executive-ready strategy.",
    tags: ["Security Roadmap", "Risk Management", "Compliance"],
  },
  {
    id: "training",
    icon: <GradCapSvg />,
    title: "Security Awareness Training",
    description:
      "Your employees are your first line of defense. We deliver engaging, real-world training programs that build a security-first culture — covering phishing, social engineering, password hygiene, and incident response.",
    tags: ["Phishing Defense", "Social Engineering", "Workforce Security"],
  },
];

// ─── Credentials ─────────────────────────────────────────────────────────────

const credentials = [
  {
    label: "ISC² CISSP",
    desc: "Certified Information Systems Security Professional",
  },
  { label: "SANS / GIAC GSEC", desc: "GIAC Security Essentials Certification" },
  { label: "EC-Council C|EH", desc: "Certified Ethical Hacker" },
  { label: "Axelos ITILv4", desc: "IT Infrastructure Library Foundation" },
];

// ─── Page component ───────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex-1 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden bg-background"
        aria-label="Hero"
        data-ocid="hero.section"
      >
        <HexGridPattern />

        {/* Cyan glow accent */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--primary)/0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/haltsec-logo-new.png"
              alt="HaltSec cybersecurity logo"
              className="w-24 sm:w-32 rounded-xl shadow-elevated border border-primary/20 object-contain"
            />
          </div>

          <Badge
            variant="outline"
            className="mb-6 border-primary/40 text-primary text-xs uppercase tracking-widest px-4 py-1.5"
          >
            Ohio-Based · USA-Wide Coverage
          </Badge>

          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Advanced Cyber Defense.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Uncompromising Protection.
            </span>
          </h1>

          <p className="text-body text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            HaltSec delivers elite vulnerability assessments, strategic security
            consulting, and security awareness training to safeguard your
            digital assets against evolving threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="min-h-[52px] text-base px-8 border border-primary/30 accent-glow-hover"
              onClick={() => scrollTo("#contact")}
              data-ocid="hero.contact.primary_button"
            >
              Secure Your Business
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-h-[52px] text-base px-8"
              onClick={() => scrollTo("#services")}
              data-ocid="hero.services.secondary_button"
            >
              Explore Services
            </Button>
          </div>

          {/* Scroll hint */}
          <button
            type="button"
            onClick={() => scrollTo("#services")}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors mx-auto"
            aria-label="Scroll to services"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="bg-muted/20 border-y border-border/40 py-16 sm:py-24"
        aria-label="Services"
        data-ocid="services.section"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary text-xs uppercase tracking-widest px-4 py-1.5"
            >
              What We Do
            </Badge>
            <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three focused services. One mission: protect your organization
              from threats that never sleep.
            </p>
          </div>

          <div
            className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3"
            data-ocid="services.list"
          >
            {services.map((service, index) => (
              <article
                key={service.id}
                className="zone-elevated p-8 flex flex-col gap-6 accent-glow-hover group"
                data-ocid={`services.item.${index + 1}`}
              >
                {/* Icon */}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-smooth">
                  {service.icon}
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded border border-primary/25 text-primary/80 bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="bg-background py-16 sm:py-24"
        aria-label="About HaltSec"
        data-ocid="about.section"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: copy */}
            <div className="space-y-8">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/40 text-primary text-xs uppercase tracking-widest px-4 py-1.5"
                >
                  About HaltSec
                </Badge>
                <h2 className="text-heading text-3xl sm:text-4xl mb-4">
                  40+ Years of Security Expertise
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  HaltSec is led by Gary Holtz, CISSP — with over 40 years of
                  hands-on cybersecurity experience. Our team brings together
                  industry-certified professionals to deliver rigorous,
                  client-focused security services to organizations across every
                  sector.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                We believe effective security demands more than technology. It
                requires a holistic strategy integrating people, processes, and
                platforms. HaltSec works as an extension of your team —
                delivering transparent insights, actionable guidance, and
                unwavering commitment to your protection.
              </p>

              {/* Differentiators */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: <Shield className="h-5 w-5 text-primary" />,
                    title: "Proactive Defense",
                    desc: "Identify vulnerabilities before attackers exploit them.",
                  },
                  {
                    icon: <Lock className="h-5 w-5 text-primary" />,
                    title: "Tailored Solutions",
                    desc: "Security customized to your unique risk profile.",
                  },
                  {
                    icon: <Award className="h-5 w-5 text-primary" />,
                    title: "Certified Experts",
                    desc: "CISSP, GSEC, C|EH, and ITILv4 certified team.",
                  },
                  {
                    icon: <Network className="h-5 w-5 text-primary" />,
                    title: "Nationwide Reach",
                    desc: "Ohio-based. Serving clients across the USA.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/40"
                  >
                    <div className="shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: credentials + logo */}
            <div className="space-y-8">
              <div className="zone-elevated p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Team Credentials
                </h3>
                <div className="space-y-4">
                  {credentials.map((cred) => (
                    <div
                      key={cred.label}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background border border-primary/15 hover:border-primary/40 transition-smooth"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-primary">
                          {cred.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {cred.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="/assets/haltsec-logo-new.png"
                  alt="HaltSec — trusted cybersecurity partner"
                  className="w-40 rounded-xl border border-primary/20 shadow-card object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section
        className="bg-primary/10 border-y border-primary/20 py-12 sm:py-16"
        aria-label="Call to action"
        data-ocid="cta.section"
      >
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-heading text-2xl sm:text-3xl md:text-4xl mb-4">
            Don't Wait for a Breach
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Proactive security is always more effective than reactive damage
            control. Let's discuss how HaltSec can protect your organization
            today.
          </p>
          <Button
            size="lg"
            className="min-h-[52px] text-base px-8 border border-primary/30 accent-glow-hover"
            onClick={() => scrollTo("#contact")}
            data-ocid="cta.contact.primary_button"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="bg-card border-t border-border/40 py-16 sm:py-24"
        aria-label="Contact HaltSec"
        data-ocid="contact.section"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary text-xs uppercase tracking-widest px-4 py-1.5"
            >
              Get In Touch
            </Badge>
            <h2 className="text-heading text-3xl sm:text-4xl mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our cybersecurity experts are standing by. Reach out directly — no
              forms, no friction.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {/* Phone */}
            <a
              href="tel:4407255537"
              className="zone-elevated p-8 flex flex-col items-center text-center gap-4 accent-glow-hover group"
              data-ocid="contact.phone.link"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-smooth">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Call Us
                </div>
                <div className="font-bold text-lg">440-725-5537</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:cust_service@haltsec.net"
              className="zone-elevated p-8 flex flex-col items-center text-center gap-4 accent-glow-hover group"
              data-ocid="contact.email.link"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-smooth">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Email Us
                </div>
                <div className="font-bold text-sm break-all">
                  cust_service@haltsec.net
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              className="zone-elevated p-8 flex flex-col items-center text-center gap-4"
              data-ocid="contact.location.card"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Location
                </div>
                <div className="font-bold">Ohio, USA</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Services delivered USA-wide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
