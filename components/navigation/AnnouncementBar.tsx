import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-carbon text-paper py-2 px-4 text-xs font-medium border-b border-white/10 select-none">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 tracking-tight">
          <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse"></span>
          <span className="font-semibold text-white tracking-wide uppercase text-[11px]">FINORA INTELLIGENCE</span>
          <span className="text-steel hidden sm:inline">•</span>
          <span className="text-steel hidden sm:inline">Precision Financial Intelligence for Better Decisions</span>
        </div>
        <Link
          href="/consultation"
          className="flex items-center gap-1 text-[11px] font-semibold text-white hover:text-ember transition-colors"
        >
          <span>Schedule Executive Session</span>
          <ArrowRight className="w-3 h-3 text-ember" />
        </Link>
      </div>
    </div>
  );
}
