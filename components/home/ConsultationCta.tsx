import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ConsultationCta() {
  return (
    <section className="bg-accent py-20 sm:py-24 text-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-dark/70 block">
            READY TO RESTRUCTURE YOUR FINANCIAL ARCHITECTURE?
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-dark leading-tight tracking-tight">
            Better numbers. <br />
            Better decisions.
          </h2>
          <p className="text-base sm:text-lg text-dark/80 max-w-xl font-medium">
            Schedule a principal discovery session to review your working capital, venture financial model, or fractional CFO requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-dark hover:bg-black text-white font-bold text-sm rounded-md transition-all active:scale-98"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-white/30 hover:bg-white/40 text-dark font-bold text-sm rounded-md transition-colors border border-dark/20"
          >
            <span>Launch Financial Tools</span>
            <ArrowUpRight className="w-4 h-4 text-dark/70" />
          </Link>
        </div>

      </div>
    </section>
  );
}
