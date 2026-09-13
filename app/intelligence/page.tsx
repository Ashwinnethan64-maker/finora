import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, LineChart, Layers } from "lucide-react";

export const metadata = {
  title: "Finora Intelligence | Financial Operating System",
  description: "Continuous 13-week cash telemetry, multi-asset portfolio tracking, and reactive scenario simulations."
};

export default function IntelligencePage() {
  return (
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            FINORA INTELLIGENCE
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            Financial Management & Intelligence
          </h1>
          <p className="text-base sm:text-lg text-graphite leading-relaxed">
            Move from retrospective accounting to forward-looking operational clarity with continuous 13-week cash telemetry and scenario modeling.
          </p>
          <div className="pt-2">
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ember hover:bg-ember-hover text-white font-medium text-sm transition-colors"
            >
              <span>Open Workbench Sandbox</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Core SaaS Engines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl border border-mist/60 bg-fog space-y-4">
            <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-ember" />
            </div>
            <h2 className="font-sans font-bold text-lg text-ink">
              13-Week Cash Telemetry
            </h2>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Deterministic rolling cash forecasts reconciling debtor collections, payroll disbursements, and vendor credit terms.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-mist/60 bg-fog space-y-4">
            <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
              <LineChart className="w-4 h-4 text-ember" />
            </div>
            <h2 className="font-sans font-bold text-lg text-ink">
              Scenario Sensitivity Engine
            </h2>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Model Bull, Base, and Bear cases to instantly observe runway elasticity and required cash buffers before committing capital.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-mist/60 bg-fog space-y-4">
            <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
              <Layers className="w-4 h-4 text-ember" />
            </div>
            <h2 className="font-sans font-bold text-lg text-ink">
              Multi-Asset Portfolio Tracker
            </h2>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Consolidate listed equity, unlisted holdings, capital gains timelines, and debt instruments in one clean cockpit.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
