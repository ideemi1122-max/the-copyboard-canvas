import box1 from "@/assets/box1-video-editing.jpg.asset.json";
import box2 from "@/assets/box2-podcast-editing.jpg.asset.json";
import box3 from "@/assets/box3-shortform-hyperedit.jpg.asset.json";
import box4 from "@/assets/box4-branding-design.jpg.asset.json";

type Poster = { label: string; img: string; rot: number };

const posters: Poster[] = [
  { label: "Video Editing", img: box1.url, rot: -5 },
  { label: "Podcast Editing", img: box2.url, rot: 3 },
  { label: "Short-form / Hyper Edit", img: box3.url, rot: -3 },
  { label: "Branding / Design", img: box4.url, rot: 5 },
];

function PosterCard({ p, i }: { p: Poster; i: number }) {
  return (
    <article
      style={{ zIndex: i }}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-primary/25 bg-charcoal p-3 shadow-[0_22px_44px_-20px_rgba(0,0,0,0.95)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-30 hover:-translate-y-1.5 hover:border-primary/70 hover:shadow-[0_26px_60px_-22px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] sm:rotate-[var(--rot)] sm:hover:rotate-0`}
    >
      <span className="pointer-events-none absolute inset-0 grid-texture opacity-[0.25]" />

      <div className="relative overflow-hidden rounded-xl border border-primary/20">
        <img
          src={p.img}
          alt={`${p.label} sample work`}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_oklab,var(--color-ink)_80%,transparent)_100%)]" />
      </div>

      <p className="relative mt-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-foreground">
        {p.label}
      </p>
    </article>
  );
}

export function PosterCards() {
  return (
    <div className="mx-auto mt-16 grid w-full max-w-[340px] grid-cols-1 gap-5 sm:mt-24 sm:max-w-3xl sm:grid-cols-2 sm:gap-6 lg:max-w-5xl lg:grid-cols-4 lg:gap-5">
      {posters.map((p, i) => (
        <div key={p.label} style={{ ["--rot" as string]: `${p.rot}deg` }}>
          <PosterCard p={p} i={i} />
        </div>
      ))}
    </div>
  );
}
