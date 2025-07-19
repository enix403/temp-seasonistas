"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdDashboard, MdHomeFilled } from "react-icons/md";
import { IoPeopleCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsChatDots } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { ImPriceTags } from "react-icons/im";

import { RxCross2 } from "react-icons/rx";
import logo from "@/assets/employer/logo.png";
import LogoutModal from "../Employer/LogoutModal";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

const sidebarItems = [
  { name: "Home", href: "/employer/home", icon: MdHomeFilled },
  { name: "Dashboards", href: "/employer/dashboards", icon: MdDashboard },
  {
    name: "Community",
    href: "/employer/community",
    icon: IoPeopleCircleOutline
  },
  {
    name: "Calendar",
    href: "/employer/calender",
    icon: HiOutlineCalendarDateRange
  },
  { name: "Chat", href: "/employer/chat", icon: BsChatDots },
  { name: "Pricing", href: "/employer/pricing", icon: ImPriceTags }
];

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    router.push("/employer-login");
  };

  const handleHelpCenter = () => {
    router.push("/employer/help-center");
  };

  return (
    <>
      {/* Mobile Header with Toggle */}
      <div className='flex items-center justify-between bg-[#022127] p-4 text-white sm:hidden'>
        <Image src={logo} alt='logo' className='h-auto w-[50%]' />
        <button onClick={() => setSidebarOpen(true)}>
          <HiMenu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50",
          "sm:static sm:!translate-x-0",
          "h-full w-64 lg:w-72",
          "overflow-y-hidden px-8 py-6",
          "bg-[#022127] text-white",
          "transform transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close on mobile */}
        <div className='flex justify-end sm:hidden'>
          <button onClick={() => setSidebarOpen(false)}>
            <RxCross2 size={28} className='mb-2 text-white' />
          </button>
        </div>

        {/* Full height wrapper */}
        <div className='flex h-full flex-col'>
          {/* Logo and Nav */}
          <div className='mt-4 flex w-full flex-col items-center justify-center gap-6'>
            <Image
              src={logo}
              alt='seasonistas dashboard'
              className='h-full w-full'
            />
            <nav className='mt-3 w-full space-y-3'>
              <p className='mb-6 pl-2 text-[20px] font-[500]'>Over View</p>
              <div className='flex w-full flex-col gap-3'>
                {sidebarItems.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    className={`flex w-full items-center justify-between rounded-[44px] px-6 py-3 transition-all ${
                      pathname === href
                        ? "bg-[#559093] font-[600] text-white"
                        : "bg-[#FFFFFF0A] hover:bg-[#2B5558]"
                    }`}
                  >
                    <div className='flex items-center gap-3'>
                      <Icon size={20} />
                      <p className='text-[16px] font-[400]'>{name}</p>
                    </div>
                    <IoIosArrowForward className='text-sm' />
                  </Link>
                ))}
              </div>
              {/* Spacer after Chat */}
              <div className='h-4' />
            </nav>
          </div>

          {/* Footer Section */}
          <div className='mt-auto space-y-4 pt-8'>
            {/* Help Center */}
            <div className='rounded-xl border border-[#559093] bg-[#FFFFFF1A] p-4 text-white'>
              <IoIosPeople size={50} className='text-[#e9e4e4a3]' />
              <p className='text-[14px] font-[600] tracking-wider'>
                Help Center
              </p>
              <p className='text-[10px]'>
                <span className='font-[600]'>
                  Need technical or operational support?
                </span>
                <br />
                <span className='font-[400] text-gray-400'>
                  The Seasonistas team is here to help you!
                </span>
              </p>
              <button
                onClick={handleHelpCenter}
                className='mt-2 w-full rounded-full bg-[#559093] py-2 text-[10px] font-[400] tracking-wide text-white'
              >
                Help Center
              </button>
            </div>

            {/* Settings */}
            <Link
              href='/employer/settings'
              className={`flex w-full items-center justify-between gap-3 rounded-[44px] px-8 py-3 transition-all ${
                pathname === "/employee/settings"
                  ? "bg-[#559093] text-white"
                  : "bg-[#FFFFFF0A] hover:bg-[#2B5558]"
              }`}
            >
              <div className='flex items-center gap-3'>
                <IoSettingsOutline size={20} />
                <p className='text-[16px] font-[400]'>Settings</p>
              </div>
              <IoIosArrowForward className='text-sm' />
            </Link>

            {/* Logout */}
            <button
              onClick={() => setShowLogoutModal(true)}
              className='flex w-full items-center gap-3 rounded-full border border-[#ffffffa1] px-8 py-3 text-white hover:bg-[#2B5558]'
            >
              <CiLogout size={20} />
              <p className='text-[16px] font-[400]'>Logout</p>
            </button>
          </div>
        </div>
      </aside>

      {showLogoutModal && (
        <LogoutModal
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </>
  );
};

export default Sidebar;
