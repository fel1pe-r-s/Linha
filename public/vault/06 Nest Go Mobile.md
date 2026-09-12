---
id: MOD-06
ordem: 15
modulo: fase-5
status: nao-iniciado
pre-requisitos:
  - MOD-05
proxima: "07 Renda"
anterior: "05 Assinatura"
tempo-estimado: 8 semanas (S37–S44)
projeto: vitrine
atualizado: 2026-09-12
tags:
  - stack/nest
  - stack/go
  - camada/mobile
  - camada/back
  - tipo/pratico
  - nivel/intermediario
  - evidencia/microprojeto
  - status/nao-iniciado
---

← [[05 Assinatura]] | [[07 Renda]] →

# Fase 5 · Nest, Go, mobile

MOC: S37 recuperação + mapa Nest · S38–S39 nest-lab · S40 sprint Go SQL · S41 PWA · S42 Capacitor · S43 concorrência Go · S44 freeze

A Vitrine **não** se reescreve. Nest e Go são evidência de emprego e segunda linguagem. Mobile é o mesmo site, embrulhado.

## Você vai saber fazer

Explicar Nest (módulo, DI, guard) em 2 minutos; GET/POST em Go com SQL; instalar a Vitrine no Android (PWA e, se a máquina deixar, APK).

## Recursos

- [NestJS](https://docs.nestjs.com/)
- [Gin](https://gin-gonic.com/docs/)
- [database/sql](https://pkg.go.dev/database/sql)
- [Go fuzzing](https://go.dev/security/fuzz/)
- [web.dev PWA](https://web.dev/learn/pwa/)
- [Capacitor](https://capacitorjs.com/docs)

## Nest (lab)

Tabela de tradução no caderno: plugin ≈ module, hook ≈ guard, schema ≈ DTO. CRUD + API key guard + um e2e. ORM: **leitura**. Capstone continua SQL cru. Pin opcional se o lab estiver apresentável.

Se o tempo apertar: corte profundidade do Nest, não da Vitrine viva.

## Go sprint (S40, S43)

`go-catalog`: layout simples `cmd/api` + `internal/products`. Sem hexágono de livro. Testes. errgroup. README de nível. Mapa na [[trilha-go]].

Fuzz (G37): uma função. Se a hora acabar, corte no changelog. Não é o coração do ano.

## PWA

Manifest, ícone, precache da shell, aviso offline. Print da tela inicial.

## Capacitor

Wrap. Sem Ionic. Sem câmera. Sem Play Store. Android Studio pode matar a RAM — se matar, PWA conta, APK vira corte declarado. Você tem Android; iOS não é requisito.

## RN

Fase 2. Está escrito aqui para você não 'só dar uma olhada no Expo' na S42.

## Rubrica mês 11

- [ ] PWA instalada
- [ ] APK **ou** corte de máquina no changelog
- [ ] go-catalog com teste
- [ ] nest-lab apresentável
- [ ] Feature freeze da Vitrine (`pre-renda`)
