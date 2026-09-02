"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  { id: "founder", label: "Startup Founder / Operator" },
  { id: "sme", label: "Mid-Market SME Owner" },
  { id: "investor", label: "Investor / PE / VC" },
  { id: "individual", label: "Individual / HNI" },
  { id: "pro", label: "Finance Professional" },
  { id: "student", label: "Finance Student / Analyst" },
];

const PROBLEMS = [
  { id: "cashflow", label: "Cash Flow & Runway Visibility" },
  { id: "modelling", label: "3-Statement Financial Modelling" },
  { id: "fundraising", label: "Fundraising Diligence Defense" },
  { id: "valuation", label: "Corporate Valuation & Peer Comps" },
  { id: "risk", label: "Working Capital Drag & Risk" },
  { id: "tax", label: "Section 54F / ESOP Liquidity" },
];

export function FinancialDiagnostic() {
  const [step, setStep] = useState(1);
  const [audience, setAudience] = useState<string>("founder");
  const [problem, setProblem] = useState<string>("cashflow");

  const getRecommendation = () => {
    if (audience === "sme" || problem === "cashflow" || problem === "risk") {
      return {
        title: "FINORA Financial Health Assessment",
        why: "Your responses indicate that working capital visibility, debtor collection compression, and rolling cash flow planning are your highest priorities.",
        cta: "Book an Assessment",
        href: "/consultation"
      };
    }
    if (problem === "fundraising" || problem === "modelling") {
      return {
        title: "Venture Financial Modelling Sprint",
        why: "Your responses suggest an upcoming capital round requiring an institutional 3-statement forecast with reconciled unit economics.",
        cta: "Request Model Scope",
        href: "/consultation"
      };
    }
    return {
      title: "Strategic Financial Consultation",
      why: "Your situation requires tailored capital structure advisory and statutory tax engineering to optimize post-tax liquidity.",
      cta: "Schedule Consultation",
      href: "/consultation"
    };
  };

  const rec = getRecommendation();

  return (
    <section id="diagnostic" className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            INTERACTIVE FINANCIAL TOOL
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight">
            Finora Financial Diagnostic
          </h2>
          <p className="text-base text-muted-foreground">
            Understand your immediate financial needs and receive an actionable next step.
          </p>
        </div>

        {/* Flat Diagnostic Box */}
        <div className="max-w-4xl rounded-lg border-2 border-border p-8 sm:p-12 bg-muted space-y-8">
          
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span className="text-primary font-extrabold">Step 1 of 2 • What are you?</span>
                <span>Select profile</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {AUDIENCES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAudience(item.id)}
                    className={cn(
                      "p-4 rounded-md border-2 text-left font-bold text-sm transition-all",
                      audience === item.id
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-foreground hover:border-primary"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="h-12 px-7 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all"
                >
                  Continue to Objectives →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span className="text-primary font-extrabold">Step 2 of 2 • What are you trying to solve?</span>
                <span>Select priority</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PROBLEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProblem(item.id)}
                    className={cn(
                      "p-4 rounded-md border-2 text-left font-bold text-sm transition-all",
                      problem === item.id
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-foreground hover:border-primary"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-muted-foreground hover:text-foreground"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="h-12 px-7 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all"
                >
                  Generate Recommendation →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-bold uppercase tracking-wider text-secondary">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Recommendation Ready</span>
                <button
                  onClick={() => setStep(1)}
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restart
                </button>
              </div>

              <div className="space-y-3 bg-white p-6 rounded-md border border-border">
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary block">
                  Your Recommended Next Step:
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground">
                  {rec.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {rec.why}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={rec.href}
                  className="h-13 px-8 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm inline-flex items-center gap-2"
                >
                  {rec.cta} →
                </Link>
                <Link
                  href="/advisory"
                  className="text-xs font-bold text-muted-foreground hover:text-foreground"
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
