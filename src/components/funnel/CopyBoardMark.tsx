/** CopyBoard symbol: bold rounded "C" crescent with a 4-point sparkle in the opening. Always Signal Yellow. */
export function CopyBoardMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="CopyBoard"
      style={{ display: "block" }}
    >
      {/* C crescent — gap on the right */}
      <path
        d="M78 26A36 36 0 1 0 78 74"
        fill="none"
        stroke="#FFD400"
        strokeWidth="19"
        strokeLinecap="round"
      />
      {/* 4-point sparkle nestled in the opening */}
      <path
        d="M74 33C76 44 79 47 90 50C79 53 76 56 74 67C72 56 69 53 58 50C69 47 72 44 74 33Z"
        fill="#FFD400"
      />
    </svg>
  );
}
