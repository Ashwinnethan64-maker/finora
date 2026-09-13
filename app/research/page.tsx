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
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            FINORA RESEARCH
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            Institutional Research Desk
          </h1>
          <p className="text-base sm:text-lg text-graphite leading-relaxed">
            Empirical macroeconomic studies, sectoral valuation tear-sheets, and structural balance sheet benchmarks.
          </p>
        </div>

        {/* Flagship Study */}
        <div className="p-8 sm:p-12 rounded-xl bg-fog border border-mist/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-2.5 py-0.5 rounded-tag bg-paper text-ink text-[11px] font-bold uppercase tracking-wider border border-mist/50">
              {featured.category}
            </span>
            <div className="text-xs text-pewter">
              {featured.date} • {featured.readTime}
            </div>
          </div>

          <h2 className="font-sans font-bold text-2xl sm:text-4xl text-ink leading-tight">
            {featured.title}
          </h2>

          <p className="text-sm sm:text-base text-graphite leading-relaxed max-w-4xl">
            {featured.summary}
          </p>

          <div className="pt-6 border-t border-mist/40 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-paper p-6 rounded-xl border border-mist/40">
            <div>
              <div className="text-[11px] font-semibold text-pewter uppercase">Clusters Sampled</div>
              <div className="font-sans text-2xl font-bold text-ink mt-0.5 tabular-nums">420 Clusters</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-pewter uppercase">Median Trapped CCC</div>
              <div className="font-sans text-2xl font-bold text-ink mt-0.5 tabular-nums">64 Days</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-pewter uppercase">Debtor Over 90 Days</div>
              <div className="font-sans text-2xl font-bold text-ember mt-0.5 tabular-nums">38.4%</div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ember hover:bg-ember-hover text-white font-medium text-xs sm:text-sm transition-colors"
            >
              <span>Request Benchmark Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Other Notes */}
        <div className="space-y-6">
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink">
            Sectoral Valuation Tear-Sheets & Playbooks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((paper) => (
              <div
                key={paper.id}
                className="p-6 rounded-xl bg-fog border border-mist/60 flex flex-col justify-between space-y-4 hover:border-mist transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-pewter">
                    <span className="font-bold text-ink">{paper.category}</span>
                    <span>{paper.readTime}</span>
                  </div>
                  <h4 className="font-sans font-bold text-lg text-ink group-hover:text-ember transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-graphite leading-relaxed">
                    {paper.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-mist/30 flex items-center justify-between text-xs">
                  <span className="text-pewter">{paper.date}</span>
                  <Link href="/consultation" className="font-semibold text-ink group-hover:text-ember transition-colors">
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
