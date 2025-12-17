// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
// import SocialLogin from "@/components/auth/SocialLogin";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const route = useRouter();
//   const [showPwd, setShowPwd] = useState(false);
//   const [showCPwd, setShowCPwd] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPwd, setConfirmPwd] = useState("");

//   const minChar = password.length >= 8;
//   const hasNumber = /\d/.test(password);
//   const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//   const allValid = minChar && hasNumber && hasSpecial && password === confirmPwd;

//   const validationStyle = (rule: boolean) => (rule ? "text-green-600" : "text-red-500");

//   const signUpClick = async () => {
//     // const email = "mohit@yopmai.com";
//     // route.replace(`/verify-email?email=${email}`);
//     route.replace("/verify-otp");
//   };

//   return (
//     <div className="w-full">
//       <h2 className="text-2xl font-bold text-[#0F1828]">Create Your Account</h2>
//       <p className="mt-2 text-sm text-neutral-600">
//         Join courses, events, and community in minutes.
//       </p>

//       <div className="mt-10 space-y-5">
//         <div className="space-y-2">
//           <Label className="text-sm text-[#0F1828]">Full Name</Label>
//           <Input placeholder="Enter your full name" className="h-11" />
//         </div>

//         <div className="space-y-2">
//           <Label className="text-sm text-[#0F1828]">Email Address</Label>
//           <Input placeholder="Enter your email" className="h-11" />
//         </div>

//         <div className="space-y-2">
//           <div className="flex items-center justify-between">
//             <Label className="text-sm text-[#0F1828]">Create Password</Label>

//             <div className="flex gap-1">
//               <span
//                 className={`h-1.5 w-4 rounded-full ${minChar ? "bg-[#0F1828]" : "bg-neutral-300"}`}
//               ></span>
//               <span
//                 className={`h-1.5 w-4 rounded-full ${hasNumber ? "bg-[#0F1828]" : "bg-neutral-300"}`}
//               ></span>
//               <span
//                 className={`h-1.5 w-4 rounded-full ${hasSpecial ? "bg-[#0F1828]" : "bg-neutral-300"}`}
//               ></span>
//             </div>
//           </div>

//           <div className="relative">
//             <Input
//               type={showPwd ? "text" : "password"}
//               placeholder="Enter your new password"
//               className={`h-11 border pr-12 ${
//                 password.length > 0 && !allValid ? "border-orange-400" : "border-neutral-300"
//               } text-[#0F1828] placeholder-neutral-400 focus-visible:ring-[#0F1828]`}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               type="button"
//               onClick={() => setShowPwd(!showPwd)}
//               className="absolute top-1/2 right-3 -translate-y-1/2 text-[#0F1828]"
//             >
//               {showPwd ? <EyeOff /> : <Eye />}
//             </button>
//           </div>

//           {password.length > 0 && (
//             <div className="space-y-1 text-xs">
//               <p className={`flex items-center gap-2 ${validationStyle(minChar)}`}>
//                 {minChar ? <CheckCircle size={14} /> : <XCircle size={14} />}
//                 Minimum 8 characters
//               </p>

//               <p className={`flex items-center gap-2 ${validationStyle(hasNumber)}`}>
//                 {hasNumber ? <CheckCircle size={14} /> : <XCircle size={14} />}
//                 At least 1 number
//               </p>

//               <p className={`flex items-center gap-2 ${validationStyle(hasSpecial)}`}>
//                 {hasSpecial ? <CheckCircle size={14} /> : <XCircle size={14} />}
//                 One special character
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="space-y-2">
//           <Label className="text-sm text-[#0F1828]">Confirm Password</Label>

//           <div className="relative">
//             <Input
//               type={showCPwd ? "text" : "password"}
//               placeholder="Confirm your password"
//               className={`h-11 pr-10 ${
//                 confirmPwd.length > 0 && password !== confirmPwd
//                   ? "border-red-500"
//                   : "border-neutral-300"
//               }`}
//               onChange={(e) => setConfirmPwd(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowCPwd(!showCPwd)}
//               className="absolute inset-y-0 right-3 flex items-center text-[#0F1828]"
//             >
//               {showCPwd ? <EyeOff /> : <Eye />}
//             </button>
//           </div>

//           {confirmPwd.length > 0 && password !== confirmPwd && (
//             <p className="text-xs text-red-500">Passwords do not match</p>
//           )}
//         </div>

//         <Button
//           onClick={signUpClick}
//           // disabled={false}
//           disabled={!allValid}
//           className={`h-11 w-full ${
//             allValid
//               ? "bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
//               : "bg-neutral-300 text-[#707070]"
//           }`}
//         >
//           Sign Up
//         </Button>

//         <p className="text-xs text-neutral-500">
//           By creating an account, you agree to our <b>Privacy Policy</b> & <b>Terms of Service</b>
//         </p>

//         <div className="my-3 text-center text-sm text-neutral-500">or continue with</div>

//         {/* SocialLogin Compo */}
//         <SocialLogin />

//         <p className="text-center text-sm text-neutral-600">
//           Already have an account?
//           <Link href="/login" className="ml-1 font-semibold text-[#0F1828] hover:underline">
//             Sign In
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
import SocialLogin from "@/components/auth/SocialLogin";
import { useRouter } from "next/navigation";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPwd?: string;
}

export default function RegisterPage() {
  const route = useRouter();

  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPwd: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  // ---------- PASSWORD RULES ----------
  const minChar = form.password.length >= 8;
  const hasNumber = /\d/.test(form.password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(form.password);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const allValid =
    form.name.trim() &&
    isEmailValid &&
    minChar &&
    hasNumber &&
    hasSpecial &&
    form.password === form.confirmPwd;

  const validationStyle = (rule: boolean) => (rule ? "text-green-600" : "text-red-500");

  // ---------- HANDLE CHANGE ----------
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   setForm((prev) => ({ ...prev, [name]: value }));

  //   // 🔥 remove error on typing
  //   setErrors((prev) => ({ ...prev, [name]: undefined }));
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      // 🔥 CONFIRM PASSWORD LIVE CHECK
      if (name === "confirmPwd" || name === "password") {
        if (updated.confirmPwd && updated.password !== updated.confirmPwd) {
          setErrors((prev) => ({
            ...prev,
            confirmPwd: "Passwords do not match",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            confirmPwd: undefined,
          }));
        }
      }

      return updated;
    });
  };
  // ---------- SUBMIT ----------
  const signUpClick = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!isEmailValid) newErrors.email = "Enter valid email";

    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPwd) newErrors.confirmPwd = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ✅ success
    route.replace("/verify-otp");
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-[#0F1828]">Create Your Account</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Join courses, events, and community in minutes.
      </p>

      <div className="mt-10 space-y-5">
        {/* FULL NAME */}
        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`h-11 ${errors.name ? "border-red-500" : "border-neutral-300"}`}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`h-11 ${
              form.email.length > 0 && !isEmailValid ? "border-red-500" : "border-neutral-300"
            }`}
          />
          {form.email.length > 0 && !isEmailValid && (
            <p className="text-xs text-red-500">Enter valid email address</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-[#0F1828]">Create Password</Label>

            <div className="flex gap-1">
              <span
                className={`h-1.5 w-4 rounded-full ${minChar ? "bg-[#16ba1e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-4 rounded-full ${hasNumber ? "bg-[#16ba1e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-4 rounded-full ${hasSpecial ? "bg-[#16ba1e]" : "bg-neutral-300"}`}
              ></span>
            </div>
          </div>

          <div className="relative">
            <Input
              name="password"
              type={showPwd ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your new password"
              className={`h-11 pr-12 ${
                form.password.length > 0 && !allValid ? "border-orange-400" : "border-neutral-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute top-1/2 right-3 -translate-y-1/2"
            >
              {showPwd ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {form.password.length > 0 && (
            <div className="space-y-1 text-xs">
              <p className={`flex gap-2 ${validationStyle(minChar)}`}>
                {minChar ? <CheckCircle size={14} /> : <XCircle size={14} />}
                Minimum 8 characters
              </p>
              <p className={`flex gap-2 ${validationStyle(hasNumber)}`}>
                {hasNumber ? <CheckCircle size={14} /> : <XCircle size={14} />}
                At least 1 number
              </p>
              <p className={`flex gap-2 ${validationStyle(hasSpecial)}`}>
                {hasSpecial ? <CheckCircle size={14} /> : <XCircle size={14} />}
                One special character
              </p>
            </div>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="space-y-2">
          <Label>Confirm Password</Label>

          <div className="relative">
            <Input
              name="confirmPwd"
              type={showCPwd ? "text" : "password"}
              value={form.confirmPwd}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`h-11 pr-10 ${
                form.confirmPwd.length > 0 && form.password !== form.confirmPwd
                  ? "border-red-500"
                  : "border-neutral-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowCPwd(!showCPwd)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showCPwd ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {errors.confirmPwd && <p className="text-xs text-red-500">{errors.confirmPwd}</p>}
        </div>

        {/* SUBMIT */}
        <Button
          onClick={signUpClick}
          disabled={!allValid}
          className={`h-11 w-full ${
            allValid ? "bg-[#0F1828] text-white" : "bg-neutral-300 text-neutral-500"
          }`}
        >
          Sign Up
        </Button>

        <SocialLogin />

        <p className="text-center text-sm text-neutral-600">
          Already have an account?
          <Link href="/login" className="ml-1 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
