import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

type HeroProps = {
  previewImage?: string;
  previewTitle?: string;
  previewUrl?: string;
  previewBlurb?: string;
};

export function Hero({
  previewImage = "/projects/atendia-v2.png",
  previewTitle = "Atendia",
  previewUrl = "/projetos",
  previewBlurb = "Organize vendas e atendimento no WhatsApp em um só lugar.",
}: HeroProps) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-metallic">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-80" />
      <div className="animate-aurora pointer-events-none absolute -top-24 right-[-10%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(27,159,255,0.28),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(123,92,255,0.18),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] sm:px-8 sm:py-16">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 border border-electric/30 bg-electric/10 px-3 py-1.5 font-display text-[0.68rem] font-medium tracking-[0.28em] text-electric-bright uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-bright shadow-[0_0_10px_#5ec4ff]" />
            Orçamento em até 24h
          </p>

          <div className="animate-fade-up-delay-1 mt-7">
            <Logo
              size="lg"
              className="drop-shadow-[0_0_48px_rgba(27,159,255,0.45)]"
            />
          </div>

          <h1 className="animate-fade-up-delay-2 mt-7 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ice sm:text-5xl lg:text-[3.35rem]">
            Sistemas sob medida que{" "}
            <span className="text-shimmer">vendem confiança</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-ice-muted sm:text-lg">
            Do caos à clareza: produto no ar, acabamento premium e conversa
            direta no WhatsApp. Peça orçamento — retorno em até 24h.
          </p>

          <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton glow className="min-w-[160px]" />
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-5 py-3 font-display text-sm font-semibold tracking-wide text-ice backdrop-blur-sm transition hover:border-electric/50 hover:bg-electric/10"
            >
              Ver projetos
            </Link>
          </div>

          <ul className="animate-fade-up-delay-4 mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-ice-muted">
            <li className="flex items-center gap-2">
              <TrustDot />6 demos no ar
            </li>
            <li className="flex items-center gap-2">
              <TrustDot />Orçamento em 24h
            </li>
            <li className="flex items-center gap-2">
              <TrustDot />Sob medida, de verdade
            </li>
          </ul>
        </div>

        <div className="animate-fade-in relative hidden lg:block">
          <div className="animate-float absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(27,159,255,0.22),transparent_55%)] blur-xl" />
          <Link
            href={previewUrl}
            className="outline-frame group relative block overflow-hidden rounded-2xl bg-charcoal-elevated shadow-[0_30px_80px_rgba(0,0,0,0.55)] transition duration-500"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-graphite">
              <Image
                src={previewImage}
                alt={`Preview ${previewTitle}`}
                fill
                priority
                quality={95}
                className="origin-top-left object-cover object-left-top scale-[1.45] transition duration-700 group-hover:scale-[1.47]"
                sizes="(max-width: 1024px) 0vw, 42vw"
              />
            </div>
            <div className="border-t border-white/10 bg-charcoal/95 px-6 py-5">
              <p className="font-display text-[0.65rem] tracking-[0.3em] text-electric-bright uppercase">
                Em destaque
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-ice">
                {previewTitle}
              </p>
              <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-ice-muted">
                {previewBlurb}
              </p>
              <p className="mt-3 text-sm font-semibold text-electric-bright">
                Demo ao vivo · ver case →
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustDot() {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_8px_rgba(27,159,255,0.8)]"
      aria-hidden
    />
  );
}
