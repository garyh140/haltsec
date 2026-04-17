import { useEffect } from "react";
import { businessIdentity } from "../content/businessIdentity";

interface StructuredDataProps {
  type?: "Organization" | "LocalBusiness" | "ProfessionalService";
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function StructuredData({
  type = "Organization",
  breadcrumbs,
}: StructuredDataProps) {
  useEffect(() => {
    // Main structured data (Organization/ProfessionalService)
    const mainStructuredData = {
      "@context": "https://schema.org",
      "@type": type,
      name: businessIdentity.name,
      description: businessIdentity.description,
      url: businessIdentity.url,
      logo: `${businessIdentity.url}${businessIdentity.logo}`,
      image: `${businessIdentity.url}${businessIdentity.logo}`,
      telephone: businessIdentity.phone,
      email: businessIdentity.email,
      address: {
        "@type": "PostalAddress",
        addressRegion: businessIdentity.address.state,
        addressCountry: businessIdentity.address.country,
      },
      sameAs: businessIdentity.socialLinks,
      ...(type === "ProfessionalService" && {
        serviceType: "Cybersecurity Services",
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      }),
    };

    const mainScriptId = "structured-data-main";
    let mainScript = document.getElementById(
      mainScriptId,
    ) as HTMLScriptElement | null;

    if (!mainScript) {
      mainScript = document.createElement("script");
      mainScript.id = mainScriptId;
      mainScript.type = "application/ld+json";
      document.head.appendChild(mainScript);
    }

    mainScript.textContent = JSON.stringify(mainStructuredData);

    // Breadcrumb structured data
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      };

      const breadcrumbScriptId = "structured-data-breadcrumb";
      let breadcrumbScript = document.getElementById(
        breadcrumbScriptId,
      ) as HTMLScriptElement | null;

      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement("script");
        breadcrumbScript.id = breadcrumbScriptId;
        breadcrumbScript.type = "application/ld+json";
        document.head.appendChild(breadcrumbScript);
      }

      breadcrumbScript.textContent = JSON.stringify(breadcrumbStructuredData);
    } else {
      // Remove breadcrumb script if no breadcrumbs provided
      const existingBreadcrumbScript = document.getElementById(
        "structured-data-breadcrumb",
      );
      if (existingBreadcrumbScript) {
        existingBreadcrumbScript.remove();
      }
    }

    return () => {
      // Cleanup on unmount
      const existingMainScript = document.getElementById(mainScriptId);
      if (existingMainScript) {
        existingMainScript.remove();
      }
      const existingBreadcrumbScript = document.getElementById(
        "structured-data-breadcrumb",
      );
      if (existingBreadcrumbScript) {
        existingBreadcrumbScript.remove();
      }
    };
  }, [type, breadcrumbs]);

  return null;
}
