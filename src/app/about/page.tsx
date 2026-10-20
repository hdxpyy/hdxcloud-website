import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About HDXCLOUD",
  description:
    "HDXCLOUD is a hosting brand offering RAM-priced Minecraft hosting with SSD storage included and a separate VPS / VM portal.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About HDXCLOUD",
    description:
      "Learn about HDXCLOUD's hosting model, pricing approach, and external control panels.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-32 pb-8">
        <SectionHeading
          eyebrow="About"
          title="About HDXCLOUD"
          description="HDXCLOUD is a hosting brand that focuses on straightforward, per-GB RAM Minecraft hosting alongside a dedicated VPS / VM portal."
        />
      </section>

      <section className="container-x pb-24">
        <div className="prose-invert max-w-3xl space-y-5 text-sm leading-relaxed text-white/70">
          <p>
            HDXCLOUD offers Minecraft hosting across three hardware tiers —
            Cheap, Budget, and Performance — with pricing expressed per GB of
            RAM per month. SSD storage is included with Minecraft plans, and
            online RAM selections are configurable up to 32 GB.
          </p>
          <p>
            VPS and VM hosting are delivered through a separate portal at{" "}
            <a
              href={siteConfig.links.vpsPanel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              vms.hdxclouds.com
            </a>
            , and all orders are managed through the client billing panel at{" "}
            <a
              href={siteConfig.links.billing}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              billing.hdxcloud.xyz
            </a>
            .
          </p>
          <p>
            Documentation, terms, and policies are published at{" "}
            <a
              href={siteConfig.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              docs.hdxclouds.info
            </a>
            .
          </p>
          <p>
            This website intentionally avoids unverified claims — including
            invented uptime guarantees, fabricated customer totals, and
            marketing statistics that cannot be confirmed from the actual
            service offering.
          </p>
        </div>
      </section>
    </>
  );
}