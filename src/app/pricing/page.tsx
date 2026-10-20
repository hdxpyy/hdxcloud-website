import type { Metadata } from "next";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { plans, MAX_RAM_GB } from "@/config/plans";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Minecraft Hosting Pricing",
  description:
    "HDXCLOUD Minecraft hosting prices: ₹10/GB/month (Cheap), ₹20/GB/month (Budget), ₹30/GB/month (Performance). SSD storage included. Configurable RAM up to 32 GB online.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Minecraft Hosting Pricing | HDXCLOUD",
    description:
      "Compare HDXCLOUD Minecraft hosting plans with transparent per-GB RAM pricing and SSD storage included.",
    url: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <StructuredData />
      <section className="container-x pt-32 pb-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Minecraft hosting priced per GB of RAM"
          description="Choose a hardware tier and use the selector to preview the exact monthly total for any RAM allocation from 1 GB to 32 GB."
        />
      </section>
      <section className="container-x pb-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>
      <section className="container-x pb-24">
        <div className="surface p-6 text-sm leading-relaxed text-white/70">
          <p>
            Prices are displayed in INR and represent the monthly cost per GB of
            RAM. Monthly totals are calculated as selected RAM (in GB) multiplied
            by the plan&apos;s per-GB rate. For example, 4 GB is ₹40/month on the
            Cheap plan, ₹80/month on the Budget plan, and ₹120/month on the
            Performance plan.
          </p>
          <p className="mt-3">
            Online selections are limited to {MAX_RAM_GB} GB. Larger
            requirements are handled through a Discord support ticket{" "}
            {siteConfig.links.discord ? (
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline"
              >
                here
              </a>
            ) : (
              "once the official invite is published"
            )}
            .
          </p>
          <p className="mt-3">
            All orders are processed through the{" "}
            <a
              href={siteConfig.links.billing}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              HDXCLOUD client billing panel
            </a>
            . SSD storage is included with every Minecraft plan.
          </p>
        </div>
      </section>
    </>
  );
}