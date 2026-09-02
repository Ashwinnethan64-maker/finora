import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

export function EditorialServices() {
  return (
    <section className="py-20 sm:py-28 bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              ADVISORY DISCIPLINES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Financial expertise. <br />
              <span className="text-muted-foreground">Built around the decision.</span>
            </h2>
          </div>
          <Link
            href="/advisory"
            className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            Explore all 8 disciplines <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column / 4-Row Structured Grid of Flat White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-lg bg-white border border-border flex flex-col justify-between space-y-6 transition-all hover:border-primary group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-extrabold text-primary px-2.5 py-1 rounded bg-primary-subtle">
                    {service.number}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {service.engagement}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Timeline: <strong className="text-foreground">{service.timeline}</strong>
                </span>
                <Link
                  href="/consultation"
                  className="font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Scope Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
