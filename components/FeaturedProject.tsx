import Image from "next/image";
import type { Project } from "@/lib/projects";
import { WhatsAppButton } from "./WhatsAppButton";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
              Case principal
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ice sm:text-5xl">
              {project.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ice-muted sm:text-base">
            {project.blurb}
          </p>
        </div>

        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-frame group relative mt-10 block overflow-hidden rounded-2xl transition duration-500"
        >
          <div className="relative aspect-[16/9] bg-graphite sm:aspect-[21/9]">
            <Image
              src={project.image}
              alt={`Print do projeto ${project.title}`}
              fill
              quality={95}
              className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
              sizes="100vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/20" />
          </div>
        </a>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/15 px-3 py-1.5 font-display text-xs tracking-wide text-ice-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-electric px-5 py-3 font-display text-sm font-semibold text-charcoal transition hover:bg-electric-bright"
            >
              Abrir demo ao vivo
            </a>
            <WhatsAppButton
              variant="outline"
              message={`Olá, TASS Dev! Vi o destaque ${project.title} e quero um sistema parecido.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
