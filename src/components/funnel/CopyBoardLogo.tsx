import logoAsset from "@/assets/copyboard-transparent-yellow-circle.png.asset.json";

/** Full CopyBoard logo: yellow C mark + wordmark. */
export function CopyBoardLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="CopyBoard"
      className={`w-auto object-contain ${className}`}
      style={{ maxWidth: "100%" }}
    />
  );
}
