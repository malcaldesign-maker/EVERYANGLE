# EVERYANGLE

Marketing site for **EVERYANGLE** — agentic intelligence for physical retail. The site explains how EVERYANGLE turns existing camera infrastructure into a real-time intelligence layer for store performance, covering footfall, conversion, queues, and labor optimisation.

## Stack

- Vite 6 + React 19 + TypeScript
- React Router 7 for routing
- Tailwind CSS 4 (via `@tailwindcss/vite`) — design tokens defined in `src/index.css`
- Motion (Framer Motion) for animations
- Lucide React for iconography
- Express (reserved for future server-side functions; not currently wired up)

## Project structure

```
src/
  App.tsx               # Routes
  main.tsx              # React entry
  index.css             # Tailwind theme + brand tokens
  components/
    Layout.tsx          # Header, mobile menu, footer
    VisionAIFeed.tsx    # Animated pipeline diagram
    DashboardCard.tsx   # Live-metrics card (currently unused)
  pages/
    Home.tsx
    Product.tsx
    Intelligence.tsx
    CaseStudies.tsx
    Company.tsx
    Blog.tsx
    Contact.tsx
    NotFound.tsx        # Catch-all 404
```

## Run locally

**Prerequisites:** Node.js 18+ and npm.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the project root with your secrets (see `.env.example` for variable names).
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open <http://localhost:3000>.

## Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000. |
| `npm run build` | Produce an optimised production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run `tsc --noEmit` for a quick type sanity-check. |
| `npm run clean` | Remove the `dist/` folder. |

## Environment variables

Defined in `.env.example`. Currently the site itself doesn't call Gemini — `GEMINI_API_KEY` is wired in for future agentic features.

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Google Gemini API key, for future agentic features. |
| `APP_URL` | Public URL of the deployed site (used for self-referential links / OG images). |

## Brand tokens

All colours and typography live in `src/index.css` under the `@theme` block. Notable tokens:

- `--color-brand-primary` `#6366F1` (indigo)
- `--color-brand-secondary` `#A855F7` (violet)
- `--color-brand-accent` `#2DD4BF` (teal)
- `--color-brand-navy` `#020617` (background)
- `--font-display` `Sora`
- `--font-sans` `DM Sans`

## Deploying

The project builds to a static bundle in `dist/`, so any static host works (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront). Set `GEMINI_API_KEY` and `APP_URL` in your host's environment if/when those features are wired in.

---

EVERYANGLE — Dublin / London / New York
