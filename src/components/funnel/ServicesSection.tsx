import { ArrowIcon, Reveal, SectionHeader } from "./primitives";
import thumbnails from "@/assets/10001.png";
import graphics from "@/assets/10003.png";
import advertising from "@/assets/10004.png";
import uiux from "@/assets/10006.png";
import video from "@/assets/10005.jpeg";

const services = [
  { name: "Thumbnails", img: thumbnails, href: "https://copyboard.cc/thumbnail" },
  { name: "Graphics & Logos", img: graphics, href: "https://copyboard.cc/graphicslogos" },
  { name: "Advertising", img: advertising, href: "https://copyboard.cc/advertisements" },
  { name: "UI/UX Designs", img: uiux, href: "https://copyboard.cc/uiuxdesign" },
  { name: "Videos & Motion Graphics", img: video, href: "https://copyboard.cc/vmg" },
];

export function ServicesSection() {
  return (
    <section className="relative bg-ink px-5 py-16 sm:py-24">
      <SectionHeader
        eyebrow="Services"
        title={<>Everything Your Brand Needs, <span className="text-primary">Made By Hand</span></>}
        sub="Five creative lanes, one team, unlimited requests — all handmade by real designers and editors."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 100} className="w-full">
            <article className="group">
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.95)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-[0_36px_74px_-28px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
                <img
                  src={s.img}
                  alt={`${s.name} sample work by CopyBoard`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/20" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.name}</h3>
              <a
                href={s.href}
                target="_blank"
                rel="noopener"
                className="group/link mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary"
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
