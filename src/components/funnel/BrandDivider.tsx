import pattern from "@/assets/copyboard-pattern.png.asset.json";

/** Official CopyBoard brand pattern band, tiled horizontally. */
export function BrandDivider() {
  return (
    <div
      className="w-full bg-[#FFD400] bg-repeat-x bg-[length:auto_100%] h-[62px] sm:h-[100px]"
      style={{ backgroundImage: `url(${pattern.url})` }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
