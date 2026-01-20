import { Button } from "@/components/ui/button";
import { Heart, Gift } from "lucide-react";

export default function Loyalty() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Loyalty Program</h1>
        <p className="text-center text-slate-600 text-lg mb-12">
          Join our exclusive club and earn rewards on every purchase
        </p>

        {/* Program Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              tier: "Silver",
              minSpend: "$0",
              rewards: "1 point per $1 spent",
              benefits: [
                "Birthday bonus",
                "Early sale access",
                "Exclusive offers",
              ],
            },
            {
              tier: "Gold",
              minSpend: "$500",
              rewards: "1.5 points per $1 spent",
              benefits: [
                "All Silver benefits",
                "Free shipping",
                "Priority support",
                "VIP events",
              ],
              featured: true,
            },
            {
              tier: "Platinum",
              minSpend: "$2000",
              rewards: "2 points per $1 spent",
              benefits: [
                "All Gold benefits",
                "Exclusive items",
                "Personal stylist",
                "Concierge",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.tier}
              className={`rounded-lg p-8 border-2 ${tier.featured ? "border-blue-600 bg-blue-50 shadow-lg" : "border-slate-200"}`}
            >
              {tier.featured && (
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
              <p className="text-slate-600 mb-4">
                Spend {tier.minSpend}+ annually
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-6">
                {tier.rewards}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${tier.featured ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-200 hover:bg-slate-300 text-slate-900"}`}
              >
                Join Now
              </Button>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Join for Free",
                desc: "Sign up and start earning points immediately",
              },
              {
                step: 2,
                title: "Earn Points",
                desc: "Get 1 point for every $1 spent on purchases",
              },
              {
                step: 3,
                title: "Unlock Rewards",
                desc: "Redeem points for discounts and exclusive perks",
              },
              {
                step: 4,
                title: "Enjoy Benefits",
                desc: "Access exclusive events, early sales, and more",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Catalog */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Rewards Catalog
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { points: "100", reward: "$10 Off", value: "$10" },
              { points: "250", reward: "$25 Off", value: "$25" },
              { points: "500", reward: "$60 Off", value: "$60" },
              { points: "1000", reward: "Free Item", value: "Up to $150" },
            ].map((reward, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {reward.points}
                </div>
                <p className="text-slate-600 text-sm mb-4">points</p>
                <h3 className="font-bold text-lg mb-1">{reward.reward}</h3>
                <p className="text-slate-600 text-sm">{reward.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Account */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Your Account</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <p className="text-slate-600 text-sm mb-2">Current Points</p>
              <p className="text-3xl font-bold text-blue-600">2,450</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="text-slate-600 text-sm mb-2">Tier Status</p>
              <p className="text-3xl font-bold">Gold</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <p className="text-slate-600 text-sm mb-2">Next Tier In</p>
              <p className="text-3xl font-bold">$1,550</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
