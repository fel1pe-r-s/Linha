export const APP_NAME = "Linha";
export const APP_TAGLINE = "12 meses, uma linha, fullstack empregável";
export const PLAN_VERSION = "v1.0";
export const PLAN_HOURS = 365;
export const PLAN_MONTHS = 12;

export const TAGS = {
  tipo: ["tipo/teoria", "tipo/pratico", "tipo/projeto", "tipo/revisao", "tipo/fleeting"] as const,
  status: [
    "status/nao-iniciado",
    "status/em-andamento",
    "status/bloqueado",
    "status/dominado",
  ] as const,
  stack: [
    "stack/go",
    "stack/js",
    "stack/ts",
    "stack/css",
    "stack/html",
    "stack/sql",
    "stack/next",
    "stack/fastify",
    "stack/nest",
    "stack/postgres",
  ] as const,
  camada: [
    "camada/front",
    "camada/back",
    "camada/dados",
    "camada/mobile",
    "camada/design",
  ] as const,
  nivel: [
    "nivel/fundamento",
    "nivel/intermediario",
    "nivel/avancado",
    "nivel/senior",
  ] as const,
  evidencia: ["evidencia/microprojeto", "evidencia/capstone", "evidencia/pr"] as const,
};

export const VAULT_FILES = [
  { slug: "00-indice", file: "00 Indice.md", title: "Índice", hub: true },
  { slug: "00-contrato", file: "00 Contrato.md", title: "Contrato da linha", hub: true },
  { slug: "00-como-usar", file: "00 Como usar.md", title: "Como usar o vault", hub: true },
  { slug: "00-calendario", file: "00 Calendario.md", title: "Calendário de 52 semanas", hub: true },
  { slug: "00-progresso", file: "00 Progresso.md", title: "Progresso", hub: false },
  { slug: "00-caderno", file: "00 Caderno.md", title: "Caderno e daily", hub: false },
  { slug: "00-changelog", file: "00 Changelog.md", title: "Changelog", hub: false },
  { slug: "01-sistema", file: "01 Sistema.md", title: "Fase 0 · Sistema", hub: true },
  { slug: "02-fundamentos", file: "02 Fundamentos.md", title: "Fase 1 · Fundamentos", hub: true },
  { slug: "03-next-design", file: "03 Next e Design.md", title: "Fase 2 · Next e design", hub: true },
  { slug: "04-backend", file: "04 Backend.md", title: "Fase 3 · Fastify e Postgres", hub: true },
  { slug: "05-assinatura", file: "05 Assinatura.md", title: "Fase 4 · Fullstack e assinatura", hub: true },
  { slug: "06-nest-go-mobile", file: "06 Nest Go Mobile.md", title: "Fase 5 · Nest, Go, mobile", hub: true },
  { slug: "07-renda", file: "07 Renda.md", title: "Fase 6 · Renda e portfólio", hub: true },
  { slug: "projeto", file: "projeto.md", title: "Capstone · Vitrine", hub: true },
  { slug: "projetos-micro", file: "projetos-micro.md", title: "Microprojetos", hub: false },
  { slug: "trilha-go", file: "trilha-go.md", title: "Trilha Go", hub: true },
  { slug: "trilha-design", file: "trilha-design.md", title: "Trilha design", hub: true },
  { slug: "fase-2", file: "fase-2.md", title: "Depois do ano", hub: false },
] as const;

export type VaultSlug = (typeof VAULT_FILES)[number]["slug"];
