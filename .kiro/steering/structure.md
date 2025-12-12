# Project Structure

## Directory Organization

```
/app                    # Next.js App Router pages
  /about               # About page
  /blog                # Blog section
  /contact             # Contact page
  /cookie-policy       # Legal pages
  /privacy-policy
  /terms-of-service
  layout.tsx           # Root layout with fonts and metadata
  page.tsx             # Homepage
  globals.css          # Global styles

/components            # React components
  header.tsx           # Site header with navigation
  hero.tsx             # Hero section
  services.tsx         # Services section
  team.tsx             # Team section
  portfolio.tsx        # Portfolio section
  testimonials.tsx     # Testimonials section
  cta.tsx              # Call-to-action section
  footer.tsx           # Site footer
  theme-provider.tsx   # Theme context provider

/lib                   # Utility functions
  utils.ts             # cn() helper for className merging
  smooth-scroll.ts     # Smooth scroll utility

/public                # Static assets
  placeholder-*.{png,svg,jpg}  # Placeholder images

/styles                # Additional stylesheets
  globals.css          # Legacy global styles
```

## Code Conventions

### Component Structure

- Use `"use client"` directive for client components
- Export default for page/component exports
- Use named exports for utilities
- TypeScript interfaces for props (e.g., `HeaderProps`)

### Styling

- Use Tailwind utility classes
- Use `cn()` helper from `@/lib/utils` for conditional classes
- CSS variables for theming (defined in globals.css)
- Responsive design with mobile-first approach

### Imports

- Use `@/` path alias for imports from project root
- Import types with `type` keyword: `import type { Metadata } from 'next'`
- Group imports: external packages, then internal modules

### State Management

- Use React hooks (`useState`, `useEffect`) for local state
- Client-side interactivity in page components
- Props drilling for simple state sharing

### Navigation

- Use Next.js `Link` component for routing
- Smooth scroll for anchor links via `smoothScroll()` utility
- Hash-based navigation for same-page sections
