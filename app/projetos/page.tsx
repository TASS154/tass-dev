import type { Metadata } from "next";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteShell } from "@/components/SiteShell";
import { getFeaturedProject, getGridProjects } from "@/lib/projects";
import { getProjects } from "@/lib/vercel";

export const metadata: Metadata = {
  title: "Projetos — TASS Dev",
  description:
    "Demos ao vivo da TASS Dev: AK Reis Prime, Palicone, Veloz, Finance AI e Bot Advisor.",
};

export default async function ProjetosPage() {
  const projects = await getProjects();
  const featured = getFeaturedProject(projects);
  const grid = getGridProjects(projects);

  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-metallic">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
            Portfólio
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ice sm:text-5xl">
            Projetos
          </h1>
          <p className="mt-4 max-w-2xl text-ice-muted">
            Cases reais no ar. Cada demo mostra o padrão de entrega — do visual ao fluxo.
          </p>
        </div>
      </section>
      <FeaturedProject project={featured} />
      <ProjectGrid
        projects={grid}
        title="Demais cases"
        subtitle="Palicone, Veloz, Finance AI e Bot Advisor — abra a demo e explore."
      />
    </SiteShell>
  );
}
