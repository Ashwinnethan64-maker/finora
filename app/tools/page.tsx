"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { calculateSIP, calculateDCF, calculateRunway, calculateBreakEven } from "@/lib/calculations";
import { formatINR } from "@/lib/utils";

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<"sip" | "dcf" | "runway" | "breakeven">("sip");

  // SIP State
  const [sipMonthly, setSipMonthly] = useState(25000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const sipResult = calculateSIP(sipMonthly, sipRate, sipYears);

  // DCF State
  const [dcfCF, setDcfCF] = useState(5000000);
  const [dcfGrowth, setDcfGrowth] = useState(18);
  const [dcfTerminal, setDcfTerminal] = useState(4.5);
  const [dcfWacc, setDcfWacc] = useState(13.5);
  const dcfResult = calculateDCF(dcfCF, dcfGrowth, dcfTerminal, dcfWacc);

  // Runway State
  const [cashBalance, setCashBalance] = useState(15000000);
  const [monthlyRev, setMonthlyRev] = useState(1200000);
  const [monthlyExp, setMonthlyExp] = useState(2400000);
  const runwayResult = calculateRunway(cashBalance, monthlyRev, monthlyExp);

  // Break-Even State
  const [fixedCosts, setFixedCosts] = useState(600000);
  const [unitPrice, setUnitPrice] = useState(1500);
  const [unitCost, setUnitCost] = useState(600);
  const breakEvenResult = calculateBreakEven(fixedCosts, unitPrice, unitCost);

  return (
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            FINORA TOOLS
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            Financial Computational Tools
          </h1>
          <p className="text-base sm:text-lg text-graphite leading-relaxed">
            Deterministic mathematical models with slider controls, verified assumptions, and instant calculations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-mist/40">
          <button
            onClick={() => setActiveTab("sip")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "sip" ? "bg-ink text-paper" : "bg-fog text-graphite hover:text-ink hover:bg-mist/30 border border-mist/40"
            }`}
          >
            SIP & Wealth Accumulator
          </button>
          <button
            onClick={() => setActiveTab("dcf")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "dcf" ? "bg-ink text-paper" : "bg-fog text-graphite hover:text-ink hover:bg-mist/30 border border-mist/40"
            }`}
          >
            2-Stage DCF Valuation
          </button>
          <button
            onClick={() => setActiveTab("runway")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "runway" ? "bg-ink text-paper" : "bg-fog text-graphite hover:text-ink hover:bg-mist/30 border border-mist/40"
            }`}
          >
            Runway & Cash Burn
          </button>
          <button
            onClick={() => setActiveTab("breakeven")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "breakeven" ? "bg-ink text-paper" : "bg-fog text-graphite hover:text-ink hover:bg-mist/30 border border-mist/40"
            }`}
          >
            Break-Even & CM1
          </button>
        </div>

        {/* 1. SIP CALCULATOR */}
        {activeTab === "sip" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-xl border border-mist/60 bg-fog">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-ink">
                Systematic Investment Plan (SIP)
              </h2>

              <div className="space-y-4 bg-paper p-6 rounded-xl border border-mist/50">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Monthly Investment</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(sipMonthly)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Expected Return Rate</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{sipRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Investment Horizon</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{sipYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>
              </div>

              <div className="text-xs text-graphite bg-paper p-4 rounded-xl border border-mist/40">
                <strong>Formula: </strong> FV = P × [ (1 + i)^n - 1 ] / i × (1 + i), compounded monthly.
              </div>
            </div>

            <div className="lg:col-span-6 bg-paper p-8 rounded-xl border border-mist/60 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                    Total Estimated Wealth
                  </div>
                  <div className="font-sans text-3xl sm:text-4xl font-bold text-ink mt-1 tabular-nums">
                    {formatINR(sipResult.totalWealth)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-mist/30">
                  <div>
                    <div className="text-xs text-pewter">Total Invested</div>
                    <div className="font-sans text-lg font-bold text-ink mt-0.5 tabular-nums">
                      {formatINR(sipResult.totalInvested)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-pewter">Wealth Gained</div>
                    <div className="font-sans text-lg font-bold text-ember mt-0.5 tabular-nums">
                      +{formatINR(sipResult.wealthGained)}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs text-center transition-colors"
              >
                Structure Custom Wealth Model →
              </Link>
            </div>
          </div>
        )}

        {/* 2. DCF VALUATION */}
        {activeTab === "dcf" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-xl border border-mist/60 bg-fog">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-ink">
                2-Stage DCF Valuation Engine
              </h2>

              <div className="space-y-4 bg-paper p-6 rounded-xl border border-mist/50">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Base Year Free Cash Flow</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(dcfCF)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={dcfCF}
                    onChange={(e) => setDcfCF(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>5-Year CAGR Forecast</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{dcfGrowth}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={dcfGrowth}
                    onChange={(e) => setDcfGrowth(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Discount Rate (WACC)</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{dcfWacc}%</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="25"
                    step="0.5"
                    value={dcfWacc}
                    onChange={(e) => setDcfWacc(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-paper p-8 rounded-xl border border-mist/60 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                    Estimated Enterprise Value (EV)
                  </div>
                  <div className="font-sans text-3xl sm:text-4xl font-bold text-ink mt-1 tabular-nums">
                    {formatINR(dcfResult.enterpriseValue)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-mist/30">
                  <div>
                    <div className="text-xs text-pewter">PV of 5-Yr Cash Flows</div>
                    <div className="font-sans text-base font-bold text-ink mt-0.5 tabular-nums">
                      {formatINR(dcfResult.pvExplicit)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-pewter">PV of Terminal Value</div>
                    <div className="font-sans text-base font-bold text-ink mt-0.5 tabular-nums">
                      {formatINR(dcfResult.pvTerminal)}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs text-center transition-colors"
              >
                Request Defensible Valuation Sprint →
              </Link>
            </div>
          </div>
        )}

        {/* 3. RUNWAY CALCULATOR */}
        {activeTab === "runway" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-xl border border-mist/60 bg-fog">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-ink">
                Runway & Cash Burn Calculator
              </h2>

              <div className="space-y-4 bg-paper p-6 rounded-xl border border-mist/50">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Current Cash Balance</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(cashBalance)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={cashBalance}
                    onChange={(e) => setCashBalance(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Monthly Operating Expenses</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(monthlyExp)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="20000000"
                    step="100000"
                    value={monthlyExp}
                    onChange={(e) => setMonthlyExp(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Monthly Collected Revenue</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(monthlyRev)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    step="100000"
                    value={monthlyRev}
                    onChange={(e) => setMonthlyRev(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-paper p-8 rounded-xl border border-mist/60 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                    Estimated Runway
                  </div>
                  <div className="font-sans text-3xl sm:text-4xl font-bold text-ink mt-1 tabular-nums">
                    {runwayResult.runwayMonths} {runwayResult.isPositive ? "" : "Months"}
                  </div>
                </div>

                <div className="pt-4 border-t border-mist/30 space-y-1">
                  <div className="text-xs text-pewter">Net Monthly Cash Drain</div>
                  <div className="font-sans text-lg font-bold text-ember tabular-nums">
                    {formatINR(runwayResult.netBurn)} / month
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs text-center transition-colors"
              >
                Build 13-Week Cash Telemetry System →
              </Link>
            </div>
          </div>
        )}

        {/* 4. BREAK-EVEN ANALYSIS */}
        {activeTab === "breakeven" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-xl border border-mist/60 bg-fog">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-ink">
                Break-Even & Unit Contribution Margin
              </h2>

              <div className="space-y-4 bg-paper p-6 rounded-xl border border-mist/50">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Monthly Fixed Overhead</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(fixedCosts)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="25000"
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Unit Selling Price</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(unitPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="50000"
                    step="50"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-ink mb-2">
                    <span>Unit Variable Cost (COGS)</span>
                    <span className="font-sans text-ember font-bold tabular-nums">{formatINR(unitCost)}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="45000"
                    step="50"
                    value={unitCost}
                    onChange={(e) => setUnitCost(Number(e.target.value))}
                    className="w-full h-2 bg-fog rounded cursor-pointer accent-ember"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-paper p-8 rounded-xl border border-mist/60 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                    Required Break-Even Volume
                  </div>
                  <div className="font-sans text-3xl sm:text-4xl font-bold text-ink mt-1 tabular-nums">
                    {breakEvenResult.breakEvenUnits.toLocaleString("en-IN")} Units
                  </div>
                  <div className="text-xs font-semibold text-ember mt-1">
                    Revenue Threshold: {formatINR(breakEvenResult.breakEvenRevenue)}
                  </div>
                </div>

                <div className="pt-4 border-t border-mist/30 space-y-1">
                  <div className="text-xs text-pewter">Unit Contribution Margin (CM1)</div>
                  <div className="font-sans text-lg font-bold text-ink tabular-nums">
                    {formatINR(breakEvenResult.contributionMargin)} ({breakEvenResult.cmRatio}%)
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs text-center transition-colors"
              >
                Structure Granular Unit Economics →
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
