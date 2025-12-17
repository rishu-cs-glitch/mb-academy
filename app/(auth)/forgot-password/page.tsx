"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-[#0F1828]">Reset Your Password</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Enter the email address linked to your MB Academy account. We’ll send you a verification
        code to reset your password.
      </p>

      <div className="mt-10 space-y-5">
        <div className="space-y-2">
          <Label className="text-sm text-[#0F1828]">Email Address</Label>
          <Input
            placeholder="Enter your email"
            className="h-11 border-neutral-300 text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]"
          />
        </div>

        <Button className="h-11 w-full bg-[#0F1828] text-white hover:bg-[#0F1828]/90">
          Send Reset Code
        </Button>
        <div className="text-center text-sm">
          <Link
            href="/login"
            className="flex items-center justify-center text-[#0F1828] hover:underline"
          >
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
