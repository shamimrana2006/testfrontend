import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>

        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <div className="bg-slate-200 h-64 flex items-center justify-center relative">
                <span className="text-slate-400">Product Image</span>
                {item % 2 === 0 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    SALE
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold flex-1">Product Name</h3>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </div>

                <p className="text-sm text-slate-600 mb-2">
                  Availability: In Stock
                </p>

                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$99.00</span>
                    {item % 3 === 0 && (
                      <span className="text-sm text-green-600">-25%</span>
                    )}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State - Uncomment to show */}
        {/* <div className="text-center py-16">
          <Heart size={48} className="mx-auto mb-4 text-slate-300" />
          <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
          <p className="text-slate-600 mb-6">Start adding items to save them for later</p>
          <Button className="bg-blue-600 hover:bg-blue-700">Continue Shopping</Button>
        </div> */}
      </div>
    </div>
  );
}
