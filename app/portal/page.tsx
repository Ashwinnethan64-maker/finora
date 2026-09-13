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
    <div className="min-h-screen bg-fog py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-mist/50 bg-paper p-6 rounded-xl border border-mist/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-medium text-graphite hover:text-ink flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Return to Hub
              </Link>
              <span className="text-xs text-pewter">•</span>
              <span className="text-xs font-bold text-ember">FINORA WORKBENCH</span>
            </div>
            <h1 className="font-sans font-bold text-xl sm:text-2xl text-ink">
              Apex Technologies Pvt Ltd
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-tag bg-fog text-xs font-semibold text-pewter border border-mist/50">
              DEMO DATA ROOM
            </span>
            <Link
              href="/consultation"
              className="px-4 py-2 rounded-xl bg-ink text-paper font-medium text-xs hover:bg-carbon transition-colors"
            >
              Request Live Integration
            </Link>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "overview" ? "bg-ink text-paper" : "bg-paper text-graphite hover:text-ink border border-mist/50"
            }`}
          >
            Overview & Balance Sheet
          </button>
          <button
            onClick={() => setActiveTab("cashflow")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "cashflow" ? "bg-ink text-paper" : "bg-paper text-graphite hover:text-ink border border-mist/50"
            }`}
          >
            13-Week Cash Telemetry
          </button>
          <button
            onClick={() => setActiveTab("scenarios")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === "scenarios" ? "bg-ink text-paper" : "bg-paper text-graphite hover:text-ink border border-mist/50"
            }`}
          >
            Scenario Sensitivity Simulator
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-paper border border-mist/60 space-y-1">
                <div className="text-[11px] font-medium text-pewter uppercase">Total Net Worth</div>
                <div className="font-sans text-2xl sm:text-3xl font-bold text-ink tabular-nums">₹85.4L</div>
                <div className="text-xs text-graphite font-medium">+18.4% YoY Growth</div>
              </div>

              <div className="p-6 rounded-xl bg-paper border border-mist/60 space-y-1">
                <div className="text-[11px] font-medium text-pewter uppercase">Liquid Cash Reserves</div>
                <div className="font-sans text-2xl sm:text-3xl font-bold text-ink tabular-nums">₹22.6L</div>
                <div className="text-xs text-pewter">13.1 Mo Forward Runway</div>
              </div>

              <div className="p-6 rounded-xl bg-paper border border-mist/60 space-y-1">
                <div className="text-[11px] font-medium text-pewter uppercase">Debtor Days (CCC)</div>
                <div className="font-sans text-2xl sm:text-3xl font-bold text-ember tabular-nums">38 Days</div>
                <div className="text-xs text-graphite font-medium">-14 Days Compressed</div>
              </div>

              <div className="p-6 rounded-xl bg-paper border border-mist/60 space-y-1">
                <div className="text-[11px] font-medium text-pewter uppercase">Financial Health</div>
                <div className="font-sans text-2xl sm:text-3xl font-bold text-ink">Strong</div>
                <div className="text-xs text-pewter">Diligence Ready</div>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="p-6 sm:p-8 rounded-xl bg-paper border border-mist/60 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-mist/40">
                <h2 className="font-sans font-bold text-base sm:text-lg text-ink">
                  Balance Sheet Capital Allocation
                </h2>
                <span className="text-xs text-pewter">Consolidated View</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold text-ink">
                  <span>Capital Distribution</span>
                  <span className="text-pewter font-normal">100% Reconciled</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-fog flex overflow-hidden border border-mist/30">
                  <div style={{ width: "55%" }} className="bg-ink" title="Operating Capital (55%)" />
                  <div style={{ width: "25%" }} className="bg-ember" title="Strategic Reserves (25%)" />
                  <div style={{ width: "20%" }} className="bg-steel" title="Short-Term Liquid (20%)" />
                </div>
                <div className="flex gap-6 text-xs text-graphite pt-1">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-ink" /> Operating Capital (55%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-ember" /> Strategic Reserves (25%)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-steel" /> Short-Term Liquid (20%)</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CASH FLOW TELEMETRY */}
        {activeTab === "cashflow" && (
          <div className="p-6 sm:p-8 rounded-xl bg-paper border border-mist/60 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-mist/40">
              <div>
                <h2 className="font-sans font-bold text-lg text-ink">
                  13-Week Rolling Cash Flow Telemetry
                </h2>
                <p className="text-xs text-graphite mt-0.5">
                  Reconciled weekly forward projection based on live debtor collections and disbursements.
                </p>
              </div>
              <span className="text-xs font-semibold text-ember px-2.5 py-1 rounded-tag bg-fog border border-mist/40">
                LIVE CONNECTED
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-fog text-pewter uppercase border-y border-mist/40 font-semibold text-[10px]">
                  <tr>
                    <th className="p-3">Timeline</th>
                    <th className="p-3">Opening Cash</th>
                    <th className="p-3">Expected Inflow</th>
                    <th className="p-3">Disbursements</th>
                    <th className="p-3">Closing Runway</th>
                    <th className="p-3 text-right">Net Buffer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist/30 text-graphite tabular-nums">
                  <tr>
                    <td className="p-3 font-semibold text-ink">Week 01 (Current)</td>
                    <td className="p-3">₹22,60,000</td>
                    <td className="p-3 text-ink">+₹4,50,000</td>
                    <td className="p-3">-₹3,80,000</td>
                    <td className="p-3 font-semibold text-ink">₹23,30,000</td>
                    <td className="p-3 text-right text-ember font-semibold">+₹70,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink">Week 02</td>
                    <td className="p-3">₹23,30,000</td>
                    <td className="p-3 text-ink">+₹6,20,000</td>
                    <td className="p-3">-₹4,10,000</td>
                    <td className="p-3 font-semibold text-ink">₹25,40,000</td>
                    <td className="p-3 text-right text-ember font-semibold">+₹2,10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-ink">Week 03</td>
                    <td className="p-3">₹25,40,000</td>
                    <td className="p-3 text-ink">+₹3,10,000</td>
                    <td className="p-3">-₹5,20,000</td>
                    <td className="p-3 font-semibold text-ink">₹23,30,000</td>
                    <td className="p-3 text-right text-pewter font-semibold">-₹2,10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: SCENARIOS */}
        {activeTab === "scenarios" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-paper border border-mist/60 space-y-6">
              <h2 className="font-sans font-bold text-lg text-ink">
                Runway & Growth Sensitivity Controls
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Monthly Gross Burn</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(burnRate)}</span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="3000000"
                    step="50000"
                    value={burnRate}
                    onChange={(e) => setBurnRate(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Target Debtor Collection Cycle</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{debtorDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="90"
                    step="5"
                    value={debtorDays}
                    onChange={(e) => setDebtorDays(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Monthly Revenue Growth Target</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{revenueGrowth}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={revenueGrowth}
                    onChange={(e) => setRevenueGrowth(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-paper border border-mist/60 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                  Simulated Forward Runway Output
                </div>
                <div className="font-sans text-4xl sm:text-5xl font-bold text-ink tabular-nums">
                  {computedRunway} <span className="text-xl text-pewter font-normal">Months</span>
                </div>
                <p className="text-xs text-graphite leading-relaxed">
                  Based on ₹85.4L liquid base capital, maintaining {debtorDays}-day debtor collections creates a resilient cash buffer through Q4.
                </p>
              </div>

              <Link
                href="/consultation"
                className="w-full py-2.5 rounded-xl bg-ember hover:bg-ember-hover text-white font-medium text-xs text-center transition-colors"
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
