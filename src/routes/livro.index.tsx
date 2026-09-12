import { createFileRoute, Link } from "@tanstack/react-router";
import { VAULT_FILES } from "@/data/meta";
import { phases } from "@/data/weeks";

export const Route = createFileRoute("/livro/")({ component: LivroIndex });

function LivroIndex() {
  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Livro · navegação linear
      </p>
      <h1 className="mt-2 font-display text-4xl">Notas do vault</h1>
      <p className="mt-3 max-w-xl text-muted">
        Mesmas notas do Obsidian. ← anterior / próxima → no topo de cada uma.
        Hubs primeiro; fases depois.
      </p>

      <ol className="mt-8 space-y-2">
        {VAULT_FILES.map((f, i) => (
          <li key={f.slug}>
            <Link
              to="/livro/$slug"
              params={{ slug: f.slug }}
              className="flex items-baseline justify-between gap-3 rounded-[16px] bg-bg-raised px-4 py-3 shadow-[var(--shadow-border)]"
            >
              <span>
                <span className="font-mono text-[11px] text-faint">{String(i).padStart(2, "0")}</span>
                <span className="ml-3 text-fg">{f.title}</span>
              </span>
              {f.hub ? <span className="font-mono text-[11px] text-accent">hub</span> : null}
            </Link>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-display text-2xl">Fases</h2>
      <ul className="mt-4 space-y-3">
        {phases.map((p) => (
          <li key={p.n} className="rounded-[16px] bg-bg-raised p-4 shadow-[var(--shadow-border)]">
            <p className="font-mono text-[11px] text-faint">
              Fase {p.n} · {p.months}
            </p>
            <Link
              to="/livro/$slug"
              params={{ slug: p.slug }}
              className="mt-1 block font-display text-xl text-fg"
            >
              {p.title}
            </Link>
            <p className="mt-1 text-sm text-muted">{p.intent}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
