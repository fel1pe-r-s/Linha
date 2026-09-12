---
id: MOD-05
ordem: 14
modulo: fase-4
status: nao-iniciado
pre-requisitos:
  - MOD-04
proxima: "06 Nest Go Mobile"
anterior: "04 Backend"
tempo-estimado: 8 semanas (S29–S36)
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/projeto
  - camada/design
  - camada/back
  - nivel/avancado
  - evidencia/capstone
  - evidencia/microprojeto
  - status/nao-iniciado
---

← [[04 Backend]] | [[06 Nest Go Mobile]] →

# Fase 4 · Fullstack e assinatura

MOC: S29 checkout-1 · S30 WS · S31–S33 scroll-video · S34 Three lab · S35 home v2 · S36 **pin 3 / v1**

Aqui o produto sai do GitHub e vai para as suas redes. Motion deixa de ser 'eu sei Framer' e vira peça. Pagamento **não** entra na Vitrine.

## Você vai saber fazer

Cobrar 1 produto em modo teste; abrir um WebSocket de cliques; publicar uma peça de scroll-video com fallback; decidir se Three serve; mandar o link da Vitrine para gente de verdade.

## Recursos

- [Stripe Checkout](https://docs.stripe.com/checkout/quickstart)
- [MDN WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [GSAP](https://gsap.com/docs/v3/)
- [Three.js Fundamentals](https://threejs.org/manual/#en/fundamentals)
- PIX: Mercado Pago test ou copia-e-cola honesto. Não construa um PSP.

## S29 · checkout-1

Repo irmão. README primeira linha: afiliado ≠ checkout. Stripe test + webhook idempotente + PIX. Isso cobre a linha 'pagamentos' sem estourar o capstone.

## S30 · WS

Um processo, um canal, admin vê click. Sem Redis. Se o servidor cair, o HTTP de click-out ainda funciona — você escreve isso no caderno.

## S31–S33 · scroll-video

Escolha **um** pipeline. Orçamento em KB. Android real. Fallback. Prompt de IA documentado. Detalhe na [[trilha-design]].

Se o hero não aguentar, a peça vive em `/studio`. Isso é decisão de produto, não derrota.

## S34 · Three

Lab. Dispose. Sem modelo gordo. Se não servir a Vitrine, fica em `/labs/three`. WebGL: uma página no caderno, não um semestre.

## S36 · v1 no mundo

Tag `v1.0`. Case study. Pin 3. **Você usa o link**. Cinco produtos reais. Rubrica em [[projeto]].

## Rubrica fase 4

- [ ] checkout-1 público
- [ ] WS de clicks
- [ ] Peça de motion no ar com fallback
- [ ] Vitrine v1 nas redes
- [ ] README de case
