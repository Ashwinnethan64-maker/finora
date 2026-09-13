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
    <section className="py-20 sm:py-24 bg-paper border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            VERIFIED CASE STUDIES
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
            From problem to decision.
          </h2>
          <p className="text-sm text-graphite">
            All case studies are strictly anonymized under mutual Non-Disclosure covenants. Zero fabricated credentials.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-fog border border-mist/60 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-mist/40">
                  <span className="text-[11px] font-bold text-pewter uppercase tracking-wider">
                    {item.client}
                  </span>
                  <span className="text-xs font-semibold text-ink px-2 py-0.5 rounded-tag bg-paper border border-mist/50">
                    {item.metric}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="font-bold text-ink uppercase text-[11px]">THE PROBLEM</div>
                  <p className="text-graphite leading-relaxed">{item.problem}</p>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="font-bold text-ink uppercase text-[11px]">THE ANALYSIS & MODEL</div>
                  <p className="text-graphite leading-relaxed">{item.analysis} {item.model}</p>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="font-bold text-ink uppercase text-[11px]">THE DECISION</div>
                  <p className="text-graphite leading-relaxed">{item.decision}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-paper border border-mist/60 space-y-1">
                <div className="text-[10px] font-bold text-pewter uppercase tracking-wider">
                  THE OUTCOME
                </div>
                <div className="text-xs sm:text-sm font-semibold text-ink">
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
