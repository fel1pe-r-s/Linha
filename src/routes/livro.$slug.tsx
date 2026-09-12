import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MarkdownView } from "@/components/markdown-view";
import { Button } from "@/components/ui/button";
import { VAULT_FILES, type VaultSlug } from "@/data/meta";
import { adjacent, loadVault } from "@/lib/vault";

export const Route = createFileRoute("/livro/$slug")({
  component: NotePage,
});

function isSlug(s: string): s is VaultSlug {
  return VAULT_FILES.some((f) => f.slug === s);
}

function NotePage() {
  const { slug } = Route.useParams();
  const valid = isSlug(slug);
  const file = valid ? VAULT_FILES.find((f) => f.slug === slug) : null;
  const nav = valid ? adjacent(slug) : { prev: null, next: null };
  const [text, setText] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!valid) return;
    let alive = true;
    setText(null);
    setErr(null);
    loadVault(slug)
      .then((t) => {
        if (alive) setText(t);
      })
      .catch((e: unknown) => {
        if (alive) setErr(e instanceof Error ? e.message : "Falha ao ler a nota");
      });
    return () => {
      alive = false;
    };
  }, [slug, valid]);

  if (!valid || !file) {
    return (
      <main>
        <h1 className="font-display text-3xl">Nota não existe</h1>
        <Button asChild className="mt-6">
          <Link to="/livro">Voltar ao livro</Link>
        </Button>
      </main>
    );
  }

  return (
    <main>
      <div className="mb-8 flex items-center justify-between gap-3 text-sm">
        {nav.prev ? (
          <Link
            to="/livro/$slug"
            params={{ slug: nav.prev.slug }}
            className="text-muted hover:text-fg"
          >
            ← {nav.prev.title}
          </Link>
        ) : (
          <span className="text-faint">início</span>
        )}
        {nav.next ? (
          <Link
            to="/livro/$slug"
            params={{ slug: nav.next.slug }}
            className="text-muted hover:text-fg"
          >
            {nav.next.title} →
          </Link>
        ) : (
          <span className="text-faint">fim</span>
        )}
      </div>

      {err ? <p className="text-danger">{err}</p> : null}
      {!text && !err ? (
        <p className="font-mono text-sm text-muted">Abrindo {file.file}…</p>
      ) : null}
      {text ? <MarkdownView source={text} /> : null}

      <div className="mt-12 flex items-center justify-between">
        {nav.prev ? (
          <Button asChild variant="ghost">
            <Link to="/livro/$slug" params={{ slug: nav.prev.slug }}>
              <ArrowLeft /> {nav.prev.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {nav.next ? (
          <Button asChild variant="ghost">
            <Link to="/livro/$slug" params={{ slug: nav.next.slug }}>
              {nav.next.title} <ArrowRight />
            </Link>
          </Button>
        ) : null}
      </div>
    </main>
  );
}
