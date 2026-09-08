import { useState } from "react";

type State = "before" | "after";

const data = {
  before: {
    tag: "● Before CopyBoard",
    chips: [
      { v: "↓ flat", l: "Growth stalled" },
      { v: "$$$", l: "Costs stacking" },
      { v: "wks", l: "Slow turnaround" },
    ],
    title: "Before",
    caption: "Freelancers, scattered tools, slow results.",
    bullets: ["Weeks of back-and-forth", "Costs that keep stacking", "Off-brand, inconsistent output"],
    line: "M8 40 L60 52 L112 48 L164 74 L216 70 L268 96 L312 104",
  },
  after: {
    tag: "● With CopyBoard",
    chips: [
      { v: "250M+", l: "Total views" },
      { v: "32%", l: "Engagement" },
      { v: "148+", l: "Delivered" },
    ],
    title: "After",
    caption: "One team. One flat fee. One dashboard.",
    bullets: ["Delivered in days, not weeks", "Unlimited requests, one fee", "On-brand, every time"],
    line: "M8 104 L60 92 L112 82 L164 60 L216 52 L268 30 L312 16",
  },
} as const;

const RED = "#FF4D4D";
const YELLOW = "#FFD400";

export function BeforeAfterSection() {
  const [state, setState] = useState<State>("after");
  const d = data[state];
  const accent = state === "after" ? YELLOW : RED;

  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 sm:py-24">
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-500"
        style={{ backgroundColor: `color-mix(in oklab, ${accent} 10%, transparent)` }}
      />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="text-center">
          <p
            className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] transition-colors duration-500"
            style={{ color: accent }}
          >
            The CopyBoard Effect
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.14] sm:text-4xl md:text-[2.6rem]">
            Before CopyBoard, <span className="text-primary">And After.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Same brand. Two very different realities.
          </p>

          {/* toggle */}
          <div
            role="group"
            aria-label="Compare before and after"
            className="relative mx-auto mt-8 grid w-[240px] grid-cols-2 rounded-full border border-foreground/10 bg-charcoal p-1"
          >
            <span
              className="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ backgroundColor: accent, left: state === "before" ? "0.25rem" : "calc(50%)" }}
            />
            {(["before", "after"] as State[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setState(s)}
                aria-pressed={state === s}
                className={`relative z-10 rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors duration-300 ${
                  state === s ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* panel */}
        <div
          key={state}
          className="mt-10 grid animate-[fadeIn_.45s_ease] grid-cols-1 gap-6 rounded-3xl border bg-charcoal p-5 transition-colors duration-500 motion-reduce:animate-none sm:p-7 lg:grid-cols-2 lg:items-center"
          style={{ borderColor: `color-mix(in oklab, ${accent} 35%, transparent)` }}
        >
          {/* chart side */}
          <div>
            <span
              className="inline-flex rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]"
              style={{ backgroundColor: `color-mix(in oklab, ${accent} 16%, transparent)`, color: accent }}
            >
              {d.tag}
            </span>
            <svg viewBox="0 0 320 120" className="mt-4 w-full" aria-hidden="true">
              <defs>
                <linearGradient id={`ba-${state}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${d.line} L312 118 L8 118 Z`} fill={`url(#ba-${state})`} />
              <path d={d.line} fill="none" stroke={accent} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {d.chips.map((c) => (
                <div key={c.l} className="rounded-xl border border-foreground/10 bg-ink px-2.5 py-2 text-center">
                  <p className="text-sm font-bold" style={{ color: accent }}>
                    {c.v}
                  </p>
                  <p className="mt-0.5 text-[0.6rem] leading-tight text-muted-foreground">{c.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* list side */}
          <div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">{d.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{d.caption}</p>
            <ul className="mt-5 grid gap-3">
              {d.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold"
                    style={{ backgroundColor: `color-mix(in oklab, ${accent} 18%, transparent)`, color: accent }}
                  >
                    {state === "after" ? "✓" : "✕"}
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
