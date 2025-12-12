"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using NeuralbloomAI's services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <p>
              NeuralbloomAI provides web design, development, marketing, and automation services. 
              The specific scope of work will be defined in individual project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
            <p>
              Payment terms will be specified in individual project agreements. Generally, we require a deposit 
              before starting work and final payment upon project completion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive ownership of the final deliverables. We retain the right to 
              showcase completed work in our portfolio unless otherwise agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Revisions</h2>
            <p>
              The number of revision rounds is specified in each project agreement. Additional revisions 
              beyond the agreed scope may incur additional charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p>
              NeuralbloomAI shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
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
