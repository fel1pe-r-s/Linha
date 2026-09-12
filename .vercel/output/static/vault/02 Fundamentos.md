---
id: MOD-02
ordem: 11
modulo: fase-1
status: nao-iniciado
pre-requisitos:
  - MOD-01
proxima: "03 Next e Design"
anterior: "01 Sistema"
tempo-estimado: 3 semanas
projeto: landing-vanilla
atualizado: 2026-09-12
tags:
  - tipo/pratico
  - stack/html
  - stack/css
  - stack/js
  - stack/ts
  - camada/front
  - nivel/fundamento
  - evidencia/microprojeto
  - status/nao-iniciado
---

← [[01 Sistema]] | [[03 Next e Design]] →

# Fase 1 · Fundamentos

MOC: S02 CSS · S03 JS · S04 TS + Figma 1 tela · micro [[projetos-micro]]

Você já é nível 2. Isto não é curso de tag `div`. É fechar buraco: layout que não quebra, JS assíncrono que você explica, TS estrito, 2–3 semanas vanilla e **aí** Next (foi o que você pediu).

## Você vai saber fazer

Uma landing sem React, responsiva, com produtos tipados e filtro. Uma tela no Figma que não é lorem cinza.

## Recursos canônicos

- CSS: [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- JS: [javascript.info](https://javascript.info/)
- TS: [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- Figma: [Get started](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)

Um recurso por tema. Se abrir YouTube, está saindo da linha.

## S02 · CSS

Box model, cascade, Flex, Grid, `clamp()`, custom properties. Teste em 390px. Overflow horizontal = sessão incompleta.

Não use Tailwind ainda. Você disse que já usou os dois; agora o token é seu, não da lib.

## S03 · JS

Módulos ESM, DOM sem listener duplicado, event loop desenhada no caderno, `fetch` + `async/await` com erro visível. JSON de 3 produtos.

## S04 · TS + Figma

`strict: true`. `Product | null` sem `!`. Tela 390 e 1280 da home. Type: 1 display + 1 body. Paleta de 4 cores. Isso alimenta a [[trilha-design]].

## Anti-isca

Não instale React no sábado da S03 porque 'já sei vanilla'. A rubrica do mês 1 é vanilla de propósito. Next é S05.

## Rubrica mês 1

- [ ] Landing no GitHub
- [ ] 390px sem scroll horizontal
- [ ] `Product` tipado
- [ ] 1 tela Figma
- [ ] Event loop em 8 linhas no caderno
