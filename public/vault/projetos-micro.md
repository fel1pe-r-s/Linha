---
id: MOD-PROJ-02
ordem: 91
modulo: capstone
status: nao-iniciado
pre-requisitos:
  - MOD-PROJ-01
proxima: "trilha-go"
anterior: "projeto"
tempo-estimado: varia
projeto: micros
atualizado: 2026-09-12
tags:
  - tipo/projeto
  - evidencia/microprojeto
  - status/nao-iniciado
---

← [[projeto]] | [[trilha-go]] →

# Microprojetos

Projetos abertos, bem definidos. Se passar da rubrica, você está inchando. Rubrica verde = pronto. Polir depois só em hiperfoco da mesma semana.

Copie o bloco `_template` no fim se nascer um micro extra (não nasça).

## Landing vanilla · S02–S04

- **Você vai saber fazer:** layout Grid/Flex responsivo, filtro em JS, `Product` tipado, sem React.
- **Pode:** HTML, CSS, TS, GitHub Pages.
- **Não pode:** React, Next, Tailwind, GSAP.
- **Pronto quando:** 390px ok, 3 produtos, filtro, README + print.
- Repo: `landing-vanilla`. Não vira a Vitrine.

## Shell Next · S05–S08

- **Você vai saber fazer:** App Router, `ProductCard`, `/p/[id]`, deploy de preview.
- **Não pode:** banco, auth, GSAP (GSAP é S13).
- **Pronto quando:** URL no ar, zero `any`.
- Repo: `vitrine`.

## Cards com presença · S10

- **Você vai saber fazer:** stagger Framer/Motion + reduced-motion.
- **Não pode:** bounce eterno, animar layout pesado.
- **Pronto quando:** take de 10s no Android no README.

## http.Server · S17

- **Você vai saber fazer:** duas rotas JSON em `node:http`.
- **Não pode:** Express, Fastify neste repo.
- Repo: `labs/http-cru`.

## Express mini · S18

- **Você vai saber fazer:** reconhecer Express legado (CRUD memória).
- **Não pode:** usar na Vitrine.
- README precisa da palavra **legado**.

## Fastify da Vitrine · S18–S28

- **Você vai saber fazer:** plugin, schema, SQL cru, click-out, testes `inject`.
- **Não pode:** ORM, Nest.
- **Pronto quando:** pin 2.

## checkout-1 · S29

- **Você vai saber fazer:** Stripe test + PIX copiável + webhook idempotente.
- **Não pode:** grudar na Vitrine.
- README abre com: afiliado ≠ checkout.

## Scroll-video · S31–S33

- **Você vai saber fazer:** clip 3–6s no scroll, fallback, orçamento de KB, Android usável.
- **Pode:** GSAP, spritesheet/canvas, IA para o material.
- **Não pode:** prender scroll, WebGL obrigatório.
- **Pronto quando:** URL + take 15s.

## Three lab · S34

- **Você vai saber fazer:** 1 cena, dispose no unmount.
- **Não pode:** 40MB de modelo, virar hero por vaidade.
- README de 8 linhas.

## nest-lab · S37–S39

- **Você vai saber fazer:** module, controller, provider, DTO, guard. Explicar em 2 min numa vaga.
- **Não pode:** reescrever a Vitrine.

## go-catalog · S40–S43

- **Você vai saber fazer:** Gin + SQL + teste + um pool de goroutines pequeno.
- **Não pode:** segundo capstone.
- README declara nível: não sênior.

## PWA + Capacitor · S41–S42

- **Você vai saber fazer:** ícone na tela inicial Android + APK debug.
- **Não pode:** Ionic UI, Play Store, RN.

---

## _template-projeto

```
---
id: MOD-PROJ-XX
status: nao-iniciado
projeto:
tags:
  - tipo/projeto
  - evidencia/microprojeto
---

# Título

Quando:
Você vai saber fazer:
Pode:
Não pode:
Rubrica:
- [ ]
Repo:
```
