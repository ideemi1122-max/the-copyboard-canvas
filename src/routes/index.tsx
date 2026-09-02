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
import { CopyBoardMark } from "@/components/funnel/CopyBoardMark";

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
        <span className="flex items-center gap-2.5">
          <CopyBoardMark size={30} className="h-[30px] w-[30px] shrink-0 sm:h-9 sm:w-9" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">CopyBoard</span>
        </span>
        <ChatButton className="hidden px-5 py-2.5 text-xs sm:inline-flex" />
      </header>

      <HeroSection />
      <BrandDivider />
      <GrowthSection />
      <IncludedSection />
      <ServicesSection />
      <ProcessSection />
      <BrandDivider />
      <TrustedSection />
      <ReviewStrip />
      <PricingSection />
      <FaqSection />
      <ClosingCTA />
    </main>
  );
}
