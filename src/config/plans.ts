export type CpuTier = "single" | "family" | "choice";

export interface HostingPlan {
  id: "cheap" | "budget" | "performance";
  name: string;
  description: string;
  pricePerGbMonthly: number;
  currency: "₹";
  billingPeriod: "month";
  cpuLabel: string;
  cpuDetail: string;
  storageIncluded: string;
  maxRamGb: number;
  minRamGb: number;
  accent: string;
  features: string[];
  orderUrl: string;
}

export const MIN_RAM_GB = 1;
export const MAX_RAM_GB = 32;

export const plans: HostingPlan[] = [
  {
    id: "cheap",
    name: "Cheap Plan",
    description:
      "An affordable entry-level option for small Minecraft servers, private survival worlds, and budget-conscious users.",
    pricePerGbMonthly: 10,
    currency: "₹",
    billingPeriod: "month",
    cpuLabel: "Intel Xeon E5-2620 v4",
    cpuDetail: "Fixed CPU model for this tier.",
    storageIncluded: "SSD storage included.",
    minRamGb: MIN_RAM_GB,
    maxRamGb: MAX_RAM_GB,
    accent: "cyan",
    features: [
      "RAM-based pricing",
      "SSD storage included",
      "Intel Xeon E5-2620 v4",
      "Selectable RAM up to 32 GB online",
      "Simple per-GB pricing",
    ],
    orderUrl: "https://billing.hdxcloud.xyz",
  },
  {
    id: "budget",
    name: "Budget Plan",
    description:
      "A balanced option for players who want a higher hardware tier while keeping hosting costs under control.",
    pricePerGbMonthly: 20,
    currency: "₹",
    billingPeriod: "month",
    cpuLabel: "Intel Xeon 6",
    cpuDetail: "Fixed CPU family for this tier.",
    storageIncluded: "SSD storage included.",
    minRamGb: MIN_RAM_GB,
    maxRamGb: MAX_RAM_GB,
    accent: "blue",
    features: [
      "RAM-based pricing",
      "SSD storage included",
      "Intel Xeon 6",
      "Selectable RAM up to 32 GB online",
      "Simple per-GB pricing",
    ],
    orderUrl: "https://billing.hdxcloud.xyz",
  },
  {
    id: "performance",
    name: "Performance Plan",
    description:
      "A premium tier intended for customers who prioritize the performance characteristics of the available hardware.",
    pricePerGbMonthly: 30,
    currency: "₹",
    billingPeriod: "month",
    cpuLabel: "AMD EPYC 9755 / Intel Core Ultra 9",
    cpuDetail:
      "Actual processor depends on the hosting node assigned to your order.",
    storageIncluded: "SSD storage included.",
    minRamGb: MIN_RAM_GB,
    maxRamGb: MAX_RAM_GB,
    accent: "violet",
    features: [
      "RAM-based pricing",
      "SSD storage included",
      "AMD EPYC 9755 or Intel Core Ultra 9 (node-dependent)",
      "Selectable RAM up to 32 GB online",
      "Simple per-GB pricing",
    ],
    orderUrl: "https://billing.hdxcloud.xyz",
  },
];

export function monthlyTotal(pricePerGbMonthly: number, ramGb: number): number {
  if (!Number.isFinite(ramGb) || ramGb < MIN_RAM_GB || ramGb > MAX_RAM_GB) {
    throw new RangeError(
      `RAM must be between ${MIN_RAM_GB} and ${MAX_RAM_GB} GB`
    );
  }
  return pricePerGbMonthly * ramGb;
}