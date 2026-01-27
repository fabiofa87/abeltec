# content Specification

## Purpose
TBD - created by archiving change improve-seo-conversion. Update Purpose after archive.
## Requirements
### Requirement: Targeted Landing Pages
The system SHALL support dedicated landing pages for high-value segments to allow specific SEO targeting.

#### Scenario: Méier Page
- **Given** a user searches for "Conserto Geladeira Méier"
- **When** they land on `/meier`
- **Then** the page title must explicitly mention "Méier" and "Chegamos em 30 min" (or similar urgency).
- **And** the content must be relevant to that location.

#### Scenario: Washing Machine Page
- **Given** a user searches for "Conserto de Máquina de Lavar"
- **When** they land on `/maquina-de-lavar`
- **Then** the page title must prioritize "Máquina de Lavar" over "Geladeira".
- **And** the hero section must reflect washing machine services.

### Requirement: Dynamic SEO Meta Tags
The Neighborhood Landing Page SHALL generate specific meta tags based on the current location.

#### Scenario: Dynamic Titles
- **Given** the Neighborhood Page for "Tijuca"
- **Then** the `<title>` must be "Conserto de Geladeira na Tijuca - Chegamos em 30 min | ABELTEC".
- **And** the `description` must mention "Tijuca" and "Atendimento 24h".

### Requirement: Dynamic Page Content
The visual content of the page SHALL adapt to the specialized location.

#### Scenario: Header Customization
- **Given** the Neighborhood Page for "Barra da Tijuca"
- **Then** the main H1 must be "Conserto de Geladeira na Barra da Tijuca".
- **And** the "WhatsApp" button text must be "WhatsApp - Técnico na Barra da Tijuca".

