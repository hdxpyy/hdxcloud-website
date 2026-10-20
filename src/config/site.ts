export const siteConfig = {
  name: "HDXCLOUD",
  legalName: "HDXCLOUD",
  url: "https://www.hdxclouds.com",
  description:
    "Explore HDXCLOUD Minecraft hosting with plans from ₹10 per GB of RAM per month, SSD storage included, three hardware tiers, and a separate VPS / VM portal.",
  tagline: "Affordable Game & Cloud Hosting",
  links: {
    billing: "https://billing.hdxcloud.xyz",
    vpsPanel: "https://vms.hdxclouds.com",
    docs: "https://docs.hdxclouds.info",
    discord: null as string | null, // set to your invite URL when available
  },
  assets: {
    logo: "/logo/hdxcloud-logo.png",
    banner: "/banner/hdxcloud-banner.jpg",
    ogImage: "/og-image.jpg",
    backgrounds: [
      "/images/backgrounds/bg-1.jpg",
      "/images/backgrounds/bg-2.jpg",
      "/images/backgrounds/bg-3.jpg",
      "/images/backgrounds/bg-4.jpg",
      "/images/backgrounds/bg-5.jpg",
    ],
    fallbackBackground: "/images/backgrounds/bg-1.jpg",
  },
  social: {} as Record<string, string>,
} as const;

export type SiteConfig = typeof siteConfig;