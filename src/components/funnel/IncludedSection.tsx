import { ArrowIcon, Reveal, SectionHeader } from "./primitives";
import thumbnails from "@/assets/10001.png";
import graphics from "@/assets/10003.png";
import advertising from "@/assets/10004.png";
import uiux from "@/assets/10006.png";
import video from "@/assets/10005.jpeg";

const chips = [
  { label: "Thumbnails", icon: "pen" },
  { label: "Graphics & Logos", icon: "spark" },
  { label: "Advertising", icon: "film" },
  { label: "UI/UX Designs", icon: "phone" },
  { label: "Videos & Motion Graphics", icon: "play" },
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
    case "phone":
      return <svg {...common}><rect x="4.5" y="1.8" width="7" height="12.4" rx="2" {...stroke} /><path d="M7 12.4h2" {...stroke} /></svg>;
    default:
      return <svg {...common}><circle cx="8" cy="8" r="6.2" {...stroke} /><path d="m6.6 5.6 4 2.4-4 2.4z" fill="currentColor" /></svg>;
  }
}

type Service = {
  name: string;
  img: string;
  href: string;
};

const services: Service[] = [
  { name: "Thumbnails", img: thumbnails, href: "https://copyboard.cc/thumbnail" },
  { name: "Graphics & Logos", img: graphics, href: "https://copyboard.cc/graphicslogos" },
  { name: "Advertising", img: advertising, href: "https://copyboard.cc/advertisements" },
  { name: "UI/UX Designs", img: uiux, href: "https://copyboard.cc/uiuxdesign" },
  { name: "Videos & Motion Graphics", img: video, href: "https://copyboard.cc/vmg" },
];

export function IncludedSection() {
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

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={i * 90} className="w-full">
            <article className="group">
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.95)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-[0_36px_74px_-28px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
                <img
                  src={service.img}
                  alt={`${service.name} sample work by CopyBoard`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/20" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{service.name}</h3>
              <a
                href={service.href}
                target="_blank"
                rel="noopener"
                className="group/link mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View Catalogue
                <span className="transition-transform duration-300 group-hover/link:translate-x-[5px]">
                  <ArrowIcon className="!translate-x-0" />
                </span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
