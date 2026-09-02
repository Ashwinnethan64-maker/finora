import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function PricingPreviewSection() {
  const tiers = [
    {
      name: "72-Hr Audit Sprint",
      price: "₹45,000",
      cadence: "Fixed Sprint",
      for: "Businesses needing rapid working capital & cash audit.",
      deliverables: ["18-Point Balance Sheet Audit", "Debtor Aging Teardown", "Executive Action Blueprint"]
    },
    {
      name: "Financial Model Sprint",
      price: "₹2,25,000",
      cadence: "Project Sprint",
      featured: true,
      for: "Founders raising Seed to Series B ($500K - $10M).",
      deliverables: ["Dynamic 3-Statement Model", "Cohort LTV/CAC & Gross Margin", "VC Diligence Room Setup"]
    },
    {
      name: "Fractional CFO Retainer",
      price: "₹1,25,000",
      cadence: "Monthly Retainer",
      for: "Operating companies requiring continuous leadership.",
      deliverables: ["13-Week Cash Flow OS", "Monthly MIS & Variance", "Board Meeting Pack Generation"]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              ENGAGEMENT MODELS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Transparent consulting tiers.
            </h2>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            View all scope tiers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-lg bg-white border flex flex-col justify-between space-y-6 ${
                tier.featured ? "border-2 border-primary" : "border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-extrabold text-xl text-foreground">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-primary text-white">
                      Popular
                    </span>
                  )}
                </div>

                <div>
                  <div className="font-mono text-3xl font-extrabold text-foreground">
                    {tier.price}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    {tier.cadence}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">
                  {tier.for}
                </p>

                <ul className="space-y-2 pt-2">
                  {tier.deliverables.map((del, i) => (
                    <li key={i} className="text-xs text-foreground flex items-center gap-2 font-medium">
                      <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/consultation"
                className={`w-full py-3 rounded-md font-bold text-xs text-center transition-all ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-muted text-foreground hover:bg-muted-dark"
                }`}
              >
                Scope this Engagement →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
