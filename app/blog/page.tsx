import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "7 Spring Fashion Trends to Try This Season",
      excerpt:
        "Discover the hottest fashion trends that are perfect for spring. From vibrant colors to flowing fabrics...",
      category: "Fashion",
      author: "Emma Wilson",
      date: "Jan 20, 2024",
      image: "Blog Image 1",
    },
    {
      title: "How to Build the Perfect Capsule Wardrobe",
      excerpt:
        "Learn how to create a versatile wardrobe with timeless pieces that work together effortlessly...",
      category: "Style Tips",
      author: "Sarah Johnson",
      date: "Jan 18, 2024",
      image: "Blog Image 2",
    },
    {
      title: "Sustainable Fashion: Making Eco-Conscious Choices",
      excerpt:
        "Explore ways to shop sustainably and build an environmentally friendly wardrobe...",
      category: "Sustainability",
      author: "Emma Wilson",
      date: "Jan 15, 2024",
      image: "Blog Image 3",
    },
    {
      title: "Accessory Styling Guide: Complete Your Look",
      excerpt:
        "Master the art of accessorizing with our comprehensive guide to elevate any outfit...",
      category: "Accessories",
      author: "Alex Turner",
      date: "Jan 12, 2024",
      image: "Blog Image 4",
    },
    {
      title: "Color Theory in Fashion: Find Your Perfect Palette",
      excerpt:
        "Understand color theory and discover which colors work best with your skin tone...",
      category: "Fashion",
      author: "Sarah Johnson",
      date: "Jan 10, 2024",
      image: "Blog Image 5",
    },
    {
      title: "Investment Pieces: What to Buy That Won't Go Out of Style",
      excerpt:
        "Invest in quality pieces that will remain stylish for years to come...",
      category: "Style Tips",
      author: "Emma Wilson",
      date: "Jan 8, 2024",
      image: "Blog Image 6",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Fashion Blog</h1>
        <p className="text-slate-600 text-lg mb-8">
          Style tips, trends, and inspiration for your wardrobe
        </p>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8">
            <div className="bg-slate-600 h-64 rounded-lg flex items-center justify-center">
              <span className="text-slate-400">Featured Image</span>
            </div>
            <div>
              <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm mb-3">
                Featured
              </span>
              <h2 className="text-3xl font-bold mb-3">
                Latest Fashion Trends for 2024
              </h2>
              <p className="text-slate-200 mb-6">
                Discover what's trending in the fashion world this year. From
                bold colors to minimalist designs...
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-slate-300">
                <span className="flex items-center gap-1">
                  <User size={16} /> Emma Wilson
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> Jan 20, 2024
                </span>
              </div>
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                Read More
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="bg-slate-200 h-48 flex items-center justify-center overflow-hidden">
                <span className="text-slate-400 group-hover:scale-110 transition-transform">
                  {post.image}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mb-12">
          <Button variant="outline">Previous</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-slate-50 rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Blog</h2>
          <p className="text-slate-600 mb-6">
            Get the latest fashion tips and trends delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
