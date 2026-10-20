import type { Metadata } from "next";
import { ExternalLink, Server } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "VPS / VM Hosting",
  description:
    "HDXCLOUD VPS and VM hosting is delivered through a dedicated portal. Explore available configurations and manage your virtual servers at vms.hdxclouds.com.",
  alternates: { canonical: "/vps-hosting" },
  openGraph: {
    title: "VPS / VM Hosting | HDXCLOUD",
    description:
      "Manage HDXCLOUD VPS and VM services through the dedicated portal.",
    url: `${siteConfig.url}/vps-hosting`,
  },
};

export default function VpsHostingPage() {
  return (
    <>
      <section className="container-x pt-32 pb-8">
        <SectionHeading
          eyebrow="VPS / VM Hosting"
          title="Virtual servers, managed through a dedicated portal"
          description="HDXCLOUD provides a separate portal for VPS and VM services. Available configurations, operating systems, and resources are listed directly inside the panel so what you see matches what is provisioned."
        />
      </section>

      <section className="container-x pb-8">
        <div className="surface flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-cyan">
              <Server className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">
                Open the HDXCLOUD VPS / VM panel
              </h2>
              <p className="mt-1 max-w-xl text-sm text-white/60">
                The panel is hosted at{" "}
                <span className="text-white/80">vms.hdxclouds.com</span>. Billing
                and invoices for virtual servers are handled through the{" "}
                <a
                  href={siteConfig.links.billing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:underline"
                >
                  client billing panel
                </a>
                .
              </p>
            </div>
          </div>
          <a
            href={siteConfig.links.vpsPanel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-5 py-3 text-sm font-semibold text-ink-950 hover:bg-cyan-300"
          >
            Explore VPS / VM Panel
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="surface p-6">
            <h3 className="text-base font-semibold text-white">
              External control panel
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              VPS / VM lifecycle management — start, stop, reinstall, and console
              access — is handled directly in the VPS panel.
            </p>
          </div>
          <div className="surface p-6">
            <h3 className="text-base font-semibold text-white">
              Separate from game hosting
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Minecraft hosting and VPS / VM hosting are delivered through
              distinct portals so each service can evolve independently.
            </p>
          </div>
          <div className="surface p-6">
            <h3 className="text-base font-semibold text-white">
              Documentation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Terms, policies, and documentation are published at{" "}
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
          </div>
        </div>
      </section>
    </>
  );
}