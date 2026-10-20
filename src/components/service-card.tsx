import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
  ctaHref,
  external = false,
}: ServiceCardProps) {
  return (
    <article className="surface flex flex-col p-6 transition hover:border-accent-cyan/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-cyan">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
        {description}
      </p>
      {external ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-cyan-300"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      ) : (
        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-cyan-300"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </article>
  );
}