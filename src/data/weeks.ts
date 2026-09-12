export type SessionKind =
  | "main"
  | "go"
  | "design"
  | "projeto"
  | "caderno"
  | "folga";

export interface Resource {
  label: string;
  url: string;
}

export interface Session {
  id: string;
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  kind: SessionKind;
  title: string;
  minutes: number;
  outcome: string;
  resource?: Resource;
}

export interface Week {
  id: string;
  n: number;
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  phase: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  smart: string;
  capstoneSlice: string;
  pin?: string;
  sessions: Session[];
  rubric?: string[];
  recovery?: boolean;
}

const DAY = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"] as const;
export const DAY_LABEL = DAY;

type DaySpec = {
  kind: SessionKind;
  title: string;
  minutes?: number;
  outcome: string;
  resource?: Resource;
};

function buildWeek(
  n: number,
  month: Week["month"],
  phase: Week["phase"],
  title: string,
  smart: string,
  capstoneSlice: string,
  days: [DaySpec, DaySpec, DaySpec, DaySpec, DaySpec, DaySpec, DaySpec],
  extra?: Partial<Pick<Week, "pin" | "rubric" | "recovery">>,
): Week {
  const id = `S${String(n).padStart(2, "0")}`;
  return {
    id,
    n,
    month,
    phase,
    title,
    smart,
    capstoneSlice,
    ...extra,
    sessions: days.map((d, i) => ({
      id: `${id}D${i + 1}`,
      day: (i + 1) as Session["day"],
      kind: d.kind,
      title: d.title,
      minutes: d.minutes ?? (i === 5 ? 90 : i === 6 ? 45 : 60),
      outcome: d.outcome,
      resource: d.resource,
    })),
  };
}

const MDN_CSS: Resource = {
  label: "MDN · CSS",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};
const MDN_JS: Resource = {
  label: "javascript.info",
  url: "https://javascript.info/",
};
const TS_HB: Resource = {
  label: "TypeScript Handbook",
  url: "https://www.typescriptlang.org/docs/handbook/intro.html",
};
const NEXT: Resource = {
  label: "Next.js Docs",
  url: "https://nextjs.org/docs",
};
const FIGMA: Resource = {
  label: "Figma Learn",
  url: "https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design",
};
const FRAMER: Resource = {
  label: "Framer Motion",
  url: "https://motion.dev/docs",
};
const GSAP: Resource = {
  label: "GSAP Docs",
  url: "https://gsap.com/docs/v3/",
};
const HTTP: Resource = {
  label: "MDN · HTTP",
  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
};
const FASTIFY: Resource = {
  label: "Fastify Docs",
  url: "https://fastify.dev/docs/latest/",
};
const PG: Resource = {
  label: "Postgres Tutorial",
  url: "https://www.postgresql.org/docs/current/tutorial.html",
};
const INDEX: Resource = {
  label: "Use The Index, Luke",
  url: "https://use-the-index-luke.com/",
};
const OWASP: Resource = {
  label: "OWASP Cheat Sheet",
  url: "https://cheatsheetseries.owasp.org/",
};
const NEST: Resource = {
  label: "NestJS Docs",
  url: "https://docs.nestjs.com/",
};
const GO: Resource = {
  label: "A Tour of Go",
  url: "https://go.dev/tour/",
};
const GIN: Resource = {
  label: "Gin Docs",
  url: "https://gin-gonic.com/docs/",
};
const DOCKER: Resource = {
  label: "Docker Get Started",
  url: "https://docs.docker.com/get-started/",
};
const PWA: Resource = {
  label: "web.dev PWA",
  url: "https://web.dev/learn/pwa/",
};
const CAP: Resource = {
  label: "Capacitor Docs",
  url: "https://capacitorjs.com/docs",
};
const GIT: Resource = {
  label: "Pro Git cap. 1–2",
  url: "https://git-scm.com/book/en/v2",
};
const VITEST: Resource = {
  label: "Vitest Docs",
  url: "https://vitest.dev/guide/",
};
const PW: Resource = {
  label: "Playwright Docs",
  url: "https://playwright.dev/docs/intro",
};
const BETTER: Resource = {
  label: "Better Auth",
  url: "https://www.better-auth.com/docs",
};
const STRIPE: Resource = {
  label: "Stripe Checkout",
  url: "https://docs.stripe.com/checkout/quickstart",
};
const WS: Resource = {
  label: "MDN · WebSocket",
  url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
};
const THREE: Resource = {
  label: "Three.js Fundamentals",
  url: "https://threejs.org/manual/#en/fundamentals",
};
const TAILWIND: Resource = {
  label: "Tailwind Docs",
  url: "https://tailwindcss.com/docs",
};
const EFFECTIVE_GO: Resource = {
  label: "Effective Go",
  url: "https://go.dev/doc/effective_go",
};

export const weeks: Week[] = [
  buildWeek(
    1,
    1,
    0,
    "Sistema de estudo",
    "Até domingo o Obsidian abre este vault, o GitHub existe, Node 22 e Git fazem um commit, e o caderno tem a primeira página.",
    "Nome provisório da Vitrine, 5 referências visuais salvas, 1 frase de proposta.",
    [
      {
        kind: "main",
        title: "Ler o contrato e o índice",
        outcome: "Você sabe o que entrou, o que foi cortado, e qual é a regra se atrasar.",
      },
      {
        kind: "main",
        title: "Instalar a linha de ferramentas",
        outcome: "Node 22 LTS, Git, VS Code ou Cursor, e o vault copiado no Obsidian.",
        resource: GIT,
      },
      {
        kind: "main",
        title: "GitHub e primeiro repositório",
        outcome: "Repo `vitrine` privado ou público, README de 5 linhas, primeiro commit.",
        resource: GIT,
      },
      {
        kind: "main",
        title: "Caderno + daily",
        outcome: "Template de caderno duplicado; você escreve a sessão de hoje em papel ou no vault.",
      },
      {
        kind: "design",
        title: "Moodboard da Vitrine",
        outcome: "5 URLs de referências (Linktree, vitrines, motion) coladas em [[projeto]].",
        resource: FIGMA,
      },
      {
        kind: "projeto",
        title: "Frase de produto",
        outcome: "Uma frase: para quem, o que clica, para onde vai (Amazon/ML).",
        minutes: 60,
      },
      {
        kind: "caderno",
        title: "Revisão da semana 1",
        outcome: "Checklist do mês 0: ambiente ok. Se algo falhou, anota o bloqueio, não começa conteúdo novo.",
      },
    ],
    {
      rubric: [
        "Obsidian abre o vault sem pasta errada",
        "`node -v` mostra 22",
        "GitHub tem o repo da Vitrine",
        "Caderno tem 1 página",
      ],
    },
  ),
  buildWeek(
    2,
    1,
    1,
    "CSS que ainda falta",
    "Até domingo você reconstrói um layout de landing em Grid/Flex sem framework, responsivo em 390px e desktop.",
    "Esboço em papel da home: hero, grade de produtos, rodapé.",
    [
      {
        kind: "main",
        title: "Box model, cascade, especificidade",
        outcome: "Você explica por que um estilo não aplica, sem chute.",
        resource: MDN_CSS,
      },
      {
        kind: "main",
        title: "Flex + Grid de verdade",
        outcome: "Uma página com header, hero, grade 1/2/3 colunas, sem lib.",
        resource: MDN_CSS,
      },
      {
        kind: "main",
        title: "Responsivo e fluid type",
        outcome: "clamp() na type, breakpoints só onde o layout quebra, sem overflow em 390px.",
        resource: MDN_CSS,
      },
      {
        kind: "main",
        title: "Tokens CSS crus",
        outcome: "Cores, espaço e type em custom properties; tema não depende de Tailwind ainda.",
      },
      {
        kind: "design",
        title: "Tipo, cor, hierarquia",
        outcome: "Você escolhe 1 família display + 1 body e uma paleta de 4 cores para a Vitrine.",
        resource: FIGMA,
      },
      {
        kind: "projeto",
        title: "Micro · landing vanilla",
        outcome: "HTML+CSS da landing no ar (arquivo local ou GitHub Pages). Sem JS de framework.",
      },
      {
        kind: "caderno",
        title: "Revisão CSS",
        outcome: "3 erros que você cometeu e a regra que evita cada um.",
      },
    ],
  ),
  buildWeek(
    3,
    1,
    1,
    "JS assíncrono e DOM",
    "Até domingo um carrossel ou filtro de produtos funciona em JS vanilla, com estado previsível.",
    "JSON local com 3 produtos (nome, imagem, url de afiliado).",
    [
      {
        kind: "main",
        title: "Valores, funções, módulos",
        outcome: "Um módulo ESM exporta os produtos; o HTML importa e renderiza.",
        resource: MDN_JS,
      },
      {
        kind: "main",
        title: "DOM sem bagunça",
        outcome: "Lista renderizada a partir de dados; clique não duplica listener.",
        resource: MDN_JS,
      },
      {
        kind: "main",
        title: "Event loop, promises, fetch",
        outcome: "Você desenha o que acontece num fetch + then + catch, em ordem.",
        resource: MDN_JS,
      },
      {
        kind: "main",
        title: "async/await e erro",
        outcome: "Fetch de JSON com loading e erro visíveis na UI.",
      },
      {
        kind: "design",
        title: "Motion CSS",
        outcome: "Uma transição e uma @keyframes que não usam top/left (só transform/opacity).",
        resource: MDN_CSS,
      },
      {
        kind: "projeto",
        title: "Micro · grade filtrável",
        outcome: "Busca por nome nos 3 produtos, sem recarregar a página.",
      },
      {
        kind: "caderno",
        title: "Revisão JS",
        outcome: "Você escreve com suas palavras o que é a event loop, em 8 linhas.",
      },
    ],
  ),
  buildWeek(
    4,
    1,
    1,
    "TypeScript entra",
    "Até domingo o micro da landing está tipado, `tsc --noEmit` passa, e o mês 1 fecha no GitHub.",
    "Tipos `Product` e `AffiliateLink` no repo da Vitrine.",
    [
      {
        kind: "main",
        title: "JS → TS sem drama",
        outcome: "tsconfig estrito; um .ts vira .js limpo. Você sabe o que `strict` exige.",
        resource: TS_HB,
      },
      {
        kind: "main",
        title: "Tipos, união, narrowing",
        outcome: "Função que aceita Product | null e não usa `!` para mentir ao compiler.",
        resource: TS_HB,
      },
      {
        kind: "main",
        title: "Tipar o JSON de produtos",
        outcome: "type Product com id, title, imageUrl, affiliateUrl, source.",
      },
      {
        kind: "main",
        title: "Git do dia a dia",
        outcome: "commit pequeno, mensagem em PT ou EN consistente, push.",
        resource: GIT,
      },
      {
        kind: "design",
        title: "Figma: 1 tela da home",
        outcome: "Frame 390 e 1280 da home, com type e cor reais, não lorem cinza.",
        resource: FIGMA,
      },
      {
        kind: "projeto",
        title: "Fechar micro vanilla",
        outcome: "README com screenshot; critério: mobile sem overflow, 3 produtos, filtro.",
      },
      {
        kind: "caderno",
        title: "Marco mês 1",
        outcome: "Rubrica mês 1 marcada. Se falhou, corta profundidade — não empurra Next.",
      },
    ],
    {
      rubric: [
        "Landing vanilla no GitHub",
        "Layout 390px sem scroll horizontal",
        "Product tipado",
        "Figma com 1 tela",
      ],
    },
  ),
  buildWeek(
    5,
    2,
    2,
    "Next.js entra de verdade",
    "Até domingo um app Next (App Router + TS) roda, com layout, uma rota e os 3 produtos renderizados no servidor.",
    "Repo da Vitrine vira Next. A landing vanilla fica como arquivo histórico, não se mistura.",
    [
      {
        kind: "main",
        title: "App Router, pastas, layouts",
        outcome: "Você cria `/` e `/sobre` com o mesmo chrome, sem copiar HTML.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Server vs client components",
        outcome: "Lista de produtos no servidor; um botão `'use client'` isolado.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Imagens e fontes",
        outcome: "next/image e next/font na home, sem layout shift óbvio.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "TS no Next",
        outcome: "Props tipadas; zero `any`.",
        resource: TS_HB,
      },
      {
        kind: "design",
        title: "Tokens no código",
        outcome: "CSS variables do Figma viram globals.css da Vitrine.",
      },
      {
        kind: "projeto",
        title: "Home Next com 3 cards",
        outcome: "Cards leem o array tipado; clique abre o link de afiliado em nova aba.",
      },
      {
        kind: "caderno",
        title: "Revisão Next",
        outcome: "Você escreve a diferença server/client em 6 linhas, sem jargão vazio.",
      },
    ],
  ),
  buildWeek(
    6,
    2,
    2,
    "Figma → código",
    "Até domingo a home do Figma e a home do Next divergem no máximo em 2 decisões conscientes, documentadas.",
    "Espaçamento e type da home iguais ao frame 390.",
    [
      {
        kind: "design",
        title: "Auto-layout e componentes Figma",
        outcome: "Card de produto é componente com variantes (default / hover).",
        resource: FIGMA,
        minutes: 60,
      },
      {
        kind: "main",
        title: "Implementar o card",
        outcome: "Componente ProductCard.tsx fiel ao Figma.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Hierarquia visual",
        outcome: "Título, preço opcional, fonte, CTA: um eixo de leitura, não três destaques.",
      },
      {
        kind: "main",
        title: "Tailwind entra (fase 1)",
        outcome: "Utility no layout; tokens de cor ainda vêm das CSS vars, não de paleta default.",
        resource: TAILWIND,
      },
      {
        kind: "design",
        title: "Espaço e ritmo",
        outcome: "Escala 4/8 aplicada; você não chuta 13px e 27px.",
      },
      {
        kind: "projeto",
        title: "Home fiel em 390 e desktop",
        outcome: "Print do Figma e print do browser lado a lado no README.",
      },
      {
        kind: "caderno",
        title: "O que o Figma ensinou",
        outcome: "3 regras de hierarquia que você vai repetir no resto do ano.",
      },
    ],
  ),
  buildWeek(
    7,
    2,
    2,
    "CSS avançado + Tailwind fase 2",
    "Até domingo você usa Grid, container queries ou scroll-driven CSS em um bloco da home, e Tailwind não apagou seus tokens.",
    "Seção hero com composição mais densa (não só card repetido).",
    [
      {
        kind: "main",
        title: "Seletores e camadas",
        outcome: "@layer e :is/:where usados com intenção; sem !important.",
        resource: MDN_CSS,
      },
      {
        kind: "main",
        title: "Scroll-driven CSS",
        outcome: "Um elemento reage a scroll com animation-timeline, degradê para browsers velhos.",
        resource: MDN_CSS,
      },
      {
        kind: "main",
        title: "Tailwind + CSS vars",
        outcome: "@theme aponta para os tokens da Vitrine. Zero cor mágica no JSX.",
        resource: TAILWIND,
      },
      {
        kind: "main",
        title: "Responsivo sem palpite",
        outcome: "Você justifica cada breakpoint com um print do que quebrava.",
      },
      {
        kind: "design",
        title: "Estados de UI",
        outcome: "Hover, focus visível, disabled, loading desenhados no Figma do card.",
        resource: FIGMA,
      },
      {
        kind: "projeto",
        title: "Hero da Vitrine",
        outcome: "Hero implementado; funciona sem JS de animação ainda.",
      },
      {
        kind: "caderno",
        title: "Revisão visual",
        outcome: "Lista do que ainda parece 'genérico' na home — vira fila da trilha design.",
      },
    ],
  ),
  buildWeek(
    8,
    2,
    2,
    "Capstone shell",
    "Até domingo `/`, `/p/[id]` e um JSON de produtos existem; deploy de preview no ar.",
    "Rotas públicas da vitrine, ainda sem admin e sem banco.",
    [
      {
        kind: "main",
        title: "Rota dinâmica de produto",
        outcome: "Página de produto com imagem, texto, botão 'ver na loja'.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Metadata básica",
        outcome: "title e description por página. SEO profundo é eletiva — não se perde aqui.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Estado do clique",
        outcome: "O botão de afiliado é o único CTA do card. Sem modal inútil.",
      },
      {
        kind: "main",
        title: "Deploy de preview",
        outcome: "URL pública (Vercel). Máquina fraca: o build na nuvem é amigo, não vilão.",
        resource: NEXT,
      },
      {
        kind: "design",
        title: "Página de produto no Figma",
        outcome: "1 frame mobile da página de produto.",
        resource: FIGMA,
      },
      {
        kind: "projeto",
        title: "Shell no ar",
        outcome: "Alguém no celular abre a URL e vê 3 produtos.",
      },
      {
        kind: "caderno",
        title: "Marco mês 2",
        outcome: "O que falta para a home não parecer tutorial: anota 3 itens, máximo.",
      },
    ],
    {
      rubric: [
        "Next no ar com URL",
        "3 produtos + página de detalhe",
        "Figma e código ainda conversam",
        "Zero `any`",
      ],
    },
  ),
  buildWeek(
    9,
    3,
    2,
    "Dados no Next + Go começa",
    "Até domingo os produtos vêm de um módulo único; loading e erro existem; você fez a sessão 1 da Tour of Go.",
    "Fonte de verdade dos produtos ainda é arquivo TS/JSON, não banco.",
    [
      {
        kind: "main",
        title: "fetch, cache, revalidate",
        outcome: "Você explica, com um exemplo, o que o Next cacheia neste app.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "loading.tsx e error.tsx",
        outcome: "Estados de espera e falha visíveis, não tela branca.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Validar dados",
        outcome: "Zod (ou type guard) na borda do JSON. Dado podre não derruba a home.",
      },
      {
        kind: "main",
        title: "Lista vazia e 404",
        outcome: "Produto inexistente → notFound(); lista vazia tem estado vazio real.",
      },
      {
        kind: "go",
        title: "Go G01 · Tour: pacotes e funções",
        outcome: "Você roda o Tour até flow control. Go não rouba o resto da semana.",
        resource: GO,
      },
      {
        kind: "projeto",
        title: "Estados da home",
        outcome: "Loading skeleton simples (CSS), erro, vazio — três telas.",
      },
      {
        kind: "caderno",
        title: "Go + Next na mesma semana",
        outcome: "Se Go gerou ansiedade: anote e continue. É 1h. Não 'compense' no domingo.",
      },
    ],
  ),
  buildWeek(
    10,
    3,
    2,
    "Framer Motion",
    "Até domingo os cards entram com motion de 200–400ms, respeitam reduced-motion, e não usam lib nenhuma além de Motion.",
    "Motion só no que o usuário percebe: lista e CTA, não em tudo.",
    [
      {
        kind: "main",
        title: "Motion no React",
        outcome: "Um card com initial/animate/exit. Sem bounce de tutorial.",
        resource: FRAMER,
      },
      {
        kind: "main",
        title: "Stagger da grade",
        outcome: "Lista aparece em cascata curta; 40–80ms entre itens.",
        resource: FRAMER,
      },
      {
        kind: "main",
        title: "Reduced motion",
        outcome: "prefers-reduced-motion desliga o stagger. Você testa isso.",
      },
      {
        kind: "main",
        title: "Layout animations com cuidado",
        outcome: "Você sabe quando NÃO animar layout (jank). Fica em transform/opacity.",
      },
      {
        kind: "go",
        title: "Go G02 · structs e slices",
        outcome: "Um `Product` em Go, um slice, um range. Só isso.",
        resource: GO,
      },
      {
        kind: "projeto",
        title: "Micro · cards com presença",
        outcome: "Home com entrada dos cards gravada em um take de 10s no celular.",
      },
      {
        kind: "caderno",
        title: "Motion que serve",
        outcome: "1 frase: o que o movimento está dizendo (hierarquia, não enfeite).",
      },
    ],
  ),
  buildWeek(
    11,
    3,
    2,
    "Formulário admin (falso)",
    "Até domingo existe `/admin` protegido só por um segredo local (ainda sem auth real) para editar o JSON da semana.",
    "Admin feio pode. Admin que funciona, melhor. Visual de admin não é a trilha de design.",
    [
      {
        kind: "main",
        title: "Forms em React",
        outcome: "Adicionar produto no array em memória; validação na mão + tipos.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Server Actions ou route handler",
        outcome: "Um POST que grava num JSON local (dev). Você sabe que isso não é produção.",
        resource: NEXT,
      },
      {
        kind: "main",
        title: "Acessibilidade mínima do form",
        outcome: "label ligado ao input, erro associado, foco visível. Eletiva a11y profunda fica fora.",
      },
      {
        kind: "main",
        title: "Não crescer o admin",
        outcome: "CRUD de 3 campos só. Se deu vontade de CMS, corta. É isca de projeto grande.",
      },
      {
        kind: "go",
        title: "Go G03 · erros e JSON",
        outcome: "Marshal/unmarshal de Product. Erro não é panic.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Admin mínimo",
        outcome: "Você adiciona um 4º produto sem editar código.",
      },
      {
        kind: "caderno",
        title: "Checagem TDAH",
        outcome: "O admin tentou virar um SaaS? Se sim, volta ao critério da semana.",
      },
    ],
  ),
  buildWeek(
    12,
    3,
    2,
    "Testes no front e Pin 1",
    "Até domingo 2 testes Vitest passam, 1 smoke Playwright da home passa, e o repo está pinado com README honesto.",
    "Vitrine front v1 pública. Este é o pin 1 do GitHub.",
    [
      {
        kind: "main",
        title: "Vitest no card",
        outcome: "Teste do helper de URL de afiliado e do type guard.",
        resource: VITEST,
      },
      {
        kind: "main",
        title: "Playwright abre a home",
        outcome: "Teste: vê o título e 3 cards. Só isso.",
        resource: PW,
      },
      {
        kind: "main",
        title: "README de portfólio",
        outcome: "Problema, stack, print, URL, o que NÃO está pronto. Tom cru.",
      },
      {
        kind: "main",
        title: "Pin 1",
        outcome: "Repo público, pin no perfil, URL no ar.",
      },
      {
        kind: "go",
        title: "Go G04 · net/http Hello",
        outcome: "Servidor stdlib responde JSON `{\"ok\":true}`.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Fechar v1 front",
        outcome: "Rubrica do pin 1. Se falhou o Playwright, isso bloqueia o pin — não o ego.",
      },
      {
        kind: "caderno",
        title: "Marco mês 3",
        outcome: "Você está empregável em 'front Next júnior'? Lista o que ainda é buraco.",
      },
    ],
    {
      pin: "PIN-1 Vitrine front",
      rubric: [
        "URL pública",
        "README honesto",
        "Vitest + Playwright verdes",
        "Mobile 390 ok",
        "Pin no GitHub",
      ],
    },
  ),
  buildWeek(
    13,
    4,
    2,
    "GSAP entra",
    "Até domingo uma seção da home tem ScrollTrigger (pin ou fade) estável em mobile.",
    "Uma seção, não o site inteiro em GSAP.",
    [
      {
        kind: "main",
        title: "GSAP core",
        outcome: "tween de um elemento. Sem ScrollTrigger ainda.",
        resource: GSAP,
      },
      {
        kind: "main",
        title: "ScrollTrigger",
        outcome: "Uma seção pina ou revela no scroll. Você mata o trigger no unmount.",
        resource: GSAP,
      },
      {
        kind: "main",
        title: "Mobile 60fps",
        outcome: "will-change só se precisar; nada de animate de left/top/box-shadow.",
      },
      {
        kind: "main",
        title: "Desligar se reduced-motion",
        outcome: "GSAP respeita a mesma regra do Framer.",
      },
      {
        kind: "go",
        title: "Go G05 · handlers e roteamento manual",
        outcome: "Dois paths na stdlib: `/health` e `/products`.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Micro · seção GSAP",
        outcome: "Vídeo de 8s do scroll no Android.",
      },
      {
        kind: "caderno",
        title: "GSAP vs Framer",
        outcome: "Você escreve quando usa cada um neste projeto. Uma tabela de 4 linhas.",
      },
    ],
  ),
  buildWeek(
    14,
    4,
    2,
    "Páginas extras da vitrine",
    "Até domingo existem `/` `/p/[id]` `/sobre` (quem é você, disclaimer de afiliado).",
    "Disclaimer legal simples: links de afiliado, você pode ganhar comissão.",
    [
      {
        kind: "main",
        title: "Sobre e disclaimer",
        outcome: "Texto verdadeiro, curto, em português. Sem lorem.",
      },
      {
        kind: "main",
        title: "Navegação",
        outcome: "Header com 3 links, estado ativo, tap 44px.",
      },
      {
        kind: "main",
        title: "Performance barata",
        outcome: "Imagens no tamanho certo; Lighthouse só como foto, não como religião (CWV é eletiva).",
      },
      {
        kind: "main",
        title: "Refino visual 1",
        outcome: "Uma hora só em tipo e espaço. Sem feature nova.",
      },
      {
        kind: "go",
        title: "Go G06 · testes table-driven",
        outcome: "Um `_test.go` com 3 casos. `go test` verde.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Vitrine navegável",
        outcome: "Fluxo: home → produto → loja oficial.",
      },
      {
        kind: "caderno",
        title: "Copy",
        outcome: "Releia o sobre em voz alta. Corte 30% das palavras.",
      },
    ],
  ),
  buildWeek(
    15,
    4,
    2,
    "Eletiva curta ou folga de profundidade",
    "Até domingo você ou fecha um buraco da rubrica do pin 1, ou faz UMA eletiva (a11y ou SEO OG). Não as duas.",
    "Capstone só recebe correção de bug, zero feature.",
    [
      {
        kind: "main",
        title: "Buraco da rubrica",
        outcome: "O item vermelho do pin 1 some, ou você declara corte consciente.",
      },
      {
        kind: "main",
        title: "Eletiva A · a11y do header",
        outcome: "Nav com teclado, aria-current, contraste AA nos textos.",
      },
      {
        kind: "main",
        title: "Eletiva B · OG da home",
        outcome: "Uma imagem OG 1200×630 e metadata. Só se A não foi escolhida.",
      },
      {
        kind: "main",
        title: "Hiperfoco guiado",
        outcome: "Se hiperfoco vier: só trilha design D-buffer, não um SaaS novo.",
      },
      {
        kind: "go",
        title: "Go G07 · módulos e go.mod",
        outcome: "Módulo com nome, `go run .` na API hello.",
        resource: GO,
      },
      {
        kind: "projeto",
        title: "Congelar front",
        outcome: "Tag git `front-v1`. Back começa no mês 5 em cima disso.",
      },
      {
        kind: "caderno",
        title: "Marco mês 4",
        outcome: "Front congelado. Lista do que o back precisa (produtos, cliques, admin).",
      },
    ],
    {
      rubric: [
        "Tag front-v1",
        "Pin 1 ainda verdadeiro",
        "Lista de contratos da API escrita em [[projeto]]",
      ],
    },
  ),
  buildWeek(
    16,
    4,
    2,
    "Recuperação 1",
    "Semana de folga estruturada: caderno, 2 sessões leves, hiperfoco opcional na trilha design. Sem tópico novo obrigatório.",
    "Nada no capstone, a menos que esteja quebrado em produção.",
    [
      {
        kind: "folga",
        title: "Ler o caderno do trimestre",
        outcome: "Você relê as páginas e marca 3 padrões de travamento.",
        minutes: 45,
      },
      {
        kind: "folga",
        title: "Manutenção do ambiente",
        outcome: "Update do Node só se estiver quebrado. Senão, descansa.",
        minutes: 30,
      },
      {
        kind: "design",
        title: "Buffer design",
        outcome: "Moodboard novo OU nada. Proibido começar lib nova.",
        minutes: 60,
      },
      {
        kind: "folga",
        title: "Caminhar / fora da tela",
        outcome: "Sessão válida. TDAH não é preguiça. Está no plano.",
        minutes: 45,
      },
      {
        kind: "go",
        title: "Go G08 · revisão Tour",
        outcome: "Revisar notas G01–G07. Sem capítulo novo se a cabeça pesou.",
        resource: GO,
      },
      {
        kind: "projeto",
        title: "Opcional: bugs só",
        outcome: "Se a URL pública quebrou, conserta. Senão, semana sem commit.",
        minutes: 45,
      },
      {
        kind: "caderno",
        title: "Reset",
        outcome: "Frase: o que o mês 5 vai exigir (HTTP). Sem planejamento de 12 features.",
      },
    ],
    { recovery: true },
  ),
  buildWeek(
    17,
    5,
    3,
    "HTTP cru",
    "Até domingo você explica request/response, headers, cookies, CORS e status, e sobe um servidor Node de 40 linhas.",
    "Contrato da API da Vitrine escrito: `GET /products`, `POST /clicks`.",
    [
      {
        kind: "main",
        title: "HTTP como texto",
        outcome: "Você lê um request cru. Sabe o que é header vs body.",
        resource: HTTP,
      },
      {
        kind: "main",
        title: "Status, cache, cookies",
        outcome: "Diferença 401/403/404/409; cookie vs localStorage para sessão.",
        resource: HTTP,
      },
      {
        kind: "main",
        title: "CORS e TLS na prática",
        outcome: "Por que o browser bloqueia o Next → API. Você reproduz o erro e conserta.",
        resource: HTTP,
      },
      {
        kind: "main",
        title: "Micro · http.Server",
        outcome: "Node stdlib, duas rotas, JSON, sem Express ainda.",
      },
      {
        kind: "go",
        title: "Go G09 · context.Context",
        outcome: "Timeout em handler. Você cancela um fetch lento.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Contrato OpenAPI de 1 página",
        outcome: "Tabela método/path/body/resposta em [[projeto]].",
      },
      {
        kind: "caderno",
        title: "HTTP sem mistério",
        outcome: "Glossário de 10 termos nas suas palavras.",
      },
    ],
  ),
  buildWeek(
    18,
    5,
    3,
    "Express mini, depois Fastify",
    "Até domingo o mini Express existe (legado) e o mesmo hello está em Fastify com schema.",
    "A API da Vitrine nasce em Fastify, não em Express.",
    [
      {
        kind: "main",
        title: "Express em 1 hora",
        outcome: "CRUD in-memory de produtos. Objetivo: reconhecer código legado, não adotar.",
      },
      {
        kind: "main",
        title: "Fastify: plugin e encapsulamento",
        outcome: "Dois plugins, prefixos, você não usa Express no repo novo.",
        resource: FASTIFY,
      },
      {
        kind: "main",
        title: "JSON Schema nas rotas",
        outcome: "POST inválido vira 400 sem if-else de 40 linhas.",
        resource: FASTIFY,
      },
      {
        kind: "main",
        title: "TS no Fastify",
        outcome: "Tipos do schema inferidos ou declarados. Zero any.",
      },
      {
        kind: "go",
        title: "Go G10 · Gin hello",
        outcome: "Gin sobe `/health`. Gin é o micro-framework da trilha (mais usado em empresa).",
        resource: GIN,
      },
      {
        kind: "projeto",
        title: "API hello da Vitrine",
        outcome: "`GET /products` devolve o JSON atual, ainda em memória.",
      },
      {
        kind: "caderno",
        title: "Express vs Fastify",
        outcome: "4 linhas: por que Fastify é o canônico deste vault.",
      },
    ],
  ),
  buildWeek(
    19,
    5,
    3,
    "Fastify de verdade",
    "Até domingo há rotas de products e clicks, logs, e um teste de rota.",
    "Click ainda não persiste — conta em memória e já devolve 302 para a loja.",
    [
      {
        kind: "main",
        title: "Injeção e config",
        outcome: "PORT, CORS origin, NODE_ENV via env. Sem .env commitado com segredo.",
        resource: FASTIFY,
      },
      {
        kind: "main",
        title: "Rota de click-out",
        outcome: "`POST /clicks` ou `GET /out/:id` registra e redireciona.",
      },
      {
        kind: "main",
        title: "Teste Fastify",
        outcome: "inject() na rota /health e /products. Verde.",
        resource: FASTIFY,
      },
      {
        kind: "main",
        title: "Erro padrão",
        outcome: "Formato `{ error, message }` consistente. 500 não vaza stack no browser.",
      },
      {
        kind: "go",
        title: "Go G11 · JSON API Gin",
        outcome: "GET /products em Go com slice hardcoded. Espelho didático, não produção.",
        resource: GIN,
      },
      {
        kind: "projeto",
        title: "Next consome a API",
        outcome: "Home busca Fastify em dev. CORS ok.",
      },
      {
        kind: "caderno",
        title: "Dois processos",
        outcome: "Você anota como sobe Next + Fastify na máquina fraca. Bun só se não brigar.",
      },
    ],
  ),
  buildWeek(
    20,
    5,
    3,
    "Postgres entra (sem ORM)",
    "Até domingo um Postgres (Neon gratuito ou Docker) tem a tabela products; o Fastify lê dela.",
    "SQL cru. Nenhuma ORM. Neon se a RAM não aguentar Docker.",
    [
      {
        kind: "main",
        title: "O que é um banco relacional",
        outcome: "Tabela, linha, PK, FK — com o modelo da Vitrine no papel.",
        resource: PG,
      },
      {
        kind: "main",
        title: "Subir Postgres",
        outcome: "Neon connected OU docker compose postgres. Você escolhe o que a máquina aguenta.",
        resource: DOCKER,
      },
      {
        kind: "main",
        title: "psql e o primeiro SELECT",
        outcome: "Você cria a tabela na mão e insere 3 produtos.",
        resource: PG,
      },
      {
        kind: "main",
        title: "node-pg no Fastify",
        outcome: "GET /products vem do banco. SQL escrito por você.",
      },
      {
        kind: "go",
        title: "Go G12 · database/sql overview",
        outcome: "Ler a doc. Ainda não conecta. Só mapa mental.",
        resource: { label: "database/sql", url: "https://pkg.go.dev/database/sql" },
      },
      {
        kind: "projeto",
        title: "Home lê o banco",
        outcome: "Matar o JSON hardcoded da home. Seed SQL no repo.",
      },
      {
        kind: "caderno",
        title: "Marco mês 5",
        outcome: "API + banco + front. Diagrama de 3 caixas no Drawing.",
      },
    ],
    {
      rubric: [
        "Postgres com products",
        "Fastify lê SQL cru",
        "Next ainda funciona",
        "Diagrama no vault",
      ],
    },
  ),
  buildWeek(
    21,
    6,
    3,
    "SQL de verdade",
    "Até domingo você escreve SELECT com JOIN, WHERE, ORDER, LIMIT e explica um EXPLAIN simples.",
    "Tabela clicks. Modelo: product 1—N clicks.",
    [
      {
        kind: "main",
        title: "SELECT, JOIN, agregação",
        outcome: "Query: produtos mais clicados. Sem ORM.",
        resource: PG,
      },
      {
        kind: "main",
        title: "Índices e EXPLAIN",
        outcome: "Índice em clicks.product_id. Você vê Seq Scan vs Index Scan.",
        resource: INDEX,
      },
      {
        kind: "main",
        title: "Tipos e constraints",
        outcome: "NOT NULL, UNIQUE na URL de afiliado, CHECK no source (amazon|ml|outro).",
        resource: PG,
      },
      {
        kind: "main",
        title: "Transação",
        outcome: "Inserir click + (futuro) não perder contagem. BEGIN/COMMIT.",
      },
      {
        kind: "go",
        title: "Go G13 · pq ou pgx ping",
        outcome: "Go faz ping no mesmo Postgres. SELECT 1.",
        resource: GIN,
      },
      {
        kind: "projeto",
        title: "Seed + clicks table",
        outcome: "schema.sql e seed.sql versionados.",
      },
      {
        kind: "caderno",
        title: "SQL no caderno",
        outcome: "As 5 queries da Vitrine escritas à mão, uma vez.",
      },
    ],
  ),
  buildWeek(
    22,
    6,
    3,
    "Migrations",
    "Até domingo o schema sobe de arquivo, não de memória. Um colega (você no futuro) recria o banco do zero.",
    "Ferramenta simples (node-pg-migrate, dbmate, ou SQL numerado). Sem Prisma.",
    [
      {
        kind: "main",
        title: "Por que migration",
        outcome: "Você recria o banco do zero com um comando.",
      },
      {
        kind: "main",
        title: "0001 products, 0002 clicks",
        outcome: "Dois arquivos SQL. Up funciona.",
      },
      {
        kind: "main",
        title: "Down opcional",
        outcome: "Se a ferramenta tem down, um down não mata produção de mentira — só local.",
      },
      {
        kind: "main",
        title: "Dados de seed",
        outcome: "Seed separado de migration. 5 produtos reais que você promoveria.",
      },
      {
        kind: "go",
        title: "Go G14 · golang-migrate ou SQL files",
        outcome: "Você vê como o mundo Go versiona schema. Não precisa adotar agora.",
      },
      {
        kind: "projeto",
        title: "README de banco",
        outcome: "Como subir, migrar, seedar — 8 linhas.",
      },
      {
        kind: "caderno",
        title: "Disciplina de schema",
        outcome: "Regra: ninguém altera tabela 'no feeling' em produção. Nem você.",
      },
    ],
  ),
  buildWeek(
    23,
    6,
    3,
    "CRUD SQL no Fastify",
    "Até domingo admin fala com o banco: criar, listar, editar, desativar produto (sem DELETE físico).",
    "soft-delete: `active boolean`.",
    [
      {
        kind: "main",
        title: "INSERT/UPDATE RETURNING",
        outcome: "SQL cru, parâmetros $1 $2, nunca interpolar string.",
      },
      {
        kind: "main",
        title: "Listagem paginada",
        outcome: "LIMIT/OFFSET ou keyset simples. 20 itens.",
      },
      {
        kind: "main",
        title: "SQL injection na prática",
        outcome: "Você tenta injetar e vê o parâmetro barrar. Lê o cheat OWASP.",
        resource: OWASP,
      },
      {
        kind: "main",
        title: "Testes de repositório",
        outcome: "Um teste contra o banco de dev (ou transação rollback).",
      },
      {
        kind: "go",
        title: "Go G15 · SELECT products em Go",
        outcome: "Mesma tabela, outro binário. Didático.",
      },
      {
        kind: "projeto",
        title: "Admin persiste",
        outcome: "Reiniciar o Fastify não apaga produtos.",
      },
      {
        kind: "caderno",
        title: "Mapa SQL",
        outcome: "Cada endpoint → query. Tabela no caderno.",
      },
    ],
  ),
  buildWeek(
    24,
    6,
    3,
    "MySQL comparativo + fechar dados",
    "Até domingo você leu o caso de índices/escala (Shopify/MySQL) e escreveu 1 página: o que mudaria se a Vitrine fosse MySQL.",
    "Nenhuma migração para MySQL. Só cérebro.",
    [
      {
        kind: "main",
        title: "Postgres vs MySQL (cru)",
        outcome: "Tipos, JSON, sequences vs autoincrement, LIMIT. 1h de leitura focada.",
        resource: INDEX,
      },
      {
        kind: "main",
        title: "O que índice não resolve",
        outcome: "Você escreve 5 linhas sobre por que cache (fase 2) não substitui schema ruim.",
      },
      {
        kind: "main",
        title: "Isolation em 30 min",
        outcome: "Read committed vs repeatable read: exemplo de click duplicado.",
        resource: PG,
      },
      {
        kind: "main",
        title: "Revisão das queries da Vitrine",
        outcome: "EXPLAIN nas 3 queries quentes. Índice que falta, se faltar.",
      },
      {
        kind: "go",
        title: "Go G16 · erros de scan",
        outcome: "sql.NullString, tratar 0 rows. Sem panic.",
      },
      {
        kind: "projeto",
        title: "Nota comparativa",
        outcome: "Arquivo no vault: `fleeting` MySQL, 1 página, linkada no contrato.",
      },
      {
        kind: "caderno",
        title: "Marco mês 6",
        outcome: "Dados na linha. Auth é o próximo risco, não mais features de catálogo.",
      },
    ],
    {
      rubric: [
        "schema.sql reproduzível",
        "CRUD SQL sem interpolação",
        "EXPLAIN de 1 query quente",
        "Nota MySQL escrita",
      ],
    },
  ),
  buildWeek(
    25,
    7,
    3,
    "Auth de verdade",
    "Até domingo o admin exige login. Cookie httpOnly. Sem JWT no localStorage.",
    "Um usuário: você. Sem 'social login' neste mês.",
    [
      {
        kind: "main",
        title: "Sessão vs JWT",
        outcome: "Você escolhe cookie de sessão (Better Auth ou Fastify session+JWT em cookie).",
        resource: BETTER,
      },
      {
        kind: "main",
        title: "Register/login/logout",
        outcome: "Hash de senha (scrypt/argon/bcrypt). Rate limit burro no login.",
      },
      {
        kind: "main",
        title: "Proteger rotas",
        outcome: "POST de produto sem cookie = 401. O Next admin também.",
      },
      {
        kind: "main",
        title: "CSRF e cookie flags",
        outcome: "SameSite, Secure, HttpOnly. Você explica cada flag.",
        resource: OWASP,
      },
      {
        kind: "go",
        title: "Go G17 · middleware de auth conceitual",
        outcome: "Não implementa OAuth. Só: função que recusa sem header.",
      },
      {
        kind: "projeto",
        title: "Admin trancado",
        outcome: "Você só entra com senha. Logout funciona.",
      },
      {
        kind: "caderno",
        title: "Ameaça",
        outcome: "3 jeitos de alguém roubar seu admin — e o que já bloqueia.",
      },
    ],
  ),
  buildWeek(
    26,
    7,
    3,
    "OWASP na API",
    "Até domingo você percorre um checklist curto e corrige o que a Vitrine tem de buraco óbvio.",
    "Headers de segurança, validação, limites.",
    [
      {
        kind: "main",
        title: "XSS",
        outcome: "Nada de HTML de produto sem escape. React já ajuda — você não usa dangerouslySetInnerHTML.",
        resource: OWASP,
      },
      {
        kind: "main",
        title: "CSRF, clickjacking, headers",
        outcome: "helmet (ou headers manuais): nosniff, frame deny, HSTS só em prod.",
      },
      {
        kind: "main",
        title: "Mass assignment e IDOR",
        outcome: "Admin não aceita `role=admin` no body. IDs UUID ou serial internos.",
      },
      {
        kind: "main",
        title: "Rate limit",
        outcome: "click-out e login limitados. @fastify/rate-limit.",
      },
      {
        kind: "go",
        title: "Go G18 · revisão metade da trilha",
        outcome: "Relê G01–G17. Marca 3 buracos. Sem feature Go nova.",
      },
      {
        kind: "projeto",
        title: "Checklist colado no README",
        outcome: "Seção Segurança com o que foi feito. Cru, não marketing.",
      },
      {
        kind: "caderno",
        title: "Buracos que restam",
        outcome: "O que fase 2 ainda precisa (WAF, 2FA). Não faz agora.",
      },
    ],
  ),
  buildWeek(
    27,
    7,
    3,
    "Upload de imagem",
    "Até domingo o produto tem imagem: upload autenticado ou URL da plataforma, com limite de tamanho.",
    "CDN cara não entra. Cloudinary free, S3-compat, ou storage do host. Máquina fraca: não processe 20MB local.",
    [
      {
        kind: "main",
        title: "Multipart e limites",
        outcome: "MIME allowlist, 2MB max, nome aleatório. Sem path traversal.",
      },
      {
        kind: "main",
        title: "Guardar URL, não o binário no Git",
        outcome: "Coluna image_url. Arquivos fora do git.",
      },
      {
        kind: "main",
        title: "Imagem da plataforma",
        outcome: "Campo opcional: colar URL da Amazon/ML se a API não estiver acessível.",
      },
      {
        kind: "main",
        title: "next/image remoto",
        outcome: "remotePatterns configurado. Sem quebrar o build.",
        resource: NEXT,
      },
      {
        kind: "go",
        title: "Go G19 · io.Reader",
        outcome: "Ler um arquivo e copiar. Mental model de streams, 1h.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Card com foto real",
        outcome: "Os 5 produtos têm imagem de verdade, não placeholder cinza.",
      },
      {
        kind: "caderno",
        title: "API das plataformas",
        outcome: "Amazon/ML: o que você conseguiu. Se zero acesso, o plano de URL colada vale.",
      },
    ],
  ),
  buildWeek(
    28,
    7,
    3,
    "Pin 2 · API + admin",
    "Até domingo o backend está no ar (Railway/Fly/Render — o mais simples), o admin autentica, o click-out funciona.",
    "Este é o pin 2. Pode ser o mesmo repo (monorepo leve) ou `vitrine-api`.",
    [
      {
        kind: "main",
        title: "Subir a API",
        outcome: "URL pública da API. Postgres hospedado (Neon).",
      },
      {
        kind: "main",
        title: "Next aponta para prod API",
        outcome: "env pública só com URL. Segredo nunca no client.",
      },
      {
        kind: "main",
        title: "Click-out em produção",
        outcome: "Um clique seu aparece na tabela clicks.",
      },
      {
        kind: "main",
        title: "README pin 2",
        outcome: "Como rodar, como migrar, print do admin (sem senha).",
      },
      {
        kind: "go",
        title: "Go G20 · pausa consciente",
        outcome: "Ler Gin que você já fez. Sem capítulo novo: semana de pin.",
      },
      {
        kind: "projeto",
        title: "Pin 2 no perfil",
        outcome: "Evidência: API viva + admin + SQL cru.",
      },
      {
        kind: "caderno",
        title: "Marco mês 7",
        outcome: "Fullstack JS da Vitrine existe. Pagamento e motion pesada são o próximo corte de risco.",
      },
    ],
    {
      pin: "PIN-2 API + admin",
      rubric: [
        "API pública",
        "Login no admin",
        "Click grava no Postgres",
        "Imagens reais",
        "README de segurança",
      ],
    },
  ),
  buildWeek(
    29,
    8,
    4,
    "Pagamentos (lab, não a vitrine)",
    "Até domingo um repo separado cobra 1 produto de teste (Stripe test mode) e mostra um PIX copiável.",
    "A vitrine de afiliado NÃO cobra o visitante. Este lab é o pin-opcional de SaaS.",
    [
      {
        kind: "main",
        title: "Por que lab separado",
        outcome: "Você escreve no README: afiliado ≠ checkout. Misturar é projeto grande demais.",
      },
      {
        kind: "main",
        title: "Stripe Checkout test",
        outcome: "1 produto, webhook de `paid`, página de obrigado.",
        resource: STRIPE,
      },
      {
        kind: "main",
        title: "PIX",
        outcome: "Copia e cola ou Mercado Pago test. O mínimo que um cliente BR pergunta.",
      },
      {
        kind: "main",
        title: "Idempotência do webhook",
        outcome: "O mesmo evento duas vezes não cria 2 pedidos.",
      },
      {
        kind: "go",
        title: "Go G21 · goroutine hello",
        outcome: "10 goroutines, waitgroup. Sem channel ainda.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Micro · checkout-1",
        outcome: "Repo `checkout-1` público. Não grudar na Vitrine.",
      },
      {
        kind: "caderno",
        title: "Pagamento no discurso",
        outcome: "Como você conta isso numa vaga: 'lab de checkout, vitrine é afiliado'.",
      },
    ],
  ),
  buildWeek(
    30,
    8,
    4,
    "WebSocket",
    "Até domingo o admin vê cliques ao vivo (ou um feed ping). 1 conexão, 1 canal.",
    "Feature da Vitrine: tosta/linha nova quando alguém clica.",
    [
      {
        kind: "main",
        title: "WS vs HTTP",
        outcome: "Você desenha o handshake. Sem Socket.IO se Fastify websocket plugin der conta.",
        resource: WS,
      },
      {
        kind: "main",
        title: "Servidor WS",
        outcome: "Broadcast de `{productId, at}` para o admin.",
      },
      {
        kind: "main",
        title: "Cliente no admin",
        outcome: "Lista viva. Reconnect simples.",
      },
      {
        kind: "main",
        title: "Não escalar cedo",
        outcome: "Sem Redis pub/sub (fase 2). Um processo.",
      },
      {
        kind: "go",
        title: "Go G22 · channels",
        outcome: "Ping-pong entre duas goroutines. Select com timeout.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "Feed de cliques",
        outcome: "Você clica no mobile e vê no admin no desktop.",
      },
      {
        kind: "caderno",
        title: "Tempo real",
        outcome: "1 parágrafo: o que quebra se o servidor cair (cliques HTTP ainda funcionam).",
      },
    ],
  ),
  buildWeek(
    31,
    8,
    4,
    "Pipeline de scroll-video",
    "Até domingo você tem um clip de 3–6s (gerado por IA se quiser) convertível em sequência e um proto no browser.",
    "Ainda não precisa estar na home. Lab na trilha design.",
    [
      {
        kind: "design",
        title: "O que é o pipeline caro",
        outcome: "Vídeo → frames/spritesheet/canvas. Você escolhe UM método e escreve por quê.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Scroll controla o frame",
        outcome: "Proto: scroll mapeia para frame. 390px não pode morrer.",
      },
      {
        kind: "main",
        title: "Peso",
        outcome: "Orçamento: quantos KB. Se passou, menos frames, mais compressão.",
      },
      {
        kind: "main",
        title: "Fallback",
        outcome: "Mobile low-end: imagem estática. Reduced-motion: imagem.",
      },
      {
        kind: "go",
        title: "Go G23 · worker pool simples",
        outcome: "N workers, jobs de um channel, resultados no outro.",
      },
      {
        kind: "projeto",
        title: "Micro · scroll-video proto",
        outcome: "Repo ou pasta `/labs/scroll-video`. 6s.",
      },
      {
        kind: "caderno",
        title: "Material de IA",
        outcome: "De onde veio o clip, prompt, licença. Você não finge que filmou.",
      },
    ],
  ),
  buildWeek(
    32,
    8,
    4,
    "Capstone: stats + proto na home",
    "Até domingo o admin tem contagem por produto e o proto de scroll-video cabe no hero (ou em `/studio`).",
    "Se o hero ficar pesado, `/studio` é a decisão certa. Anote.",
    [
      {
        kind: "main",
        title: "Query de stats",
        outcome: "COUNT de clicks por produto, últimos 7 dias. SQL.",
      },
      {
        kind: "main",
        title: "Tela admin de stats",
        outcome: "Tabela, não dashboard com 8 gráficos. Recharts só se couber em 1h.",
      },
      {
        kind: "design",
        title: "Hero ou /studio",
        outcome: "Decisão de produto: o scroll-video vive onde o 60fps sobrevive.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Integrar ou isolar",
        outcome: "PR pequeno. Se quebrar a home, reverte. Pin 1 não morre.",
      },
      {
        kind: "go",
        title: "Go G24 · context + worker",
        outcome: "Cancelar o pool. Teste de não vazar goroutine (intuição, não pprof).",
      },
      {
        kind: "projeto",
        title: "Stats reais",
        outcome: "Você gera 20 cliques e a tabela não mente.",
      },
      {
        kind: "caderno",
        title: "Marco mês 8",
        outcome: "Pagamento (lab), WS, proto motion. Mês 9 é a assinatura visual.",
      },
    ],
    {
      rubric: [
        "Checkout-1 no GitHub",
        "WS de clicks",
        "Proto scroll-video",
        "Stats SQL",
      ],
    },
  ),
  buildWeek(
    33,
    9,
    4,
    "Scroll-video de produção",
    "Até domingo a peça de motion está no ar em URL própria ou `/studio`, 390px usável, fallback ok.",
    "Este trabalho vira o pin 3 se o resto do mês fechar.",
    [
      {
        kind: "design",
        title: "Direção",
        outcome: "1 ideia: o que o scroll conta. Sem isso é demo de tecnologia.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Implementação final",
        outcome: "Pipeline escolhido na S31, agora polido. GSAP se ajudar o scrub.",
        resource: GSAP,
      },
      {
        kind: "main",
        title: "Android real",
        outcome: "Teste no seu telefone. Se jank: corta frames, não 'otimiza depois'.",
      },
      {
        kind: "main",
        title: "Acessível o bastante",
        outcome: "Pause, fallback, não prende scroll de quem não pediu.",
      },
      {
        kind: "go",
        title: "Go G25 · HTTP timeouts",
        outcome: "Server com ReadHeaderTimeout. Hábito de produção.",
      },
      {
        kind: "projeto",
        title: "Peça no ar",
        outcome: "URL. Take de 15s no celular.",
      },
      {
        kind: "caderno",
        title: "O que essa peça prova",
        outcome: "Frase para o README: diferencial de carreira, não tutorial GSAP.",
      },
    ],
  ),
  buildWeek(
    34,
    9,
    4,
    "Three.js lab (contido)",
    "Até domingo uma cena mínima (1 objeto, 1 luz, 1 câmera) roda. Não entra na home se não servir o produto.",
    "Lab. Se hiperfoco, para no domingo.",
    [
      {
        kind: "main",
        title: "Cena, câmera, renderer",
        outcome: "Canvas 1 objeto. Sem modelo de 40MB.",
        resource: THREE,
      },
      {
        kind: "main",
        title: "Controle de dispose",
        outcome: "Unmount não vaza. Você prova recarregando 10 vezes.",
      },
      {
        kind: "main",
        title: "WebGL: o que é",
        outcome: "1 página no caderno: GPU, shader, por que Three existe. Sem GLSL ainda.",
      },
      {
        kind: "design",
        title: "Serve à Vitrine?",
        outcome: "Sim ou não. Se não, o lab fica em `/labs/three` e pronto.",
        minutes: 45,
      },
      {
        kind: "go",
        title: "Go G26 · embedding e io/fs",
        outcome: "embed de um JSON de products. Binário único.",
      },
      {
        kind: "projeto",
        title: "Micro · objeto",
        outcome: "README de 8 linhas. Não é o pin.",
      },
      {
        kind: "caderno",
        title: "Corte honesto",
        outcome: "Three não é senior. É alfabetização. Fase 2 se quiser WebGL de verdade.",
      },
    ],
  ),
  buildWeek(
    35,
    9,
    4,
    "Home cinematográfica",
    "Até domingo a home pública mistura hierarquia, motion e a peça de scroll sem parecer template.",
    "Refino. Proibido feature de backend nesta semana.",
    [
      {
        kind: "design",
        title: "Direção da home v2",
        outcome: "Figma atualizado. 390 primeiro.",
        resource: FIGMA,
        minutes: 60,
      },
      {
        kind: "main",
        title: "Implementar home v2",
        outcome: "Tipo, espaço, hero, grade. GSAP/Framer só onde já existia critério.",
      },
      {
        kind: "main",
        title: "Copy",
        outcome: "Títulos verdadeiros. Disclaimer visível. CTA único por bloco.",
      },
      {
        kind: "main",
        title: "Passada de bugs visuais",
        outcome: "Overflow, foco, hover caro demais — corta.",
      },
      {
        kind: "go",
        title: "Go G27 · gin + sql um GET",
        outcome: "Reconecta o ping da G15. Rota GET /products no Gin contra o mesmo banco.",
        resource: GIN,
      },
      {
        kind: "projeto",
        title: "Home v2 no ar",
        outcome: "Substitui a v1. Tag `home-v2`.",
      },
      {
        kind: "caderno",
        title: "Olhar de estúdio",
        outcome: "Peça para alguém leigo abrir. Anote a primeira frase dela.",
      },
    ],
  ),
  buildWeek(
    36,
    9,
    4,
    "Pin 3 · assinatura + Vitrine v1",
    "Até domingo o GitHub tem o pin 3 (peça de motion ou a Vitrine inteira se a home carregar a assinatura) e um case study.",
    "Capstone v1: pública, com produtos reais, click-out, admin, stats.",
    [
      {
        kind: "main",
        title: "Case study",
        outcome: "README: problema, restrições, stack, prints, URL, o que cortou.",
      },
      {
        kind: "main",
        title: "Tag v1.0 da Vitrine",
        outcome: "Git tag. O que entrar depois é v1.1, não 'quase pronto'.",
      },
      {
        kind: "main",
        title: "Pin 3",
        outcome: "Perfil com 3 pins se o checkout-1 merecer, ou 2 + motion.",
      },
      {
        kind: "main",
        title: "Checklist v1",
        outcome: "Rubrica abaixo verde ou corte declarado.",
      },
      {
        kind: "go",
        title: "Go G28 · testes do GET",
        outcome: "`go test` na rota. httptest.",
      },
      {
        kind: "projeto",
        title: "Vitrine v1",
        outcome: "Você usa o link nas redes de verdade, mesmo com 5 produtos.",
      },
      {
        kind: "caderno",
        title: "Marco mês 9",
        outcome: "Produto existe no mundo. Mês 10 é empregabilidade (Nest) e Go SQL.",
      },
    ],
    {
      pin: "PIN-3 assinatura + v1",
      rubric: [
        "Vitrine v1 nas redes",
        "Motion no ar com fallback",
        "Case study",
        "3 pins ou corte consciente do 3º",
      ],
    },
  ),
  buildWeek(
    37,
    10,
    5,
    "Recuperação 2 + mapa Nest",
    "Semana mais leve: você lê o mapa Nest e fecha buracos da v1. Sem reescrever a Vitrine em Nest.",
    "Nest é módulo de emprego, não o backend da Vitrine.",
    [
      {
        kind: "folga",
        title: "Bugs da v1",
        outcome: "Só o que dói no uso real.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Por que Nest nas vagas BR",
        outcome: "Módulos, DI, guards. Você mapeia para o que já fez em Fastify.",
        resource: NEST,
      },
      {
        kind: "main",
        title: "Scaffold Nest",
        outcome: "Repo `nest-lab`. Hello world. Não é a Vitrine.",
        resource: NEST,
      },
      {
        kind: "main",
        title: "Module, controller, provider",
        outcome: "Um resource `products` fake. Mesma forma mental do Fastify plugin.",
      },
      {
        kind: "go",
        title: "Go G29 · POST JSON",
        outcome: "Gin POST cria product em memória. Bind JSON.",
        resource: GIN,
      },
      {
        kind: "projeto",
        title: "Não tocar na v1 sem bug",
        outcome: "Disciplina. Hiperfoco vai para o nest-lab, não para 'reescrever tudo'.",
      },
      {
        kind: "caderno",
        title: "Tradução Fastify→Nest",
        outcome: "Tabela: plugin≈module, hook≈guard, schema≈DTO/pipe.",
      },
    ],
    { recovery: true },
  ),
  buildWeek(
    38,
    10,
    5,
    "Nest: DTO, pipe, guard",
    "Até domingo o nest-lab tem CRUD in-memory, validação e um guard de API key.",
    "Profundidade: o suficiente para uma prova prática júnior/pleno.",
    [
      {
        kind: "main",
        title: "DTO + ValidationPipe",
        outcome: "POST podre = 400. class-validator ou zod adapter, o que a doc canônica usar.",
        resource: NEST,
      },
      {
        kind: "main",
        title: "Guard e decorator",
        outcome: "Rota admin exige header. Teste e2e Nest.",
      },
      {
        kind: "main",
        title: "ConfigModule",
        outcome: "env tipada. Sem secret no git.",
      },
      {
        kind: "main",
        title: "Estrutura de pastas",
        outcome: "Você explica um repo Nest em entrevista em 2 minutos.",
      },
      {
        kind: "go",
        title: "Go G30 · persistir POST no SQL",
        outcome: "INSERT com database/sql. Mesmo Postgres.",
      },
      {
        kind: "projeto",
        title: "README nest-lab",
        outcome: "Como rodar, o que imita da Vitrine, o que não imita.",
      },
      {
        kind: "caderno",
        title: "Entrevista",
        outcome: "3 perguntas possíveis sobre Nest e sua resposta em PT.",
      },
    ],
  ),
  buildWeek(
    39,
    10,
    5,
    "Nest + SQL (opcional raso) e TypeORM/Prisma de olho",
    "Até domingo você conecta o nest-lab no Postgres OU documenta por que ficou in-memory (corte de profundidade).",
    "ORM aparece como leitura. O capstone continua SQL cru.",
    [
      {
        kind: "main",
        title: "Ler um ORM, não casar",
        outcome: "Prisma ou Drizzle: o que gera, o que esconde. 1h. Capstone não migra.",
      },
      {
        kind: "main",
        title: "Nest e Postgres",
        outcome: "1 GET com SQL cru via driver, se der tempo. Sem TypeORM obrigatório.",
        resource: NEST,
      },
      {
        kind: "main",
        title: "Teste e2e",
        outcome: "Supertest na rota products.",
      },
      {
        kind: "main",
        title: "Cortar ou pin-lab",
        outcome: "Se o lab está apresentável, pin opcional. Se não, README honesto chega.",
      },
      {
        kind: "go",
        title: "Go G31 · transactions",
        outcome: "Begin/Commit/Rollback em Go no INSERT.",
      },
      {
        kind: "projeto",
        title: "Não reescrever Vitrine",
        outcome: "Confirma: produção continua Fastify.",
      },
      {
        kind: "caderno",
        title: "ORM no futuro",
        outcome: "Fase 2: Drizzle depois do capstone, como você pediu.",
      },
    ],
  ),
  buildWeek(
    40,
    10,
    5,
    "Go REST + SQL (sprint)",
    "Até domingo o catálogo em Go lê e cria product no mesmo banco (ou num schema `go_lab`).",
    "Evidência Go: API pequena, SQL cru, testes. Não é segundo capstone.",
    [
      {
        kind: "go",
        title: "Go G32 · layout do serviço",
        outcome: "cmd/api, internal/products. Sem hexagono de livro.",
        minutes: 60,
      },
      {
        kind: "go",
        title: "Go G33 · Gin + sqlc ou sql cru",
        outcome: "GET/POST products. sqlc se couber; senão database/sql.",
        minutes: 90,
        resource: GIN,
      },
      {
        kind: "go",
        title: "Go G34 · testes httptest + sql",
        outcome: "2 testes. Verde.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "README go-catalog",
        outcome: "Como rodar, o que compartilha com a Vitrine (banco), o que não.",
      },
      {
        kind: "go",
        title: "Go G35 · race detector",
        outcome: "`go test -race` uma vez. Se falhar, lê o stack. Se passar, segue.",
        minutes: 60,
      },
      {
        kind: "projeto",
        title: "Repo go-catalog público",
        outcome: "Evidência, não produto. Link no README da Vitrine.",
      },
      {
        kind: "caderno",
        title: "Marco mês 10",
        outcome: "Nest-lab + Go SQL. Você não é sênior Go. O vault não mente.",
      },
    ],
    {
      rubric: [
        "nest-lab explica DI/guards",
        "go-catalog GET/POST + SQL",
        "Vitrine v1 intacta",
      ],
    },
  ),
  buildWeek(
    41,
    11,
    5,
    "PWA",
    "Até domingo a Vitrine instala no Android (ícone, offline raso da home).",
    "Mesmo código web. Sem store.",
    [
      {
        kind: "main",
        title: "Manifest e ícones",
        outcome: "Instalável no Chrome Android.",
        resource: PWA,
      },
      {
        kind: "main",
        title: "Service worker mínimo",
        outcome: "Precache da shell. Sem inventar sync.",
      },
      {
        kind: "main",
        title: "Offline honesto",
        outcome: "Se a API cair, a home cacheada aparece com aviso. Sem milagre.",
      },
      {
        kind: "main",
        title: "Teste no telefone",
        outcome: "Adicionar à tela inicial. Print no README.",
      },
      {
        kind: "go",
        title: "Go G36 · concurrency review",
        outcome: "Reler channels/select. 3 exercícios pequenos ou notas.",
        resource: EFFECTIVE_GO,
      },
      {
        kind: "projeto",
        title: "PWA no ar",
        outcome: "Critério: ícone na sua tela inicial.",
      },
      {
        kind: "caderno",
        title: "Mobile web",
        outcome: "O que ainda não é app de loja — e está ok.",
      },
    ],
  ),
  buildWeek(
    42,
    11,
    5,
    "Capacitor no Android",
    "Até domingo um APK ou build de debug abre a Vitrine no seu Android. Sem Play Store.",
    "Não instale Android Studio no dia 1 se a RAM morrer: use o fluxo mais leve da doc, ou um só wrap no final de semana de hiperfoco.",
    [
      {
        kind: "main",
        title: "Capacitor wrap",
        outcome: "Projeto add android. A WebView carrega a URL prod ou o dist.",
        resource: CAP,
      },
      {
        kind: "main",
        title: "Detalhes de WebView",
        outcome: "deep link não é obrigatório. Status bar ok.",
      },
      {
        kind: "main",
        title: "Build de debug",
        outcome: "APK no telefone. Print.",
      },
      {
        kind: "main",
        title: "O que NÃO fazer",
        outcome: "Sem Ionic UI. Sem plugins de câmera. Wrap é o portfólio.",
      },
      {
        kind: "go",
        title: "Go G37 · fuzz de uma função",
        outcome: "Fuzz de parse de URL de afiliado, 1 função. Se a hora acabar, documenta o corte.",
        resource: { label: "Go fuzzing", url: "https://go.dev/security/fuzz/" },
      },
      {
        kind: "projeto",
        title: "Binário no portfólio",
        outcome: "README: 'APK de debug, não está na loja'.",
      },
      {
        kind: "caderno",
        title: "RN fica fase 2",
        outcome: "Você escreve por que Capacitor bastou neste ano.",
      },
    ],
  ),
  buildWeek(
    43,
    11,
    5,
    "Go concorrência aplicada",
    "Até domingo o go-catalog tem um endpoint que dispara N trabalhos com limite de goroutines (ex.: checar URLs).",
    "Útil e pequeno. Sem crawler-monstro.",
    [
      {
        kind: "go",
        title: "Go G38 · errgroup",
        outcome: "N GETs com limite. Erro cancela o resto.",
        minutes: 60,
      },
      {
        kind: "go",
        title: "Go G39 · timeouts reais",
        outcome: "context.WithTimeout em volta do pool.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Endpoint /check-links",
        outcome: "Admin-only se ligar na Vitrine; senão só no go-catalog.",
      },
      {
        kind: "main",
        title: "Teste do pool",
        outcome: "Teste com httptest.Server falso.",
      },
      {
        kind: "go",
        title: "Go G40 · README de concorrência",
        outcome: "Diagrama no Drawing: main, workers, ctx.",
        minutes: 45,
      },
      {
        kind: "projeto",
        title: "go-catalog v0.2",
        outcome: "Evidência de goroutine no portfólio, com advertência de nível.",
      },
      {
        kind: "caderno",
        title: "Nível Go",
        outcome: "Júnior sólido / pleno inicial. Sênior está em [[fase-2]].",
      },
    ],
  ),
  buildWeek(
    44,
    11,
    5,
    "Fechar mobile + Go",
    "Até domingo PWA, APK, go-catalog e nest-lab têm README. A Vitrine v1.1 só se for bugfix.",
    "Mês 12 é renda, não feature.",
    [
      {
        kind: "main",
        title: "Polimento PWA/APK",
        outcome: "Ícone, nome, print.",
      },
      {
        kind: "main",
        title: "Polimento go-catalog",
        outcome: "go test verde. Sem panic em main.",
      },
      {
        kind: "main",
        title: "Polimento nest-lab",
        outcome: "O suficiente para clone em entrevista.",
      },
      {
        kind: "main",
        title: "Inventário de evidências",
        outcome: "Lista: pins, URLs, APK, labs. Vai para o calendário mês 12.",
      },
      {
        kind: "design",
        title: "Thumb do portfólio",
        outcome: "3 prints bons. Sem mockup genérico de template.",
        minutes: 60,
      },
      {
        kind: "projeto",
        title: "Freeze de feature",
        outcome: "Tag `pre-renda`. Feature nova = mentira para o mês 12.",
      },
      {
        kind: "caderno",
        title: "Marco mês 11",
        outcome: "Você tem web + API + lab Nest + lab Go + wrap mobile. Isso é o ano.",
      },
    ],
    {
      rubric: [
        "PWA instalada",
        "APK no telefone",
        "go-catalog com teste e concorrência pequena",
        "nest-lab apresentável",
        "Feature freeze",
      ],
    },
  ),
  buildWeek(
    45,
    12,
    6,
    "Portfólio como produto",
    "Até domingo um site (pode ser a própria Vitrine `/sobre` + GitHub) conta a história do ano em 3 peças.",
    "Não comece um portfólio-framework novo. Use Next que você já domina.",
    [
      {
        kind: "main",
        title: "Narrativa",
        outcome: "3 blocos: Vitrine, motion, API/Go. Cada um com 1 prova.",
      },
      {
        kind: "design",
        title: "Página de case",
        outcome: "Tipo e espaço. Você é o cliente de si mesmo.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Sobre honesto",
        outcome: "ADS, 1h/dia, o que corta, o que entrega. Recrutador não é inimigo.",
      },
      {
        kind: "main",
        title: "Links mortos",
        outcome: "Todas as URLs do README abrem.",
      },
      {
        kind: "go",
        title: "Manutenção Go",
        outcome: "Se quebrado, conserta. Senão, não inventa G41.",
        minutes: 45,
      },
      {
        kind: "projeto",
        title: "Portfólio no ar",
        outcome: "URL única para mandar no WhatsApp.",
      },
      {
        kind: "caderno",
        title: "Frase de posicionamento",
        outcome: "Front Next + API Fastify + SQL + motion. Go em progresso.",
      },
    ],
  ),
  buildWeek(
    46,
    12,
    6,
    "Oferta freelance",
    "Até domingo existe uma oferta de 1 parágrafo para landing com motion / vitrine de afiliados / site de 1 produto.",
    "Renda primeiro caminho: B depois de C. Vaga é a semana seguinte.",
    [
      {
        kind: "main",
        title: "Oferta",
        outcome: "Quem, o quê, prazo, preço de entrada (honesto para júnior).",
      },
      {
        kind: "main",
        title: "Onde publicar",
        outcome: "3 lugares reais (comunidade, LinkedIn, indicação). Sem 30 plataformas.",
      },
      {
        kind: "main",
        title: "Proposta modelo",
        outcome: "Arquivo no vault: escopo, fora de escopo, 2 revisões.",
      },
      {
        kind: "design",
        title: "1 página de serviço",
        outcome: "Pode ser rota `/trabalhe-comigo`. Sem pop-up.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "PIX e contrato mínimo",
        outcome: "Como cobra sinal. Lab de pagamento ajuda a história.",
      },
      {
        kind: "projeto",
        title: "Mandar 5 mensagens",
        outcome: "Não é teoria. 5 envios reais ou 5 conversas.",
      },
      {
        kind: "caderno",
        title: "O que travou",
        outcome: "Medo de preço, de texto, de recusa. Uma linha cada.",
      },
    ],
  ),
  buildWeek(
    47,
    12,
    6,
    "Vagas BR + remoto",
    "Até domingo 10 candidaturas saíram (BR e/ou remoto) com CV e GitHub alinhados ao que você de fato fez.",
    "Não se candidate a sênior Go. Pleno Next/Node ou júnior forte.",
    [
      {
        kind: "main",
        title: "CV de 1 página",
        outcome: "Stack real. Links. Sem 'dominio de Nest' se foi lab.",
      },
      {
        kind: "main",
        title: "LinkedIn / GitHub clean",
        outcome: "Pins certos. Bio em PT e 2 linhas EN.",
      },
      {
        kind: "main",
        title: "5 vagas BR",
        outcome: "Next/Node/Postgres. Mandou.",
      },
      {
        kind: "main",
        title: "5 vagas remoto",
        outcome: "Inglês com esforço: você avisa o nível. Não some.",
      },
      {
        kind: "main",
        title: "Perguntas técnicas que você aguenta",
        outcome: "HTTP, SQL, Next server/client, um pouco de Nest, um pouco de Go.",
      },
      {
        kind: "projeto",
        title: "Pasta de processos",
        outcome: "Planilha: vaga, data, status. Fora isso é caos.",
      },
      {
        kind: "caderno",
        title: "Depois da recusa",
        outcome: "Protocolo: anotar, não redesenhar o ano inteiro.",
      },
    ],
  ),
  buildWeek(
    48,
    12,
    6,
    "Fechamento do vault",
    "Até domingo o changelog pessoal está escrito, a fase 2 priorizada, e o que não coube foi cortado por escrito.",
    "v1 do plano congela. Você não reescreve o vault por ansiedade.",
    [
      {
        kind: "caderno",
        title: "O que o ano entregou",
        outcome: "Lista de evidências. Números: URLs, repos, APK.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Cortes",
        outcome: "O que 3.6 comeu: Nest raso? Fuzz? Three? Está no changelog.",
      },
      {
        kind: "main",
        title: "Fase 2 ordenada",
        outcome: "Top 5 de [[fase-2]], não 40 itens.",
      },
      {
        kind: "main",
        title: "Manutenção da Vitrine",
        outcome: "Como você vai 1h/semana só para não morrer, se a renda vier.",
      },
      {
        kind: "design",
        title: "Arquivo da peça",
        outcome: "Os prompts/IA e os frames, pasta única.",
        minutes: 45,
      },
      {
        kind: "projeto",
        title: "v1.0 frozen",
        outcome: "Tag `ano-1`. README final.",
      },
      {
        kind: "caderno",
        title: "Carta para você daqui 6 meses",
        outcome: "1 página. O que não fazer de novo (projeto grande, trilha paralela diária).",
      },
    ],
    {
      rubric: [
        "Portfólio URL",
        "Oferta freelance enviada",
        "10 candidaturas",
        "Changelog pessoal",
        "Fase 2 com 5 itens",
      ],
    },
  ),
  buildWeek(
    49,
    12,
    6,
    "Recuperação 3 · folga de fim de linha",
    "Semana de ar. Só se candidatura/freelance estiver quente: responde. Sem tópico novo.",
    "Capstone só se produção quebrar.",
    [
      {
        kind: "folga",
        title: "Descanso",
        outcome: "Válido. Está no plano.",
        minutes: 30,
      },
      {
        kind: "folga",
        title: "Responder processos",
        outcome: "Se nada chegou, não inventa stack nova.",
        minutes: 45,
      },
      {
        kind: "folga",
        title: "Ler o caderno",
        outcome: "Padrões do ano.",
        minutes: 45,
      },
      {
        kind: "design",
        title: "Olhar referências sem copiar",
        outcome: "30 min. Sem Figma novo.",
        minutes: 30,
      },
      {
        kind: "go",
        title: "Tour residual",
        outcome: "Opcional. Zero culpa se pular.",
        minutes: 30,
      },
      {
        kind: "projeto",
        title: "Produção",
        outcome: "Só bug.",
        minutes: 30,
      },
      {
        kind: "caderno",
        title: "Silêncio",
        outcome: "Uma linha: 'semana 49, ainda na linha'.",
      },
    ],
    { recovery: true },
  ),
  buildWeek(
    50,
    12,
    6,
    "Hiperfoco residual 1",
    "Se a renda ainda não veio: 7h desta semana em candidatura + 1 melhoria visível no portfólio. Sem curso novo.",
    "Melhoria = copy ou performance da peça, não 'migrar para Nest'.",
    [
      {
        kind: "main",
        title: "Mais 5 vagas",
        outcome: "Mandou.",
      },
      {
        kind: "main",
        title: "Follow-up",
        outcome: "2 follow-ups educados.",
      },
      {
        kind: "main",
        title: "Uma melhoria visível",
        outcome: "Home ou case. 2 horas no máximo.",
      },
      {
        kind: "main",
        title: "Freelance: 5 novos envios",
        outcome: "Ou 1 proposta melhor escrita.",
      },
      {
        kind: "folga",
        title: "Corte de ruído",
        outcome: "Sai de tutorial aleatório. Volta à linha.",
        minutes: 30,
      },
      {
        kind: "projeto",
        title: "Deploy se mudou",
        outcome: "URL atualizada.",
      },
      {
        kind: "caderno",
        title: "O que ainda é medo",
        outcome: "Nomeia. Não resolve tudo.",
      },
    ],
  ),
  buildWeek(
    51,
    12,
    6,
    "Hiperfoco residual 2",
    "Igual à 50, com teto. Se um processo avançou, o plano da semana vira 'passar na entrevista' — SQL, HTTP, Next.",
    "Estudar o que a vaga pede, não o que o YouTube pede.",
    [
      {
        kind: "main",
        title: "Entrevista: HTTP+SQL",
        outcome: "Você explica EXPLAIN e cookie em voz alta, 10 min.",
      },
      {
        kind: "main",
        title: "Entrevista: Next",
        outcome: "Server vs client, um exemplo da Vitrine.",
      },
      {
        kind: "main",
        title: "Entrevista: Fastify/Nest",
        outcome: "Por que a Vitrine é Fastify e o lab é Nest.",
      },
      {
        kind: "main",
        title: "Entrevista: Go",
        outcome: "Nível real. Goroutine, channel, SQL. Sem mentir sênior.",
      },
      {
        kind: "folga",
        title: "Simulacro",
        outcome: "Grava a própria voz 5 min. Assiste. Corta muletas.",
        minutes: 45,
      },
      {
        kind: "projeto",
        title: "Repo limpo",
        outcome: "Main buildable. README alinhado.",
      },
      {
        kind: "caderno",
        title: "Perguntas que você não sabe",
        outcome: "Lista. Fase 2. Não descarrila o mês.",
      },
    ],
  ),
  buildWeek(
    52,
    12,
    6,
    "Fim do v1",
    "Você fecha o ano: vault v1 congelado, evidências listadas, fase 2 com data de início ou não.",
    "Se a renda veio, o plano cumpriu. Se não, o plano ainda cumpriu: há produto, há prova, há linha para o ano 2.",
    [
      {
        kind: "caderno",
        title: "Inventário final",
        outcome: "Tudo que existe fora da sua cabeça.",
        minutes: 60,
      },
      {
        kind: "main",
        title: "Changelog v1.0 → arquivo morto",
        outcome: "Próximas mudanças são v1.1, com data. Sem reescrever 00 Contrato por ansiedade.",
      },
      {
        kind: "main",
        title: "Fase 2 data",
        outcome: "Quando RN, Redis, system design começam — ou 'quando a renda estabilizar'.",
      },
      {
        kind: "main",
        title: "Obrigado ao eu de 12 meses atrás",
        outcome: "1 parágrafo. Sério.",
      },
      {
        kind: "folga",
        title: "Fora da tela",
        outcome: "Válido.",
        minutes: 45,
      },
      {
        kind: "projeto",
        title: "Vitrine no ar",
        outcome: "Continua. 5 produtos ainda valem.",
      },
      {
        kind: "caderno",
        title: "Fim da linha v1",
        outcome: "Checkbox do ano. Você pode parar de estudar hoje e ainda tem um produto.",
      },
    ],
    {
      rubric: [
        "Vault congelado",
        "Evidências listadas",
        "Fase 2 datada ou explicitamente adiada",
        "Vitrine no ar",
      ],
    },
  ),
];

export const phases = [
  {
    n: 0,
    title: "Sistema",
    months: "Mês 1 · semana 1",
    slug: "01-sistema",
    intent: "Ferramentas, vault, Git, caderno. Sem framework.",
  },
  {
    n: 1,
    title: "Fundamentos",
    months: "Mês 1 · semanas 2–4",
    slug: "02-fundamentos",
    intent: "CSS, JS, TS que ainda faltam. Vanilla antes do Next.",
  },
  {
    n: 2,
    title: "Next e design",
    months: "Meses 2–4",
    slug: "03-next-design",
    intent: "Front empregável, Figma, Framer, GSAP, pin 1.",
  },
  {
    n: 3,
    title: "Fastify e Postgres",
    months: "Meses 5–7",
    slug: "04-backend",
    intent: "HTTP, Fastify, SQL cru, auth, upload, pin 2.",
  },
  {
    n: 4,
    title: "Fullstack e assinatura",
    months: "Meses 8–9",
    slug: "05-assinatura",
    intent: "Pagamento-lab, WS, scroll-video, Three lab, pin 3, v1 pública.",
  },
  {
    n: 5,
    title: "Nest, Go, mobile",
    months: "Meses 10–11",
    slug: "06-nest-go-mobile",
    intent: "Nest de vaga, Go SQL/concorrência, PWA, Capacitor.",
  },
  {
    n: 6,
    title: "Renda e portfólio",
    months: "Mês 12",
    slug: "07-renda",
    intent: "Oferta freelance, 10 vagas, freeze, fase 2.",
  },
] as const;

export function weekById(id: string) {
  return weeks.find((w) => w.id === id);
}

export function weeksOfMonth(month: number) {
  return weeks.filter((w) => w.month === month);
}

export function sessionKindLabel(kind: SessionKind) {
  switch (kind) {
    case "main":
      return "Linha";
    case "go":
      return "Go";
    case "design":
      return "Design";
    case "projeto":
      return "Projeto";
    case "caderno":
      return "Caderno";
    case "folga":
      return "Folga";
  }
}
