"use client";

import { useState, type FormEvent } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Site / Landing");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const composed = [
      `Olá, TASS Dev! Quero falar sobre um sistema sob medida.`,
      ``,
      `Nome: ${name.trim() || "—"}`,
      `E-mail: ${email.trim() || "—"}`,
      `Tipo: ${projectType}`,
      ``,
      `Mensagem:`,
      message.trim() || "Gostaria de alinhar detalhes do projeto.",
    ].join("\n");

    window.open(getWhatsAppUrl(composed), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="outline-frame space-y-5 rounded-lg bg-charcoal-elevated/80 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="font-display text-xs tracking-[0.2em] text-ice-muted uppercase">
            Nome
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-white/15 bg-charcoal px-4 py-3 text-ice outline-none transition focus:border-electric"
            placeholder="Seu nome"
            autoComplete="name"
          />
        </label>
        <label className="block space-y-2">
          <span className="font-display text-xs tracking-[0.2em] text-ice-muted uppercase">
            E-mail
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-white/15 bg-charcoal px-4 py-3 text-ice outline-none transition focus:border-electric"
            placeholder="voce@empresa.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="font-display text-xs tracking-[0.2em] text-ice-muted uppercase">
          Tipo de projeto
        </span>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full rounded-md border border-white/15 bg-charcoal px-4 py-3 text-ice outline-none transition focus:border-electric"
        >
          <option>Site / Landing</option>
          <option>E-commerce</option>
          <option>Dashboard / SaaS</option>
          <option>Bot / IA</option>
          <option>Outro</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className="font-display text-xs tracking-[0.2em] text-ice-muted uppercase">
          Mensagem
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-md border border-white/15 bg-charcoal px-4 py-3 text-ice outline-none transition focus:border-electric"
          placeholder="Conte o objetivo, prazo e o que precisa resolver..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-electric px-5 py-3 font-display text-sm font-semibold text-charcoal transition hover:bg-electric-bright sm:w-auto"
      >
        Enviar no WhatsApp
      </button>
      <p className="text-xs text-ice-muted">
        O envio abre o WhatsApp com a mensagem pronta — sem spam, conversa direta.
      </p>
    </form>
  );
}
