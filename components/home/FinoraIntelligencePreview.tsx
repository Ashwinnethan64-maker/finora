import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function FinoraIntelligencePreview() {
  return (
    <section className="py-20 sm:py-28 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              FINORA INTELLIGENCE & OS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Your financial world. <br />
              <span className="text-muted-foreground">One intelligent view.</span>
            </h2>
          </div>
          <Link
            href="/portal"
            className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            Launch live portal sandbox <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Flat White Product Dashboard Surface */}
        <div className="bg-white rounded-lg border border-border p-8 sm:p-12 space-y-10">
          
          {/* Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border text-xs font-bold uppercase tracking-wider">
            <div className="flex flex-wrap items-center gap-6">
              <span className="text-primary border-b-2 border-primary pb-1">Overview</span>
              <span className="text-muted-foreground hover:text-foreground cursor-pointer">Portfolio</span>
              <span className="text-muted-foreground hover:text-foreground cursor-pointer">Cash Flow</span>
              <span className="text-muted-foreground hover:text-foreground cursor-pointer">Business KPIs</span>
              <span className="text-muted-foreground hover:text-foreground cursor-pointer">Scenarios</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-muted text-muted-foreground text-[10px] font-mono">
              DEMO DATA ROOM
            </span>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-md bg-muted space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Net Worth</div>
              <div className="font-mono text-3xl font-extrabold text-foreground">₹85.4L</div>
              <div className="text-xs font-semibold text-secondary">+18.4% YoY</div>
            </div>
            <div className="p-6 rounded-md bg-muted space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Total Assets</div>
              <div className="font-mono text-3xl font-extrabold text-foreground">₹62.8L</div>
              <div className="text-xs text-muted-foreground">Multi-Class</div>
            </div>
            <div className="p-6 rounded-md bg-muted space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Liquid Buffer</div>
              <div className="font-mono text-3xl font-extrabold text-foreground">₹14.2L</div>
              <div className="text-xs text-muted-foreground">13.1 Mo Forward</div>
            </div>
            <div className="p-6 rounded-md bg-muted space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Debtor CCC</div>
              <div className="font-mono text-3xl font-extrabold text-primary">38 Days</div>
              <div className="text-xs font-semibold text-secondary">-14 Days Compressed</div>
            </div>
          </div>

          {/* 13-Week Cash Telemetry Table */}
          <div className="space-y-4 pt-4 border-t border-border">
            <div className="flex justify-between text-xs font-bold text-foreground">
              <span>13-Week Rolling Cash Flow Telemetry</span>
              <span className="text-primary">Runway: 13.1 Months</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted text-muted-foreground uppercase border-b border-border font-bold">
                  <tr>
                    <th className="p-3">Timeline</th>
                    <th className="p-3">Opening Cash</th>
                    <th className="p-3">Expected Inflow</th>
                    <th className="p-3">Disbursements</th>
                    <th className="p-3 text-right">Closing Buffer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-mono">
                  <tr>
                    <td className="p-3 font-bold text-foreground">Week 01 (Current)</td>
                    <td className="p-3">₹22,60,000</td>
                    <td className="p-3 text-secondary">+₹4,50,000</td>
                    <td className="p-3 text-danger">-₹3,80,000</td>
                    <td className="p-3 text-right font-bold text-primary">₹23,30,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-foreground">Week 02</td>
                    <td className="p-3">₹23,30,000</td>
                    <td className="p-3 text-secondary">+₹6,20,000</td>
                    <td className="p-3 text-danger">-₹4,10,000</td>
                    <td className="p-3 text-right font-bold text-primary">₹25,40,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-foreground">Week 03</td>
                    <td className="p-3">₹25,40,000</td>
                    <td className="p-3 text-secondary">+₹3,10,000</td>
                    <td className="p-3 text-danger">-₹5,20,000</td>
                    <td className="p-3 text-right font-bold text-primary">₹23,30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/portal"
              className="h-12 px-7 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm inline-flex items-center gap-2 transition-all"
            >
              Explore Finora Intelligence →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
