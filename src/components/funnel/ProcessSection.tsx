import { useRef } from "react";
import { ChatButton, GemAccent, Reveal, useInView } from "./primitives";

const steps = [
  {
    n: "01",
    title: "Submit Your Request",
    desc: "Drop your brief or raw content into your dashboard — takes minutes.",
    status: "In queue",
    icon: (
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    ),
  },
  {
    n: "02",
    title: "We Create From Scratch",
    desc: "Real designers and editors build it by hand, no AI shortcuts, no templates.",
    status: "In progress",
    icon: <path d="M10.5 2.5 13.5 5.5 5.5 13.5H2.5v-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  },
  {
    n: "03",
    title: "Receive, Review, Post",
    desc: "Get polished, ready-to-publish content back, request changes if needed, then submit the next one.",
    status: "Delivered",
    icon: <path d="m3 8.4 3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const active = useInView(ref);

  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 sm:py-24 text-center">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.25]" />

      <div className="relative mx-auto max-w-2xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">How It Works</p>
        <h2 className="mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl md:text-[2.75rem]">
          Three steps from brief to <span className="marker-highlight">published content</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          No onboarding maze, no scoping calls, no surprise invoices. Send the request, we start today.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
        <svg className="pointer-events-none absolute left-0 right-0 top-10 hidden h-2 w-full lg:block" viewBox="0 0 1000 2" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M60 1 H940"
            stroke="#FFD400"
            strokeWidth="2"
            strokeDasharray="10 10"
            strokeDashoffset={active ? 0 : 1000}
            opacity="0.3"
            style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1)", strokeDasharray: active ? "10 10" : "1000" }}
          />
        </svg>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140}>
              <div className="relative flex flex-col items-center px-3 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full border border-primary/50 bg-ink font-display text-2xl font-bold text-primary shadow-[0_0_40px_-14px_color-mix(in_oklab,var(--color-primary)_80%,transparent)]">
                  {s.n}
                </span>
                <span className="mt-5 grid h-10 w-10 place-items-center rounded-xl bg-charcoal text-primary">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-4 rounded-full border border-foreground/10 bg-charcoal px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                  {s.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={160}>
        <div className="relative mx-auto mt-20 max-w-3xl overflow-hidden rounded-[2rem] border border-primary/35 bg-charcoal px-6 py-12 shadow-[0_0_90px_-40px_color-mix(in_oklab,var(--color-primary)_85%,transparent)] sm:px-12">
          <span className="pointer-events-none absolute inset-x-0 -top-20 h-40 beam-glow" />
          <h3 className="relative text-2xl font-bold leading-snug sm:text-3xl">
            Your next request could be done by tomorrow
          </h3>
          <p className="relative mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Tell us what you need this week — we'll show you exactly how fast your queue moves.
          </p>
          <div className="relative mt-7">
            <ChatButton className="px-9 py-4 text-base" />
          </div>
        </div>
      </Reveal>

      <GemAccent kind="star" size={58} className="absolute bottom-8 left-3 sm:left-10 sm:h-[86px] sm:w-[86px]" />
      <GemAccent kind="diamond" size={52} className="absolute bottom-10 right-3 sm:right-10 sm:h-[80px] sm:w-[80px]" />
    </section>
  );
}
