/**
 * Keyword Strategy Plan
 *
 * This document defines the primary and secondary keyword phrases for each core page,
 * aligned with HaltSec's existing cybersecurity offerings and nationwide USA service delivery.
 *
 * Keywords are derived from actual services offered:
 * - Vulnerability assessment & penetration testing
 * - Strategic cybersecurity consulting
 * - Security awareness training
 * - USA/nationwide service delivery
 */

export const keywordPlan = {
  home: {
    primary: "cybersecurity services USA",
    secondary: [
      "vulnerability assessment services",
      "penetration testing company",
      "cybersecurity consulting nationwide",
      "security awareness training",
    ],
    intent:
      "Broad brand awareness and service discovery for organizations seeking comprehensive cybersecurity protection across the USA",
  },
  services: {
    primary: "vulnerability assessment and penetration testing",
    secondary: [
      "cybersecurity consulting services",
      "security awareness training programs",
      "penetration testing services",
      "security consulting USA",
    ],
    intent:
      "Service-focused page targeting organizations researching specific cybersecurity service offerings",
  },
  about: {
    primary: "cybersecurity consulting company",
    secondary: [
      "cybersecurity experts USA",
      "security consulting team",
      "trusted cybersecurity partner",
      "cybersecurity professionals",
    ],
    intent:
      "Trust-building page for prospects evaluating HaltSec as a potential cybersecurity partner",
  },
  contact: {
    primary: "cybersecurity consultation",
    secondary: [
      "security assessment consultation",
      "cybersecurity expert contact",
      "schedule security consultation",
      "cybersecurity services inquiry",
    ],
    intent:
      "Conversion-focused page for prospects ready to engage and schedule a consultation",
  },
} as const;
