import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-12 font-sans border-t border-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top: Clean FINORA Brand Mark & Tagline */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-primary text-white flex items-center justify-center font-display font-extrabold text-lg">
              F
            </div>
            <span className="font-display font-extrabold text-3xl tracking-tight text-white">
              FINORA
            </span>
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            FINANCIAL INTELLIGENCE • ADVISORY • RESEARCH • TOOLS • OS
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-xs font-semibold uppercase tracking-wider">
          
          <div className="space-y-3">
            <div className="text-white font-extrabold">ADVISORY</div>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link href="/advisory" className="hover:text-primary">3-Stmt Modeling</Link></li>
              <li><Link href="/advisory" className="hover:text-primary">Working Capital</Link></li>
              <li><Link href="/advisory" className="hover:text-primary">Debt Syndication</Link></li>
              <li><Link href="/advisory" className="hover:text-primary">Fractional CFO</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-extrabold">INTELLIGENCE</div>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link href="/portal" className="hover:text-primary">Finora OS</Link></li>
              <li><Link href="/portal" className="hover:text-primary">13-Wk Telemetry</Link></li>
              <li><Link href="/portal" className="hover:text-primary">Scenarios</Link></li>
              <li><Link href="/portal" className="hover:text-primary">Portfolio</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-extrabold">RESEARCH</div>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link href="/research" className="hover:text-primary">SME Health Index</Link></li>
              <li><Link href="/research" className="hover:text-primary">Valuation Comps</Link></li>
              <li><Link href="/research" className="hover:text-primary">Sector Reports</Link></li>
              <li><Link href="/research" className="hover:text-primary">Model Library</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-extrabold">TOOLS</div>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link href="/tools" className="hover:text-primary">SIP Calculator</Link></li>
              <li><Link href="/tools" className="hover:text-primary">DCF Valuation</Link></li>
              <li><Link href="/tools" className="hover:text-primary">Runway & Burn</Link></li>
              <li><Link href="/tools" className="hover:text-primary">Break-Even</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-extrabold">ENGAGEMENT</div>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link href="/pricing" className="hover:text-primary">Pricing Tiers</Link></li>
              <li><Link href="/consultation" className="hover:text-primary">Intake Form</Link></li>
              <li><Link href="/trust" className="hover:text-primary">Trust Center</Link></li>
              <li><Link href="/trust#regulatory" className="hover:text-primary">Disclosures</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white font-extrabold">GOVERNANCE</div>
            <p className="text-[11px] text-dark-foreground/60 leading-relaxed font-normal normal-case">
              Bengaluru & Mumbai Financial Corridors.<br />
              Strict 100% fiduciary standard. Zero third-party commissions.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-surface flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-foreground/60">
          <div>
            © {new Date().getFullYear()} FINORA TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 uppercase tracking-wider text-[11px]">
            <Link href="/trust" className="hover:text-white">DPDP Privacy</Link>
            <Link href="/trust" className="hover:text-white">Terms</Link>
            <Link href="/trust" className="hover:text-white">Safe Harbor</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
