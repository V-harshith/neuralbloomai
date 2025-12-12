"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicyPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p>We use cookies for:</p>
            <ul>
              <li>Essential website functionality</li>
              <li>Analytics and performance monitoring</li>
              <li>Remembering your preferences</li>
              <li>Understanding user behavior</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <h3 className="text-xl font-bold mb-2">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly.</p>

            <h3 className="text-xl font-bold mb-2 mt-4">Analytics Cookies</h3>
            <p>We use Vercel Analytics to understand how visitors interact with our website.</p>

            <h3 className="text-xl font-bold mb-2 mt-4">Preference Cookies</h3>
            <p>These cookies remember your settings and preferences, such as theme selection.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Please note that removing or blocking 
              cookies may impact your user experience and some features may not function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
              <a href="mailto:hello@neuralbloomai.com" className="text-primary hover:underline">
                hello@neuralbloomai.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
