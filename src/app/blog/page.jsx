'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How to Choose the Perfect Chair for Your Home",
    excerpt:
      "Choosing the right chair is about comfort, design, and durability. Learn how to make the best choice.",
    image: "/blog-1.jpg",
    date: "June 12, 2025",
    slug: "choose-perfect-chair",
  },
  {
    id: 2,
    title: "Modern Interior Design Trends in 2025",
    excerpt:
      "Discover the latest trends in modern furniture design and how to apply them to your space.",
    image: "/blog-2.jpg",
    date: "July 3, 2025",
    slug: "modern-design-trends",
  },
  {
    id: 3,
    title: "Wood vs Metal Furniture: What Works Best?",
    excerpt:
      "A comparison between wood and metal furniture to help you choose what suits your lifestyle.",
    image: "/blog-3.jpg",
    date: "July 18, 2025",
    slug: "wood-vs-metal",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-700 to-teal-900 dark:from-teal-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="px-6 lg:px-20 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Blog
        </h1>
        <p className="max-w-3xl mx-auto text-white/90 text-lg">
          Inspiration, tips, and insights on modern furniture and interior
          design.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-teal-800 dark:bg-teal-900 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Inspired
        </h2>
        <p className="text-white/90 mb-8">
          Subscribe to our newsletter and get the latest furniture trends
          straight to your inbox.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-full font-semibold transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
