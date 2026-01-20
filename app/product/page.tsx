import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Star } from "lucide-react";

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-slate-400 text-lg">Main Product Image</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((img) => (
                <div
                  key={img}
                  className="bg-slate-200 h-20 rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 ring-blue-500"
                >
                  <span className="text-slate-400 text-xs">Image {img}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span className="text-sm text-slate-500 uppercase tracking-wide">
              NEW ARRIVAL
            </span>
            <h1 className="text-4xl font-bold mt-2 mb-4">Silk Midi Dress</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-slate-600">(124 reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">$189.00</span>
                <span className="text-lg text-slate-500 line-through">
                  $249.00
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  25% OFF
                </span>
              </div>
              <p className="text-slate-600">Free shipping on orders over $50</p>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-slate-600 leading-relaxed">
                  Elevate your wardrobe with our luxurious silk midi dress.
                  Crafted from premium silk fabric, this dress features a
                  flattering wrap silhouette perfect for any occasion.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Specifications</h3>
                <ul className="text-slate-600 space-y-1">
                  <li>Material: 100% Silk</li>
                  <li>Length: Midi (mid-calf)</li>
                  <li>Fit: Regular</li>
                  <li>Care: Hand wash or gentle dry clean</li>
                </ul>
              </div>
            </div>

            {/* Size & Color Selection */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="font-semibold mb-2 block">Size</label>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 border-2 rounded-lg hover:border-blue-500 hover:bg-blue-50"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-semibold mb-2 block">Color</label>
                <div className="flex gap-3">
                  {[
                    { name: "Sage", color: "bg-green-300" },
                    { name: "Black", color: "bg-black" },
                    { name: "Navy", color: "bg-blue-900" },
                  ].map((col) => (
                    <div
                      key={col.name}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${col.color} cursor-pointer hover:ring-2 ring-offset-2 ring-blue-500`}
                      ></div>
                      <span className="text-xs">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-semibold mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 border rounded-lg hover:bg-slate-100">
                    −
                  </button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="w-10 h-10 border rounded-lg hover:bg-slate-100">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="py-3 flex items-center justify-center gap-2"
                >
                  <Heart size={20} />
                  Wishlist
                </Button>
                <Button
                  variant="outline"
                  className="py-3 flex items-center justify-center gap-2"
                >
                  <Share2 size={20} />
                  Share
                </Button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Shipping & Returns</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>✓ Free shipping on orders over $50</li>
                <li>✓ Easy 30-day returns</li>
                <li>✓ Secure checkout</li>
                <li>✓ Gift wrapping available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <div key={review} className="border-b pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold">Reviewer Name</span>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">2 weeks ago</span>
                </div>
                <p className="text-slate-600">
                  Great quality fabric and perfect fit! Highly recommended.
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  );
}
