"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does NeuralbloomAI offer?",
    answer: "We offer comprehensive digital services including web design, web development, email marketing, marketing automation, AI integration, and digital strategy consulting. Our team specializes in creating custom solutions tailored to your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-6 weeks from kickoff to launch. More complex projects with custom features may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer transparent, project-based pricing starting at $2,999 for starter websites. Premium packages start at $5,999, and enterprise solutions are custom-quoted. All packages include design, development, revisions, and post-launch support.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! All our packages include 1-3 months of free support depending on the tier. After that, we offer flexible maintenance plans to keep your site updated, secure, and performing optimally. We're here for the long term.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely! We can work within your existing brand guidelines or help you develop new ones. Our design team is experienced in maintaining brand consistency while creating fresh, modern digital experiences.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including Next.js, React, TypeScript, Tailwind CSS, and various backend solutions. We choose the best tech stack for each project based on your specific requirements and long-term goals.",
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, all our websites are built with SEO best practices in mind. We also offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, and ongoing SEO strategy as part of our marketing packages.",
  },
  {
    question: "How do we get started?",
    answer: "Simply fill out our contact form or schedule a consultation call. We'll discuss your project goals, timeline, and budget. Then we'll provide a detailed proposal outlining our approach, deliverables, and pricing. No commitment required for the initial consultation!",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  )
}
