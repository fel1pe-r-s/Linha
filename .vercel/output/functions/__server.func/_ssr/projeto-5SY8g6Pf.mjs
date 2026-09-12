import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useProgress } from "./progress-7hyPpl8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projeto-5SY8g6Pf.js
var import_jsx_runtime = require_jsx_runtime();
var capstone = {
	id: "vitrine",
	title: "Vitrine",
	kind: "capstone",
	when: "Cresce o ano inteiro. Fatia mensal, nunca o projeto todo de uma vez.",
	outcome: "Site público no estilo Linktree/vitrine: imagens de produto, clique abre Amazon/Mercado Livre. Admin seu. Stats de clique.",
	allowed: [
		"Next.js App Router + TS",
		"Fastify + Postgres SQL cru",
		"GSAP / Framer Motion",
		"PWA + wrap Capacitor no fim"
	],
	forbidden: [
		"Reescrever em Nest",
		"ORM no ano 1",
		"React Native",
		"SaaS de pagamentos grudado no click de afiliado",
		"CMS genérico"
	],
	rubric: [
		"URL pública",
		"Mobile 390 sem overflow",
		"3+ produtos reais",
		"Click-out funciona e grava",
		"Admin com login",
		"Disclaimer de afiliado",
		"README cru (o que não está pronto)"
	],
	repoHint: "vitrine (um repo que cresce). Micros que não cabem ficam em repos irmãos."
};
var micros = [
	{
		id: "landing-vanilla",
		title: "Landing vanilla",
		kind: "micro",
		when: "S02–S04",
		outcome: "Uma landing em HTML/CSS/JS tipado, Grid, 390px ok, 3 produtos filtráveis.",
		allowed: [
			"HTML",
			"CSS",
			"JS/TS",
			"GitHub Pages"
		],
		forbidden: [
			"React",
			"Next",
			"Tailwind",
			"libs de animação"
		],
		rubric: [
			"Sem overflow em 390",
			"Filtro funciona",
			"Product tipado",
			"README + print"
		],
		repoHint: "landing-vanilla (morre como evidência; não vira a Vitrine)"
	},
	{
		id: "next-shell",
		title: "Shell Next da Vitrine",
		kind: "micro",
		when: "S05–S08",
		outcome: "Home + /p/[id] no ar, fiel ao Figma.",
		allowed: [
			"Next",
			"TS",
			"Tailwind + CSS vars"
		],
		forbidden: [
			"banco",
			"auth",
			"GSAP ainda (entra S13)"
		],
		rubric: [
			"URL",
			"3 cards",
			"página de produto",
			"zero any"
		],
		repoHint: "é o próprio repo vitrine"
	},
	{
		id: "motion-cards",
		title: "Cards com presença",
		kind: "micro",
		when: "S10",
		outcome: "Stagger curto, reduced-motion, take de 10s no celular.",
		allowed: ["Framer Motion / Motion"],
		forbidden: ["animar tudo", "bounce de tutorial"],
		rubric: ["reduced-motion testado", "vídeo no README"],
		repoHint: "vitrine"
	},
	{
		id: "http-server",
		title: "http.Server 40 linhas",
		kind: "micro",
		when: "S17",
		outcome: "Duas rotas JSON em Node stdlib.",
		allowed: ["node:http"],
		forbidden: ["Express", "Fastify"],
		rubric: ["curl funciona", "JSON válido"],
		repoHint: "labs/http-cru"
	},
	{
		id: "express-mini",
		title: "Express mini (legado)",
		kind: "micro",
		when: "S18",
		outcome: "CRUD in-memory. Objetivo: ler código velho, não adotar.",
		allowed: ["Express"],
		forbidden: ["usar isso na Vitrine"],
		rubric: ["4 rotas", "README diz 'legado'"],
		repoHint: "labs/express-mini"
	},
	{
		id: "fastify-api",
		title: "API Fastify da Vitrine",
		kind: "micro",
		when: "S18–S28",
		outcome: "products + clicks + auth, SQL cru, no ar.",
		allowed: [
			"Fastify",
			"pg",
			"SQL files"
		],
		forbidden: [
			"Prisma",
			"Nest",
			"ORMs"
		],
		rubric: [
			"schema reproduzível",
			"inject tests",
			"401 no admin"
		],
		repoHint: "vitrine ou vitrine-api"
	},
	{
		id: "checkout-1",
		title: "Checkout de 1 produto",
		kind: "micro",
		when: "S29",
		outcome: "Stripe test + PIX copiável. Repo separado.",
		allowed: [
			"Next ou Fastify",
			"Stripe test",
			"PIX"
		],
		forbidden: ["grudar na Vitrine", "produção com dinheiro real no ano 1 se não precisar"],
		rubric: [
			"pagamento test pago",
			"webhook idempotente",
			"README: afiliado ≠ checkout"
		],
		repoHint: "checkout-1"
	},
	{
		id: "scroll-video",
		title: "Scroll-video 6s",
		kind: "micro",
		when: "S31–S33",
		outcome: "Peça de motion com fallback e orçamento de KB.",
		allowed: [
			"GSAP",
			"canvas/spritesheet",
			"IA para o clip"
		],
		forbidden: ["WebGL obrigatório", "prender scroll sem fallback"],
		rubric: [
			"390px usável",
			"fallback",
			"URL",
			"take no Android"
		],
		repoHint: "labs/scroll-video ou rota /studio"
	},
	{
		id: "three-lab",
		title: "Objeto Three.js",
		kind: "micro",
		when: "S34",
		outcome: "1 cena, 1 objeto, dispose no unmount.",
		allowed: ["Three.js"],
		forbidden: ["virar o hero se não servir o produto", "modelo de 40MB"],
		rubric: ["reload 10x sem vazar", "README de 8 linhas"],
		repoHint: "labs/three"
	},
	{
		id: "nest-lab",
		title: "Nest lab",
		kind: "micro",
		when: "S37–S39",
		outcome: "CRUD + guard + DTO. Não substitui a Vitrine.",
		allowed: ["NestJS"],
		forbidden: ["reescrever a Vitrine"],
		rubric: ["README traduz Fastify→Nest", "e2e de 1 rota"],
		repoHint: "nest-lab"
	},
	{
		id: "go-catalog",
		title: "Catálogo Go",
		kind: "micro",
		when: "S40–S43",
		outcome: "GET/POST SQL + um endpoint com worker pool.",
		allowed: [
			"Go",
			"Gin",
			"database/sql"
		],
		forbidden: ["segundo capstone", "microserviços"],
		rubric: [
			"go test verde",
			"SQL parametrizado",
			"README de nível (não sênior)"
		],
		repoHint: "go-catalog"
	},
	{
		id: "pwa-cap",
		title: "PWA + Capacitor",
		kind: "micro",
		when: "S41–S42",
		outcome: "Ícone na tela inicial + APK de debug no Android.",
		allowed: ["PWA", "Capacitor"],
		forbidden: [
			"Ionic UI",
			"Play Store",
			"React Native"
		],
		rubric: ["print da tela inicial", "APK abre a Vitrine"],
		repoHint: "vitrine"
	}
];
function ProjetoPage() {
	const cap = useProgress((s) => s.capstone);
	const microDone = useProgress((s) => s.micros);
	const toggleCapstone = useProgress((s) => s.toggleCapstone);
	const toggleMicro = useProgress((s) => s.toggleMicro);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: "Capstone · cresce o ano inteiro"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: capstone.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: capstone.outcome
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted",
			children: capstone.when
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-mono text-xs text-faint",
			children: capstone.repoHint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Pode"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-1 text-sm text-muted",
			children: capstone.allowed.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", x] }, x))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 font-display text-2xl",
			children: "Não pode"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-1 text-sm text-muted",
			children: capstone.forbidden.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", x] }, x))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 font-display text-2xl",
			children: "Rubrica v1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2",
			children: capstone.rubric.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggleCapstone(r),
				className: "flex w-full items-start gap-3 rounded-[14px] bg-bg-raised px-3 py-3 text-left text-sm shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { on: !!cap[r] }), r]
			}) }, r))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/livro/$slug",
				params: { slug: "projeto" },
				className: "text-accent",
				children: "Abrir projeto.md no livro →"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-2xl",
			children: "Micros"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3",
			children: micros.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-faint",
							children: m.when
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl",
							children: m.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleMicro(m.id),
							className: "flex size-11 shrink-0 items-center justify-center",
							"aria-label": `Marcar ${m.title}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { on: !!microDone[m.id] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: m.outcome
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-faint",
						children: ["Pronto quando: ", m.rubric.join(" · ")]
					})
				]
			}, m.id))
		})
	] });
}
function Box({ on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[6px] border ${on ? "border-accent bg-accent text-accent-fg" : "border-line-strong"}`,
		"aria-hidden": true,
		children: on ? "✓" : ""
	});
}
//#endregion
export { ProjetoPage as component };
