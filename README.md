# FINORA

## Financial Intelligence for Better Decisions.

FINORA is a modern financial intelligence and corporate advisory platform engineered to help founders, SME promoters, institutional investors, and finance professionals make high-conviction decisions. The platform combines specialized corporate finance advisory, empirical equity research, deterministic computational tools, and forward-looking financial management software.

---

## 1. Project Overview

### What is FINORA?
FINORA bridges the gap between static spreadsheet reporting and institutional financial engineering. It provides structured corporate finance advisory disciplines, mathematical tools, research benchmarks, and a client portal sandbox to turn complex numbers into actionable decisions.

### What Problem Does it Solve?
- **Cash Flow Blindspots:** Replaces retrospective accounting entries with forward-looking 13-week rolling cash telemetry.
- **Diligence Friction:** Replaces broken venture spreadsheets with FAST-compliant, dynamic 3-statement models.
- **Working Capital Lockup:** Identifies trapped liquidity across debtor aging and supply chain credit cycles.
- **Conflict of Interest:** Operates under a 100% fee-only fiduciary model with zero third-party commission kickbacks.

### Who is it Designed For?
- **Startup Founders & Operators:** Preparing for Seed to Series B capital raises, cap table modeling, and VC due diligence defense.
- **Mid-Market SMEs:** Optimizing working capital cycles, bank consortia debt syndication, and CMA reporting.
- **Investors & Analysts:** Leveraging empirical sectoral valuation comps and balance sheet health benchmarks.
- **HNIs & Executives:** Modeling ESOP liquidity cascades and Section 54F tax planning strategies.

---

## 2. Core Areas

| Area | Route | Implemented Capabilities |
| :--- | :--- | :--- |
| **Advisory** | [`/advisory`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/advisory) | Catalog of 8 specialized corporate finance disciplines with milestone deliverables, timelines, and scope builders. |
| **Intelligence** | [`/intelligence`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/intelligence) | Architectural overview of the Finora OS SaaS platform, cash telemetry, and scenario engines. |
| **Tools Hub** | [`/tools`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/tools) | Real-time mathematical engines: SIP compounding, 2-Stage DCF valuation, runway/burn calculator, and break-even unit analyzer. |
| **Research** | [`/research`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/research) | Flagship *India SME Financial Health Index* (420 clusters sampled) and sectoral valuation tear-sheets. |
| **Pricing** | [`/pricing`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/pricing) | Transparent consulting tiers: 72-Hr Audit Sprint, Financial Model Sprint, Fractional CFO Retainer, and Custom Mandates. |
| **Trust Center** | [`/trust`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/trust) | Fiduciary code, DPDP Act 2023 security protocols, mathematical determinism policies, and SEBI safe harbor disclosures. |
| **Consultation** | [`/consultation`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/consultation) | 7-Step guided scoping intake flow with client profiling, objective routing, budget matching, and 5-stage next-step roadmap. |
| **Client Portal** | [`/portal`](https://github.com/Ashwinnethan64-maker/finora/tree/main/app/portal) | Interactive Finora OS sandbox featuring consolidated balance sheets, live 13-week cash telemetry tables, and scenario elasticity sliders. |

---

## 3. Key Features

- **Flat Financial Editorial Design:** Clean Swiss/editorial layout featuring solid color blocks (Blue `#3B82F6`, Emerald `#10B981`, Amber `#F59E0B`, Dark `#111827`, White `#FFFFFF`) with zero drop shadows.
- **Interactive Financial Diagnostic:** 2-Step diagnostic engine evaluating user archetype and problem domain to recommend targeted advisory engagements.
- **Deterministic Computational Engines:**
  - *SIP Engine:* Compounded monthly wealth accumulation model.
  - *2-Stage DCF Engine:* Gordon Growth model discounting explicit 5-year projections and perpetual terminal values at WACC.
  - *Runway & Burn Calculator:* Calculates zero-cash dates from gross operating expenses and collected revenues.
  - *Break-Even Analyzer:* Determines required sales volume and contribution margin (CM1) ratios.
- **Interactive Scenario Sensitivity Simulator:** Live client portal slider controls adjusting debtor collection cycles and burn rates to dynamically calculate forward runway.
- **Verified Institutional Content:** Realistic case studies, research methodologies, and transparent pricing structures with zero fake discounts or artificial urgency.
- **Full SEO & Accessibility Support:** Unique Next.js metadata, OpenGraph tags, semantic HTML5 headings, high-contrast focus rings, and `@media (prefers-reduced-motion)` overrides.

---

## 4. Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** (App Router) | React application framework and server-side rendering |
| **React 18** | UI component architecture and state management |
| **TypeScript 5** | End-to-end static type safety |
| **Tailwind CSS 3** | Flat design system styling, tokens, and responsive utilities |
| **Outfit Font** (Google Fonts) | Primary geometric display and body typography via `next/font/google` |
| **Lucide React** | Clean, accessible SVG iconography |
| **Recharts** | Interactive financial visualization engines |
| **Framer Motion** | Micro-interactions and smooth component state transitions |

---

## 5. Project Structure

```text
finora/
├── app/                                 # Next.js 14 App Router Directory
│   ├── layout.tsx                       # Root layout (Outfit font, Navbar, Footer)
│   ├── page.tsx                         # Master Flat Financial Editorial Homepage
│   ├── globals.css                      # Global CSS reset & Flat design tokens
│   ├── advisory/page.tsx                # Finora Advisory 8-discipline catalog
│   ├── intelligence/page.tsx            # Finora Intelligence & SaaS overview
│   ├── research/page.tsx                # Institutional research desk & SME Index
│   ├── tools/page.tsx                   # Interactive financial computational workbench
│   ├── pricing/page.tsx                 # Transparent consulting engagement tiers
│   ├── trust/page.tsx                   # Trust Center, DPDP security & safe-harbor disclosures
│   ├── consultation/page.tsx            # Guided 7-step intake scoping form
│   └── portal/page.tsx                  # Finora OS client cockpit sandbox
│
├── components/                          # Modular Reusable UI Components
│   ├── navigation/                      # Sticky navbar and mobile drawer
│   ├── hero/                            # Solid blue editorial hero with product preview
│   ├── home/                            # Homepage sections (Problem, Services, Diagnostic, etc.)
│   └── footer/                          # Structured dark institutional footer
│
├── lib/                                 # Business Logic & Data Models
│   ├── calculations.ts                  # Pure deterministic math (SIP, DCF, Runway, Break-Even)
│   ├── data.ts                          # Structured datasets for services, research, and pricing
│   └── utils.ts                         # Class mergers (cn) and Indian currency formatters (formatINR)
│
├── public/                              # Static public assets
├── .gitignore                           # Git ignore definitions
├── next.config.js                       # Next.js runtime configuration
├── package.json                         # Project metadata and dependencies
├── postcss.config.js                    # PostCSS configuration
├── tailwind.config.js                   # Tailwind Flat Editorial design tokens
├── tsconfig.json                        # TypeScript configuration
└── README.md                            # Repository documentation
```

---

## 6. Getting Started

### Prerequisites
- **Node.js:** v18.17.0 or higher
- **npm:** v9.0.0 or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ashwinnethan64-maker/finora.git
   cd finora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 7. Compliance & Regulatory Safe Harbor

- **Non-Retail Disclaimer:** FINORA operates strictly as a corporate finance management consultancy and financial intelligence SaaS platform. FINORA does not provide retail public stock advice or portfolio management under SEBI (Investment Advisers) Regulations, 2013 or SEBI (Research Analysts) Regulations, 2014.
- **Data Protection:** All financial statements, cap tables, and client data are protected under the Digital Personal Data Protection (DPDP) Act 2023 and encrypted at rest with AES-256.
- **Zero Commission Standard:** FINORA maintains a 100% fee-only fiduciary model and does not accept third-party distribution cuts or affiliate kickbacks.

---

## 8. License

Copyright © 2026 FINORA Technologies. All rights reserved.
