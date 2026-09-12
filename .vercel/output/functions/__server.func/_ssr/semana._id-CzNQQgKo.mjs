import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-CgKSwMh-.mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { i as weeks } from "./weeks-C2aOtEIw.mjs";
import { i as weekProgress, r as useProgress } from "./progress-7hyPpl8u.mjs";
import { t as SessionCard } from "./session-card-D7GWL3w3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/semana._id-CzNQQgKo.js
var import_jsx_runtime = require_jsx_runtime();
function WeekPage() {
	const { id } = Route.useParams();
	const week = weeks.find((w) => w.id.toLowerCase() === id.toLowerCase());
	const completed = useProgress((s) => s.completed);
	const toggleSession = useProgress((s) => s.toggleSession);
	const setWeek = useProgress((s) => s.setWeek);
	if (!week) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Semana não existe"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted",
			children: "Use S01 a S52."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/semana",
				children: "Ver calendário"
			})
		})
	] });
	const wp = weekProgress(week.id, completed);
	const idx = weeks.findIndex((w) => w.id === week.id);
	const prev = idx > 0 ? weeks[idx - 1] : null;
	const next = idx < weeks.length - 1 ? weeks[idx + 1] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
			children: [
				"Mês ",
				week.month,
				" · fase ",
				week.phase,
				week.recovery ? " · recuperação" : "",
				week.pin ? ` · ${week.pin}` : ""
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "mt-2 font-display text-4xl",
			children: [
				week.id,
				" · ",
				week.title
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: week.smart
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg",
				children: "Fatia da Vitrine. "
			}), week.capstoneSlice]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-1.5 overflow-hidden rounded-full bg-bg-inset",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-accent",
				style: { width: `${Math.round(wp.ratio * 100)}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: () => setWeek(week.id),
				children: "Marcar como semana corrente"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-3",
			children: week.sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, {
				session: s,
				done: !!completed[s.id],
				onToggle: () => toggleSession(s.id)
			}, s.id))
		}),
		week.rubric?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Rubrica"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2 text-sm text-muted",
				children: week.rubric.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "—"
					}), r]
				}, r))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex items-center justify-between gap-3",
			children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/semana/$id",
					params: { id: prev.id },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}),
						" ",
						prev.id
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/semana/$id",
					params: { id: next.id },
					children: [
						next.id,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					]
				})
			}) : null]
		})
	] });
}
//#endregion
export { WeekPage as component };
