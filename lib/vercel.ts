import { PROJECTS_CONFIG, type Project } from "./projects";

type VercelProjectResponse = {
  name: string;
  targets?: {
    production?: {
      alias?: string[];
    };
  };
};

/**
 * Optional approach B enrichment: refresh production demo URLs from Vercel API
 * when VERCEL_TOKEN + VERCEL_TEAM_ID are present. Falls back to curated URLs.
 */
export async function getProjects(): Promise<Project[]> {
  const token = process.env.VERCEL_TOKEN;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!token || !teamId) {
    return PROJECTS_CONFIG;
  }

  try {
    const enriched = await Promise.all(
      PROJECTS_CONFIG.map(async (project) => {
        const url = new URL(
          `https://api.vercel.com/v9/projects/${encodeURIComponent(project.vercelProjectName)}`,
        );
        url.searchParams.set("teamId", teamId);

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
          next: { revalidate: 3600 },
        });

        if (!res.ok) return project;

        const data = (await res.json()) as VercelProjectResponse;
        const alias = data.targets?.production?.alias?.[0];
        if (!alias) return project;

        return {
          ...project,
          demoUrl: alias.startsWith("http") ? alias : `https://${alias}`,
        };
      }),
    );

    return enriched;
  } catch {
    return PROJECTS_CONFIG;
  }
}
