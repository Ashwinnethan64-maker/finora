import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESEARCH_DATA } from "@/lib/data";

export function FeaturedResearch() {
  const featured = RESEARCH_DATA.find((r) => r.featured) || RESEARCH_DATA[0];
  const others = RESEARCH_DATA.filter((r) => !r.featured);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              INSTITUTIONAL RESEARCH
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Finora Research & Insights
            </h2>
          </div>
          <Link
            href="/research"
            className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            Browse research library <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Editorial Featured Article */}
        <div className="p-8 sm:p-12 rounded-lg bg-muted border border-border space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3 py-1 rounded bg-primary text-white text-xs font-bold uppercase tracking-wider">
              {featured.category}
            </span>
            <div className="text-xs text-muted-foreground font-semibold">
              {featured.date} • {featured.readTime}
            </div>
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground leading-tight">
            {featured.title}
          </h3>

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
              <div className="text-xs font-bold text-muted-foreground uppercase">Debtors &gt; 90 Days</div>
              <div className="font-mono text-2xl font-extrabold text-danger mt-0.5">38.4%</div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/research"
              className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5"
            >
              Read Full Benchmark Report <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Research Note Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg bg-white border border-border flex flex-col justify-between space-y-4 hover:border-primary transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-bold text-primary">{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h4 className="font-display font-bold text-lg text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{item.date}</span>
                <Link href="/research" className="font-bold text-primary hover:underline">
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
