"use client";

import SocialLogin from "@/components/auth/SocialLogin";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="space-y-6  h-full flex flex-col justify-center px-6 py-12  ">
      <h2 className="text-center text-2xl font-bold">
        <span className="font-medium text-[#0F1828] text-3xl"> Welcome to</span>{" "}
        <span className="font-bold text-[#0F1828] text-3xl">MB Academy</span>
      </h2>

      <Link href="/login">
        <Button className="mt-5 w-full bg-[#101B2D] text-white h-10 hover:bg-[#0F1828]">
          Sign In
        </Button>
      </Link>

      <Link href="/register">
        <Button className="w-full bg-[#101B2D] h-10 text-white hover:bg-[#0F1828]">
          Create Account
        </Button>
      </Link>

      <div className="flex mt-5 w-full flex-row items-center justify-between">
        <span className="h-[1px] w-[30%] bg-gray-300"></span>
        <span className=" px-2 text-lg text-sm text-gray-500">or continue with</span>
        <span className="h-[1px] w-[30%] bg-gray-300"></span>
      </div>

      <SocialLogin />
      <div className=" w-full flex-col bottom-0 mt-10 ">
        <div className="flex justify-center gap-4 text-xs text-neutral-600">
          <span className="cursor-pointer hover:text-black">Need help? Contact support</span>

          <span className="cursor-pointer hover:underline">Privacy Policy</span>

          <span className="cursor-pointer hover:underline">Terms of Service</span>
        </div>
      </div>
    </div>
  );
}
