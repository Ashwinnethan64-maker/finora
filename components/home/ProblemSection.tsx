import React from "react";
import { ArrowRight } from "lucide-react";

export function ProblemSection() {
  const blocks = [
    {
      num: "01",
      title: "UNDERSTAND",
      subtitle: "Turn financial data into structured clarity.",
      description: "We deconstruct fragmented ledgers, multi-branch MIS reports, and retrospective Tally entries into forward-looking financial intelligence.",
      color: "bg-primary-subtle text-primary border-primary/20",
      accent: "text-primary"
    },
    {
      num: "02",
      title: "ANALYSE",
      subtitle: "Build models & research that reveal what matters.",
      description: "Granular cohort unit economics (CM1 to CM3), 13-week rolling cash telemetry, and empirical peer comps that withstand institutional diligence.",
      color: "bg-secondary-subtle text-secondary-dark border-secondary/20",
      accent: "text-secondary-dark"
    },
    {
      num: "03",
      title: "DECIDE",
      subtitle: "Execute high-conviction strategic decisions.",
      description: "Close venture rounds, restructure debt syndication terms, compress trapped debtor cycles, and legally optimize Section 54F tax liquidity.",
      color: "bg-accent-subtle text-accent-dark border-accent/20",
      accent: "text-accent-dark"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            THE REALITY OF FINANCIAL MANAGEMENT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
            The numbers are there. <br />
            <span className="text-muted-foreground">The clarity isn't.</span>
          </h2>
        </div>

        {/* Three Large Flat Color Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => (
            <div
              key={block.num}
              className={`p-8 sm:p-10 rounded-lg border ${block.color} flex flex-col justify-between space-y-8`}
            >
              <div className="space-y-4">
                <span className={`font-mono text-xl font-black ${block.accent}`}>
                  {block.num}
                </span>
                <h3 className={`font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight ${block.accent}`}>
                  {block.title}
                </h3>
                <div className="text-sm font-bold text-foreground">
                  {block.subtitle}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
