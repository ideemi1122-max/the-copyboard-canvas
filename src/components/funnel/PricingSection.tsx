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
    name: "Standard",
    tag: "For steady growth",
    price: "$2,495",
    features: [
      "One active request at a time",
      "Unlimited graphic design & thumbnails",
      "Short-form video editing",
      "48–72 hour average turnaround",
      "Dedicated request dashboard",
      "Cancel anytime",
    ],
  },
  {
    name: "Unlimited",
    tag: "For fast-moving brands",
    price: "$3,995",
    features: [
      "Two active requests at a time",
      "Unlimited design, branding & thumbnails",
      "Unlimited video, podcast & motion editing",
      "24–48 hour average turnaround",
      "Dedicated creative lead on Slack",
      "Priority queue on every request",
      "Cancel anytime",
    ],
  },
  {
    name: "Enterprise",
    tag: "For established corporations",
    price: "Custom",
    features: [
      "Multiple parallel request lanes",
      "Full creative team assigned to your brand",
      "Brand system & guideline stewardship",
      "Same-day turnaround windows",
      "Quarterly content strategy sessions",
      "Cancel anytime",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="relative bg-ink px-5 py-24">
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
              Unlimited Design. <span className="text-primary">One Flat Fee.</span>
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
            <span className="mt-7 inline-block -rotate-3 rounded-xl bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-primary)_80%,transparent)]">
              Avail 20% Off Today
            </span>
          </div>
        </Reveal>
      </div>

      {/* pricing cards */}
      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-3">
        {plans.map((p, i) => {
          const featured = p.name === "Unlimited";
          return (
            <Reveal key={p.name} delay={featured ? 260 : i * 120} className={featured ? "order-first lg:order-none" : ""}>
              <div className={`relative ${featured ? "lg:-mt-8" : ""}`}>
                {featured && (
                  <span className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--color-primary)_28%,transparent),transparent_75%)]" />
                )}
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 ${
                    featured
                      ? "scale-[1.03] bg-primary text-primary-foreground shadow-[0_40px_90px_-30px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] sm:p-8"
                      : "card-surface"
                  }`}
                >
                  {featured && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-ink px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">
                      Recommended
                    </span>
                  )}
                  <h3 className={`text-xl font-bold ${featured ? "text-primary-foreground" : "text-foreground"}`}>{p.name}</h3>
                  <p className={`mt-1 text-xs ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.tag}</p>
                  <p className={`mt-5 font-display text-4xl font-bold ${featured ? "text-primary-foreground" : "text-primary"}`}>
                    {p.price}
                    {p.price !== "Custom" && (
                      <span className={`ml-1 text-sm font-medium ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/mo</span>
                    )}
                  </p>
                  <ul className="mt-6 grid flex-1 gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-sm ${featured ? "text-primary-foreground/90" : "text-foreground/90"}`}>
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            featured ? "bg-ink text-primary" : "bg-primary/15 text-primary"
                          }`}
                        >
                          <CheckIcon />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ChatButton variant={featured ? "black" : "outline"} className="w-full" />
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
