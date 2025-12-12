"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-background/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-background/70 mb-6">
              Get the latest insights, tips, and updates delivered to your inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-foreground font-bold">
                NA
              </div>
              <span>NeuralbloomAI</span>
            </div>
            <p className="text-background/70 text-sm">Transforming businesses through innovative digital solutions.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/#services" className="hover:text-background transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-background transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-background transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-background transition-colors">
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-background transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@neuralbloomai.com" className="hover:text-background transition-colors">
                  hello@neuralbloomai.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-background transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>123 Innovation St, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">© 2025 NeuralbloomAI. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-xs text-background/60">
          <Link href="/privacy-policy" className="hover:text-background transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-background transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookie-policy" className="hover:text-background transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
