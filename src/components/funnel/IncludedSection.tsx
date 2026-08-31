import { PlayButton, Reveal, SectionHeader } from "./primitives";

const chips = [
  { label: "Design", icon: "pen" },
  { label: "Branding", icon: "spark" },
  { label: "Video Editing", icon: "film" },
  { label: "Podcast Editing", icon: "wave" },
  { label: "Short-Form Content", icon: "phone" },
  { label: "Long-Form Content", icon: "play" },
] as const;

function ChipIcon({ name }: { name: (typeof chips)[number]["icon"] }) {
  const common = { width: 15, height: 15, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true } as const;
  const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  switch (name) {
    case "pen":
      return <svg {...common}><path d="M11 2.5 13.5 5 5.5 13H3v-2.5z" {...stroke} /></svg>;
    case "spark":
      return <svg {...common}><path d="M8 1.5 9.5 6.5 14.5 8 9.5 9.5 8 14.5 6.5 9.5 1.5 8 6.5 6.5z" {...stroke} /></svg>;
    case "film":
      return <svg {...common}><rect x="1.8" y="3" width="12.4" height="10" rx="2" {...stroke} /><path d="M5 3v10M11 3v10" {...stroke} /></svg>;
    case "wave":
      return <svg {...common}><path d="M2 8h1.6M5.2 5v6M8 3v10M10.8 5.5v5M13.6 8H14" {...stroke} /></svg>;
    case "phone":
      return <svg {...common}><rect x="4.5" y="1.8" width="7" height="12.4" rx="2" {...stroke} /><path d="M7 12.4h2" {...stroke} /></svg>;
    default:
      return <svg {...common}><circle cx="8" cy="8" r="6.2" {...stroke} /><path d="m6.6 5.6 4 2.4-4 2.4z" fill="currentColor" /></svg>;
  }
}

type Work = {
  title: string;
  category: string;
  duration: string;
  progress: number;
  gradient: string;
  texture: "wave" | "timeline";
};

const works: Work[] = [
  { title: "Podcast Highlight Reel", category: "Podcast Editing", duration: "0:47", progress: 62, gradient: "linear-gradient(135deg,#1c1a16 0%,#0D0D0C 62%)", texture: "wave" },
  { title: "YouTube Long-Form Edit", category: "Long-Form Content", duration: "14:12", progress: 38, gradient: "linear-gradient(215deg,#221f18 0%,#0D0D0C 70%)", texture: "timeline" },
  { title: "Brand Ad Cutdown", category: "Advertising", duration: "0:22", progress: 78, gradient: "linear-gradient(120deg,#0D0D0C 0%,#26220f 100%)", texture: "timeline" },
  { title: "Founder Story Documentary", category: "Long-Form Content", duration: "8:05", progress: 45, gradient: "linear-gradient(160deg,#19170f 0%,#0D0D0C 65%)", texture: "timeline" },
  { title: "Interview Clip Pack", category: "Short-Form Content", duration: "0:58", progress: 55, gradient: "linear-gradient(300deg,#1e1b13 0%,#0D0D0C 68%)", texture: "wave" },
  { title: "Audiogram Series", category: "Podcast Editing", duration: "1:16", progress: 70, gradient: "linear-gradient(45deg,#0D0D0C 0%,#231f14 100%)", texture: "wave" },
];

function Texture({ kind }: { kind: Work["texture"] }) {
  if (kind === "wave") {
    return (
      <svg viewBox="0 0 320 120" className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true" preserveAspectRatio="none">
        {Array.from({ length: 44 }, (_, i) => {
          const h = 12 + Math.abs(Math.sin(i * 0.7) * 46) + (i % 5) * 4;
          return <rect key={i} x={i * 7.3 + 4} y={60 - h / 2} width="3" height={h} rx="1.5" fill="#FFD400" opacity={0.35 + (i % 4) * 0.1} />;
        })}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 120" className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true" preserveAspectRatio="none">
      <rect x="12" y="84" width="296" height="10" rx="5" fill="#FFD400" opacity="0.14" />
      <rect x="12" y="84" width="168" height="10" rx="5" fill="#FFD400" opacity="0.4" />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={16 + i * 37} y={26} width="30" height="40" rx="5" fill="#FFD400" opacity={0.08 + (i % 3) * 0.05} />
      ))}
    </svg>
  );
}

export function IncludedSection() {
  return (
    <section className="relative bg-ink px-5 py-24">
      <SectionHeader
        eyebrow="What's Included"
        title="One subscription. Every format you post."
        sub="Send the brief, we handle the rest — static, motion, audio, short and long. No per-project quotes."
      />

      <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {chips.map((c, i) => (
          <Reveal as="li" key={c.label} delay={i * 60}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-charcoal px-3.5 py-2.5 text-xs font-medium text-foreground">
              <span className="text-primary">
                <ChipIcon name={c.icon} />
              </span>
              {c.label}
            </span>
          </Reveal>
        ))}
      </ul>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <article className="group">
              <div
                className="relative overflow-hidden rounded-3xl border border-primary/15 shadow-[0_28px_60px_-32px_rgba(0,0,0,0.95)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:border-primary/45 group-hover:shadow-[0_36px_70px_-28px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]"
                style={{ background: w.gradient }}
              >
                <div className="relative aspect-video w-full">
                  <Texture kind={w.texture} />
                  <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_50%,rgba(0,0,0,0.25),rgba(0,0,0,0.7))]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayButton size={54} />
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-md bg-ink/85 px-2 py-1 text-[0.62rem] font-semibold text-foreground">
                    {w.duration}
                  </span>
                  <span className="absolute bottom-4 left-3 right-16 h-1.5 rounded-full bg-foreground/15">
                    <span className="block h-full rounded-full bg-primary" style={{ width: `${w.progress}%` }} />
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{w.title}</h3>
              <p className="text-xs text-muted-foreground">{w.category}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
