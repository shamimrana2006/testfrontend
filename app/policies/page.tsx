import { Button } from "@/components/ui/button";
import { Truck, RotateCcw, Shield } from "lucide-react";

export default function Policies() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shipping & Policies</h1>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Truck, title: "Shipping & Delivery", color: "blue" },
            { icon: RotateCcw, title: "Returns & Refunds", color: "green" },
            { icon: Shield, title: "Privacy Policy", color: "purple" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.title.toLowerCase().replace(/ /g, "-")}`}
              className={`border-2 border-${item.color}-200 bg-${item.color}-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <item.icon className={`text-${item.color}-600 mb-3`} size={32} />
              <h3 className="font-bold text-lg">{item.title}</h3>
            </a>
          ))}
        </div>

        {/* Shipping & Delivery */}
        <section id="shipping-delivery" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Shipping & Delivery</h2>
          <div className="space-y-4 text-slate-700">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold mb-2">Standard Shipping</h3>
              <p>Delivery: 5-7 business days | Cost: Free on orders over $50</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold mb-2">Express Shipping</h3>
              <p>Delivery: 2-3 business days | Cost: $15.00</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold mb-2">Overnight Shipping</h3>
              <p>Delivery: Next business day | Cost: $30.00</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-sm">
                <strong>Note:</strong> Shipping times are calculated from the
                date your order is processed, not placed. Orders are processed
                Monday-Friday during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Returns & Refunds */}
        <section id="returns-refunds" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Returns & Refund Policy</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              We want you to love your purchase! Here's our hassle-free return
              policy:
            </p>

            <div>
              <h3 className="font-bold mb-2">30-Day Return Window</h3>
              <p>
                Items can be returned within 30 days of purchase. All items must
                be:
              </p>
              <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
                <li>Unused and unworn</li>
                <li>In original packaging</li>
                <li>With all tags attached</li>
                <li>In resalable condition</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold mb-2">Return Process</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Contact our support team to initiate a return</li>
                <li>Receive a prepaid return shipping label</li>
                <li>Ship the item back to us</li>
                <li>Receive your refund within 5-7 business days</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold mb-2">Refund Amount</h3>
              <p>
                Full refund of the item price will be issued. Shipping costs are
                non-refundable unless the return is due to our error.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <p className="text-sm">
                <strong>Non-Returnable Items:</strong> Sale items, clearance
                items, and intimates/swimwear are final sale and cannot be
                returned.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>

            <div>
              <h3 className="font-bold mb-2">Information We Collect</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Account information (name, email, password)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information</li>
                <li>Order history</li>
                <li>Browsing and purchase behavior</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>To process and fulfill your orders</li>
                <li>To send you promotional emails (if opted in)</li>
                <li>To improve our website and services</li>
                <li>To detect and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Data Protection</h3>
              <p>
                We use industry-standard SSL encryption to protect your personal
                information. We do not sell or share your data with third
                parties.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal
                information. Contact our privacy team for requests.
              </p>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
          <div className="space-y-4 text-slate-700">
            <p>By shopping with us, you agree to these terms and conditions:</p>

            <div>
              <h3 className="font-bold mb-2">Age Requirement</h3>
              <p>
                You must be at least 18 years old to make a purchase on our
                website.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Product Accuracy</h3>
              <p>
                We strive to provide accurate descriptions and images. However,
                we do not warrant that product information is completely
                accurate.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Limitation of Liability</h3>
              <p>
                We are not liable for any indirect, incidental, or consequential
                damages arising from your use of our site or products.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Modifications</h3>
              <p>
                We reserve the right to modify these terms at any time.
                Continued use constitutes acceptance of changes.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-sm">
                For questions about our policies,{" "}
                <a href="/contact" className="text-blue-600 hover:underline">
                  contact us
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
          <p className="text-slate-600 mb-4">
            Our support team is here to help
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
