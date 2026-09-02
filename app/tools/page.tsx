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
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            FINORA TOOLS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
            Financial Computational Engines
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deterministic mathematical models with synchronized slider controls, verified assumptions, and instant calculations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-border">
          <button
            onClick={() => setActiveTab("sip")}
            className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all ${
              activeTab === "sip" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted-dark"
            }`}
          >
            SIP & Wealth Accumulator
          </button>
          <button
            onClick={() => setActiveTab("dcf")}
            className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all ${
              activeTab === "dcf" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted-dark"
            }`}
          >
            2-Stage DCF Valuation
          </button>
          <button
            onClick={() => setActiveTab("runway")}
            className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all ${
              activeTab === "runway" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted-dark"
            }`}
          >
            Runway & Cash Burn
          </button>
          <button
            onClick={() => setActiveTab("breakeven")}
            className={`px-5 py-2.5 rounded-md text-sm font-bold transition-all ${
              activeTab === "breakeven" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted-dark"
            }`}
          >
            Break-Even & CM1
          </button>
        </div>

        {/* 1. SIP CALCULATOR */}
        {activeTab === "sip" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-10 rounded-lg border border-border bg-muted">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-extrabold text-2xl text-foreground">
                Systematic Investment Plan (SIP) Engine
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-md border border-border">
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Monthly Investment</span>
                    <span className="font-mono text-primary font-bold">{formatINR(sipMonthly)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Expected Return Rate</span>
                    <span className="font-mono text-primary font-bold">{sipRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Investment Horizon</span>
                    <span className="font-mono text-primary font-bold">{sipYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>
              </div>

              <div className="text-xs text-muted-foreground bg-white p-4 rounded-md border border-border">
                <strong>Formula: </strong> FV = P × [ (1 + i)^n - 1 ] / i × (1 + i), compounded monthly.
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-md border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Total Estimated Wealth
                  </div>
                  <div className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground mt-1">
                    {formatINR(sipResult.totalWealth)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">Total Invested</div>
                    <div className="font-mono text-xl font-bold text-foreground mt-0.5">
                      {formatINR(sipResult.totalInvested)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-secondary">Wealth Gained</div>
                    <div className="font-mono text-xl font-bold text-secondary mt-0.5">
                      +{formatINR(sipResult.wealthGained)}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3.5 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                Structure a Custom Wealth Model →
              </Link>
            </div>
          </div>
        )}

        {/* 2. DCF VALUATION */}
        {activeTab === "dcf" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-10 rounded-lg border border-border bg-muted">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-extrabold text-2xl text-foreground">
                2-Stage DCF Valuation Engine
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-md border border-border">
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Base Year Free Cash Flow</span>
                    <span className="font-mono text-primary font-bold">{formatINR(dcfCF)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={dcfCF}
                    onChange={(e) => setDcfCF(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>5-Year CAGR Forecast</span>
                    <span className="font-mono text-primary font-bold">{dcfGrowth}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={dcfGrowth}
                    onChange={(e) => setDcfGrowth(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Discount Rate (WACC)</span>
                    <span className="font-mono text-primary font-bold">{dcfWacc}%</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="25"
                    step="0.5"
                    value={dcfWacc}
                    onChange={(e) => setDcfWacc(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-md border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Estimated Enterprise Value (EV)
                  </div>
                  <div className="font-mono text-4xl sm:text-5xl font-extrabold text-primary mt-1">
                    {formatINR(dcfResult.enterpriseValue)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">PV of 5-Yr Cash Flows</div>
                    <div className="font-mono text-lg font-bold text-foreground mt-0.5">
                      {formatINR(dcfResult.pvExplicit)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">PV of Terminal Value</div>
                    <div className="font-mono text-lg font-bold text-foreground mt-0.5">
                      {formatINR(dcfResult.pvTerminal)}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3.5 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                Request Defensible Valuation Sprint →
              </Link>
            </div>
          </div>
        )}

        {/* 3. RUNWAY CALCULATOR */}
        {activeTab === "runway" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-10 rounded-lg border border-border bg-muted">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-extrabold text-2xl text-foreground">
                Runway & Cash Burn Calculator
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-md border border-border">
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Current Cash Balance</span>
                    <span className="font-mono text-primary font-bold">{formatINR(cashBalance)}</span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={cashBalance}
                    onChange={(e) => setCashBalance(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Monthly Operating Expenses</span>
                    <span className="font-mono text-primary font-bold">{formatINR(monthlyExp)}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="20000000"
                    step="100000"
                    value={monthlyExp}
                    onChange={(e) => setMonthlyExp(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Monthly Collected Revenue</span>
                    <span className="font-mono text-primary font-bold">{formatINR(monthlyRev)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    step="100000"
                    value={monthlyRev}
                    onChange={(e) => setMonthlyRev(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-md border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Estimated Zero-Cash Date Runway
                  </div>
                  <div className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground mt-1">
                    {runwayResult.runwayMonths} {runwayResult.isPositive ? "" : "Months"}
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-1">
                  <div className="text-xs font-bold text-muted-foreground">Net Monthly Cash Drain</div>
                  <div className="font-mono text-xl font-bold text-danger">
                    {formatINR(runwayResult.netBurn)} / month
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3.5 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                Build 13-Week Cash Telemetry System →
              </Link>
            </div>
          </div>
        )}

        {/* 4. BREAK-EVEN ANALYSIS */}
        {activeTab === "breakeven" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-10 rounded-lg border border-border bg-muted">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-extrabold text-2xl text-foreground">
                Break-Even & Unit Contribution Margin
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-md border border-border">
                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Monthly Fixed Overhead</span>
                    <span className="font-mono text-primary font-bold">{formatINR(fixedCosts)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="25000"
                    value={fixedCosts}
                    onChange={(e) => setFixedCosts(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Unit Selling Price</span>
                    <span className="font-mono text-primary font-bold">{formatINR(unitPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="50000"
                    step="50"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-foreground mb-2">
                    <span>Unit Variable Cost (COGS)</span>
                    <span className="font-mono text-primary font-bold">{formatINR(unitCost)}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="45000"
                    step="50"
                    value={unitCost}
                    onChange={(e) => setUnitCost(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-md border border-border flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Required Break-Even Volume
                  </div>
                  <div className="font-mono text-4xl sm:text-5xl font-extrabold text-foreground mt-1">
                    {breakEvenResult.breakEvenUnits.toLocaleString("en-IN")} Units
                  </div>
                  <div className="text-xs font-mono text-primary font-bold mt-1">
                    Revenue Threshold: {formatINR(breakEvenResult.breakEvenRevenue)}
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-1">
                  <div className="text-xs font-bold text-muted-foreground">Unit Contribution Margin (CM1)</div>
                  <div className="font-mono text-xl font-bold text-secondary">
                    {formatINR(breakEvenResult.contributionMargin)} ({breakEvenResult.cmRatio}%)
                  </div>
                </div>
              </div>

              <Link
                href="/consultation"
                className="w-full py-3.5 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
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
