"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useVerifyOtp } from "@/core/queries/auth.queries";

export default function VerifyOtpPage() {
  const router = useRouter();
  const { isPending } = useVerifyOtp();

  // const email = useAuthStore((s) => s.emailForOtp);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // const verifyOtp = () => {
  //   const code = otp.join("");

  //   if (code.length !== 6) {
  //     setError("Please enter all 6 digits of the OTP");
  //     return;
  //   }
  //   // if (res.data.needsProfileSetup) {
  //   router.replace("/profile-setup");
  //   // } else {
  //   //   router.replace("/dashboard");
  //   // }
  //   console.log("Verified OTP:", code);
  // };
  const verifyOtp = () => {
    const code = otp.join("");
    // if (!email) {
    //   router.replace("/register"); // safety fallback
    // }
    if (code.length !== 6) {
      setError("Please enter all 6 digits of the OTP");
      return;
    }
    router.replace("/profile-setup");
    // mutate(
    //   {
    //     otp: code,
    //     email: email || "", // (agar backend ko chahiye)
    //   },
    //   {
    //     onSuccess: (res: any) => {
    //       console.log("res---verify otp res--", JSON.stringify(res));
    //       // 🔑 Backend response ke basis par route
    //       if (res?.needsProfileSetup) {
    //         router.replace("/profile-setup");
    //       } else {
    //         router.replace("/dashboard");
    //       }
    //     },
    //     onError: (err: any) => {
    //       setError(err?.message || "Invalid or expired OTP");
    //     },
    //   }
    // );
  };

  return (
    <div className="w-full max-h-full max-w-md mx-auto pt-10 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#0F1828]">Verify Your Email</h2>

      <p className="mt-2 text-1xl text-neutral-600 leading-relaxed">
        We&rsquo;ve sent a 6-digit code to your email. Enter it below to verify your account.
      </p>

      {/* OTP Boxes */}
      <div className="flex justify-between mt-8">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={digit}
            ref={(el) => void (inputRefs.current[i] = el)}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={`w-12 h-12 rounded-md text-center text-lg 
              border outline-none transition
              ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-300 focus:ring-[#0F1828]"
              }`}
          />
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Verify Button */}
      <Button
        onClick={verifyOtp}
        disabled={isPending}
        className="w-full h-11 mt-8 bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
      >
        {isPending ? "Verifying..." : "Verify"}
      </Button>
      {/* Resend */}
      <p className="mt-4 text-sm text-neutral-600 text-center">
        Didn’t receive the code?
        <button className="ml-1 font-semibold text-[#0F1828] hover:underline">Resend</button>
      </p>

      {/* Footer */}
      <div className="  flex justify-center gap-4 mt-20 text-xs text-neutral-500">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  );
}
