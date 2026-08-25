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
    id: "atendia",
    vercelProjectName: "atendia",
    title: "Atendia",
    blurb:
      "Hub comercial para PMEs no WhatsApp: lead → cliente → orçamento → agenda → pagamento → pós-venda. Demo com tenant Studio Bella.",
    tags: ["WhatsApp", "CRM", "Operação"],
    demoUrl: "https://atendia-kappa.vercel.app",
    githubUrl: "https://github.com/TASS154/atendia",
    image: "/projects/atendia.png",
    featured: true,
  },
  {
    id: "akreis-prime",
    vercelProjectName: "akreis-prime",
    title: "AK Reis Prime",
    blurb:
      "E-commerce premium de luxo (relógios, couro, fragrâncias) com Auth, Firestore, Mercado Pago e checkout completo.",
    tags: ["E-commerce", "Luxo", "Pagamentos"],
    demoUrl: "https://akreis-prime.vercel.app",
    githubUrl: "https://github.com/TASS154/AK",
    image: "/projects/akreis-prime.png",
    featured: true,
  },
  {
    id: "palicone",
    vercelProjectName: "palicone-demo",
    title: "Palicone",
    blurb:
      "Demo completa de steak house: cardápio digital, operação interna e painel admin — do pedido ao backoffice.",
    tags: ["Restaurante", "Cardápio", "Admin"],
    demoUrl: "https://palicone-demo.vercel.app",
    githubUrl: "https://github.com/TASS154/palicone-demo",
    image: "/projects/palicone.png",
  },
  {
    id: "veloz",
    vercelProjectName: "veloz",
    title: "Veloz",
    blurb:
      "Marketplace de copos e acrílicos personalizados: catálogo, carrinho, conta e pedido via WhatsApp + painel admin.",
    tags: ["E-commerce", "Firebase", "WhatsApp"],
    demoUrl: "https://temp-v4fe.vercel.app",
    githubUrl: "https://github.com/TASS154/temp",
    image: "/projects/veloz.png",
  },
  {
    id: "finance-ai",
    vercelProjectName: "finance-ai",
    title: "Finance AI",
    blurb:
      "Numera: painel financeiro com matemática determinística + insights Gemini, quiz de educação e UI multilíngue.",
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
      "Analista quantitativo com IA: perfil do investidor + dados de mercado em tempo real e carteira 3–5 ativos via Gemini.",
    tags: ["Bot", "AI", "Investimentos"],
    demoUrl: "https://bot-advisor.vercel.app",
    githubUrl: "https://github.com/TASS154/BOT-ADVISOR",
    image: "/projects/bot-advisor.png",
  },
];

export function getFeaturedProjects(projects: Project[]): Project[] {
  const featured = projects.filter((p) => p.featured);
  return featured.length ? featured : projects.slice(0, 1);
}

export function getFeaturedProject(projects: Project[]): Project {
  return getFeaturedProjects(projects)[0];
}

export function getGridProjects(projects: Project[]): Project[] {
  return projects.filter((p) => !p.featured);
}
