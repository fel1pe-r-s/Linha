import { mkdirSync, writeFileSync, copyFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { weeks, DAY_LABEL, sessionKindLabel } from "../src/data/weeks.ts";

const outDir = join(process.cwd(), "public", "vault");
mkdirSync(outDir, { recursive: true });

function fm(id: string, ordem: number, titleExtra: string): string {
  return `---
id: ${id}
ordem: ${ordem}
modulo: hubs
status: nao-iniciado
pre-requisitos:
  - MOD-00.03
proxima: "00 Progresso"
anterior: "00 Caderno"
tempo-estimado: 52 semanas
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/pratico
  - status/nao-iniciado
---

${titleExtra}
`;
}

const calParts: string[] = [
  fm(
    "MOD-00.05",
    5,
    `← [[00 Caderno]] | [[00 Progresso]] →

# Calendário de 52 semanas

Livro da linha. 1 sessão por dia. Sexta = Go (desde S09) ou design. Sábado = projeto. Domingo = caderno.

Hiperfoco só no buffer da semana. Se atrasar: corte profundidade, não empurre a S52.

`,
  ),
];

for (const week of weeks) {
  const rec = week.recovery ? " · recuperação" : "";
  const pin = week.pin ? ` · ${week.pin}` : "";
  calParts.push(`## ${week.id} · ${week.title}${rec}${pin}`);
  calParts.push("");
  calParts.push(`Mês ${week.month} · fase ${week.phase} · ${week.sessions.reduce((n, s) => n + s.minutes, 0)} min`);
  calParts.push("");
  calParts.push(`**SMART:** ${week.smart}`);
  calParts.push("");
  calParts.push(`**Fatia da Vitrine:** ${week.capstoneSlice}`);
  calParts.push("");
  for (const s of week.sessions) {
    const day = DAY_LABEL[s.day - 1];
    const res = s.resource ? ` · [${s.resource.label}](${s.resource.url})` : "";
    calParts.push(
      `- [ ] ${s.id} · ${day} · ${sessionKindLabel(s.kind)} · ${s.minutes}min · **${s.title}** — Você vai saber: ${s.outcome}${res}`,
    );
  }
  if (week.rubric?.length) {
    calParts.push("");
    calParts.push("Rubrica:");
    for (const r of week.rubric) calParts.push(`- [ ] ${r}`);
  }
  calParts.push("");
  calParts.push("---");
  calParts.push("");
}

writeFileSync(join(outDir, "00 Calendario.md"), calParts.join("\n"), "utf8");

const prog: string[] = [
  `---
id: MOD-00.06
ordem: 6
modulo: hubs
status: nao-iniciado
pre-requisitos:
  - MOD-00.05
proxima: "01 Sistema"
anterior: "00 Calendario"
tempo-estimado: continuo
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/revisao
  - status/nao-iniciado
---

← [[00 Calendario]] | [[01 Sistema]] →

# Progresso

Checkboxes do ano. Plugin Tasks lê estas linhas. O app Linha guarda o mesmo estado no navegador — os dois não sincronizam sozinhos. Domingo: marque aqui.

`,
];

let month = 0;
for (const week of weeks) {
  if (week.month !== month) {
    month = week.month;
    prog.push(`## Mês ${month}`);
    prog.push("");
  }
  prog.push(`### ${week.id} ${week.title}`);
  for (const s of week.sessions) {
    prog.push(`- [ ] ${s.id} ${s.title}`);
  }
  if (week.rubric?.length) {
    for (const r of week.rubric) prog.push(`- [ ] ${week.id} rubrica: ${r}`);
  }
  prog.push("");
}

writeFileSync(join(outDir, "00 Progresso.md"), prog.join("\n"), "utf8");

const vaultRoot = join(process.cwd(), "vault");
mkdirSync(vaultRoot, { recursive: true });
for (const file of readdirSync(outDir)) {
  if (!file.endsWith(".md")) continue;
  copyFileSync(join(outDir, file), join(vaultRoot, file));
}

console.log("vault exported", readdirSync(outDir).length, "files");
