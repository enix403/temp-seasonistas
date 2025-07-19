"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Sidebar from "~/components/Employee/Sidebar";
import Topbar from "~/components/Employee/Topbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export default function EmployeeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 640) {
      setSidebarOpen(false);
    }
  }, [pathname]);

  return (
    <div
      className={`h-screen w-screen overflow-hidden sm:flex ${poppins.className}`}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className='flex h-full flex-1 flex-col overflow-y-auto bg-[#F7F7F7]'>
        <div className='top-0 z-40 bg-[#F7F7F7] px-5 sm:sticky'>
          <Topbar />
        </div>
        <div className='mb-[90px] px-5 sm:mb-0'>{children}</div>
      </main>
    </div>
  );
}
