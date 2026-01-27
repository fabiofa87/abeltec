# Improve SEO Conversion

## Why
Analysis of search performance (`draft.md`) reveals high rankings but low click-through rates (CTR) for key segments like "Méier" (Pos 2.2, 0% CTR), "24h Service", and "Washing Machines". Users see the site but don't click because the snippets (Title/Description) are too generic or mismatched.

## What Changes
1.  **Targeted Landing Pages**: Create dedicated routes for high-potential segments to control Title/Meta:
    -   `/meier` (starting with Méier as the pilot for neighborhood pages).
    -   `/maquina-de-lavar` (to prioritize "Máquina de Lavar" in the title).
2.  **Home Page Optimization**: Update the main `<Helmet>` description to forcefully highlight "24h" urgency ("GELADEIRA PAROU? Atendimento 24h...").
3.  **Content Consistency**: Ensure address consistency (NAP) is uniform across the site footer/contact info (Rio de Janeiro only).
4.  **Schema Refinement**: Validate LocalBusiness schema specifically for "Review" snippet appearance logic (though `AggregateRating` was added, `draft.md` suggests ensuring it triggers stars visuals).

## Impact
-   **New Specs**: `content` (for landing page requirements).
-   **Modified Specs**: `metadata` (updating requirements for dynamic titles/descriptions).
