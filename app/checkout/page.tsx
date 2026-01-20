import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2 space-y-8">
            {/* Step 1: Shipping Address */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Shipping Address
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 border rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="px-4 py-2 border rounded-lg"
                  />
                </div>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>UK</option>
                </select>
              </div>
            </div>

            {/* Step 2: Shipping Method */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Shipping Method
              </h2>

              <div className="space-y-3">
                {[
                  {
                    id: "standard",
                    name: "Standard Shipping",
                    desc: "5-7 business days",
                    price: "Free",
                  },
                  {
                    id: "express",
                    name: "Express Shipping",
                    desc: "2-3 business days",
                    price: "$15.00",
                  },
                  {
                    id: "overnight",
                    name: "Overnight Shipping",
                    desc: "Next business day",
                    price: "$30.00",
                  },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name="shipping"
                      defaultChecked={method.id === "standard"}
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{method.name}</div>
                      <div className="text-sm text-slate-600">
                        {method.desc}
                      </div>
                    </div>
                    <span className="font-semibold">{method.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Payment */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                Payment Method
              </h2>

              <div className="space-y-3">
                {[
                  { id: "card", name: "Credit / Debit Card" },
                  { id: "paypal", name: "PayPal" },
                  { id: "applepay", name: "Apple Pay" },
                  { id: "googlepay", name: "Google Pay" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked={method.id === "card"}
                    />
                    <span className="font-semibold">{method.name}</span>
                  </label>
                ))}
              </div>

              {/* Card Details */}
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Review */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  4
                </span>
                Order Review
              </h2>

              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center pb-3 border-b"
                  >
                    <span>Product Name</span>
                    <span className="font-semibold">$189.00</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <div className="bg-white rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span>$567.00</span>
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

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>$612.36</span>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 flex items-center justify-center gap-2">
                Place Order
                <ArrowRight size={18} />
              </Button>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <div className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
                <div className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0" />
                  <span>30-day return guarantee</span>
                </div>
                <div className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0" />
                  <span>Order tracking included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
