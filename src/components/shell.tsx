import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, CheckSquare, FolderGit2, Home, NotebookPen, Package } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Hoje", icon: Home },
  { to: "/livro", label: "Livro", icon: BookOpen },
  { to: "/projeto", label: "Vitrine", icon: FolderGit2 },
  { to: "/caderno", label: "Caderno", icon: NotebookPen },
  { to: "/progresso", label: "Progresso", icon: CheckSquare },
  { to: "/vault", label: "Vault", icon: Package },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-svh bg-bg text-fg">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(184,196,176,0.07),transparent_60%)]" />
      <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-display text-lg tracking-tight text-fg">Linha</span>
            <span className="hidden text-xs text-muted sm:inline">v1.0</span>
          </Link>
          <nav className="flex items-center gap-0.5" aria-label="Seções">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex size-11 items-center justify-center rounded-[12px] text-muted transition-colors duration-150 sm:h-9 sm:w-auto sm:px-2.5 sm:text-sm",
                    active ? "bg-bg-raised text-fg" : "hover:text-fg",
                  )}
                >
                  <Icon className="size-4 sm:mr-1.5" strokeWidth={1.75} />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sr-only sm:hidden">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="relative mx-auto max-w-5xl px-4 py-8 pb-16">{children}</div>
    </div>
  );
}
