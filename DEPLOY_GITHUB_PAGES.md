# Hosting "Legal Eyes" on GitHub Pages

> ⚠️ **Important:** This project is built with **TanStack Start (SSR on Cloudflare Workers)**.
> GitHub Pages only serves **static files** — it cannot run a server.
> You have two paths below. **Option A** is what you asked for (GitHub Pages).
> **Option B** is the recommended free alternative that works with zero code changes.

---

## ✅ Option A — GitHub Pages (requires converting to a static SPA)

GitHub Pages will work only if you build the site as a pure static SPA (no SSR, no server functions).
The contact form already uses `wa.me` (client-side redirect to WhatsApp), so no backend is needed — a static build is feasible.

### Step 1 — Push your code to GitHub
1. In Lovable, open **Connectors → GitHub → Connect project**.
2. Authorize the Lovable GitHub App and pick the org/account.
3. Click **Create Repository**. Lovable will push the code.

### Step 2 — Convert the app to a static SPA
TanStack Start's Cloudflare Workers output won't run on Pages. You need to either:
- Ask Lovable: *"Convert this project from TanStack Start (SSR) to a plain Vite + React + React Router SPA"*, **or**
- Do it manually in your local clone:
  - Replace `@tanstack/react-start` with plain `vite` + `react-router-dom`.
  - Remove `wrangler.jsonc` and any `server`/`loader` exports from routes.
  - Move route components to `react-router-dom` `<Routes>`.
  - Update `vite.config.ts` to a standard React Vite config and set `base: "/<your-repo-name>/"` (or `base: "/"` if using a custom domain).

### Step 3 — Add the GitHub Actions workflow
Create `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist   # change if your build output is different

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4 — Handle SPA deep links (404 on refresh)
GitHub Pages doesn't have SPA fallback. Add a `public/404.html` that's a copy of `index.html`, or use the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick.

### Step 5 — Custom domain (`legaleyesfirm.in`)
Your repo already has a `CNAME` file with `legaleyesfirm.in`. Good.
- In your DNS provider, add a `CNAME` record: `legaleyesfirm.in → <your-username>.github.io`.
- In GitHub: **Repo → Settings → Pages → Custom domain → `legaleyesfirm.in` → Enforce HTTPS**.

### Step 6 — Enable Pages
**Repo → Settings → Pages → Build and deployment → Source: GitHub Actions.**
Push to `main`, the workflow runs, site goes live.

---

## 🌟 Option B — Cloudflare Pages (recommended, zero code changes)

Your project is already configured for Cloudflare Workers (`wrangler.jsonc`).
Cloudflare Pages is **free**, supports SSR, and connects directly to GitHub.

1. Push to GitHub (Step 1 above).
2. Go to https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick your repo. Build command: `bun run build`. Output: leave default.
4. Deploy. Add `legaleyesfirm.in` under **Custom domains**.

✅ Form, animations, all routes, SEO meta — everything keeps working.

---

## 🌟 Option C — Vercel (also recommended, zero code changes)

1. Push to GitHub.
2. Go to https://vercel.com → **Add New → Project → Import** your repo.
3. Vercel auto-detects TanStack Start. Click **Deploy**.
4. Add `legaleyesfirm.in` under **Settings → Domains**.

---

## TL;DR

| Host | Works as-is? | Cost | Effort |
|---|---|---|---|
| **GitHub Pages** | ❌ Needs SSR → SPA rewrite | Free | High |
| **Cloudflare Pages** | ✅ Yes | Free | Low |
| **Vercel** | ✅ Yes | Free | Low |

If you want me to do the **SSR → static SPA conversion** so it actually runs on GitHub Pages, just say:
> *"Convert the project to a static SPA for GitHub Pages."*
