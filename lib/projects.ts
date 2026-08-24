export type Project = {
  id: string;
  vercelProjectName: string;
  title: string;
  blurb: string;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
};

/** Curated allowlist — copy and order are always manual (approach A for sales). */
export const PROJECTS_CONFIG: Project[] = [
  {
    id: "akreis-prime",
    vercelProjectName: "akreis-prime",
    title: "AK Reis Prime",
    blurb:
      "E-commerce de luxo: relógios, couro e fragrâncias com curadoria premium e conversão no centro.",
    tags: ["E-commerce", "Luxo", "UI premium"],
    demoUrl: "https://akreis-prime.vercel.app",
    image: "/projects/akreis-prime.png",
    featured: true,
  },
  {
    id: "palicone",
    vercelProjectName: "palicone-demo",
    title: "Palicone",
    blurb:
      "Steak house digital — cardápio, sistema interno e painel admin em uma demo completa.",
    tags: ["Restaurante", "Cardápio", "Admin"],
    demoUrl: "https://palicone-demo.vercel.app",
    image: "/projects/palicone.png",
  },
  {
    id: "veloz",
    vercelProjectName: "veloz",
    title: "Veloz",
    blurb:
      "Loja de acrílicos e taças personalizadas, com catálogo, carrinho e experiência de compra rápida.",
    tags: ["E-commerce", "Catálogo"],
    demoUrl: "https://temp-v4fe.vercel.app",
    githubUrl: "https://github.com/TASS154/temp",
    image: "/projects/veloz.png",
  },
  {
    id: "finance-ai",
    vercelProjectName: "finance-ai",
    title: "Finance AI",
    blurb:
      "Painel financeiro com métricas, categorias e insights gerados por IA — Numera em ação.",
    tags: ["AI", "Finanças", "Dashboard"],
    demoUrl: "https://finance-ai-dun-iota.vercel.app",
    githubUrl: "https://github.com/TASS154/finance-ai",
    image: "/projects/finance-ai.png",
  },
  {
    id: "bot-advisor",
    vercelProjectName: "bot-advisor",
    title: "Bot Advisor",
    blurb:
      "Analista financeiro quantitativo com IA: indicadores, cenário e carteira em tempo real.",
    tags: ["Bot", "AI", "Investimentos"],
    demoUrl: "https://bot-advisor.vercel.app",
    image: "/projects/bot-advisor.png",
  },
];

export function getFeaturedProject(projects: Project[]): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getGridProjects(projects: Project[]): Project[] {
  return projects.filter((p) => !p.featured);
}
