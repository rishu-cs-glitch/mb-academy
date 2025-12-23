// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { User, Home, Book, Settings, BarChart, LogOut, Users } from "lucide-react";
// import { useState } from "react";
// import WEB_IMAGES from "@/public";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const menu = [
//     { icon: <Home size={20} />, path: "/dashboard" },
//     { icon: <User size={20} />, path: "/profile" },
//     { icon: <Book size={20} />, path: "/courses" },
//     { icon: <Users size={20} />, path: "/community" },
//     { icon: <BarChart size={20} />, path: "/progress" },
//     { icon: <Settings size={20} />, path: "/settings" },
//   ];

//   const handleLogout = () => {
//     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     router.replace("/welcome");
//   };

//   return (
//     <div className="h-screen flex overflow-hidden bg-[#F8F7F2] relative">
//       {/* ===== MOBILE EDGE HOVER ZONE ===== */}
//       <div
//         className="fixed left-0 top-0 h-screen w-2 z-40 md:hidden"
//         onMouseEnter={() => setOpen(true)}
//         onClick={() => setOpen(true)} // mobile tap support
//       />

//       {/* ===== OVERLAY (MOBILE ONLY) ===== */}
//       {open && (
//         <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setOpen(false)} />
//       )}

//       {/* ===== SIDEBAR ===== */}
//       <aside
//         className={`
//           h-screen w-16 bg-[#F8F7F2]
//           flex flex-col  py-4
//           transition-transform duration-300 ease-in-out
//           fixed md:static z-40
//           ${open ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//         onMouseLeave={() => setOpen(false)}
//       >
//         {/* LOGO */}
//         <div className="h-12 flex items-center justify-center mb-6">
//           <img src={WEB_IMAGES.MB_LOGO} alt="Logo" className="h-8 w-8 object-contain" />
//         </div>

//         {/* MENU */}
//         <div className="flex flex-col items-center  gap-6 w-full flex-1">
//           {menu.map((item) => (
//             <button
//               key={item.path}
//               onClick={() => {
//                 router.push(item.path);
//                 setOpen(false);
//               }}
//               className={`p-3 rounded-lg transition-all ${
//                 pathname === item.path ? "bg-black text-white" : "text-black hover:bg-gray-200"
//               }`}
//             >
//               {item.icon}
//             </button>
//           ))}
//         </div>

//         {/* LOGOUT */}
//         <button
//           onClick={handleLogout}
//           className="mb-4 p-3 rounded-lg hover:bg-red-100 text-red-600 transition"
//         >
//           <LogOut size={20} />
//         </button>
//       </aside>

//       {/* ===== MAIN CONTENT ===== */}
//       <main className="flex-1 overflow-y-auto p-2">{children}</main>
//     </div>
//   );
// }

"use client";

import { usePathname, useRouter } from "next/navigation";
import { User, Home, Book, Settings, BarChart, LogOut, Users, Menu } from "lucide-react";
import { useState } from "react";
import WEB_IMAGES from "@/public";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
      {/* ===== MOBILE HAMBURGER ===== */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow"
      >
        <Menu size={22} />
      </button>

      {/* ===== OVERLAY (MOBILE) ===== */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/30 z-40 md:hidden" />
      )}

      {/* ===== SIDEBAR ===== */}
      <aside
        className={`
          fixed md:static z-50
          h-screen w-16 bg-[#F8F7F2]
          flex flex-col items-center py-4
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* LOGO (DESKTOP ONLY) */}
        <div className="h-12 flex items-center justify-center mb-6">
          <img src={WEB_IMAGES.MB_LOGO} alt="Logo" className="h-8 w-8 object-contain md:block" />
        </div>

        {/* MENU */}
        <div className="flex flex-col items-center  gap-6 w-full flex-1">
          {menu.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                router.push(item.path);
                setOpen(false);
              }}
              className={`p-3 rounded-lg transition-all ${
                pathname === item.path ? "bg-black text-white" : "text-black hover:bg-gray-200"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mb-4 p-3 rounded-lg hover:bg-red-100 text-red-600 transition"
        >
          <LogOut size={20} />
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 overflow-y-auto p-2 pt-16 md:pt-2 md:ml-0">{children}</main>
    </div>
  );
}

// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { User, Home, Book, Settings, BarChart, LogOut, Users } from "lucide-react";
// import WEB_IMAGES from "@/public";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const pathname = usePathname();

//   const menu = [
//     { icon: <Home size={20} />, path: "/dashboard" },
//     { icon: <User size={20} />, path: "/profile" },
//     { icon: <Book size={20} />, path: "/courses" },
//     { icon: <Users size={20} />, path: "/community" },
//     { icon: <BarChart size={20} />, path: "/progress" },
//     { icon: <Settings size={20} />, path: "/settings" },
//   ];

//   const handleLogout = () => {
//     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     router.replace("/welcome");
//   };

//   return (
//     <div className="h-screen flex overflow-hidden bg-[#F8F7F2]">
//       {/* SIDEBAR (NO SCROLL EVER) */}
//       <aside className="w-16 h-screen  bg-[#F8F7F2] flex flex-col items-center py-4">
//         {/* LOGO */}
//         <div className="h-12 flex items-center justify-center mb-6">
//           <img src={WEB_IMAGES.MB_LOGO} alt="Logo" className="h-8 w-8 object-contain" />
//         </div>

//         {/* MENU */}
//         <div className="flex flex-col items-center gap-8 w-full flex-1">
//           {menu.map((item) => (
//             <button
//               key={item.path}
//               onClick={() => {
//                 console.log("Navigating to:", item.path);
//                 router.push(item.path);
//               }}
//               className={`p-3 rounded-lg transition ${
//                 pathname === item.path ? "bg-black text-white" : "text-black hover:bg-gray-200"
//               }`}
//             >
//               {item.icon}
//             </button>
//           ))}
//         </div>

//         {/* LOGOUT – FIXED BOTTOM */}
//         <button
//           onClick={handleLogout}
//           className="mt-auto mb-4 p-3 rounded-lg hover:bg-red-100 text-red-600 transition"
//         >
//           <LogOut size={20} />
//         </button>
//       </aside>

//       {/* MAIN CONTENT (ONLY THIS SCROLLS) */}
//       <main className="flex-1 overflow-y-auto p-2">{children}</main>
//     </div>
//   );
// }
