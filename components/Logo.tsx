import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const frameClass = {
  sm: "h-[4.25rem] w-[4.25rem] sm:h-20 sm:w-20",
  md: "h-24 w-24",
  lg: "h-36 w-36 sm:h-44 sm:w-44",
};

const padClass = {
  sm: "p-1.5",
  md: "p-2",
  lg: "p-3",
};

export function Logo({ className = "", size = "sm" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="TASS Dev"
    >
      <span
        className={`${frameClass[size]} ${padClass[size]} block overflow-hidden rounded-full border border-white/15 bg-charcoal-elevated shadow-[0_0_24px_rgba(27,159,255,0.25)] transition duration-300 group-hover:border-electric/50 group-hover:shadow-[0_0_32px_rgba(27,159,255,0.4)]`}
      >
        <Image
          src="/logo-tass-dev.png"
          alt="TASS Dev"
          width={280}
          height={280}
          className="h-full w-full object-contain transition duration-300 group-hover:brightness-110"
          priority
        />
      </span>
    </Link>
  );
}
