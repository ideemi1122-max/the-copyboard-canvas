import { ChatButton, GemAccent, Reveal } from "./primitives";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 text-center sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.25]" />

      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-primary/35 bg-charcoal px-6 py-12 shadow-[0_0_90px_-40px_color-mix(in_oklab,var(--color-primary)_85%,transparent)] sm:px-12">
          <span className="pointer-events-none absolute inset-x-0 -top-20 h-40 beam-glow" />
          <h3 className="relative text-2xl font-bold leading-snug sm:text-3xl">
            Your next request could be <span className="text-primary">done by tomorrow</span>
          </h3>
          <p className="relative mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Tell us what you need this week — we'll show you exactly how fast your queue moves.
          </p>
          <div className="relative mt-7">
            <ChatButton className="w-full px-9 py-4 text-base sm:w-auto" />
          </div>
        </div>
      </Reveal>

      <GemAccent kind="star" size={58} className="absolute bottom-8 left-3 sm:left-10 sm:h-[86px] sm:w-[86px]" />
      <GemAccent kind="diamond" size={52} className="absolute bottom-10 right-3 sm:right-10 sm:h-[80px] sm:w-[80px]" />
    </section>
  );
}
