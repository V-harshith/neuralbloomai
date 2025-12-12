# Quick Start Guide - NeuralbloomAI

Get your NeuralbloomAI website up and running in minutes!

## 🚀 Installation

```bash
# 1. Install dependencies
pnpm install

# 2. Create environment file
cp .env.example .env.local

# 3. Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## ⚡ Essential Customizations

### 1. Update Branding (5 minutes)
Already done! All branding is set to "NeuralbloomAI". If you need to change it:
- Logo: `components/header.tsx` and `components/footer.tsx`
- Metadata: `app/layout.tsx`
- Site config: `config/site.ts`

### 2. Update Contact Information (2 minutes)
Edit `config/site.ts`:
```typescript
contact: {
  email: "your-email@domain.com",
  phone: "+1 (XXX) XXX-XXXX",
  address: "Your Address",
}
```

### 3. Set Up Email Service (10 minutes)
Choose one option:

**Option A: Resend (Recommended)**
```bash
pnpm add resend
```
Add to `.env.local`:
```
RESEND_API_KEY=your_key_here
```

**Option B: SendGrid**
```bash
pnpm add @sendgrid/mail
```
Add to `.env.local`:
```
SENDGRID_API_KEY=your_key_here
```

Uncomment the relevant code in `app/api/contact/route.ts`

### 4. Add Your Content (30 minutes)
- **Services**: Edit `components/services.tsx`
- **Portfolio**: Edit `components/portfolio-bento.tsx`
- **Pricing**: Edit `components/pricing-section.tsx`
- **Team**: Edit `app/about/page.tsx`
- **Testimonials**: Edit `components/testimonials.tsx`

### 5. Add Images (15 minutes)
Place your images in `/public/`:
- `/public/projects/` - Portfolio images
- `/public/team/` - Team photos
- `/public/clients/` - Client logos
- `/public/og-image.jpg` - Social sharing image

## 🎨 Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: hsl(350 70% 42%);  /* Your brand color */
  --accent: hsl(15 35% 88%);    /* Accent color */
}
```

### Add New Pages
```bash
# Create new page
mkdir app/your-page
touch app/your-page/page.tsx
```

### Add New Components
```bash
# Create new component
touch components/your-component.tsx
```

## 📦 Build & Deploy

### Test Production Build
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard.

## 🔧 Common Tasks

### Update Dependencies
```bash
pnpm update
```

### Check for Errors
```bash
pnpm tsc --noEmit
pnpm lint
```

### Add New UI Component
```bash
# Example: Add a dialog component
npx shadcn-ui@latest add dialog
```

## 📚 Key Files

- `app/page.tsx` - Homepage
- `app/layout.tsx` - Root layout
- `components/` - All components
- `app/globals.css` - Global styles
- `config/site.ts` - Site configuration

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
pnpm dev
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

### Type Errors
```bash
# Check TypeScript errors
pnpm tsc --noEmit
```

## 📖 Documentation

- **Full Guide**: See `README.md`
- **Implementation Details**: See `IMPLEMENTATION.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ⬜ Update contact info
4. ⬜ Set up email service
5. ⬜ Add your content
6. ⬜ Add your images
7. ⬜ Test everything
8. ⬜ Deploy to Vercel

## 💡 Tips

- Use dark mode toggle in header to test both themes
- Test on mobile devices early
- Keep images under 500KB for best performance
- Use WebP format for images
- Test contact form before going live

## 🚀 You're Ready!

Your NeuralbloomAI website is ready to customize and deploy. Follow the steps above and you'll have a professional website live in no time!

Need help? Check the documentation or contact hello@neuralbloomai.com

---

Happy building! 🎉
