import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

export default function Cart() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 border rounded-lg p-4">
                  <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-400 text-xs">Image</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Product Name</h3>
                    <p className="text-slate-600 text-sm">
                      Color: Navy | Size: M
                    </p>
                    <p className="text-slate-600 text-sm">SKU: 12345</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <span className="text-lg font-bold">$189.00</span>

                    <div className="flex items-center gap-2 border rounded-lg">
                      <button className="p-1 hover:bg-slate-100">
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">1</span>
                      <button className="p-1 hover:bg-slate-100">
                        <Plus size={16} />
                      </button>
                    </div>

                    <button className="text-red-600 hover:text-red-800 mt-2">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-700">
                <span className="font-semibold">Free shipping</span> on this
                order!
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-slate-50 rounded-lg p-6 h-fit sticky top-20">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span>$567.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Discount</span>
                <span className="text-green-600">-$100.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tax</span>
                <span>$45.36</span>
              </div>
            </div>

            <div className="border-t pt-3 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>$512.36</span>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mb-3">
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <input
                type="text"
                placeholder="Promo code"
                className="w-full px-3 py-2 border rounded-lg mb-2"
              />
              <Button variant="outline" className="w-full">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
