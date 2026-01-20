import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Create Account
          </h1>
          <p className="text-slate-600 text-center mb-8">
            Join us for exclusive offers and early access
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-xs text-slate-600 mt-1">
                At least 8 characters with numbers and symbols
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-slate-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-slate-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-slate-600">
                  Send me exclusive offers and updates
                </span>
              </label>
            </div>

            {/* Sign Up Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-base mt-6">
              Create Account
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-slate-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
