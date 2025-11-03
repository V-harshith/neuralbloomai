import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About InnerBloomAI</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            We are a digital agency dedicated to transforming businesses through innovative web design, marketing
            solutions, automation, and email marketing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-foreground/70 mb-4">
              At InnerBloomAI, our mission is to empower businesses of all sizes to achieve their digital goals. We
              believe that every business deserves access to world-class digital solutions that drive growth,
              engagement, and success.
            </p>
            <p className="text-foreground/70">
              We combine creativity, technology, and strategy to deliver exceptional results that exceed our clients'
              expectations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
            <p className="text-foreground/70 mb-4">
              We envision a world where businesses can leverage cutting-edge digital solutions to reach their full
              potential. Our vision is to be the trusted partner for companies seeking to transform their digital
              presence and achieve sustainable growth.
            </p>
            <p className="text-foreground/70">
              Through innovation and excellence, we aim to set new standards in the digital agency industry.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Expert team with years of industry experience",
              "Customized solutions tailored to your business needs",
              "Proven track record of successful projects",
              "Transparent communication and collaboration",
              "Cutting-edge technology and tools",
              "Dedicated support and ongoing optimization",
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Web Design & Development</h3>
              <p className="text-foreground/70">
                We create stunning, responsive websites that engage your audience and drive conversions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Services</h3>
              <p className="text-foreground/70">
                From SEO to social media, we develop comprehensive marketing strategies that deliver results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Automation Services</h3>
              <p className="text-foreground/70">
                Streamline your business processes with our intelligent automation solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Marketing</h3>
              <p className="text-foreground/70">
                Build meaningful relationships with your customers through targeted email campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
