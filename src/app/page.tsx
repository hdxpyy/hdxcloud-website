import Link from "next/link";
import {
  Cpu,
  Layers,
  HardDrive,
  ShieldCheck,
  ExternalLink,
  Server,
  Gauge,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { PricingCard } from "@/components/pricing-card";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { StructuredData } from "@/components/structured-data";
import { plans, MAX_RAM_GB } from "@/config/plans";
import { siteConfig } from "@/config/site";

const faqs: FaqItem[] = [
  {
    question: "What is HDXCLOUD?",
    answer: (
      <p>
        HDXCLOUD is a hosting brand offering RAM-priced Minecraft hosting with
        SSD storage included, plus a separate VPS / VM portal for virtual
        servers. Client billing and VPS / VM management are handled through
        external control panels.
      </p>
    ),
  },
  {
    question: "How much does Minecraft hosting cost?",
    answer: (
      <p>
        Minecraft hosting starts at ₹10 per GB of RAM per month on the Cheap
        plan, ₹20 per GB per month on the Budget plan, and ₹30 per GB per month
        on the Performance plan. All prices are shown in INR.
      </p>
    ),
  },
  {
    question: "How is the monthly price calculated?",
    answer: (
      <p>
        Total monthly price equals selected RAM (in GB) multiplied by the
        plan&apos;s per-GB rate. For example, 4 GB on the Cheap plan is ₹40 per
        month, 4 GB on the Budget plan is ₹80, and 4 GB on the Performance plan
        is ₹120.
      </p>
    ),
  },
  {
    question:
      "What is the difference between the Cheap, Budget, and Performance plans?",
    answer: (
      <p>
        The Cheap plan uses an Intel Xeon E5-2620 v4 CPU. The Budget plan uses
        the Intel Xeon 6 family. The Performance plan uses either an AMD EPYC
        9755 or an Intel Core Ultra 9, depending on the hosting node assigned to
        your order. All three are RAM-priced and include SSD storage.
      </p>
    ),
  },
  {
    question: "Is SSD storage included?",
    answer: (
      <p>
        Yes. SSD storage is included with all Minecraft hosting plans. The exact
        storage allocation depends on the selected plan and RAM.
      </p>
    ),
  },
  {
    question: "What is the maximum RAM I can order online?",
    answer: (
      <p>
        Online Minecraft plans currently support selections from 1 GB to{" "}
        {MAX_RAM_GB} GB of RAM.
      </p>
    ),
  },
  {
    question: "Can I get more than 32 GB RAM?",
    answer: (
      <p>
        Yes. If you need more than {MAX_RAM_GB} GB of RAM, contact HDXCLOUD
        support through a Discord ticket{" "}
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
        for custom requirements.
      </p>
    ),
  },
  {
    question: "How do I access my services?",
    answer: (
      <p>
        Minecraft and general services are managed from the{" "}
        <a
          href={siteConfig.links.billing}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-cyan hover:underline"
        >
          Client Area
        </a>
        . Virtual servers are managed from the{" "}
        <a
          href={siteConfig.links.vpsPanel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-cyan hover:underline"
        >
          VPS / VM Panel
        </a>
        .
      </p>
    ),
  },
  {
    question: "Where can I manage my VPS or VM?",
    answer: (
      <p>
        VPS and VM services are managed through the dedicated portal at{" "}
        <a
          href={siteConfig.links.vpsPanel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-cyan hover:underline"
        >
          vms.hdxclouds.com
        </a>
        .
      </p>
    ),
  },
  {
    question: "Where can I find the terms and policies?",
    answer: (
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
    ),
  },
  {
    question: "How do I contact support?",
    answer: (
      <p>
        Support is available through the{" "}
        <a
          href={siteConfig.links.billing}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-cyan hover:underline"
        >
          Client Area
        </a>{" "}
        and through Discord once the official invite is published. For
        documentation and policies, visit{" "}
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
    ),
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Transparent RAM pricing",
    body: "Every Minecraft plan is priced per GB of RAM per month — no hidden setup fees or bundled line items.",
  },
  {
    icon: Layers,
    title: "Three hardware tiers",
    body: "Cheap, Budget, and Performance tiers separate hardware generations so you can match cost and capability.",
  },
  {
    icon: HardDrive,
    title: "SSD storage included",
    body: "SSD storage is included with every Minecraft hosting plan rather than sold as an add-on.",
  },
  {
    icon: Cpu,
    title: "Configurable RAM up to 32 GB",
    body: "Select the RAM allocation you need online and see the monthly total update instantly.",
  },
  {
    icon: ExternalLink,
    title: "External client billing",
    body: "Orders, renewals, and invoices are handled through the dedicated HDXCLOUD billing panel.",
  },
  {
    icon: Server,
    title: "Separate VPS / VM portal",
    body: "Virtual servers live in their own control panel, keeping game hosting and VPS management distinct.",
  },
  {
    icon: ShieldCheck,
    title: "Custom RAM via support",
    body: "Larger requirements beyond the online 32 GB limit are handled through a Discord support ticket.",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />

      {/* Services */}
      <section
        id="services"
        className="container-x scroll-mt-24 py-20"
        aria-labelledby="services-heading"
      >
        <SectionHeading
          eyebrow="Services"
          title="Hosting built around real hardware"
          description="Minecraft hosting is priced per GB of RAM per month. VPS and VM services are delivered through a separate portal."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Layers}
            title="Minecraft Hosting"
            description="Three RAM-priced tiers — Cheap, Budget, and Performance — with SSD storage included and online RAM selections up to 32 GB."
            ctaLabel="View Minecraft plans"
            ctaHref="/minecraft-hosting"
          />
          <ServiceCard
            icon={Server}
            title="VPS / VM Hosting"
            description="HDXCLOUD provides a dedicated portal for VPS and VM services. Explore available configurations directly through the VPS panel."
            ctaLabel="Open VPS / VM panel"
            ctaHref={siteConfig.links.vpsPanel}
            external
          />
          <ServiceCard
            icon={ExternalLink}
            title="Client Billing"
            description="Manage orders, invoices, and renewals through the HDXCLOUD client billing panel. Documentation and policies are available separately."
            ctaLabel="Open client area"
            ctaHref={siteConfig.links.billing}
            external
          />
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="container-x scroll-mt-24 py-20"
        aria-labelledby="pricing-heading"
      >
        <SectionHeading
          eyebrow="Minecraft pricing"
          title="Pick your plan. Choose your RAM."
          description="Each plan is priced per GB of RAM per month. Use the selector to preview the monthly total for any allocation up to 32 GB."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-white/60">
          Need more than {MAX_RAM_GB} GB RAM? Contact HDXCLOUD support through a
          Discord ticket{" "}
          {siteConfig.links.discord ? (
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              on Discord
            </a>
          ) : (
            "once the official invite is published"
          )}{" "}
          for custom requirements.
        </p>
      </section>

      {/* Why choose */}
      <section className="container-x py-20" aria-labelledby="why-heading">
        <SectionHeading
          eyebrow="Why HDXCLOUD"
          title="Clarity over marketing noise"
          description="Every claim on this website reflects the actual HDXCLOUD offering. No fabricated uptime promises, no invented statistics."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-cyan">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20" aria-labelledby="faq-heading">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Everything here reflects the current HDXCLOUD service configuration."
        />
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-8">
        <div className="surface flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Ready to launch your server?
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Choose a plan on the pricing page or manage existing services in
              the client area.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/pricing"
              className="rounded-lg bg-accent-cyan px-5 py-3 text-center text-sm font-semibold text-ink-950 hover:bg-cyan-300"
            >
              View plans
            </Link>
            <a
              href={siteConfig.links.billing}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white hover:bg-white/10"
            >
              Open client area
            </a>
          </div>
        </div>
      </section>
    </>
  );
}