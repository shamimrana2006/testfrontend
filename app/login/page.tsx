import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2 text-center">Sign In</h1>
          <p className="text-slate-600 text-center mb-8">
            Welcome back to our boutique
          </p>

          <form className="space-y-4">
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                <span className="text-sm">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-base">
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-600">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              Google
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              Apple
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-slate-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up here
            </a>
          </p>
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-slate-600 mt-6">
          By signing in, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </div>
    </div>
  );
}
