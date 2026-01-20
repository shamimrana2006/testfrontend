import { Button } from "@/components/ui/button";
import { Gift, Heart } from "lucide-react";

export default function GiftCards() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Gift Cards</h1>
        <p className="text-center text-slate-600 text-lg mb-12">
          Give the gift of style with our versatile gift cards
        </p>

        {/* Why Gift Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Gift,
              title: "Perfect Gift",
              desc: "Let them choose exactly what they want",
            },
            {
              icon: Heart,
              title: "No Expiry",
              desc: "Valid for 5 years from purchase date",
            },
            { title: "Easy to Use", desc: "Use online or in-store instantly" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-6 text-center">
              {feature.icon && (
                <feature.icon className="w-12 h-12 mx-auto text-blue-600 mb-3" />
              )}
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Gift Card Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Choose Your Amount
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[25, 50, 100, 150].map((amount) => (
              <div
                key={amount}
                className="border-2 rounded-lg p-8 text-center hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ${amount}
                </div>
                <p className="text-slate-600 mb-6">
                  Perfect for{" "}
                  {amount === 25
                    ? "essentials"
                    : amount === 50
                      ? "accessories"
                      : amount === 100
                        ? "full outfit"
                        : "wardrobe refresh"}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:scale-105 transition-transform">
                  Select
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">Or choose a custom amount</p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <input
                type="number"
                placeholder="Enter amount ($)"
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="10"
                max="1000"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mb-12 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">How to Deliver</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Gift Card",
                desc: "Instant delivery via email",
                features: [
                  "Sent immediately",
                  "Perfect for last-minute gifts",
                  "Includes custom message",
                ],
              },
              {
                title: "Physical Gift Card",
                desc: "Beautiful card mailed to recipient",
                features: [
                  "Arrives in 3-5 business days",
                  "Premium card design",
                  "Free shipping",
                ],
              },
            ].map((delivery, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border">
                <h3 className="font-bold text-lg mb-2">{delivery.title}</h3>
                <p className="text-slate-600 mb-4">{delivery.desc}</p>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  {delivery.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Choose
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            How to Use Your Gift Card
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Receive",
                desc: "Get your gift card via email or mail",
              },
              {
                step: 2,
                title: "Visit",
                desc: "Browse our collection online or in-store",
              },
              {
                step: 3,
                title: "Checkout",
                desc: "Enter gift card code at checkout",
              },
              {
                step: 4,
                title: "Enjoy",
                desc: "Wear your new purchase with confidence",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Gift Card FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "When does my gift card expire?",
                a: "Gift cards are valid for 5 years from the date of purchase.",
              },
              {
                q: "Can I check my balance?",
                a: "Yes, check your balance anytime on our website or in-store.",
              },
              {
                q: "Can I return my gift card?",
                a: "Gift cards are non-refundable but can be transferred to another person.",
              },
              {
                q: "Can I use online and in-store?",
                a: "Yes, gift cards work both online and at all our physical locations.",
              },
            ].map((faq, idx) => (
              <div key={idx}>
                <p className="font-bold mb-2">{faq.q}</p>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
