"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "cashflow" | "scenarios">("overview");

  // Scenario Simulation State
  const [revenueGrowth, setRevenueGrowth] = useState(15);
  const [debtorDays, setDebtorDays] = useState(45);
  const [burnRate, setBurnRate] = useState(650000);

  const baseCash = 8500000;
  const computedRunway = (baseCash / burnRate).toFixed(1);

  return (
    <div className="min-h-screen bg-muted py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border bg-white p-6 rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Return to Public Hub
              </Link>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs font-bold text-primary">FINORA OS v2.4</span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground">
              Good morning, Apex Technologies Pvt Ltd
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-muted text-xs font-mono font-bold text-muted-foreground border border-border">
              DEMO DATA ROOM
            </span>
            <Link
              href="/consultation"
              className="px-4 py-2 rounded-md bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-colors"
            >
              Request Live Integration
            </Link>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
              activeTab === "overview" ? "bg-primary text-white" : "bg-white text-foreground hover:bg-muted-dark border border-border"
            }`}
          >
            Overview & Balance Sheet
          </button>
          <button
            onClick={() => setActiveTab("cashflow")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
              activeTab === "cashflow" ? "bg-primary text-white" : "bg-white text-foreground hover:bg-muted-dark border border-border"
            }`}
          >
            13-Week Cash Telemetry
          </button>
          <button
            onClick={() => setActiveTab("scenarios")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
              activeTab === "scenarios" ? "bg-primary text-white" : "bg-white text-foreground hover:bg-muted-dark border border-border"
            }`}
          >
            Scenario Sensitivity Simulator
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-white border border-border space-y-1">
                <div className="text-xs font-bold text-muted-foreground uppercase">Total Net Worth</div>
                <div className="font-mono text-3xl font-extrabold text-foreground">₹85.4L</div>
                <div className="text-xs text-secondary font-bold">+18.4% YoY Growth</div>
              </div>

              <div className="p-6 rounded-lg bg-white border border-border space-y-1">
                <div className="text-xs font-bold text-muted-foreground uppercase">Liquid Cash Reserves</div>
                <div className="font-mono text-3xl font-extrabold text-foreground">₹22.6L</div>
                <div className="text-xs text-muted-foreground font-semibold">13.1 Mo Forward Runway</div>
              </div>

              <div className="p-6 rounded-lg bg-white border border-border space-y-1">
                <div className="text-xs font-bold text-muted-foreground uppercase">Debtor Days (CCC)</div>
                <div className="font-mono text-3xl font-extrabold text-primary">38 Days</div>
                <div className="text-xs text-secondary font-bold">-14 Days Compressed</div>
              </div>

              <div className="p-6 rounded-lg bg-white border border-border space-y-1">
                <div className="text-xs font-bold text-muted-foreground uppercase">Financial Health</div>
                <div className="font-mono text-3xl font-extrabold text-secondary">Grade A</div>
                <div className="text-xs text-muted-foreground">VC Diligence Audit Ready</div>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="p-6 sm:p-8 rounded-lg bg-white border border-border space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <h2 className="font-display font-extrabold text-lg text-foreground">
                  Balance Sheet Capital Allocation
                </h2>
                <span className="text-xs font-semibold text-muted-foreground">Consolidated View</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-foreground">
                  <span>Capital Distribution</span>
                  <span>100% Reconciled</span>
                </div>
                <div className="w-full h-3 rounded bg-muted flex overflow-hidden">
                  <div style={{ width: "55%" }} className="bg-primary" title="Operating Capital (55%)" />
                  <div style={{ width: "25%" }} className="bg-accent" title="Strategic Reserves (25%)" />
                  <div style={{ width: "20%" }} className="bg-secondary" title="Short-Term Liquid (20%)" />
                </div>
                <div className="flex gap-6 text-xs text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-primary" /> Operating Capital (55%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-accent" /> Strategic Reserves (25%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-secondary" /> Short-Term Liquid (20%)</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CASH FLOW TELEMETRY */}
        {activeTab === "cashflow" && (
          <div className="p-8 rounded-lg bg-white border border-border space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <h2 className="font-display font-extrabold text-xl text-foreground">
                  13-Week Rolling Cash Flow Telemetry
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Reconciled weekly forward projection based on live debtor collections and disbursements.
                </p>
              </div>
              <span className="text-xs font-bold text-secondary px-2.5 py-1 rounded bg-secondary-subtle">
                LIVE CONNECTED
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted text-muted-foreground uppercase border-b border-border font-bold">
                  <tr>
                    <th className="p-3">Timeline</th>
                    <th className="p-3">Opening Cash</th>
                    <th className="p-3">Expected Inflow</th>
                    <th className="p-3">Disbursements</th>
                    <th className="p-3">Closing Runway</th>
                    <th className="p-3 text-right">Net Buffer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-mono">
                  <tr>
                    <td className="p-3 font-bold text-foreground">Week 01 (Current)</td>
                    <td className="p-3">₹22,60,000</td>
                    <td className="p-3 text-secondary">+₹4,50,000</td>
                    <td className="p-3 text-danger">-₹3,80,000</td>
                    <td className="p-3 font-bold">₹23,30,000</td>
                    <td className="p-3 text-right text-secondary font-bold">+₹70,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-foreground">Week 02</td>
                    <td className="p-3">₹23,30,000</td>
                    <td className="p-3 text-secondary">+₹6,20,000</td>
                    <td className="p-3 text-danger">-₹4,10,000</td>
                    <td className="p-3 font-bold">₹25,40,000</td>
                    <td className="p-3 text-right text-secondary font-bold">+₹2,10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-foreground">Week 03</td>
                    <td className="p-3">₹25,40,000</td>
                    <td className="p-3 text-secondary">+₹3,10,000</td>
                    <td className="p-3 text-danger">-₹5,20,000</td>
                    <td className="p-3 font-bold">₹23,30,000</td>
                    <td className="p-3 text-right text-danger font-bold">-₹2,10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: SCENARIOS */}
        {activeTab === "scenarios" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            <div className="lg:col-span-6 p-8 rounded-lg bg-white border border-border space-y-6">
              <h2 className="font-display font-extrabold text-xl text-foreground">
                Runway & Growth Sensitivity Controls
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Monthly Gross Burn</span>
                    <span className="font-mono text-primary font-bold">{formatINR(burnRate)}</span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="3000000"
                    step="50000"
                    value={burnRate}
                    onChange={(e) => setBurnRate(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Target Debtor Collection Cycle</span>
                    <span className="font-mono text-primary font-bold">{debtorDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="90"
                    step="5"
                    value={debtorDays}
                    onChange={(e) => setDebtorDays(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Monthly Revenue Growth Target</span>
                    <span className="font-mono text-primary font-bold">{revenueGrowth}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={revenueGrowth}
                    onChange={(e) => setRevenueGrowth(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-lg bg-white border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Simulated Forward Runway Output
                </div>
                <div className="font-mono text-5xl font-extrabold text-primary">
                  {computedRunway} Months
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Based on ₹85.4L liquid base capital, maintaining {debtorDays}-day debtor collections creates a resilient cash buffer through Q4.
                </p>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3.5 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                Schedule Executive Scenario Review →
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
