import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Download } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { n as VAULT_FILES } from "./meta-D6jsBD4b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vault-DVFu6Orv.js
var import_jsx_runtime = require_jsx_runtime();
function VaultPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: "Obsidian · pasta única"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Baixar o vault"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Copie o zip para o Obsidian. Tags, frontmatter e ← → já vêm no kit. Plugins: Tasks e Drawing. Não precisa de Dataview."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/linha-vault-v1.zip",
					download: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "linha-vault-v1.zip"]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-2xl",
			children: "Arquivos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-1",
			children: VAULT_FILES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `/vault/${encodeURIComponent(f.file)}`,
				download: f.file,
				className: "flex items-center justify-between rounded-[12px] px-3 py-3 text-sm hover:bg-bg-raised",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-muted",
					children: f.file
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: f.title
				})]
			}) }, f.slug))
		})
	] });
}
//#endregion
export { VaultPage as component };
