import { ExternalLink } from "lucide-react";
import { DAY_LABEL, sessionKindLabel, type Session } from "@/data/weeks";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const KIND_TONE: Record<Session["kind"], string> = {
  main: "text-fg",
  go: "text-ok",
  design: "text-accent",
  projeto: "text-paper",
  caderno: "text-muted",
  folga: "text-warn",
};

export function SessionCard({
  session,
  done,
  onToggle,
  featured = false,
}: {
  session: Session;
  done: boolean;
  onToggle: () => void;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-[20px] bg-bg-raised p-4 shadow-[var(--shadow-border)]",
        featured && "p-5",
        done && "opacity-60",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {DAY_LABEL[session.day - 1]} · {session.minutes} min ·{" "}
          <span className={KIND_TONE[session.kind]}>{sessionKindLabel(session.kind)}</span>
        </p>
        <span className="font-mono text-[11px] text-faint">{session.id}</span>
      </div>
      <h3 className={cn("mt-2 font-display text-xl text-fg", featured && "text-2xl")}>
        {session.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Você vai saber: {session.outcome}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant={done ? "ghost" : "solid"}
          size="sm"
          onClick={onToggle}
        >
          {done ? "Desmarcar" : "Concluir sessão"}
        </Button>
        {session.resource ? (
          <a
            href={session.resource.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-[8px] px-3 text-sm text-muted hover:text-fg"
          >
            {session.resource.label}
            <ExternalLink className="size-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
