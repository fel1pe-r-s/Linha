---
id: MOD-04
ordem: 13
modulo: fase-3
status: nao-iniciado
pre-requisitos:
  - MOD-03
proxima: "05 Assinatura"
anterior: "03 Next e Design"
tempo-estimado: 12 semanas (S17–S28)
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/pratico
  - stack/js
  - stack/ts
  - stack/fastify
  - stack/sql
  - stack/postgres
  - camada/back
  - camada/dados
  - nivel/intermediario
  - evidencia/capstone
  - status/nao-iniciado
---

← [[03 Next e Design]] | [[05 Assinatura]] →

# Fase 3 · Fastify e Postgres

MOC: S17 HTTP · S18 Express legado + Fastify · S19 rotas · S20 Postgres · S21–S23 SQL/CRUD · S24 MySQL comparativo · S25 auth · S26 OWASP · S27 upload · S28 **pin 2**

Backend JS canônico: **Fastify**. Express existe 1 sessão para você não ter medo de repo velho. SQL **cru** até o capstone. ORM é fase 2.

## Você vai saber fazer

Explicar HTTP, subir Fastify com schema, modelar products/clicks, escrever JOIN e EXPLAIN, trancar o admin com cookie, gravar click-out, subir API pública.

## Recursos canônicos

- [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Fastify](https://fastify.dev/docs/latest/)
- [Postgres tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [Better Auth](https://www.better-auth.com/docs) *ou* sessão Fastify + cookie — um dos dois, não os dois.
- Docker: [Get Started](https://docs.docker.com/get-started/) como lab. Dia a dia: **Neon** se a RAM for curta.

## HTTP (S17)

Leia um request como texto. Cookie vs localStorage. 401 vs 403. CORS: reproduza o erro Next→API e conserte. Servidor `node:http` de 40 linhas antes de qualquer framework.

## Express (S18, 1 sessão)

CRUD memória. README: legado. Apague a vontade de 'já que o Express está aqui...'.

## Fastify

Plugin, encapsulamento, JSON Schema, `inject()` para teste, erro `{ error, message }`. TS sem `any`. Click-out: registra e manda o browser para a loja.

## Postgres

Tabelas `products` e `clicks`. PK, FK, `active boolean`, CHECK da fonte. Parâmetros `$1` — interpolar string é falha de rubrica, não 'depois eu arrumo'.

Migrations: arquivos SQL numerados. Seed separado. Você recria o banco do zero.

Isolation e replicação profunda: não. S24: isolation em 30 min + nota MySQL comparativa (caso estilo Shopify: índice e schema > cache mágico). Uma página. Sem segundo banco.

## Auth (S25)

Um usuário: você. Cookie HttpOnly, Secure (prod), SameSite. Senha hasheada. Sem JWT no localStorage. Sem OAuth Google neste ano.

## Upload (S27)

Allowlist MIME, 2MB, nome aleatório. URL no banco, binário fora do git. Se a API da Amazon não vier, cola URL.

## Pin 2 (S28)

API no ar, admin autentica, click grava, imagens reais, README de segurança. Pode ser o mesmo repo.

## Rubrica pin 2

- [ ] API pública
- [ ] Login
- [ ] Click no Postgres
- [ ] Imagens reais
- [ ] SQL sem interpolação
- [ ] Checklist OWASP no README
