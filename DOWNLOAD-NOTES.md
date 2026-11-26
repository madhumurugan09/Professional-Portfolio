# Running this portfolio on your own computer

This is the portfolio's source code, unpacked and ready to run locally.

## 1. Install the tools you need

You need Node.js (which comes with npm). If you don't have it:

```sh
# macOS / Linux — install nvm, then Node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 20
```

On Windows, download the Node.js LTS installer from https://nodejs.org.

## 2. Install the project's packages

From inside this folder:

```sh
npm install
```

## 3. Point the page at your photo

In `src/routes/index.tsx`, the first line currently reads:

```ts
import portrait from "@/assets/madhumitha_portrait.jpg.asset.json";
```

Change it to:

```ts
import portraitUrl from "@/assets/madhumitha_portrait.jpg";
const portrait = { url: portraitUrl };
```

That's the only edit needed — your photo is already in `src/assets/`.

## 4. Start it

```sh
npm run dev
```

Open the address it prints (usually http://localhost:8080) and your portfolio appears.

## 5. Build a static copy you can host anywhere

```sh
npm run build
```

The finished site is written to `dist/` (or `.output/`). Upload that folder to
Netlify, Vercel, GitHub Pages, or any web host.

## Where things live

| You want to change | File |
| --- | --- |
| Headline, projects, skills, experience, education, contact | `src/routes/index.tsx` |
| Colours, fonts, spacing | `src/styles.css` |
| Page title and description (search engines, link previews) | `src/routes/__root.tsx` and `src/routes/index.tsx` |
| Your profile photo | `src/assets/madhumitha_portrait.jpg` |
