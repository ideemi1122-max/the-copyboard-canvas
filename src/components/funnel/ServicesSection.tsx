import { ArrowIcon, PinClip, Reveal, SectionHeader } from "./primitives";
import thumbnails from "@/assets/10001.png.asset.json";
import graphics from "@/assets/10003.png.asset.json";
import advertising from "@/assets/10004.png.asset.json";
import uiux from "@/assets/10006.png.asset.json";
import video from "@/assets/10005.jpeg.asset.json";

const services = [
  { name: "Thumbnails", img: thumbnails.url, rot: -3, offset: "lg:mt-10" },
  { name: "Graphics & Logos", img: graphics.url, rot: 2.5, offset: "lg:mt-0" },
  { name: "Advertising", img: advertising.url, rot: -1.5, offset: "lg:mt-14" },
  { name: "UI/UX Designs", img: uiux.url, rot: 3, offset: "lg:mt-2" },
  { name: "Videos & Motion Graphics", img: video.url, rot: -2.5, offset: "lg:mt-12" },
];

export function ServicesSection() {
  return (
    <section className="relative bg-ink px-5 py-24">
      <SectionHeader
        eyebrow="Services"
        title="Everything your brand needs, made by hand"
        sub="Five creative lanes, one team, unlimited requests — all handmade by real designers and editors."
      />

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-12">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 100} className="w-full max-w-sm sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]">
            <article className={`group [perspective:1200px] ${s.offset}`}>
              <div
                className="relative transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:!rotate-0"
                style={{ rotate: `${s.rot}deg` }}
              >
                <PinClip />
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-[0_34px_64px_-30px_rgba(0,0,0,0.95)] transition-all duration-500 [transform:rotateX(5deg)] group-hover:[transform:rotateX(0deg)] group-hover:shadow-[0_40px_80px_-28px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
                  <img src={s.img} alt={`${s.name} sample work by CopyBoard`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/25 shadow-[inset_0_0_40px_-12px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]" />
                  <span className="pointer-events-none absolute -inset-x-10 -top-24 h-48 rotate-[18deg] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.16),transparent)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground">{s.name}</h3>
              <button type="button" className="group/link mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View Catalogue
                <span className="transition-transform duration-300 group-hover/link:translate-x-[5px]">
                  <ArrowIcon className="!translate-x-0" />
                </span>
              </button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
