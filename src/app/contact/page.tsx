import type { Metadata } from "next";
import { ExternalLink, MessageCircle, FileText, Receipt } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact HDXCLOUD",
  description:
    "Contact HDXCLOUD through the client billing panel, documentation portal, or Discord support once the official invite is published.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact HDXCLOUD",
    description:
      "Support routes for HDXCLOUD: client billing panel, documentation, and Discord.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const discord = siteConfig.links.discord;

  return (
    <>
      <section className="container-x pt-32 pb-8">
        <SectionHeading
          eyebrow="Contact"
          title="How to reach HDXCLOUD"
          description="Support is provided through the client billing panel and, once published, the official Discord server. Terms and policies live on the documentation site."
        />
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={siteConfig.links.billing}
            target="_blank"
            rel="noopener noreferrer"
            className="surface flex flex-col p-6 transition hover:border-accent-cyan/40"
          >
            <Receipt className="h-5 w-5 text-accent-cyan" aria-hidden />
            <h2 className="mt-3 text-base font-semibold text-white">
              Client billing panel
            </h2>
            <p className="mt-1 flex-1 text-sm text-white/60">
              Open a ticket, view invoices, or manage your Minecraft and general
              services from the client billing panel.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan">
              billing.hdxcloud.xyz
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>

          <a
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="surface flex flex-col p-6 transition hover:border-accent-cyan/40"
          >
            <FileText className="h-5 w-5 text-accent-cyan" aria-hidden />
            <h2 className="mt-3 text-base font-semibold text-white">
              Documentation
            </h2>
            <p className="mt-1 flex-1 text-sm text-white/60">
              Read terms, policies, and service documentation at the official
              docs site.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan">
              docs.hdxclouds.info
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>

          <div className="surface flex flex-col p-6">
            <MessageCircle className="h-5 w-5 text-accent-cyan" aria-hidden />
            <h2 className="mt-3 text-base font-semibold text-white">
              Discord support
            </h2>
            <p className="mt-1 flex-1 text-sm text-white/60">
              Discord is used for custom RAM requirements and community support.
              The official invite will be published here once available.
            </p>
            {discord ? (
              <a
                href={discord}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:underline"
              >
                Join the HDXCLOUD Discord
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : (
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/40">
                Discord invite not yet published
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  );
}