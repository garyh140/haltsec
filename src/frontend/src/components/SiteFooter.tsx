import { Heart, Mail, MapPin, Phone } from "lucide-react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "haltsec.net";

  return (
    <footer className="bg-card border-t border-border/60">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group w-fit"
              aria-label="Back to top"
            >
              <img
                src="/assets/haltsec-logo-new.png"
                alt="HaltSec"
                className="w-10 rounded object-contain"
              />
              <span className="font-bold text-xl font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HaltSec
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professional cybersecurity services protecting organizations
              across the USA. Ohio-based. Nationwide reach.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Vulnerability Assessment",
                "Strategic Consulting",
                "Security Training",
              ].map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:4407255537"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  440-725-5537
                </a>
              </li>
              <li>
                <a
                  href="mailto:cust_service@haltsec.net"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  cust_service@haltsec.net
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Ohio — USA-wide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} HaltSec. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <Heart className="h-3 w-3 text-primary fill-primary mx-1" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
