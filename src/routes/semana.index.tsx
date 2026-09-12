import { createFileRoute, Link } from "@tanstack/react-router";
import { weeks } from "@/data/weeks";
import { useProgress, weekProgress } from "@/store/progress";

export const Route = createFileRoute("/semana/")({ component: SemanaIndex });

function SemanaIndex() {
  const completed = useProgress((s) => s.completed);
  const current = useProgress((s) => s.currentWeekId);

  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">52 semanas</p>
      <h1 className="mt-2 font-display text-4xl">Calendário</h1>
      <ol className="mt-8 space-y-2">
        {weeks.map((w) => {
          const wp = weekProgress(w.id, completed);
          return (
            <li key={w.id}>
              <Link
                to="/semana/$id"
                params={{ id: w.id }}
                className="flex items-center gap-3 rounded-[16px] bg-bg-raised px-3 py-3 shadow-[var(--shadow-border)]"
              >
                <span className="w-10 font-mono text-xs text-faint">{w.id}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-fg">
                    {w.title}
                    {w.id === current ? " · agora" : ""}
                    {w.recovery ? " · folga" : ""}
                  </span>
                </span>
                <span className="font-mono text-xs tabular-nums text-muted">
                  {wp.done}/{wp.total}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
