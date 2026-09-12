import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, l as ChevronRight, u as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { i as weeks } from "./weeks-C2aOtEIw.mjs";
import { i as weekProgress, n as globalProgress, r as useProgress, t as firstOpenSession } from "./progress-7hyPpl8u.mjs";
import { t as PLAN_VERSION } from "./meta-D6jsBD4b.mjs";
import { t as SessionCard } from "./session-card-D7GWL3w3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6jbaXoV.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const currentWeekId = useProgress((s) => s.currentWeekId);
	const completed = useProgress((s) => s.completed);
	const setWeek = useProgress((s) => s.setWeek);
	const toggleSession = useProgress((s) => s.toggleSession);
	const week = weeks.find((w) => w.id === currentWeekId) ?? weeks[0];
	const idx = weeks.findIndex((w) => w.id === week.id);
	const prev = idx > 0 ? weeks[idx - 1] : null;
	const next = idx < weeks.length - 1 ? weeks[idx + 1] : null;
	const wp = weekProgress(week.id, completed);
	const gp = globalProgress(completed);
	const today = firstOpenSession(week.id, completed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.18em] text-faint",
			children: [
				PLAN_VERSION,
				" · ",
				365,
				" h · 1 h/dia"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-xl font-display text-4xl text-fg sm:text-5xl",
			children: "Uma linha. Doze meses. Renda no fim."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-xl text-muted",
			children: "Plano cru para TDAH e máquina fraca: Next + Fastify + SQL, motion como ofício, Go na sexta, Vitrine crescendo em fatias. Sem segundo capstone."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Ano",
					value: `${Math.round(gp.ratio * 100)}%`,
					hint: `${gp.done}/${gp.total} sessões`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Esta semana",
					value: week.id,
					hint: `${wp.done}/${wp.total} feitas`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Mês",
					value: String(week.month),
					hint: week.recovery ? "recuperação" : `fase ${week.phase}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
						children: "Semana corrente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: week.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							disabled: !prev,
							"aria-label": "Semana anterior",
							onClick: () => prev && setWeek(prev.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							disabled: !next,
							"aria-label": "Próxima semana",
							onClick: () => next && setWeek(next.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "SMART. "
					}), week.smart]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "Vitrine. "
					}), week.capstoneSlice]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-1.5 overflow-hidden rounded-full bg-bg-inset",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-accent transition-[width] duration-300",
						style: { width: `${Math.round(wp.ratio * 100)}%` }
					})
				})
			]
		}),
		today ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
				children: "Próxima sessão aberta"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionCard, {
				featured: true,
				session: today,
				done: !!completed[today.id],
				onToggle: () => toggleSession(today.id)
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 space-y-2",
			children: week.sessions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggleSession(s.id),
				className: "flex w-full items-start gap-3 rounded-[16px] bg-bg-raised px-3 py-3 text-left shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[6px] border ${completed[s.id] ? "border-accent bg-accent text-accent-fg" : "border-line-strong"}`,
					"aria-hidden": true,
					children: completed[s.id] ? "✓" : ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-fg",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-muted",
						children: [
							s.id,
							" · ",
							s.minutes,
							" min"
						]
					})]
				})]
			}) }, s.id))
		}),
		week.rubric?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-1.5 text-sm text-muted",
			children: week.rubric.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Rubrica — ", r] }, r))
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/semana/$id",
					params: { id: week.id },
					children: ["Abrir a semana", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/livro/$slug",
					params: { slug: "00-contrato" },
					children: "Ler o contrato"
				})
			})]
		})
	] });
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl tabular-nums text-fg",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: hint
			})
		]
	});
}
//#endregion
export { Home as component };
