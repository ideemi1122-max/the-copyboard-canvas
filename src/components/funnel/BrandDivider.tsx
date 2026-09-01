/** CopyBoard brand ribbon pattern — seamless SVG tile used once, between Hero and Growth Stats. */
function sparkle(cx: number, cy: number, r: number) {
  const k = r * 0.28;
  return `M${cx} ${cy - r} C${cx + k} ${cy - k} ${cx + k} ${cy - k} ${cx + r} ${cy} C${cx + k} ${cy + k} ${cx + k} ${cy + k} ${cx} ${cy + r} C${cx - k} ${cy + k} ${cx - k} ${cy + k} ${cx - r} ${cy} C${cx - k} ${cy - k} ${cx - k} ${cy - k} ${cx} ${cy - r} Z`;
}

export function BrandDivider() {
  return (
    <div className="relative w-full overflow-hidden bg-ink" aria-hidden="true">
      <svg
        className="block h-11 w-full sm:h-14"
        viewBox="0 0 1600 40"
        preserveAspectRatio="xMinYMid slice"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern id="cb-ribbon" width="80" height="40" patternUnits="userSpaceOnUse">
            <rect width="80" height="40" fill="#FFD400" />
            <path
              d="M-40 30 C-20 30 -20 10 0 10 C20 10 20 30 40 30 C60 30 60 10 80 10 C100 10 100 30 120 30"
              fill="none"
              stroke="#0D0D0C"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <path d={sparkle(20, 20, 3.6)} fill="#FFD400" />
            <path d={sparkle(60, 20, 3.6)} fill="#FFD400" />
            <path d={sparkle(40, 8, 3)} fill="#0D0D0C" />
            <path d={sparkle(0, 32, 3)} fill="#0D0D0C" />
            <path d={sparkle(80, 32, 3)} fill="#0D0D0C" />
          </pattern>
        </defs>
        <rect width="1600" height="40" fill="url(#cb-ribbon)" />
      </svg>
      <span className="pointer-events-none absolute inset-0 bg-ink/25" />
    </div>
  );
}
