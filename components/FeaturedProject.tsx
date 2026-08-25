import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";
import { WhatsAppButton } from "./WhatsAppButton";

type FeaturedProjectProps = {
  projects: Project[];
};

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  if (projects.length <= 1) {
    const project = projects[0];
    if (!project) return null;
    return <FeaturedBanner project={project} />;
  }

  return (
    <section className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
          Destaques
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ice sm:text-5xl">
          Atendia e AK Reis Prime
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ice-muted sm:text-base">
          Dois exemplos do que entregamos: organizar vendas no WhatsApp e vender
          produtos de luxo online. Abra as demos e veja na prática.
        </p>

        <ul className="mt-12 grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <FeaturedCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedBanner({ project }: { project: Project }) {
  return (
    <section className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
          Case principal
        </p>
        <FeaturedShot project={project} aspect="banner" />
        <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ice sm:text-5xl">
          {project.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ice-muted sm:text-base">
          {project.blurb}
        </p>
        <FeaturedActions project={project} />
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col">
      <FeaturedShot project={project} aspect="card" />
      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ice sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ice-muted">{project.blurb}</p>
      <div className="mt-auto">
        <FeaturedActions project={project} />
      </div>
    </article>
  );
}

function FeaturedShot({
  project,
  aspect,
}: {
  project: Project;
  aspect: "banner" | "card";
}) {
  const fit = project.imageFit === "contain" ? "object-contain" : "object-cover";
  const position = project.imagePosition
    ? ({ objectPosition: project.imagePosition } as CSSProperties)
    : undefined;

  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`outline-frame group relative block overflow-hidden rounded-2xl transition duration-500 ${aspect === "banner" ? "mt-8" : ""}`}
    >
      <div
        className={
          aspect === "banner"
            ? "relative aspect-[16/9] bg-graphite sm:aspect-[21/9]"
            : "relative aspect-[16/10] bg-graphite"
        }
      >
        <Image
          src={project.image}
          alt={`Print do projeto ${project.title}`}
          fill
          quality={95}
          className={`${fit} origin-top-left object-top scale-[1.45] transition duration-700 group-hover:scale-[1.47]`}
          style={{
            ...(position ?? {}),
            objectPosition: project.imagePosition ?? "left top",
          }}
          sizes={aspect === "banner" ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
          priority
        />
      </div>
    </a>
  );
}

function FeaturedActions({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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
          message={`Olá, TASS Dev! Vi o destaque ${project.title} e quero um sistema parecido. Orçamento em até 24h.`}
        />
      </div>
    </div>
  );
}
