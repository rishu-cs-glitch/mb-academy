"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const siginPress = () => {
    document.cookie = `token=123456; path=/;`;
    router.replace("/dashboard");
  };
  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#0F1828]">Sign In to MB Academy</h2>
      <p className="mt-2 text-sm text-neutral-600">Access your courses, community and events.</p>

      <div className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label className="text-sm text-[#0F1828]">Email Address</Label>
          <Input
            placeholder="Enter your email"
            className="h-11 border-neutral-300 text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm text-[#0F1828]">Password</Label>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="h-11 border-neutral-300 pr-10 text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-neutral-500 hover:text-[#0F1828]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <Link
            href="/forgot-password"
            className="block text-right text-xs text-[#0F1828] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          onClick={siginPress}
          className="h-11 w-full bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
        >
          Sign In
        </Button>

        <div className="text-center text-sm text-neutral-500">or</div>

        <SocialLogin />

        <p className="text-center text-sm text-neutral-600">
          Don’t have an account?
          <Link href="/register" className="ml-1 font-semibold text-[#0F1828] hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
