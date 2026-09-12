import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { VAULT_FILES, type VaultSlug } from "@/data/meta";

function wikiTarget(raw: string): { slug: VaultSlug | null; label: string } {
  const [name, alias] = raw.split("|").map((s) => s.trim());
  const found = VAULT_FILES.find(
    (f) => f.file.replace(/\.md$/, "") === name || f.title === name,
  );
  return { slug: found?.slug ?? null, label: alias || name || raw };
}

function inline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\[\[([^\]]+)\]\]|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[2]) {
      const w = wikiTarget(m[2]);
      out.push(
        w.slug ? (
          <Link
            key={`${key}-w${i++}`}
            to="/livro/$slug"
            params={{ slug: w.slug }}
            className="text-accent underline decoration-line-strong underline-offset-4"
          >
            {w.label}
          </Link>
        ) : (
          <span key={`${key}-w${i++}`}>{w.label}</span>
        ),
      );
    } else if (m[3] && m[4]) {
      out.push(
        <a
          key={`${key}-a${i++}`}
          href={m[4]}
          className="text-accent underline decoration-line-strong underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {m[3]}
        </a>,
      );
    } else if (m[5]) {
      out.push(
        <code
          key={`${key}-c${i++}`}
          className="rounded-[4px] bg-bg-inset px-1 py-0.5 font-mono text-[0.85em] text-paper"
        >
          {m[5]}
        </code>,
      );
    } else if (m[6]) {
      out.push(
        <strong key={`${key}-b${i++}`} className="font-medium text-fg">
          {m[6]}
        </strong>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function parseFrontmatter(raw: string) {
  if (!raw.startsWith("---")) return { body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end < 0) return { body: raw };
  return { body: raw.slice(end + 4).replace(/^\n/, "") };
}

export function MarkdownView({ source }: { source: string }) {
  const { body } = parseFrontmatter(source);
  const lines = body.split("\n");
  const nodes: ReactNode[] = [];
  let i = 0;
  let buf: string[] = [];

  const flushP = () => {
    if (!buf.length) return;
    const text = buf.join(" ").trim();
    buf = [];
    if (!text) return;
    nodes.push(
      <p key={`p-${i}`} className="mb-4 text-[1.02rem] leading-relaxed text-fg/90">
        {inline(text, `p-${i}`)}
      </p>,
    );
  };

  while (i < lines.length) {
    const line = lines[i] ?? "";

    if (line.startsWith("```")) {
      flushP();
      const lang = line.slice(3).trim();
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i]?.startsWith("```")) {
        code.push(lines[i] ?? "");
        i += 1;
      }
      nodes.push(
        <pre
          key={`pre-${i}`}
          className="mb-5 overflow-x-auto rounded-[16px] bg-bg-inset p-4 font-mono text-[0.82rem] leading-relaxed text-paper shadow-[var(--shadow-border)]"
        >
          <code data-lang={lang}>{code.join("\n")}</code>
        </pre>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("|")) {
      flushP();
      const rows: string[][] = [];
      while (i < lines.length && (lines[i] ?? "").trim().startsWith("|")) {
        const row = (lines[i] ?? "")
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!row.every((c) => /^[-:\s]+$/.test(c))) rows.push(row);
        i += 1;
      }
      const head = rows[0] ?? [];
      const rest = rows.slice(1);
      nodes.push(
        <div key={`t-${i}`} className="mb-5 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr>
                {head.map((c, idx) => (
                  <th
                    key={idx}
                    className="border-b border-line-strong px-3 py-2 text-left font-medium text-muted"
                  >
                    {inline(c, `th-${idx}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rest.map((r, ri) => (
                <tr key={ri} className="border-b border-line">
                  {r.map((c, ci) => (
                    <td key={ci} className="px-3 py-2 align-top text-fg/90">
                      {inline(c, `td-${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      flushP();
      const level = heading[1].length;
      const Tag = (level === 1 ? "h1" : level === 2 ? "h2" : "h3") as "h1" | "h2" | "h3";
      const cls =
        level === 1
          ? "mb-6 font-display text-4xl text-fg"
          : level === 2
            ? "mb-3 mt-10 font-display text-2xl text-fg"
            : "mb-2 mt-8 font-display text-xl text-fg";
      nodes.push(
        <Tag key={`h-${i}`} className={cls}>
          {inline(heading[2] ?? "", `h-${i}`)}
        </Tag>,
      );
      i += 1;
      continue;
    }

    if (line.trim() === "---") {
      flushP();
      nodes.push(<hr key={`hr-${i}`} className="my-8 border-line" />);
      i += 1;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      flushP();
      const items: { text: string; check?: boolean }[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i] ?? "")) {
        const rawItem = (lines[i] ?? "").replace(/^\s*[-*]\s+/, "");
        const check = /^\[([ xX])\]\s+(.*)$/.exec(rawItem);
        if (check) items.push({ text: check[2] ?? "", check: check[1] !== " " });
        else items.push({ text: rawItem });
        i += 1;
      }
      nodes.push(
        <ul key={`ul-${i}`} className="mb-5 space-y-2 pl-0">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-2 text-[1.02rem] leading-relaxed text-fg/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
              <span>
                {item.check !== undefined ? (
                  <span className="mr-2 font-mono text-xs text-muted">
                    {item.check ? "[x]" : "[ ]"}
                  </span>
                ) : null}
                {inline(item.text, `li-${idx}`)}
              </span>
            </li>
          ))}
        </ul>,
      );
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

  return <article className="max-w-prose">{nodes}</article>;
}
