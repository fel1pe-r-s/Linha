---
id: MOD-00.01
ordem: 1
modulo: hubs
status: dominado
pre-requisitos:
  - MOD-00.00
proxima: "00 Como usar"
anterior: "00 Indice"
tempo-estimado: 40min
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/teoria
  - status/dominado
  - nivel/fundamento
---

← [[00 Indice]] | [[00 Como usar]] →

# Contrato da linha v1.0

Leia isto uma vez. Volte quando der vontade de 'só adicionar Nest na Vitrine' ou 'estudar as 4 coisas hoje'.

## Quem você é neste vault

Nível real: HTML 2, CSS 2, JS 2, TS 1, SQL 1, Go 0, Git 1. Já publicou algo em Next+TS. ADS em curso. Inglês com esforço. Vault bagunçado. Windows 10 + Zorin, máquina fraca, Android. Trabalha de noite. 1 hora todos os dias. TDAH, energia irregular, hiperfoco. Abandona quando o projeto fica grande. Já abandonou estudo por trabalhar demais e não saber o que fazer em seguida.

Objetivo de 12 meses: **renda**. Ordem que você deu: produto próprio → freelance → vaga. Empregável em 1 ano. Portfólio + GitHub. Mercado BR e remoto.

## A conta que o marketing de curso esconde

1 h × 365 dias = **365 horas**. Um bootcamp decente pede 600–1000. Sênior de Go não cabe. Web + mobile nativo + Nest profundo + Fastify profundo + Three/WebGL + sênior SQL também não.

Este plano cabe em 365 h porque **corta**. Você autorizou o corte (9.2). Se atrasar, corta profundidade, não alonga o calendário (3.6). Prazo de renda é inegociável (9.9).

## Decisões fechadas

| Tema | Canônico neste vault | Fora da linha / fase 2 |
| --- | --- | --- |
| UI | React | Vue/Svelte |
| App | Next.js App Router | Vite só em micro-experimento |
| CSS | Tokens crus → Tailwind em fases | Framework CSS paralelo |
| Motion produção | GSAP + Framer Motion | WebGL sênior |
| Three/WebGL | 1 lab contido (S34) | maestria |
| Backend do produto | Fastify + TS | Express (só mini legado), Nest (lab de vaga) |
| Runtime de produção | **Node 22 LTS** | Bun como acelerador local, nunca requisito |
| Dados | Postgres + SQL cru | ORM (depois do capstone), Redis, filas |
| MySQL | 1 nota comparativa (S24) | segundo banco |
| Auth | Cookie httpOnly (Better Auth ou sessão Fastify) | OAuth social no ano 1 |
| Mobile ano 1 | PWA + wrap Capacitor | Ionic UI, React Native, lojas |
| Go | 2ª linguagem, 1 sessão/semana desde S09 | sênior, gRPC, distribuído |
| Micro-framework Go | **Gin** (mais visto em empresa, estável) | Fiber |
| Testes | Vitest, Playwright smoke, testes Fastify, `go test` | cobertura de vaidade |
| Docker | 1 lab + compose se a RAM aguentar | DevOps de verdade |
| Cloud | Vercel + Neon + um host burro da API | AWS/GCP |

## Conflitos que você me deu e como eu resolvi

**Nest vs Fastify.** 4.7 Fastify canônico. 4.8 Nest como backend JS principal. 9.3 empregável no Brasil (Nest aparece em vaga). Resolução: Fastify é o backend da Vitrine e da profundidade. Nest é **lab de 3 semanas** no mês 10 para entrevista. A Vitrine **não** é reescrita em Nest.

**Bun vs emprego.** Você pediu Bun como runtime de estudo. Vaga, Next e deploy são Node. Resolução: instale os dois. Next e produção = Node. Bun só onde não brigar. Se brigar, Node ganha sem culpa.

**Go paralelo desde o mês 1 vs JS primeiro.** 4.11 paralelo. 5.2 JS primeiro. 2.5 Go como segunda. 1 h/dia. Resolução: **mês 1–2 sem Go**. Desde S09, **uma sessão de Go por semana**, já calendada. Não é um segundo plano. Se a semana for pin (S12, S28, S36), Go vira revisão, não capítulo novo.

**Mobile A+B+C vs 'tirar mobile da fase 1'.** Ano 1: PWA (quase de graça) + Capacitor no mês 11. RN e Ionic = [[fase-2]].

**'Passar por GSAP, Framer, Three, WebGL'.** Produção: GSAP + Framer. Three = lab. WebGL = alfabetização de 1 página. Pipeline caro de scroll-video = peça de assinatura (S31–S33), não o site todo.

**Nest 'principal' + Fastify + Go + 1 h.** Impossível. O vault escolhe empregável Next/Fastify/Postgres. O resto é lab com teto.

## O que este vault se recusa a chamar de sênior

Go neste ano: sintaxe, stdlib, goroutine, channel, context, REST, SQL, teste, fuzz se couber. Isso é **júnior sólido**. Sênior Go está em [[fase-2]].

'API de alta concorrência': Fastify bem feito + índice + você entender o event loop. Não é Kafka.

'SaaS completo': a Vitrine **não cobra o visitante**. Pagamento é o lab `checkout-1`. Auth e dashboard existem para **você** (admin).

## Regras de avanço (9.5 C)

No fim de cada mês a rubrica vale mais que a sua vontade. Autoavaliação + rubrica. Se a rubrica falhar: **corta profundidade e segue o calendário**. Não 'fico mais duas semanas no Grid'.

Portfólio é requisito de fase, não de dezembro.

## TDAH e projeto grande

A Vitrine só cresce pela **fatia da semana** em [[00 Calendario]]. Se você abrir um CMS, um app RN ou 'refatorar para Nest', está abandonando do mesmo jeito que nas outras vezes — só que agora o vault tem nome para isso.

Hiperfoco: só na fila da semana (trilha design, Go, polish). Proibido stack nova.

Semana de recuperação (S16, S37, S49) é parte da linha, não fraqueza.

## Máquina fraca

- Zorin é melhor que Windows para Docker. Se a RAM morrer, **não use Docker no dia a dia**. Postgres = Neon gratuito.
- Android Studio só no mês 11, ou num fim de semana de hiperfoco. Se a máquina não aguentar, PWA conta como mobile do ano 1; o APK vira corte declarado no changelog.
- Não rode Three + Next + Postgres local juntos 'para ver'.

## Orçamento ~R$500/mês

Não precisa de curso. Docs canônicas. Gaste em: domínio da Vitrine, Neon se o free acabar, um host burro da API, café. Curso pago só se TS ou SQL travar **duas semanas** no mesmo ponto — um mês de material, não uma plataforma eterna.

## Congelamento

v1.0 congela nesta data. Mudança vira linha no [[00 Changelog]] com data. Reescrever o vault toda semana é o mesmo vício do 'não sei o que estudar'.
