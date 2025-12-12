# NeuralbloomAI - Design Agency Website

A modern, full-featured design agency website built with Next.js 16, React 19, and TypeScript. Inspired by premium design agencies like skale.solutions.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/vharshiths-projects/v0-website-clone)

## ✨ Features

### Design System
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Dark/Light Mode** - Seamless theme switching with next-themes
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Custom keyframe animations and transitions
- **Bento Grid Layouts** - Modern portfolio showcases
- **Gradient Accents** - Beautiful color transitions throughout

### Pages
- **Homepage** - Hero, services, portfolio, stats, process, pricing, testimonials, CTA
- **About** - Company values, team showcase, mission statement
- **Contact** - Working contact form with validation
- **Blog** - Article listing with category filtering
- **Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy

### Components
- Client logo carousel with infinite scroll
- Animated statistics counters
- Pricing cards with feature lists
- Testimonial slider
- Process timeline
- Service cards with hover effects
- Portfolio bento grid
- Theme toggle
- Responsive navigation

### Technical Features
- TypeScript strict mode
- Server and Client Components
- Form validation with react-hook-form + zod
- Toast notifications with Sonner
- Analytics with Vercel Analytics
- SEO optimized with metadata
- Path aliases (@/*)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
/app                    # Next.js App Router
  /about               # About page
  /blog                # Blog listing
  /contact             # Contact form
  /cookie-policy       # Legal pages
  /privacy-policy
  /terms-of-service
  layout.tsx           # Root layout
  page.tsx             # Homepage
  globals.css          # Global styles

/components            # React components
  /ui                  # shadcn/ui components
  header.tsx           # Navigation
  hero.tsx             # Hero section
  services.tsx         # Services grid
  portfolio-bento.tsx  # Portfolio showcase
  stats-section.tsx    # Animated stats
  process-section.tsx  # How we work
  pricing-section.tsx  # Pricing cards
  testimonials.tsx     # Client testimonials
  cta.tsx              # Call-to-action
  footer.tsx           # Site footer
  theme-provider.tsx   # Theme context
  theme-toggle.tsx     # Dark mode toggle

/lib                   # Utilities
  utils.ts             # Helper functions
  smooth-scroll.ts     # Scroll utility
```

## 🎨 Design Inspiration

This project draws inspiration from modern design agencies, particularly:
- **skale.solutions** - Bento grids, pricing cards, clean layouts
- **Modern SaaS websites** - Gradient accents, smooth animations
- **Premium agencies** - Professional typography, whitespace usage

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0 (App Router)
- **React:** 19.2.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4.x
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Forms:** react-hook-form + zod
- **Notifications:** Sonner
- **Analytics:** Vercel Analytics
- **Theme:** next-themes

## 📝 Customization

### Branding
Update branding in:
- `components/header.tsx` - Logo and navigation
- `components/footer.tsx` - Footer branding
- `app/layout.tsx` - Metadata and SEO
- `app/globals.css` - Color scheme

### Content
- Services: `components/services.tsx`
- Portfolio: `components/portfolio-bento.tsx`
- Pricing: `components/pricing-section.tsx`
- Team: `app/about/page.tsx`
- Blog posts: `app/blog/page.tsx`

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: hsl(350 70% 42%);
  --accent: hsl(15 35% 88%);
  /* ... more colors */
}
```

## 🐛 Known Issues & Improvements

### Current Limitations
- Blog posts are static (no CMS integration yet)
- Contact form doesn't send emails (needs backend/API)
- Portfolio images are placeholders
- No authentication system

### Recommended Enhancements
1. **CMS Integration** - Add Contentlayer or Sanity for blog
2. **Email Service** - Integrate Resend or SendGrid for contact form
3. **Image Optimization** - Add real project images
4. **SEO** - Add structured data and Open Graph images
5. **Performance** - Enable image optimization in next.config
6. **Testing** - Add unit and E2E tests
7. **Animations** - Consider Framer Motion for advanced animations
8. **3D Elements** - Add Three.js or Spline for visual interest

## 📊 Performance

- Lighthouse Score: 90+ (target)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- TypeScript strict mode enabled
- Input validation with zod
- XSS protection via React
- HTTPS enforced on Vercel
- Environment variables for sensitive data

## 📄 License

This project is private and proprietary to NeuralbloomAI.

## 🤝 Contributing

This is a private project. For internal contributions, please follow the established code style and create feature branches.

## 📞 Support

For questions or issues:
- Email: hello@neuralbloomai.com
- Website: [Your deployed URL]

---

Built with ❤️ by NeuralbloomAI