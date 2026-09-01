import { useState } from "react";
import { ChatButton } from "./primitives";
import { CopyBoardMark } from "./CopyBoardMark";

const faqs = [
  {
    q: "What exactly do I get with CopyBoard?",
    a: "A full creative team on demand. Thumbnails, graphics & logos, advertising, UI/UX design, and video & motion graphics — all handled by real designers and editors, for one flat monthly fee. No hiring, no managing a team.",
  },
  {
    q: "How fast will I get my content back?",
    a: "Fast. Most requests are turned around quickly — often within a day or two depending on scope — and we always keep your queue moving.",
  },
  {
    q: "Is there a limit to how many requests I can make?",
    a: "Submit as many as you like. We work through your queue one (or a few) at a time and keep it moving, so you always have work coming back — no per-project quotes, no caps.",
  },
  {
    q: "What if I need changes to a design or edit?",
    a: "Revisions are part of the process. You review, we refine until it's right and on-brand, then you post.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. It's month-to-month with no contracts and no lock-in — pause or cancel whenever you need to.",
  },
  {
    q: "How do I actually get started?",
    a: 'Hit "Chat With Us," tell us what you need, and we take it from there. Submit your first request and you\'ll see work come back before you know it.',
  },
];

function Toggle({ open }: { open: boolean }) {
  return (
    <span
      className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-colors duration-300 ${
        open ? "bg-primary text-primary-foreground" : "border border-primary/40 text-primary"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M7 2v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="origin-center transition-all duration-300"
          style={{ opacity: open ? 0 : 1, transform: open ? "rotate(90deg)" : "none" }}
        />
      </svg>
    </span>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.2]" />
      <span className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] beam-glow" />

      <div className="relative mx-auto max-w-[820px]">
        <div className="relative text-center">
          {/* script accents — desktop only */}
          <span className="pointer-events-none absolute -top-2 left-0 hidden select-none text-primary lg:block">
            <span className="block -rotate-12 font-display text-xl italic">asked</span>
            <svg width="56" height="30" viewBox="0 0 56 30" fill="none" aria-hidden="true">
              <path d="M4 4c14 2 24 10 30 22" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
              <path d="M34 26l-8-3M34 26l1-8" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="pointer-events-none absolute -top-2 right-0 hidden select-none text-primary lg:block">
            <span className="block rotate-12 font-display text-xl italic">answered</span>
            <svg width="56" height="30" viewBox="0 0 56 30" fill="none" aria-hidden="true">
              <path d="M52 4C38 6 28 14 22 26" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 26l8-3M22 26l-1-8" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>

          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">Got Questions?</p>
          <h2 className="mt-3 flex items-center justify-center gap-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            FAQ
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-primary text-primary sm:h-10 sm:w-10">
              <span className="text-sm font-bold">?</span>
              <span className="absolute translate-x-[14px] translate-y-[14px] h-3 w-[2px] rotate-[-45deg] rounded bg-primary sm:translate-x-[16px] sm:translate-y-[16px]" />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Everything you need to know before you hit "Chat With Us." Still unsure? We're one message away.
          </p>
        </div>

        <div className="mt-10 space-y-3 sm:mt-12">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-charcoal transition-colors duration-300 ${
                  isOpen
                    ? "border-primary/45 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-charcoal)_92%,var(--color-primary))_0%,var(--color-charcoal)_70%)]"
                    : "border-foreground/[0.08]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-[18px] py-[18px] text-left transition-colors duration-200 hover:bg-foreground/[0.04] sm:px-6"
                >
                  <span className="text-[0.95rem] font-bold text-foreground sm:text-base">{f.q}</span>
                  <Toggle open={isOpen} />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-[18px] pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-primary/35 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-charcoal)_94%,var(--color-primary))_0%,var(--color-charcoal)_60%,var(--color-ink)_100%)] px-6 py-10 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,1)] sm:px-12">
          <span className="pointer-events-none absolute right-8 top-8 hidden select-none text-primary lg:block">
            <span className="block rotate-6 text-[0.7rem] font-semibold">talk to a human</span>
            <svg width="66" height="52" viewBox="0 0 66 52" fill="none" aria-hidden="true">
              <path d="M58 6C50 26 36 40 14 46" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 46l12-5M14 46l7 9" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>

          <CopyBoardMark size={62} className="mx-auto" />
          <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">Still have a question?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Skip the form. Message us directly and we'll get you sorted in minutes.
          </p>
          <div className="mt-7">
            <ChatButton className="w-full px-9 py-4 text-base sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
