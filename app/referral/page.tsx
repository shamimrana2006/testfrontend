import { Button } from "@/components/ui/button";
import { Users, Cake, Gift } from "lucide-react";

export default function Referral() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Referral Program
        </h1>
        <p className="text-center text-slate-600 text-lg mb-12">
          Share the love and earn rewards when your friends shop
        </p>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Share Your Code</h3>
            <p className="text-slate-600">
              Get your unique referral code and share with friends
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Gift className="text-green-600" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">They Save</h3>
            <p className="text-slate-600">
              Your friend gets 15% off their first purchase
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cake className="text-purple-600" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">You Earn</h3>
            <p className="text-slate-600">
              Earn $20 credit for every successful referral
            </p>
          </div>
        </div>

        {/* Your Referral Code */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Your Referral Code</h2>
          <div className="bg-white/20 rounded-lg px-8 py-4 mb-6 font-mono text-2xl font-bold">
            FRIEND2024
          </div>
          <p className="text-blue-100 mb-6">
            Share this code with friends to earn $20 for each successful
            referral
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Copy Code
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              Share on Social
            </Button>
          </div>
        </div>

        {/* Referral Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <p className="text-slate-600 text-sm mb-2">Total Referrals</p>
            <p className="text-4xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <p className="text-slate-600 text-sm mb-2">Successful Referrals</p>
            <p className="text-4xl font-bold text-green-600">8</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <p className="text-slate-600 text-sm mb-2">Earned Credits</p>
            <p className="text-4xl font-bold text-purple-600">$160</p>
          </div>
        </div>

        {/* Referral History */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Recent Referrals</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((ref) => (
              <div
                key={ref}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-slate-600">
                    Referred on Jan {20 - ref}, 2024
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">+$20 Credit</p>
                  <p className="text-sm text-slate-600">Order: #12345</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-blue-50 rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Code</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Spread the word about our boutique and earn rewards for each friend
            who shops with us.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Email Friends
            </Button>
            <Button variant="outline">Share on Facebook</Button>
            <Button variant="outline">Share on Instagram</Button>
            <Button variant="outline">Copy Link</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
