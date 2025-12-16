"use client";

import { usePathname, useRouter } from "next/navigation";
import { User, Home, Book, Settings, BarChart, LogOut } from "lucide-react";
import WEB_IMAGES from "@/public";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { icon: <Home size={20} />, path: "/dashboard" },
    { icon: <User size={20} />, path: "/profile" },
    { icon: <Book size={20} />, path: "/courses" },
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
      <aside className="w-16 h-screen bg-white shadow-lg flex flex-col items-center py-4">
        {/* LOGO */}
        <div className="h-12 flex items-center justify-center mb-6">
          <img src={WEB_IMAGES.MB_LOGO} alt="Logo" className="h-8 w-8 object-contain" />
        </div>

        {/* MENU */}
        <div className="flex flex-col items-center gap-6 flex-1">
          {menu.map((item) => (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
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
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { Home, User, Book, BarChart, Settings, LogOut, Menu } from "lucide-react";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// import WEB_IMAGES from "@/public";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const menu = [
//     { label: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
//     { label: "Profile", icon: <User size={18} />, path: "/profile" },
//     { label: "Courses", icon: <Book size={18} />, path: "/courses" },
//     { label: "Progress", icon: <BarChart size={18} />, path: "/progress" },
//     { label: "Settings", icon: <Settings size={18} />, path: "/settings" },
//   ];

//   const handleLogout = () => {
//     document.cookie = "token=; Max-Age=0; path=/";
//     router.replace("/welcome");
//   };

//   /* ---------------- MOBILE SIDEBAR ---------------- */
//   const SidebarContent = () => (
//     <div className="flex flex-col h-full py-6">
//       {/* Logo */}
//       <div className="flex justify-center mb-8">
//         <img src={WEB_IMAGES.MB_LOGO} className="h-8 w-8 object-contain" alt="Logo" />
//       </div>

//       {/* Menu */}
//       <div className="flex flex-col gap-1 flex-1 px-3">
//         {menu.map((item) => {
//           const active = pathname === item.path;

//           return (
//             <button
//               key={item.path}
//               onClick={() => {
//                 router.push(item.path);
//                 setOpen(false);
//               }}
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
//                 ${active ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`}
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Logout */}
//       <button
//         onClick={handleLogout}
//         className="mx-3 mt-4 flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-100"
//       >
//         <LogOut size={18} />
//         <span>Logout</span>
//       </button>
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex bg-[#F8F7F2] overflow-hidden">
//       {/* ================= DESKTOP SIDEBAR ================= */}
//       <aside className="hidden md:flex w-16 bg-white shadow-lg flex-col items-center py-6 justify-between">
//         {/* Logo */}
//         <img src={WEB_IMAGES.MB_LOGO} className="h-8 w-8 object-contain" alt="Logo" />

//         {/* Icons */}
//         <div className="flex flex-col items-center gap-8">
//           {menu.map((item) => {
//             const active = pathname === item.path;

//             return (
//               <button
//                 key={item.path}
//                 onClick={() => router.push(item.path)}
//                 className={`p-3 rounded-lg transition
//                   ${active ? "bg-black text-white" : "hover:bg-gray-200 text-black"}`}
//               >
//                 {item.icon}
//               </button>
//             );
//           })}
//         </div>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="mb-6 p-3 rounded-lg text-red-600 hover:bg-red-100"
//         >
//           <LogOut size={20} />
//         </button>
//       </aside>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="flex-1 flex flex-col">
//         {/* -------- Mobile Header -------- */}
//         <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow">
//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild>
//               <button>
//                 <Menu size={24} />
//               </button>
//             </SheetTrigger>

//             <SheetContent side="left" className="p-0 w-64">
//               <SidebarContent />
//             </SheetContent>
//           </Sheet>

//           <img src={WEB_IMAGES.MB_LOGO} className="h-7 w-7 object-contain" alt="Logo" />
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
//       </div>
//     </div>
//   );
// }
