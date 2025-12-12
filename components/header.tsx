"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { smoothScroll } from "@/lib/smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const scrollProgress = useScrollProgress()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      smoothScroll(href.substring(1))
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
            NA
          </div>
          <span className="text-foreground">NeuralbloomAI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            onClick={(e) => handleNavClick(e, "#portfolio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "#testimonials")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="block text-foreground hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "#portfolio")}
              className="block text-foreground hover:text-primary"
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "#testimonials")}
              className="block text-foreground hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block text-foreground hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
