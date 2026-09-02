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
      "Direct Partner Slack / WhatsApp Channel"
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
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            TRANSPARENT ENGAGEMENT MODELS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
            Consulting Scope & Engagement Tiers
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Predictable milestone-governed corporate finance advisory. Zero vague hourly billing overages.
          </p>
        </div>

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-lg bg-muted border flex flex-col justify-between space-y-6 ${
                tier.featured ? "border-2 border-primary bg-primary-subtle/30" : "border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary">
                    TIER {tier.tier}
                  </span>
                  {tier.featured && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-primary text-white">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="font-display font-extrabold text-xl text-foreground">
                  {tier.name}
                </h3>
                
                <div>
                  <div className="font-mono text-3xl font-extrabold text-foreground">
                    {tier.price}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold mt-0.5">
                    {tier.cadence}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">
                  <strong className="text-foreground">Who it's for: </strong> {tier.whoItsFor}
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Included:
                  </div>
                  <ul className="space-y-2">
                    {tier.deliverables.map((del, i) => (
                      <li key={i} className="text-xs text-foreground flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/consultation"
                className={`w-full py-3 rounded-md font-bold text-xs uppercase tracking-wider text-center transition-all ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-white border border-border text-foreground hover:bg-muted-dark"
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
