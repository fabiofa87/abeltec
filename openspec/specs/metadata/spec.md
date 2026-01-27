# metadata Specification

## Purpose
TBD - created by archiving change optimize-landing-seo. Update Purpose after archive.
## Requirements
### Requirement: Geo Meta Tags
The landing page SHALL include geographical meta tags for Local SEO in Rio de Janeiro.

#### Scenario: Local Relevance
- **Given** the `<head>` of the landing page
- **Then** it must contain `meta` tags for `geo.region` (BR-RJ), `geo.placename` (Rio de Janeiro), and `geo.position` (Approx. coordinates).

### Requirement: JSON-LD Enhanced Schema
The JSON-LD structured data SHALL be enhanced with LocalBusiness fields, aggregate ratings, and accurate service areas.

#### Scenario: Enhanced Local Business Schema
- **Given** the JSON-LD script
- **Then** it must include an `AggregateRating` object with valid identifying fields (ratingValue, reviewCount).
- **And** it must list "Rio de Janeiro" and major neighborhoods in `areaServed`.
- **And** it must include the `priceRange` field.
- **And** it must include `Action` or `ContactPoint` for "telephone".

### Requirement: Image Accessibility
All images SHALL have descriptive alt text for accessibility and SEO.

#### Scenario: Alt Text Coverage
- **Given** visible `<img>` tags in the application
- **Then** they must have meaningful `alt` text describing the image content for accessibility and SEO.

