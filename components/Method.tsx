const STEPS = [
  {
    title: "Problema / Caos",
    text: "Mapeamos a dor real do negócio — sem ruído, sem solução genérica.",
  },
  {
    title: "Processo / Estrutura",
    text: "Organizamos complexidade em arquitetura clara, fluxos e prioridades.",
  },
  {
    title: "Solução / Clareza",
    text: "Entregamos o sistema no ar, com acabamento premium e foco em resultado.",
  },
];

export function Method() {
  return (
    <section
      id="como-entrego"
      className="scroll-mt-20 border-t border-white/10 bg-charcoal-elevated"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
          Método
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl">
          Do problema à solução
        </h2>
        <p className="mt-3 max-w-xl text-ice-muted">
          Complexidade não assusta. Ela é organizada.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-white/10 bg-charcoal/60 p-6 transition duration-300 hover:border-electric/40"
            >
              <span className="font-display text-xs tracking-[0.25em] text-violet-accent">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ice">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-muted">{step.text}</p>
              {index < STEPS.length - 1 ? (
                <div
                  className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-to-r from-electric/50 to-transparent md:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
