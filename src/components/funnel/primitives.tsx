import { useEffect, useRef, useState, type ReactNode } from "react";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px] ${className}`}
    >
      <path
        d="M2.5 8h10M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ChatVariant = "solid" | "outline" | "black";

export function ChatButton({
  variant = "solid",
  className = "",
  label = "Chat With Us",
}: {
  variant?: ChatVariant;
  className?: string;
  label?: string;
}) {
  const styles: Record<ChatVariant, string> = {
    solid:
      "bg-primary text-primary-foreground shadow-[0_16px_40px_-14px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] hover:brightness-105",
    outline:
      "border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground",
    black: "bg-ink text-foreground hover:bg-charcoal-2",
  };
  return (
    <a
      href="https://api.leadconnectorhq.com/widget/booking/XHmJCxFl4NB4MKGUNiqC"
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      <ChatBubble />
      {label}
      <ArrowIcon />
    </a>
  );
}

function ChatBubble() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 7.2c0-2.3 2.2-4.1 5.2-4.1s5.3 1.8 5.3 4.1-2.3 4.2-5.3 4.2c-.6 0-1.2-.1-1.7-.2l-2.6 1.3.6-2.1A3.9 3.9 0 0 1 2.5 7.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  sparkle = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  sparkle?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 flex flex-wrap items-center justify-center gap-x-3 text-3xl font-bold leading-[1.12] text-foreground sm:text-4xl md:text-[2.75rem]">
        {sparkle && <GemAccent kind="star" size={34} className="shrink-0" />}
        <span>{title}</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {sub}
      </p>
    </div>
  );
}

/** Layered, faceted 3D-style gem/star accent. */
export function GemAccent({
  kind = "star",
  size = 72,
  className = "",
}: {
  kind?: "star" | "diamond";
  size?: number;
  className?: string;
}) {
  const uid = `${kind}-${size}`;
  return (
    <span
      className={`pointer-events-none inline-block animate-gem ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <radialGradient id={`glow-${uid}`}>
            <stop offset="0%" stopColor="#FFD400" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#FFD400" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`f1-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF3A8" />
            <stop offset="100%" stopColor="#FFD400" />
          </linearGradient>
          <linearGradient id={`f2-${uid}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD400" />
            <stop offset="100%" stopColor="#C79A00" />
          </linearGradient>
          <linearGradient id={`f3-${uid}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8F6D00" />
            <stop offset="100%" stopColor="#FFC800" />
          </linearGradient>
          <filter id={`blur-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id={`shadow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.55" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="46" fill={`url(#glow-${uid})`} filter={`url(#blur-${uid})`} />
        {kind === "star" ? (
          <g filter={`url(#shadow-${uid})`}>
            <path d="M50 10 L58 42 L50 50 Z" fill={`url(#f1-${uid})`} />
            <path d="M50 10 L42 42 L50 50 Z" fill={`url(#f2-${uid})`} />
            <path d="M90 50 L58 42 L50 50 Z" fill={`url(#f2-${uid})`} />
            <path d="M90 50 L58 58 L50 50 Z" fill={`url(#f3-${uid})`} />
            <path d="M50 90 L58 58 L50 50 Z" fill={`url(#f2-${uid})`} />
            <path d="M50 90 L42 58 L50 50 Z" fill={`url(#f3-${uid})`} />
            <path d="M10 50 L42 58 L50 50 Z" fill={`url(#f2-${uid})`} />
            <path d="M10 50 L42 42 L50 50 Z" fill={`url(#f1-${uid})`} />
          </g>
        ) : (
          <g filter={`url(#shadow-${uid})`}>
            <path d="M30 34 L50 12 L70 34 L50 34 Z" fill={`url(#f1-${uid})`} />
            <path d="M30 34 L50 34 L50 88 Z" fill={`url(#f2-${uid})`} />
            <path d="M70 34 L50 34 L50 88 Z" fill={`url(#f3-${uid})`} />
            <path d="M18 34 L30 34 L50 88 Z" fill={`url(#f3-${uid})`} opacity="0.9" />
            <path d="M82 34 L70 34 L50 88 Z" fill={`url(#f2-${uid})`} opacity="0.9" />
            <path d="M18 34 L30 34 L38 20 Z" fill={`url(#f1-${uid})`} opacity="0.8" />
            <path d="M82 34 L70 34 L62 20 Z" fill={`url(#f2-${uid})`} opacity="0.8" />
          </g>
        )}
        <circle cx={kind === "star" ? 42 : 41} cy={kind === "star" ? 40 : 42} r="3.2" fill="#FFFDF0" opacity="0.9" />
      </svg>
    </span>
  );
}

/** Small yellow hanging pin/clip used on poster-style cards. */
export function PinClip({ className = "" }: { className?: string }) {
  return (
    <span className={`pin-clip ${className}`} aria-hidden="true">
      <svg width="26" height="34" viewBox="0 0 26 34" fill="none">
        <circle cx="13" cy="7" r="6" fill="#FFD400" />
        <circle cx="13" cy="7" r="2.2" fill="#0D0D0C" />
        <path d="M13 12v16" stroke="#FFD400" strokeWidth="2.4" strokeLinecap="round" opacity="0.85" />
        <path d="M9 28h8l-4 5z" fill="#FFD400" opacity="0.9" />
      </svg>
    </span>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="m3 8.4 3.2 3.2L13 4.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayButton({ size = 64 }: { size?: number }) {
  return (
    <span
      className="relative grid place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-6px_color-mix(in_oklab,var(--color-primary)_75%,transparent)] transition-transform duration-300 group-hover:scale-110"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-0 animate-ring rounded-full border-2 border-primary" />
      <svg width={size * 0.34} height={size * 0.34} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M4.5 2.8 13 8l-8.5 5.2z" />
      </svg>
    </span>
  );
}

/** Scroll reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const shown = useInView(ref);
  return (
    <Tag
      ref={ref as never}
      className={`reveal-base ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function useInView<T extends HTMLElement>(ref: React.MutableRefObject<T | null>) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return shown;
}

export function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}
