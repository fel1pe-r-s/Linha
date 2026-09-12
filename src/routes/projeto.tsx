import { createFileRoute, Link } from "@tanstack/react-router";
import { capstone, micros } from "@/data/projects";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/projeto")({ component: ProjetoPage });

function ProjetoPage() {
  const cap = useProgress((s) => s.capstone);
  const microDone = useProgress((s) => s.micros);
  const toggleCapstone = useProgress((s) => s.toggleCapstone);
  const toggleMicro = useProgress((s) => s.toggleMicro);

  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Capstone · cresce o ano inteiro
      </p>
      <h1 className="mt-2 font-display text-4xl">{capstone.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{capstone.outcome}</p>
      <p className="mt-2 max-w-2xl text-sm text-muted">{capstone.when}</p>
      <p className="mt-2 font-mono text-xs text-faint">{capstone.repoHint}</p>

      <h2 className="mt-10 font-display text-2xl">Pode</h2>
      <ul className="mt-3 space-y-1 text-sm text-muted">
        {capstone.allowed.map((x) => (
          <li key={x}>— {x}</li>
        ))}
      </ul>
      <h2 className="mt-8 font-display text-2xl">Não pode</h2>
      <ul className="mt-3 space-y-1 text-sm text-muted">
        {capstone.forbidden.map((x) => (
          <li key={x}>— {x}</li>
        ))}
      </ul>

      <h2 className="mt-8 font-display text-2xl">Rubrica v1</h2>
      <ul className="mt-3 space-y-2">
        {capstone.rubric.map((r) => (
          <li key={r}>
            <button
              type="button"
              onClick={() => toggleCapstone(r)}
              className="flex w-full items-start gap-3 rounded-[14px] bg-bg-raised px-3 py-3 text-left text-sm shadow-[var(--shadow-border)]"
            >
              <Box on={!!cap[r]} />
              {r}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm">
        <Link to="/livro/$slug" params={{ slug: "projeto" }} className="text-accent">
          Abrir projeto.md no livro →
        </Link>
      </p>

      <h2 className="mt-12 font-display text-2xl">Micros</h2>
      <div className="mt-4 space-y-3">
        {micros.map((m) => (
          <article key={m.id} className="rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] text-faint">{m.when}</p>
                <h3 className="mt-1 font-display text-xl">{m.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => toggleMicro(m.id)}
                className="flex size-11 shrink-0 items-center justify-center"
                aria-label={`Marcar ${m.title}`}
              >
                <Box on={!!microDone[m.id]} />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted">{m.outcome}</p>
            <p className="mt-2 text-xs text-faint">Pronto quando: {m.rubric.join(" · ")}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

function Box({ on }: { on: boolean }) {
  return (
    <span
      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[6px] border ${
        on ? "border-accent bg-accent text-accent-fg" : "border-line-strong"
      }`}
      aria-hidden
    >
      {on ? "✓" : ""}
    </span>
  );
}
