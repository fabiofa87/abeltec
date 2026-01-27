# Routing Requirements

## ADDED Requirements
### Requirement: Dynamic Neighborhood Routing
The system SHALL support dynamic routing for neighborhood landing pages using a slug pattern.

#### Scenario: URL to Content Mapping
- **Given** a visitor navigates to `/bairros/copacabana`
- **Then** the application must render the Neighborhood Landing Page customized for "Copacabana".
- **And** slugs must be normalized (lowercase, no spaces/accents) but map back to the correct display name (e.g., "copacabana" -> "Copacabana", "meier" -> "Méier").

### Requirement: Sitemaps
The sitemap SHALL be updated to include all valid neighborhood URLs.

#### Scenario: Comprehensive Coverage
- **Given** the `sitemap.xml`
- **Then** it must list URLs for all ~80 neighborhoods defined in the data source.
