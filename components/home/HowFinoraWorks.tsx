import React from "react";

export function HowFinoraWorks() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      summary: "Understand the core strategic decision.",
      detail: "Mutual NDA execution, financial ledger ingestion, and scoping of critical decision constraints."
    },
    {
      num: "02",
      title: "DIAGNOSE",
      summary: "Analyze the numbers thoroughly.",
      detail: "72-hour mathematical audit of working capital drag, debtor aging, and unit margin leakages."
    },
    {
      num: "03",
      title: "MODEL",
      summary: "Build dynamic scenario models.",
      detail: "Constructing 3-statement forecast architectures with Bull, Base, and Bear sensitivity toggles."
    },
    {
      num: "04",
      title: "RECOMMEND",
      summary: "Present decision options.",
      detail: "Executive decision briefing detailing concrete capital restructuring and tax-optimized roadmaps."
    },
    {
      num: "05",
      title: "IMPLEMENT",
      summary: "Support execution & defense.",
      detail: "Active defense in VC due diligence rooms, bank CMA syndication, or data room integration."
    },
    {
      num: "06",
      title: "REVIEW",
      summary: "Measure & refine continuously.",
      detail: "Continuous 13-week rolling cash flow OS, monthly variance telemetry, and board packs."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-dark text-white border-b border-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent block">
            THE 6-STAGE PROTOCOL
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
            How Finora works.
          </h2>
        </div>

        {/* 6 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-dark-surface border border-dark-muted space-y-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-extrabold text-accent">
                  {step.num}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-dark-foreground/60">
                  STAGE {step.num}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl uppercase text-white">
                {step.title}
              </h3>

              <div className="text-xs font-bold text-white/90">
                {step.summary}
              </div>

              <p className="text-xs text-dark-foreground/80 leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
