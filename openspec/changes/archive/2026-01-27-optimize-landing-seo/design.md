# SEO Architecture Design

## Sitemap Strategy
Since the application is a Single Page Application (SPA) built with Vite and primarily consists of a landing page (`/`), we will implement a **Static Sitemap**.
- **File**: `public/sitemap.xml`
- **Maintenance**: Manual update if new routes are added (rare for this scope).
- **Rationale**: Avoids complexity of server-side sitemap generation or build plugins for a single-route app.

## JSON-LD Architecture
We will refactor the existing JSON-LD in `Index.tsx` to be more modular or at least richer.
- **Schema Type**: `LocalBusiness` or specialized `HomeAndConstructionBusiness` / `Electrician` (closest to appliance repair).
- **Data Source**:
    - `areaServed`: Should reflect the list in `Bairros.tsx`. We will not dynamically link them code-wise to avoid runtime weight, but we will duplicate the "truth" in the Spec to ensure consistency during updates.
    - `aggregateRating`: Hardcoded based on "business reality" (e.g. Google Maps rating) or `Testimonials` data.

## Geo-Tagging
We will add standard meta tags for local relevance:
- `geo.region`: `BR-RJ`
- `geo.placename`: `Rio de Janeiro`
- `geo.position`: Coordinates for Rio (central) or business HQ.
