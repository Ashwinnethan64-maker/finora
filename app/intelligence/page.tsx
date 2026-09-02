import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, LineChart, Layers } from "lucide-react";

export const metadata = {
  title: "Finora Intelligence | Autonomous Financial Operating System",
  description: "Continuous 13-week cash telemetry, multi-asset portfolio tracking, and reactive scenario simulations."
};

export default function IntelligencePage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            FINORA INTELLIGENCE & OS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
            Financial Management SaaS Platform
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Move from retrospective accounting to forward-looking operational clarity with continuous 13-week cash telemetry and scenario modeling.
          </p>
          <div className="pt-2">
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors"
            >
              Open Live Client Portal Sandbox →
            </Link>
          </div>
        </div>

        {/* 3 Core SaaS Engines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-border bg-muted space-y-4">
            <div className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-xl text-foreground">
              13-Week Cash Telemetry
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Deterministic rolling cash forecasts reconciling debtor collections, payroll burns, and vendor credit terms in real time.
            </p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-muted space-y-4">
            <div className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center">
              <LineChart className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-xl text-foreground">
              Scenario Sensitivity Engine
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Model Bull, Base, and Bear cases to instantly observe runway elasticity and required cash buffers before committing capital.
            </p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-muted space-y-4">
            <div className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-xl text-foreground">
              Multi-Asset Portfolio Tracker
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Consolidate listed equity, unlisted venture holdings, Section 54F property timelines, and debt instruments in one clean cockpit.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
