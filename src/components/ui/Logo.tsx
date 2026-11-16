import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "dark",
  showWordmark = true,
  className = "",
  size = "md",
}: LogoProps) {
  // Dimensions for the approved monogram mark
  const dimensions = {
    sm: { width: 32, height: 38 },
    md: { width: 40, height: 48 },
    lg: { width: 56, height: 68 },
  }[size];

  const src =
    variant === "light"
      ? "/assets/delegates-monogram-light.png"
      : "/assets/delegates-monogram-dark.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="DELEGATES Homepage"
    >
      <div className="relative flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src={src}
          alt="DELEGATES Official Monogram"
          width={dimensions.width}
          height={dimensions.height}
          className="object-contain h-auto"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-interface font-semibold text-sm tracking-[0.25em] uppercase transition-colors duration-200 ${
              variant === "light"
                ? "text-white group-hover:text-[#F4F0E8]"
                : "text-[#171717] group-hover:text-[#68645D]"
            }`}
          >
            DELEGATES
          </span>
          <span
            className={`font-interface text-[9px] tracking-[0.16em] uppercase ${
              variant === "light" ? "text-[#C9C2B7]" : "text-[#68645D]"
            }`}
          >
            MUN & Diplomacy
          </span>
        </div>
      )}
    </Link>
  );
}
