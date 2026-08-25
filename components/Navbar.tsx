import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="relative z-40 border-b border-white/10 bg-charcoal">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <Logo size="sm" />
        <nav className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-2 font-display text-xs tracking-wide text-ice-muted transition hover:text-ice sm:px-3 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton className="!hidden !px-4 !py-2 text-xs sm:!inline-flex sm:text-sm" />
        </nav>
      </div>
    </header>
  );
}
