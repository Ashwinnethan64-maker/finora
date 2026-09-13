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
    <section className="py-20 sm:py-24 bg-fog border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist/50">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              FINORA ENGAGEMENTS
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
              Transparent consulting tiers.
            </h2>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            View all scope tiers <ArrowRight className="w-4 h-4 text-ember" />
          </Link>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-xl bg-paper border flex flex-col justify-between space-y-6 ${
                tier.featured ? "border-ember ring-1 ring-ember" : "border-mist/60"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans font-bold text-lg text-ink">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-tag bg-ember text-white">
                      Popular
                    </span>
                  )}
                </div>

                <div>
                  <div className="font-sans text-3xl font-bold text-ink tabular-nums">
                    {tier.price}
                  </div>
                  <div className="text-xs text-pewter font-medium mt-0.5">
                    {tier.cadence}
                  </div>
                </div>

                <p className="text-xs text-graphite leading-relaxed pt-2 border-t border-mist/30">
                  {tier.for}
                </p>

                <ul className="space-y-2 pt-1">
                  {tier.deliverables.map((del, i) => (
                    <li key={i} className="text-xs text-graphite flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-ember flex-shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/consultation"
                className={`w-full py-2.5 rounded-xl font-semibold text-xs text-center transition-all ${
                  tier.featured
                    ? "bg-ember text-white hover:bg-ember-hover"
                    : "bg-fog text-ink hover:bg-mist/30 border border-mist/50"
                }`}
              >
                Scope Engagement →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
