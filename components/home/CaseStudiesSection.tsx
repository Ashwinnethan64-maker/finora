import React from "react";

export function CaseStudiesSection() {
  const cases = [
    {
      client: "ANONYMIZED D2C CONSUMER BRAND",
      problem: "Rapid 120% YoY revenue growth coupled with severe cash conversion drag across quick-commerce sales channels.",
      analysis: "Granular SKU contribution margin teardown (CM1 to CM3) identified unmonitored vendor credit leakage.",
      model: "Dynamic 13-week rolling cash flow model integrating debtor recovery milestones.",
      decision: "Restructured distributor trade credit terms and aligned procurement batches with cash cycles.",
      outcome: "Compressed CCC from 84 to 42 days, unlocking ₹1.8 Cr in trapped liquidity without diluting equity.",
      metric: "42 Days CCC (-50%)"
    },
    {
      client: "ANONYMIZED B2B SAAS ENTERPRISE",
      problem: "Series A financial forecast broke during VC partner diligence due to un-reconciled cohort retention assumptions.",
      analysis: "Audited logo vs Net-Dollar-Retention (NDR) waterfalls and isolated expansion revenue drivers.",
      model: "Constructed FAST-standard 3-statement master model with dynamic sensitivity matrix.",
      decision: "Defended valuation parameters and gross margin unit economics directly in the partner data room.",
      outcome: "Successfully cleared institutional venture due diligence and closed $3.2M Series A round.",
      metric: "$3.2M Series A Closed"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            VERIFIED CASE STUDIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
            From problem to decision.
          </h2>
          <p className="text-base text-muted-foreground">
            All case studies are strictly anonymized under mutual Non-Disclosure covenants. Zero fabricated metrics.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-white border border-border flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">
                    {item.client}
                  </span>
                  <span className="text-xs font-bold text-secondary px-2 py-0.5 rounded bg-secondary-subtle">
                    {item.metric}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-primary uppercase">01 The Problem</div>
                  <p className="text-muted-foreground leading-relaxed">{item.problem}</p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-primary uppercase">02 The Analysis & Model</div>
                  <p className="text-muted-foreground leading-relaxed">{item.analysis} {item.model}</p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-primary uppercase">03 The Decision</div>
                  <p className="text-muted-foreground leading-relaxed">{item.decision}</p>
                </div>
              </div>

              <div className="p-4 rounded-md bg-secondary-subtle border border-secondary/20">
                <div className="text-[11px] font-bold text-secondary-dark uppercase tracking-wider">
                  04 The Outcome
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                  {item.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
