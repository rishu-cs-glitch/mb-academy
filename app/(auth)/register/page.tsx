"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import SocialLogin from "@/components/auth/SocialLogin";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const route = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const minChar = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const allValid = minChar && hasNumber && hasSpecial && password === confirmPwd;

  const validationStyle = (rule: boolean) => (rule ? "text-green-600" : "text-red-500");

  const signUpClick = async () => {
    // const email = "mohit@yopmai.com";
    // route.replace(`/verify-email?email=${email}`);
    route.replace("/verify-otp");
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-[#0F1828]">Create Your Account</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Join courses, events, and community in minutes.
      </p>

      <div className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label className="text-sm text-[#0F1828]">Full Name</Label>
          <Input placeholder="Enter your full name" className="h-11" />
        </div>

        <div className="space-y-2">
          <Label className="text-sm text-[#0F1828]">Email Address</Label>
          <Input placeholder="Enter your email" className="h-11" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-[#0F1828]">Create Password</Label>

            <div className="flex gap-1">
              <span
                className={`h-1.5 w-4 rounded-full ${minChar ? "bg-[#0F1828]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-4 rounded-full ${hasNumber ? "bg-[#0F1828]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-4 rounded-full ${hasSpecial ? "bg-[#0F1828]" : "bg-neutral-300"}`}
              ></span>
            </div>
          </div>

          <div className="relative">
            <Input
              type={showPwd ? "text" : "password"}
              placeholder="Enter your new password"
              className={`h-11 border pr-12 ${
                password.length > 0 && !allValid ? "border-orange-400" : "border-neutral-300"
              } text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]`}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-[#0F1828]"
            >
              {showPwd ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {password.length > 0 && (
            <div className="space-y-1 text-xs">
              <p className={`flex items-center gap-2 ${validationStyle(minChar)}`}>
                {minChar ? <CheckCircle size={14} /> : <XCircle size={14} />}
                Minimum 8 characters
              </p>

              <p className={`flex items-center gap-2 ${validationStyle(hasNumber)}`}>
                {hasNumber ? <CheckCircle size={14} /> : <XCircle size={14} />}
                At least 1 number
              </p>

              <p className={`flex items-center gap-2 ${validationStyle(hasSpecial)}`}>
                {hasSpecial ? <CheckCircle size={14} /> : <XCircle size={14} />}
                One special character
              </p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-sm text-[#0F1828]">Confirm Password</Label>

          <div className="relative">
            <Input
              type={showCPwd ? "text" : "password"}
              placeholder="Confirm your password"
              className={`h-11 pr-10 ${
                confirmPwd.length > 0 && password !== confirmPwd
                  ? "border-red-500"
                  : "border-neutral-300"
              }`}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowCPwd(!showCPwd)}
              className="absolute inset-y-0 right-3 flex items-center text-[#0F1828]"
            >
              {showCPwd ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {confirmPwd.length > 0 && password !== confirmPwd && (
            <p className="text-xs text-red-500">Passwords do not match</p>
          )}
        </div>

        <Button
          onClick={signUpClick}
          disabled={false}
          // disabled={!allValid}
          className={`h-11 w-full ${
            allValid
              ? "bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
              : "bg-neutral-300 text-[#707070]"
          }`}
        >
          Sign Up
        </Button>

        <p className="text-xs text-neutral-500">
          By creating an account, you agree to our <b>Privacy Policy</b> & <b>Terms of Service</b>
        </p>

        <div className="my-3 text-center text-sm text-neutral-500">or continue with</div>

        {/* SocialLogin Compo */}
        <SocialLogin />

        <p className="text-center text-sm text-neutral-600">
          Already have an account?
          <Link href="/login" className="ml-1 font-semibold text-[#0F1828] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
