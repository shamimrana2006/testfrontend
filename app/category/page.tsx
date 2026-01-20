import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

export default function CategoryPage() {
  const category = "Women";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">{category}'s Collection</h1>
          <p className="text-slate-600 text-lg">
            Explore our curated selection of {category.toLowerCase()} fashion
          </p>
        </div>

        {/* Category Banner */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg p-12 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">New Season Styles</h2>
          <p className="text-lg mb-6">
            Discover the latest trends and timeless classics
          </p>
          <Button className="bg-white text-rose-600 hover:bg-slate-100">
            Shop Collection
          </Button>
        </div>

        {/* Subcategories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Shop by Type</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {["Dresses", "Tops", "Bottoms", "Outerwear"].map((type) => (
              <div
                key={type}
                className="bg-slate-100 h-32 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors"
              >
                <span className="font-semibold text-lg">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-6">All Products</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-200 h-64 flex items-center justify-center">
                  <span className="text-slate-400">Product Image</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Product Name</h4>
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
        </div>
      </div>
    </div>
  );
}
