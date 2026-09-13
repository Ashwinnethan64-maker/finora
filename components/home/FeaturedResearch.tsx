import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_DATA } from "@/lib/data";

export function FeaturedResearch() {
  const featured = RESEARCH_DATA.find((r) => r.featured) || RESEARCH_DATA[0];
  const others = RESEARCH_DATA.filter((r) => !r.featured);

  return (
    <section className="py-20 sm:py-24 bg-fog border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist/50">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              FINANCIAL RESEARCH
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
              FINORA Research
            </h2>
          </div>
          <Link
            href="/research"
            className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            Browse research library <ArrowRight className="w-4 h-4 text-ember" />
          </Link>
        </div>

        {/* Large Editorial Featured Article */}
        <div className="p-8 sm:p-10 rounded-xl bg-paper border border-mist/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-2.5 py-0.5 rounded-tag bg-fog text-ink text-[11px] font-bold uppercase tracking-wider border border-mist/50">
              {featured.category}
            </span>
            <div className="text-xs text-pewter">
              {featured.date} • {featured.readTime}
            </div>
          </div>

          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink leading-snug">
            {featured.title}
          </h3>

          <p className="text-sm text-graphite leading-relaxed max-w-4xl">
            {featured.summary}
          </p>

          <div className="pt-6 border-t border-mist/40 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-fog p-5 rounded-xl border border-mist/30">
            <div>
              <div className="text-[11px] font-semibold text-pewter uppercase">Clusters Sampled</div>
              <div className="font-sans text-xl font-bold text-ink mt-0.5 tabular-nums">420 Clusters</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-pewter uppercase">Median Trapped CCC</div>
              <div className="font-sans text-xl font-bold text-ink mt-0.5 tabular-nums">64 Days</div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-pewter uppercase">Debtors &gt; 90 Days</div>
              <div className="font-sans text-xl font-bold text-ember mt-0.5 tabular-nums">38.4%</div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/research"
              className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Read Full Report</span>
              <ArrowRight className="w-4 h-4 text-ember" />
            </Link>
          </div>
        </div>

        {/* Research Note Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {others.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-paper border border-mist/60 flex flex-col justify-between space-y-4 hover:border-mist transition-colors group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-pewter">
                  <span className="font-bold text-ink">{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h4 className="font-sans font-bold text-base text-ink group-hover:text-ember transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-graphite leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-mist/30 flex items-center justify-between text-xs">
                <span className="text-pewter">{item.date}</span>
                <Link href="/research" className="font-semibold text-ink group-hover:text-ember transition-colors">
                  Read Note →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
