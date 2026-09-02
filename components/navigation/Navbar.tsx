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
  { href: "/trust", label: "Trust" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          "sticky top-0 z-50 w-full transition-all duration-150 bg-white border-b",
          scrolled
            ? "border-border shadow-none py-3.5"
            : "border-border py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo System: Clean Geometric F Symbol */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="FINORA Home">
            <div className="w-9 h-9 rounded-md bg-primary text-white flex items-center justify-center font-display font-extrabold text-lg transition-transform group-hover:scale-105">
              F
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-foreground block leading-none">
                FINORA
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase block mt-1">
                FINANCIAL INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors py-1 relative",
                    isActive
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary" />}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/portal"
              className="text-sm font-semibold text-foreground hover:text-primary px-3.5 py-2.5 rounded-md bg-muted hover:bg-muted-dark transition-colors"
            >
              Portal
            </Link>

            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 h-12 px-5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-md transition-all active:scale-98"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/consultation"
              className="sm:hidden text-xs font-semibold bg-primary text-white px-3 py-2 rounded-md"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md border border-border text-foreground hover:bg-muted"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-dark/50 backdrop-blur-none animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 flex flex-col justify-between shadow-none border-l border-border">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-primary text-white flex items-center justify-center font-extrabold">F</div>
                  <span className="font-extrabold text-lg text-foreground">FINORA</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/portal"
                  className="text-base font-bold text-foreground hover:text-primary py-2 px-3 rounded-md hover:bg-muted"
                >
                  Client Portal
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <Link
                href="/consultation"
                className="w-full flex items-center justify-center gap-2 h-14 bg-primary text-white font-bold text-sm rounded-md uppercase tracking-wider"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
