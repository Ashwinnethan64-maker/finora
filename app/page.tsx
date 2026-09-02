import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { EditorialServices } from "@/components/home/EditorialServices";
import { FinancialDiagnostic } from "@/components/home/FinancialDiagnostic";
import { FinoraIntelligencePreview } from "@/components/home/FinoraIntelligencePreview";
import { ToolsSection } from "@/components/home/ToolsSection";
import { FeaturedResearch } from "@/components/home/FeaturedResearch";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { HowFinoraWorks } from "@/components/home/HowFinoraWorks";
import { FounderSection } from "@/components/home/FounderSection";
import { PricingPreviewSection } from "@/components/home/PricingPreviewSection";
import { TrustCenterTeaser } from "@/components/home/TrustCenterTeaser";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Bold Blue Hero */}
      <HeroSection />

      {/* 2. Static Muted Expertise Strip */}
      <TrustStrip />

      {/* 3. Problem / Insight (3 Color Blocks) */}
      <ProblemSection />

      {/* 4. Advisory Services (Light Gray Background) */}
      <EditorialServices />

      {/* 5. Financial Diagnostic (Interactive Tool) */}
      <FinancialDiagnostic />

      {/* 6. Finora Intelligence SaaS Preview (White Dashboard) */}
      <FinoraIntelligencePreview />

      {/* 7. Financial Tools Highlight */}
      <ToolsSection />

      {/* 8. Institutional Research & SME Index */}
      <FeaturedResearch />

      {/* 9. Verified Case Studies */}
      <CaseStudiesSection />

      {/* 10. How Finora Works (Dark Section with Amber Accents) */}
      <HowFinoraWorks />

      {/* 11. Founder & Philosophy */}
      <FounderSection />

      {/* 12. Engagements & Pricing Preview */}
      <PricingPreviewSection />

      {/* 13. Trust Center Teaser */}
      <TrustCenterTeaser />

      {/* 14. Bold Amber Final Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
