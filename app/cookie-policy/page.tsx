import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Cookie Policy</h1>
          <p className="text-foreground/70 mb-8">Last updated: October 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="text-foreground/70 mb-4">
              Cookies are small files that are stored on your browser or the hard drive of your computer. They allow
              websites to recognize your browser and, if you have a registered account, associate the cookie with your
              account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
            <p className="text-foreground/70 mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
              <li>To remember your preferences and settings</li>
              <li>To understand how you use our website</li>
              <li>To improve our website and services</li>
              <li>To personalize your experience</li>
              <li>To track website analytics</li>
              <li>To enable certain features and functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
            <p className="text-foreground/70 mb-4">
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They
              enable basic functions like page navigation and access to secure areas of the website.
            </p>
            <p className="text-foreground/70 mb-4">
              <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously.
            </p>
            <p className="text-foreground/70 mb-4">
              <strong>Preference Cookies:</strong> These cookies remember your choices and preferences to provide a more
              personalized experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
            <p className="text-foreground/70 mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse
              cookies or alert you when cookies are being sent. However, some features of our website may not function
              properly if you disable cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Cookies</h2>
            <p className="text-foreground/70 mb-4">
              We may allow third-party service providers to place cookies on your device for analytics and advertising
              purposes. These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-foreground/70 mb-4">
              If you have questions about our Cookie Policy, please contact us at:
            </p>
            <p className="text-foreground/70">
              Email: hello@innerbloomai.com
              <br />
              Phone: +1 (234) 567-890
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
