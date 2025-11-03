import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-foreground/70 mb-8">Last updated: October 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/70 mb-4">
              InnerBloomAI ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground/70 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site
              includes:
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
              <li>
                Personal Data: Personally identifiable information, such as your name, shipping address, email address,
                and telephone number, and demographic information, such as your age, gender, hometown, and interests,
                that you voluntarily give to us when you register with the Site or when you choose to participate in
                various activities related to the Site.
              </li>
              <li>
                Financial Data: Financial information, such as data related to your payment method (e.g., valid credit
                card number, card brand, expiration date) that we may collect when you purchase, order, return,
                exchange, or request information about our services from the Site.
              </li>
              <li>
                Data From Social Networks: User information from social networks, including your name, your social
                network username, location, gender, birth date, email address, profile picture, and public data for
                contacts, if you connect your account to such social networks.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Your Information</h2>
            <p className="text-foreground/70 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
              <li>
                Generate a personal profile about you so that future visits to the Site will be personalized as
                possible.
              </li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclosure of Your Information</h2>
            <p className="text-foreground/70 mb-4">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
              <li>
                By Law or to Protect Rights: If we believe the release of information about you is necessary to comply
                with the law, enforce our Site policies, or protect ours or others' rights, property, or safety.
              </li>
              <li>
                Third-Party Service Providers: We may share your information with third parties that perform services
                for us or on our behalf, including payment processing, data analysis, email delivery, hosting services,
                customer service, and marketing assistance.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Security of Your Information</h2>
            <p className="text-foreground/70 mb-4">
              We use administrative, technical, and physical security measures to protect your personal information.
              However, despite our safeguards, no security system is impenetrable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-foreground/70 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
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
