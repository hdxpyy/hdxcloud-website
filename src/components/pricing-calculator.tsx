"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import {
  MAX_RAM_GB,
  MIN_RAM_GB,
  type HostingPlan,
  monthlyTotal,
} from "@/config/plans";
import { formatINR, cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface PricingCalculatorProps {
  plan: HostingPlan;
}

export function PricingCalculator({ plan }: PricingCalculatorProps) {
  const [ram, setRam] = useState<number>(4);

  const clamp = (value: number) =>
    Math.max(MIN_RAM_GB, Math.min(MAX_RAM_GB, Math.round(value)));

  const setSafe = (value: number) => setRam(clamp(value));

  const total = monthlyTotal(plan.pricePerGbMonthly, ram);

  const accentRing: Record<string, string> = {
    cyan: "focus-visible:ring-accent-cyan",
    blue: "focus-visible:ring-accent-blue",
    violet: "focus-visible:ring-accent-violet",
  };

  return (
    <div
      className={cn(
        "mt-6 rounded-xl border border-white/10 bg-ink-900/60 p-4"
      )}
    >
      <div className="flex items-center justify-between">
        <label
          htmlFor={`ram-${plan.id}`}
          className="text-xs font-medium uppercase tracking-wider text-white/60"
        >
          Selected RAM
        </label>
        <span
          aria-live="polite"
          className="rounded-md bg-white/10 px-2.5 py-1 text-sm font-semibold text-white"
        >
          {ram} GB
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setSafe(ram - 1)}
          disabled={ram <= MIN_RAM_GB}
          aria-label="Decrease RAM by 1 GB"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
        >
          <Minus className="h-4 w-4" aria-hidden />
        </button>

        <input
          id={`ram-${plan.id}`}
          type="range"
          min={MIN_RAM_GB}
          max={MAX_RAM_GB}
          step={1}
          value={ram}
          onChange={(e) => setSafe(Number(e.target.value))}
          className={cn("ram-slider flex-1 rounded focus-visible:outline-none", accentRing[plan.accent])}
          aria-valuemin={MIN_RAM_GB}
          aria-valuemax={MAX_RAM_GB}
          aria-valuenow={ram}
          aria-valuetext={`${ram} gigabytes`}
        />

        <button
          type="button"
          onClick={() => setSafe(ram + 1)}
          disabled={ram >= MAX_RAM_GB}
          aria-label="Increase RAM by 1 GB"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
        >
          <Plus className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/50">
            Monthly total
          </p>
          <p
            aria-live="polite"
            className="mt-1 text-2xl font-semibold text-white"
          >
            {formatINR(total)}
            <span className="text-sm font-normal text-white/60"> / month</span>
          </p>
        </div>
        <a
          href={plan.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-accent-cyan px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-cyan-300"
        >
          Order {ram} GB
        </a>
      </div>

      {ram >= MAX_RAM_GB ? (
        <p className="mt-3 text-xs leading-relaxed text-white/50">
          Need more than {MAX_RAM_GB} GB RAM?{" "}
          {siteConfig.links.discord ? (
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              Contact HDXCLOUD support through a Discord ticket
            </a>
          ) : (
            <span className="text-white/70">
              Contact HDXCLOUD support through a Discord ticket for custom
              requirements.
            </span>
          )}
        </p>
      ) : null}
    </div>
  );
}