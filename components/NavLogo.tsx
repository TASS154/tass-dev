import Image from "next/image";
import Link from "next/link";

/** Nav mark: transparent bird + TASS Dev typography (no white circle). */
export function NavLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="TASS Dev"
    >
      <Image
        src="/logo-bird.png"
        alt=""
        width={80}
        height={74}
        className="h-11 w-auto object-contain drop-shadow-[0_0_14px_rgba(27,159,255,0.35)] transition duration-300 group-hover:brightness-110 sm:h-12"
        priority
      />
      <span className="font-display text-lg font-semibold tracking-tight text-ice transition group-hover:text-electric-bright sm:text-xl">
        TASS <span className="font-medium text-electric-bright">Dev</span>
      </span>
    </Link>
  );
}
