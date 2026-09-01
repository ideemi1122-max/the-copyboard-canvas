import editing from "@/assets/copy_of_espy_ad_4.png.asset.json";
import podcast from "@/assets/copy_of_espy_ad_3_1.png.asset.json";
import social from "@/assets/copy_of_espy_ad_2.png.asset.json";
import branding from "@/assets/copy_of_espy_5_1.png.asset.json";

type Poster = {
  lead: string;
  hl: string;
  tail?: string;
  badge: string;
  category: string;
  img: string;
  rot: number;
  invert?: boolean;
};

const posters: Poster[] = [
  { lead: "Edits that", hl: "actually land", badge: "48h turnaround", category: "Video Editing", img: editing.url, rot: -7 },
  { lead: "Podcasts", hl: "worth binging", badge: "120+ eps / mo", category: "Podcast Editing", img: podcast.url, rot: 4, invert: true },
  { lead: "Posts that", hl: "stop scrolls", badge: "9.7% engagement", category: "Short-Form", img: social.url, rot: -3 },
  { lead: "Brands", hl: "people remember", badge: "3.4x output", category: "Branding & Design", img: branding.url, rot: 8, invert: true },
];

function PosterCard({ p, i }: { p: Poster; i: number }) {
  return (
    <article
      style={{ rotate: `${p.rot}deg`, zIndex: i }}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-primary/25 bg-charcoal p-3.5 shadow-[0_22px_44px_-20px_rgba(0,0,0,0.95)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-30 hover:-translate-y-1.5 hover:!rotate-0 sm:p-4"
    >
      <span className="pointer-events-none absolute inset-0 grid-texture opacity-[0.25]" />

      <p className="relative font-display text-[0.98rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-lg">
        {p.lead}{" "}
        <span
          className={`inline-block rounded-[0.25rem] px-1.5 py-0.5 ${
            p.invert ? "bg-ink text-primary" : "bg-primary text-primary-foreground"
          }`}
        >
          {p.hl}
        </span>
        {p.tail ? ` ${p.tail}` : ""}
      </p>

      <div className="relative mt-3">
        <span className="absolute inset-x-3 -bottom-1 top-2 rounded-xl bg-ink/70" style={{ rotate: "-4deg" }} />
        <div
          className="relative overflow-hidden rounded-xl border border-primary/20 shadow-[0_14px_26px_-14px_rgba(0,0,0,0.95)]"
          style={{ rotate: "2.5deg" }}
        >
          <img
            src={p.img}
            alt={`${p.category} sample poster`}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top grayscale contrast-[1.05] transition-[filter] duration-500 group-hover:grayscale-[0.35]"
          />
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_oklab,var(--color-ink)_88%,transparent)_100%)]" />
          <span className="pointer-events-none absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>

        <span
          className={`absolute -right-1 bottom-2 rounded-full px-2 py-1 text-[0.55rem] font-semibold shadow-[0_10px_24px_-10px_rgba(0,0,0,0.9)] ${
            p.invert ? "bg-primary text-primary-foreground" : "bg-ink text-primary"
          }`}
        >
          {p.badge}
          <span
            className={`absolute -bottom-1 left-4 h-2 w-2 rotate-45 ${p.invert ? "bg-primary" : "bg-ink"}`}
          />
        </span>
      </div>

      <p className="relative mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {p.category}
      </p>
    </article>
  );
}

export function PosterCards() {
  return (
    <div className="mx-auto mt-20 grid max-w-[520px] grid-cols-2 gap-3 sm:mt-24 sm:max-w-4xl sm:grid-cols-4 sm:gap-2">
      {posters.map((p, i) => (
        <div key={p.category} className={i % 2 === 1 ? "mt-6 sm:mt-0" : ""}>
          <PosterCard p={p} i={i} />
        </div>
      ))}
    </div>
  );
}
