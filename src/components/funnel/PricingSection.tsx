import { ChatButton, CheckIcon, Reveal } from "./primitives";
import thumbnails from "@/assets/10001.png.asset.json";
import graphics from "@/assets/10003.png.asset.json";
import advertising from "@/assets/10004.png.asset.json";
import uiux from "@/assets/10006.png.asset.json";
import video from "@/assets/10005.jpeg.asset.json";

const mockups = [
  { img: uiux.url, rot: -12, z: 10, x: -110 },
  { img: graphics.url, rot: -6, z: 20, x: -55 },
  { img: thumbnails.url, rot: 0, z: 40, x: 0 },
  { img: advertising.url, rot: 6, z: 20, x: 55 },
  { img: video.url, rot: 12, z: 10, x: 110 },
];

const checklist = [
  "Unlimited Design — Website UI/UX",
  "Unlimited Design — Logos",
  "Unlimited Design — Thumbnails",
  "Unlimited Design — Branding",
  "Unlimited Video Editing & Motion Graphics",
  "One Flat Monthly Fee",
  "No Contracts, No Limits",
  "Handmade, Customized Work — Never Templated",
  "Cancel Anytime",
];

const plans = [
  {
    name: "Beginner",
    tag: "For getting started",
    price: "AUD $298/mo",
    features: [
      "One active request at a time",
      "Unlimited graphic design & thumbnails",
      "Short-form video editing",
      "48–72 hour average turnaround",
      "Dedicated request dashboard",
      "Cancel anytime with 2 Clicks",
    ],
  },
  {
    name: "Standard",
    tag: "For fast-moving brands",
    price: "AUD $539/mo",
    features: [
      "Two active requests at a time",
      "Unlimited design, branding & thumbnails",
      "Unlimited video, podcast & motion editing",
      "24–48 hour average turnaround",
      "Dedicated creative lead on Slack",
      "Priority queue on every request",
      "Cancel anytime with 2 Clicks",
    ],
  },
  {
    name: "Enterprise",
    tag: "For established corporations",
    price: "AUD $799/mo",
    features: [
      "Multiple parallel request lanes",
      "Full creative team assigned to your brand",
      "Brand system & guideline stewardship",
      "Same-day turnaround windows",
      "Quarterly content strategy sessions",
      "Cancel anytime with 2 Clicks",
    ],
  },
];


export function PricingSection() {
  return (
    <section className="relative bg-ink px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* fanned mockups */}
        <Reveal className="order-1">
          <div className="relative mx-auto h-[300px] w-full max-w-md sm:h-[360px]">
            {mockups.map((m, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 w-[58%] max-w-[230px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-primary/20 shadow-[0_28px_60px_-26px_rgba(0,0,0,0.95)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:!rotate-0"
                style={{
                  rotate: `${m.rot}deg`,
                  zIndex: m.z,
                  marginLeft: `${m.x * 0.19}%`,
                }}
              >
                <img src={m.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-2">
          <div className="relative text-center lg:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
              The Only Plan You Need
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.12] sm:text-4xl">
              Unlimited Content. <span className="text-primary">One Flat Fee.</span>
            </h2>

            <ul className="mx-auto mt-7 grid max-w-md gap-2.5 text-left">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <CheckIcon />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-7 max-w-md text-center">
              <span className="inline-block rounded-xl bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-primary)_80%,transparent)]">
                Avail 20% Off Today
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* pricing cards */}
      <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 items-center gap-5 sm:mx-auto sm:max-w-md lg:max-w-5xl lg:grid-cols-3">
        {plans.map((p, i) => {
          const featured = p.name === "Standard";
          return (
            <Reveal key={p.name} delay={featured ? 260 : i * 120} className={featured ? "order-first lg:order-none" : ""}>
              <div className={`relative ${featured ? "lg:-mt-8" : ""}`}>
                {featured && (
                  <span className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--color-primary)_28%,transparent),transparent_75%)]" />
                )}
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-5 transition-transform duration-500 ${
                    featured
                      ? "scale-[1.02] bg-primary text-primary-foreground shadow-[0_40px_90px_-30px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] sm:p-6"
                      : "card-surface"
                  }`}
                >
                  {featured && (
                    <span className="mb-2.5 inline-flex w-fit rounded-full bg-ink px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-primary">
                      Recommended
                    </span>
                  )}
                  <h3 className={`text-lg font-bold ${featured ? "text-primary-foreground" : "text-foreground"}`}>{p.name}</h3>
                  <p className={`mt-1 text-[0.7rem] ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.tag}</p>
                  <p className={`mt-3.5 font-display text-2xl font-bold sm:text-[1.75rem] ${featured ? "text-primary-foreground" : "text-primary"}`}>
                    {p.price}
                  </p>

                  <ul className="mt-4 grid flex-1 gap-2">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-[0.8rem] leading-snug ${featured ? "text-primary-foreground/90" : "text-foreground/90"}`}>
                        <span
                          className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                            featured ? "bg-ink text-primary" : "bg-primary/15 text-primary"
                          }`}
                        >
                          <CheckIcon />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ChatButton variant={featured ? "black" : "outline"} className="w-full py-2.5 text-sm" />
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <p className="mx-auto mt-12 max-w-2xl rounded-2xl border border-primary/25 bg-charcoal px-6 py-4 text-center text-xs text-muted-foreground sm:text-sm">
          <span className="font-semibold text-primary">7-day money-back guarantee</span> — not satisfied? Get your money
          back, no questions asked.
        </p>
      </Reveal>
    </section>
  );
}
