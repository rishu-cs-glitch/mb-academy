"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Pencil } from "lucide-react";
import WEB_IMAGES from "@/public";
import { useState } from "react";
import EditProfileDialog from "@/components/profile/EditProfileDialog";

const badges = [
  { label: "Brainiac", icon: "🧠" },
  { label: "Creative Thinker", icon: "💡" },
  { label: "Fast Starter", icon: "⚡" },
  { label: "Top Scorer", icon: "🏆" },
  { label: "Quiz Champion", icon: "🎯" },
  { label: "Strategic Planner", icon: "♟️" },
];

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <h1 className="text-xl sm:text-2xl font-semibold text-[#0F1828] flex items-center gap-2">
        <Settings size={22} />
        Settings
      </h1>

      <div className="mt-6 bg-white rounded-xl shadow-md p-4 sm:p-6">
        {/* ================= TABS ================= */}
        <Tabs defaultValue="profile">
          <TabsList className="flex gap-6 overflow-x-auto whitespace-nowrap">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* ================= PROFILE CONTENT ================= */}
          <div className="mt-6">
            {/* ---------- User Header ---------- */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex gap-4 items-start">
                <img
                  src={WEB_IMAGES.DUMMMY_USER}
                  width={50}
                  height={50}
                  alt="Profile"
                  // className="rounded-full"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">John Smith</h2>
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur. Lacinia egestas.
                  </p>
                </div>
              </div>

              <Pencil
                onClick={() => setOpen(true)}
                className="cursor-pointer text-neutral-600 hover:text-black"
              />
            </div>

            {/* ---------- Profile Info ---------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 p-4 bg-[#F7F7FA] rounded-lg">
              <Info label="Email" value="john.smith@company.com" />
              <Info label="Phone" value="+1 (555) 123-4567" />
              <Info label="Time Zone" value="GMT +5:00" />
              <Info label="Joining Date" value="12 Oct 2024" />
            </div>

            {/* ================= BADGES ================= */}
            <div className="mt-8 ">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Badges</h2>
                <button className="text-sm text-[#0F1828] underline">View all</button>
              </div>

              <div className="border rounded-xl p-4 ">
                <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-6">
                  {badges.map((badge) => (
                    <div
                      key={badge.label}
                      className="min-w-[140px] h-[120px] bg-[#F7F7FA] rounded-xl border shadow-sm flex flex-col items-center justify-center text-center gap-3 hover:scale-95"
                    >
                      <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl">
                        {badge.icon}
                      </div>
                      <p className="text-sm font-medium">{badge.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= RANK & PROGRESS ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 ">
              {/* Rank */}
              <div className="p-6 bg-white rounded-xl shadow ">
                <h2 className="text-lg font-semibold ">Rank</h2>

                <p className="mt-4 font-semibold">#15 This Week</p>
                <p className="text-xs text-green-600">+2 since last week</p>

                <p className="mt-4 text-sm">
                  Points Earned
                  <span className="block text-lg font-bold">19,350</span>
                </p>

                <p className="mt-3 text-sm">7 Courses Completed</p>
                <p className="text-sm">
                  Avg Quiz Score: <strong>86%</strong>
                </p>
              </div>

              {/* Progress */}
              <div className="p-6 bg-white rounded-xl shadow ">
                <h2 className="text-lg font-semibold mb-4">Course Progress</h2>

                <div className="w-36 h-36 mx-auto rounded-full border-[10px] border-gray-300 relative ">
                  <div className="absolute inset-0 rounded-full border-[10px] border-[#0F1828] border-l-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                    12
                  </div>
                </div>

                <p className="text-center mt-4 text-sm">Enrolled • 7 Completed</p>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
      <EditProfileDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

/* ================= INFO COMPONENT ================= */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="font-medium text-sm">{value}</p>
    </div>
  );
}
