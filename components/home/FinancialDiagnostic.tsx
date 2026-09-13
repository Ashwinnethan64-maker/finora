"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  { id: "founder", label: "Startup Founder" },
  { id: "sme", label: "Mid-Market SME" },
  { id: "investor", label: "Investor / PE / VC" },
  { id: "individual", label: "Individual / HNI" },
  { id: "pro", label: "Finance Professional" },
  { id: "student", label: "Finance Student" },
];

const PROBLEMS = [
  { id: "cashflow", label: "Cash Flow Visibility" },
  { id: "valuation", label: "Valuation & Comps" },
  { id: "fundraising", label: "Fundraising Support" },
  { id: "modelling", label: "Financial Modelling" },
  { id: "risk", label: "Working Capital Risk" },
  { id: "planning", label: "Strategic Planning" },
];

export function FinancialDiagnostic() {
  const [step, setStep] = useState(1);
  const [audience, setAudience] = useState<string>("founder");
  const [problem, setProblem] = useState<string>("cashflow");

  const getRecommendation = () => {
    if (audience === "sme" || problem === "cashflow" || problem === "risk") {
      return {
        title: "FINORA Financial Health Assessment",
        why: "Your responses indicate working capital visibility, debtor cycle compression, and rolling cash flow planning are high-priority needs.",
        cta: "Book an Assessment",
        href: "/consultation"
      };
    }
    if (problem === "fundraising" || problem === "modelling" || problem === "valuation") {
      return {
        title: "Corporate Financial Modelling Sprint",
        why: "Your responses suggest an active corporate transaction or capital round requiring an institutional 3-statement model.",
        cta: "Request Model Scope",
        href: "/consultation"
      };
    }
    return {
      title: "Strategic Financial Consultation",
      why: "Your situation requires tailored capital structure planning and financial architecture advisory.",
      cta: "Schedule Consultation",
      href: "/consultation"
    };
  };

  const rec = getRecommendation();

  return (
    <section id="diagnostic" className="py-20 sm:py-24 bg-paper border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            FINANCIAL DIAGNOSTIC
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            Interactive Financial Assessment
          </h2>
          <p className="text-sm text-graphite">
            Clarify your immediate financial needs and receive a structured next step.
          </p>
        </div>

        {/* Flat Diagnostic Box */}
        <div className="max-w-3xl rounded-xl border border-mist/70 p-6 sm:p-10 bg-fog space-y-6">
          
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-mist/40 text-xs font-semibold uppercase tracking-wider text-pewter">
                <span className="text-ink font-bold">STEP 01 • WHAT ARE YOU?</span>
                <span>Select profile</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {AUDIENCES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAudience(item.id)}
                    className={cn(
                      "p-4 rounded-xl border text-left font-medium text-xs sm:text-sm transition-all",
                      audience === item.id
                        ? "border-ember bg-paper text-ink shadow-none font-semibold ring-1 ring-ember"
                        : "border-mist/60 bg-paper text-graphite hover:border-mist hover:text-ink"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="h-10 px-6 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-all"
                >
                  Continue to Priorities →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-mist/40 text-xs font-semibold uppercase tracking-wider text-pewter">
                <span className="text-ink font-bold">STEP 02 • WHAT ARE YOU TRYING TO SOLVE?</span>
                <span>Select focus</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PROBLEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProblem(item.id)}
                    className={cn(
                      "p-4 rounded-xl border text-left font-medium text-xs sm:text-sm transition-all",
                      problem === item.id
                        ? "border-ember bg-paper text-ink shadow-none font-semibold ring-1 ring-ember"
                        : "border-mist/60 bg-paper text-graphite hover:border-mist hover:text-ink"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-medium text-graphite hover:text-ink"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="h-10 px-6 rounded-xl bg-ember hover:bg-ember-hover text-paper font-medium text-xs sm:text-sm transition-all"
                >
                  Generate Recommendation →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-mist/40 text-xs font-semibold uppercase tracking-wider text-graphite">
                <span className="flex items-center gap-1.5 text-ink font-bold"><CheckCircle2 className="w-4 h-4 text-ember" /> RECOMMENDED NEXT STEP</span>
                <button
                  onClick={() => setStep(1)}
                  className="text-pewter hover:text-ink flex items-center gap-1 text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restart
                </button>
              </div>

              <div className="space-y-3 bg-paper p-6 rounded-xl border border-mist/60">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ember block">
                  RECOMMENDED ADVISORY ACTION
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink">
                  {rec.title}
                </h3>
                <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                  {rec.why}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={rec.href}
                  className="h-11 px-6 rounded-xl bg-ember hover:bg-ember-hover text-white font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
                >
                  {rec.cta} →
                </Link>
                <Link
                  href="/advisory"
                  className="text-xs font-medium text-graphite hover:text-ink"
                >
                  Browse all advisory disciplines
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
