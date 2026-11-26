# 🌟 Madhumitha M — Data Scientist & AI Engineer Portfolio

A modern, high-performance developer portfolio built with **TanStack Start**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Showcasing machine learning models, SQL analytics, RAG-powered AI agents, and production data science projects.

---

## 🚀 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [TanStack Start](https://tanstack.com/start) (Full-stack SSR / Vite) |
| **Routing & State** | [TanStack Router](https://tanstack.com/router) & [TanStack Query](https://tanstack.com/query) |
| **UI & Styling** | [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com/) |
| **Icons & UI Utilities** | [Lucide React](https://lucide.dev), `class-variance-authority`, `tailwind-merge` |
| **Build & Tooling** | [Vite](https://vitejs.dev), [TypeScript](https://www.typescriptlang.org/), [Nitro](https://nitro.unjs.io/) |
| **Code Quality & Testing** | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Vitest](https://vitest.dev) |

---

## 📋 Features

- ⚡ **Full-Stack Performance**: Fast SSR and client-side hydration powered by TanStack Start and Vite.
- 🎨 **Minimalist & Responsive Design**: Crafted with Tailwind CSS v4, dark/light contrast, and fluid typography.
- 🤖 **Showcase of ML & GenAI Work**:
  - Automotive RFQ Automation Agent (RAG, LangGraph, Jina CLIP, Groq Llama 3)
  - Customer Churn Prediction (Scikit-Learn, Feature Engineering, EDA)
  - Sales Data Analysis (SQL joins, aggregates, business KPIs)
  - Diabetes Risk Prediction App (Interactive ML web app)
- 📊 **Skills Matrix**: Categorized grid covering Programming, Machine Learning, Deep Learning, GenAI, Statistics, and Databases.
- 🔍 **SEO & Social Sharing Ready**: OpenGraph metadata, Twitter cards, and structured head tags built-in.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm` (bundled with Node.js), `pnpm`, or `bun`
- **Git**

To verify your Node.js version:
```bash
node -v
npm -v
```

---

## ⚡ Quickstart & Setup Guide

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd portfolio/portfolio-src
```

### 2. Install Dependencies

Install project packages using your preferred package manager:

```bash
# Using npm
npm install

# Or using Bun
bun install

# Or using pnpm
pnpm install
```

### 3. Local Photo Configuration (Important)

When running locally outside the hosted environment, verify that the profile image import in `src/routes/index.tsx` points directly to the asset:

Open [`src/routes/index.tsx`](src/routes/index.tsx) and ensure the top imports use:

```tsx
import portraitUrl from "@/assets/madhumitha_portrait.jpg";
const portrait = { url: portraitUrl };
```

> **Note**: If `src/routes/index.tsx` currently imports from `madhumitha_portrait.jpg.asset.json`, replace it with the two lines above. The image file `madhumitha_portrait.jpg` is already provided in `src/assets/`.

### 4. Run Development Server

Start the local development server:

```bash
npm run dev
```

The application will be running at:
```
http://localhost:8080
```
*(or the port indicated in your terminal)*

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with hot module replacement (HMR) |
| `npm run build` | Builds the production bundle using Nitro and Vite |
| `npm run build:dev` | Compiles a build in development mode |
| `npm run preview` | Starts a local server to preview the production build |
| `npm run lint` | Runs ESLint to check for code issues |
| `npm run format` | Runs Prettier to auto-format files across the repository |
| `npm run test` | Runs the test suite once with Vitest |
| `npm run test:watch`| Runs Vitest in interactive watch mode |

---

## 📂 Project Directory Structure

```plaintext
portfolio-src/
├── public/                 # Static public assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images and local media (e.g. profile portrait)
│   ├── components/         # Reusable UI component library (Radix primitives)
│   │   └── ui/             # Buttons, cards, badges, dialogs, etc.
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helpers (cn, error reporting)
│   ├── routes/             # TanStack Start file-based routes
│   │   ├── __root.tsx      # Root document shell (HTML head, layout, scripts)
│   │   └── index.tsx       # Portfolio landing page (bio, projects, skills, contacts)
│   ├── router.tsx          # Router configuration
│   ├── routeTree.gen.ts    # Auto-generated TanStack route tree
│   ├── server.ts           # Server entry point for SSR
│   ├── start.ts            # Client hydration entry point
│   └── styles.css          # Tailwind CSS v4 styling & global themes
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite & TanStack configuration
└── vitest.config.ts        # Vitest testing configuration
```

---

## ✏️ Customization Guide

Easily adapt this portfolio to your own profile and projects:

| Section | Target File | What to Edit |
| :--- | :--- | :--- |
| **Bio & Details** | `src/routes/index.tsx` | Name, title, headline bio, location |
| **Social Links** | `src/routes/index.tsx` | Update `GITHUB`, `LINKEDIN`, and `EMAIL` constants |
| **Projects** | `src/routes/index.tsx` | Modify the `projects` array with your title, description, and tags |
| **Skills Matrix** | `src/routes/index.tsx` | Modify the `skills` categories and list items |
| **Work Experience** | `src/routes/index.tsx` | Update the `experience` array with your career history |
| **Profile Photo** | `src/assets/` | Replace `madhumitha_portrait.jpg` with your own photo |
| **Styling & Colors** | `src/styles.css` | Customize Tailwind theme variables, fonts, and accents |
| **SEO & Meta Tags** | `src/routes/__root.tsx` & `src/routes/index.tsx` | Edit page title, meta description, and OpenGraph tags |

---

## 🚢 Deployment

### Static or Node.js Deployment

1. Run the build command:
   ```bash
   npm run build
   ```
2. The compiled outputs will be generated in the output directory (`dist/` or `.output/`).

### Deploy to Popular Hosts:

- **Vercel / Netlify**: Connect your GitHub repository, choose Vite / TanStack Start preset, and deploy.
- **Cloudflare Pages / Workers**: Compatible out-of-the-box via Nitro build presets.
- **Docker / Custom Server**: Run `node` on the server build output.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
