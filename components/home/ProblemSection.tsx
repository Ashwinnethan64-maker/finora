import React from "react";

export function ProblemSection() {
  const blocks = [
    {
      num: "01",
      title: "UNDERSTAND",
      subtitle: "Make financial information easier to understand.",
      description: "Deconstruct fragmented ledgers, multi-branch reports, and retrospective accounting into clear, structured financial intelligence.",
      accent: "text-ink"
    },
    {
      num: "02",
      title: "ANALYSE",
      subtitle: "Turn financial information into useful analysis.",
      description: "Build dynamic 3-statement models, 13-week rolling cash telemetry, and empirical peer comps that withstand institutional diligence.",
      accent: "text-ink"
    },
    {
      num: "03",
      title: "DECIDE",
      subtitle: "Use better information to make better decisions.",
      description: "Evaluate capital raises, optimize debt structures, compress trapped working capital, and allocate resources with conviction.",
      accent: "text-ink"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-paper border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            THE FINANCIAL REALITY
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
            The numbers are there. <br />
            <span className="text-graphite">The clarity isn&apos;t.</span>
          </h2>
        </div>

        {/* Three Flat Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block) => (
            <div
              key={block.num}
              className="p-8 rounded-xl bg-fog border border-mist/50 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-pewter tracking-wider">
                    STEP {block.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-ember"></span>
                </div>
                <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-ink">
                  {block.title}
                </h3>
                <div className="text-sm font-semibold text-ink">
                  {block.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
