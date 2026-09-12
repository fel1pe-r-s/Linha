import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionCard } from "@/components/session-card";
import { weeks } from "@/data/weeks";
import { PLAN_HOURS, PLAN_VERSION } from "@/data/meta";
import {
  firstOpenSession,
  globalProgress,
  useProgress,
  weekProgress,
} from "@/store/progress";

export const Route = createFileRoute("/")({ component: Home });

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

  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        {PLAN_VERSION} · {PLAN_HOURS} h · 1 h/dia
      </p>
      <h1 className="mt-3 max-w-xl font-display text-4xl text-fg sm:text-5xl">
        Uma linha. Doze meses. Renda no fim.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Plano cru para TDAH e máquina fraca: Next + Fastify + SQL, motion como ofício,
        Go na sexta, Vitrine crescendo em fatias. Sem segundo capstone.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Stat label="Ano" value={`${Math.round(gp.ratio * 100)}%`} hint={`${gp.done}/${gp.total} sessões`} />
        <Stat label="Esta semana" value={week.id} hint={`${wp.done}/${wp.total} feitas`} />
        <Stat label="Mês" value={String(week.month)} hint={week.recovery ? "recuperação" : `fase ${week.phase}`} />
      </div>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Semana corrente
            </p>
            <h2 className="mt-1 font-display text-2xl">{week.title}</h2>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              disabled={!prev}
              aria-label="Semana anterior"
              onClick={() => prev && setWeek(prev.id)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              disabled={!next}
              aria-label="Próxima semana"
              onClick={() => next && setWeek(next.id)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          <span className="text-fg">SMART. </span>
          {week.smart}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          <span className="text-fg">Vitrine. </span>
          {week.capstoneSlice}
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bg-inset">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${Math.round(wp.ratio * 100)}%` }}
          />
        </div>
      </section>

      {today ? (
        <section className="mt-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            Próxima sessão aberta
          </p>
          <SessionCard
            featured
            session={today}
            done={!!completed[today.id]}
            onToggle={() => toggleSession(today.id)}
          />
        </section>
      ) : null}

      <ol className="mt-8 space-y-2">
        {week.sessions.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => toggleSession(s.id)}
              className="flex w-full items-start gap-3 rounded-[16px] bg-bg-raised px-3 py-3 text-left shadow-[var(--shadow-border)]"
            >
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[6px] border ${
                  completed[s.id] ? "border-accent bg-accent text-accent-fg" : "border-line-strong"
                }`}
                aria-hidden
              >
                {completed[s.id] ? "✓" : ""}
              </span>
              <span className="min-w-0">
                <span className="block font-medium text-fg">{s.title}</span>
                <span className="block text-xs text-muted">
                  {s.id} · {s.minutes} min
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      {week.rubric?.length ? (
        <ul className="mt-6 space-y-1.5 text-sm text-muted">
          {week.rubric.map((r) => (
            <li key={r}>Rubrica — {r}</li>
          ))}
        </ul>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/semana/$id" params={{ id: week.id }}>
            Abrir a semana
            <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/livro/$slug" params={{ slug: "00-contrato" }}>
            Ler o contrato
          </Link>
        </Button>
      </div>
    </main>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{label}</p>
      <p className="mt-2 font-display text-3xl tabular-nums text-fg">{value}</p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </div>
  );
}
