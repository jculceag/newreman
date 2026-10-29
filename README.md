# NEW REMAN

Landing B2B da **NEW REMAN** ([newreman.com.br](https://newreman.com.br)): recuperadora de peças elétricas automotivas para oficinas.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Deploy: Vercel

## Desenvolvimento

```bash
cd newreman
cp .env.example .env.local
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Contatos e peças ficam em `src/lib/site.ts`.

## Brand

```
public/brand/
  new-reman-logo.png
  favicon.svg
```

## Deploy na Vercel + domínio

1. Crie o projeto na Vercel apontando para este repositório (`Framework Preset: Next.js`).
2. Variável: `NEXT_PUBLIC_SITE_URL=https://newreman.com.br`.
3. Em **Settings → Domains**, adicione `newreman.com.br` e `www.newreman.com.br`.
4. No registrador do domínio, configure o DNS conforme o painel da Vercel (em geral):
   - `A` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
5. Aguarde a propagação e confira o HTTPS no dashboard.

Região sugerida no `vercel.json`: `gru1` (São Paulo).
