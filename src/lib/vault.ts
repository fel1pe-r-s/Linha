import { VAULT_FILES, type VaultSlug } from "@/data/meta";

export async function loadVault(slug: VaultSlug): Promise<string> {
  const file = VAULT_FILES.find((f) => f.slug === slug);
  if (!file) throw new Error(`Nota ${slug} não existe.`);
  const res = await fetch(`/vault/${encodeURIComponent(file.file)}`);
  if (!res.ok) throw new Error(`Não achei ${file.file}`);
  return res.text();
}

export function adjacent(slug: VaultSlug) {
  const i = VAULT_FILES.findIndex((f) => f.slug === slug);
  return {
    prev: i > 0 ? VAULT_FILES[i - 1] : null,
    next: i >= 0 && i < VAULT_FILES.length - 1 ? VAULT_FILES[i + 1] : null,
  };
}
