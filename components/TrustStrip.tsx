const PROOFS = [
  { label: "Demos no ar", value: "06" },
  { label: "Foco", value: "Resultado" },
  { label: "Contato", value: "WhatsApp" },
  { label: "Modelo", value: "Sob medida" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-charcoal-elevated/90">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {PROOFS.map((item) => (
          <div
            key={item.label}
            className="bg-charcoal-elevated px-5 py-6 text-center sm:px-6 sm:py-7"
          >
            <p className="font-display text-xl font-semibold tracking-tight text-ice sm:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 font-display text-[0.68rem] tracking-[0.22em] text-ice-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
