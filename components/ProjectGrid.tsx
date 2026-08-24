import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectGridProps = {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showIds?: boolean;
};

export function ProjectGrid({
  projects,
  eyebrow = "Projetos",
  title = "Demos selecionadas",
  subtitle = "Cada projeto abaixo está no ar — explore a demo e veja o nível de entrega.",
}: ProjectGridProps) {
  return (
    <section className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-ice-muted">{subtitle}</p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="outline-frame group flex h-full flex-col overflow-hidden rounded-lg transition duration-500">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden bg-graphite"
                >
                  <Image
                    src={project.image}
                    alt={`Print do projeto ${project.title}`}
                    fill
                    quality={95}
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </a>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ice">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ice-muted">
                      {project.blurb}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm font-semibold text-electric-bright transition hover:text-ice"
                    >
                      Ver demo →
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm text-ice-muted transition hover:text-ice"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
