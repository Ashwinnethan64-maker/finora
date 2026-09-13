import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

export function EditorialServices() {
  return (
    <section className="py-20 sm:py-24 bg-fog border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist/50">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              ADVISORY DISCIPLINES
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
              Financial expertise. <br />
              <span className="text-graphite">When it matters.</span>
            </h2>
          </div>
          <Link
            href="/advisory"
            className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            Explore all 8 services <ArrowRight className="w-4 h-4 text-ember" />
          </Link>
        </div>

        {/* 2-Column Grid of Flat White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-xl bg-paper border border-mist/60 flex flex-col justify-between space-y-6 transition-all hover:border-mist group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-pewter px-2 py-0.5 rounded-tag bg-fog border border-mist/40">
                    {service.number}
                  </span>
                  <span className="text-xs text-pewter">
                    {service.engagement}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-ink group-hover:text-ember transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                  {service.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-mist/30 flex items-center justify-between text-xs">
                <span className="text-pewter">
                  Timeline: <strong className="text-ink">{service.timeline}</strong>
                </span>
                <Link
                  href="/consultation"
                  className="font-medium text-ink group-hover:text-ember flex items-center gap-1 transition-colors"
                >
                  <span>Scope Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-ember group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
