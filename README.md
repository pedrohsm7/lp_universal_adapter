# BCM Landing Page

Uma landing page moderna e responsiva construída com React, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript, Vite
- **Estilização**: Tailwind CSS 4
- **Animações**: Framer Motion, Tailwind Animate

## Como Começar

### Pré-requisitos

- Node.js (v18 ou superior recomendado)
- `pnpm` (ou `npm`)

### Instalação

1. Clone o repositório.
2. Instale as dependências:

```bash
pnpm install
```

### Executando Localmente

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

### Gerando a Build de Produção

```bash
pnpm build
```

## Hospedagem na Vercel

Este projeto está configurado para ser hospedado facilmente na Vercel.

1. Envie seu código para um repositório no GitHub, GitLab ou Bitbucket.
2. Importe o projeto na [Vercel](https://vercel.com/).
3. A Vercel detectará automaticamente o framework Vite.
4. As configurações de build estão pré-definidas no arquivo `vercel.json`.

### Configuração Manual (se necessário)

Caso precise configurar manualmente na Vercel:
- **Framework Preset**: Vite
- **Build Command**: `pnpm build` (ou `npm run build`)
- **Output Directory**: `dist/public`
