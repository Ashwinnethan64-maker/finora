import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Scale } from "lucide-react";

export const metadata = {
  title: "Trust & Governance Center | FINORA",
  description: "Institutional governance, DPDP Act 2023 data security, fiduciary code, and regulatory disclosures."
};

export default function TrustPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            INSTITUTIONAL GOVERNANCE
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
            Trust & Evidence Charter
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trust in corporate finance is built on mathematical proof, strict fiduciary independence, verified data security, and transparent regulatory boundaries.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-border bg-muted space-y-4">
            <div className="w-10 h-10 rounded-md bg-primary-subtle text-primary flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              100% Un-Conflicted Fiduciary
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We accept <strong>0.0%</strong> commission kickbacks or distribution cuts from banks, mutual funds, or PMS houses. Advisory recommendations are 100% fee-only.
            </p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-muted space-y-4">
            <div className="w-10 h-10 rounded-md bg-secondary-subtle text-secondary-dark flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              DPDP Act 2023 Security
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              All financial statements, cap tables, and banking models are encrypted at rest using AES-256 and in transit using TLS 1.3 under mutual Non-Disclosure Agreements.
            </p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-muted space-y-4">
            <div className="w-10 h-10 rounded-md bg-accent-subtle text-accent-dark flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              Institutional Safe Harbor
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explicit separation between strategic corporate management consulting / technology and regulated retail public stock advice under SEBI guidelines.
            </p>
          </div>
        </div>

        {/* Detailed Disclosures Section */}
        <div id="regulatory" className="space-y-6 pt-8 border-t border-border">
          <h2 className="font-display font-extrabold text-2xl text-foreground">
            Transparent Regulatory Disclosures & Boundaries
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-md bg-muted border border-border space-y-2">
              <h3 className="text-sm font-bold text-foreground">
                1. Non-Retail Investment Advice Disclaimer
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                FINORA operates strictly as a corporate finance management consultancy and financial intelligence SaaS platform. We do not provide retail stock tips, security underwriting, or personalized public stock recommendations under SEBI (Investment Advisers) Regulations, 2013 or SEBI (Research Analysts) Regulations, 2014.
              </p>
            </div>

            <div className="p-6 rounded-md bg-muted border border-border space-y-2">
              <h3 className="text-sm font-bold text-foreground">
                2. Mathematical Determinism Disclosure
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                FinOS computational tools utilize deterministic mathematical models (FAST standard formulas, Gordon Growth DCF, annuity compounding). Algorithmic anomaly detection is supervised by human corporate finance practitioners before inclusion in board packs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
