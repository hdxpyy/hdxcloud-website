import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, HardDrive, ListChecks } from "lucide-react";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { plans, MAX_RAM_GB } from "@/config/plans";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Minecraft Hosting",
  description:
    "HDXCLOUD Minecraft hosting details: three hardware tiers (Cheap, Budget, Performance), per-GB RAM pricing, SSD storage included, and online RAM selections up to 32 GB.",
  alternates: { canonical: "/minecraft-hosting" },
  openGraph: {
    title: "Minecraft Hosting | HDXCLOUD",
    description:
      "Explore HDXCLOUD Minecraft hosting tiers, hardware, and per-GB RAM pricing.",
    url: `${siteConfig.url}/minecraft-hosting`,
  },
};

export default function MinecraftHostingPage() {
  return (
    <>
      <StructuredData />
      <section className="container-x pt-32 pb-8">
        <SectionHeading
          eyebrow="Minecraft Hosting"
          title="Choose your hardware tier and RAM"
          description="HDXCLOUD offers three Minecraft hosting tiers, each priced per GB of RAM per month and each with SSD storage included. Use the RAM selector on each plan to preview the monthly total instantly."
        />
      </section>

      <section className="container-x pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="surface p-5">
            <Cpu className="h-5 w-5 text-accent-cyan" aria-hidden />
            <h2 className="mt-3 text-base font-semibold text-white">
              Three hardware tiers
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Intel Xeon E5-2620 v4, Intel Xeon 6, and AMD EPYC 9755 / Intel
              Core Ultra 9 (node-dependent).
            </p>
          </div>
          <div className="surface p-5">
            <HardDrive className="h-5 w-5 text-accent-cyan" aria-hidden />
            <h2 className="mt-3 text-base font-semibold text-white">
              SSD storage included
            </h2>
            <p className="mt-1 text-sm text-white/60">
              All Minecraft plans include SSD storage; capacity depends on the
              selected plan and RAM.
            </p>
          </div>
          <div className="surface p-5">
            <ListChecks className="h-5 w-5 text-accent-cyan" aria-hidden />
            <h2 className="mt-3 text-base font-semibold text-white">
              Transparent per-GB pricing
            </h2>
            <p className="mt-1 text-sm text-white/60">
              ₹10, ₹20, or ₹30 per GB of RAM per month depending on the
              selected plan.
            </p>
          </div>
        </div>
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
          <h2 className="text-base font-semibold text-white">
            About online RAM limits
          </h2>
          <p className="mt-2">
            Online selections support from 1 GB to {MAX_RAM_GB} GB of RAM. If
            you need more than {MAX_RAM_GB} GB, contact HDXCLOUD support through
            a Discord ticket{" "}
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
            )}{" "}
            to discuss custom requirements.
          </p>
          <p className="mt-3">
            Orders are placed through the{" "}
            <a
              href={siteConfig.links.billing}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              HDXCLOUD client billing panel
            </a>
            . For policies and terms, see{" "}
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
          <p className="mt-4">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-lg bg-accent-cyan px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-cyan-300"
            >
              Open the full pricing page
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}