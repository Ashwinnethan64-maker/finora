"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-primary text-white py-16 sm:py-24 md:py-28 relative overflow-hidden">
      
      {/* Decorative Low-Opacity Flat Geometry */}
      <div className="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute left-1/3 -bottom-24 w-72 h-72 rounded-full bg-black/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Blue Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/10 text-white font-semibold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>Financial Intelligence • Advisory • Research</span>
            </div>

            {/* Massive H1 Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Financial intelligence for <span className="text-accent underline decoration-white/40 decoration-4 underline-offset-8">better decisions.</span>
            </h1>

            {/* Supporting Value Prop */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl font-normal">
              Finora combines financial expertise, analytical tools and research to help individuals and businesses understand their numbers, evaluate opportunities and make better decisions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-white hover:bg-muted text-primary font-bold text-base rounded-md transition-all active:scale-98"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </Link>

              <Link
                href="/intelligence"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-primary-dark hover:bg-black/20 text-white font-bold text-base rounded-md transition-colors border border-white/20"
              >
                <span>Explore Finora Intelligence</span>
                <ArrowUpRight className="w-5 h-5 text-white/70" />
              </Link>
            </div>

          </div>

          {/* Right Column: Flat Financial Intelligence Product Preview */}
          <div className="lg:col-span-5 bg-white text-foreground rounded-lg p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <div className="font-extrabold text-sm text-foreground uppercase tracking-wide">
                  Finora Intelligence
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  Financial Overview • Demo Sandbox
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                Demo Data
              </span>
            </div>

            {/* 4 Flat Metric Blocks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-muted space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Net Worth
                </div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  ₹24.8L
                </div>
                <div className="text-xs font-semibold text-secondary flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +14.2% YoY
                </div>
              </div>

              <div className="p-4 rounded-md bg-muted space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Investments
                </div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  ₹14.2L
                </div>
                <div className="text-xs text-muted-foreground">
                  Multi-Asset
                </div>
              </div>

              <div className="p-4 rounded-md bg-muted space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Liquidity
                </div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  ₹4.6L
                </div>
                <div className="text-xs text-muted-foreground">
                  5.8 Mo Buffer
                </div>
              </div>

              <div className="p-4 rounded-md bg-muted space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Liabilities
                </div>
                <div className="font-mono text-2xl font-bold text-foreground">
                  ₹6.1L
                </div>
                <div className="text-xs text-muted-foreground">
                  Low Cost
                </div>
              </div>
            </div>

            {/* Asset Allocation Flat Bar */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between text-xs font-bold text-foreground">
                <span>Asset Allocation Profile</span>
                <span className="text-muted-foreground font-normal">100% Reconciled</span>
              </div>
              <div className="w-full h-3 rounded bg-muted flex overflow-hidden">
                <div style={{ width: "52%" }} className="bg-primary" title="Equities (52%)" />
                <div style={{ width: "24%" }} className="bg-secondary" title="Debt (24%)" />
                <div style={{ width: "16%" }} className="bg-accent" title="Cash (16%)" />
                <div style={{ width: "8%" }} className="bg-muted-foreground" title="Alternatives (8%)" />
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-primary" /> Equities (52%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-secondary" /> Debt (24%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-accent" /> Cash (16%)</span>
              </div>
            </div>

            {/* Financial Health Flat Box */}
            <div className="p-4 rounded-md bg-secondary-subtle border border-secondary/20 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-secondary-dark">
                  Financial Health
                </div>
                <div className="text-base font-extrabold text-foreground">
                  Strong Balance Sheet
                </div>
              </div>
              <Link
                href="/portal"
                className="text-xs font-bold text-primary hover:underline"
              >
                Open OS →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
