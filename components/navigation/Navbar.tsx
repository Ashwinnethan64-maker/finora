"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/advisory", label: "Advisory" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/research", label: "Research" },
  { href: "/tools", label: "Tools" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-150 bg-paper border-b",
          scrolled
            ? "border-mist/60 py-3"
            : "border-mist/40 py-3.5"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Mark: Clean Minimal F logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="FINORA Financial Intelligence">
            <div className="w-8 h-8 rounded-lg bg-ink text-paper flex items-center justify-center font-sans font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base tracking-tight text-ink block leading-none">
                FINORA
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-pewter uppercase block mt-0.5">
                FINANCIAL INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors py-1 relative",
                    isActive
                      ? "text-ink font-semibold"
                      : "text-graphite hover:text-ink"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-ember rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/trust"
              className={cn(
                "text-sm font-medium px-3 py-2 rounded-xl transition-colors",
                pathname.startsWith("/trust") ? "text-ink font-semibold" : "text-graphite hover:text-ink"
              )}
            >
              Trust
            </Link>

            <Link
              href="/portal"
              className="text-sm font-medium text-graphite hover:text-ink px-3.5 py-2 rounded-xl border border-mist/50 hover:bg-fog transition-colors"
            >
              Portal
            </Link>

            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 bg-ember hover:bg-ember-hover text-white font-medium text-sm rounded-xl transition-all active:scale-[0.98]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/consultation"
              className="sm:hidden text-xs font-medium bg-ember text-white px-3 py-2 rounded-xl"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl border border-mist text-ink hover:bg-fog"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-abyss/40 animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-paper p-6 flex flex-col justify-between border-l border-mist">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-mist/40">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-ink text-paper flex items-center justify-center font-bold text-xs">F</div>
                  <span className="font-bold text-base text-ink">FINORA</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg text-graphite hover:text-ink"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-graphite hover:text-ink py-2 px-3 rounded-xl hover:bg-fog"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/trust"
                  className="text-sm font-medium text-graphite hover:text-ink py-2 px-3 rounded-xl hover:bg-fog"
                >
                  Trust Center
                </Link>
                <Link
                  href="/portal"
                  className="text-sm font-medium text-graphite hover:text-ink py-2 px-3 rounded-xl hover:bg-fog"
                >
                  Client Portal
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-mist/40">
              <Link
                href="/consultation"
                className="w-full flex items-center justify-center gap-2 h-11 bg-ember text-white font-medium text-sm rounded-xl"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
