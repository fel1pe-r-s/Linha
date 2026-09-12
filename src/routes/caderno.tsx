import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { weeks } from "@/data/weeks";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/caderno")({ component: CadernoPage });

function CadernoPage() {
  const currentWeekId = useProgress((s) => s.currentWeekId);
  const entries = useProgress((s) => s.caderno);
  const addCaderno = useProgress((s) => s.addCaderno);
  const removeCaderno = useProgress((s) => s.removeCaderno);
  const [tried, setTried] = useState("");
  const [broke, setBroke] = useState("");
  const [works, setWorks] = useState("");
  const [next, setNext] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!tried.trim() && !works.trim()) return;
    addCaderno({
      date: new Date().toISOString().slice(0, 10),
      weekId: currentWeekId,
      tried: tried.trim(),
      broke: broke.trim(),
      works: works.trim(),
      next: next.trim(),
    });
    setTried("");
    setBroke("");
    setWorks("");
    setNext("");
  }

  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Papel primeiro · vault depois
      </p>
      <h1 className="mt-2 font-display text-4xl">Caderno</h1>
      <p className="mt-3 max-w-xl text-muted">
        Modelo de revisão para caderno. O papel ganha quando o TDAH abrir doze abas.
        Aqui fica a cópia semanal, não a teoria.
      </p>

      <form
        onSubmit={submit}
        className="mt-8 space-y-4 rounded-[24px] bg-bg-raised p-5 shadow-[var(--shadow-border)]"
      >
        <p className="font-mono text-xs text-faint">
          Semana {currentWeekId} · {weeks.find((w) => w.id === currentWeekId)?.title}
        </p>
        <Field label="Tentei" value={tried} onChange={setTried} />
        <Field label="Quebrou" value={broke} onChange={setBroke} />
        <Field label="Funciona (a regra, não o feeling)" value={works} onChange={setWorks} />
        <Field label="Próxima sessão em uma frase" value={next} onChange={setNext} />
        <Button type="submit">Guardar página</Button>
      </form>

      <ol className="mt-10 space-y-4">
        {entries.length === 0 ? (
          <p className="text-sm text-muted">Nenhuma página digital ainda. Domingo basta.</p>
        ) : (
          entries.map((e) => (
            <li key={e.id} className="rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-xs text-faint">
                  {e.date} · {e.weekId}
                </p>
                <button
                  type="button"
                  className="h-11 text-xs text-muted hover:text-danger"
                  onClick={() => removeCaderno(e.id)}
                >
                  Apagar
                </button>
              </div>
              {e.tried ? <Line k="Tentei" v={e.tried} /> : null}
              {e.broke ? <Line k="Quebrou" v={e.broke} /> : null}
              {e.works ? <Line k="Funciona" v={e.works} /> : null}
              {e.next ? <Line k="Próxima" v={e.next} /> : null}
            </li>
          ))
        )}
      </ol>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="mt-1 w-full rounded-[12px] bg-bg-inset px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/70"
      />
    </label>
  );
}

function Line({ k, v }: { k: string; v: string }) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-fg/90">
      <span className="text-muted">{k}. </span>
      {v}
    </p>
  );
}
