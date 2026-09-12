---
id: MOD-00.02
ordem: 2
modulo: hubs
status: nao-iniciado
pre-requisitos:
  - MOD-00.01
proxima: "00 Caderno"
anterior: "00 Contrato"
tempo-estimado: 35min
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/teoria
  - status/nao-iniciado
  - nivel/fundamento
---

← [[00 Contrato]] | [[00 Caderno]] →

# Como usar este vault

Pasta única. Navegação por links e tags. Poucos arquivos. Hubs no grafo, o resto não.

## Instalação

1. Copie esta pasta para o vault do Obsidian (ou importe o zip).
2. Ligue os plugins que você já usa: **Tasks**, **Drawing**.
3. Daily notes: use o template em [[00 Caderno]].
4. Não instale 12 plugins hoje. Dataview não é requisito. Checkboxes bastam.

## Contrato de tags

Só estas famílias. Minúsculas. Namespace com `/`.

| Família | Valores |
| --- | --- |
| tipo | `teoria` `pratico` `projeto` `revisao` `fleeting` |
| status | `nao-iniciado` `em-andamento` `bloqueado` `dominado` |
| stack | `go` `js` `ts` `css` `html` `sql` `next` `fastify` `nest` `postgres` |
| camada | `front` `back` `dados` `mobile` `design` |
| nivel | `fundamento` `intermediario` `avancado` `senior` |
| evidencia | `microprojeto` `capstone` `pr` |

Errado: `#next` `#Go` `#importante`. Certo: `#stack/next`.

Status vive no frontmatter **e** na tag. Quando terminar um módulo, os dois mudam.

## Frontmatter mínimo

Toda nota deste kit já nasce com: `id`, `ordem`, `modulo`, `status`, `pre-requisitos`, `proxima`, `anterior`, `tempo-estimado`, `projeto`, `atualizado`, `tags`.

IDs estáveis: `MOD-00.01`, `S12D3`. Daily e caderno citam o id, não o título.

## Como estudar um dia (sem script rígido)

Você pediu para não ter rotina engessada. Então só isto:

1. Abra o [[00 Calendario]] na semana corrente (ou o app Linha).
2. Faça **uma** sessão. 60–90 min. Resultado observável no texto da sessão.
3. Checkbox no [[00 Progresso]] e, se quiser, Tasks.
4. 5–10 min no caderno (papel primeiro, se o TDAH brigar com tela).
5. Pare. Hiperfoco só no buffer da própria semana.

Domingo é caderno + rubrica, não 'adiantar o mês que vem'.

## Modelo de caderno (papel)

Cabeçalho: data · id da sessão · semana.

- Tentei:
- Quebrou:
- Funciona:
- Próxima sessão em uma frase:

Passar a limpo para o vault **uma vez por semana**, não todo dia. Daily do Obsidian só aponta: `Sessão: [[00 Calendario]]#S12` e 3 linhas.

Detalhes em [[00 Caderno]].

## Hiperfoco

Permitido: polish da fatia, trilha design, um capítulo Go atrasado, refino visual.

Proibido: stack nova, segundo capstone, 'assistir um curso de Nest porque apareceu no feed', redesenhar o vault.

Se o hiperfoco passar de 3 h, escreva no caderno o que você *não* vai fazer amanhã para compensar o sono. Você trabalha de noite.

## Inglês com esforço

Recurso canônico por módulo está em inglês na maior parte. Procedimento:

1. Título da página → traduz.
2. Lê o exemplo de código primeiro (isso você já parseia).
3. Parágrafo que não ceder: traduz o parágrafo, não a página inteira.
4. Escreve 3 termos no caderno em PT.

Não existe matéria 'inglês técnico' neste ano (fase 2). Existe este hábito.

## Grafo

Estrele só: [[00 Indice]] [[00 Contrato]] [[00 Calendario]] [[projeto]] [[trilha-go]] [[trilha-design]] e as 7 notas de fase. Se o grafo virar cabelo, você linkou demais.

## Tasks

Na nota de progresso, as linhas `- [ ]` funcionam com o plugin Tasks. Não duplique a tarefa no daily.

## Drawing

Um desenho por mês chega: caixas da arquitetura (front / API / Postgres) ou o pool de goroutines. Data no título do drawing. Linke da nota de fase, não de cada sessão.
