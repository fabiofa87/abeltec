# Scale SEO to Neighborhoods

## Why
The User requested to apply the successful "Méier" SEO strategy to all 80+ served neighborhoods. Creating individual files for every neighborhood is unmaintainable. We need a scalable, dynamic routing solution that generates targeted landing pages for each location using the "Hyper-Local targeting" strategy from `draft.md`.

## What Changes
1.  **Dynamic Routing**: Implement a dynamic route `/atendimento/:city/:bairro` (or simply `/:bairro` if preferred, but namespaced is cleaner safely avoiding collisions). Actually, given `draft.md` suggests clean "landing pages" and typical SEO patterns, `/rj/:bairro` or just `/:bairro` works. Let's start with a dedicated path `/bairro/:slug` to be safe, or `/conserto-geladeira-:slug`. Let's stick to a clean pattern: `/bairros/:slug` (e.g. `/bairros/meier`, `/bairros/copacabana`) and ensure `sitemap.xml` lists them.
2.  **Dynamic Component**: Create `NeighborhoodPage.tsx` that reads the slug, looks up the neighborhood display name (handling accents/slugification), and renders the optimized content (Title, H1, "Chegamos em 30 min", etc.).
3.  **Data Source**: Centralize the list of neighborhoods into a shared utility `src/data/bairros.ts` (extracting from `Bairros.tsx`) so it can be used by both the UI list and the routing validation.
4.  **Sitemap**: Update `sitemap.xml` to include these 80+ generated URLs.

## Impact
-   **New Specs**: `routing` (for dynamic handling).
-   **Modified Specs**: `content` (to cover dynamic generation requirements).
