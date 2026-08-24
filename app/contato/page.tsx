import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contato — TASS Dev",
  description:
    "Fale com a TASS Dev pelo WhatsApp. Formulário rápido para orçamento de sistemas sob medida.",
};

export default function ContatoPage() {
  return (
    <SiteShell>
      <section className="bg-metallic">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
              Contato
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ice sm:text-5xl">
              Vamos conversar
            </h1>
            <p className="mt-4 max-w-md text-ice-muted">
              Preencha o formulário e envie direto no WhatsApp. Sem intermediário —
              alinhamos objetivo, prazo e próximo passo.
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
                Resposta rápida pelo WhatsApp
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
