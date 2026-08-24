const STEPS = [
  {
    title: "Problema",
    text: "Entendemos a dor real do negócio — sem template genérico.",
  },
  {
    title: "Estrutura",
    text: "Organizamos complexidade em fluxos claros e prioridades.",
  },
  {
    title: "Clareza",
    text: "Entregamos no ar: visual premium e foco em resultado.",
  },
];

export function Method() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-charcoal-elevated">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
          Método
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ice sm:text-5xl">
          Do problema à solução — com certeza no caminho
        </h2>
        <p className="mt-4 max-w-xl text-ice-muted">
          Complexidade não assusta. Ela é organizada.
        </p>

        <ol className="mt-14 grid gap-4 md:grid-cols-3 md:gap-0">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-white/10 bg-charcoal/50 p-7 transition duration-300 hover:border-electric/45 hover:bg-charcoal/80 md:border-l-0 md:first:border-l"
            >
              <span className="font-display text-4xl font-semibold text-electric/25">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ice">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
