import { products, siteConfig } from "@/lib/site";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: siteConfig.founded,
        slogan: "Technology that works. Intelligence that delivers.",
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        areaServed: ["NG", "Africa"],
        knowsAbout: [
          "Mobile app development",
          "Web development",
          "Artificial intelligence",
          "Fintech infrastructure",
          "Government technology",
          "TrustORA",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        name: products.trustora.name,
        url: products.trustora.url,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Hire verified artisans in Nigeria with escrow-protected jobs, in-app chat, and wallet payouts in NGN.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NGN",
        },
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
