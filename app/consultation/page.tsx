"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  "PROFILE",
  "OBJECTIVE",
  "SUPPORT TYPE",
  "TIMELINE",
  "BUDGET",
  "CONTACT",
  "REVIEW"
];

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    profile: "founder",
    objective: "fundraising",
    supportType: "modeling",
    timeline: "rapid",
    budget: "tier2",
    name: "",
    email: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            EXECUTIVE INTAKE & SCOPING
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground leading-tight">
            Guided Consultation Intake
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Covered under mutual Non-Disclosure covenants. Average partner review time: &lt; 4 business hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 sm:p-10 rounded-lg border border-border bg-muted space-y-8">
          
          {!submitted ? (
            <>
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-primary">Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1]}</span>
                  <span className="text-muted-foreground">{Math.round((currentStep / STEPS.length) * 100)}% Completed</span>
                </div>
                <div className="w-full h-2 bg-white rounded overflow-hidden border border-border">
                  <div
                    className="h-full bg-primary transition-all duration-200"
                    style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Profile */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    1. Tell us about your role & organization
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: "founder", label: "High-Growth Startup Founder / Operator", sub: "Seed to Series B ($500K - $10M ARR)" },
                      { id: "sme", label: "Mid-Market SME Owner / Industrial Promoter", sub: "Manufacturing, Trading, Infra (₹15 Cr - ₹250 Cr Turnover)" },
                      { id: "investor", label: "Institutional Investor / PE / VC Associate", sub: "Due diligence support & portfolio modeling" },
                      { id: "individual", label: "HNI / C-Suite Executive with ESOPs", sub: "Section 54F tax planning & unlisted liquidity" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, profile: item.id })}
                        className={cn(
                          "p-4 rounded-md border-2 text-left transition-all",
                          formData.profile === item.id
                            ? "border-primary bg-primary-subtle"
                            : "border-border bg-white hover:border-primary"
                        )}
                      >
                        <div className="font-bold text-sm text-foreground">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors"
                    >
                      Continue to Objective →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Objective */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    2. What is your primary objective?
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: "fundraising", label: "Close Venture Capital Round / Clear Due Diligence" },
                      { id: "working-cap", label: "Unlock Trapped Working Capital & Shorten Debtor Cycles" },
                      { id: "cashflow", label: "Establish Continuous 13-Week Forward Cash Telemetry" },
                      { id: "tax", label: "Maximize Section 54F Capital Gains Retention" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, objective: item.id })}
                        className={cn(
                          "p-4 rounded-md border-2 text-left transition-all text-sm font-bold",
                          formData.objective === item.id
                            ? "border-primary bg-primary-subtle text-primary"
                            : "border-border bg-white text-foreground hover:border-primary"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setCurrentStep(1)} className="text-xs font-bold text-muted-foreground hover:text-foreground">← Back</button>
                    <button onClick={() => setCurrentStep(3)} className="px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 3: Support Type */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    3. What kind of support do you need?
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: "audit", label: "72-Hour Rapid Balance Sheet Audit" },
                      { id: "modeling", label: "3-Statement Master Financial Model Project Sprint" },
                      { id: "retainer", label: "Ongoing Strategic Fractional CFO Retainer" },
                      { id: "custom", label: "Custom Corporate Finance / M&A Mandate" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, supportType: item.id })}
                        className={cn(
                          "p-4 rounded-md border-2 text-left transition-all text-sm font-bold",
                          formData.supportType === item.id
                            ? "border-primary bg-primary-subtle text-primary"
                            : "border-border bg-white text-foreground hover:border-primary"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setCurrentStep(2)} className="text-xs font-bold text-muted-foreground hover:text-foreground">← Back</button>
                    <button onClick={() => setCurrentStep(4)} className="px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 4: Timeline */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    4. Required execution timeline
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: "urgent", label: "Immediate / Urgent (Within 72 Hours to 2 Weeks)" },
                      { id: "standard", label: "Standard Project Sprint (3 to 4 Weeks)" },
                      { id: "retainer", label: "Ongoing Monthly Retainer" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: item.id })}
                        className={cn(
                          "p-4 rounded-md border-2 text-left transition-all text-sm font-bold",
                          formData.timeline === item.id
                            ? "border-primary bg-primary-subtle text-primary"
                            : "border-border bg-white text-foreground hover:border-primary"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setCurrentStep(3)} className="text-xs font-bold text-muted-foreground hover:text-foreground">← Back</button>
                    <button onClick={() => setCurrentStep(5)} className="px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 5: Budget */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    5. Anticipated advisory scope tier
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: "tier1", label: "72-Hr Audit Sprint: ₹45,000" },
                      { id: "tier2", label: "Project Sprint: ₹1,75,000 – ₹3,50,000" },
                      { id: "tier3", label: "Fractional CFO: ₹1,25,000 / month" },
                      { id: "custom", label: "Custom Corporate Scope" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: item.id })}
                        className={cn(
                          "p-4 rounded-md border-2 text-left transition-all text-sm font-bold",
                          formData.budget === item.id
                            ? "border-primary bg-primary-subtle text-primary"
                            : "border-border bg-white text-foreground hover:border-primary"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setCurrentStep(4)} className="text-xs font-bold text-muted-foreground hover:text-foreground">← Back</button>
                    <button onClick={() => setCurrentStep(6)} className="px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 6: Contact */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    6. Principal Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1 uppercase">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ashwin Mehta"
                        className="w-full px-4 py-3 rounded-md border-2 border-border bg-white text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1 uppercase">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-md border-2 border-border bg-white text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1 uppercase">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies Pvt Ltd"
                        className="w-full px-4 py-3 rounded-md border-2 border-border bg-white text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setCurrentStep(5)} className="text-xs font-bold text-muted-foreground hover:text-foreground">← Back</button>
                    <button onClick={() => setCurrentStep(7)} className="px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors">Review Details →</button>
                  </div>
                </div>
              )}

              {/* Step 7: Review */}
              {currentStep === 7 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    7. Final Review & Submission
                  </h2>
                  <div className="bg-white p-5 rounded-md border border-border space-y-2 text-xs">
                    <div><strong>Contact: </strong> {formData.name} ({formData.email})</div>
                    <div><strong>Company: </strong> {formData.company}</div>
                    <div><strong>Profile: </strong> {formData.profile.toUpperCase()}</div>
                    <div><strong>Objective: </strong> {formData.objective}</div>
                  </div>

                  <div className="text-xs text-muted-foreground bg-white p-4 rounded-md border border-border flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Covered under mutual Non-Disclosure covenants and the DPDP Act 2023. Strategic corporate consulting only.</span>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setCurrentStep(6)} className="text-xs font-bold text-muted-foreground hover:text-foreground">← Back</button>
                    <button type="submit" className="px-8 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors">
                      Submit Consultation Request →
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Success State */
            <div className="space-y-6 text-center py-6 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-secondary-subtle text-secondary flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h2 className="font-display font-extrabold text-2xl text-foreground">
                Intake Request Dispatched to Principal Desk
              </h2>

              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Reference ID: <span className="font-mono font-bold text-primary">FIN-2026-8942</span>. Our advisory partners will review your parameters within 4 business hours.
              </p>

              <div className="max-w-md mx-auto text-left pt-6 border-t border-border space-y-3 bg-white p-6 rounded-md border">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Here's what happens next:
                </div>
                <div className="text-xs text-foreground flex items-center gap-2">
                  <span className="font-mono font-bold text-primary">01</span> Requirement Review (&lt; 2h)
                </div>
                <div className="text-xs text-foreground flex items-center gap-2">
                  <span className="font-mono font-bold text-primary">02</span> Fit Assessment & Deliverable Scoping
                </div>
                <div className="text-xs text-foreground flex items-center gap-2">
                  <span className="font-mono font-bold text-primary">03</span> 30-Minute Discovery Strategy Session
                </div>
                <div className="text-xs text-foreground flex items-center gap-2">
                  <span className="font-mono font-bold text-primary">04</span> Scope Proposal & NDA Execution
                </div>
                <div className="text-xs text-foreground flex items-center gap-2">
                  <span className="font-mono font-bold text-primary">05</span> Project Kickoff & Data Room Defense
                </div>
              </div>

              <div className="pt-6">
                <Link href="/" className="px-6 py-2.5 rounded-md bg-white border border-border text-xs font-bold text-foreground hover:bg-muted">
                  Return to Homepage
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
