import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Block */}
          <div className="lg:col-span-5 bg-muted rounded-lg p-8 sm:p-12 border border-border space-y-6">
            <div className="w-14 h-14 rounded-md bg-primary text-white flex items-center justify-center font-display font-extrabold text-2xl">
              F
            </div>
            <div className="space-y-2">
              <div className="font-display font-extrabold text-2xl text-foreground">
                Principal Advisory Desk
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-primary">
                Corporate Finance & Advisory
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Founded on the conviction that Indian enterprise leaders deserve rigorous, un-conflicted financial engineering rather than retrospective compliance or commission-driven distribution.
            </p>
            <div className="pt-4 border-t border-border flex items-center gap-2 text-xs font-bold text-foreground">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>100% Fee-Only Fiduciary • 0% Kickbacks</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              BUILT FROM FINANCE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground leading-tight">
              Designed for better decisions.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              FINORA was created to bridge the gap between static spreadsheet reporting and institutional corporate finance. We combine deep corporate modeling standards with modern analytical software to give decision-makers clear visibility over their balance sheets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-md bg-muted border border-border space-y-1">
                <div className="text-xs font-bold text-foreground">Mathematical Rigor</div>
                <p className="text-xs text-muted-foreground">Every model is deterministic, audit-ready, and sensitivity-tested.</p>
              </div>
              <div className="p-4 rounded-md bg-muted border border-border space-y-1">
                <div className="text-xs font-bold text-foreground">Institutional Integrity</div>
                <p className="text-xs text-muted-foreground">Zero hidden third-party distribution fees or conflicting incentives.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
