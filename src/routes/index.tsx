import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/funnel/HeroSection";
import { BrandDivider } from "@/components/funnel/BrandDivider";
import { GrowthSection } from "@/components/funnel/GrowthSection";
import { IncludedSection } from "@/components/funnel/IncludedSection";
import { ServicesSection } from "@/components/funnel/ServicesSection";
import { TrustedSection } from "@/components/funnel/TrustedSection";
import { PricingSection } from "@/components/funnel/PricingSection";
import { ProcessSection } from "@/components/funnel/ProcessSection";
import { ReviewStrip } from "@/components/funnel/ReviewStrip";
import { FaqSection } from "@/components/funnel/FaqSection";
import { ClosingCTA } from "@/components/funnel/ClosingCTA";
import { ChatButton } from "@/components/funnel/primitives";
import { CopyBoardLogo } from "@/components/funnel/CopyBoardLogo";
import { BeforeAfterSection } from "@/components/funnel/BeforeAfterSection";
import { TestimonialsSection } from "@/components/funnel/TestimonialsSection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CopyBoard — Unlimited Content Creation, One Flat Fee" },
      {
        name: "description",
        content:
          "Unlimited design, video editing, podcast editing and short & long-form content from real human creators. One flat monthly fee, fast turnaround, cancel anytime.",
      },
      { property: "og:title", content: "CopyBoard — Unlimited Content Creation, One Flat Fee" },
      {
        property: "og:description",
        content:
          "Done-for-you unlimited content: design, video, podcast and social. Real humans, flat monthly fee, cancel anytime.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FunnelPage,
});

function FunnelPage() {
  return (
    <main className="min-h-screen bg-ink">
      <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 sm:px-10">
        <CopyBoardLogo className="h-[30px] shrink-0 sm:h-10" />
        <ChatButton className="hidden px-5 py-2.5 text-xs sm:inline-flex" />
      </header>

      <HeroSection />
      <BrandDivider />
      <GrowthSection />
      <BeforeAfterSection />
      <IncludedSection />
      <ServicesSection />
      <ReviewStrip />
      <ProcessSection />
      <BrandDivider />
      <TrustedSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ClosingCTA />

    </main>
  );
}
