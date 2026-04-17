import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
}

export default function Seo({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  robots = "index, follow",
}: SeoProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Standard meta tags
    setMetaTag("description", description);
    setMetaTag("robots", robots);

    // Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:site_name", "HaltSec", true);
    setMetaTag("og:locale", "en_US", true);

    if (ogImage) {
      const fullImageUrl = ogImage.startsWith("http")
        ? ogImage
        : `https://haltsec.net${ogImage}`;
      setMetaTag("og:image", fullImageUrl, true);
    }

    if (canonical) {
      setMetaTag("og:url", canonical, true);
    }

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);

    if (ogImage) {
      const fullImageUrl = ogImage.startsWith("http")
        ? ogImage
        : `https://haltsec.net${ogImage}`;
      setMetaTag("twitter:image", fullImageUrl);
    }

    if (canonical) {
      setMetaTag("twitter:url", canonical);
    }

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');

      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        document.head.appendChild(linkElement);
      }

      linkElement.setAttribute("href", canonical);
    }
  }, [title, description, canonical, ogImage, ogType, robots]);

  return null;
}
