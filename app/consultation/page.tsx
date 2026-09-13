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
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            EXECUTIVE INTAKE
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Consultation Intake & Scoping
          </h1>
          <p className="text-sm text-graphite leading-relaxed">
            Covered under mutual Non-Disclosure covenants. Average partner review time: &lt; 4 business hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-10 rounded-xl border border-mist/60 bg-fog space-y-8">
          
          {!submitted ? (
            <>
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                  <span className="text-ink">Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1]}</span>
                  <span className="text-pewter">{Math.round((currentStep / STEPS.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-mist/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-ember transition-all duration-200"
                    style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Profile */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
                    1. Tell us about your role & organization
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: "founder", label: "Startup Founder / Operator", sub: "Seed to Series B ($500K - $10M ARR)" },
                      { id: "sme", label: "Mid-Market SME Owner / Promoter", sub: "Manufacturing, Trading, Infra (₹15 Cr - ₹250 Cr Turnover)" },
                      { id: "investor", label: "Investor / PE / VC Associate", sub: "Due diligence support & portfolio modeling" },
                      { id: "individual", label: "HNI / C-Suite Executive with ESOPs", sub: "Section 54F tax planning & unlisted liquidity" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, profile: item.id })}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all",
                          formData.profile === item.id
                            ? "border-ember bg-paper ring-1 ring-ember"
                            : "border-mist/60 bg-paper hover:border-mist"
                        )}
                      >
                        <div className="font-semibold text-sm text-ink">{item.label}</div>
                        <div className="text-xs text-pewter mt-0.5">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-colors"
                    >
                      Continue to Objective →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Objective */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
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
                          "p-4 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium",
                          formData.objective === item.id
                            ? "border-ember bg-paper text-ink ring-1 ring-ember font-semibold"
                            : "border-mist/60 bg-paper text-graphite hover:border-mist hover:text-ink"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-2">
                    <button onClick={() => setCurrentStep(1)} className="text-xs font-medium text-graphite hover:text-ink">← Back</button>
                    <button onClick={() => setCurrentStep(3)} className="px-6 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 3: Support Type */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
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
                          "p-4 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium",
                          formData.supportType === item.id
                            ? "border-ember bg-paper text-ink ring-1 ring-ember font-semibold"
                            : "border-mist/60 bg-paper text-graphite hover:border-mist hover:text-ink"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-2">
                    <button onClick={() => setCurrentStep(2)} className="text-xs font-medium text-graphite hover:text-ink">← Back</button>
                    <button onClick={() => setCurrentStep(4)} className="px-6 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 4: Timeline */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
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
                          "p-4 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium",
                          formData.timeline === item.id
                            ? "border-ember bg-paper text-ink ring-1 ring-ember font-semibold"
                            : "border-mist/60 bg-paper text-graphite hover:border-mist hover:text-ink"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-2">
                    <button onClick={() => setCurrentStep(3)} className="text-xs font-medium text-graphite hover:text-ink">← Back</button>
                    <button onClick={() => setCurrentStep(5)} className="px-6 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 5: Budget */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
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
                          "p-4 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium",
                          formData.budget === item.id
                            ? "border-ember bg-paper text-ink ring-1 ring-ember font-semibold"
                            : "border-mist/60 bg-paper text-graphite hover:border-mist hover:text-ink"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-2">
                    <button onClick={() => setCurrentStep(4)} className="text-xs font-medium text-graphite hover:text-ink">← Back</button>
                    <button onClick={() => setCurrentStep(6)} className="px-6 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-colors">Continue →</button>
                  </div>
                </div>
              )}

              {/* Step 6: Contact */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
                    6. Principal Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-pewter mb-1 uppercase">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ashwin Mehta"
                        className="w-full px-4 py-2.5 rounded-xl border border-mist/60 bg-paper text-sm text-ink outline-none focus:border-ember focus:ring-1 focus:ring-ember"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-pewter mb-1 uppercase">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-mist/60 bg-paper text-sm text-ink outline-none focus:border-ember focus:ring-1 focus:ring-ember"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-pewter mb-1 uppercase">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies Pvt Ltd"
                        className="w-full px-4 py-2.5 rounded-xl border border-mist/60 bg-paper text-sm text-ink outline-none focus:border-ember focus:ring-1 focus:ring-ember"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <button onClick={() => setCurrentStep(5)} className="text-xs font-medium text-graphite hover:text-ink">← Back</button>
                    <button onClick={() => setCurrentStep(7)} className="px-6 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs sm:text-sm transition-colors">Review Details →</button>
                  </div>
                </div>
              )}

              {/* Step 7: Review */}
              {currentStep === 7 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <h2 className="font-sans font-bold text-lg text-ink">
                    7. Final Review & Submission
                  </h2>
                  <div className="bg-paper p-5 rounded-xl border border-mist/50 space-y-2 text-xs text-graphite">
                    <div><strong className="text-ink">Contact: </strong> {formData.name} ({formData.email})</div>
                    <div><strong className="text-ink">Company: </strong> {formData.company}</div>
                    <div><strong className="text-ink">Profile: </strong> {formData.profile.toUpperCase()}</div>
                    <div><strong className="text-ink">Objective: </strong> {formData.objective}</div>
                  </div>

                  <div className="text-xs text-graphite bg-paper p-4 rounded-xl border border-mist/40 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                    <span>Covered under mutual Non-Disclosure covenants and the DPDP Act 2023. Strategic corporate consulting only.</span>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button type="button" onClick={() => setCurrentStep(6)} className="text-xs font-medium text-graphite hover:text-ink">← Back</button>
                    <button type="submit" className="px-6 py-2.5 rounded-xl bg-ember hover:bg-ember-hover text-white font-medium text-sm transition-colors">
                      Submit Consultation Request →
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Success State */
            <div className="space-y-6 text-center py-6 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-fog border border-mist/50 text-ember flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h2 className="font-sans font-bold text-2xl text-ink">
                  Request Received
                </h2>
                <p className="text-xs text-pewter">
                  Reference: <span className="font-sans font-bold text-ink">FIN-2026-8942</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-graphite max-w-md mx-auto leading-relaxed">
                Our advisory partners will review your parameters within 4 business hours.
              </p>

              <div className="max-w-md mx-auto text-left pt-5 border-t border-mist/40 space-y-2.5 bg-paper p-6 rounded-xl border border-mist/40">
                <div className="text-[11px] font-bold uppercase tracking-wider text-pewter mb-2">
                  What happens next:
                </div>
                <div className="text-xs text-ink flex items-center gap-2">
                  <span className="font-semibold text-ember">01</span> Review (&lt; 2h)
                </div>
                <div className="text-xs text-ink flex items-center gap-2">
                  <span className="font-semibold text-ember">02</span> Scoping Assessment
                </div>
                <div className="text-xs text-ink flex items-center gap-2">
                  <span className="font-semibold text-ember">03</span> Discovery Strategy Session
                </div>
                <div className="text-xs text-ink flex items-center gap-2">
                  <span className="font-semibold text-ember">04</span> Scope Proposal & NDA Execution
                </div>
                <div className="text-xs text-ink flex items-center gap-2">
                  <span className="font-semibold text-ember">05</span> Project Kickoff & Data Room Defense
                </div>
              </div>

              <div className="pt-4">
                <Link href="/" className="px-5 py-2 rounded-xl bg-paper border border-mist/50 text-xs font-semibold text-ink hover:bg-fog">
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
