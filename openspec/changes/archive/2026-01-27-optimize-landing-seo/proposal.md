# Optimize Landing Page SEO

## Why
The current landing page has basic SEO implementation (Meta tags, simple JSON-LD). To improve search rankings, especially for local queries ("Bairros"), we need a more robust technical and content SEO strategy. The project uses `react-helmet-async` which simplifies head management.

The following issues were identified:
- Missing `sitemap.xml` for crawler discovery.
- `robots.txt` does not reference a sitemap.
- JSON-LD structured data is hardcoded and lacks "LocalBusiness" specific fields (like `geo`, `address`, `aggregateRating` synchronized with testimonials).
- Missing Geo-meta tags for Rio de Janeiro.
- No PWA `manifest.json` which can help with "installable" signals and mobile appearance.

## What Changes
1. **Technical SEO**: Implement dynamic or static `sitemap.xml` generation, create `manifest.json`, and update `robots.txt`.
2. **Metadata Enhancement**: Improve JSON-LD to include accurate `ServiceArea`, `GeoCoordinates`, and `AggregateRating`. Add `geo.region` and `geo.placename` meta tags.
3. **Content Consistency**: Ensure "Bairros" list in JSON-LD matches the visible UI component (`Bairros.tsx`).

## Impact
- **Risks**: Incorrect `robots.txt` or `sitemap.xml` could block indexing (mitigated by strict validation). Keyword stuffing in JSON-LD (mitigated by adhering to Schema.org guidelines).
- **Affected Specs**: `technical` (created), `metadata` (created).
