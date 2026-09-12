---
id: MOD-03
ordem: 12
modulo: fase-2
status: nao-iniciado
pre-requisitos:
  - MOD-02
proxima: "04 Backend"
anterior: "02 Fundamentos"
tempo-estimado: 12 semanas (S05–S16)
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/pratico
  - stack/next
  - stack/ts
  - stack/css
  - camada/front
  - camada/design
  - nivel/intermediario
  - evidencia/capstone
  - evidencia/pr
  - status/nao-iniciado
---

← [[02 Fundamentos]] | [[04 Backend]] →

# Fase 2 · Next e design

MOC: S05–S08 shell · S09 dados + **Go começa** · S10 Framer · S11 admin falso · S12 **pin 1** · S13 GSAP · S14 copy · S15 eletiva/buraco · S16 recuperação

Esta fase é a mais empregável do ano no Brasil: Next + TS + um site no ar. Design não é enfeite; é o diferencial que você pediu. Go entra 1h na sexta a partir da S09 — [[trilha-go]].

## Você vai saber fazer

App Router, server vs client, tokens do Figma no código, motion com critério, testes rasos, README honesto, URL pública.

## Recurso canônico

[Next.js Docs](https://nextjs.org/docs) — App Router. Não misture páginas do Pages Router de tutorial velho.

Apoio: [Tailwind](https://tailwindcss.com/docs) só depois dos tokens, [Motion](https://motion.dev/docs), [GSAP](https://gsap.com/docs/v3/), [Vitest](https://vitest.dev/guide/), [Playwright](https://playwright.dev/docs/intro).

## Tailwind em fases

Fase 1 (S06): utilities de layout. Cores = CSS vars.
Fase 2 (S07): `@theme` aponta para os tokens da Vitrine. Cor mágica no JSX = regressão.

## Server vs client (grave isto)

Default: servidor. `'use client'` só no componente que tem onClick, motion ou campo. Se o arquivo inteiro virar client porque você teve preguiça, o Next vira CRA com propaganda.

## Pin 1 (S12)

Requisito de fase. Repo público, URL, 2 testes Vitest, 1 smoke Playwright, README com o que **não** está pronto. Se o Playwright falhar, o pin espera. Ego não entra na rubrica.

## GSAP (S13)

Uma seção. ScrollTrigger com cleanup. Mobile. Reduced-motion. Não 'gsap no site todo'.

## S16 é folga

Está no plano. TDAH e noite. Quem estuda 52 sábados seguidos sem recuperação abandona no mês 5 — você já fez isso.

## Rubrica pin 1

- [ ] URL pública
- [ ] README cru
- [ ] Vitest + Playwright verdes
- [ ] 390px
- [ ] Pin no GitHub

## Rubrica freeze front-v1 (S15)

- [ ] Tag git
- [ ] Contrato da API escrito em [[projeto]] (paths), mesmo ainda sem Fastify
