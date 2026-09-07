import { useRef } from "react";
import { useInView } from "./primitives";
import r1 from "@/assets/review-1.png.asset.json";
import r3 from "@/assets/review-3.png.asset.json";
import r4 from "@/assets/review-4.png.asset.json";
import r5 from "@/assets/review-5.png.asset.json";

type Review = {
  img: string;
  rot: number;
  mRot: number;
  z: number;
  pos: string;
  focal?: boolean;
};

const reviews: Review[] = [
  { img: r1.url, rot: -6, mRot: -2.5, z: 10, pos: "sm:absolute sm:left-[2%] sm:top-2 sm:w-[275px]" },
  { img: r5.url, rot: 5, mRot: 2.5, z: 20, pos: "sm:absolute sm:right-[2%] sm:top-2 sm:w-[275px]" },
  { img: r3.url, rot: -3, mRot: -2, z: 40, pos: "sm:absolute sm:left-1/2 sm:top-[72px] sm:w-[300px] sm:-translate-x-1/2", focal: true },
  { img: r4.url, rot: 4, mRot: 2, z: 30, pos: "sm:absolute sm:left-1/2 sm:bottom-0 sm:w-[270px] sm:-translate-x-1/2" },
];


function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-charcoal px-3.5 py-1.5 text-[0.7rem] font-semibold text-foreground shadow-[0_10px_26px_-14px_rgba(0,0,0,0.9)] ${className}`}
    >
      {children}
    </span>
  );
}

export function ReviewStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const shown = useInView(ref);

  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.2]" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.09] blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="flex items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" />
          </svg>
          Real Client Reviews
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-[1.14] sm:text-4xl md:text-[2.6rem]">
          Don't Take Our Word For It —{" "}
          <span className="marker-highlight">Take Theirs.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Unedited messages from the brands we create for, dropping in week after week.
        </p>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-[820px] flex-col items-center sm:mt-14">
        <Chip className="rotate-[-2deg] sm:absolute sm:left-0 sm:top-2 sm:z-50">★★★★★ loved it</Chip>

        {/* pointer arrow (desktop only) */}
        <span className="pointer-events-none absolute right-0 top-0 z-50 hidden select-none text-primary lg:block">
          <span className="block -rotate-6 text-[0.7rem] font-semibold">actual client chats</span>
          <svg width="70" height="46" viewBox="0 0 70 46" fill="none" aria-hidden="true">
            <path d="M62 4C52 22 36 34 10 38" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 0" />
            <path d="M10 38l12-6M10 38l8 9" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>

        <div
          ref={ref}
          className="relative mx-auto mt-6 flex w-full max-w-[340px] flex-col items-center gap-5 sm:mt-4 sm:block sm:h-[360px] sm:max-w-[800px]"
        >
          {reviews.map((rv, i) => (
            <figure
              key={i}
              style={{
                zIndex: rv.z,
                transitionDelay: `${i * 100}ms`,
                ["--rot" as string]: `${rv.rot}deg`,
                ["--mrot" as string]: `${rv.mRot}deg`,
              }}
              className={`group w-full max-w-[300px] overflow-hidden rounded-[14px] border border-foreground/10 bg-charcoal shadow-[0_28px_60px_-24px_rgba(0,0,0,0.95)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:!rotate-[0.5deg] hover:shadow-[0_36px_70px_-22px_rgba(0,0,0,1)] ${rv.pos} ${
                shown
                  ? "translate-y-0 rotate-[var(--mrot)] opacity-100 sm:rotate-[var(--rot)]"
                  : "translate-y-3 rotate-0 opacity-0"
              } ${rv.focal ? "ring-1 ring-primary/60 shadow-[0_0_50px_-10px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] animate-gem" : ""}`}
            >
              <span className="mx-auto mt-2 block h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_2px_color-mix(in_oklab,var(--color-primary)_50%,transparent)]" />
              <img src={rv.img} alt="Client review message screenshot" loading="lazy" className="mt-2 w-full object-cover" />
            </figure>
          ))}
        </div>

        <Chip className="mt-8 rotate-[2deg] sm:absolute sm:bottom-0 sm:right-0 sm:z-50 sm:mt-0">50+ brands served</Chip>
      </div>
    </section>
  );
}
