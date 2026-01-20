import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.1]"></div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 animate-fade-in">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              New Arrivals
            </h1>
            <p className="text-lg text-slate-200 mb-6">
              Discover the essence of modern elegance in our latest collection.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg hover-lift">
              Shop Now
            </Button>
          </div>
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 h-80 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-slide-up">
            <span className="text-slate-300 text-xl font-semibold">
              Featured Image
            </span>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">
            Shop by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Curated selections for every style
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-700 to-amber-800 h-64 rounded-xl flex items-center justify-center text-white text-2xl font-bold hover:shadow-2xl transition-all duration-300 cursor-pointer hover-lift hover:from-amber-600 hover:to-amber-700 group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-3xl">→</span>
              </div>
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                Women
              </span>
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 h-64 rounded-xl flex items-center justify-center text-white text-2xl font-bold hover:shadow-2xl transition-all duration-300 cursor-pointer hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-3xl">→</span>
              </div>
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                Men
              </span>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 h-64 rounded-xl flex items-center justify-center text-white text-2xl font-bold hover:shadow-2xl transition-all duration-300 cursor-pointer hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-3xl">→</span>
              </div>
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                Accessories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Trending Now</h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group flex items-center gap-1"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift group border border-slate-200"
              >
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-64 flex items-center justify-center relative overflow-hidden">
                  <span className="text-slate-400 font-semibold">
                    Product Image
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-4">
                  {item === 1 && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold animate-pulse-soft">
                      NEW
                    </span>
                  )}
                  {item === 3 && (
                    <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold animate-pulse-soft">
                      SALE
                    </span>
                  )}
                  <h3 className="font-semibold mt-2 text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    Premium Product
                  </h3>
                  <div className="flex items-center gap-1 my-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">
                      $129.00
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-blue-100 hover:text-blue-600"
                      >
                        <ShoppingCart size={18} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-red-100 hover:text-red-600"
                      >
                        <Heart size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Join the Club</h2>
          <p className="mb-6 text-slate-200">
            Subscribe to receive early access to new drops and exclusive offers.
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            <Button variant="default" className="hover-lift">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
