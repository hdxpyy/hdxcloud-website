import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const discordHref = siteConfig.links.discord;

  return (
    <footer className="mt-24 border-t border-white/10 bg-ink-950">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Image
              src={siteConfig.assets.logo}
              alt="HDXCLOUD logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            HDXCLOUD is an affordable Minecraft and cloud hosting brand offering
            transparent RAM-based plans, SSD storage, and a separate VPS / VM
            portal. Managed through external billing and virtualization
            control panels.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Hosting</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <Link href="/minecraft-hosting" className="hover:text-white">
                Minecraft Hosting
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/vps-hosting" className="hover:text-white">
                VPS / VM Hosting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Resources</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a
                href={siteConfig.links.billing}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Client Billing
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.vpsPanel}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                VPS / VM Panel
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Documentation & Policies
              </a>
            </li>
            {discordHref ? (
              <li>
                <a
                  href={discordHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Discord Support
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Prices shown in INR. SSD storage included with Minecraft plans.
          </p>
        </div>
      </div>
    </footer>
  );
}