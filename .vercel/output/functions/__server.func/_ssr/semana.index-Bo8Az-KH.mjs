import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as weeks } from "./weeks-C2aOtEIw.mjs";
import { i as weekProgress, r as useProgress } from "./progress-7hyPpl8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/semana.index-Bo8Az-KH.js
var import_jsx_runtime = require_jsx_runtime();
function SemanaIndex() {
	const completed = useProgress((s) => s.completed);
	const current = useProgress((s) => s.currentWeekId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: "52 semanas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Calendário"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 space-y-2",
			children: weeks.map((w) => {
				const wp = weekProgress(w.id, completed);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/semana/$id",
					params: { id: w.id },
					className: "flex items-center gap-3 rounded-[16px] bg-bg-raised px-3 py-3 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 font-mono text-xs text-faint",
							children: w.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-sm text-fg",
								children: [
									w.title,
									w.id === current ? " · agora" : "",
									w.recovery ? " · folga" : ""
								]
							})
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
		})
	] });
}
//#endregion
export { SemanaIndex as component };
