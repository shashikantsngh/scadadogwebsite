"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import BlogCard from "@/components/BlogCard"
import Image from "next/image"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How I Bypassed GE's Fancy Software…",
      excerpt:
        "A deep dive into overcoming proprietary software limitations and creating custom solutions for industrial automation systems with practical code examples.",
      date: "2024-01-15",
      category: "Industrial Automation",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: "ScadaDog Team",
      featured: true,
    },
    {
      id: 2,
      title: "Building an Integration for DataDog…",
      excerpt:
        "Step-by-step guide to creating seamless integrations between industrial systems and modern monitoring platforms with real-world examples.",
      date: "2024-01-08",
      category: "System Integration",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: "ScadaDog Team",
      featured: true,
    },
    {
      id: 3,
      title: "Legacy Integrations: Hacking a Defunct SecondWind SCADA",
      excerpt:
        "Modernizing legacy SCADA systems while maintaining operational continuity and extracting valuable historical data from obsolete systems.",
      date: "2023-12-22",
      category: "Legacy Systems",
      readTime: "15 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: "ScadaDog Team",
      featured: true,
    },
    {
      id: 4,
      title: "The Future of IIoT: Bridging OT and IT Securely",
      excerpt:
        "Exploring emerging trends in Industrial Internet of Things and best practices for secure implementation in modern manufacturing.",
      date: "2023-12-15",
      category: "IIoT",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: "ScadaDog Team",
      featured: false,
    },
    {
      id: 5,
      title: "AI in Industrial Automation: Real-World Applications",
      excerpt:
        "How artificial intelligence is transforming manufacturing and process industries with practical examples and implementation strategies.",
      date: "2023-12-01",
      category: "Artificial Intelligence",
      readTime: "14 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: "ScadaDog Team",
      featured: false,
    },
    {
      id: 6,
      title: "Cybersecurity for OT Networks: A Practical Guide",
      excerpt:
        "Essential security measures for protecting operational technology networks from modern cyber threats with actionable recommendations.",
      date: "2023-11-18",
      category: "Cybersecurity",
      readTime: "11 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: "ScadaDog Team",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Industrial Automation",
    "System Integration",
    "Legacy Systems",
    "IIoT",
    "Artificial Intelligence",
    "Cybersecurity",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Technology blog background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gray-200 text-sm font-medium">📚 Knowledge Hub</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Tech Insights
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and practical solutions in industrial automation and
              technology
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Categories Filter */}
      <Section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights on industrial automation and technology trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
