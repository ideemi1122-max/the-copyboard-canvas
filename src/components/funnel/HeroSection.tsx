import { useEffect, useState } from "react";
import { GemAccent, PinClip, PlayButton } from "./primitives";
import { PosterCards } from "./PosterCards";



function useStaged(steps: number, gap = 150) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(steps);
      return;
    }
    const timers = Array.from({ length: steps }, (_, i) =>
      window.setTimeout(() => setStage((s) => Math.max(s, i + 1)), 120 + i * gap),
    );
    return () => timers.forEach(clearTimeout);
  }, [steps, gap]);
  return stage;
}

const rise = (on: boolean, delayless = false) =>
  `transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    on ? "translate-y-0 opacity-100" : `${delayless ? "" : "translate-y-5"} opacity-0`
  }`;

export function HeroSection() {
  const stage = useStaged(5, 140);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[80vh] beam-glow" />

      {/* corner gem accents */}
      <GemAccent kind="star" size={64} className="absolute left-3 top-20 sm:left-10 sm:top-24 sm:h-[92px] sm:w-[92px]" />
      <GemAccent kind="diamond" size={58} className="absolute right-3 top-24 sm:right-10 sm:top-28 sm:h-[84px] sm:w-[84px]" />

      {/* decorative stickers */}
      <div className="pointer-events-none absolute left-2 top-[46%] hidden -rotate-12 sm:block lg:left-10">
        <StarburstBadge />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className={rise(stage >= 1)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-charcoal/80 px-4 py-2 text-xs font-medium text-foreground/90">
            <span className="animate-dot h-2 w-2 rounded-full bg-primary" />
            Unlimited content, one flat fee.
          </span>
        </div>

        <h1 className="mt-7 text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          <span className={`block ${rise(stage >= 2)}`}>
            Your Entire Content Team,
          </span>
          <span className={`mt-2 block ${rise(stage >= 3)}`}>
            <span className="marker-highlight">For One Flat Fee</span>
          </span>
        </h1>


        <p className={`mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base ${rise(stage >= 4)}`}>
          Unlimited graphic design, video editing, podcast editing, short-form and long-form content —
          one flat monthly fee, made by real human creators, delivered fast.
        </p>

        {/* VSL card */}
        <div className={`mt-12 w-full max-w-[600px] ${rise(stage >= 5)}`}>
          <div className="group relative mx-auto rotate-[-1.5deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-0">
            <PinClip />
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-primary/25 shadow-[0_44px_80px_-30px_rgba(0,0,0,0.95)]">
              {playing ? (
                <iframe
                  src="https://www.youtube.com/embed/XY__qSSaNFA?rel=0&modestbranding=1&autoplay=1"
                  title="CopyBoard walkthrough video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <>
                  <img
                    src="https://i.ytimg.com/vi/XY__qSSaNFA/maxresdefault.jpg"
                    alt="CopyBoard walkthrough video"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.68)_75%,rgba(0,0,0,0.8)_100%)]" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    Live walkthrough
                  </span>
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play the CopyBoard walkthrough"
                    className="group absolute inset-0 grid place-items-center"
                  >
                    <PlayButton size={72} />
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      <PosterCards />
    </section>
  );
}

function StarburstBadge() {
  return (
    <span className="relative grid h-24 w-24 place-items-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d={Array.from({ length: 24 }, (_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const r = i % 2 === 0 ? 48 : 40;
            return `${i === 0 ? "M" : "L"}${(50 + Math.cos(a) * r).toFixed(2)} ${(50 + Math.sin(a) * r).toFixed(2)}`;
          }).join(" ") + " Z"}
          fill="#FFD400"
          opacity="0.9"
        />
      </svg>
      <span className="relative text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-primary-foreground">
        Unlimited
      </span>
    </span>
  );
}
