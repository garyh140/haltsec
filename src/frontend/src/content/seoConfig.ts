/**
 * SEO Configuration
 *
 * Per-route metadata aligned with keyword strategy defined in keywordPlan.ts
 * Each page emphasizes its primary keyword theme while maintaining distinct, accurate descriptions.
 */

export const seoConfig = {
  siteName: "HaltSec",
  locale: "en_US",
  home: {
    // Primary keyword: "cybersecurity services USA"
    // Secondary: vulnerability assessment, penetration testing, consulting, training
    title:
      "Cybersecurity Services USA - Vulnerability Assessment & Penetration Testing | HaltSec",
    description:
      "Professional cybersecurity services delivered nationwide. Expert vulnerability assessments, penetration testing, strategic consulting, and security awareness training to protect your organization.",
    canonical: "https://haltsec.net/",
    ogImage: "/assets/generated/hero-cyber.dim_1600x900.png",
  },
  services: {
    // Primary keyword: "vulnerability assessment and penetration testing"
    // Secondary: cybersecurity consulting, security awareness training
    title:
      "Vulnerability Assessment and Penetration Testing Services | HaltSec",
    description:
      "Comprehensive vulnerability assessment and penetration testing services. Expert cybersecurity consulting and security awareness training programs tailored to your organization.",
    canonical: "https://haltsec.net/services",
    ogImage: "/assets/generated/service-icons-set.dim_1200x400.png",
  },
  about: {
    // Primary keyword: "cybersecurity consulting company"
    // Secondary: cybersecurity experts USA, security consulting team
    title: "About HaltSec - Cybersecurity Consulting Company & Expert Team",
    description:
      "HaltSec is a trusted cybersecurity consulting company serving organizations across the USA. Meet our expert security team and discover our mission to deliver world-class protection.",
    canonical: "https://haltsec.net/about",
    ogImage: "/assets/haltsec-logo-new.png",
  },
  contact: {
    // Primary keyword: "cybersecurity consultation"
    // Secondary: security assessment consultation, schedule consultation
    title: "Contact HaltSec - Schedule Your Cybersecurity Consultation",
    description:
      "Schedule a cybersecurity consultation with HaltSec experts. Get professional guidance on vulnerability assessments, penetration testing, and security strategy for your organization.",
    canonical: "https://haltsec.net/contact",
    ogImage: "/assets/haltsec-logo-new.png",
  },
};
