import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_DATA } from "@/lib/data";

export const metadata = {
  title: "Finora Research | Empirical Market Intelligence & SME Benchmarks",
  description: "Institutional equity research, sectoral valuation multiples, and the flagship India SME Financial Health Index."
};

export default function ResearchPage() {
  const featured = RESEARCH_DATA.find((r) => r.featured) || RESEARCH_DATA[0];
  const others = RESEARCH_DATA.filter((r) => !r.featured);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            FINORA RESEARCH & INSIGHTS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
            Institutional Research Desk
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Empirical macroeconomic studies, sectoral valuation tear-sheets, and structural balance sheet benchmarks.
          </p>
        </div>

        {/* Flagship Study */}
        <div className="p-8 sm:p-12 rounded-lg bg-muted border border-border space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3 py-1 rounded bg-primary text-white text-xs font-bold uppercase tracking-wider">
              {featured.category}
            </span>
            <div className="text-xs text-muted-foreground font-semibold">
              {featured.date} • {featured.readTime}
            </div>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground leading-tight">
            {featured.title}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
            {featured.summary}
          </p>

          <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 rounded-md border">
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase">Clusters Sampled</div>
              <div className="font-mono text-2xl font-extrabold text-foreground mt-0.5">420 Clusters</div>
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase">Median Trapped CCC</div>
              <div className="font-mono text-2xl font-extrabold text-primary mt-0.5">64 Days</div>
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase">Debtor Over 90 Days</div>
              <div className="font-mono text-2xl font-extrabold text-danger mt-0.5">38.4%</div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Request Benchmark Briefing →
            </Link>
          </div>
        </div>

        {/* Other Notes */}
        <div className="space-y-6">
          <h3 className="font-display font-bold text-2xl text-foreground">
            Sectoral Valuation Tear-Sheets & Playbooks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((paper) => (
              <div
                key={paper.id}
                className="p-6 rounded-lg bg-white border border-border flex flex-col justify-between space-y-4 hover:border-primary transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-bold text-primary">{paper.category}</span>
                    <span>{paper.readTime}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-foreground">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {paper.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{paper.date}</span>
                  <Link href="/consultation" className="font-bold text-primary hover:underline">
                    Read Note →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
