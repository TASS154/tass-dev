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
  /** CSS object-position for screenshots that need framing */
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};

/** Curated allowlist — copy and order are always manual (approach A for sales). */
export const PROJECTS_CONFIG: Project[] = [
  {
    id: "atendia",
    vercelProjectName: "atendia",
    title: "Atendia",
    blurb:
      "Organize no WhatsApp o que hoje fica espalhado: novos clientes, orçamentos, agenda, cobrança e acompanhamento depois da venda — tudo em um só lugar, fácil de usar no dia a dia.",
    tags: ["WhatsApp", "Vendas", "Atendimento"],
    demoUrl: "https://atendia-kappa.vercel.app",
    githubUrl: "https://github.com/TASS154/atendia",
    image: "/projects/atendia.png",
    featured: true,
    imageFit: "cover",
    imagePosition: "left top",
  },
  {
    id: "akreis-prime",
    vercelProjectName: "akreis-prime",
    title: "AK Reis Prime",
    blurb:
      "Loja online de alto padrão para relógios, couro e fragrâncias — com catálogo elegante, conta do cliente e pagamento seguro, pronta para vender com cara de marca premium.",
    tags: ["Loja online", "Luxo", "Pagamentos"],
    demoUrl: "https://akreis-prime.vercel.app",
    githubUrl: "https://github.com/TASS154/AK",
    image: "/projects/akreis-prime.png",
    featured: true,
    imagePosition: "top",
  },
  {
    id: "palicone",
    vercelProjectName: "palicone-demo",
    title: "Palicone",
    blurb:
      "Para restaurante que quer modernizar: cardápio digital para o cliente, tela para a equipe e painel para a gestão — do pedido ao controle interno.",
    tags: ["Restaurante", "Cardápio", "Gestão"],
    demoUrl: "https://palicone-demo.vercel.app",
    githubUrl: "https://github.com/TASS154/palicone-demo",
    image: "/projects/palicone.png",
    imagePosition: "top",
  },
  {
    id: "veloz",
    vercelProjectName: "veloz",
    title: "Veloz",
    blurb:
      "Loja de copos e taças personalizadas: o cliente vê o catálogo, monta o pedido e finaliza pelo WhatsApp — simples para quem compra e prático para quem vende.",
    tags: ["Loja online", "Catálogo", "Pedidos"],
    demoUrl: "https://temp-v4fe.vercel.app",
    githubUrl: "https://github.com/TASS154/temp",
    image: "/projects/veloz.png",
    imagePosition: "top",
  },
  {
    id: "finance-ai",
    vercelProjectName: "finance-ai",
    title: "Finance AI",
    blurb:
      "Painel para enxergar para onde vai o dinheiro: receitas, despesas e um resumo claro do que importa — com sugestões práticas para organizar as finanças.",
    tags: ["Finanças", "Organização", "Insights"],
    demoUrl: "https://finance-ai-dun-iota.vercel.app",
    githubUrl: "https://github.com/TASS154/finance-ai",
    image: "/projects/finance-ai.png",
    imagePosition: "top",
  },
  {
    id: "bot-advisor",
    vercelProjectName: "bot-advisor",
    title: "Bot Advisor",
    blurb:
      "Ajuda a montar uma carteira de investimentos com base no seu perfil e no cenário do mercado — em linguagem clara, sem complicar o que não precisa.",
    tags: ["Investimentos", "Orientação", "Mercado"],
    demoUrl: "https://bot-advisor.vercel.app",
    githubUrl: "https://github.com/TASS154/BOT-ADVISOR",
    image: "/projects/bot-advisor.png",
    imagePosition: "top",
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
