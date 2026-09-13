import React from "react";
import { ShieldCheck } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 sm:py-24 bg-paper border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Instrument Card */}
          <div className="lg:col-span-5 bg-fog rounded-xl p-8 sm:p-10 border border-mist/60 space-y-5">
            <div className="w-10 h-10 rounded-lg bg-ink text-paper flex items-center justify-center font-sans font-bold text-lg">
              F
            </div>
            <div className="space-y-1">
              <div className="font-sans font-bold text-xl text-ink">
                Principal Advisory Desk
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-pewter">
                Corporate Finance & Advisory
              </div>
            </div>
            <p className="text-xs sm:text-sm text-graphite leading-relaxed">
              Founded on the conviction that Indian enterprise leaders deserve rigorous, un-conflicted financial engineering rather than retrospective compliance or commission-driven distribution.
            </p>
            <div className="pt-4 border-t border-mist/40 flex items-center gap-2 text-xs font-medium text-ink">
              <ShieldCheck className="w-4 h-4 text-ember" />
              <span>100% Fee-Only Fiduciary • 0% Kickbacks</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              BUILT FROM FINANCE
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-ink leading-tight tracking-tight">
              Designed for better decisions.
            </h2>
            <p className="text-sm sm:text-base text-graphite leading-relaxed">
              FINORA was created to bridge the gap between static spreadsheet reporting and institutional corporate finance. We combine deep corporate modeling standards with modern analytical software to give decision-makers clear visibility over their balance sheets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-fog border border-mist/40 space-y-1">
                <div className="text-xs font-bold text-ink">Mathematical Rigor</div>
                <p className="text-xs text-graphite">Every model is deterministic, audit-ready, and sensitivity-tested.</p>
              </div>
              <div className="p-4 rounded-xl bg-fog border border-mist/40 space-y-1">
                <div className="text-xs font-bold text-ink">Institutional Integrity</div>
                <p className="text-xs text-graphite">Zero hidden third-party distribution fees or conflicting incentives.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
