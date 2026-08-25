import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contato — TASS Dev",
  description:
    "Fale com a TASS Dev pelo WhatsApp. Orçamento de sistemas sob medida em até 24h.",
};

export default function ContatoPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-metallic">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex items-center gap-2 border border-electric/30 bg-electric/10 px-3 py-1.5 font-display text-[0.68rem] font-medium tracking-[0.28em] text-electric-bright uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-bright" />
              Orçamento em até 24h
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ice sm:text-5xl">
              Vamos conversar com certeza
            </h1>
            <p className="mt-4 max-w-md text-ice-muted">
              Preencha o formulário e envie direto no WhatsApp. Retorno de
              orçamento em até 24h — sem intermediário.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ice-muted">
              <li className="flex gap-3">
                <span className="text-electric-bright">01</span>
                Sites, e-commerce, dashboards e bots com IA
              </li>
              <li className="flex gap-3">
                <span className="text-electric-bright">02</span>
                Entrega com acabamento premium e foco em resultado
              </li>
              <li className="flex gap-3">
                <span className="text-electric-bright">03</span>
                Conversa direta — você fala com quem constrói
              </li>
            </ul>
            <div className="mt-8">
              <WhatsAppButton variant="outline">Abrir WhatsApp agora</WhatsAppButton>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
