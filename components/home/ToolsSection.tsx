import React from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

export function ToolsSection() {
  const tools = [
    {
      name: "SIP & Wealth Accumulator",
      category: "PERSONAL FINANCE",
      desc: "Deterministic compounding engine with monthly contribution schedules and annualized rate modeling.",
      href: "/tools"
    },
    {
      name: "2-Stage DCF Valuation",
      category: "CORPORATE FINANCE",
      desc: "Gordon Growth DCF engine calculating enterprise values, WACC discount hurdles, and terminal multiples.",
      href: "/tools"
    },
    {
      name: "12-Month Runway & Burn",
      category: "BUSINESS OPERATIONS",
      desc: "Zero-cash date forecast reconciling net operating burn, collected revenues, and liquid safety buffers.",
      href: "/tools"
    },
    {
      name: "Break-Even & CM1 Analysis",
      category: "UNIT ECONOMICS",
      desc: "Fixed overhead absorption analysis computing volume thresholds and contribution margin percentages.",
      href: "/tools"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              FINANCIAL TOOLS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Simple models for <br />
              <span className="text-muted-foreground">better financial decisions.</span>
            </h2>
          </div>
          <Link
            href="/tools"
            className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            Launch all calculators <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Flat Computational Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-muted border border-border flex flex-col justify-between space-y-6 hover:border-primary transition-colors"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary px-2 py-0.5 rounded bg-primary-subtle block w-fit">
                  {tool.category}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <Link
                href={tool.href}
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1 pt-2 border-t border-border"
              >
                Open Calculator <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
