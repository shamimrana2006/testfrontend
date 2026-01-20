import { Button } from "@/components/ui/button";
import { Lock, ArrowLeft } from "lucide-react";

export default function ResetPassword() {
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

          <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
          <p className="text-slate-600 mb-8">Enter your new password below.</p>

          <form className="space-y-4">
            {/* New Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                New Password
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

            {/* Submit Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-base">
              Reset Password
            </Button>
          </form>

          {/* Password Requirements */}
          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <p className="text-sm font-semibold mb-2">Password must contain:</p>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>✓ At least 8 characters</li>
              <li>✓ At least one uppercase letter</li>
              <li>✓ At least one number</li>
              <li>✓ At least one special character</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
