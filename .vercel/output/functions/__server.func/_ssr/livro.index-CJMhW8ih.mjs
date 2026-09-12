import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as phases } from "./weeks-C2aOtEIw.mjs";
import { n as VAULT_FILES } from "./meta-D6jsBD4b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/livro.index-CJMhW8ih.js
var import_jsx_runtime = require_jsx_runtime();
function LivroIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: "Livro · navegação linear"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Notas do vault"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Mesmas notas do Obsidian. ← anterior / próxima → no topo de cada uma. Hubs primeiro; fases depois."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 space-y-2",
			children: VAULT_FILES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/livro/$slug",
				params: { slug: f.slug },
				className: "flex items-baseline justify-between gap-3 rounded-[16px] bg-bg-raised px-4 py-3 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] text-faint",
					children: String(i).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 text-fg",
					children: f.title
				})] }), f.hub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] text-accent",
					children: "hub"
				}) : null]
			}) }, f.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-2xl",
			children: "Fases"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: phases.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-[16px] bg-bg-raised p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-faint",
						children: [
							"Fase ",
							p.n,
							" · ",
							p.months
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/livro/$slug",
						params: { slug: p.slug },
						className: "mt-1 block font-display text-xl text-fg",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: p.intent
					})
				]
			}, p.n))
		})
	] });
}
//#endregion
export { LivroIndex as component };
