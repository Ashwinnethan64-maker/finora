import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-abyss text-paper pt-20 pb-12 font-sans border-t border-carbon">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Brand & Philosophy */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-paper text-ink flex items-center justify-center font-sans font-bold text-sm">
              F
            </div>
            <span className="font-sans font-bold text-2xl tracking-tight text-paper">
              FINORA
            </span>
          </div>
          <div className="text-xs font-medium tracking-wide uppercase text-ember flex items-center gap-2">
            <span>FINANCIAL INTELLIGENCE</span>
            <span className="text-graphite">•</span>
            <span>PRECISION ADVISORY</span>
            <span className="text-graphite">•</span>
            <span>RESEARCH</span>
            <span className="text-graphite">•</span>
            <span>TOOLS</span>
          </div>
          <p className="text-sm text-steel max-w-xl leading-relaxed">
            A precision instrument for finance teams, founders, and enterprises. Combining rigorous financial engineering, empirical research, and deterministic software for better decisions.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-xs">
          
          <div className="space-y-3">
            <div className="text-paper font-semibold tracking-wide uppercase text-[11px]">ADVISORY</div>
            <ul className="space-y-2 text-steel">
              <li><Link href="/advisory" className="hover:text-paper transition-colors">3-Stmt Modeling</Link></li>
              <li><Link href="/advisory" className="hover:text-paper transition-colors">Corporate Finance</Link></li>
              <li><Link href="/advisory" className="hover:text-paper transition-colors">Equity Research</Link></li>
              <li><Link href="/advisory" className="hover:text-paper transition-colors">Fractional CFO</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-paper font-semibold tracking-wide uppercase text-[11px]">INTELLIGENCE</div>
            <ul className="space-y-2 text-steel">
              <li><Link href="/portal" className="hover:text-paper transition-colors">Overview</Link></li>
              <li><Link href="/portal" className="hover:text-paper transition-colors">13-Wk Cash Telemetry</Link></li>
              <li><Link href="/portal" className="hover:text-paper transition-colors">Scenarios</Link></li>
              <li><Link href="/portal" className="hover:text-paper transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-paper font-semibold tracking-wide uppercase text-[11px]">RESEARCH</div>
            <ul className="space-y-2 text-steel">
              <li><Link href="/research" className="hover:text-paper transition-colors">SME Health Index</Link></li>
              <li><Link href="/research" className="hover:text-paper transition-colors">Valuation Comps</Link></li>
              <li><Link href="/research" className="hover:text-paper transition-colors">Sector Tear-Sheets</Link></li>
              <li><Link href="/research" className="hover:text-paper transition-colors">Macro Commentary</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-paper font-semibold tracking-wide uppercase text-[11px]">TOOLS</div>
            <ul className="space-y-2 text-steel">
              <li><Link href="/tools" className="hover:text-paper transition-colors">SIP Calculator</Link></li>
              <li><Link href="/tools" className="hover:text-paper transition-colors">DCF Valuation</Link></li>
              <li><Link href="/tools" className="hover:text-paper transition-colors">Runway & Burn</Link></li>
              <li><Link href="/tools" className="hover:text-paper transition-colors">Break-Even</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-paper font-semibold tracking-wide uppercase text-[11px]">ENGAGEMENT</div>
            <ul className="space-y-2 text-steel">
              <li><Link href="/pricing" className="hover:text-paper transition-colors">Pricing Tiers</Link></li>
              <li><Link href="/consultation" className="hover:text-paper transition-colors">Intake Form</Link></li>
              <li><Link href="/trust" className="hover:text-paper transition-colors">Trust Center</Link></li>
              <li><Link href="/trust#regulatory" className="hover:text-paper transition-colors">Disclosures</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-paper font-semibold tracking-wide uppercase text-[11px]">GOVERNANCE</div>
            <p className="text-[11px] text-steel leading-relaxed">
              Strict 100% fiduciary standard. Fee-only advisory. Zero third-party commissions or distribution kickbacks.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-carbon flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel">
          <div>
            © {new Date().getFullYear()} FINORA TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
          <div className="text-center font-medium text-graphite hidden md:block">
            BETTER FINANCIAL INFORMATION. BETTER DECISIONS.
          </div>
          <div className="flex gap-6 text-[11px]">
            <Link href="/trust" className="hover:text-paper transition-colors">DPDP Privacy</Link>
            <Link href="/trust" className="hover:text-paper transition-colors">Terms of Service</Link>
            <Link href="/trust#regulatory" className="hover:text-paper transition-colors">Safe Harbor</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
