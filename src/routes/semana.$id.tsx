import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionCard } from "@/components/session-card";
import { weeks } from "@/data/weeks";
import { useProgress, weekProgress } from "@/store/progress";

export const Route = createFileRoute("/semana/$id")({
  component: WeekPage,
});

function WeekPage() {
  const { id } = Route.useParams();
  const week = weeks.find((w) => w.id.toLowerCase() === id.toLowerCase());
  const completed = useProgress((s) => s.completed);
  const toggleSession = useProgress((s) => s.toggleSession);
  const setWeek = useProgress((s) => s.setWeek);

  if (!week) {
    return (
      <main>
        <h1 className="font-display text-3xl">Semana não existe</h1>
        <p className="mt-2 text-muted">Use S01 a S52.</p>
        <Button asChild className="mt-6">
          <Link to="/semana">Ver calendário</Link>
        </Button>
      </main>
    );
  }

  const wp = weekProgress(week.id, completed);
  const idx = weeks.findIndex((w) => w.id === week.id);
  const prev = idx > 0 ? weeks[idx - 1] : null;
  const next = idx < weeks.length - 1 ? weeks[idx + 1] : null;

  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Mês {week.month} · fase {week.phase}
        {week.recovery ? " · recuperação" : ""}
        {week.pin ? ` · ${week.pin}` : ""}
      </p>
      <h1 className="mt-2 font-display text-4xl">
        {week.id} · {week.title}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{week.smart}</p>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        <span className="text-fg">Fatia da Vitrine. </span>
        {week.capstoneSlice}
      </p>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-bg-inset">
        <div
          className="h-full bg-accent"
          style={{ width: `${Math.round(wp.ratio * 100)}%` }}
        />
      </div>
      <div className="mt-4">
        <Button size="sm" variant="ghost" onClick={() => setWeek(week.id)}>
          Marcar como semana corrente
        </Button>
      </div>

      <div className="mt-8 space-y-3">
        {week.sessions.map((s) => (
          <SessionCard
            key={s.id}
            session={s}
            done={!!completed[s.id]}
            onToggle={() => toggleSession(s.id)}
          />
        ))}
      </div>

      {week.rubric?.length ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl">Rubrica</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {week.rubric.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-accent">—</span>
                {r}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-10 flex items-center justify-between gap-3">
        {prev ? (
          <Button asChild variant="ghost">
            <Link to="/semana/$id" params={{ id: prev.id }}>
              <ArrowLeft /> {prev.id}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild variant="ghost">
            <Link to="/semana/$id" params={{ id: next.id }}>
              {next.id} <ArrowRight />
            </Link>
          </Button>
        ) : null}
      </div>
    </main>
  );
}
