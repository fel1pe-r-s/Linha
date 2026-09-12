import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ExternalLink } from "../_libs/lucide-react.mjs";
import { i as cn } from "./router-CgKSwMh-.mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { r as sessionKindLabel, t as DAY_LABEL } from "./weeks-C2aOtEIw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-card-D7GWL3w3.js
var import_jsx_runtime = require_jsx_runtime();
var KIND_TONE = {
	main: "text-fg",
	go: "text-ok",
	design: "text-accent",
	projeto: "text-paper",
	caderno: "text-muted",
	folga: "text-warn"
};
function SessionCard({ session, done, onToggle, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]", featured && "p-5", done && "opacity-60"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.14em] text-faint",
					children: [
						DAY_LABEL[session.day - 1],
						" · ",
						session.minutes,
						" min ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: KIND_TONE[session.kind],
							children: sessionKindLabel(session.kind)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] text-faint",
					children: session.id
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("mt-2 font-display text-xl text-fg", featured && "text-2xl"),
				children: session.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: ["Você vai saber: ", session.outcome]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: done ? "ghost" : "solid",
					size: "sm",
					onClick: onToggle,
					children: done ? "Desmarcar" : "Concluir sessão"
				}), session.resource ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: session.resource.url,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex h-9 items-center gap-1.5 rounded-[8px] px-3 text-sm text-muted hover:text-fg",
					children: [session.resource.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				}) : null]
			})
		]
	});
}
//#endregion
export { SessionCard as t };
