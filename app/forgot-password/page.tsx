import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <a
            href="/login"
            className="flex items-center gap-2 text-blue-600 hover:underline mb-6"
          >
            <ArrowLeft size={18} />
            Back to Login
          </a>

          <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
          <p className="text-slate-600 mb-8">
            Enter your email address and we'll send you a link to reset your
            password.
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
              <p className="text-xs text-slate-600 mt-2">
                We'll send a password reset link to this email address.
              </p>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-base">
              Send Reset Link
            </Button>
          </form>

          {/* Additional Info */}
          <p className="text-center text-slate-600 mt-6">
            Remembered your password?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign in here
            </a>
          </p>
        </div>

        {/* Support Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 text-center">
          <p className="text-sm text-slate-700">
            Need help?{" "}
            <a
              href="/contact"
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
