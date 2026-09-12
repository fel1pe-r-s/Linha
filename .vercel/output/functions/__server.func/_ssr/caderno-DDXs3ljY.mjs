import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { i as weeks } from "./weeks-C2aOtEIw.mjs";
import { r as useProgress } from "./progress-7hyPpl8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/caderno-DDXs3ljY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CadernoPage() {
	const currentWeekId = useProgress((s) => s.currentWeekId);
	const entries = useProgress((s) => s.caderno);
	const addCaderno = useProgress((s) => s.addCaderno);
	const removeCaderno = useProgress((s) => s.removeCaderno);
	const [tried, setTried] = (0, import_react.useState)("");
	const [broke, setBroke] = (0, import_react.useState)("");
	const [works, setWorks] = (0, import_react.useState)("");
	const [next, setNext] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		if (!tried.trim() && !works.trim()) return;
		addCaderno({
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			weekId: currentWeekId,
			tried: tried.trim(),
			broke: broke.trim(),
			works: works.trim(),
			next: next.trim()
		});
		setTried("");
		setBroke("");
		setWorks("");
		setNext("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: "Papel primeiro · vault depois"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Caderno"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Modelo de revisão para caderno. O papel ganha quando o TDAH abrir doze abas. Aqui fica a cópia semanal, não a teoria."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "mt-8 space-y-4 rounded-[24px] bg-bg-raised p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-faint",
					children: [
						"Semana ",
						currentWeekId,
						" · ",
						weeks.find((w) => w.id === currentWeekId)?.title
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tentei",
					value: tried,
					onChange: setTried
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Quebrou",
					value: broke,
					onChange: setBroke
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Funciona (a regra, não o feeling)",
					value: works,
					onChange: setWorks
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Próxima sessão em uma frase",
					value: next,
					onChange: setNext
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Guardar página"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 space-y-4",
			children: entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Nenhuma página digital ainda. Domingo basta."
			}) : entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-faint",
							children: [
								e.date,
								" · ",
								e.weekId
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 text-xs text-muted hover:text-danger",
							onClick: () => removeCaderno(e.id),
							children: "Apagar"
						})]
					}),
					e.tried ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						k: "Tentei",
						v: e.tried
					}) : null,
					e.broke ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						k: "Quebrou",
						v: e.broke
					}) : null,
					e.works ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						k: "Funciona",
						v: e.works
					}) : null,
					e.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						k: "Próxima",
						v: e.next
					}) : null
				]
			}, e.id))
		})
	] });
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (e) => onChange(e.target.value),
			rows: 3,
			className: "mt-1 w-full rounded-[12px] bg-bg-inset px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/70"
		})]
	});
}
function Line({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 text-sm leading-relaxed text-fg/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-muted",
			children: [k, ". "]
		}), v]
	});
}
//#endregion
export { CadernoPage as component };
