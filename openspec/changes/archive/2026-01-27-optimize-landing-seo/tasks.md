# SEO Optimization Tasks

1.  **Technical Foundation**
    - [x] Create `public/sitemap.xml` listing the root URL. <!-- id: 0 -->
    - [x] Update `public/robots.txt` to include `Sitemap: https://www.abeltecrefrigeracao.com/sitemap.xml`. <!-- id: 1 -->
    - [x] Create `public/manifest.json` with basic PWA fields (name, icons, theme_color). <!-- id: 2 -->

2.  **Metadata Implementation**
    - [x] Update `src/pages/Index.tsx` `<Helmet>` to include `geo.region`, `geo.placename`, `geo.position`. <!-- id: 3 -->
    - [x] Update `src/pages/Index.tsx` JSON-LD `areaServed` list to match `Bairros.tsx` (all 80+ neighborhoods if reasonable, or top tier). <!-- id: 4 -->
    - [x] Update `src/pages/Index.tsx` JSON-LD to include `aggregateRating` schema. <!-- id: 5 -->
    - [x] Add `alt` attributes to any images in `src/components` that are missing them (e.g. `Hero.tsx` already has one, check others). <!-- id: 6 -->

3.  **Validation**
    - [x] Run Lighthouse audit (manual verification). <!-- id: 7 -->
