---
id: MOD-PROJ-01
ordem: 90
modulo: capstone
status: nao-iniciado
pre-requisitos:
  - MOD-00.01
proxima: "projetos-micro"
anterior: "00 Calendario"
tempo-estimado: 12 meses (fatias)
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/projeto
  - camada/front
  - camada/back
  - evidencia/capstone
  - stack/next
  - stack/fastify
  - stack/postgres
  - nivel/intermediario
  - status/nao-iniciado
---

← [[00 Calendario]] | [[projetos-micro]] →

# projeto.md — Vitrine

Este é o produto real. Links de afiliado para redes (no espírito de um Linktree), com imagens. O clique **sai** para Amazon, Mercado Livre ou o que você cadastrar. Você não vende o produto. Você apresenta e encaminha.

Se a API da plataforma não vier, cola URL da imagem. O plano não depende de OAuth da Amazon no mês 2.

## Frase (preencha na S01)

Para _________________ que _________________, a Vitrine mostra _________________ e o clique vai para _________________.

Nome provisório: **Vitrine** (troque quando tiver nome de verdade; o id `vitrine` permanece).

## O que é must neste ano

- Home com produtos e imagens.
- Página de produto.
- Botão único: ir para a loja oficial.
- Disclaimer de afiliado.
- Admin seu (login) para cadastrar produto.
- Click gravado no Postgres.
- Público (domínio ou URL Vercel).
- Mobile 390.

## O que é depois

- Pagamento do visitante (lab `checkout-1`, outro repo).
- SEO profundo, analytics pesado.
- App nas lojas.
- Ingestão automática perfeita das APIs das plataformas.
- Multi-usuário / SaaS de vitrines.

## Fatia mensal (nunca o projeto todo)

| Mês | Fatia | Você vai saber fazer |
| --- | --- | --- |
| 1 | Nome, 5 refs, 1 tela Figma, JSON de 3 produtos | descrever o produto sem código de framework |
| 2 | Next shell, 3 cards, `/p/[id]`, preview no ar | um site Next fiel ao Figma |
| 3 | Loading/erro, admin falso, testes, **pin 1** | front empregável público |
| 4 | GSAP numa seção, freeze `front-v1` | motion pontual sem quebrar mobile |
| 5 | Contrato HTTP, Fastify lê produtos | desenhar a API e consumir |
| 6 | Postgres, SQL cru, CRUD | persistir sem ORM |
| 7 | Auth, upload, click-out, **pin 2** | admin de verdade |
| 8 | Stats + WS; proto scroll-video isolado | tempo real raso |
| 9 | Home cinematográfica, v1 nas redes, **pin 3** | produto no mundo |
| 10 | Só bugfix na Vitrine (Nest/Go são labs) | não reescrever no pico de ansiedade |
| 11 | PWA + APK debug | binário no portfólio |
| 12 | Case study, freeze, oferta | renda em cima do que existe |

## Stack permitida

Next App Router, TS, CSS vars + Tailwind, Framer, GSAP, Fastify, Postgres, SQL files, Better Auth ou sessão em cookie, Neon, Vercel, host burro da API, PWA, Capacitor.

## Stack proibida neste repo

Nest, Prisma/Drizzle no ano 1, Express de produção, RN, Ionic UI, Redis, GraphQL, CMS.

## Rubrica da v1 (mês 9)

- [ ] URL pública
- [ ] 3+ produtos reais que você promoveria
- [ ] Clique abre a loja oficial
- [ ] Clique aparece na tabela
- [ ] Admin com senha
- [ ] Disclaimer
- [ ] 390px sem overflow
- [ ] README cru
- [ ] Você mandou o link para alguém de verdade

## Arquitetura alvo (mês 7)

```
[browser] → Next (Vercel)
                ↓
            Fastify (host)
                ↓
            Postgres (Neon)
```

Mês 2–4 o Next ainda lê JSON/arquivo. Extraia a API no mês 5, não antes — senão o projeto fica grande cedo.

## APIs Amazon / ML

Tente. Se a porta fechar: imagem hospedada + URL de afiliado colada. Documente o corte. O visitante não se importa com a sua integração.

## Critério anti-abandono

Se uma ideia nova não cabe na fatia da semana, ela vai para [[fase-2]] ou morre. A Vitrine não é o depósito das suas inseguranças de stack.
