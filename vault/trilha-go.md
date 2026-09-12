---
id: MOD-GO
ordem: 92
modulo: go
status: nao-iniciado
pre-requisitos:
  - MOD-00.01
proxima: "trilha-design"
anterior: "projetos-micro"
tempo-estimado: ~40h no ano
projeto: go-catalog
atualizado: 2026-09-12
tags:
  - stack/go
  - camada/back
  - tipo/pratico
  - nivel/fundamento
  - status/nao-iniciado
---

← [[projetos-micro]] | [[trilha-design]] →

# Trilha Go

Segunda linguagem. **Não** começa no mês 1. Entra na S09, uma sessão por semana, já marcada no [[00 Calendario]]. Teto deste vault: júnior sólido. A palavra sênior aqui seria propaganda.

Canônico: [A Tour of Go](https://go.dev/tour/), [Effective Go](https://go.dev/doc/effective_go), stdlib, depois [Gin](https://gin-gonic.com/docs/) (mais visto em empresa que Fiber). SQL com `database/sql`. Testes table-driven. Fuzz se a S42 sobrar.

## Regras

- Sexta é Go, salvo semana de pin — aí revisão.
- Se a semana JS estiver pegando fogo (auth, pin), Go vira reler notas, não capítulo novo.
- Hiperfoco de sábado pode adiantar **um** G. Não três.
- Repo de evidência: `go-catalog`. Não é a Vitrine.

## Mapa G01–G40 (espelha as sextas)

| Id | Semana | Você vai saber fazer |
| --- | --- | --- |
| G01 | S09 | Pacotes e funções no Tour |
| G02 | S10 | Structs e slices; um `Product` |
| G03 | S11 | Erros e JSON, sem panic |
| G04 | S12 | `net/http` hello JSON |
| G05 | S13 | Dois paths na stdlib |
| G06 | S14 | Teste table-driven |
| G07 | S15 | `go.mod` |
| G08 | S16 | Revisão (recuperação) |
| G09 | S17 | `context` com timeout |
| G10 | S18 | Gin `/health` |
| G11 | S19 | GET /products hardcoded |
| G12 | S20 | Ler `database/sql` |
| G13 | S21 | Ping no Postgres |
| G14 | S22 | Como o Go versiona schema |
| G15 | S23 | SELECT products |
| G16 | S24 | Null e 0 rows |
| G17 | S25 | Middleware que recusa |
| G18 | S26 | Revisão metade |
| G19 | S27 | `io.Reader` |
| G20 | S28 | Pausa de pin |
| G21 | S29 | Goroutine + WaitGroup |
| G22 | S30 | Channel e select |
| G23 | S31 | Worker pool |
| G24 | S32 | Cancelar o pool |
| G25 | S33 | Timeouts de servidor |
| G26 | S34 | `embed` |
| G27 | S35 | Gin + SQL GET real |
| G28 | S36 | httptest |
| G29 | S37 | POST JSON |
| G30 | S38 | INSERT SQL |
| G31 | S39 | Transação |
| G32–G35 | S40 | Sprint `go-catalog` |
| G36 | S41 | Revisão concorrência |
| G37 | S42 | Fuzz de 1 função (corte ok) |
| G38–G40 | S43 | errgroup, timeout, diagrama |

## Rubrica do `go-catalog` (mês 11)

- [ ] GET e POST de product
- [ ] SQL parametrizado
- [ ] `go test` verde
- [ ] Um endpoint com limite de goroutines
- [ ] README diz o nível real

O que falta para sênior está em [[fase-2]]: pprof, tracing, gRPC, sagas, internals do scheduler.
