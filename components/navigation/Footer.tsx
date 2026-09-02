import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-finora-border bg-finora-bg-subtle text-finora-ink pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-finora-border">
          
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-finora-ink flex items-center justify-center text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20V8H9V11H18V15H9V20H4V4Z" fill="currentColor" />
                  <circle cx="18" cy="18" r="2" fill="#B88A2D" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-finora-ink">FINORA</span>
            </div>
            
            <p className="text-sm text-finora-ink-muted leading-relaxed max-w-sm">
              Finora combines financial expertise, data, and intelligent tools to help individuals and businesses understand their numbers, plan with confidence, and make better financial decisions.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-finora-border text-xs text-finora-ink-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-finora-emerald" />
              <span>DPDP Act 2023 Compliant Data Vault</span>
            </div>
          </div>

          {/* Sub-Brands & Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-finora-ink-muted">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm text-finora-ink">
              <li><Link href="/advisory" className="hover:text-finora-gold transition-colors">Finora Advisory</Link></li>
              <li><Link href="/intelligence" className="hover:text-finora-gold transition-colors">Finora Intelligence</Link></li>
              <li><Link href="/research" className="hover:text-finora-gold transition-colors">Finora Research</Link></li>
              <li><Link href="/portal" className="hover:text-finora-gold transition-colors">Finora OS</Link></li>
              <li><Link href="/research" className="hover:text-finora-gold transition-colors">Finora Insights</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-finora-ink-muted">
              Platform & Tools
            </h4>
            <ul className="space-y-2 text-sm text-finora-ink">
              <li><Link href="/tools" className="hover:text-finora-gold transition-colors">SIP & Compound Interest</Link></li>
              <li><Link href="/tools" className="hover:text-finora-gold transition-colors">DCF Valuation Engine</Link></li>
              <li><Link href="/tools" className="hover:text-finora-gold transition-colors">Runway & Burn Calculator</Link></li>
              <li><Link href="/tools" className="hover:text-finora-gold transition-colors">Break-Even Analysis</Link></li>
              <li><Link href="/pricing" className="hover:text-finora-gold transition-colors">Pricing & Scope Tiers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-finora-ink-muted">
              Governance Desk
            </h4>
            <p className="text-xs text-finora-ink-muted leading-relaxed">
              Bengaluru & Mumbai Financial Corridors.<br />
              Strict 100% fiduciary code. Zero commission kickbacks from AMCs, PMS houses, or banks.
            </p>
            <div className="pt-2">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-finora-ink bg-white border border-finora-border hover:border-finora-border-strong px-3 py-2 rounded transition-colors"
              >
                Schedule Executive Intake →
              </Link>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-finora-ink-subtle">
          <div>
            © {new Date().getFullYear()} FINORA Technologies. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/trust" className="hover:text-finora-ink transition-colors">Trust Center</Link>
            <Link href="/trust#regulatory" className="hover:text-finora-ink transition-colors">Regulatory Disclosures</Link>
            <Link href="/trust#security" className="hover:text-finora-ink transition-colors">Privacy & Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
