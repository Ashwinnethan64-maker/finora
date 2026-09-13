import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing & Scope Tiers | FINORA",
  description: "Transparent corporate finance consulting pricing and milestone engagement models."
};

const TIERS = [
  {
    name: "Consultation & Audit",
    tier: "01",
    price: "₹45,000",
    cadence: "Fixed Sprint (3 Business Days)",
    whoItsFor: "Businesses sensing cash leakage, debtor aging drag, or preparing for a strategic shift.",
    deliverables: [
      "18-Point Liquidity & Balance Sheet Audit",
      "Debtor Aging & CCC Trapped Cash Teardown",
      "4-Page Executive Action Blueprint",
      "45-Min Principal Advisory Briefing"
    ],
    cta: "Book 72-Hr Audit"
  },
  {
    name: "Financial Model Sprint",
    tier: "02",
    price: "₹2,25,000",
    featured: true,
    cadence: "Project Sprint (2 to 3 Weeks)",
    whoItsFor: "Founders raising Seed to Series B ($500K - $10M) requiring audit-ready 3-statement models.",
    deliverables: [
      "Dynamic 3-Statement Master Model (.xlsx)",
      "Cohort LTV/CAC & Gross Margin Waterfall",
      "Bull / Base / Bear Scenario Sensitivity Controls",
      "Complete VC Diligence Data Room Setup",
      "2 Weeks Post-Delivery VC Q&A Defense"
    ],
    cta: "Initiate Model Sprint"
  },
  {
    name: "Fractional CFO Retainer",
    tier: "03",
    price: "₹1,25,000",
    cadence: "Monthly Retainer (Quarterly minimum)",
    whoItsFor: "Operating companies ($2M - $25M) requiring continuous C-suite financial leadership.",
    deliverables: [
      "Weekly 13-Week Rolling Cash Flow OS",
      "Monthly MIS & Unit Variance Telemetry",
      "Quarterly Board Meeting Pack Generation",
      "Bank Consortia Working Capital Alignment",
      "Direct Partner Advisory Channel"
    ],
    cta: "Apply for Retainer"
  },
  {
    name: "Strategic Finance Mandate",
    tier: "04",
    price: "Custom",
    cadence: "Milestone-Governed Engagement",
    whoItsFor: "Enterprises executing debt syndication, cross-border M&A, complex Section 54F tax structures, or SPVs.",
    deliverables: [
      "Dedicated Principal Partner Lead",
      "Multi-Entity Waterfall & Carve-Out Modeling",
      "Bank Consortia Negotiation & CMA Defense",
      "Custom SLA & Specialized Architecture"
    ],
    cta: "Request Custom Proposal"
  }
];

export default function PricingPage() {
  return (
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            FINORA ENGAGEMENTS
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            Consulting Scope & Tiers
          </h1>
          <p className="text-base sm:text-lg text-graphite leading-relaxed">
            Predictable milestone-governed corporate finance advisory. Zero vague hourly billing overages.
          </p>
        </div>

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-xl bg-fog border flex flex-col justify-between space-y-6 ${
                tier.featured ? "border-ember ring-1 ring-ember bg-paper" : "border-mist/60"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pewter">
                    TIER {tier.tier}
                  </span>
                  {tier.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-tag bg-ember text-white">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-lg text-ink">
                  {tier.name}
                </h3>
                
                <div>
                  <div className="font-sans text-3xl font-bold text-ink tabular-nums">
                    {tier.price}
                  </div>
                  <div className="text-xs text-pewter font-medium mt-0.5">
                    {tier.cadence}
                  </div>
                </div>

                <div className="text-xs text-graphite leading-relaxed pt-2 border-t border-mist/30">
                  <strong className="text-ink">Who it's for: </strong> {tier.whoItsFor}
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                    Included:
                  </div>
                  <ul className="space-y-2">
                    {tier.deliverables.map((del, i) => (
                      <li key={i} className="text-xs text-graphite flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-ember flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/consultation"
                className={`w-full py-2.5 rounded-xl font-medium text-xs text-center transition-all ${
                  tier.featured
                    ? "bg-ember text-white hover:bg-ember-hover"
                    : "bg-paper border border-mist/50 text-ink hover:bg-mist/20"
                }`}
              >
                {tier.cta} →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
