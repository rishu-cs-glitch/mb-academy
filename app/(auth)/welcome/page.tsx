"use client";

import SocialLogin from "@/components/auth/SocialLogin";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold">
        <span className="font-medium text-[#0F1828]"> Welcome to</span>{" "}
        <span className="font-bold text-[#0F1828]">MB Academy</span>
      </h2>

      <Link href="/login">
        <Button className="mt-5 w-full bg-[#101B2D] text-white hover:bg-[#0F1828]">Sign In</Button>
      </Link>

      <Link href="/register">
        <Button className="mt-5 w-full bg-[#101B2D] text-white hover:bg-[#0F1828]">
          Create Account
        </Button>
      </Link>

      <div className="flex w-full flex-row items-center justify-between">
        <span className="h-[1px] w-[36%] bg-gray-300"></span>
        <span className="bg-white px-2 text-lg text-xs">or continue with</span>
        <span className="h-[1px] w-[36%] bg-gray-300"></span>
      </div>

      <SocialLogin />
      <div className="space-x-3 pt-6 text-center text-xs text-neutral-500">
        <span>Privacy Policy</span> <span>Terms of Service</span>
      </div>
    </div>
  );
}
