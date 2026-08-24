import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-metallic">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20">
        <p className="animate-fade-up font-display text-xs font-medium tracking-[0.35em] text-electric-bright uppercase">
          Soluções em tecnologia
        </p>

        <div className="animate-fade-up-delay-1 mt-6">
          <Logo size="lg" className="drop-shadow-[0_0_40px_rgba(27,159,255,0.35)]" />
        </div>

        <p className="animate-fade-up-delay-2 mt-6 max-w-xl font-display text-xl font-medium tracking-wide text-ice sm:text-2xl">
          sistemas sob medida
        </p>

        <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-ice-muted sm:text-lg">
          Do caos à clareza: produtos digitais com precisão técnica e acabamento
          premium — feitos para atrair, converter e escalar.
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton glow />
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 font-display text-sm font-semibold tracking-wide text-ice transition hover:border-electric/50 hover:bg-white/5"
          >
            Ver projetos
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 font-display text-sm font-semibold tracking-wide text-ice-muted transition hover:text-ice"
          >
            Pedir orçamento
          </Link>
        </div>

        <p className="animate-fade-up-delay-3 mt-14 font-display text-[0.7rem] tracking-[0.28em] text-ice-muted uppercase">
          Tecnologia · Precisão · Resultado
        </p>
      </div>
    </section>
  );
}
