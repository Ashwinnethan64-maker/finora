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
    <section className="py-20 sm:py-24 bg-abyss text-paper border-b border-carbon">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-ember block">
            HOW FINORA WORKS
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-paper leading-tight tracking-tight">
            The 6-Stage Process
          </h2>
          <p className="text-sm text-steel">
            A controlled, repeatable protocol for rigorous corporate financial clarity.
          </p>
        </div>

        {/* 6 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-carbon border border-white/10 space-y-3 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans text-lg font-bold text-ember">
                  {step.num}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-steel">
                  STAGE {step.num}
                </span>
              </div>

              <h3 className="font-sans font-bold text-base uppercase text-paper tracking-wide">
                {step.title}
              </h3>

              <div className="text-xs font-semibold text-paper/90">
                {step.summary}
              </div>

              <p className="text-xs text-steel leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
