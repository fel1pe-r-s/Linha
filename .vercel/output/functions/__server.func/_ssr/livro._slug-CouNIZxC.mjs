import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as Route$2 } from "./router-CgKSwMh-.mjs";
import { t as Button } from "./button-DTOj-Z_B.mjs";
import { n as VAULT_FILES } from "./meta-D6jsBD4b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/livro._slug-CouNIZxC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function wikiTarget(raw) {
	const [name, alias] = raw.split("|").map((s) => s.trim());
	return {
		slug: VAULT_FILES.find((f) => f.file.replace(/\.md$/, "") === name || f.title === name)?.slug ?? null,
		label: alias || name || raw
	};
}
function inline(text, key) {
	const out = [];
	const re = /(\[\[([^\]]+)\]\]|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*)/g;
	let last = 0;
	let m;
	let i = 0;
	while (m = re.exec(text)) {
		if (m.index > last) out.push(text.slice(last, m.index));
		if (m[2]) {
			const w = wikiTarget(m[2]);
			out.push(w.slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/livro/$slug",
				params: { slug: w.slug },
				className: "text-accent underline decoration-line-strong underline-offset-4",
				children: w.label
			}, `${key}-w${i++}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.label }, `${key}-w${i++}`));
		} else if (m[3] && m[4]) out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: m[4],
			className: "text-accent underline decoration-line-strong underline-offset-4",
			target: "_blank",
			rel: "noreferrer",
			children: m[3]
		}, `${key}-a${i++}`));
		else if (m[5]) out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded-[4px] bg-bg-inset px-1 py-0.5 font-mono text-[0.85em] text-paper",
			children: m[5]
		}, `${key}-c${i++}`));
		else if (m[6]) out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-medium text-fg",
			children: m[6]
		}, `${key}-b${i++}`));
		last = m.index + m[0].length;
	}
	if (last < text.length) out.push(text.slice(last));
	return out;
}
function parseFrontmatter(raw) {
	if (!raw.startsWith("---")) return { body: raw };
	const end = raw.indexOf("\n---", 3);
	if (end < 0) return { body: raw };
	return { body: raw.slice(end + 4).replace(/^\n/, "") };
}
function MarkdownView({ source }) {
	const { body } = parseFrontmatter(source);
	const lines = body.split("\n");
	const nodes = [];
	let i = 0;
	let buf = [];
	const flushP = () => {
		if (!buf.length) return;
		const text = buf.join(" ").trim();
		buf = [];
		if (!text) return;
		nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 text-[1.02rem] leading-relaxed text-fg/90",
			children: inline(text, `p-${i}`)
		}, `p-${i}`));
	};
	while (i < lines.length) {
		const line = lines[i] ?? "";
		if (line.startsWith("```")) {
			flushP();
			const lang = line.slice(3).trim();
			const code = [];
			i += 1;
			while (i < lines.length && !lines[i]?.startsWith("```")) {
				code.push(lines[i] ?? "");
				i += 1;
			}
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mb-5 overflow-x-auto rounded-[16px] bg-bg-inset p-4 font-mono text-[0.82rem] leading-relaxed text-paper shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					"data-lang": lang,
					children: code.join("\n")
				})
			}, `pre-${i}`));
			i += 1;
			continue;
		}
		if (line.startsWith("|")) {
			flushP();
			const rows = [];
			while (i < lines.length && (lines[i] ?? "").trim().startsWith("|")) {
				const row = (lines[i] ?? "").split("|").slice(1, -1).map((c) => c.trim());
				if (!row.every((c) => /^[-:\s]+$/.test(c))) rows.push(row);
				i += 1;
			}
			const head = rows[0] ?? [];
			const rest = rows.slice(1);
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[32rem] border-collapse text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: head.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b border-line-strong px-3 py-2 text-left font-medium text-muted",
						children: inline(c, `th-${idx}`)
					}, idx)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rest.map((r, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: "border-b border-line",
						children: r.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 align-top text-fg/90",
							children: inline(c, `td-${ri}-${ci}`)
						}, ci))
					}, ri)) })]
				})
			}, `t-${i}`));
			continue;
		}
		const heading = /^(#{1,3})\s+(.*)$/.exec(line);
		if (heading) {
			flushP();
			const level = heading[1].length;
			const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
			const cls = level === 1 ? "mb-6 font-display text-4xl text-fg" : level === 2 ? "mb-3 mt-10 font-display text-2xl text-fg" : "mb-2 mt-8 font-display text-xl text-fg";
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: cls,
				children: inline(heading[2] ?? "", `h-${i}`)
			}, `h-${i}`));
			i += 1;
			continue;
		}
		if (line.trim() === "---") {
			flushP();
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-8 border-line" }, `hr-${i}`));
			i += 1;
			continue;
		}
		if (/^\s*[-*]\s+/.test(line)) {
			flushP();
			const items = [];
			while (i < lines.length && /^\s*[-*]\s+/.test(lines[i] ?? "")) {
				const rawItem = (lines[i] ?? "").replace(/^\s*[-*]\s+/, "");
				const check = /^\[([ xX])\]\s+(.*)$/.exec(rawItem);
				if (check) items.push({
					text: check[2] ?? "",
					check: check[1] !== " "
				});
				else items.push({ text: rawItem });
				i += 1;
			}
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mb-5 space-y-2 pl-0",
				children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2 text-[1.02rem] leading-relaxed text-fg/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent/80",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.check !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-mono text-xs text-muted",
						children: item.check ? "[x]" : "[ ]"
					}) : null, inline(item.text, `li-${idx}`)] })]
				}, idx))
			}, `ul-${i}`));
			continue;
		}
		if (!line.trim()) {
			flushP();
			i += 1;
			continue;
		}
		buf.push(line.trim());
		i += 1;
	}
	flushP();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "max-w-prose",
		children: nodes
	});
}
async function loadVault(slug) {
	const file = VAULT_FILES.find((f) => f.slug === slug);
	if (!file) throw new Error(`Nota ${slug} não existe.`);
	const res = await fetch(`/vault/${encodeURIComponent(file.file)}`);
	if (!res.ok) throw new Error(`Não achei ${file.file}`);
	return res.text();
}
function adjacent(slug) {
	const i = VAULT_FILES.findIndex((f) => f.slug === slug);
	return {
		prev: i > 0 ? VAULT_FILES[i - 1] : null,
		next: i >= 0 && i < VAULT_FILES.length - 1 ? VAULT_FILES[i + 1] : null
	};
}
function isSlug(s) {
	return VAULT_FILES.some((f) => f.slug === s);
}
function NotePage() {
	const { slug } = Route$2.useParams();
	const valid = isSlug(slug);
	const file = valid ? VAULT_FILES.find((f) => f.slug === slug) : null;
	const nav = valid ? adjacent(slug) : {
		prev: null,
		next: null
	};
	const [text, setText] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!valid) return;
		let alive = true;
		setText(null);
		setErr(null);
		loadVault(slug).then((t) => {
			if (alive) setText(t);
		}).catch((e) => {
			if (alive) setErr(e instanceof Error ? e.message : "Falha ao ler a nota");
		});
		return () => {
			alive = false;
		};
	}, [slug, valid]);
	if (!valid || !file) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl",
		children: "Nota não existe"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: "mt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/livro",
			children: "Voltar ao livro"
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-center justify-between gap-3 text-sm",
			children: [nav.prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/livro/$slug",
				params: { slug: nav.prev.slug },
				className: "text-muted hover:text-fg",
				children: ["← ", nav.prev.title]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-faint",
				children: "início"
			}), nav.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/livro/$slug",
				params: { slug: nav.next.slug },
				className: "text-muted hover:text-fg",
				children: [nav.next.title, " →"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-faint",
				children: "fim"
			})]
		}),
		err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-danger",
			children: err
		}) : null,
		!text && !err ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-sm text-muted",
			children: [
				"Abrindo ",
				file.file,
				"…"
			]
		}) : null,
		text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownView, { source: text }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 flex items-center justify-between",
			children: [nav.prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/livro/$slug",
					params: { slug: nav.prev.slug },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}),
						" ",
						nav.prev.title
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), nav.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/livro/$slug",
					params: { slug: nav.next.slug },
					children: [
						nav.next.title,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					]
				})
			}) : null]
		})
	] });
}
//#endregion
export { NotePage as component };
