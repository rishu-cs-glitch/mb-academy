import Image from "next/image";
import "../globals.css";
import WEB_IMAGES from "@/public";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8F7F2] py-8 px-4 lg:px-32 ">
      <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-full w-full overflow-hidden  flex items-center   justify-center ml-16">
          <Image
            src={WEB_IMAGES.AUTH_BG}
            alt="Auth background"
            fill
            priority
            className="
        object-cover 
        lg:object-contain 
        transition-all duration-100 hover:scale-95"
          />
        </div>
        <div className="relative flex h-full min-h-screen   justify-center rounded-3xl bg-white shadow-2xl lg:min-h-full lg:p-12 sm:p-8 p-6 ">
          <div className="w-[80%] max-w-xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
