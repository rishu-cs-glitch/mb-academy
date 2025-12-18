"use client";

import { usePathname, useRouter } from "next/navigation";
import { User, Home, Book, Settings, BarChart, LogOut, Users } from "lucide-react";
import WEB_IMAGES from "@/public";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { icon: <Home size={20} />, path: "/dashboard" },
    { icon: <User size={20} />, path: "/profile" },
    { icon: <Book size={20} />, path: "/courses" },
    { icon: <Users size={20} />, path: "/community" },
    { icon: <BarChart size={20} />, path: "/progress" },
    { icon: <Settings size={20} />, path: "/settings" },
  ];

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.replace("/welcome");
  };

  return (
    <div className="h-screen flex overflow-hidden bg-[#F8F7F2]">
      {/* SIDEBAR (NO SCROLL EVER) */}
      <aside className="w-16 h-screen bg-[#F8F7F2] flex flex-col items-center py-4">
        {/* LOGO */}
        <div className="h-12 flex items-center justify-center mb-6">
          <img src={WEB_IMAGES.MB_LOGO} alt="Logo" className="h-8 w-8 object-contain" />
        </div>

        {/* MENU */}
        <div className="flex flex-col items-center gap-6 flex-1">
          {menu.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                console.log("Navigating to:", item.path);
                router.push(item.path);
              }}
              className={`p-3 rounded-lg transition ${
                pathname === item.path ? "bg-black text-white" : "text-black hover:bg-gray-200"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* LOGOUT – FIXED BOTTOM */}
        <button
          onClick={handleLogout}
          className="mt-auto mb-4 p-3 rounded-lg hover:bg-red-100 text-red-600 transition"
        >
          <LogOut size={20} />
        </button>
      </aside>

      {/* MAIN CONTENT (ONLY THIS SCROLLS) */}
      <main className="flex-1 overflow-y-auto p-2">{children}</main>
    </div>
  );
}
