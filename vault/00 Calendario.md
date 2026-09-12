---
id: MOD-00.05
ordem: 5
modulo: hubs
status: nao-iniciado
pre-requisitos:
  - MOD-00.03
proxima: "00 Progresso"
anterior: "00 Caderno"
tempo-estimado: 52 semanas
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/pratico
  - status/nao-iniciado
---

← [[00 Caderno]] | [[00 Progresso]] →

# Calendário de 52 semanas

Livro da linha. 1 sessão por dia. Sexta = Go (desde S09) ou design. Sábado = projeto. Domingo = caderno.

Hiperfoco só no buffer da semana. Se atrasar: corte profundidade, não empurre a S52.



## S01 · Sistema de estudo

Mês 1 · fase 0 · 405 min

**SMART:** Até domingo o Obsidian abre este vault, o GitHub existe, Node 22 e Git fazem um commit, e o caderno tem a primeira página.

**Fatia da Vitrine:** Nome provisório da Vitrine, 5 referências visuais salvas, 1 frase de proposta.

- [ ] S01D1 · Seg · Linha · 60min · **Ler o contrato e o índice** — Você vai saber: Você sabe o que entrou, o que foi cortado, e qual é a regra se atrasar.
- [ ] S01D2 · Ter · Linha · 60min · **Instalar a linha de ferramentas** — Você vai saber: Node 22 LTS, Git, VS Code ou Cursor, e o vault copiado no Obsidian. · [Pro Git cap. 1–2](https://git-scm.com/book/en/v2)
- [ ] S01D3 · Qua · Linha · 60min · **GitHub e primeiro repositório** — Você vai saber: Repo `vitrine` privado ou público, README de 5 linhas, primeiro commit. · [Pro Git cap. 1–2](https://git-scm.com/book/en/v2)
- [ ] S01D4 · Qui · Linha · 60min · **Caderno + daily** — Você vai saber: Template de caderno duplicado; você escreve a sessão de hoje em papel ou no vault.
- [ ] S01D5 · Sex · Design · 60min · **Moodboard da Vitrine** — Você vai saber: 5 URLs de referências (Linktree, vitrines, motion) coladas em [[projeto]]. · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S01D6 · Sab · Projeto · 60min · **Frase de produto** — Você vai saber: Uma frase: para quem, o que clica, para onde vai (Amazon/ML).
- [ ] S01D7 · Dom · Caderno · 45min · **Revisão da semana 1** — Você vai saber: Checklist do mês 0: ambiente ok. Se algo falhou, anota o bloqueio, não começa conteúdo novo.

Rubrica:
- [ ] Obsidian abre o vault sem pasta errada
- [ ] `node -v` mostra 22
- [ ] GitHub tem o repo da Vitrine
- [ ] Caderno tem 1 página

---

## S02 · CSS que ainda falta

Mês 1 · fase 1 · 435 min

**SMART:** Até domingo você reconstrói um layout de landing em Grid/Flex sem framework, responsivo em 390px e desktop.

**Fatia da Vitrine:** Esboço em papel da home: hero, grade de produtos, rodapé.

- [ ] S02D1 · Seg · Linha · 60min · **Box model, cascade, especificidade** — Você vai saber: Você explica por que um estilo não aplica, sem chute. · [MDN · CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ ] S02D2 · Ter · Linha · 60min · **Flex + Grid de verdade** — Você vai saber: Uma página com header, hero, grade 1/2/3 colunas, sem lib. · [MDN · CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ ] S02D3 · Qua · Linha · 60min · **Responsivo e fluid type** — Você vai saber: clamp() na type, breakpoints só onde o layout quebra, sem overflow em 390px. · [MDN · CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ ] S02D4 · Qui · Linha · 60min · **Tokens CSS crus** — Você vai saber: Cores, espaço e type em custom properties; tema não depende de Tailwind ainda.
- [ ] S02D5 · Sex · Design · 60min · **Tipo, cor, hierarquia** — Você vai saber: Você escolhe 1 família display + 1 body e uma paleta de 4 cores para a Vitrine. · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S02D6 · Sab · Projeto · 90min · **Micro · landing vanilla** — Você vai saber: HTML+CSS da landing no ar (arquivo local ou GitHub Pages). Sem JS de framework.
- [ ] S02D7 · Dom · Caderno · 45min · **Revisão CSS** — Você vai saber: 3 erros que você cometeu e a regra que evita cada um.

---

## S03 · JS assíncrono e DOM

Mês 1 · fase 1 · 435 min

**SMART:** Até domingo um carrossel ou filtro de produtos funciona em JS vanilla, com estado previsível.

**Fatia da Vitrine:** JSON local com 3 produtos (nome, imagem, url de afiliado).

- [ ] S03D1 · Seg · Linha · 60min · **Valores, funções, módulos** — Você vai saber: Um módulo ESM exporta os produtos; o HTML importa e renderiza. · [javascript.info](https://javascript.info/)
- [ ] S03D2 · Ter · Linha · 60min · **DOM sem bagunça** — Você vai saber: Lista renderizada a partir de dados; clique não duplica listener. · [javascript.info](https://javascript.info/)
- [ ] S03D3 · Qua · Linha · 60min · **Event loop, promises, fetch** — Você vai saber: Você desenha o que acontece num fetch + then + catch, em ordem. · [javascript.info](https://javascript.info/)
- [ ] S03D4 · Qui · Linha · 60min · **async/await e erro** — Você vai saber: Fetch de JSON com loading e erro visíveis na UI.
- [ ] S03D5 · Sex · Design · 60min · **Motion CSS** — Você vai saber: Uma transição e uma @keyframes que não usam top/left (só transform/opacity). · [MDN · CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ ] S03D6 · Sab · Projeto · 90min · **Micro · grade filtrável** — Você vai saber: Busca por nome nos 3 produtos, sem recarregar a página.
- [ ] S03D7 · Dom · Caderno · 45min · **Revisão JS** — Você vai saber: Você escreve com suas palavras o que é a event loop, em 8 linhas.

---

## S04 · TypeScript entra

Mês 1 · fase 1 · 435 min

**SMART:** Até domingo o micro da landing está tipado, `tsc --noEmit` passa, e o mês 1 fecha no GitHub.

**Fatia da Vitrine:** Tipos `Product` e `AffiliateLink` no repo da Vitrine.

- [ ] S04D1 · Seg · Linha · 60min · **JS → TS sem drama** — Você vai saber: tsconfig estrito; um .ts vira .js limpo. Você sabe o que `strict` exige. · [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ ] S04D2 · Ter · Linha · 60min · **Tipos, união, narrowing** — Você vai saber: Função que aceita Product | null e não usa `!` para mentir ao compiler. · [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ ] S04D3 · Qua · Linha · 60min · **Tipar o JSON de produtos** — Você vai saber: type Product com id, title, imageUrl, affiliateUrl, source.
- [ ] S04D4 · Qui · Linha · 60min · **Git do dia a dia** — Você vai saber: commit pequeno, mensagem em PT ou EN consistente, push. · [Pro Git cap. 1–2](https://git-scm.com/book/en/v2)
- [ ] S04D5 · Sex · Design · 60min · **Figma: 1 tela da home** — Você vai saber: Frame 390 e 1280 da home, com type e cor reais, não lorem cinza. · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S04D6 · Sab · Projeto · 90min · **Fechar micro vanilla** — Você vai saber: README com screenshot; critério: mobile sem overflow, 3 produtos, filtro.
- [ ] S04D7 · Dom · Caderno · 45min · **Marco mês 1** — Você vai saber: Rubrica mês 1 marcada. Se falhou, corta profundidade — não empurra Next.

Rubrica:
- [ ] Landing vanilla no GitHub
- [ ] Layout 390px sem scroll horizontal
- [ ] Product tipado
- [ ] Figma com 1 tela

---

## S05 · Next.js entra de verdade

Mês 2 · fase 2 · 435 min

**SMART:** Até domingo um app Next (App Router + TS) roda, com layout, uma rota e os 3 produtos renderizados no servidor.

**Fatia da Vitrine:** Repo da Vitrine vira Next. A landing vanilla fica como arquivo histórico, não se mistura.

- [ ] S05D1 · Seg · Linha · 60min · **App Router, pastas, layouts** — Você vai saber: Você cria `/` e `/sobre` com o mesmo chrome, sem copiar HTML. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S05D2 · Ter · Linha · 60min · **Server vs client components** — Você vai saber: Lista de produtos no servidor; um botão `'use client'` isolado. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S05D3 · Qua · Linha · 60min · **Imagens e fontes** — Você vai saber: next/image e next/font na home, sem layout shift óbvio. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S05D4 · Qui · Linha · 60min · **TS no Next** — Você vai saber: Props tipadas; zero `any`. · [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ ] S05D5 · Sex · Design · 60min · **Tokens no código** — Você vai saber: CSS variables do Figma viram globals.css da Vitrine.
- [ ] S05D6 · Sab · Projeto · 90min · **Home Next com 3 cards** — Você vai saber: Cards leem o array tipado; clique abre o link de afiliado em nova aba.
- [ ] S05D7 · Dom · Caderno · 45min · **Revisão Next** — Você vai saber: Você escreve a diferença server/client em 6 linhas, sem jargão vazio.

---

## S06 · Figma → código

Mês 2 · fase 2 · 435 min

**SMART:** Até domingo a home do Figma e a home do Next divergem no máximo em 2 decisões conscientes, documentadas.

**Fatia da Vitrine:** Espaçamento e type da home iguais ao frame 390.

- [ ] S06D1 · Seg · Design · 60min · **Auto-layout e componentes Figma** — Você vai saber: Card de produto é componente com variantes (default / hover). · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S06D2 · Ter · Linha · 60min · **Implementar o card** — Você vai saber: Componente ProductCard.tsx fiel ao Figma. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S06D3 · Qua · Linha · 60min · **Hierarquia visual** — Você vai saber: Título, preço opcional, fonte, CTA: um eixo de leitura, não três destaques.
- [ ] S06D4 · Qui · Linha · 60min · **Tailwind entra (fase 1)** — Você vai saber: Utility no layout; tokens de cor ainda vêm das CSS vars, não de paleta default. · [Tailwind Docs](https://tailwindcss.com/docs)
- [ ] S06D5 · Sex · Design · 60min · **Espaço e ritmo** — Você vai saber: Escala 4/8 aplicada; você não chuta 13px e 27px.
- [ ] S06D6 · Sab · Projeto · 90min · **Home fiel em 390 e desktop** — Você vai saber: Print do Figma e print do browser lado a lado no README.
- [ ] S06D7 · Dom · Caderno · 45min · **O que o Figma ensinou** — Você vai saber: 3 regras de hierarquia que você vai repetir no resto do ano.

---

## S07 · CSS avançado + Tailwind fase 2

Mês 2 · fase 2 · 435 min

**SMART:** Até domingo você usa Grid, container queries ou scroll-driven CSS em um bloco da home, e Tailwind não apagou seus tokens.

**Fatia da Vitrine:** Seção hero com composição mais densa (não só card repetido).

- [ ] S07D1 · Seg · Linha · 60min · **Seletores e camadas** — Você vai saber: @layer e :is/:where usados com intenção; sem !important. · [MDN · CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ ] S07D2 · Ter · Linha · 60min · **Scroll-driven CSS** — Você vai saber: Um elemento reage a scroll com animation-timeline, degradê para browsers velhos. · [MDN · CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ ] S07D3 · Qua · Linha · 60min · **Tailwind + CSS vars** — Você vai saber: @theme aponta para os tokens da Vitrine. Zero cor mágica no JSX. · [Tailwind Docs](https://tailwindcss.com/docs)
- [ ] S07D4 · Qui · Linha · 60min · **Responsivo sem palpite** — Você vai saber: Você justifica cada breakpoint com um print do que quebrava.
- [ ] S07D5 · Sex · Design · 60min · **Estados de UI** — Você vai saber: Hover, focus visível, disabled, loading desenhados no Figma do card. · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S07D6 · Sab · Projeto · 90min · **Hero da Vitrine** — Você vai saber: Hero implementado; funciona sem JS de animação ainda.
- [ ] S07D7 · Dom · Caderno · 45min · **Revisão visual** — Você vai saber: Lista do que ainda parece 'genérico' na home — vira fila da trilha design.

---

## S08 · Capstone shell

Mês 2 · fase 2 · 435 min

**SMART:** Até domingo `/`, `/p/[id]` e um JSON de produtos existem; deploy de preview no ar.

**Fatia da Vitrine:** Rotas públicas da vitrine, ainda sem admin e sem banco.

- [ ] S08D1 · Seg · Linha · 60min · **Rota dinâmica de produto** — Você vai saber: Página de produto com imagem, texto, botão 'ver na loja'. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S08D2 · Ter · Linha · 60min · **Metadata básica** — Você vai saber: title e description por página. SEO profundo é eletiva — não se perde aqui. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S08D3 · Qua · Linha · 60min · **Estado do clique** — Você vai saber: O botão de afiliado é o único CTA do card. Sem modal inútil.
- [ ] S08D4 · Qui · Linha · 60min · **Deploy de preview** — Você vai saber: URL pública (Vercel). Máquina fraca: o build na nuvem é amigo, não vilão. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S08D5 · Sex · Design · 60min · **Página de produto no Figma** — Você vai saber: 1 frame mobile da página de produto. · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S08D6 · Sab · Projeto · 90min · **Shell no ar** — Você vai saber: Alguém no celular abre a URL e vê 3 produtos.
- [ ] S08D7 · Dom · Caderno · 45min · **Marco mês 2** — Você vai saber: O que falta para a home não parecer tutorial: anota 3 itens, máximo.

Rubrica:
- [ ] Next no ar com URL
- [ ] 3 produtos + página de detalhe
- [ ] Figma e código ainda conversam
- [ ] Zero `any`

---

## S09 · Dados no Next + Go começa

Mês 3 · fase 2 · 435 min

**SMART:** Até domingo os produtos vêm de um módulo único; loading e erro existem; você fez a sessão 1 da Tour of Go.

**Fatia da Vitrine:** Fonte de verdade dos produtos ainda é arquivo TS/JSON, não banco.

- [ ] S09D1 · Seg · Linha · 60min · **fetch, cache, revalidate** — Você vai saber: Você explica, com um exemplo, o que o Next cacheia neste app. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S09D2 · Ter · Linha · 60min · **loading.tsx e error.tsx** — Você vai saber: Estados de espera e falha visíveis, não tela branca. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S09D3 · Qua · Linha · 60min · **Validar dados** — Você vai saber: Zod (ou type guard) na borda do JSON. Dado podre não derruba a home.
- [ ] S09D4 · Qui · Linha · 60min · **Lista vazia e 404** — Você vai saber: Produto inexistente → notFound(); lista vazia tem estado vazio real.
- [ ] S09D5 · Sex · Go · 60min · **Go G01 · Tour: pacotes e funções** — Você vai saber: Você roda o Tour até flow control. Go não rouba o resto da semana. · [A Tour of Go](https://go.dev/tour/)
- [ ] S09D6 · Sab · Projeto · 90min · **Estados da home** — Você vai saber: Loading skeleton simples (CSS), erro, vazio — três telas.
- [ ] S09D7 · Dom · Caderno · 45min · **Go + Next na mesma semana** — Você vai saber: Se Go gerou ansiedade: anote e continue. É 1h. Não 'compense' no domingo.

---

## S10 · Framer Motion

Mês 3 · fase 2 · 435 min

**SMART:** Até domingo os cards entram com motion de 200–400ms, respeitam reduced-motion, e não usam lib nenhuma além de Motion.

**Fatia da Vitrine:** Motion só no que o usuário percebe: lista e CTA, não em tudo.

- [ ] S10D1 · Seg · Linha · 60min · **Motion no React** — Você vai saber: Um card com initial/animate/exit. Sem bounce de tutorial. · [Framer Motion](https://motion.dev/docs)
- [ ] S10D2 · Ter · Linha · 60min · **Stagger da grade** — Você vai saber: Lista aparece em cascata curta; 40–80ms entre itens. · [Framer Motion](https://motion.dev/docs)
- [ ] S10D3 · Qua · Linha · 60min · **Reduced motion** — Você vai saber: prefers-reduced-motion desliga o stagger. Você testa isso.
- [ ] S10D4 · Qui · Linha · 60min · **Layout animations com cuidado** — Você vai saber: Você sabe quando NÃO animar layout (jank). Fica em transform/opacity.
- [ ] S10D5 · Sex · Go · 60min · **Go G02 · structs e slices** — Você vai saber: Um `Product` em Go, um slice, um range. Só isso. · [A Tour of Go](https://go.dev/tour/)
- [ ] S10D6 · Sab · Projeto · 90min · **Micro · cards com presença** — Você vai saber: Home com entrada dos cards gravada em um take de 10s no celular.
- [ ] S10D7 · Dom · Caderno · 45min · **Motion que serve** — Você vai saber: 1 frase: o que o movimento está dizendo (hierarquia, não enfeite).

---

## S11 · Formulário admin (falso)

Mês 3 · fase 2 · 435 min

**SMART:** Até domingo existe `/admin` protegido só por um segredo local (ainda sem auth real) para editar o JSON da semana.

**Fatia da Vitrine:** Admin feio pode. Admin que funciona, melhor. Visual de admin não é a trilha de design.

- [ ] S11D1 · Seg · Linha · 60min · **Forms em React** — Você vai saber: Adicionar produto no array em memória; validação na mão + tipos. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S11D2 · Ter · Linha · 60min · **Server Actions ou route handler** — Você vai saber: Um POST que grava num JSON local (dev). Você sabe que isso não é produção. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S11D3 · Qua · Linha · 60min · **Acessibilidade mínima do form** — Você vai saber: label ligado ao input, erro associado, foco visível. Eletiva a11y profunda fica fora.
- [ ] S11D4 · Qui · Linha · 60min · **Não crescer o admin** — Você vai saber: CRUD de 3 campos só. Se deu vontade de CMS, corta. É isca de projeto grande.
- [ ] S11D5 · Sex · Go · 60min · **Go G03 · erros e JSON** — Você vai saber: Marshal/unmarshal de Product. Erro não é panic. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S11D6 · Sab · Projeto · 90min · **Admin mínimo** — Você vai saber: Você adiciona um 4º produto sem editar código.
- [ ] S11D7 · Dom · Caderno · 45min · **Checagem TDAH** — Você vai saber: O admin tentou virar um SaaS? Se sim, volta ao critério da semana.

---

## S12 · Testes no front e Pin 1 · PIN-1 Vitrine front

Mês 3 · fase 2 · 435 min

**SMART:** Até domingo 2 testes Vitest passam, 1 smoke Playwright da home passa, e o repo está pinado com README honesto.

**Fatia da Vitrine:** Vitrine front v1 pública. Este é o pin 1 do GitHub.

- [ ] S12D1 · Seg · Linha · 60min · **Vitest no card** — Você vai saber: Teste do helper de URL de afiliado e do type guard. · [Vitest Docs](https://vitest.dev/guide/)
- [ ] S12D2 · Ter · Linha · 60min · **Playwright abre a home** — Você vai saber: Teste: vê o título e 3 cards. Só isso. · [Playwright Docs](https://playwright.dev/docs/intro)
- [ ] S12D3 · Qua · Linha · 60min · **README de portfólio** — Você vai saber: Problema, stack, print, URL, o que NÃO está pronto. Tom cru.
- [ ] S12D4 · Qui · Linha · 60min · **Pin 1** — Você vai saber: Repo público, pin no perfil, URL no ar.
- [ ] S12D5 · Sex · Go · 60min · **Go G04 · net/http Hello** — Você vai saber: Servidor stdlib responde JSON `{"ok":true}`. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S12D6 · Sab · Projeto · 90min · **Fechar v1 front** — Você vai saber: Rubrica do pin 1. Se falhou o Playwright, isso bloqueia o pin — não o ego.
- [ ] S12D7 · Dom · Caderno · 45min · **Marco mês 3** — Você vai saber: Você está empregável em 'front Next júnior'? Lista o que ainda é buraco.

Rubrica:
- [ ] URL pública
- [ ] README honesto
- [ ] Vitest + Playwright verdes
- [ ] Mobile 390 ok
- [ ] Pin no GitHub

---

## S13 · GSAP entra

Mês 4 · fase 2 · 435 min

**SMART:** Até domingo uma seção da home tem ScrollTrigger (pin ou fade) estável em mobile.

**Fatia da Vitrine:** Uma seção, não o site inteiro em GSAP.

- [ ] S13D1 · Seg · Linha · 60min · **GSAP core** — Você vai saber: tween de um elemento. Sem ScrollTrigger ainda. · [GSAP Docs](https://gsap.com/docs/v3/)
- [ ] S13D2 · Ter · Linha · 60min · **ScrollTrigger** — Você vai saber: Uma seção pina ou revela no scroll. Você mata o trigger no unmount. · [GSAP Docs](https://gsap.com/docs/v3/)
- [ ] S13D3 · Qua · Linha · 60min · **Mobile 60fps** — Você vai saber: will-change só se precisar; nada de animate de left/top/box-shadow.
- [ ] S13D4 · Qui · Linha · 60min · **Desligar se reduced-motion** — Você vai saber: GSAP respeita a mesma regra do Framer.
- [ ] S13D5 · Sex · Go · 60min · **Go G05 · handlers e roteamento manual** — Você vai saber: Dois paths na stdlib: `/health` e `/products`. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S13D6 · Sab · Projeto · 90min · **Micro · seção GSAP** — Você vai saber: Vídeo de 8s do scroll no Android.
- [ ] S13D7 · Dom · Caderno · 45min · **GSAP vs Framer** — Você vai saber: Você escreve quando usa cada um neste projeto. Uma tabela de 4 linhas.

---

## S14 · Páginas extras da vitrine

Mês 4 · fase 2 · 435 min

**SMART:** Até domingo existem `/` `/p/[id]` `/sobre` (quem é você, disclaimer de afiliado).

**Fatia da Vitrine:** Disclaimer legal simples: links de afiliado, você pode ganhar comissão.

- [ ] S14D1 · Seg · Linha · 60min · **Sobre e disclaimer** — Você vai saber: Texto verdadeiro, curto, em português. Sem lorem.
- [ ] S14D2 · Ter · Linha · 60min · **Navegação** — Você vai saber: Header com 3 links, estado ativo, tap 44px.
- [ ] S14D3 · Qua · Linha · 60min · **Performance barata** — Você vai saber: Imagens no tamanho certo; Lighthouse só como foto, não como religião (CWV é eletiva).
- [ ] S14D4 · Qui · Linha · 60min · **Refino visual 1** — Você vai saber: Uma hora só em tipo e espaço. Sem feature nova.
- [ ] S14D5 · Sex · Go · 60min · **Go G06 · testes table-driven** — Você vai saber: Um `_test.go` com 3 casos. `go test` verde. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S14D6 · Sab · Projeto · 90min · **Vitrine navegável** — Você vai saber: Fluxo: home → produto → loja oficial.
- [ ] S14D7 · Dom · Caderno · 45min · **Copy** — Você vai saber: Releia o sobre em voz alta. Corte 30% das palavras.

---

## S15 · Eletiva curta ou folga de profundidade

Mês 4 · fase 2 · 435 min

**SMART:** Até domingo você ou fecha um buraco da rubrica do pin 1, ou faz UMA eletiva (a11y ou SEO OG). Não as duas.

**Fatia da Vitrine:** Capstone só recebe correção de bug, zero feature.

- [ ] S15D1 · Seg · Linha · 60min · **Buraco da rubrica** — Você vai saber: O item vermelho do pin 1 some, ou você declara corte consciente.
- [ ] S15D2 · Ter · Linha · 60min · **Eletiva A · a11y do header** — Você vai saber: Nav com teclado, aria-current, contraste AA nos textos.
- [ ] S15D3 · Qua · Linha · 60min · **Eletiva B · OG da home** — Você vai saber: Uma imagem OG 1200×630 e metadata. Só se A não foi escolhida.
- [ ] S15D4 · Qui · Linha · 60min · **Hiperfoco guiado** — Você vai saber: Se hiperfoco vier: só trilha design D-buffer, não um SaaS novo.
- [ ] S15D5 · Sex · Go · 60min · **Go G07 · módulos e go.mod** — Você vai saber: Módulo com nome, `go run .` na API hello. · [A Tour of Go](https://go.dev/tour/)
- [ ] S15D6 · Sab · Projeto · 90min · **Congelar front** — Você vai saber: Tag git `front-v1`. Back começa no mês 5 em cima disso.
- [ ] S15D7 · Dom · Caderno · 45min · **Marco mês 4** — Você vai saber: Front congelado. Lista do que o back precisa (produtos, cliques, admin).

Rubrica:
- [ ] Tag front-v1
- [ ] Pin 1 ainda verdadeiro
- [ ] Lista de contratos da API escrita em [[projeto]]

---

## S16 · Recuperação 1 · recuperação

Mês 4 · fase 2 · 330 min

**SMART:** Semana de folga estruturada: caderno, 2 sessões leves, hiperfoco opcional na trilha design. Sem tópico novo obrigatório.

**Fatia da Vitrine:** Nada no capstone, a menos que esteja quebrado em produção.

- [ ] S16D1 · Seg · Folga · 45min · **Ler o caderno do trimestre** — Você vai saber: Você relê as páginas e marca 3 padrões de travamento.
- [ ] S16D2 · Ter · Folga · 30min · **Manutenção do ambiente** — Você vai saber: Update do Node só se estiver quebrado. Senão, descansa.
- [ ] S16D3 · Qua · Design · 60min · **Buffer design** — Você vai saber: Moodboard novo OU nada. Proibido começar lib nova.
- [ ] S16D4 · Qui · Folga · 45min · **Caminhar / fora da tela** — Você vai saber: Sessão válida. TDAH não é preguiça. Está no plano.
- [ ] S16D5 · Sex · Go · 60min · **Go G08 · revisão Tour** — Você vai saber: Revisar notas G01–G07. Sem capítulo novo se a cabeça pesou. · [A Tour of Go](https://go.dev/tour/)
- [ ] S16D6 · Sab · Projeto · 45min · **Opcional: bugs só** — Você vai saber: Se a URL pública quebrou, conserta. Senão, semana sem commit.
- [ ] S16D7 · Dom · Caderno · 45min · **Reset** — Você vai saber: Frase: o que o mês 5 vai exigir (HTTP). Sem planejamento de 12 features.

---

## S17 · HTTP cru

Mês 5 · fase 3 · 435 min

**SMART:** Até domingo você explica request/response, headers, cookies, CORS e status, e sobe um servidor Node de 40 linhas.

**Fatia da Vitrine:** Contrato da API da Vitrine escrito: `GET /products`, `POST /clicks`.

- [ ] S17D1 · Seg · Linha · 60min · **HTTP como texto** — Você vai saber: Você lê um request cru. Sabe o que é header vs body. · [MDN · HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [ ] S17D2 · Ter · Linha · 60min · **Status, cache, cookies** — Você vai saber: Diferença 401/403/404/409; cookie vs localStorage para sessão. · [MDN · HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [ ] S17D3 · Qua · Linha · 60min · **CORS e TLS na prática** — Você vai saber: Por que o browser bloqueia o Next → API. Você reproduz o erro e conserta. · [MDN · HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [ ] S17D4 · Qui · Linha · 60min · **Micro · http.Server** — Você vai saber: Node stdlib, duas rotas, JSON, sem Express ainda.
- [ ] S17D5 · Sex · Go · 60min · **Go G09 · context.Context** — Você vai saber: Timeout em handler. Você cancela um fetch lento. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S17D6 · Sab · Projeto · 90min · **Contrato OpenAPI de 1 página** — Você vai saber: Tabela método/path/body/resposta em [[projeto]].
- [ ] S17D7 · Dom · Caderno · 45min · **HTTP sem mistério** — Você vai saber: Glossário de 10 termos nas suas palavras.

---

## S18 · Express mini, depois Fastify

Mês 5 · fase 3 · 435 min

**SMART:** Até domingo o mini Express existe (legado) e o mesmo hello está em Fastify com schema.

**Fatia da Vitrine:** A API da Vitrine nasce em Fastify, não em Express.

- [ ] S18D1 · Seg · Linha · 60min · **Express em 1 hora** — Você vai saber: CRUD in-memory de produtos. Objetivo: reconhecer código legado, não adotar.
- [ ] S18D2 · Ter · Linha · 60min · **Fastify: plugin e encapsulamento** — Você vai saber: Dois plugins, prefixos, você não usa Express no repo novo. · [Fastify Docs](https://fastify.dev/docs/latest/)
- [ ] S18D3 · Qua · Linha · 60min · **JSON Schema nas rotas** — Você vai saber: POST inválido vira 400 sem if-else de 40 linhas. · [Fastify Docs](https://fastify.dev/docs/latest/)
- [ ] S18D4 · Qui · Linha · 60min · **TS no Fastify** — Você vai saber: Tipos do schema inferidos ou declarados. Zero any.
- [ ] S18D5 · Sex · Go · 60min · **Go G10 · Gin hello** — Você vai saber: Gin sobe `/health`. Gin é o micro-framework da trilha (mais usado em empresa). · [Gin Docs](https://gin-gonic.com/docs/)
- [ ] S18D6 · Sab · Projeto · 90min · **API hello da Vitrine** — Você vai saber: `GET /products` devolve o JSON atual, ainda em memória.
- [ ] S18D7 · Dom · Caderno · 45min · **Express vs Fastify** — Você vai saber: 4 linhas: por que Fastify é o canônico deste vault.

---

## S19 · Fastify de verdade

Mês 5 · fase 3 · 435 min

**SMART:** Até domingo há rotas de products e clicks, logs, e um teste de rota.

**Fatia da Vitrine:** Click ainda não persiste — conta em memória e já devolve 302 para a loja.

- [ ] S19D1 · Seg · Linha · 60min · **Injeção e config** — Você vai saber: PORT, CORS origin, NODE_ENV via env. Sem .env commitado com segredo. · [Fastify Docs](https://fastify.dev/docs/latest/)
- [ ] S19D2 · Ter · Linha · 60min · **Rota de click-out** — Você vai saber: `POST /clicks` ou `GET /out/:id` registra e redireciona.
- [ ] S19D3 · Qua · Linha · 60min · **Teste Fastify** — Você vai saber: inject() na rota /health e /products. Verde. · [Fastify Docs](https://fastify.dev/docs/latest/)
- [ ] S19D4 · Qui · Linha · 60min · **Erro padrão** — Você vai saber: Formato `{ error, message }` consistente. 500 não vaza stack no browser.
- [ ] S19D5 · Sex · Go · 60min · **Go G11 · JSON API Gin** — Você vai saber: GET /products em Go com slice hardcoded. Espelho didático, não produção. · [Gin Docs](https://gin-gonic.com/docs/)
- [ ] S19D6 · Sab · Projeto · 90min · **Next consome a API** — Você vai saber: Home busca Fastify em dev. CORS ok.
- [ ] S19D7 · Dom · Caderno · 45min · **Dois processos** — Você vai saber: Você anota como sobe Next + Fastify na máquina fraca. Bun só se não brigar.

---

## S20 · Postgres entra (sem ORM)

Mês 5 · fase 3 · 435 min

**SMART:** Até domingo um Postgres (Neon gratuito ou Docker) tem a tabela products; o Fastify lê dela.

**Fatia da Vitrine:** SQL cru. Nenhuma ORM. Neon se a RAM não aguentar Docker.

- [ ] S20D1 · Seg · Linha · 60min · **O que é um banco relacional** — Você vai saber: Tabela, linha, PK, FK — com o modelo da Vitrine no papel. · [Postgres Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [ ] S20D2 · Ter · Linha · 60min · **Subir Postgres** — Você vai saber: Neon connected OU docker compose postgres. Você escolhe o que a máquina aguenta. · [Docker Get Started](https://docs.docker.com/get-started/)
- [ ] S20D3 · Qua · Linha · 60min · **psql e o primeiro SELECT** — Você vai saber: Você cria a tabela na mão e insere 3 produtos. · [Postgres Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [ ] S20D4 · Qui · Linha · 60min · **node-pg no Fastify** — Você vai saber: GET /products vem do banco. SQL escrito por você.
- [ ] S20D5 · Sex · Go · 60min · **Go G12 · database/sql overview** — Você vai saber: Ler a doc. Ainda não conecta. Só mapa mental. · [database/sql](https://pkg.go.dev/database/sql)
- [ ] S20D6 · Sab · Projeto · 90min · **Home lê o banco** — Você vai saber: Matar o JSON hardcoded da home. Seed SQL no repo.
- [ ] S20D7 · Dom · Caderno · 45min · **Marco mês 5** — Você vai saber: API + banco + front. Diagrama de 3 caixas no Drawing.

Rubrica:
- [ ] Postgres com products
- [ ] Fastify lê SQL cru
- [ ] Next ainda funciona
- [ ] Diagrama no vault

---

## S21 · SQL de verdade

Mês 6 · fase 3 · 435 min

**SMART:** Até domingo você escreve SELECT com JOIN, WHERE, ORDER, LIMIT e explica um EXPLAIN simples.

**Fatia da Vitrine:** Tabela clicks. Modelo: product 1—N clicks.

- [ ] S21D1 · Seg · Linha · 60min · **SELECT, JOIN, agregação** — Você vai saber: Query: produtos mais clicados. Sem ORM. · [Postgres Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [ ] S21D2 · Ter · Linha · 60min · **Índices e EXPLAIN** — Você vai saber: Índice em clicks.product_id. Você vê Seq Scan vs Index Scan. · [Use The Index, Luke](https://use-the-index-luke.com/)
- [ ] S21D3 · Qua · Linha · 60min · **Tipos e constraints** — Você vai saber: NOT NULL, UNIQUE na URL de afiliado, CHECK no source (amazon|ml|outro). · [Postgres Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [ ] S21D4 · Qui · Linha · 60min · **Transação** — Você vai saber: Inserir click + (futuro) não perder contagem. BEGIN/COMMIT.
- [ ] S21D5 · Sex · Go · 60min · **Go G13 · pq ou pgx ping** — Você vai saber: Go faz ping no mesmo Postgres. SELECT 1. · [Gin Docs](https://gin-gonic.com/docs/)
- [ ] S21D6 · Sab · Projeto · 90min · **Seed + clicks table** — Você vai saber: schema.sql e seed.sql versionados.
- [ ] S21D7 · Dom · Caderno · 45min · **SQL no caderno** — Você vai saber: As 5 queries da Vitrine escritas à mão, uma vez.

---

## S22 · Migrations

Mês 6 · fase 3 · 435 min

**SMART:** Até domingo o schema sobe de arquivo, não de memória. Um colega (você no futuro) recria o banco do zero.

**Fatia da Vitrine:** Ferramenta simples (node-pg-migrate, dbmate, ou SQL numerado). Sem Prisma.

- [ ] S22D1 · Seg · Linha · 60min · **Por que migration** — Você vai saber: Você recria o banco do zero com um comando.
- [ ] S22D2 · Ter · Linha · 60min · **0001 products, 0002 clicks** — Você vai saber: Dois arquivos SQL. Up funciona.
- [ ] S22D3 · Qua · Linha · 60min · **Down opcional** — Você vai saber: Se a ferramenta tem down, um down não mata produção de mentira — só local.
- [ ] S22D4 · Qui · Linha · 60min · **Dados de seed** — Você vai saber: Seed separado de migration. 5 produtos reais que você promoveria.
- [ ] S22D5 · Sex · Go · 60min · **Go G14 · golang-migrate ou SQL files** — Você vai saber: Você vê como o mundo Go versiona schema. Não precisa adotar agora.
- [ ] S22D6 · Sab · Projeto · 90min · **README de banco** — Você vai saber: Como subir, migrar, seedar — 8 linhas.
- [ ] S22D7 · Dom · Caderno · 45min · **Disciplina de schema** — Você vai saber: Regra: ninguém altera tabela 'no feeling' em produção. Nem você.

---

## S23 · CRUD SQL no Fastify

Mês 6 · fase 3 · 435 min

**SMART:** Até domingo admin fala com o banco: criar, listar, editar, desativar produto (sem DELETE físico).

**Fatia da Vitrine:** soft-delete: `active boolean`.

- [ ] S23D1 · Seg · Linha · 60min · **INSERT/UPDATE RETURNING** — Você vai saber: SQL cru, parâmetros $1 $2, nunca interpolar string.
- [ ] S23D2 · Ter · Linha · 60min · **Listagem paginada** — Você vai saber: LIMIT/OFFSET ou keyset simples. 20 itens.
- [ ] S23D3 · Qua · Linha · 60min · **SQL injection na prática** — Você vai saber: Você tenta injetar e vê o parâmetro barrar. Lê o cheat OWASP. · [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [ ] S23D4 · Qui · Linha · 60min · **Testes de repositório** — Você vai saber: Um teste contra o banco de dev (ou transação rollback).
- [ ] S23D5 · Sex · Go · 60min · **Go G15 · SELECT products em Go** — Você vai saber: Mesma tabela, outro binário. Didático.
- [ ] S23D6 · Sab · Projeto · 90min · **Admin persiste** — Você vai saber: Reiniciar o Fastify não apaga produtos.
- [ ] S23D7 · Dom · Caderno · 45min · **Mapa SQL** — Você vai saber: Cada endpoint → query. Tabela no caderno.

---

## S24 · MySQL comparativo + fechar dados

Mês 6 · fase 3 · 435 min

**SMART:** Até domingo você leu o caso de índices/escala (Shopify/MySQL) e escreveu 1 página: o que mudaria se a Vitrine fosse MySQL.

**Fatia da Vitrine:** Nenhuma migração para MySQL. Só cérebro.

- [ ] S24D1 · Seg · Linha · 60min · **Postgres vs MySQL (cru)** — Você vai saber: Tipos, JSON, sequences vs autoincrement, LIMIT. 1h de leitura focada. · [Use The Index, Luke](https://use-the-index-luke.com/)
- [ ] S24D2 · Ter · Linha · 60min · **O que índice não resolve** — Você vai saber: Você escreve 5 linhas sobre por que cache (fase 2) não substitui schema ruim.
- [ ] S24D3 · Qua · Linha · 60min · **Isolation em 30 min** — Você vai saber: Read committed vs repeatable read: exemplo de click duplicado. · [Postgres Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [ ] S24D4 · Qui · Linha · 60min · **Revisão das queries da Vitrine** — Você vai saber: EXPLAIN nas 3 queries quentes. Índice que falta, se faltar.
- [ ] S24D5 · Sex · Go · 60min · **Go G16 · erros de scan** — Você vai saber: sql.NullString, tratar 0 rows. Sem panic.
- [ ] S24D6 · Sab · Projeto · 90min · **Nota comparativa** — Você vai saber: Arquivo no vault: `fleeting` MySQL, 1 página, linkada no contrato.
- [ ] S24D7 · Dom · Caderno · 45min · **Marco mês 6** — Você vai saber: Dados na linha. Auth é o próximo risco, não mais features de catálogo.

Rubrica:
- [ ] schema.sql reproduzível
- [ ] CRUD SQL sem interpolação
- [ ] EXPLAIN de 1 query quente
- [ ] Nota MySQL escrita

---

## S25 · Auth de verdade

Mês 7 · fase 3 · 435 min

**SMART:** Até domingo o admin exige login. Cookie httpOnly. Sem JWT no localStorage.

**Fatia da Vitrine:** Um usuário: você. Sem 'social login' neste mês.

- [ ] S25D1 · Seg · Linha · 60min · **Sessão vs JWT** — Você vai saber: Você escolhe cookie de sessão (Better Auth ou Fastify session+JWT em cookie). · [Better Auth](https://www.better-auth.com/docs)
- [ ] S25D2 · Ter · Linha · 60min · **Register/login/logout** — Você vai saber: Hash de senha (scrypt/argon/bcrypt). Rate limit burro no login.
- [ ] S25D3 · Qua · Linha · 60min · **Proteger rotas** — Você vai saber: POST de produto sem cookie = 401. O Next admin também.
- [ ] S25D4 · Qui · Linha · 60min · **CSRF e cookie flags** — Você vai saber: SameSite, Secure, HttpOnly. Você explica cada flag. · [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [ ] S25D5 · Sex · Go · 60min · **Go G17 · middleware de auth conceitual** — Você vai saber: Não implementa OAuth. Só: função que recusa sem header.
- [ ] S25D6 · Sab · Projeto · 90min · **Admin trancado** — Você vai saber: Você só entra com senha. Logout funciona.
- [ ] S25D7 · Dom · Caderno · 45min · **Ameaça** — Você vai saber: 3 jeitos de alguém roubar seu admin — e o que já bloqueia.

---

## S26 · OWASP na API

Mês 7 · fase 3 · 435 min

**SMART:** Até domingo você percorre um checklist curto e corrige o que a Vitrine tem de buraco óbvio.

**Fatia da Vitrine:** Headers de segurança, validação, limites.

- [ ] S26D1 · Seg · Linha · 60min · **XSS** — Você vai saber: Nada de HTML de produto sem escape. React já ajuda — você não usa dangerouslySetInnerHTML. · [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [ ] S26D2 · Ter · Linha · 60min · **CSRF, clickjacking, headers** — Você vai saber: helmet (ou headers manuais): nosniff, frame deny, HSTS só em prod.
- [ ] S26D3 · Qua · Linha · 60min · **Mass assignment e IDOR** — Você vai saber: Admin não aceita `role=admin` no body. IDs UUID ou serial internos.
- [ ] S26D4 · Qui · Linha · 60min · **Rate limit** — Você vai saber: click-out e login limitados. @fastify/rate-limit.
- [ ] S26D5 · Sex · Go · 60min · **Go G18 · revisão metade da trilha** — Você vai saber: Relê G01–G17. Marca 3 buracos. Sem feature Go nova.
- [ ] S26D6 · Sab · Projeto · 90min · **Checklist colado no README** — Você vai saber: Seção Segurança com o que foi feito. Cru, não marketing.
- [ ] S26D7 · Dom · Caderno · 45min · **Buracos que restam** — Você vai saber: O que fase 2 ainda precisa (WAF, 2FA). Não faz agora.

---

## S27 · Upload de imagem

Mês 7 · fase 3 · 435 min

**SMART:** Até domingo o produto tem imagem: upload autenticado ou URL da plataforma, com limite de tamanho.

**Fatia da Vitrine:** CDN cara não entra. Cloudinary free, S3-compat, ou storage do host. Máquina fraca: não processe 20MB local.

- [ ] S27D1 · Seg · Linha · 60min · **Multipart e limites** — Você vai saber: MIME allowlist, 2MB max, nome aleatório. Sem path traversal.
- [ ] S27D2 · Ter · Linha · 60min · **Guardar URL, não o binário no Git** — Você vai saber: Coluna image_url. Arquivos fora do git.
- [ ] S27D3 · Qua · Linha · 60min · **Imagem da plataforma** — Você vai saber: Campo opcional: colar URL da Amazon/ML se a API não estiver acessível.
- [ ] S27D4 · Qui · Linha · 60min · **next/image remoto** — Você vai saber: remotePatterns configurado. Sem quebrar o build. · [Next.js Docs](https://nextjs.org/docs)
- [ ] S27D5 · Sex · Go · 60min · **Go G19 · io.Reader** — Você vai saber: Ler um arquivo e copiar. Mental model de streams, 1h. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S27D6 · Sab · Projeto · 90min · **Card com foto real** — Você vai saber: Os 5 produtos têm imagem de verdade, não placeholder cinza.
- [ ] S27D7 · Dom · Caderno · 45min · **API das plataformas** — Você vai saber: Amazon/ML: o que você conseguiu. Se zero acesso, o plano de URL colada vale.

---

## S28 · Pin 2 · API + admin · PIN-2 API + admin

Mês 7 · fase 3 · 435 min

**SMART:** Até domingo o backend está no ar (Railway/Fly/Render — o mais simples), o admin autentica, o click-out funciona.

**Fatia da Vitrine:** Este é o pin 2. Pode ser o mesmo repo (monorepo leve) ou `vitrine-api`.

- [ ] S28D1 · Seg · Linha · 60min · **Subir a API** — Você vai saber: URL pública da API. Postgres hospedado (Neon).
- [ ] S28D2 · Ter · Linha · 60min · **Next aponta para prod API** — Você vai saber: env pública só com URL. Segredo nunca no client.
- [ ] S28D3 · Qua · Linha · 60min · **Click-out em produção** — Você vai saber: Um clique seu aparece na tabela clicks.
- [ ] S28D4 · Qui · Linha · 60min · **README pin 2** — Você vai saber: Como rodar, como migrar, print do admin (sem senha).
- [ ] S28D5 · Sex · Go · 60min · **Go G20 · pausa consciente** — Você vai saber: Ler Gin que você já fez. Sem capítulo novo: semana de pin.
- [ ] S28D6 · Sab · Projeto · 90min · **Pin 2 no perfil** — Você vai saber: Evidência: API viva + admin + SQL cru.
- [ ] S28D7 · Dom · Caderno · 45min · **Marco mês 7** — Você vai saber: Fullstack JS da Vitrine existe. Pagamento e motion pesada são o próximo corte de risco.

Rubrica:
- [ ] API pública
- [ ] Login no admin
- [ ] Click grava no Postgres
- [ ] Imagens reais
- [ ] README de segurança

---

## S29 · Pagamentos (lab, não a vitrine)

Mês 8 · fase 4 · 435 min

**SMART:** Até domingo um repo separado cobra 1 produto de teste (Stripe test mode) e mostra um PIX copiável.

**Fatia da Vitrine:** A vitrine de afiliado NÃO cobra o visitante. Este lab é o pin-opcional de SaaS.

- [ ] S29D1 · Seg · Linha · 60min · **Por que lab separado** — Você vai saber: Você escreve no README: afiliado ≠ checkout. Misturar é projeto grande demais.
- [ ] S29D2 · Ter · Linha · 60min · **Stripe Checkout test** — Você vai saber: 1 produto, webhook de `paid`, página de obrigado. · [Stripe Checkout](https://docs.stripe.com/checkout/quickstart)
- [ ] S29D3 · Qua · Linha · 60min · **PIX** — Você vai saber: Copia e cola ou Mercado Pago test. O mínimo que um cliente BR pergunta.
- [ ] S29D4 · Qui · Linha · 60min · **Idempotência do webhook** — Você vai saber: O mesmo evento duas vezes não cria 2 pedidos.
- [ ] S29D5 · Sex · Go · 60min · **Go G21 · goroutine hello** — Você vai saber: 10 goroutines, waitgroup. Sem channel ainda. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S29D6 · Sab · Projeto · 90min · **Micro · checkout-1** — Você vai saber: Repo `checkout-1` público. Não grudar na Vitrine.
- [ ] S29D7 · Dom · Caderno · 45min · **Pagamento no discurso** — Você vai saber: Como você conta isso numa vaga: 'lab de checkout, vitrine é afiliado'.

---

## S30 · WebSocket

Mês 8 · fase 4 · 435 min

**SMART:** Até domingo o admin vê cliques ao vivo (ou um feed ping). 1 conexão, 1 canal.

**Fatia da Vitrine:** Feature da Vitrine: tosta/linha nova quando alguém clica.

- [ ] S30D1 · Seg · Linha · 60min · **WS vs HTTP** — Você vai saber: Você desenha o handshake. Sem Socket.IO se Fastify websocket plugin der conta. · [MDN · WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [ ] S30D2 · Ter · Linha · 60min · **Servidor WS** — Você vai saber: Broadcast de `{productId, at}` para o admin.
- [ ] S30D3 · Qua · Linha · 60min · **Cliente no admin** — Você vai saber: Lista viva. Reconnect simples.
- [ ] S30D4 · Qui · Linha · 60min · **Não escalar cedo** — Você vai saber: Sem Redis pub/sub (fase 2). Um processo.
- [ ] S30D5 · Sex · Go · 60min · **Go G22 · channels** — Você vai saber: Ping-pong entre duas goroutines. Select com timeout. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S30D6 · Sab · Projeto · 90min · **Feed de cliques** — Você vai saber: Você clica no mobile e vê no admin no desktop.
- [ ] S30D7 · Dom · Caderno · 45min · **Tempo real** — Você vai saber: 1 parágrafo: o que quebra se o servidor cair (cliques HTTP ainda funcionam).

---

## S31 · Pipeline de scroll-video

Mês 8 · fase 4 · 435 min

**SMART:** Até domingo você tem um clip de 3–6s (gerado por IA se quiser) convertível em sequência e um proto no browser.

**Fatia da Vitrine:** Ainda não precisa estar na home. Lab na trilha design.

- [ ] S31D1 · Seg · Design · 60min · **O que é o pipeline caro** — Você vai saber: Vídeo → frames/spritesheet/canvas. Você escolhe UM método e escreve por quê.
- [ ] S31D2 · Ter · Linha · 60min · **Scroll controla o frame** — Você vai saber: Proto: scroll mapeia para frame. 390px não pode morrer.
- [ ] S31D3 · Qua · Linha · 60min · **Peso** — Você vai saber: Orçamento: quantos KB. Se passou, menos frames, mais compressão.
- [ ] S31D4 · Qui · Linha · 60min · **Fallback** — Você vai saber: Mobile low-end: imagem estática. Reduced-motion: imagem.
- [ ] S31D5 · Sex · Go · 60min · **Go G23 · worker pool simples** — Você vai saber: N workers, jobs de um channel, resultados no outro.
- [ ] S31D6 · Sab · Projeto · 90min · **Micro · scroll-video proto** — Você vai saber: Repo ou pasta `/labs/scroll-video`. 6s.
- [ ] S31D7 · Dom · Caderno · 45min · **Material de IA** — Você vai saber: De onde veio o clip, prompt, licença. Você não finge que filmou.

---

## S32 · Capstone: stats + proto na home

Mês 8 · fase 4 · 435 min

**SMART:** Até domingo o admin tem contagem por produto e o proto de scroll-video cabe no hero (ou em `/studio`).

**Fatia da Vitrine:** Se o hero ficar pesado, `/studio` é a decisão certa. Anote.

- [ ] S32D1 · Seg · Linha · 60min · **Query de stats** — Você vai saber: COUNT de clicks por produto, últimos 7 dias. SQL.
- [ ] S32D2 · Ter · Linha · 60min · **Tela admin de stats** — Você vai saber: Tabela, não dashboard com 8 gráficos. Recharts só se couber em 1h.
- [ ] S32D3 · Qua · Design · 60min · **Hero ou /studio** — Você vai saber: Decisão de produto: o scroll-video vive onde o 60fps sobrevive.
- [ ] S32D4 · Qui · Linha · 60min · **Integrar ou isolar** — Você vai saber: PR pequeno. Se quebrar a home, reverte. Pin 1 não morre.
- [ ] S32D5 · Sex · Go · 60min · **Go G24 · context + worker** — Você vai saber: Cancelar o pool. Teste de não vazar goroutine (intuição, não pprof).
- [ ] S32D6 · Sab · Projeto · 90min · **Stats reais** — Você vai saber: Você gera 20 cliques e a tabela não mente.
- [ ] S32D7 · Dom · Caderno · 45min · **Marco mês 8** — Você vai saber: Pagamento (lab), WS, proto motion. Mês 9 é a assinatura visual.

Rubrica:
- [ ] Checkout-1 no GitHub
- [ ] WS de clicks
- [ ] Proto scroll-video
- [ ] Stats SQL

---

## S33 · Scroll-video de produção

Mês 9 · fase 4 · 435 min

**SMART:** Até domingo a peça de motion está no ar em URL própria ou `/studio`, 390px usável, fallback ok.

**Fatia da Vitrine:** Este trabalho vira o pin 3 se o resto do mês fechar.

- [ ] S33D1 · Seg · Design · 60min · **Direção** — Você vai saber: 1 ideia: o que o scroll conta. Sem isso é demo de tecnologia.
- [ ] S33D2 · Ter · Linha · 60min · **Implementação final** — Você vai saber: Pipeline escolhido na S31, agora polido. GSAP se ajudar o scrub. · [GSAP Docs](https://gsap.com/docs/v3/)
- [ ] S33D3 · Qua · Linha · 60min · **Android real** — Você vai saber: Teste no seu telefone. Se jank: corta frames, não 'otimiza depois'.
- [ ] S33D4 · Qui · Linha · 60min · **Acessível o bastante** — Você vai saber: Pause, fallback, não prende scroll de quem não pediu.
- [ ] S33D5 · Sex · Go · 60min · **Go G25 · HTTP timeouts** — Você vai saber: Server com ReadHeaderTimeout. Hábito de produção.
- [ ] S33D6 · Sab · Projeto · 90min · **Peça no ar** — Você vai saber: URL. Take de 15s no celular.
- [ ] S33D7 · Dom · Caderno · 45min · **O que essa peça prova** — Você vai saber: Frase para o README: diferencial de carreira, não tutorial GSAP.

---

## S34 · Three.js lab (contido)

Mês 9 · fase 4 · 420 min

**SMART:** Até domingo uma cena mínima (1 objeto, 1 luz, 1 câmera) roda. Não entra na home se não servir o produto.

**Fatia da Vitrine:** Lab. Se hiperfoco, para no domingo.

- [ ] S34D1 · Seg · Linha · 60min · **Cena, câmera, renderer** — Você vai saber: Canvas 1 objeto. Sem modelo de 40MB. · [Three.js Fundamentals](https://threejs.org/manual/#en/fundamentals)
- [ ] S34D2 · Ter · Linha · 60min · **Controle de dispose** — Você vai saber: Unmount não vaza. Você prova recarregando 10 vezes.
- [ ] S34D3 · Qua · Linha · 60min · **WebGL: o que é** — Você vai saber: 1 página no caderno: GPU, shader, por que Three existe. Sem GLSL ainda.
- [ ] S34D4 · Qui · Design · 45min · **Serve à Vitrine?** — Você vai saber: Sim ou não. Se não, o lab fica em `/labs/three` e pronto.
- [ ] S34D5 · Sex · Go · 60min · **Go G26 · embedding e io/fs** — Você vai saber: embed de um JSON de products. Binário único.
- [ ] S34D6 · Sab · Projeto · 90min · **Micro · objeto** — Você vai saber: README de 8 linhas. Não é o pin.
- [ ] S34D7 · Dom · Caderno · 45min · **Corte honesto** — Você vai saber: Three não é senior. É alfabetização. Fase 2 se quiser WebGL de verdade.

---

## S35 · Home cinematográfica

Mês 9 · fase 4 · 435 min

**SMART:** Até domingo a home pública mistura hierarquia, motion e a peça de scroll sem parecer template.

**Fatia da Vitrine:** Refino. Proibido feature de backend nesta semana.

- [ ] S35D1 · Seg · Design · 60min · **Direção da home v2** — Você vai saber: Figma atualizado. 390 primeiro. · [Figma Learn](https://help.figma.com/hc/en-us/articles/360040328614-Get-started-with-Figma-Design)
- [ ] S35D2 · Ter · Linha · 60min · **Implementar home v2** — Você vai saber: Tipo, espaço, hero, grade. GSAP/Framer só onde já existia critério.
- [ ] S35D3 · Qua · Linha · 60min · **Copy** — Você vai saber: Títulos verdadeiros. Disclaimer visível. CTA único por bloco.
- [ ] S35D4 · Qui · Linha · 60min · **Passada de bugs visuais** — Você vai saber: Overflow, foco, hover caro demais — corta.
- [ ] S35D5 · Sex · Go · 60min · **Go G27 · gin + sql um GET** — Você vai saber: Reconecta o ping da G15. Rota GET /products no Gin contra o mesmo banco. · [Gin Docs](https://gin-gonic.com/docs/)
- [ ] S35D6 · Sab · Projeto · 90min · **Home v2 no ar** — Você vai saber: Substitui a v1. Tag `home-v2`.
- [ ] S35D7 · Dom · Caderno · 45min · **Olhar de estúdio** — Você vai saber: Peça para alguém leigo abrir. Anote a primeira frase dela.

---

## S36 · Pin 3 · assinatura + Vitrine v1 · PIN-3 assinatura + v1

Mês 9 · fase 4 · 435 min

**SMART:** Até domingo o GitHub tem o pin 3 (peça de motion ou a Vitrine inteira se a home carregar a assinatura) e um case study.

**Fatia da Vitrine:** Capstone v1: pública, com produtos reais, click-out, admin, stats.

- [ ] S36D1 · Seg · Linha · 60min · **Case study** — Você vai saber: README: problema, restrições, stack, prints, URL, o que cortou.
- [ ] S36D2 · Ter · Linha · 60min · **Tag v1.0 da Vitrine** — Você vai saber: Git tag. O que entrar depois é v1.1, não 'quase pronto'.
- [ ] S36D3 · Qua · Linha · 60min · **Pin 3** — Você vai saber: Perfil com 3 pins se o checkout-1 merecer, ou 2 + motion.
- [ ] S36D4 · Qui · Linha · 60min · **Checklist v1** — Você vai saber: Rubrica abaixo verde ou corte declarado.
- [ ] S36D5 · Sex · Go · 60min · **Go G28 · testes do GET** — Você vai saber: `go test` na rota. httptest.
- [ ] S36D6 · Sab · Projeto · 90min · **Vitrine v1** — Você vai saber: Você usa o link nas redes de verdade, mesmo com 5 produtos.
- [ ] S36D7 · Dom · Caderno · 45min · **Marco mês 9** — Você vai saber: Produto existe no mundo. Mês 10 é empregabilidade (Nest) e Go SQL.

Rubrica:
- [ ] Vitrine v1 nas redes
- [ ] Motion no ar com fallback
- [ ] Case study
- [ ] 3 pins ou corte consciente do 3º

---

## S37 · Recuperação 2 + mapa Nest · recuperação

Mês 10 · fase 5 · 435 min

**SMART:** Semana mais leve: você lê o mapa Nest e fecha buracos da v1. Sem reescrever a Vitrine em Nest.

**Fatia da Vitrine:** Nest é módulo de emprego, não o backend da Vitrine.

- [ ] S37D1 · Seg · Folga · 60min · **Bugs da v1** — Você vai saber: Só o que dói no uso real.
- [ ] S37D2 · Ter · Linha · 60min · **Por que Nest nas vagas BR** — Você vai saber: Módulos, DI, guards. Você mapeia para o que já fez em Fastify. · [NestJS Docs](https://docs.nestjs.com/)
- [ ] S37D3 · Qua · Linha · 60min · **Scaffold Nest** — Você vai saber: Repo `nest-lab`. Hello world. Não é a Vitrine. · [NestJS Docs](https://docs.nestjs.com/)
- [ ] S37D4 · Qui · Linha · 60min · **Module, controller, provider** — Você vai saber: Um resource `products` fake. Mesma forma mental do Fastify plugin.
- [ ] S37D5 · Sex · Go · 60min · **Go G29 · POST JSON** — Você vai saber: Gin POST cria product em memória. Bind JSON. · [Gin Docs](https://gin-gonic.com/docs/)
- [ ] S37D6 · Sab · Projeto · 90min · **Não tocar na v1 sem bug** — Você vai saber: Disciplina. Hiperfoco vai para o nest-lab, não para 'reescrever tudo'.
- [ ] S37D7 · Dom · Caderno · 45min · **Tradução Fastify→Nest** — Você vai saber: Tabela: plugin≈module, hook≈guard, schema≈DTO/pipe.

---

## S38 · Nest: DTO, pipe, guard

Mês 10 · fase 5 · 435 min

**SMART:** Até domingo o nest-lab tem CRUD in-memory, validação e um guard de API key.

**Fatia da Vitrine:** Profundidade: o suficiente para uma prova prática júnior/pleno.

- [ ] S38D1 · Seg · Linha · 60min · **DTO + ValidationPipe** — Você vai saber: POST podre = 400. class-validator ou zod adapter, o que a doc canônica usar. · [NestJS Docs](https://docs.nestjs.com/)
- [ ] S38D2 · Ter · Linha · 60min · **Guard e decorator** — Você vai saber: Rota admin exige header. Teste e2e Nest.
- [ ] S38D3 · Qua · Linha · 60min · **ConfigModule** — Você vai saber: env tipada. Sem secret no git.
- [ ] S38D4 · Qui · Linha · 60min · **Estrutura de pastas** — Você vai saber: Você explica um repo Nest em entrevista em 2 minutos.
- [ ] S38D5 · Sex · Go · 60min · **Go G30 · persistir POST no SQL** — Você vai saber: INSERT com database/sql. Mesmo Postgres.
- [ ] S38D6 · Sab · Projeto · 90min · **README nest-lab** — Você vai saber: Como rodar, o que imita da Vitrine, o que não imita.
- [ ] S38D7 · Dom · Caderno · 45min · **Entrevista** — Você vai saber: 3 perguntas possíveis sobre Nest e sua resposta em PT.

---

## S39 · Nest + SQL (opcional raso) e TypeORM/Prisma de olho

Mês 10 · fase 5 · 435 min

**SMART:** Até domingo você conecta o nest-lab no Postgres OU documenta por que ficou in-memory (corte de profundidade).

**Fatia da Vitrine:** ORM aparece como leitura. O capstone continua SQL cru.

- [ ] S39D1 · Seg · Linha · 60min · **Ler um ORM, não casar** — Você vai saber: Prisma ou Drizzle: o que gera, o que esconde. 1h. Capstone não migra.
- [ ] S39D2 · Ter · Linha · 60min · **Nest e Postgres** — Você vai saber: 1 GET com SQL cru via driver, se der tempo. Sem TypeORM obrigatório. · [NestJS Docs](https://docs.nestjs.com/)
- [ ] S39D3 · Qua · Linha · 60min · **Teste e2e** — Você vai saber: Supertest na rota products.
- [ ] S39D4 · Qui · Linha · 60min · **Cortar ou pin-lab** — Você vai saber: Se o lab está apresentável, pin opcional. Se não, README honesto chega.
- [ ] S39D5 · Sex · Go · 60min · **Go G31 · transactions** — Você vai saber: Begin/Commit/Rollback em Go no INSERT.
- [ ] S39D6 · Sab · Projeto · 90min · **Não reescrever Vitrine** — Você vai saber: Confirma: produção continua Fastify.
- [ ] S39D7 · Dom · Caderno · 45min · **ORM no futuro** — Você vai saber: Fase 2: Drizzle depois do capstone, como você pediu.

---

## S40 · Go REST + SQL (sprint)

Mês 10 · fase 5 · 465 min

**SMART:** Até domingo o catálogo em Go lê e cria product no mesmo banco (ou num schema `go_lab`).

**Fatia da Vitrine:** Evidência Go: API pequena, SQL cru, testes. Não é segundo capstone.

- [ ] S40D1 · Seg · Go · 60min · **Go G32 · layout do serviço** — Você vai saber: cmd/api, internal/products. Sem hexagono de livro.
- [ ] S40D2 · Ter · Go · 90min · **Go G33 · Gin + sqlc ou sql cru** — Você vai saber: GET/POST products. sqlc se couber; senão database/sql. · [Gin Docs](https://gin-gonic.com/docs/)
- [ ] S40D3 · Qua · Go · 60min · **Go G34 · testes httptest + sql** — Você vai saber: 2 testes. Verde.
- [ ] S40D4 · Qui · Linha · 60min · **README go-catalog** — Você vai saber: Como rodar, o que compartilha com a Vitrine (banco), o que não.
- [ ] S40D5 · Sex · Go · 60min · **Go G35 · race detector** — Você vai saber: `go test -race` uma vez. Se falhar, lê o stack. Se passar, segue.
- [ ] S40D6 · Sab · Projeto · 90min · **Repo go-catalog público** — Você vai saber: Evidência, não produto. Link no README da Vitrine.
- [ ] S40D7 · Dom · Caderno · 45min · **Marco mês 10** — Você vai saber: Nest-lab + Go SQL. Você não é sênior Go. O vault não mente.

Rubrica:
- [ ] nest-lab explica DI/guards
- [ ] go-catalog GET/POST + SQL
- [ ] Vitrine v1 intacta

---

## S41 · PWA

Mês 11 · fase 5 · 435 min

**SMART:** Até domingo a Vitrine instala no Android (ícone, offline raso da home).

**Fatia da Vitrine:** Mesmo código web. Sem store.

- [ ] S41D1 · Seg · Linha · 60min · **Manifest e ícones** — Você vai saber: Instalável no Chrome Android. · [web.dev PWA](https://web.dev/learn/pwa/)
- [ ] S41D2 · Ter · Linha · 60min · **Service worker mínimo** — Você vai saber: Precache da shell. Sem inventar sync.
- [ ] S41D3 · Qua · Linha · 60min · **Offline honesto** — Você vai saber: Se a API cair, a home cacheada aparece com aviso. Sem milagre.
- [ ] S41D4 · Qui · Linha · 60min · **Teste no telefone** — Você vai saber: Adicionar à tela inicial. Print no README.
- [ ] S41D5 · Sex · Go · 60min · **Go G36 · concurrency review** — Você vai saber: Reler channels/select. 3 exercícios pequenos ou notas. · [Effective Go](https://go.dev/doc/effective_go)
- [ ] S41D6 · Sab · Projeto · 90min · **PWA no ar** — Você vai saber: Critério: ícone na sua tela inicial.
- [ ] S41D7 · Dom · Caderno · 45min · **Mobile web** — Você vai saber: O que ainda não é app de loja — e está ok.

---

## S42 · Capacitor no Android

Mês 11 · fase 5 · 435 min

**SMART:** Até domingo um APK ou build de debug abre a Vitrine no seu Android. Sem Play Store.

**Fatia da Vitrine:** Não instale Android Studio no dia 1 se a RAM morrer: use o fluxo mais leve da doc, ou um só wrap no final de semana de hiperfoco.

- [ ] S42D1 · Seg · Linha · 60min · **Capacitor wrap** — Você vai saber: Projeto add android. A WebView carrega a URL prod ou o dist. · [Capacitor Docs](https://capacitorjs.com/docs)
- [ ] S42D2 · Ter · Linha · 60min · **Detalhes de WebView** — Você vai saber: deep link não é obrigatório. Status bar ok.
- [ ] S42D3 · Qua · Linha · 60min · **Build de debug** — Você vai saber: APK no telefone. Print.
- [ ] S42D4 · Qui · Linha · 60min · **O que NÃO fazer** — Você vai saber: Sem Ionic UI. Sem plugins de câmera. Wrap é o portfólio.
- [ ] S42D5 · Sex · Go · 60min · **Go G37 · fuzz de uma função** — Você vai saber: Fuzz de parse de URL de afiliado, 1 função. Se a hora acabar, documenta o corte. · [Go fuzzing](https://go.dev/security/fuzz/)
- [ ] S42D6 · Sab · Projeto · 90min · **Binário no portfólio** — Você vai saber: README: 'APK de debug, não está na loja'.
- [ ] S42D7 · Dom · Caderno · 45min · **RN fica fase 2** — Você vai saber: Você escreve por que Capacitor bastou neste ano.

---

## S43 · Go concorrência aplicada

Mês 11 · fase 5 · 420 min

**SMART:** Até domingo o go-catalog tem um endpoint que dispara N trabalhos com limite de goroutines (ex.: checar URLs).

**Fatia da Vitrine:** Útil e pequeno. Sem crawler-monstro.

- [ ] S43D1 · Seg · Go · 60min · **Go G38 · errgroup** — Você vai saber: N GETs com limite. Erro cancela o resto.
- [ ] S43D2 · Ter · Go · 60min · **Go G39 · timeouts reais** — Você vai saber: context.WithTimeout em volta do pool.
- [ ] S43D3 · Qua · Linha · 60min · **Endpoint /check-links** — Você vai saber: Admin-only se ligar na Vitrine; senão só no go-catalog.
- [ ] S43D4 · Qui · Linha · 60min · **Teste do pool** — Você vai saber: Teste com httptest.Server falso.
- [ ] S43D5 · Sex · Go · 45min · **Go G40 · README de concorrência** — Você vai saber: Diagrama no Drawing: main, workers, ctx.
- [ ] S43D6 · Sab · Projeto · 90min · **go-catalog v0.2** — Você vai saber: Evidência de goroutine no portfólio, com advertência de nível.
- [ ] S43D7 · Dom · Caderno · 45min · **Nível Go** — Você vai saber: Júnior sólido / pleno inicial. Sênior está em [[fase-2]].

---

## S44 · Fechar mobile + Go

Mês 11 · fase 5 · 435 min

**SMART:** Até domingo PWA, APK, go-catalog e nest-lab têm README. A Vitrine v1.1 só se for bugfix.

**Fatia da Vitrine:** Mês 12 é renda, não feature.

- [ ] S44D1 · Seg · Linha · 60min · **Polimento PWA/APK** — Você vai saber: Ícone, nome, print.
- [ ] S44D2 · Ter · Linha · 60min · **Polimento go-catalog** — Você vai saber: go test verde. Sem panic em main.
- [ ] S44D3 · Qua · Linha · 60min · **Polimento nest-lab** — Você vai saber: O suficiente para clone em entrevista.
- [ ] S44D4 · Qui · Linha · 60min · **Inventário de evidências** — Você vai saber: Lista: pins, URLs, APK, labs. Vai para o calendário mês 12.
- [ ] S44D5 · Sex · Design · 60min · **Thumb do portfólio** — Você vai saber: 3 prints bons. Sem mockup genérico de template.
- [ ] S44D6 · Sab · Projeto · 90min · **Freeze de feature** — Você vai saber: Tag `pre-renda`. Feature nova = mentira para o mês 12.
- [ ] S44D7 · Dom · Caderno · 45min · **Marco mês 11** — Você vai saber: Você tem web + API + lab Nest + lab Go + wrap mobile. Isso é o ano.

Rubrica:
- [ ] PWA instalada
- [ ] APK no telefone
- [ ] go-catalog com teste e concorrência pequena
- [ ] nest-lab apresentável
- [ ] Feature freeze

---

## S45 · Portfólio como produto

Mês 12 · fase 6 · 420 min

**SMART:** Até domingo um site (pode ser a própria Vitrine `/sobre` + GitHub) conta a história do ano em 3 peças.

**Fatia da Vitrine:** Não comece um portfólio-framework novo. Use Next que você já domina.

- [ ] S45D1 · Seg · Linha · 60min · **Narrativa** — Você vai saber: 3 blocos: Vitrine, motion, API/Go. Cada um com 1 prova.
- [ ] S45D2 · Ter · Design · 60min · **Página de case** — Você vai saber: Tipo e espaço. Você é o cliente de si mesmo.
- [ ] S45D3 · Qua · Linha · 60min · **Sobre honesto** — Você vai saber: ADS, 1h/dia, o que corta, o que entrega. Recrutador não é inimigo.
- [ ] S45D4 · Qui · Linha · 60min · **Links mortos** — Você vai saber: Todas as URLs do README abrem.
- [ ] S45D5 · Sex · Go · 45min · **Manutenção Go** — Você vai saber: Se quebrado, conserta. Senão, não inventa G41.
- [ ] S45D6 · Sab · Projeto · 90min · **Portfólio no ar** — Você vai saber: URL única para mandar no WhatsApp.
- [ ] S45D7 · Dom · Caderno · 45min · **Frase de posicionamento** — Você vai saber: Front Next + API Fastify + SQL + motion. Go em progresso.

---

## S46 · Oferta freelance

Mês 12 · fase 6 · 435 min

**SMART:** Até domingo existe uma oferta de 1 parágrafo para landing com motion / vitrine de afiliados / site de 1 produto.

**Fatia da Vitrine:** Renda primeiro caminho: B depois de C. Vaga é a semana seguinte.

- [ ] S46D1 · Seg · Linha · 60min · **Oferta** — Você vai saber: Quem, o quê, prazo, preço de entrada (honesto para júnior).
- [ ] S46D2 · Ter · Linha · 60min · **Onde publicar** — Você vai saber: 3 lugares reais (comunidade, LinkedIn, indicação). Sem 30 plataformas.
- [ ] S46D3 · Qua · Linha · 60min · **Proposta modelo** — Você vai saber: Arquivo no vault: escopo, fora de escopo, 2 revisões.
- [ ] S46D4 · Qui · Design · 60min · **1 página de serviço** — Você vai saber: Pode ser rota `/trabalhe-comigo`. Sem pop-up.
- [ ] S46D5 · Sex · Linha · 60min · **PIX e contrato mínimo** — Você vai saber: Como cobra sinal. Lab de pagamento ajuda a história.
- [ ] S46D6 · Sab · Projeto · 90min · **Mandar 5 mensagens** — Você vai saber: Não é teoria. 5 envios reais ou 5 conversas.
- [ ] S46D7 · Dom · Caderno · 45min · **O que travou** — Você vai saber: Medo de preço, de texto, de recusa. Uma linha cada.

---

## S47 · Vagas BR + remoto

Mês 12 · fase 6 · 435 min

**SMART:** Até domingo 10 candidaturas saíram (BR e/ou remoto) com CV e GitHub alinhados ao que você de fato fez.

**Fatia da Vitrine:** Não se candidate a sênior Go. Pleno Next/Node ou júnior forte.

- [ ] S47D1 · Seg · Linha · 60min · **CV de 1 página** — Você vai saber: Stack real. Links. Sem 'dominio de Nest' se foi lab.
- [ ] S47D2 · Ter · Linha · 60min · **LinkedIn / GitHub clean** — Você vai saber: Pins certos. Bio em PT e 2 linhas EN.
- [ ] S47D3 · Qua · Linha · 60min · **5 vagas BR** — Você vai saber: Next/Node/Postgres. Mandou.
- [ ] S47D4 · Qui · Linha · 60min · **5 vagas remoto** — Você vai saber: Inglês com esforço: você avisa o nível. Não some.
- [ ] S47D5 · Sex · Linha · 60min · **Perguntas técnicas que você aguenta** — Você vai saber: HTTP, SQL, Next server/client, um pouco de Nest, um pouco de Go.
- [ ] S47D6 · Sab · Projeto · 90min · **Pasta de processos** — Você vai saber: Planilha: vaga, data, status. Fora isso é caos.
- [ ] S47D7 · Dom · Caderno · 45min · **Depois da recusa** — Você vai saber: Protocolo: anotar, não redesenhar o ano inteiro.

---

## S48 · Fechamento do vault

Mês 12 · fase 6 · 420 min

**SMART:** Até domingo o changelog pessoal está escrito, a fase 2 priorizada, e o que não coube foi cortado por escrito.

**Fatia da Vitrine:** v1 do plano congela. Você não reescreve o vault por ansiedade.

- [ ] S48D1 · Seg · Caderno · 60min · **O que o ano entregou** — Você vai saber: Lista de evidências. Números: URLs, repos, APK.
- [ ] S48D2 · Ter · Linha · 60min · **Cortes** — Você vai saber: O que 3.6 comeu: Nest raso? Fuzz? Three? Está no changelog.
- [ ] S48D3 · Qua · Linha · 60min · **Fase 2 ordenada** — Você vai saber: Top 5 de [[fase-2]], não 40 itens.
- [ ] S48D4 · Qui · Linha · 60min · **Manutenção da Vitrine** — Você vai saber: Como você vai 1h/semana só para não morrer, se a renda vier.
- [ ] S48D5 · Sex · Design · 45min · **Arquivo da peça** — Você vai saber: Os prompts/IA e os frames, pasta única.
- [ ] S48D6 · Sab · Projeto · 90min · **v1.0 frozen** — Você vai saber: Tag `ano-1`. README final.
- [ ] S48D7 · Dom · Caderno · 45min · **Carta para você daqui 6 meses** — Você vai saber: 1 página. O que não fazer de novo (projeto grande, trilha paralela diária).

Rubrica:
- [ ] Portfólio URL
- [ ] Oferta freelance enviada
- [ ] 10 candidaturas
- [ ] Changelog pessoal
- [ ] Fase 2 com 5 itens

---

## S49 · Recuperação 3 · folga de fim de linha · recuperação

Mês 12 · fase 6 · 255 min

**SMART:** Semana de ar. Só se candidatura/freelance estiver quente: responde. Sem tópico novo.

**Fatia da Vitrine:** Capstone só se produção quebrar.

- [ ] S49D1 · Seg · Folga · 30min · **Descanso** — Você vai saber: Válido. Está no plano.
- [ ] S49D2 · Ter · Folga · 45min · **Responder processos** — Você vai saber: Se nada chegou, não inventa stack nova.
- [ ] S49D3 · Qua · Folga · 45min · **Ler o caderno** — Você vai saber: Padrões do ano.
- [ ] S49D4 · Qui · Design · 30min · **Olhar referências sem copiar** — Você vai saber: 30 min. Sem Figma novo.
- [ ] S49D5 · Sex · Go · 30min · **Tour residual** — Você vai saber: Opcional. Zero culpa se pular.
- [ ] S49D6 · Sab · Projeto · 30min · **Produção** — Você vai saber: Só bug.
- [ ] S49D7 · Dom · Caderno · 45min · **Silêncio** — Você vai saber: Uma linha: 'semana 49, ainda na linha'.

---

## S50 · Hiperfoco residual 1

Mês 12 · fase 6 · 405 min

**SMART:** Se a renda ainda não veio: 7h desta semana em candidatura + 1 melhoria visível no portfólio. Sem curso novo.

**Fatia da Vitrine:** Melhoria = copy ou performance da peça, não 'migrar para Nest'.

- [ ] S50D1 · Seg · Linha · 60min · **Mais 5 vagas** — Você vai saber: Mandou.
- [ ] S50D2 · Ter · Linha · 60min · **Follow-up** — Você vai saber: 2 follow-ups educados.
- [ ] S50D3 · Qua · Linha · 60min · **Uma melhoria visível** — Você vai saber: Home ou case. 2 horas no máximo.
- [ ] S50D4 · Qui · Linha · 60min · **Freelance: 5 novos envios** — Você vai saber: Ou 1 proposta melhor escrita.
- [ ] S50D5 · Sex · Folga · 30min · **Corte de ruído** — Você vai saber: Sai de tutorial aleatório. Volta à linha.
- [ ] S50D6 · Sab · Projeto · 90min · **Deploy se mudou** — Você vai saber: URL atualizada.
- [ ] S50D7 · Dom · Caderno · 45min · **O que ainda é medo** — Você vai saber: Nomeia. Não resolve tudo.

---

## S51 · Hiperfoco residual 2

Mês 12 · fase 6 · 420 min

**SMART:** Igual à 50, com teto. Se um processo avançou, o plano da semana vira 'passar na entrevista' — SQL, HTTP, Next.

**Fatia da Vitrine:** Estudar o que a vaga pede, não o que o YouTube pede.

- [ ] S51D1 · Seg · Linha · 60min · **Entrevista: HTTP+SQL** — Você vai saber: Você explica EXPLAIN e cookie em voz alta, 10 min.
- [ ] S51D2 · Ter · Linha · 60min · **Entrevista: Next** — Você vai saber: Server vs client, um exemplo da Vitrine.
- [ ] S51D3 · Qua · Linha · 60min · **Entrevista: Fastify/Nest** — Você vai saber: Por que a Vitrine é Fastify e o lab é Nest.
- [ ] S51D4 · Qui · Linha · 60min · **Entrevista: Go** — Você vai saber: Nível real. Goroutine, channel, SQL. Sem mentir sênior.
- [ ] S51D5 · Sex · Folga · 45min · **Simulacro** — Você vai saber: Grava a própria voz 5 min. Assiste. Corta muletas.
- [ ] S51D6 · Sab · Projeto · 90min · **Repo limpo** — Você vai saber: Main buildable. README alinhado.
- [ ] S51D7 · Dom · Caderno · 45min · **Perguntas que você não sabe** — Você vai saber: Lista. Fase 2. Não descarrila o mês.

---

## S52 · Fim do v1

Mês 12 · fase 6 · 420 min

**SMART:** Você fecha o ano: vault v1 congelado, evidências listadas, fase 2 com data de início ou não.

**Fatia da Vitrine:** Se a renda veio, o plano cumpriu. Se não, o plano ainda cumpriu: há produto, há prova, há linha para o ano 2.

- [ ] S52D1 · Seg · Caderno · 60min · **Inventário final** — Você vai saber: Tudo que existe fora da sua cabeça.
- [ ] S52D2 · Ter · Linha · 60min · **Changelog v1.0 → arquivo morto** — Você vai saber: Próximas mudanças são v1.1, com data. Sem reescrever 00 Contrato por ansiedade.
- [ ] S52D3 · Qua · Linha · 60min · **Fase 2 data** — Você vai saber: Quando RN, Redis, system design começam — ou 'quando a renda estabilizar'.
- [ ] S52D4 · Qui · Linha · 60min · **Obrigado ao eu de 12 meses atrás** — Você vai saber: 1 parágrafo. Sério.
- [ ] S52D5 · Sex · Folga · 45min · **Fora da tela** — Você vai saber: Válido.
- [ ] S52D6 · Sab · Projeto · 90min · **Vitrine no ar** — Você vai saber: Continua. 5 produtos ainda valem.
- [ ] S52D7 · Dom · Caderno · 45min · **Fim da linha v1** — Você vai saber: Checkbox do ano. Você pode parar de estudar hoje e ainda tem um produto.

Rubrica:
- [ ] Vault congelado
- [ ] Evidências listadas
- [ ] Fase 2 datada ou explicitamente adiada
- [ ] Vitrine no ar

---
