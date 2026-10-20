import Link from "next/link";
import { ArrowRight, Server } from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroSlideshow } from "@/components/hero-slideshow";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-32 md:pt-40">
      <HeroSlideshow />

      <div className="container-x">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-cyan">
          <Server className="h-3.5 w-3.5" aria-hidden />
          {siteConfig.tagline}
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
          Your Server. Your World.{" "}
          <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
            Powered by HDXCLOUD.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Launch your Minecraft server with flexible RAM-based pricing, SSD
          storage included, and hardware options designed for different budgets.
          Explore our hosting plans or manage your existing services through the
          client panel.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-cyan px-6 py-3 text-base font-semibold text-ink-950 shadow-glow transition hover:bg-cyan-300"
          >
            Explore Minecraft Plans
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={siteConfig.links.billing}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Open Client Area
          </a>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="surface px-5 py-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">
              Minecraft from
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-white">
              ₹10
              <span className="text-sm font-normal text-white/60">
                {" "}
                / GB / month
              </span>
            </dd>
          </div>
          <div className="surface px-5 py-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">
              Online RAM
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-white">
              1 – 32 GB
            </dd>
          </div>
          <div className="surface col-span-2 px-5 py-4 sm:col-span-1">
            <dt className="text-xs uppercase tracking-wider text-white/50">
              Storage
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-white">
              SSD included
            </dd>
          </div>
        </dl>

        <p className="mt-6 max-w-2xl text-sm text-white/60">
          Online Minecraft plans support up to{" "}
          <strong className="text-white">32 GB RAM</strong>. Larger requirements
          are handled through a Discord support ticket once the official invite
          is configured. See the{" "}
          <Link href="/pricing" className="text-accent-cyan hover:underline">
            pricing page
          </Link>{" "}
          for full details.
        </p>
      </div>
    </section>
  );
}