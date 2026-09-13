import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ToolsSection() {
  const tools = [
    {
      name: "SIP & Wealth Accumulator",
      category: "PERSONAL",
      desc: "Deterministic compounding engine with monthly contribution schedules and annualized rate modeling.",
      href: "/tools"
    },
    {
      name: "2-Stage DCF Valuation",
      category: "CORPORATE",
      desc: "Gordon Growth DCF engine calculating enterprise values, WACC discount hurdles, and terminal multiples.",
      href: "/tools"
    },
    {
      name: "12-Month Runway & Burn",
      category: "BUSINESS",
      desc: "Zero-cash date forecast reconciling net operating burn, collected revenues, and liquid safety buffers.",
      href: "/tools"
    },
    {
      name: "Break-Even & CM1 Analysis",
      category: "RESEARCH",
      desc: "Fixed overhead absorption analysis computing volume thresholds and contribution margin percentages.",
      href: "/tools"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-paper border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist/50">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              FINORA TOOLS
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
              Simple financial models <br />
              <span className="text-graphite">for better decisions.</span>
            </h2>
          </div>
          <Link
            href="/tools"
            className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            Launch all calculators <ArrowRight className="w-4 h-4 text-ember" />
          </Link>
        </div>

        {/* 4 Flat Computational Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-fog border border-mist/50 flex flex-col justify-between space-y-6 hover:border-mist transition-colors group"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pewter px-2 py-0.5 rounded-tag bg-paper border border-mist/40 block w-fit">
                  {tool.category}
                </span>
                <h3 className="font-sans font-bold text-lg text-ink group-hover:text-ember transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-graphite leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <Link
                href={tool.href}
                className="text-xs font-semibold text-ink group-hover:text-ember inline-flex items-center gap-1 pt-3 border-t border-mist/30 transition-colors"
              >
                <span>Open Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-ember group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
