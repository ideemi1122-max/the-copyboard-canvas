import logo from "@/assets/copyboard-logo-full.png";

/** Full CopyBoard logo: yellow C mark + wordmark. */
export function CopyBoardLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="CopyBoard"
      className={`w-auto object-contain ${className}`}
      style={{ maxWidth: "100%" }}
    />
  );
}
