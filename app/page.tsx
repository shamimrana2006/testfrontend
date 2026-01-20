import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
            <p className="text-lg text-slate-200 mb-6">
              Discover the essence of modern elegance in our latest collection.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Shop Now
            </Button>
          </div>
          <div className="bg-slate-600 h-80 rounded-lg flex items-center justify-center">
            <span className="text-slate-400">Featured Image</span>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-slate-600 mb-8">Curated selections for every style</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-700 h-64 rounded-lg flex items-center justify-center text-white text-2xl font-bold hover:shadow-lg transition-shadow cursor-pointer">
              Women
            </div>
            <div className="bg-slate-600 h-64 rounded-lg flex items-center justify-center text-white text-2xl font-bold hover:shadow-lg transition-shadow cursor-pointer">
              Men
            </div>
            <div className="bg-amber-600 h-64 rounded-lg flex items-center justify-center text-white text-2xl font-bold hover:shadow-lg transition-shadow cursor-pointer">
              Accessories
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <a href="#" className="text-blue-600 hover:underline">View All</a>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-slate-200 h-64 flex items-center justify-center">
                  <span className="text-slate-400">Product Image</span>
                </div>
                <div className="p-4">
                  {item === 1 && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">NEW</span>}
                  {item === 3 && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">SALE</span>}
                  <h3 className="font-semibold mt-2">Product Name</h3>
                  <div className="flex items-center gap-1 my-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$129.00</span>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost"><ShoppingCart size={18} /></Button>
                      <Button size="icon" variant="ghost"><Heart size={18} /></Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Join the Club</h2>
          <p className="mb-6">Subscribe to receive early access to new drops and exclusive offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
