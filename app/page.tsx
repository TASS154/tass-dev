import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteShell } from "@/components/SiteShell";
import { getFeaturedProject, getGridProjects } from "@/lib/projects";
import { getProjects } from "@/lib/vercel";

export default async function Home() {
  const projects = await getProjects();
  const featured = getFeaturedProject(projects);
  const grid = getGridProjects(projects).slice(0, 2);

  return (
    <SiteShell>
      <Hero />
      <FeaturedProject project={featured} />
      <ProjectGrid
        projects={grid}
        title="Mais demos"
        subtitle="Uma amostra rápida — veja o portfólio completo na página de projetos."
      />
      <div className="border-t border-white/10 bg-charcoal px-5 py-10 text-center sm:px-8">
        <Link
          href="/projetos"
          className="font-display text-sm font-semibold tracking-wide text-electric-bright transition hover:text-ice"
        >
          Ver todos os projetos →
        </Link>
      </div>
      <Method />
      <section className="border-t border-white/10 bg-charcoal-elevated">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              Pronto para começar?
            </h2>
            <p className="mt-2 max-w-xl text-ice-muted">
              Conte o que precisa — respondo no WhatsApp com clareza e próximo passo.
            </p>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-md bg-electric px-5 py-3 font-display text-sm font-semibold text-charcoal transition hover:bg-electric-bright"
          >
            Ir para contato
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
