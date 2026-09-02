import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, Scale } from "lucide-react";

export function TrustCenterTeaser() {
  const pillars = [
    {
      icon: Scale,
      title: "100% Fee-Only Fiduciary",
      desc: "Zero kickbacks, commissions, or affiliate payouts from any financial institution."
    },
    {
      icon: Lock,
      title: "DPDP Act 2023 Security",
      desc: "All ledgers and models are encrypted at rest with AES-256 and governed by strict NDAs."
    },
    {
      icon: ShieldCheck,
      title: "Institutional Governance",
      desc: "Clear distinction between corporate strategic finance and retail investment advisory."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary block">
              INSTITUTIONAL TRUST & GOVERNANCE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Trust as a core product feature.
            </h2>
          </div>
          <Link
            href="/trust"
            className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            Read trust charter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Pillar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <div key={i} className="p-8 rounded-lg bg-muted border border-border space-y-4">
              <div className="w-10 h-10 rounded-md bg-primary-subtle text-primary flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
