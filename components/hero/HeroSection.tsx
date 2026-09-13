"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-paper text-ink py-16 sm:py-24 md:py-28 border-b border-mist/40 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Asymmetric Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-tag bg-fog border border-mist/50 text-graphite font-semibold text-xs tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ember"></span>
              <span>Financial Intelligence • Advisory • Research</span>
            </div>

            {/* Editorial H1 Headline */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tighter text-ink">
              Financial clarity for <span className="text-ember">better</span> decisions.
            </h1>

            {/* Supporting Value Proposition */}
            <p className="text-base sm:text-lg text-graphite leading-relaxed max-w-lg font-normal">
              Finora combines financial expertise, research, analytics and intelligent financial tools to help individuals and businesses understand their numbers, evaluate opportunities and make better-informed financial decisions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-ember hover:bg-ember-hover text-white font-medium text-sm rounded-xl transition-all active:scale-[0.98]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/intelligence"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-fog hover:bg-mist/30 text-ink font-medium text-sm rounded-xl transition-colors border border-mist/60"
              >
                <span>Explore Finora Intelligence</span>
                <ArrowUpRight className="w-4 h-4 text-graphite" />
              </Link>
            </div>

          </div>

          {/* Right Column: Flat Financial Intelligence Product Preview */}
          <div className="lg:col-span-6 bg-fog border border-mist/70 rounded-xl p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-mist/50">
              <div>
                <div className="font-bold text-xs uppercase tracking-wider text-ink">
                  FINORA INTELLIGENCE
                </div>
                <div className="text-xs text-graphite font-medium">
                  Financial Overview • Live Workbench
                </div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-tag bg-paper text-pewter border border-mist/60">
                DEMO DATA
              </span>
            </div>

            {/* 4 Flat Metric Blocks */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-paper border border-mist/40 space-y-1">
                <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">
                  Net Worth
                </div>
                <div className="font-sans text-2xl font-bold text-ink tabular-nums">
                  ₹24.8L
                </div>
                <div className="text-xs font-medium text-graphite flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-ember" /> +14.2% YoY
                </div>
              </div>

              <div className="p-4 rounded-xl bg-paper border border-mist/40 space-y-1">
                <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">
                  Investments
                </div>
                <div className="font-sans text-2xl font-bold text-ink tabular-nums">
                  ₹14.2L
                </div>
                <div className="text-xs text-pewter">
                  Multi-Asset
                </div>
              </div>

              <div className="p-4 rounded-xl bg-paper border border-mist/40 space-y-1">
                <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">
                  Liquidity
                </div>
                <div className="font-sans text-2xl font-bold text-ink tabular-nums">
                  ₹4.6L
                </div>
                <div className="text-xs text-pewter">
                  5.8 Mo Buffer
                </div>
              </div>

              <div className="p-4 rounded-xl bg-paper border border-mist/40 space-y-1">
                <div className="text-[11px] font-medium uppercase tracking-wider text-pewter">
                  Liabilities
                </div>
                <div className="font-sans text-2xl font-bold text-ink tabular-nums">
                  ₹6.1L
                </div>
                <div className="text-xs text-pewter">
                  Low Cost
                </div>
              </div>
            </div>

            {/* Asset Allocation Flat Bar */}
            <div className="space-y-2 pt-1">
              <div className="flex justify-between text-xs font-semibold text-ink">
                <span>Asset Allocation Profile</span>
                <span className="text-pewter font-normal">100% Reconciled</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-mist/30 flex overflow-hidden">
                <div style={{ width: "52%" }} className="bg-ink" title="Equities (52%)" />
                <div style={{ width: "24%" }} className="bg-ember" title="Debt (24%)" />
                <div style={{ width: "16%" }} className="bg-steel" title="Cash (16%)" />
                <div style={{ width: "8%" }} className="bg-mist" title="Alternatives (8%)" />
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] text-graphite pt-1">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-ink" /> Equities (52%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-ember" /> Debt (24%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-steel" /> Cash (16%)</span>
              </div>
            </div>

            {/* Financial Health Flat Box */}
            <div className="p-4 rounded-xl bg-paper border border-mist/60 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-pewter">
                  Financial Health
                </div>
                <div className="text-sm font-bold text-ink">
                  Strong Balance Sheet
                </div>
              </div>
              <Link
                href="/portal"
                className="text-xs font-semibold text-ember hover:underline"
              >
                Open Workbench →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
