import { GemAccent, Reveal } from "./primitives";
import b0 from "@/assets/brand_0.png.asset.json";
import b1 from "@/assets/brand_1.png.asset.json";
import b2 from "@/assets/brand_2.png.asset.json";
import b3 from "@/assets/brand_3.png.asset.json";
import b4 from "@/assets/brand_4.png.asset.json";
import b5 from "@/assets/brand_5.png.asset.json";

const brands = [b0, b1, b2, b3, b4, b5].map((b, i) => ({ url: b.url, name: `Partner brand ${i + 1}` }));

export function TrustedSection() {
  return (
    <section className="relative bg-ink px-5 py-16 sm:py-24">
      <div className="relative mx-auto max-w-3xl text-center">
        <GemAccent kind="diamond" size={44} className="absolute -top-6 left-2 sm:left-8" />
        <GemAccent kind="star" size={38} className="absolute -top-4 right-2 sm:right-10" />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">Trusted By</p>
        <h2 className="mt-4 flex flex-wrap items-center justify-center gap-x-3 text-3xl font-bold leading-[1.12] sm:text-4xl md:text-[2.75rem]">
          <GemAccent kind="star" size={34} className="shrink-0" />
          <span>Over 50 Brands Partnered With Us</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Creators, agencies and product brands keep their content pipeline full with CopyBoard — month after month.
        </p>
      </div>

      <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-3 items-center justify-items-center gap-4 sm:gap-6 lg:grid-cols-6">
        {brands.map((b, i) => (
          <Reveal as="li" key={b.name} delay={i * 60} className="w-full">
            <span className="mx-auto grid h-16 w-16 place-items-center overflow-hidden rounded-full border border-foreground/10 bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 sm:h-20 sm:w-20">
              <img
                src={b.url}
                alt={b.name}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
