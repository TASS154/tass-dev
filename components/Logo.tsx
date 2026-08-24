import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "h-11 w-auto",
  md: "h-16 w-auto",
  lg: "h-24 w-auto sm:h-28",
};

export function Logo({ className = "", size = "sm" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="TASS Dev"
    >
      <Image
        src="/logo-tass-dev.png"
        alt="TASS Dev"
        width={280}
        height={112}
        className={`${sizeClass[size]} object-contain transition duration-300 group-hover:brightness-110`}
        priority
      />
    </Link>
  );
}
