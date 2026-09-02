import React from "react";

export function TrustStrip() {
  const pillars = [
    { label: "FINANCIAL MODELLING", desc: "Institutional 3-statement logic" },
    { label: "CORPORATE FINANCE", desc: "Debt syndication & CMA" },
    { label: "EQUITY RESEARCH", desc: "Sectoral valuation comps" },
    { label: "RISK & LIQUIDITY", desc: "Working capital optimization" },
    { label: "ANALYTICS", desc: "Granular unit economics" },
    { label: "STRATEGY", desc: "Fractional CFO leadership" },
  ];

  return (
    <section className="bg-muted border-b border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                {pillar.label}
              </div>
              <div className="text-xs text-muted-foreground font-normal">
                {pillar.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
