import type { Metadata } from "next";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteShell } from "@/components/SiteShell";
import { getFeaturedProjects, getGridProjects } from "@/lib/projects";
import { getProjects } from "@/lib/vercel";

export const metadata: Metadata = {
  title: "Projetos — TASS Dev",
  description:
    "Demos ao vivo da TASS Dev: Atendia, AK Reis Prime, Palicone, Veloz, Finance AI e Bot Advisor.",
};

export default async function ProjetosPage() {
  const projects = await getProjects();
  const highlights = getFeaturedProjects(projects);
  const grid = getGridProjects(projects);

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-metallic">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-display text-xs font-medium tracking-[0.3em] text-electric-bright uppercase">
            Portfólio
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ice sm:text-6xl">
            Projetos que já estão no ar
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ice-muted">
            Cada demo é prova real — abra, navegue e sinta o padrão TASS Dev.
          </p>
        </div>
      </section>
      <FeaturedProject projects={highlights} />
      <ProjectGrid
        projects={grid}
        title="Demais cases"
        subtitle="Palicone, Veloz, Finance AI e Bot Advisor — abra a demo e explore."
      />
    </SiteShell>
  );
}
