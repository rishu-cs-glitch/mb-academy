"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8F7F2] p-6">
      <button onClick={() => router.back()} className="text-sm text-[#0F1828] hover:underline">
        ← Back
      </button>

      <div className="mt-6 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-[#0F1828]">Profile Settings</h2>
        <p className="text-sm text-neutral-600 mt-2">Profile UI coming soon...</p>
      </div>
    </div>
  );
}
