import Image from "next/image";
import type { Project } from "@/lib/projects";
import { WhatsAppButton } from "./WhatsAppButton";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section id="destaque" className="scroll-mt-20 border-t border-white/10 bg-charcoal-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
          Destaque
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ice-muted">{project.blurb}</p>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-frame group relative block overflow-hidden rounded-lg transition duration-500"
          >
            <div className="relative aspect-[16/10] bg-graphite">
              <Image
                src={project.image}
                alt={`Print do projeto ${project.title}`}
                fill
                quality={95}
                className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60" />
          </a>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/15 px-3 py-1 font-display text-xs tracking-wide text-ice-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-ice-muted">
              Case principal da TASS Dev — demonstração ao vivo do padrão de qualidade
              que entregamos em sistemas sob medida.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-electric px-5 py-3 font-display text-sm font-semibold text-charcoal transition hover:bg-electric-bright"
              >
                Ver demo
              </a>
              <WhatsAppButton
                variant="outline"
                message={`Olá, TASS Dev! Vi o destaque ${project.title} e quero um sistema parecido.`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
