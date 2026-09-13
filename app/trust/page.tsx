import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Scale } from "lucide-react";

export const metadata = {
  title: "Trust & Governance Center | FINORA",
  description: "Institutional governance, DPDP Act 2023 data security, fiduciary code, and regulatory disclosures."
};

export default function TrustPage() {
  return (
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            INSTITUTIONAL GOVERNANCE
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            Trust & Evidence Charter
          </h1>
          <p className="text-base sm:text-lg text-graphite leading-relaxed">
            Trust in corporate finance is built on mathematical proof, strict fiduciary independence, verified data security, and transparent regulatory boundaries.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl border border-mist/60 bg-fog space-y-4">
            <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
              <Scale className="w-4 h-4 text-ember" />
            </div>
            <h3 className="font-sans font-bold text-lg text-ink">
              100% Fee-Only Fiduciary
            </h3>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              We accept <strong>0.0%</strong> commission kickbacks or distribution cuts from banks, mutual funds, or PMS houses. Advisory recommendations are 100% fee-only.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-mist/60 bg-fog space-y-4">
            <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
              <Lock className="w-4 h-4 text-ember" />
            </div>
            <h3 className="font-sans font-bold text-lg text-ink">
              DPDP Act 2023 Security
            </h3>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              All financial statements, cap tables, and banking models are encrypted at rest using AES-256 and in transit using TLS 1.3 under mutual Non-Disclosure Agreements.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-mist/60 bg-fog space-y-4">
            <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-ember" />
            </div>
            <h3 className="font-sans font-bold text-lg text-ink">
              Institutional Safe Harbor
            </h3>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Explicit separation between strategic corporate management consulting / technology and regulated retail public stock advice under SEBI guidelines.
            </p>
          </div>
        </div>

        {/* Detailed Disclosures Section */}
        <div id="regulatory" className="space-y-6 pt-8 border-t border-mist/40">
          <h2 className="font-sans font-bold text-2xl text-ink">
            Transparent Regulatory Disclosures & Boundaries
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-fog border border-mist/50 space-y-2">
              <h3 className="text-sm font-bold text-ink">
                1. Non-Retail Investment Advice Disclaimer
              </h3>
              <p className="text-xs text-graphite leading-relaxed">
                FINORA operates strictly as a corporate finance management consultancy and financial intelligence SaaS platform. We do not provide retail stock tips, security underwriting, or personalized public stock recommendations under SEBI (Investment Advisers) Regulations, 2013 or SEBI (Research Analysts) Regulations, 2014.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-fog border border-mist/50 space-y-2">
              <h3 className="text-sm font-bold text-ink">
                2. Mathematical Determinism Disclosure
              </h3>
              <p className="text-xs text-graphite leading-relaxed">
                FinOS computational tools utilize deterministic mathematical models (FAST standard formulas, Gordon Growth DCF, annuity compounding). Algorithmic anomaly detection is supervised by human corporate finance practitioners before inclusion in board packs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
