import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

export const metadata = {
  title: "Finora Advisory | Corporate Finance & Financial Modelling",
  description: "Specialized corporate financial engineering, dynamic 3-statement models, working capital compression, and fractional CFO retainers."
};

export default function AdvisoryPage() {
  return (
    <div className="bg-paper py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
            FINORA ADVISORY
          </span>
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
            Financial & Corporate Advisory
          </h1>
          <p className="text-base sm:text-lg text-graphite leading-relaxed">
            High-conviction financial engineering tailored for capital raises, balance sheet optimizations, and strategic corporate decisions.
          </p>
        </div>

        {/* 8 Full Service Deconstructions */}
        <div className="space-y-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-xl border border-mist/60 bg-fog space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-mist/40 gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-sm font-bold text-pewter px-2.5 py-1 rounded-tag bg-paper border border-mist/40">
                    {service.number}
                  </span>
                  <h2 className="font-sans font-bold text-xl sm:text-2xl text-ink">
                    {service.title}
                  </h2>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-tag bg-paper text-pewter border border-mist/40 w-fit">
                  {service.engagement} • {service.timeline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-6 space-y-4">
                  <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="p-4 rounded-xl bg-paper border border-mist/50 text-xs text-graphite space-y-1">
                    <div className="font-semibold text-ink uppercase text-[11px]">
                      Ideal For:
                    </div>
                    <div>{service.whoItsFor}</div>
                  </div>
                </div>

                <div className="md:col-span-6 space-y-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-pewter">
                    Key Deliverables
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((del, idx) => (
                      <li key={idx} className="text-xs text-graphite flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-ember flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex justify-end">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-ink hover:bg-carbon text-paper font-medium text-xs transition-colors"
                    >
                      <span>Scope this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
