---
id: MOD-DES
ordem: 93
modulo: design
status: nao-iniciado
pre-requisitos:
  - MOD-00.01
proxima: "fase-2"
anterior: "trilha-go"
tempo-estimado: ~35h no ano
projeto: vitrine
atualizado: 2026-09-12
tags:
  - camada/design
  - stack/css
  - tipo/pratico
  - nivel/intermediario
  - status/nao-iniciado
---

← [[trilha-go]] | [[fase-2]] →

# Trilha design

Diferencial de carreira que você pediu: interface que não parece tutorial. Figma, tipo, cor, hierarquia, motion. O calendário já espalha isso (sextas iniciais + labs S10, S13, S31–S35).

Canônico: [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design), MDN CSS, [GSAP](https://gsap.com/docs/v3/), [Motion](https://motion.dev/docs). Livro se o orçamento puxar: *Refactoring UI* — um mês, não um altar.

## Ordem (não 'passar por tudo' no mesmo sábado)

1. Hierarquia, tipo, cor, espaço (S02, S06).
2. Figma: 390 primeiro, componente de card (S04, S06).
3. CSS avançado: tokens, clamp, scroll-driven (S07).
4. Framer/Motion para UI React (S10).
5. GSAP + ScrollTrigger para peça (S13).
6. Pipeline caro de scroll-video (S31–S33).
7. Three.js: 1 lab (S34). WebGL: 1 página no caderno.

Produção da Vitrine = **GSAP + Framer**. Three só entra no hero se a S34 responder 'sim' com critério de produto. Vaidade não é critério.

## Regras de motion

- Animar `transform` e `opacity`.
- 200–400 ms. Sem bounce de demo.
- `prefers-reduced-motion` desliga.
- Mobile 60fps ou você corta frames. Não 'otimiza depois'.
- Um CTA por bloco. Motion não cria segundo destaque.

## Scroll-video (o pipeline caro)

Objetivo: materiais criativos (pode nascer em IA) viram uma peça que o scroll dirige, 3–6 s, usável no Android.

Métodos (escolha **um** na S31):

1. Sequência de frames (webp) + canvas/img por progresso de scroll.
2. Spritesheet se o clip for curto e a resolução baixa.
3. Vídeo com `currentTime` amarrado ao scroll — simples, às vezes jank.

Orçamento: escreva os KB no README. Fallback: frame 0 estático. Reduced-motion: estático.

Licença: anote o prompt e a ferramenta. Não finja que filmou.

## Figma no fluxo

Tela → tokens (cor, type, espaço) → CSS vars → código. Tailwind não inventa paleta. Se o JSX tiver cor mágica, você quebrou o sistema.

## Drawing

Moodboard pode ser um drawing. Arquitetura visual da home (hero / grade / disclaimer) uma vez no mês 2 e outra no mês 9.
