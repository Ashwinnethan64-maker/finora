// FINORA Data Models & Content Repository

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  whoItsFor: string;
  deliverables: string[];
  engagement: string;
  timeline: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "financial-modelling",
    number: "01",
    title: "Financial Modelling",
    summary: "Audit-ready 3-statement forecast architectures with dynamic revenue build-ups, working capital linkages, and scenario sensitivity toggles.",
    whoItsFor: "Founders raising Series A/B, M&A teams, and corporate boards requiring defensible projection models.",
    deliverables: [
      "Dynamic 3-statement master model (.xlsx)",
      "Cohort unit economics & CAC/LTV payback reconciliation",
      "Bull / Base / Bear scenario matrix",
      "Executive investor tear-sheet & cap table waterfall"
    ],
    engagement: "Fixed Project Sprint",
    timeline: "2 – 3 Weeks"
  },
  {
    id: "corporate-finance",
    number: "02",
    title: "Corporate Finance & Debt Advisory",
    summary: "Capital structure optimization, bank CMA data room preparation, working capital limit restructuring, and institutional debt syndication.",
    whoItsFor: "Mid-market manufacturing, trading, and logistics enterprises seeking bank term loans or working capital credit.",
    deliverables: [
      "Bank-compliant CMA projections & DSCR covenant models",
      "Consortium negotiation deck & sensitivity benchmarks",
      "Interest rate & credit cost reduction strategy"
    ],
    engagement: "Fixed Advisory + Milestone Success",
    timeline: "3 – 5 Weeks"
  },
  {
    id: "equity-research",
    number: "03",
    title: "Equity Research & Valuation",
    summary: "Empirical sectoral valuation models, DCF/SOTP valuations, FEMA 20 FDI pricing compliance certificates, and comparable multiple analysis.",
    whoItsFor: "Institutional capital allocators, PE/VC firms, and promoters executing unlisted share buybacks or secondary exits.",
    deliverables: [
      "Comprehensive DCF & public peer comps report",
      "Sectoral EV/ARR & EV/EBITDA multiple benchmark",
      "Regulatory valuation compliance documentation"
    ],
    engagement: "Per Valuation Mandate",
    timeline: "1 – 2 Weeks"
  },
  {
    id: "risk-management",
    number: "04",
    title: "Risk Management & Stress Testing",
    summary: "Identification of trapped liquidity vulnerabilities, debtor concentration hazards, supply-chain currency drag, and covenant breach triggers.",
    whoItsFor: "Enterprises with high raw material volatility, complex debtor terms, or foreign currency exposure.",
    deliverables: [
      "Balance sheet liquidity stress test report",
      "Debtor concentration risk matrix & mitigation playbook",
      "Cash buffer sizing & contingency liquidity framework"
    ],
    engagement: "Comprehensive Audit Sprint",
    timeline: "2 Weeks"
  },
  {
    id: "strategic-planning",
    number: "05",
    title: "Strategic Planning & Fractional CFO",
    summary: "Ongoing institutional financial leadership, rolling 13-week cash forecasting, board pack preparation, and executive decision support.",
    whoItsFor: "Companies ($2M – $25M revenue) requiring institutional CFO clarity without full-time C-suite overhead.",
    deliverables: [
      "Weekly 13-week rolling cash flow operating system",
      "Monthly MIS variance & unit contribution telemetry",
      "Quarterly board meeting pack generation",
      "Direct partner-level strategic consultation channel"
    ],
    engagement: "Monthly Retainer (Quarterly minimum)",
    timeline: "Ongoing Retainer"
  },
  {
    id: "tax-accounting-strategy",
    number: "06",
    title: "Tax & Accounting Strategy",
    summary: "Section 54F / 54EC capital gains optimization on unlisted liquidity, ESOP exercise timing strategy, and corporate restructuring blueprints.",
    whoItsFor: "Founders, C-suite executives with ESOPs, and promoters facing significant transaction tax friction.",
    deliverables: [
      "Post-tax liquidity optimization blueprint",
      "Section 54F compliance roadmap & reinvestment calendar",
      "ESOP exercise tax mitigation strategy"
    ],
    engagement: "Sprint or Dedicated Advisory",
    timeline: "1 – 2 Weeks"
  },
  {
    id: "financial-analytics",
    number: "07",
    title: "Financial Analytics & Unit Economics",
    summary: "Granular SKU-level contribution margin analysis (CM1/CM2/CM3), customer cohort retention curves, and working capital cycle decomposition.",
    whoItsFor: "D2C, B2B SaaS, and multi-branch retail companies experiencing revenue growth alongside margin dilution.",
    deliverables: [
      "Automated unit economics dashboard architecture",
      "Product & customer profitability waterfall",
      "Cash conversion cycle compression roadmap"
    ],
    engagement: "Analytics Sprint",
    timeline: "2 Weeks"
  },
  {
    id: "custom-projects",
    number: "08",
    title: "Custom Finance Projects & M&A",
    summary: "Cross-border joint ventures, specialized carve-outs, financial due diligence vendor defense, and bespoke transaction structuring.",
    whoItsFor: "Corporations executing complex asset transactions, joint ventures, or non-standard financial engineering.",
    deliverables: [
      "Custom milestone financial architecture",
      "Vendor due diligence defense room management",
      "Tailored executive briefing & stakeholder defense"
    ],
    engagement: "Custom Milestone Scope",
    timeline: "Tailored"
  }
];

export interface ResearchPaper {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const RESEARCH_DATA: ResearchPaper[] = [
  {
    id: "sme-health-index-q3",
    category: "Flagship Benchmark",
    title: "India SME Financial Health Index (Q3 Edition)",
    summary: "An empirical analysis of Cash Conversion Cycles across 420 Indian manufacturing clusters, highlighting a median 64-day debtor lockup and practical liquidity extraction strategies.",
    date: "September 2026",
    readTime: "24 min read",
    featured: true
  },
  {
    id: "saas-valuation-multiples",
    category: "Corporate Valuation",
    title: "Indian Enterprise SaaS Multiples: The Rule of 40 Premium",
    summary: "Benchmarking 58 unlisted Indian B2B software companies against global ARR multiples, showing the resilience of efficient growth over pure burn-fueled expansion.",
    date: "August 2026",
    readTime: "14 min read"
  },
  {
    id: "section-54f-capital-gains",
    category: "Tax & Wealth Strategy",
    title: "Structuring Section 54F for Unlisted Secondary Liquidity",
    summary: "A tax framework for founders and early employees navigating secondary ESOP sales, balancing statutory reinvestment windows with wealth diversification.",
    date: "July 2026",
    readTime: "11 min read"
  },
  {
    id: "13-week-cash-model",
    category: "Financial Architecture",
    title: "Constructing a Resilient 13-Week Cash Flow OS",
    summary: "Why traditional monthly P&Ls conceal impending liquidity crunches and how high-growth businesses can deploy deterministic rolling cash models.",
    date: "June 2026",
    readTime: "16 min read"
  }
];
