import { useRef } from "react";
import { SectionHeader, useCountUp, useInView } from "./primitives";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  delta: string;
  points: number[];
};

const stats: Stat[] = [
  { label: "Total Views", value: 250, suffix: "M+", delta: "+212%", points: [8, 14, 11, 22, 27, 24, 38, 46] },
  { label: "Engagement Rate", value: 32, suffix: "%", delta: "+64%", points: [10, 12, 18, 17, 26, 31, 34, 44] },
  { label: "Content Output", value: 148, suffix: "+", delta: "+3.4x", points: [6, 9, 15, 14, 24, 30, 36, 48] },
];


function sparkPath(points: number[], w = 240, h = 72) {
  const max = Math.max(...points);
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i / (points.length - 1)) * w} ${h - (p / max) * (h - 8) - 4}`)
    .join(" ");
}

function StatCard({ stat, delay, active, index }: { stat: Stat; delay: number; active: boolean; index: number }) {
  const n = useCountUp(stat.value, active);
  const path = sparkPath(stat.points);
  const shown = stat.value % 1 === 0 ? Math.round(n).toString() : n.toFixed(1);
  return (
    <div className="card-surface flex h-full flex-col rounded-3xl p-4 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.6rem]">
          {shown}
          <span className="text-primary">{stat.suffix}</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[0.65rem] font-semibold text-primary sm:px-2.5 sm:py-1 sm:text-xs">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 11 8 6l2.5 2.5L14 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5h-3.4M14 5v3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {stat.delta}
        </span>
      </div>
      <svg viewBox="0 0 240 72" className="mt-4 h-16 w-full sm:h-20" aria-hidden="true">
        <defs>
          <linearGradient id={`area-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD400" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${path} L240 72 L0 72 Z`} fill={`url(#area-${index})`} opacity={active ? 1 : 0} style={{ transition: "opacity .8s ease", transitionDelay: `${delay + 400}ms` }} />
        <path
          d={path}
          fill="none"
          stroke="#FFD400"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="600"
          strokeDashoffset={active ? 0 : 600}
          style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1)", transitionDelay: `${delay}ms` }}
        />
      </svg>
      <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">{stat.label}</p>
    </div>
  );
}


export function GrowthSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const active = useInView(ref);
  const rotations = ["-9deg", "-3deg", "3deg"];
  const lifts = ["mt-8", "mt-0", "mt-8"];

  return (
    <section className="relative bg-ink px-5 py-16 sm:py-24">
      <SectionHeader
        eyebrow="Real Growth"
        title={<>Content That Actually <span className="text-primary">Moves The Numbers</span></>}
        sub="Our creators ship every day, and the channels we run compound fast. Here's what our partners see."
      />

      <div ref={ref} className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group relative ${lifts[i]} transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-30 hover:-translate-y-2 hover:!rotate-0 ${
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              rotate: rotations[i],
              zIndex: i === 1 ? 20 : 10,
              transitionDelay: `${i * 150}ms`,
              marginInline: i > 0 ? "-8px" : undefined,
            }}
          >
            <StatCard stat={s} delay={i * 150} active={active} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
