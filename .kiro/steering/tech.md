# Tech Stack

## Core Technologies

- **Framework**: Next.js 16.0.0 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS 4.x with CSS variables
- **Package Manager**: pnpm

## UI Libraries

- **Component Library**: shadcn/ui (New York style)
- **Primitives**: Radix UI components
- **Icons**: Lucide React
- **Animations**: tailwindcss-animate
- **Utilities**: clsx, tailwind-merge (via `cn()` helper)

## Key Dependencies

- `next-themes` - Theme switching
- `react-hook-form` + `zod` - Form handling and validation
- `@vercel/analytics` - Analytics tracking
- `sonner` - Toast notifications
- `embla-carousel-react` - Carousels
- `recharts` - Charts and data visualization

## Build Configuration

- ESLint and TypeScript errors are ignored during builds
- Images are unoptimized
- Path alias: `@/*` maps to project root

## Common Commands

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## TypeScript Configuration

- Target: ES6
- Strict mode enabled
- Module resolution: bundler
- JSX: preserve (Next.js handles transformation)
