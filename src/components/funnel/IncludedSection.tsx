import { useState } from "react";
import { PlayButton, Reveal, SectionHeader } from "./primitives";
import workPodcast from "@/assets/gen/work-podcast.jpg";
import workYoutube from "@/assets/gen/work-youtube.jpg";
import workAd from "@/assets/gen/work-ad.jpg";
import workDoc from "@/assets/gen/work-doc.jpg";
import workInterview from "@/assets/gen/work-interview.jpg";
import workInstagram from "@/assets/gen/work-instagram.jpg";

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
  tags: string[];
  duration: string;
  progress: number;
  img: string;
  offset: string;
};

const works: Work[] = [
  { title: "Podcast Highlight Reel", category: "Podcast Editing", tags: ["Podcast Editing", "Video Editing"], duration: "0:47", progress: 62, img: workPodcast, offset: "lg:mt-0" },
  { title: "YouTube Long-Form Edit", category: "Long-Form Content", tags: ["Long-Form Content", "Video Editing"], duration: "14:12", progress: 38, img: workYoutube, offset: "lg:mt-10" },
  { title: "Brand Ad Cutdown", category: "Advertising", tags: ["Branding", "Design", "Video Editing"], duration: "0:22", progress: 78, img: workAd, offset: "lg:mt-2" },
  { title: "Founder Story Documentary", category: "Long-Form Content", tags: ["Long-Form Content", "Video Editing"], duration: "8:05", progress: 45, img: workDoc, offset: "lg:mt-8" },
  { title: "Interview Clip Pack", category: "Short-Form Content", tags: ["Short-Form Content", "Video Editing"], duration: "0:58", progress: 55, img: workInterview, offset: "lg:mt-0" },
  { title: "Instagram Series", category: "Short-Form Content", tags: ["Short-Form Content", "Design", "Branding"], duration: "1:16", progress: 70, img: workInstagram, offset: "lg:mt-10" },
];

export function IncludedSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative bg-ink px-5 py-16 sm:py-24">
      <SectionHeader
        eyebrow="What's Included"
        title={<>One Subscription. <span className="text-primary">Every Format You Post.</span></>}
        sub="Send the brief, we handle the rest — static, motion, audio, short and long. No per-project quotes."
      />

      <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        {chips.map((c, i) => (
          <Reveal as="li" key={c.label} delay={i * 60}>
            <span
              onMouseEnter={() => setHovered(c.label)}
              onMouseLeave={() => setHovered(null)}
              className="group inline-flex cursor-default items-center gap-2 rounded-full border border-primary/25 bg-charcoal px-3.5 py-2.5 text-xs font-medium text-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_14px_30px_-14px_color-mix(in_oklab,var(--color-primary)_80%,transparent)]"
            >
              <span className="text-primary transition-colors duration-300 group-hover:text-primary-foreground">
                <ChipIcon name={c.icon} />
              </span>
              {c.label}
            </span>
          </Reveal>
        ))}
      </ul>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => {
          const match = hovered ? w.tags.includes(hovered) : true;
          return (
          <Reveal key={w.title} delay={i * 90} className={w.offset}>
            <article
              className={`group transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                hovered
                  ? match
                    ? "scale-[1.02] opacity-100"
                    : "scale-[0.98] opacity-40"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-charcoal shadow-[0_28px_60px_-32px_rgba(0,0,0,0.95)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:border-primary/45 group-hover:shadow-[0_36px_70px_-28px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]">
                <div className="relative aspect-video w-full">
                  <img src={w.img} alt={`${w.title} — ${w.category}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
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
