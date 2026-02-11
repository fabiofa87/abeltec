# SEO Rendering Strategy (Home + Bairros)

## Current state
- The project is a Vite SPA with client-side routing (`react-router-dom`) and fallback rewrite in Vercel.
- Search engines can render JavaScript, but first content discovery and LCP are less predictable than pre-rendered HTML.
- For local-intent pages (`/` and `/bairros/:slug`), pre-rendered HTML is preferred for better crawl efficiency and snippet stability.

## Recommendation
Use a phased approach:

1. Keep current SPA architecture and improve metadata/canonical/schema quality (already applied).
2. Add pre-rendering for SEO-critical routes (`/`, `/maquina-de-lavar`, and neighborhood pages).
3. Reassess Core Web Vitals and indexing after deployment, then decide if full SSR is necessary.

## Practical options
- **Option A (low complexity):** static prerender during build for a route list.
- **Option B (medium complexity):** migrate to SSR/SSG framework for long-term scale.

## Suggested next step
- Start with prerender for the highest-value routes to reduce implementation risk and keep current codebase structure.
