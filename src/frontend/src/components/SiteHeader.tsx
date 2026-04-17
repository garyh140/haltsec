import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-primary/20 shadow-elevated"
          : "bg-card border-b border-border/40"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-3 min-w-0 shrink-0 group"
          aria-label="HaltSec — back to top"
          data-ocid="site.header.link"
        >
          <img
            src="/assets/haltsec-logo-new.png"
            alt="HaltSec logo"
            className="w-9 shrink-0 rounded object-contain"
          />
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
            HaltSec
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium px-3 py-2 rounded text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </button>
          ))}
          <Button
            type="button"
            size="sm"
            className="ml-3 border border-primary/50 accent-glow-hover"
            onClick={() => scrollTo("#contact")}
            data-ocid="nav.contact.primary_button"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] bg-card border-l border-border/60"
          >
            <div className="flex items-center gap-3 mt-2 mb-8">
              <img
                src="/assets/haltsec-logo-new.png"
                alt="HaltSec"
                className="w-8 rounded object-contain"
              />
              <span className="font-bold text-lg font-display">HaltSec</span>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="text-left text-base font-medium px-3 py-3 rounded text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors min-h-[44px]"
                  data-ocid={`mobile.nav.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                type="button"
                className="mt-4 min-h-[44px]"
                onClick={() => handleNav("#contact")}
                data-ocid="mobile.nav.contact.primary_button"
              >
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
