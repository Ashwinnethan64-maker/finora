import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FinoraIntelligencePreview() {
  return (
    <section className="py-20 sm:py-24 bg-fog border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist/50">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              FLAGSHIP PRODUCT
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
              Your financial world. <br />
              <span className="text-graphite">One intelligent view.</span>
            </h2>
          </div>
          <Link
            href="/portal"
            className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            Launch workbench portal <ArrowRight className="w-4 h-4 text-ember" />
          </Link>
        </div>

        {/* Flat White Product Dashboard Surface */}
        <div className="bg-paper rounded-xl border border-mist/70 p-6 sm:p-10 space-y-8">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-mist/40 text-xs">
            <div className="flex flex-wrap items-center gap-6 font-medium text-graphite">
              <span className="text-ink font-semibold border-b-2 border-ember pb-1">Overview</span>
              <span className="hover:text-ink cursor-pointer">Portfolio</span>
              <span className="hover:text-ink cursor-pointer">Cash Flow</span>
              <span className="hover:text-ink cursor-pointer">Assets</span>
              <span className="hover:text-ink cursor-pointer">Liabilities</span>
              <span className="hover:text-ink cursor-pointer">Scenarios</span>
            </div>
            <span className="px-2.5 py-1 rounded-tag bg-fog text-pewter text-[10px] font-semibold border border-mist/50">
              DEMO DATA ROOM
            </span>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-fog border border-mist/40 space-y-1">
              <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">Net Worth</div>
              <div className="font-sans text-2xl sm:text-3xl font-bold text-ink tabular-nums">₹85.4L</div>
              <div className="text-xs font-medium text-graphite">+18.4% YoY</div>
            </div>
            <div className="p-5 rounded-xl bg-fog border border-mist/40 space-y-1">
              <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">Total Assets</div>
              <div className="font-sans text-2xl sm:text-3xl font-bold text-ink tabular-nums">₹62.8L</div>
              <div className="text-xs text-pewter">Multi-Class</div>
            </div>
            <div className="p-5 rounded-xl bg-fog border border-mist/40 space-y-1">
              <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">Liquid Buffer</div>
              <div className="font-sans text-2xl sm:text-3xl font-bold text-ink tabular-nums">₹14.2L</div>
              <div className="text-xs text-pewter">13.1 Mo Forward</div>
            </div>
            <div className="p-5 rounded-xl bg-fog border border-mist/40 space-y-1">
              <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">Debtor CCC</div>
              <div className="font-sans text-2xl sm:text-3xl font-bold text-ink tabular-nums">38 Days</div>
              <div className="text-xs font-medium text-ember">-14 Days Compressed</div>
            </div>
          </div>

          {/* 13-Week Cash Telemetry Table */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between text-xs font-semibold text-ink">
              <span>13-Week Rolling Cash Telemetry</span>
              <span className="text-graphite font-normal">Runway: 13.1 Months</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-fog text-pewter uppercase border-y border-mist/40 font-semibold text-[10px]">
                  <tr>
                    <th className="p-3">Timeline</th>
                    <th className="p-3">Opening Cash</th>
                    <th className="p-3">Expected Inflow</th>
                    <th className="p-3">Disbursements</th>
                    <th className="p-3 text-right">Closing Runway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist/30 text-graphite tabular-nums">
                  <tr>
                    <td className="p-3 font-semibold text-ink">Week 01 (Current)</td>
                    <td className="p-3">₹22,60,000</td>
                    <td className="p-3 text-ink">+₹4,50,000</td>
                    <td className="p-3">-₹3,80,000</td>
                    <td className="p-3 text-right font-semibold text-ink">₹23,30,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink">Week 02</td>
                    <td className="p-3">₹23,30,000</td>
                    <td className="p-3 text-ink">+₹6,20,000</td>
                    <td className="p-3">-₹4,10,000</td>
                    <td className="p-3 text-right font-semibold text-ink">₹25,40,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink">Week 03</td>
                    <td className="p-3">₹25,40,000</td>
                    <td className="p-3 text-ink">+₹3,10,000</td>
                    <td className="p-3">-₹5,20,000</td>
                    <td className="p-3 text-right font-semibold text-ink">₹23,30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Link
              href="/portal"
              className="h-10 px-6 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
            >
              <span>Explore Finora Intelligence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
