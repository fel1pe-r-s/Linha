import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { i as weeks } from "./weeks-C2aOtEIw.mjs";
import { i as weekProgress, n as globalProgress, r as useProgress } from "./progress-7hyPpl8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progresso-CE7xLOyL.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressPage() {
	const completed = useProgress((s) => s.completed);
	const setWeek = useProgress((s) => s.setWeek);
	const reset = useProgress((s) => s.reset);
	const gp = globalProgress(completed);
	const months = Array.from({ length: 12 }, (_, i) => i + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: "Checkboxes · não minta para a rubrica"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Progresso"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-muted",
			children: [
				gp.done,
				" de ",
				gp.total,
				" sessões · ",
				Math.round(gp.ratio * 100),
				"%"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-2 overflow-hidden rounded-full bg-bg-inset",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-accent",
				style: { width: `${Math.round(gp.ratio * 100)}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-8",
			children: months.map((m) => {
				const list = weeks.filter((w) => w.month === m);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl",
					children: ["Mês ", m]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: list.map((w) => {
						const wp = weekProgress(w.id, completed);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/semana/$id",
							params: { id: w.id },
							onClick: () => setWeek(w.id),
							className: "flex items-center gap-3 rounded-[16px] bg-bg-raised px-3 py-3 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 font-mono text-xs text-faint",
									children: w.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm text-fg",
										children: w.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block h-1 overflow-hidden rounded-full bg-bg-inset",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block h-full bg-accent",
											style: { width: `${Math.round(wp.ratio * 100)}%` }
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs tabular-nums text-muted",
									children: [
										wp.done,
										"/",
										wp.total
									]
								})
							]
						}) }, w.id);
					})
				})] }, m);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => {
					if (confirm("Zerar progresso deste navegador?")) reset();
				},
				children: "Zerar progresso local"
			})
		})
	] });
}
//#endregion
export { ProgressPage as component };
