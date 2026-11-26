# NEXORA Store

🇧🇷 **Português |** [🇺🇸 English](#nexora-store-english)

---

## 🇧🇷 Sobre o projeto

A **NEXORA Store** é uma aplicação de e-commerce fictícia desenvolvida com React, criada como projeto de portfólio para praticar e demonstrar habilidades em desenvolvimento Front-end.

A aplicação oferece uma experiência de loja virtual moderna, responsiva e interativa, com catálogo de produtos, pesquisa, filtros, favoritos, carrinho de compras e suporte a dois idiomas.

O projeto utiliza dados fictícios e não realiza transações financeiras reais.

**Repositório:** [github.com/kris-sand0/nexora-store](https://github.com/kris-sand0/nexora-store)

## Funcionalidades

- Catálogo com 12 produtos e imagens locais
- Pesquisa de produtos
- Filtros por categoria
- Ordenação por preço
- Página de favoritos
- Carrinho de compras com controle de quantidade
- Cálculo automático de subtotal e total
- Checkout demonstrativo com tela de sucesso
- Tema claro e escuro
- Interface em português brasileiro e inglês
- Persistência de carrinho, favoritos, tema e idioma com `localStorage`
- Sincronização da pesquisa e categoria com a URL
- Layout responsivo para diferentes tamanhos de tela

## Tecnologias utilizadas

- React 19
- JavaScript
- Vite
- React Router DOM
- Context API
- CSS
- Lucide React
- localStorage
- ESLint

## Como executar localmente

### Pré-requisitos

- Node.js
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/kris-sand0/nexora-store.git
```

Entre na pasta do projeto:

```bash
cd nexora-store
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço indicado pelo Vite no terminal.

### Outros comandos

```bash
npm run build
```

Gera a versão de produção do projeto.

```bash
npm run preview
```

Visualiza localmente a versão de produção.

```bash
npm run lint
```

Executa a verificação de código com ESLint.

## Estrutura do projeto

```text
src/
├── assets/
│   ├── products/
│   └── hero.png
├── components/
├── context/
├── data/
├── locales/
├── pages/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

- `components/` — componentes reutilizáveis da interface
- `context/` — contextos globais para carrinho, favoritos, tema e idioma
- `data/` — dados dos produtos
- `locales/` — traduções da aplicação
- `pages/` — páginas principais da loja
- `assets/` — imagens e recursos visuais

## Observações

A NEXORA Store é um projeto demonstrativo de portfólio. Os produtos, preços e dados apresentados são fictícios.

O checkout é simulado e não processa pagamentos reais.

**Aplicação online:** [NEXORA Store](https://nexora-store-self.vercel.app/)

---

<a id="nexora-store-english"></a>

# NEXORA Store

🇺🇸 **English**

## About the project

**NEXORA Store** is a fictional e-commerce application built with React, created as a portfolio project to practice and demonstrate Front-end development skills.

The application provides a modern, responsive, and interactive shopping experience, featuring a product catalog, search, filters, favorites, shopping cart, and support for two languages.

The project uses fictional data and does not process real financial transactions.

**Repository:** [github.com/kris-sand0/nexora-store](https://github.com/kris-sand0/nexora-store)

## Features

- Product catalog with 12 products and local images
- Product search
- Category filters
- Price sorting
- Favorites page
- Shopping cart with quantity controls
- Automatic subtotal and total calculation
- Demo checkout with a success screen
- Light and dark themes
- Brazilian Portuguese and English interface
- Cart, favorites, theme, and language persistence using `localStorage`
- Search and category synchronization with the URL
- Responsive layout for different screen sizes

## Technologies used

- React 19
- JavaScript
- Vite
- React Router DOM
- Context API
- CSS
- Lucide React
- localStorage
- ESLint

## Getting started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/kris-sand0/nexora-store.git
```

Navigate to the project directory:

```bash
cd nexora-store
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the address provided by Vite in your terminal.

### Available scripts

```bash
npm run build
```

Builds the application for production.

```bash
npm run preview
```

Locally previews the production build.

```bash
npm run lint
```

Runs code quality checks with ESLint.

## Project structure

```text
src/
├── assets/
│   ├── products/
│   └── hero.png
├── components/
├── context/
├── data/
├── locales/
├── pages/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

- `components/` — reusable UI components
- `context/` — global contexts for cart, favorites, theme, and language
- `data/` — product data
- `locales/` — application translations
- `pages/` — main store pages
- `assets/` — images and visual assets

## Notice

NEXORA Store is a portfolio demonstration project. All products, prices, and displayed data are fictional.

The checkout is simulated and does not process real payments.

**Live website:** [NEXORA Store](https://nexora-store-self.vercel.app/)

---

Developed as a Front-end portfolio project.