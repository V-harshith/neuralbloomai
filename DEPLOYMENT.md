# Deployment Checklist - NeuralbloomAI

## Pre-Deployment Checklist

### 1. Code Quality
- [x] All TypeScript errors resolved
- [x] ESLint warnings addressed
- [x] Code formatted consistently
- [x] No console.logs in production code (except API routes)
- [x] All components properly typed

### 2. Content Review
- [ ] Update all placeholder text with real content
- [ ] Replace placeholder images with actual project images
- [ ] Update contact information (email, phone, address)
- [ ] Review and update all page metadata
- [ ] Add real client logos
- [ ] Update team member information
- [ ] Review blog post content

### 3. Configuration
- [ ] Update `config/site.ts` with actual URLs and social links
- [ ] Update `app/sitemap.ts` with actual domain
- [ ] Update `app/robots.ts` with actual domain
- [ ] Configure environment variables in Vercel
- [ ] Set up email service (Resend/SendGrid/SMTP)
- [ ] Update `next.config.mjs` settings:
  ```javascript
  const nextConfig = {
    eslint: {
      ignoreDuringBuilds: false, // Enable linting
    },
    typescript: {
      ignoreBuildErrors: false, // Enable type checking
    },
    images: {
      unoptimized: false, // Enable image optimization
      domains: ['your-cdn-domain.com'], // Add your image domains
    },
  }
  ```

### 4. SEO & Analytics
- [ ] Add Google Analytics ID (if using)
- [ ] Set up Vercel Analytics
- [ ] Create and upload Open Graph image
- [ ] Add favicon and app icons
- [ ] Verify sitemap.xml is accessible
- [ ] Verify robots.txt is accessible
- [ ] Add structured data (JSON-LD) for organization
- [ ] Test meta tags with social media debuggers:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/

### 5. Performance
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Optimize images (use WebP format)
- [ ] Enable image optimization in Next.js
- [ ] Test page load times
- [ ] Verify lazy loading works
- [ ] Check bundle size
- [ ] Test on slow 3G connection

### 6. Security
- [ ] Set up HTTPS (automatic on Vercel)
- [ ] Add rate limiting to API routes
- [ ] Implement CSRF protection if needed
- [ ] Review and sanitize all user inputs
- [ ] Set up Content Security Policy headers
- [ ] Enable security headers in Vercel
- [ ] Review environment variables (no secrets in client code)

### 7. Testing
- [ ] Test all forms (contact, newsletter)
- [ ] Verify all internal links work
- [ ] Test external links open in new tabs
- [ ] Check mobile responsiveness on real devices
- [ ] Test dark/light mode switching
- [ ] Verify animations work smoothly
- [ ] Test navigation on all pages
- [ ] Check 404 page
- [ ] Test loading states
- [ ] Verify back-to-top button works
- [ ] Test scroll progress indicator

### 8. Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 9. Accessibility
- [ ] Run axe DevTools audit
- [ ] Test keyboard navigation
- [ ] Verify ARIA labels
- [ ] Check color contrast ratios
- [ ] Test with screen reader
- [ ] Ensure all images have alt text
- [ ] Verify focus indicators are visible

## Deployment Steps

### 1. Prepare Repository
```bash
# Ensure all changes are committed
git status
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. Build Locally
```bash
# Test production build
pnpm build
pnpm start

# Visit http://localhost:3000 and test thoroughly
```

### 3. Deploy to Vercel

#### Option A: Vercel CLI
```bash
# Install Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Option B: Vercel Dashboard
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project settings:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
4. Add environment variables
5. Click "Deploy"

### 4. Configure Custom Domain
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (can take up to 48 hours)
5. Enable automatic HTTPS

### 5. Set Up Environment Variables
In Vercel Dashboard > Settings > Environment Variables:

```
RESEND_API_KEY=your_actual_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Post-Deployment Checklist

### 1. Verification
- [ ] Visit production URL
- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Check analytics tracking
- [ ] Test all pages load correctly
- [ ] Verify images load properly
- [ ] Check mobile version
- [ ] Test dark/light mode

### 2. Monitoring Setup
- [ ] Set up Vercel Analytics
- [ ] Configure error tracking (Sentry recommended)
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure performance monitoring
- [ ] Set up log aggregation

### 3. SEO Submission
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Request indexing for main pages
- [ ] Set up Google Analytics property
- [ ] Configure Google Tag Manager (if using)

### 4. Social Media
- [ ] Update social media profiles with website link
- [ ] Share launch announcement
- [ ] Test social sharing cards
- [ ] Update email signatures

### 5. Documentation
- [ ] Document deployment process
- [ ] Create runbook for common issues
- [ ] Document environment variables
- [ ] Create backup procedures
- [ ] Document rollback process

## Rollback Procedure

If issues are discovered after deployment:

1. **Immediate Rollback (Vercel)**
   - Go to Deployments tab
   - Find previous working deployment
   - Click "..." menu > "Promote to Production"

2. **Fix and Redeploy**
   ```bash
   git revert HEAD
   git push origin main
   # Vercel will auto-deploy
   ```

## Maintenance Schedule

### Daily
- Monitor error logs
- Check analytics for anomalies
- Review contact form submissions

### Weekly
- Review performance metrics
- Check for broken links
- Update blog content
- Review and respond to inquiries

### Monthly
- Update dependencies
- Security audit
- Performance optimization
- Content refresh
- Backup verification

### Quarterly
- Comprehensive security review
- Full site audit
- SEO performance review
- User feedback analysis
- Feature planning

## Emergency Contacts

- **Hosting Issues:** Vercel Support (support@vercel.com)
- **Domain Issues:** Your domain registrar
- **Email Issues:** Your email service provider
- **Development Team:** hello@neuralbloomai.com

## Useful Commands

```bash
# Check build locally
pnpm build

# Run production build locally
pnpm start

# Check for TypeScript errors
pnpm tsc --noEmit

# Run linter
pnpm lint

# Update dependencies
pnpm update

# Check for outdated packages
pnpm outdated

# Analyze bundle size
pnpm build && pnpm analyze
```

## Performance Targets

- **Lighthouse Score:** 90+ (all categories)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **Largest Contentful Paint:** < 2.5s
- **Total Blocking Time:** < 300ms

## Success Metrics

Track these KPIs post-launch:
- Page views
- Unique visitors
- Bounce rate
- Average session duration
- Contact form submissions
- Newsletter signups
- Conversion rate
- Page load time
- Error rate

---

**Last Updated:** January 2025
**Next Review:** Before deployment
