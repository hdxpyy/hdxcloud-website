"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Minecraft Hosting", href: "/minecraft-hosting" },
  { label: "Pricing", href: "/pricing" },
  { label: "VPS Hosting", href: "/vps-hosting" },
  { label: "Documentation", href: siteConfig.links.docs, external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-16 items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="HDXCLOUD home"
        >
          <Image
            src={siteConfig.assets.logo}
            alt="HDXCLOUD logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteConfig.links.billing}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-cyan/60 hover:bg-white/10"
          >
            Client Area
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-x space-y-1 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-3 text-base text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-base text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href={siteConfig.links.billing}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-md bg-accent-cyan px-3 py-3 text-center text-base font-semibold text-ink-950"
              onClick={() => setOpen(false)}
            >
              Open Client Area
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}