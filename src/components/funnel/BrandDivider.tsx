import pattern from "@/assets/copyboard-divider-yellow.png";

/** Official CopyBoard brand pattern band, tiled horizontally on ink black. */
export function BrandDivider() {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="h-[48px] w-full sm:h-[72px]"
      style={{
        backgroundColor: "#0D0D0C",
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    />
  );
}
