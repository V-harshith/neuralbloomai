import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt: "Explore the latest trends shaping the web design industry and how they can benefit your business.",
    date: "October 15, 2025",
    author: "Sarah Johnson",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Email Marketing Best Practices for Maximum Engagement",
    excerpt: "Learn proven strategies to improve your email marketing campaigns and increase customer engagement.",
    date: "October 10, 2025",
    author: "Mike Chen",
    category: "Email Marketing",
  },
  {
    id: 3,
    title: "Automation: How to Save Time and Increase Efficiency",
    excerpt: "Discover how business automation can streamline your operations and boost productivity.",
    date: "October 5, 2025",
    author: "Emily Rodriguez",
    category: "Automation",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy: A Complete Guide",
    excerpt: "A comprehensive guide to developing an effective digital marketing strategy for your business.",
    date: "September 28, 2025",
    author: "David Park",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Why Your Business Needs a Professional Website",
    excerpt: "Understand the importance of a well-designed website in today's digital landscape.",
    date: "September 20, 2025",
    author: "Lisa Anderson",
    category: "Web Design",
  },
  {
    id: 6,
    title: "AI and Machine Learning in Digital Marketing",
    excerpt: "Explore how AI is revolutionizing the way businesses approach digital marketing.",
    date: "September 15, 2025",
    author: "James Wilson",
    category: "Marketing",
  },
]

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Blog</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Stay updated with the latest insights, tips, and trends in digital marketing, web design, and business
            automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-6">{post.excerpt}</p>
                <div className="flex flex-col gap-3 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
