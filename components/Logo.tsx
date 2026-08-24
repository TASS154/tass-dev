import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "h-12 w-auto",
  md: "h-[4.5rem] w-auto",
  lg: "h-28 w-auto sm:h-32",
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
