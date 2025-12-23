"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/auth/SocialLogin";
import { useLogin } from "@/core/queries/auth.queries";
import { useAuthStore } from "@/core/store/auth.store";

export default function LoginPage() {
  const router = useRouter();
  const { mutate, isPending } = useLogin();
  const setEmailForOtp = useAuthStore((s) => s.setEmailForOtp);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------- VALIDATIONS ----------
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const minChar = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const allValid = isValidEmail(email) && minChar && hasNumber && hasSpecial;

  const validationStyle = (rule: boolean) => (rule ? "text-green-600" : "text-red-500");

  // ---------- SUBMIT ----------
  const signInPress = () => {
    if (!allValid) return;

    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (res: any) => {
          // ✅ LOGIN SUCCESS
          if (res?.token) {
            document.cookie = `token=${res.token}; path=/;`;
            router.replace("/dashboard");
          }
        },
        onError: (err: any) => {
          /**
           * 🔥 Backend special case:
           * emailVerificationRequired = true
           */
          if (err?.emailVerificationRequired) {
            setEmailForOtp(email);
            router.replace("/verify-otp");
          } else {
            alert(err?.message || "Login failed");
          }
        },
      }
    );
  };

  return (
    <div className="w-full justify-center h-full max-w-md mt-20 mb-20">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-[#0F1828]">Sign In</h2>
      <p className="mt-2 text-sm text-neutral-600">Access your courses, community and events.</p>

      <div className="mt-10 space-y-5">
        {/* EMAIL */}
        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`h-11 mt-1 ${
              email.length > 0 && !isValidEmail(email) ? "border-red-500" : "border-neutral-300"
            }`}
          />

          {email.length > 0 && !isValidEmail(email) && (
            <p className="text-xs text-red-500">Enter a valid email address</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-[#0F1828]">Password</Label>

            <div className="flex gap-1">
              <span
                className={`h-1.5 w-6 rounded-full ${minChar ? "bg-[#23ca2e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-6 rounded-full ${hasNumber ? "bg-[#23ca2e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-6 rounded-full ${hasSpecial ? "bg-[#23ca2e]" : "bg-neutral-300"}`}
              ></span>
            </div>
          </div>
          {/* <Label>Password</Label> */}

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`h-11 pr-10 ${
                password.length > 0 && !allValid ? "border-orange-400" : "border-neutral-300"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* 🔥 REGISTER-LIKE PASSWORD VALIDATION */}
          {password.length > 0 && (
            <div className="space-y-1 text-xs">
              <p
                className={`flex items-center gap-2   text-sm font-medium ${validationStyle(minChar)}`}
              >
                {minChar ? <CheckCircle size={16} /> : <XCircle size={16} />}
                Minimum 8 characters
              </p>

              <p
                className={`flex items-center gap-2  text-sm font-medium ${validationStyle(hasNumber)}`}
              >
                {hasNumber ? <CheckCircle size={16} /> : <XCircle size={16} />}
                At least 1 number
              </p>

              <p
                className={`flex items-center gap-2  text-sm font-medium ${validationStyle(hasSpecial)}`}
              >
                {hasSpecial ? <CheckCircle size={16} /> : <XCircle size={16} />}
                One special character
              </p>
            </div>
          )}

          <Link
            href="/forgot-password"
            className="block text-right text-xm hover:font-medium text-[#0F1828] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* SUBMIT */}
        <Button
          onClick={signInPress}
          disabled={!allValid || isPending}
          className={`h-11 w-full ${
            allValid
              ? "bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
              : "bg-neutral-300 text-neutral-500"
          }`}
        >
          {isPending ? "Signing in..." : "Sign In"}
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
