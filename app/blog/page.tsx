"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "10 Web Design Trends for 2025",
    excerpt: "Discover the latest design trends that will shape the digital landscape in 2025.",
    category: "Design",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    slug: "web-design-trends-2025",
  },
  {
    title: "The Power of AI in Modern Web Development",
    excerpt: "How artificial intelligence is revolutionizing the way we build websites and applications.",
    category: "Development",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    slug: "ai-web-development",
  },
  {
    title: "Building a Successful SaaS Marketing Strategy",
    excerpt: "A comprehensive guide to marketing your SaaS product effectively in a competitive market.",
    category: "Marketing",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    slug: "saas-marketing-strategy",
  },
  {
    title: "Optimizing Website Performance: A Complete Guide",
    excerpt: "Learn how to make your website lightning-fast with these proven optimization techniques.",
    category: "Development",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    slug: "website-performance-optimization",
  },
  {
    title: "The Future of No-Code Development",
    excerpt: "Exploring how no-code platforms are democratizing web development and what it means for agencies.",
    category: "Technology",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    slug: "future-no-code-development",
  },
  {
    title: "Creating Engaging User Experiences",
    excerpt: "Best practices for designing interfaces that users love and remember.",
    category: "UX Design",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    slug: "engaging-user-experiences",
  },
]

const categories = ["All", "Design", "Development", "Marketing", "Technology", "UX Design"]

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">BLOG</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the world of design and development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <Card className="mt-16 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest articles, insights, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
