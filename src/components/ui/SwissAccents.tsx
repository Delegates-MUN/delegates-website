import React from "react";

/**
 * Swiss corner accent marks — 1.5px borders at each corner of a relatively-
 * positioned parent. The parent must have `relative` positioning. These marks
 * sit at z-10 so they appear above images.
 *
 * Uses inline styles for the 1.5px border width because Tailwind v4 does not
 * include a `border-t-1.5` / `border-l-1.5` utility.
 *
 * @param borderColor  Legacy Tailwind class string — still accepted for back-compat.
 *                     Examples: "border-white/40", "border-white/30"
 * @param size         Tailwind size classes (default "w-2.5 h-2.5")
 */
export function SwissCornerMarks({
  className = "",
  size = "w-2.5 h-2.5",
  borderColor = "border-[#171717]",
}: {
  className?: string;
  size?: string;
  borderColor?: string;
}) {
  // Map the legacy Tailwind borderColor prop to a real CSS color
  let resolvedColor = "#171717";
  if (borderColor.includes("white")) {
    if (borderColor.includes("/40")) resolvedColor = "rgba(255,255,255,0.4)";
    else if (borderColor.includes("/30")) resolvedColor = "rgba(255,255,255,0.3)";
    else if (borderColor.includes("/20")) resolvedColor = "rgba(255,255,255,0.2)";
    else resolvedColor = "rgba(255,255,255,1)";
  }

  const base: React.CSSProperties = {
    borderColor: resolvedColor,
    borderStyle: "solid",
    borderWidth: 0,
  };

  return (
    <>
      {/* Top Left */}
      <span
        aria-hidden="true"
        className={`absolute -top-[1px] -left-[1px] ${size} pointer-events-none z-10 swiss-corner-tick ${className}`}
        style={{ ...base, borderTopWidth: "1.5px", borderLeftWidth: "1.5px" }}
      />
      {/* Top Right */}
      <span
        aria-hidden="true"
        className={`absolute -top-[1px] -right-[1px] ${size} pointer-events-none z-10 swiss-corner-tick ${className}`}
        style={{ ...base, borderTopWidth: "1.5px", borderRightWidth: "1.5px" }}
      />
      {/* Bottom Left */}
      <span
        aria-hidden="true"
        className={`absolute -bottom-[1px] -left-[1px] ${size} pointer-events-none z-10 swiss-corner-tick ${className}`}
        style={{ ...base, borderBottomWidth: "1.5px", borderLeftWidth: "1.5px" }}
      />
      {/* Bottom Right */}
      <span
        aria-hidden="true"
        className={`absolute -bottom-[1px] -right-[1px] ${size} pointer-events-none z-10 swiss-corner-tick ${className}`}
        style={{ ...base, borderBottomWidth: "1.5px", borderRightWidth: "1.5px" }}
      />
    </>
  );
}

export function CartographicStamp({
  location = "DELEGATES",
  coordinates = "FREE & OPEN ACCESS",
  className = "",
}: {
  location?: string;
  coordinates?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-interface text-[10px] uppercase tracking-wider text-[#8E877C] select-none ${className}`}
    >
      <span className="flex items-center gap-1.5 font-medium text-[#171717]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B89358] inline-block" />
        <span>{location}</span>
      </span>
      <span className="text-[#D8D0C4]">·</span>
      <span>{coordinates}</span>
    </div>
  );
}

export function ArchivalBadge({
  label = "DELEGATES",
  classification = "GUIDE",
  variant = "light",
}: {
  label?: string;
  classification?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[10px] font-interface tracking-wider uppercase select-none ${
        isDark
          ? "bg-[#171717]/90 border-white/20 text-[#EAE4D9]"
          : "bg-[#EAE4D9] border-[#D8D0C4] text-[#171717]"
      }`}
    >
      <span className="font-semibold text-current">{label}</span>
      <span className="w-1 h-1 rounded-full bg-[#B89358]" />
      <span className="text-[9px] opacity-80">{classification}</span>
    </div>
  );
}
