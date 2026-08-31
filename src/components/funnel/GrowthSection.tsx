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
  { label: "Total Views — Last 90 Days", value: 18.4, suffix: "M", delta: "+212%", points: [8, 14, 11, 22, 27, 24, 38, 46] },
  { label: "Engagement Rate — All Channels", value: 9.7, suffix: "%", delta: "+64%", points: [10, 12, 18, 17, 26, 31, 34, 44] },
  { label: "Content Output — Per Month", value: 148, suffix: "+", delta: "+3.4x", points: [6, 9, 15, 14, 24, 30, 36, 48] },
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
    <div className="card-surface flex h-full flex-col rounded-3xl p-6">
      <div className="flex items-center gap-3">
        <span className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          {shown}
          <span className="text-primary">{stat.suffix}</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 11 8 6l2.5 2.5L14 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5h-3.4M14 5v3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {stat.delta}
        </span>
      </div>
      <svg viewBox="0 0 240 72" className="mt-5 h-20 w-full" aria-hidden="true">
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
      <p className="mt-4 text-xs text-muted-foreground">{stat.label}</p>
    </div>
  );
}

function ChartCard({ active }: { active: boolean }) {
  const line = "M8 150 L52 126 L96 108 L140 104 L184 62 L228 78 L272 46 L316 26";
  return (
    <div className="card-surface flex h-full flex-col rounded-3xl p-6">
      <h3 className="text-lg font-bold leading-snug text-foreground">
        Get More Clients, <span className="text-primary">Automate Real Creative Work</span>
      </h3>
      <div className="relative mt-4 flex-1">
        <svg viewBox="0 0 330 170" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="bigArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD400" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
            </linearGradient>
            <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#FFD400" opacity="0.16" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="330" height="170" fill="url(#dots)" rx="12" />
          <path d={`${line} L316 165 L8 165 Z`} fill="url(#bigArea)" opacity={active ? 1 : 0} style={{ transition: "opacity 1s ease .5s" }} />
          <path
            d={line}
            fill="none"
            stroke="#FFD400"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeDasharray="700"
            strokeDashoffset={active ? 0 : 700}
            style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
          />
          {([
            [8, 150],
            [52, 126],
            [96, 108],
            [140, 104],
            [184, 62],
            [228, 78],
            [272, 46],
            [316, 26],
          ] as Array<[number, number]>).map(([x, y]) => (
            <rect key={`${x}`} x={x - 3.5} y={y - 3.5} width="7" height="7" fill="#FFD400" transform={`rotate(45 ${x} ${y})`} />
          ))}
        </svg>
        <Pill className="left-[26%] top-[10%] bg-primary text-primary-foreground" tail="bg-primary">
          Requests Automated
        </Pill>
        <Pill className="left-[46%] top-[62%] bg-ink text-primary" tail="bg-ink">
          New Clients Onboarded
        </Pill>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Client growth curve — first 6 months on CopyBoard</p>
    </div>
  );
}

function Pill({ children, className, tail }: { children: string; className: string; tail: string }) {
  return (
    <span className={`absolute rounded-full px-3 py-1.5 text-[0.62rem] font-semibold shadow-[0_10px_24px_-10px_rgba(0,0,0,0.9)] ${className}`}>
      {children}
      <span className={`absolute -bottom-1 left-5 h-2.5 w-2.5 rotate-45 ${tail}`} />
    </span>
  );
}

export function GrowthSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const active = useInView(ref);
  const rotations = ["-9deg", "-3deg", "3deg", "9deg"];
  const lifts = ["mt-8", "mt-0", "mt-0", "mt-8"];

  return (
    <section className="relative bg-ink px-5 py-24">
      <SectionHeader
        eyebrow="Real Growth"
        title="Content that actually moves the numbers"
        sub="Our creators ship every day, and the channels we run compound fast. Here's what our partners see."
      />

      <div ref={ref} className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {[...stats.map((s, i) => ({ key: s.label, node: <StatCard stat={s} delay={i * 150} active={active} index={i} /> })), { key: "chart", node: <ChartCard active={active} /> }].map(
          (item, i) => (
            <div
              key={item.key}
              className={`group relative ${lifts[i]} transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-30 hover:-translate-y-2 hover:!rotate-0 ${
                active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                rotate: rotations[i],
                zIndex: i === 1 || i === 2 ? 20 : 10,
                transitionDelay: `${i * 150}ms`,
                marginInline: i > 0 ? "-8px" : undefined,
              }}
            >
              {item.node}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
