import { GemAccent, Reveal } from "./primitives";
import { brandLogos } from "./brand-logos";

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

      <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-4">
        {brandLogos.map((b, i) => (
          <Reveal as="li" key={b.name} delay={i * 35}>
            <span
              title={b.name}
              className="group grid h-14 w-14 place-items-center rounded-full border border-foreground/10 bg-charcoal text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:text-primary hover:shadow-[0_0_28px_-8px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] sm:h-16 sm:w-16"
            >
              <svg viewBox="0 0 24 24" role="img" aria-label={b.name} className="h-6 w-6 fill-current sm:h-7 sm:w-7">
                <path d={b.path} />
              </svg>
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
