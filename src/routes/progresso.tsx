import { createFileRoute, Link } from "@tanstack/react-router";
import { weeks } from "@/data/weeks";
import { Button } from "@/components/ui/button";
import { globalProgress, useProgress, weekProgress } from "@/store/progress";

export const Route = createFileRoute("/progresso")({ component: ProgressPage });

function ProgressPage() {
  const completed = useProgress((s) => s.completed);
  const setWeek = useProgress((s) => s.setWeek);
  const reset = useProgress((s) => s.reset);
  const gp = globalProgress(completed);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Checkboxes · não minta para a rubrica
      </p>
      <h1 className="mt-2 font-display text-4xl">Progresso</h1>
      <p className="mt-3 text-muted">
        {gp.done} de {gp.total} sessões · {Math.round(gp.ratio * 100)}%
      </p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-bg-inset">
        <div className="h-full bg-accent" style={{ width: `${Math.round(gp.ratio * 100)}%` }} />
      </div>

      <div className="mt-10 space-y-8">
        {months.map((m) => {
          const list = weeks.filter((w) => w.month === m);
          return (
            <section key={m}>
              <h2 className="font-display text-2xl">Mês {m}</h2>
              <ul className="mt-3 space-y-2">
                {list.map((w) => {
                  const wp = weekProgress(w.id, completed);
                  return (
                    <li key={w.id}>
                      <Link
                        to="/semana/$id"
                        params={{ id: w.id }}
                        onClick={() => setWeek(w.id)}
                        className="flex items-center gap-3 rounded-[16px] bg-bg-raised px-3 py-3 shadow-[var(--shadow-border)]"
                      >
                        <span className="w-10 font-mono text-xs text-faint">{w.id}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm text-fg">{w.title}</span>
                          <span className="mt-1 block h-1 overflow-hidden rounded-full bg-bg-inset">
                            <span
                              className="block h-full bg-accent"
                              style={{ width: `${Math.round(wp.ratio * 100)}%` }}
                            />
                          </span>
                        </span>
                        <span className="font-mono text-xs tabular-nums text-muted">
                          {wp.done}/{wp.total}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="mt-12">
        <Button
          variant="ghost"
          onClick={() => {
            if (confirm("Zerar progresso deste navegador?")) reset();
          }}
        >
          Zerar progresso local
        </Button>
      </div>
    </main>
  );
}
