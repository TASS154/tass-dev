import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteShell } from "@/components/SiteShell";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getFeaturedProject, getGridProjects } from "@/lib/projects";
import { getProjects } from "@/lib/vercel";

export default async function Home() {
  const projects = await getProjects();
  const featured = getFeaturedProject(projects);
  const grid = getGridProjects(projects).slice(0, 2);

  return (
    <SiteShell>
      <Hero
        previewImage={featured.image}
        previewTitle={featured.title}
        previewUrl="/projetos"
      />
      <TrustStrip />
      <FeaturedProject project={featured} />
      <ProjectGrid
        projects={grid}
        title="Mais provas no ar"
        subtitle="Não é mock — são demos reais. Abra, clique, sinta o nível."
      />
      <div className="border-t border-white/10 bg-charcoal px-5 py-10 text-center sm:px-8">
        <Link
          href="/projetos"
          className="font-display text-sm font-semibold tracking-wide text-electric-bright transition hover:text-ice"
        >
          Ver portfólio completo →
        </Link>
      </div>
      <Method />
      <section className="relative overflow-hidden border-t border-white/10 bg-metallic">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 sm:px-8 sm:flex-row sm:items-center sm:justify-between sm:py-24">
          <div className="max-w-xl">
            <p className="font-display text-xs tracking-[0.3em] text-electric-bright uppercase">
              Próximo passo
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl">
              Vamos transformar sua ideia em sistema
            </h2>
            <p className="mt-3 text-ice-muted">
              Me conta o objetivo. Em minutos você já tem conversa aberta no WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton glow />
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 font-display text-sm font-semibold text-ice transition hover:border-electric/50 hover:bg-white/5"
            >
              Usar formulário
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
