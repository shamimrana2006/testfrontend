import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Clock } from "lucide-react";

export default function Offers() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Deals & Offers</h1>
        <p className="text-slate-600 text-lg mb-8">
          Don't miss out on our latest promotions and discounts
        </p>

        {/* Featured Deals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Summer Sale",
                discount: "Up to 50% OFF",
                banner: "bg-gradient-to-r from-pink-500 to-rose-500",
              },
              {
                title: "Flash Sale",
                discount: "75% OFF Select Items",
                banner: "bg-gradient-to-r from-orange-500 to-red-500",
              },
              {
                title: "Clearance",
                discount: "Everything Must Go",
                banner: "bg-gradient-to-r from-purple-500 to-blue-500",
              },
            ].map((deal, idx) => (
              <div
                key={idx}
                className={`${deal.banner} text-white rounded-lg p-8 text-center relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 text-6xl opacity-10">
                  %
                </div>
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p className="text-xl mb-4">{deal.discount}</p>
                <Button className="bg-white text-slate-900 hover:bg-slate-100">
                  Shop Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Promotions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ongoing Promotions</h2>
          <div className="space-y-4">
            {[
              {
                offer: "Free shipping on orders over $50",
                code: "FREESHIP50",
                expires: "Ongoing",
              },
              {
                offer: "15% off with code for new customers",
                code: "WELCOME15",
                expires: "Ongoing",
              },
              {
                offer: "Free returns for 30 days",
                code: "N/A",
                expires: "Always",
              },
              {
                offer: "Join our club for exclusive rewards",
                code: "N/A",
                expires: "Ongoing",
              },
            ].map((promo, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-lg">{promo.offer}</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Expires: {promo.expires}
                  </p>
                </div>
                {promo.code !== "N/A" && (
                  <div className="text-right">
                    <div className="bg-slate-100 px-4 py-2 rounded-lg font-mono font-bold text-sm">
                      {promo.code}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Limited Time Deals */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock size={28} className="text-red-600" />
              Limited Time Deals
            </h2>
            <span className="text-red-600 font-bold">Ending Soon!</span>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-200 h-64 flex items-center justify-center relative">
                  <span className="text-slate-400">Product Image</span>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{30 + item * 5}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <div className="flex gap-2 mb-3">
                    <span className="text-lg font-bold text-red-600">
                      $99.00
                    </span>
                    <span className="text-slate-500 line-through">$149.00</span>
                  </div>
                  <div className="text-xs text-slate-600 mb-3">
                    Hurry! Only 3 left in stock
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Sellers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp size={28} className="text-blue-600" />
            Best Sellers
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-200 h-64 flex items-center justify-center">
                  <span className="text-slate-400">Product Image</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-xs text-slate-600">(249 sales)</span>
                  </div>
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <span className="text-lg font-bold">$89.00</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-slate-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-3">Never Miss a Deal</h2>
          <p className="mb-6 text-slate-300">
            Subscribe to our newsletter for exclusive offers and early access to
            sales.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
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
