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

/**
 * Hero circular mark: use a pre-padded white PNG and keep CSS scale near 1
 * so production (Vercel image CDN) matches localhost and never clips "TASS Dev".
 */
export function Logo({ className = "", size = "sm" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="TASS Dev"
    >
      <span
        className={`${frameClass[size]} relative block overflow-hidden rounded-full border border-white/25 bg-white shadow-[0_0_24px_rgba(27,159,255,0.25)] transition duration-300 group-hover:border-electric/45 group-hover:shadow-[0_0_32px_rgba(27,159,255,0.4)]`}
      >
        <Image
          src="/logo-mark-v2.png"
          alt="TASS Dev"
          width={512}
          height={512}
          unoptimized
          className="h-full w-full object-cover transition duration-300 group-hover:brightness-105"
          priority
        />
      </span>
    </Link>
  );
}
