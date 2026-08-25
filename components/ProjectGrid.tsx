import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";

type ProjectGridProps = {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export function ProjectGrid({
  projects,
  eyebrow = "Projetos",
  title = "Demos selecionadas",
  subtitle = "Cada projeto abaixo está no ar — abra a demo e veja o nível de entrega.",
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
          {projects.map((project) => {
            const fit =
              project.imageFit === "contain" ? "object-contain" : "object-cover";
            const position = project.imagePosition
              ? ({ objectPosition: project.imagePosition } as CSSProperties)
              : undefined;

            return (
              <li key={project.id}>
                <article className="outline-frame group flex h-full flex-col overflow-hidden rounded-lg transition duration-500">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block aspect-[16/10] overflow-hidden bg-graphite`}
                  >
                    <Image
                      src={project.image}
                      alt={`Print do projeto ${project.title}`}
                      fill
                      quality={95}
                      style={{
                        ...(position ?? {}),
                        objectPosition: project.imagePosition ?? "left top",
                      }}
                      className={`${fit} origin-top-left object-top scale-[1.45] transition duration-700 group-hover:scale-[1.47]`}
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
                    <div className="mt-auto">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm font-semibold text-electric-bright transition hover:text-ice"
                      >
                        Ver demo →
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
