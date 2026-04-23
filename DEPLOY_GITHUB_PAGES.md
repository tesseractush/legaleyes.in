# Hosting "Legal Eyes" on GitHub Pages

> ⚠️ **Heads up:** This project is built with **TanStack Start (SSR on Cloudflare Workers)**.
> GitHub Pages only serves **static files** — it cannot run a server.
> To host on GitHub Pages, the app must be converted to a **static SPA**
> (plain Vite + React + React Router). The contact form already uses
> `wa.me` (client-side WhatsApp redirect), so no backend is required —
> a static build is feasible.

---

## Step 1 — Push your code to GitHub

1. In Lovable, open **Connectors → GitHub → Connect project**.
2. Authorize the **Lovable GitHub App** and pick your account/org.
3. Click **Create Repository**. Lovable pushes the full codebase.

From now on, every Lovable edit auto-syncs to GitHub `main`.

---

## Step 2 — Convert the app from TanStack Start (SSR) to a static SPA

GitHub Pages cannot run TanStack Start's Cloudflare Workers output. You need to convert the project to a plain Vite + React + React Router SPA.

**Easiest path:** ask Lovable in chat:

> *"Convert this project from TanStack Start (SSR) to a plain Vite + React + React Router SPA, suitable for static hosting on GitHub Pages."*

Lovable will:

- Replace `@tanstack/react-start` / `@tanstack/react-router` with `react-router-dom`.
- Remove `wrangler.jsonc`, `src/router.tsx`, `src/routeTree.gen.ts`, and any `server` / `loader` exports from routes.
- Move route components into a standard `<BrowserRouter><Routes>` tree inside `src/App.tsx`.
- Replace `vite.config.ts` with a standard React Vite config.

If you want to do it manually in your local clone, the steps above are the checklist.

### vite.config.ts after conversion

Create a standard Vite config and **set the `base` correctly**:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Custom domain (legaleyesfirm.in) → use "/"
  // Project page (username.github.io/legal-eyes) → use "/legal-eyes/"
  base: "/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

---

## Step 3 — Add the GitHub Actions deploy workflow

Replace the existing `.github/workflows/deploy.yml` (currently set up for Cloudflare Workers) with the GitHub Pages workflow below.

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
          path: ./dist   # Vite default. Change if your build outputs elsewhere.

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

---

## Step 4 — Fix SPA deep links (404 on refresh)

GitHub Pages doesn't have built-in SPA fallback, so refreshing `/about` returns 404. Fix it with the standard trick:

1. Create `public/404.html` as an **exact copy** of `public/index.html` (or use the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) snippet for cleaner URLs).
2. Vite copies everything in `public/` to `dist/` at build time, so `404.html` will be served by GitHub Pages on any unknown path, and the SPA router takes over from there.

---

## Step 5 — Enable GitHub Pages

1. Go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or click **Run workflow** under the **Actions** tab).
4. After the workflow finishes (~2 min), the site is live at:
   - `https://<your-username>.github.io/<repo-name>/` (project page), or
   - `https://legaleyesfirm.in/` once the custom domain is wired up (next step).

---

## Step 6 — Custom domain `legaleyesfirm.in`

Your repo already includes a `CNAME` file with `legaleyesfirm.in`. Now wire up DNS:

### At your DNS provider (GoDaddy, Namecheap, Cloudflare DNS, etc.)

For an **apex domain** (`legaleyesfirm.in`), add four `A` records pointing to GitHub's IPs:

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

And a `CNAME` for `www`:

| Type  | Name | Value                            |
|-------|------|----------------------------------|
| CNAME | www  | `<your-username>.github.io.`     |

### In GitHub

1. Go to **Repo → Settings → Pages**.
2. Under **Custom domain**, enter `legaleyesfirm.in` → **Save**.
3. Wait for the DNS check to pass (can take a few minutes to a few hours).
4. Tick **Enforce HTTPS** once GitHub provisions the SSL certificate (~15 min after DNS resolves).

### vite.config.ts base path

When using a custom domain, set `base: "/"` in `vite.config.ts` (as shown in Step 2). If you skip the custom domain and use `username.github.io/legal-eyes/`, set `base: "/legal-eyes/"` instead.

---

## Step 7 — Verify

After deploy + DNS propagation:

- `https://legaleyesfirm.in` → loads the home page.
- Click **Contact** → **Send Inquiry** → opens `wa.me/919696077876` with the form details (or just "Hi" as a fallback).
- Click the office phone number → triggers `tel:9696077876` on mobile.
- Refresh on `/about`, `/team`, `/contact` etc. → no 404 (thanks to Step 4).

---

## Troubleshooting

- **Blank page after deploy:** the `base` in `vite.config.ts` is wrong. Custom domain → `"/"`. Project page → `"/<repo-name>/"`.
- **404 on refresh:** `public/404.html` is missing. Re-do Step 4.
- **Custom domain stuck on "DNS check in progress":** wait up to 24 h; verify A records with `dig legaleyesfirm.in +short`.
- **Workflow fails on `bun install`:** swap the workflow steps to npm:
  ```yaml
  - uses: actions/setup-node@v4
    with: { node-version: '20' }
  - run: npm install
  - run: npm run build
  ```

---

## TL;DR

| Step | What                                                              |
|------|-------------------------------------------------------------------|
| 1    | Push to GitHub via Lovable Connectors                             |
| 2    | Convert TanStack Start (SSR) → Vite + React Router SPA            |
| 3    | Add `.github/workflows/deploy.yml` (GitHub Pages workflow above)  |
| 4    | Add `public/404.html` (copy of `index.html`) for SPA deep links   |
| 5    | Repo Settings → Pages → Source: GitHub Actions                    |
| 6    | DNS A records → GitHub IPs; set custom domain in repo settings    |
| 7    | Verify on `https://legaleyesfirm.in`                              |

When you're ready, just say:

> *"Convert the project to a static SPA for GitHub Pages."*

…and Lovable will do the SSR → SPA rewrite for you.
