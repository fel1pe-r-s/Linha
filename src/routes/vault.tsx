import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VAULT_FILES } from "@/data/meta";

export const Route = createFileRoute("/vault")({ component: VaultPage });

function VaultPage() {
  return (
    <main>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        Obsidian · pasta única
      </p>
      <h1 className="mt-2 font-display text-4xl">Baixar o vault</h1>
      <p className="mt-3 max-w-xl text-muted">
        Copie o zip para o Obsidian. Tags, frontmatter e ← → já vêm no kit.
        Plugins: Tasks e Drawing. Não precisa de Dataview.
      </p>

      <div className="mt-8">
        <Button asChild>
          <a href="/linha-vault-v1.zip" download>
            <Download />
            linha-vault-v1.zip
          </a>
        </Button>
      </div>

      <h2 className="mt-12 font-display text-2xl">Arquivos</h2>
      <ul className="mt-4 space-y-1">
        {VAULT_FILES.map((f) => (
          <li key={f.slug}>
            <a
              href={`/vault/${encodeURIComponent(f.file)}`}
              download={f.file}
              className="flex items-center justify-between rounded-[12px] px-3 py-3 text-sm hover:bg-bg-raised"
            >
              <span className="font-mono text-muted">{f.file}</span>
              <span className="text-fg">{f.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
