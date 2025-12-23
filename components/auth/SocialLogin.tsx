"use client";

import { Button } from "@/components/ui/button";
// import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <div className="space-y-3 mt-4">
      <Button
        variant="outline"
        className="w-full h-10 border-neutral-300 text-[#101B2D] hover:bg-neutral-100 flex items-center gap-2"
        onClick={() => console.log("Login with Google")}
      >
        {/* <FcGoogle className="text-xl" /> */}
        Continue with Google
      </Button>

      <Button
        variant="outline"
        className="w-full h-10 mt-6 border-neutral-300 text-[#101B2D] hover:bg-neutral-100 flex items-center gap-2"
        onClick={() => console.log("Login with Apple")}
      >
        {/* <Apple size={18} /> */}
        Continue with Apple
      </Button>
    </div>
  );
}
