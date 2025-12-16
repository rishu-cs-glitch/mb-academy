"use client";

import WEB_IMAGES from "@/public";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();
  const logout = () => {
    // document.cookie = "token=; path=/; max-age=0;";
    // document.cookie = "emailVerificationRequired=; path=/; max-age=0;";
    // router.replace("/login");
    router.push("/profile");
  };
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-xl">
      <h1 className="text-xl font-semibold text-[#0F1828]">Welcome, Mohit 👋</h1>
      <button
        onClick={() => logout()}
        className="flex items-center justify-center rounded-full border border-neutral-300 p-1 hover:bg-gray-100 transition"
      >
        <img
          src={WEB_IMAGES.DUMMMY_USER}
          width={50}
          height={50}
          alt="Profile"
          // className="rounded-full"
        />
      </button>
    </header>
  );
}
