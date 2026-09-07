import { PlayButton, Reveal } from "./primitives";

const slots = [
  { id: "testimonial-1", featured: false },
  { id: "testimonial-2", featured: true },
  { id: "testimonial-3", featured: false },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.2]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-primary px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
          Testimonials
        </span>
        <h2 className="mt-5 text-3xl font-bold leading-[1.14] sm:text-4xl md:text-[2.6rem]">
          What Our Clients Say <span className="marker-highlight">About Our Services</span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-3">
        {slots.map((s, i) => (
          <Reveal key={s.id} delay={i * 110} className={s.featured ? "order-first lg:order-none" : ""}>
            <div
              id={s.id}
              data-testimonial-slot={s.id}
              className={`group relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-charcoal shadow-[0_28px_60px_-30px_rgba(0,0,0,0.95)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/50 ${
                s.featured ? "lg:scale-[1.06]" : ""
              }`}
            >
              <span className="pointer-events-none absolute inset-0 grid-texture opacity-[0.3]" />
              <button
                type="button"
                aria-label="Video testimonial coming soon"
                className="group relative grid place-items-center focus-visible:outline-none"
              >
                <PlayButton size={58} />
              </button>
              <p className="relative mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Video coming soon
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
