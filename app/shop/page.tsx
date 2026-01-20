import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Filter, ChevronDown } from "lucide-react";

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Filter size={18} />
                  Filter by
                </h3>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                  {["Women", "Men", "Accessories"].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="checkbox" />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="space-y-2">
                  {["Under $50", "$50 - $100", "$100 - $200", "$200+"].map(
                    (range) => (
                      <label
                        key={range}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input type="checkbox" />
                        <span>{range}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h4 className="font-semibold mb-3">Brand</h4>
                <div className="space-y-2">
                  {["Brand A", "Brand B", "Brand C"].map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="checkbox" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="font-semibold mb-3">Rating</h4>
                <div className="space-y-2">
                  {["4★ & up", "3★ & up", "2★ & up"].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="checkbox" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <span className="text-slate-600">Showing 1-12 products</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Sort by:</span>
                <select className="px-3 py-2 border rounded-lg">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Rating</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border"
                >
                  <div className="bg-slate-200 h-64 flex items-center justify-center relative">
                    <span className="text-slate-400">Product Image</span>
                    {item % 3 === 0 && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                        SALE
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Product Title</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-slate-500">(42)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">$99.00</span>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <ShoppingCart size={18} />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Heart size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <Button variant="outline">Previous</Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button key={page} variant={page === 1 ? "default" : "outline"}>
                  {page}
                </Button>
              ))}
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
