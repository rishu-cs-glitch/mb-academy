"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DashboardHeader() {
  const router = useRouter();
  const logout = () => {
    document.cookie = "token=; path=/; max-age=0;";
    document.cookie = "emailVerificationRequired=; path=/; max-age=0;";
    router.replace("/login");
    //  router.push("/dashboard/profile")
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-xl">
      <h1 className="text-xl font-semibold text-[#0F1828]">Welcome, Mohit 👋</h1>
      <button
        onClick={() => logout()}
        className="flex items-center justify-center rounded-full border border-neutral-300 p-1 hover:bg-gray-100 transition"
      >
        <Image
          src="/profile-avatar.png"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
      </button>
    </header>
  );
}
