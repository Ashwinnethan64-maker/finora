import React from "react";

export function TrustStrip() {
  const disciplines = [
    { label: "Financial Modelling", desc: "Institutional 3-statement logic" },
    { label: "Corporate Finance", desc: "Capital structures & syndication" },
    { label: "Equity Research", desc: "Sectoral valuation comps" },
    { label: "Risk Management", desc: "Working capital optimization" },
    { label: "Financial Analytics", desc: "Granular unit economics" },
    { label: "Strategic Planning", desc: "Fractional CFO leadership" },
  ];

  return (
    <section className="bg-fog border-b border-mist/40 py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-[11px] font-bold uppercase tracking-widest text-pewter text-center sm:text-left">
          FINANCIAL EXPERTISE. BUILT AROUND THE DECISION.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {disciplines.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-paper border border-mist/40 space-y-1">
              <div className="text-xs font-bold text-ink">
                {item.label}
              </div>
              <div className="text-[11px] text-pewter font-normal leading-snug">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
