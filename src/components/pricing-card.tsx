import { Check } from "lucide-react";
import type { HostingPlan } from "@/config/plans";
import { PricingCalculator } from "@/components/pricing-calculator";
import { formatINR, cn } from "@/lib/utils";

interface PricingCardProps {
  plan: HostingPlan;
}

const accentBar: Record<string, string> = {
  cyan: "from-accent-cyan to-cyan-400",
  blue: "from-accent-blue to-accent-cyan",
  violet: "from-accent-violet to-accent-blue",
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article className="surface relative flex flex-col overflow-hidden p-6 transition hover:border-white/20">
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
          accentBar[plan.accent]
        )}
        aria-hidden
      />
      <header>
        <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
        <p className="mt-1 min-h-[48px] text-sm leading-relaxed text-white/60">
          {plan.description}
        </p>
      </header>

      <div className="mt-4">
        <p className="text-3xl font-semibold text-white">
          {formatINR(plan.pricePerGbMonthly)}
          <span className="text-sm font-normal text-white/60">
            {" "}
            / GB / {plan.billingPeriod}
          </span>
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check
              className="mt-0.5 h-4 w-4 flex-none text-accent-cyan"
              aria-hidden
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-white/60">
        <p>
          <span className="text-white/80">CPU:</span> {plan.cpuLabel}
        </p>
        <p className="mt-1">{plan.cpuDetail}</p>
        <p className="mt-1">
          <span className="text-white/80">Storage:</span>{" "}
          {plan.storageIncluded}
        </p>
      </div>

      <PricingCalculator plan={plan} />
    </article>
  );
}