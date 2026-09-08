import { Reveal } from "./primitives";

const params = "?rel=0&modestbranding=1";

const slots = [
  { id: "testimonial-1", src: `https://www.youtube.com/embed/D6WYHjU71Gk${params}`, featured: false },
  { id: "testimonial-2", src: `https://www.youtube.com/embed/YqkZL2Vjo5w${params}`, featured: true },
  { id: "testimonial-3", src: `https://www.youtube.com/embed/DQk1XuF0TFY${params}`, featured: false },
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

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {slots.map((s, i) => (
          <Reveal
            key={s.id}
            delay={i * 110}
            className={`w-full max-w-[300px] ${s.featured ? "order-first sm:col-span-2 lg:order-none lg:col-span-1" : ""}`}
          >
            <div
              id={s.id}
              data-testimonial-slot={s.id}
              className={`group relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-3xl border border-primary/20 bg-charcoal shadow-[0_28px_60px_-30px_rgba(0,0,0,0.95)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/50 ${
                s.featured ? "lg:scale-[1.06]" : ""
              }`}
            >
              <iframe
                src={s.src}
                title={`Client video testimonial ${i + 1}`}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
