# Project Context

## Purpose
Abeltec is a web application for a technical assistance service specializing in refrigerator repairs in Rio de Janeiro, Brazil. The goal is to provide information about services, coverage areas (bairros), and facilitate customer contact. The project is built using the Lovable platform.

## Tech Stack
- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM
- **State Management/Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Toast:** Sonner
- **Charts:** Recharts

## Project Conventions

### Code Style
- **Components:** Functional components using arrow functions.
- **Imports:** Use absolute imports with `@/` alias (e.g., `@/components/ui/accordion`).
- **Styling:** Utility-first CSS using Tailwind classes. `clsx` and `tailwind-merge` (`cn` utility) are used for class management.
- **File Structure:**
    - `src/components/ui`: Reusable UI components (shadcn/ui).
    - `src/components`: Feature-specific components.
    - `src/hooks`: Custom React hooks.
    - `src/lib`: Utilities and helper functions.

### Architecture Patterns
- **Component-Based:** Modular UI built with reusable components.
- **Client-Side Rendering (CSR):** Standard SPA architecture via Vite.

### Testing Strategy
- Currently configured with ESLint for static analysis.
- *Note: No specific testing framework (Jest/Vitest) is currently visible in dependencies.*

### Git Workflow
- **Lovable Integration:** Changes made via Lovable are automatically committed.
- **Manual Edits:** Standard Git workflow (clone, branch/edit, push) is supported and syncs with Lovable.

## Domain Context
- **Service:** Technical assistance for refrigerators (Conserto de Geladeiras).
- **Location:** Rio de Janeiro, RJ, Brazil.
- **Key Entities:**
    - **Bairros (Neighborhoods):** Specific service coverage areas in RJ.
    - **Services:** Maintenance and repair types.

## Important Constraints
- **Platform:** Project is integrated with Lovable.dev. Edits should be compatible with this workflow.
- **Node Version:** Requires Node.js.

## External Dependencies
- **Lovable:** AI-powered development platform integration.
- **Google Fonts:** Likely used via CSS imports (Inter/default sans).
