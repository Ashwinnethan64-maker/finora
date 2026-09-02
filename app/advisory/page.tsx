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
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
            FINORA ADVISORY
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-foreground tracking-tight leading-tight">
            Financial & Corporate Consulting Disciplines
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            High-conviction financial engineering tailored for capital raises, balance sheet optimizations, and strategic transactions.
          </p>
        </div>

        {/* 8 Full Service Deconstructions */}
        <div className="space-y-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-lg border border-border bg-muted space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-border gap-4">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xl font-extrabold text-primary px-3 py-1 rounded bg-primary-subtle">
                    {service.number}
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground">
                    {service.title}
                  </h2>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-white text-muted-foreground border border-border w-fit">
                  {service.engagement} • {service.timeline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-6 space-y-4">
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="p-4 rounded-md bg-white border border-border text-xs text-muted-foreground space-y-1">
                    <div className="font-bold text-foreground uppercase tracking-wider">
                      Ideal For:
                    </div>
                    <div>{service.whoItsFor}</div>
                  </div>
                </div>

                <div className="md:col-span-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Key Milestone Deliverables
                  </div>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((del, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-foreground flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex justify-end">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Scope this Service →
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
