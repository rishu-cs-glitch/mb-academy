// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Eye, EyeOff } from "lucide-react";
// import { useRouter } from "next/navigation";
// import SocialLogin from "@/components/auth/SocialLogin";

// export default function LoginPage() {
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);

//   const siginPress = () => {
//     document.cookie = `token=123456; path=/;`;
//     router.replace("/dashboard");
//   };
//   return (
//     <div className="w-full">
//       {/* Title */}
//       <h2 className="text-2xl font-bold text-[#0F1828]">Sign In to MB Academy</h2>
//       <p className="mt-2 text-sm text-neutral-600">Access your courses, community and events.</p>

//       <div className="mt-10 space-y-5">
//         <div className="space-y-2">
//           <Label className="text-sm text-[#0F1828]">Email Address</Label>
//           <Input
//             placeholder="Enter your email"
//             className="h-11 border-neutral-300 text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label className="text-sm text-[#0F1828]">Password</Label>

//           <div className="relative">
//             <Input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               className="h-11 border-neutral-300 pr-10 text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]"
//             />
//             <button
//               type="button"
//               className="absolute inset-y-0 right-3 flex items-center text-neutral-500 hover:text-[#0F1828]"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//             </button>
//           </div>

//           <Link
//             href="/forgot-password"
//             className="block text-right text-xs text-[#0F1828] hover:underline"
//           >
//             Forgot Password?
//           </Link>
//         </div>
//         <Button
//           onClick={siginPress}
//           className="h-11 w-full bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
//         >
//           Sign In
//         </Button>

//         <div className="text-center text-sm text-neutral-500">or</div>

//         <SocialLogin />

//         <p className="text-center text-sm text-neutral-600">
//           Don’t have an account?
//           <Link href="/register" className="ml-1 font-semibold text-[#0F1828] hover:underline">
//             Create Account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {
  const router = useRouter();

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

    // ✅ mock login success
    document.cookie = `token=123456; path=/;`;
    router.replace("/dashboard");
  };

  return (
    <div className="w-full">
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
            className={`h-11 ${
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
                className={`h-1.5 w-4 rounded-full ${minChar ? "bg-[#23ca2e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-4 rounded-full ${hasNumber ? "bg-[#23ca2e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-4 rounded-full ${hasSpecial ? "bg-[#23ca2e]" : "bg-neutral-300"}`}
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

          <Link
            href="/forgot-password"
            className="block text-right text-xs text-[#0F1828] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* SUBMIT */}
        <Button
          onClick={signInPress}
          disabled={!allValid}
          className={`h-11 w-full ${
            allValid
              ? "bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
              : "bg-neutral-300 text-neutral-500"
          }`}
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
