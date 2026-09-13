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
    <section className="py-20 sm:py-24 bg-paper border-b border-mist/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-mist/50">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pewter block">
              INSTITUTIONAL TRUST
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-ink leading-tight tracking-tight">
              FINORA Trust Center
            </h2>
          </div>
          <Link
            href="/trust"
            className="text-sm font-semibold text-ink hover:text-ember inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
          >
            Read trust charter <ArrowRight className="w-4 h-4 text-ember" />
          </Link>
        </div>

        {/* 3 Pillar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((item, i) => (
            <div key={i} className="p-8 rounded-xl bg-fog border border-mist/50 space-y-4">
              <div className="w-9 h-9 rounded-lg bg-paper border border-mist/50 text-ink flex items-center justify-center">
                <item.icon className="w-4 h-4 text-ember" />
              </div>
              <h3 className="font-sans font-bold text-lg text-ink">
                {item.title}
              </h3>
              <p className="text-xs text-graphite leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
