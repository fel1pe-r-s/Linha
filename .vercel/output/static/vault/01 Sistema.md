---
id: MOD-01
ordem: 10
modulo: fase-0
status: nao-iniciado
pre-requisitos:
  - MOD-00.02
proxima: "02 Fundamentos"
anterior: "00 Calendario"
tempo-estimado: 1 semana
projeto: vitrine
atualizado: 2026-09-12
tags:
  - tipo/pratico
  - nivel/fundamento
  - status/nao-iniciado
---

← [[00 Calendario]] | [[02 Fundamentos]] →

# Fase 0 · Sistema

MOC: [[00 Contrato]] · [[00 Como usar]] · [[00 Caderno]] · [[projeto]]

Semana: S01. Sem framework. Sem Go. Sem 'só mais uma extensão'.

## Você vai saber fazer

Abrir este vault no Obsidian, commitar no GitHub, rodar `node -v` 22, escrever a primeira página do caderno, e ter uma frase de produto.

## Recurso canônico

[Pro Git, cap. 1–2](https://git-scm.com/book/en/v2)

## Ambiente

1. **Node 22 LTS** — obrigatório. nvm no Zorin; instalador no Windows se nvm pesar.
2. **Git**.
3. Editor: VS Code ou Cursor. Um.
4. Conta GitHub.
5. Obsidian com este kit numa pasta só.
6. **Bun**: instale se quiser. Se o Next reclamar, ignore o Bun. Não gaste a semana nisso.
7. Não instale Docker, Android Studio, Postgres local, três temas de terminal.

Máquina fraca: feche browser com 40 abas antes de `create-next-app` no mês 2. Agora você só clona e commita.

## Git mínimo (o avançado é eletiva)

```
git init
git add .
git commit -m "S01: repo da vitrine"
git branch -M main
git remote add origin URL
git push -u origin main
```

Você precisa disto para portfólio. Rebase interativo não entra neste ano a menos que uma vaga peça.

## Fatia da Vitrine

Nome provisório, 5 URLs de referência, 1 frase (para quem / o que / para onde o clique vai). Cole em [[projeto]].

## Rubrica S01

- [ ] Vault abre
- [ ] Node 22
- [ ] Repo existe
- [ ] Caderno tem página 1
- [ ] Frase de produto escrita

Se falhar: não comece CSS. Arrume o sistema. A linha inteira depende disto.
