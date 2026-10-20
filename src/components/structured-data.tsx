import { siteConfig } from "@/config/site";
import { plans } from "@/config/plans";

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.assets.logo}`,
    sameAs: [] as string[],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const products = plans.map((plan) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `HDXCLOUD ${plan.name}`,
    description: plan.description,
    brand: { "@type": "Brand", name: siteConfig.name },
    category: "Minecraft Hosting",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: plan.pricePerGbMonthly,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.pricePerGbMonthly,
        priceCurrency: "INR",
        unitText: "GB of RAM",
      },
      url: siteConfig.links.billing,
      availability: "https://schema.org/InStock",
    },
  }));

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does HDXCLOUD Minecraft hosting cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "HDXCLOUD Minecraft hosting starts at ₹10 per GB of RAM per month on the Cheap plan, ₹20 on the Budget plan, and ₹30 on the Performance plan.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum RAM I can order online?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Online Minecraft plans support selections between 1 GB and 32 GB of RAM. Requests above 32 GB are handled through a Discord support ticket once configured.",
        },
      },
      {
        "@type": "Question",
        name: "Is SSD storage included?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. All HDXCLOUD Minecraft hosting plans include SSD storage. Specific storage capacity is confirmed during the ordering process.",
        },
      },
      {
        "@type": "Question",
        name: "How do I access my services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Services are managed through the HDXCLOUD client billing panel at billing.hdxcloud.xyz. VPS / VM services are managed through vms.hdxclouds.com.",
        },
      },
    ],
  };

  const payload = [organization, website, ...products, faq];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}