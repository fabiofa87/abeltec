# Content Generation Requirements

## ADDED Requirements
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
