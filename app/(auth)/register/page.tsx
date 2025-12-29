"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import SocialLogin from "@/components/auth/SocialLogin";
import { useRouter } from "next/navigation";
import { useRegister } from "@/core/queries/auth.queries";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPwd?: string;
}

export default function RegisterPage() {
  const route = useRouter();
  const { isPending } = useRegister();
  // const setEmailForOtp = useAuthStore((s) => s.setEmailForOtp);

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

    // 🔥 REGISTER API CALL
    // mutate(
    //   {
    //     name: form.name,
    //     email: form.email,
    //     password: form.password,
    //   },
    //   {
    //     onSuccess: () => {
    //       setEmailForOtp(form.email);
    //       route.replace("/verify-otp");
    //     },
    //     onError: (err: any) => {
    //       setErrors({
    //         email: err?.message || "Registration failed",
    //       });
    //     },
    //   }
    // );
  };

  return (
    <div className="w-full justify-center">
      <h2 className="text-3xl font-bold text-[#0F1828]">Create Your Account</h2>
      <p className="mt-2 text-xl text-neutral-600">
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
            className={`h-11 mt-1 ${errors.name ? "border-red-500" : "border-neutral-300"}`}
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
            className={`h-11 mt-1 ${
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
                className={`h-1.5 w-6 rounded-full ${minChar ? "bg-[#16ba1e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-6 rounded-full ${hasNumber ? "bg-[#16ba1e]" : "bg-neutral-300"}`}
              ></span>
              <span
                className={`h-1.5 w-6 rounded-full ${hasSpecial ? "bg-[#16ba1e]" : "bg-neutral-300"}`}
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
              className={`h-11 mt-1 pr-12 ${
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
              <p className={`flex gap-2 text-sm font-medium ${validationStyle(minChar)}`}>
                {minChar ? <CheckCircle size={16} /> : <XCircle size={16} />}
                Minimum 8 characters
              </p>
              <p className={`flex gap-2 text-sm  font-medium ${validationStyle(hasNumber)}`}>
                {hasNumber ? <CheckCircle size={16} /> : <XCircle size={16} />}
                At least 1 number
              </p>
              <p className={`flex gap-2 text-sm font-medium ${validationStyle(hasSpecial)}`}>
                {hasSpecial ? <CheckCircle size={16} /> : <XCircle size={16} />}
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
              className={`h-11 mt-1 pr-10 ${
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
          disabled={!allValid || isPending}
          className={`h-11 w-full ${
            allValid ? "bg-[#0F1828] text-white" : "bg-neutral-300 text-neutral-500"
          }`}
        >
          {isPending ? "Creating Account..." : "Sign Up"}
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
