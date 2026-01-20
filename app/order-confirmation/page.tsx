import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Printer } from "lucide-react";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle size={48} className="text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">Thank You!</h1>
          <p className="text-xl text-slate-600 mb-4">
            Your order has been confirmed
          </p>
          <p className="text-slate-600">
            A confirmation email has been sent to{" "}
            <span className="font-semibold">user@example.com</span>
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-slate-50 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-600 mb-4">
                Order Details
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-slate-600">Order Number</span>
                  <p className="text-xl font-bold">#ORD-2024-123456</p>
                </div>
                <div>
                  <span className="text-slate-600">Order Date</span>
                  <p className="text-xl font-bold">January 21, 2024</p>
                </div>
                <div>
                  <span className="text-slate-600">Estimated Delivery</span>
                  <p className="text-xl font-bold">January 26, 2024</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-600 mb-4">
                Shipping Address
              </h3>
              <div className="space-y-1 text-slate-700">
                <p className="font-semibold">John Doe</p>
                <p>123 Main Street</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="mt-2 font-semibold">john@example.com</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="border-t pt-8">
            <h3 className="font-semibold text-slate-600 mb-4">Order Items</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center pb-4 border-b"
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-400 text-xs">Image</span>
                    </div>
                    <div>
                      <p className="font-semibold">Product Name</p>
                      <p className="text-sm text-slate-600">
                        Color: Navy | Size: M | Qty: 1
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">$189.00</p>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-6 flex justify-end">
              <div className="w-full md:w-64 space-y-3">
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
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>$512.36</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
            <Download size={18} />
            Download Invoice
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer size={18} />
            Print Order
          </Button>
          <Button variant="outline">Track Order</Button>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold mb-3">What's Next?</h3>
          <ul className="space-y-2 text-slate-700">
            <li>✓ We're preparing your order for shipment</li>
            <li>✓ You'll receive a tracking number via email</li>
            <li>✓ Free returns within 30 days</li>
            <li>✓ Questions? Contact us at support@boutique.com</li>
          </ul>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            Continue Shopping
          </Button>
          <Button variant="outline" className="flex-1">
            View Order History
          </Button>
        </div>
      </div>
    </div>
  );
}
