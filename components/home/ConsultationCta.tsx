import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ConsultationCta() {
  return (
    <section className="bg-fog py-20 sm:py-24 text-ink border-b border-mist/40 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            READY TO RESTRUCTURE YOUR FINANCIAL ARCHITECTURE?
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
            Better financial information. <br />
            <span className="text-ember">Better decisions.</span>
          </h2>
          <p className="text-base text-graphite max-w-lg leading-relaxed">
            Schedule a principal discovery session to review your working capital, venture financial model, or fractional CFO requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-ember hover:bg-ember-hover text-white font-medium text-sm rounded-xl transition-all active:scale-[0.98]"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-paper hover:bg-mist/20 text-ink font-medium text-sm rounded-xl transition-colors border border-mist/60"
          >
            <span>Explore Financial Tools</span>
            <ArrowUpRight className="w-4 h-4 text-graphite" />
          </Link>
        </div>

      </div>
    </section>
  );
}
