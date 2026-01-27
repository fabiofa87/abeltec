# Scale SEO Tasks

1.  **Data & Logic**
    - [x] Create `src/data/bairros.ts` exporting `allBairros` (extracted from `Bairros.tsx`) and a helper `toSlug(name)`. <!-- id: 0 -->
    - [x] Refactor `src/components/Bairros.tsx` to import the list from `src/data/bairros.ts`. <!-- id: 1 -->

2.  **Architecture**
    - [x] Create `src/pages/NeighborhoodPage.tsx` that accepts a slug param, finds the neighborhood, and renders the SEO-optimized layout (mirroring the `Meier.tsx` design). <!-- id: 2 -->
    - [x] Add dynamic route `<Route path="/bairros/:slug" element={<NeighborhoodPage />} />` to `App.tsx`. <!-- id: 3 -->

3.  **Search Discovery**
    - [x] Create a script or manual update for `public/sitemap.xml` to include all `/bairros/X` URLs. (Given the size, we might just generate it once and check it in, or use a script. I will create a simple Node script `scripts/generate-sitemap.js` and run it). <!-- id: 4 -->

4.  **Cleanup**
    - [x] Remove `src/pages/Meier.tsx` (and `src/pages/MaquinaDeLavar.tsx` can stay, but `Meier` is receiving a generalized replacement). We should keep the direct `/meier` route redirecting to `/bairros/meier` OR make `/meier` just render `NeighborhoodPage` directly if we want to keep short URLs. *Decision: To avoid breaking the just-created `/meier`, let's keep it but maybe refactor it to valid component. Actually, for consistency, let's migrate `/meier` to use the new logical component pattern but maybe keep the URL. For this task, I will push for the `/bairros/:slug` pattern for the 80+ new ones.* <!-- id: 5 -->
