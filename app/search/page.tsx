import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Search } from "lucide-react";

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Search size={24} />
            <h1 className="text-3xl font-bold">Search Results for "dress"</h1>
          </div>
          <p className="text-slate-600">Found 124 results</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="md:col-span-1">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              <div className="space-y-6">
                {/* Category */}
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

                {/* Price */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {["Under $50", "$50-$100", "$100-$200", "$200+"].map(
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

                {/* Size */}
                <div>
                  <h4 className="font-semibold mb-3">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 border rounded hover:bg-slate-200"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <h4 className="font-semibold mb-3">Color</h4>
                  <div className="flex gap-2">
                    {["Black", "Navy", "Red", "White", "Gray"].map((color) => (
                      <div
                        key={color}
                        className="w-8 h-8 border-2 rounded-full cursor-pointer hover:border-blue-600"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
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

              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                Clear All
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            {/* Sort & View */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <span className="text-slate-600">
                Viewing 1-12 of 124 products
              </span>
              <select className="px-3 py-2 border rounded-lg">
                <option>Relevance</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
                >
                  <div className="bg-slate-200 h-64 flex items-center justify-center">
                    <span className="text-slate-400">Product Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Product Name</h3>
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
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
