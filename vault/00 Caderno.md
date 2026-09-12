---
id: MOD-00.03
ordem: 3
modulo: hubs
status: nao-iniciado
pre-requisitos:
  - MOD-00.02
proxima: "00 Calendario"
anterior: "00 Como usar"
tempo-estimado: 20min
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/revisao
  - status/nao-iniciado
  - nivel/fundamento
---

← [[00 Como usar]] | [[00 Calendario]] →

# Caderno e daily

Você pediu modelo de anotação e revisão para **caderno**, não spaced repetition no Obsidian. Papel ganha da tela quando o TDAH abrir 12 abas.

## Página do dia (papel, 5–10 min)

```
DATA: ____    SEMANA: S__    SESSÃO: S__D_
MÓDULO: _______________________

TENTEI
-

QUEBROU
-

FUNCIONA (escreve a regra, não o feeling)
-

PRÓXIMA SESSÃO EM UMA FRASE
-
```

Se a sessão for de projeto, acrescente:

```
EVIDÊNCIA (URL, print, commit)
-
```

## Revisão de domingo (papel + vault)

15–25 min.

1. Relê as 6–7 páginas da semana.
2. Copia **só as regras que funcionam** para uma nota `fleeting` da semana, ou para o próprio calendário.
3. Marca a rubrica do [[00 Progresso]] se for marco mensal.
4. Uma frase: 'semana que vem eu começo em S__D__'.

Não reescreva o capítulo da fase. O vault já é o livro. O caderno é o atrito.

## Daily no Obsidian (template)

Cole isto no template de daily note:

```
---
id: DAILY-{{date}}
modulo: daily
status: em-andamento
semana:
sessao:
tags:
  - tipo/fleeting
  - status/em-andamento
---

← diário

# {{date}}

Semana: [[00 Calendario]]
Sessão:
Capstone (fatia de hoje, uma linha):

Caderno (3 linhas):
-

Amanhã:
```

O daily **não** é o lugar da teoria. Se você começar a copiar MDN para o daily, parou de seguir o plano.

## Revisão mensal

No domingo da semana de marco (S04, S08, S12, S20, S24, S28, S32, S36, S40, S44, S48):

- Rubrica verde ou corte declarado no [[00 Changelog]].
- Um drawing da arquitetura se ela mudou.
- Pin do GitHub, se a fase pede.

## O que não vai para o caderno

- Tutorial inteiro.
- 'Assistir depois'.
- Lista de 40 features da Vitrine.

Isso é como você abandonou da última vez. A fatia da semana já está no calendário.
