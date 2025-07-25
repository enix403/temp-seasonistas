"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { sidebarRoutes } from "./routes";
import logo from "@/assets/employer/logo.png";

const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 640) {
      setSidebarOpen(false);
    }
  }, [pathname]);

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const isExactPathMatch = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Header */}
      <div className='flex items-center justify-between bg-[#022127] p-4 text-white sm:hidden'>
        <Image src={logo} alt='logo' className='h-auto w-[50%]' />
        <button onClick={() => setSidebarOpen(true)}>
          <HiMenu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[250px] transform bg-[#022127] text-white transition-transform duration-300 sm:static sm:w-[250px] lg:w-[290px] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col justify-between overflow-y-auto px-6 py-6 sm:!translate-x-0`}
      >
        {/* Mobile Close Button */}
        <div className='flex justify-end sm:hidden'>
          <button onClick={() => setSidebarOpen(false)}>
            <RxCross2 size={28} className='mb-2 text-white' />
          </button>
        </div>

        {/* Logo & Navigation */}
        <div className='flex flex-col gap-6'>
          <Image src={logo} alt='seasonistas admin' className='h-auto w-full' />
          <h2 className='px-3 text-[20px] font-[500]'>Overview</h2>

          <div>
            {sidebarRoutes.map((route, index) => {
              const Icon = route.icon;

              const isSubRouteActive = route.subRoutes?.some(sub => {
                if (typeof sub === "string") {
                  const fullPath = `${route.href.substring(0, route.href.lastIndexOf("/") + 1)}${slugify(sub)}`;
                  return isExactPathMatch(fullPath);
                } else {
                  return sub.children.some(child => {
                    const fullPath = `${route.href.substring(0, route.href.lastIndexOf("/") + 1)}${slugify(child)}`;
                    return isExactPathMatch(fullPath);
                  });
                }
              });

              // Identify current main segment (e.g., "employers", "employees", etc.)
              const baseSegment = pathname.split("/")[3] || "";

              // Fallback map for deep-link recognition
              const fallbackMap: Record<string, string> = {
                employers: "User & Abuse",
                employees: "User & Abuse",
                abuse: "User & Abuse",
                static: "Privacy & CMS",
                faq: "Privacy & CMS",
                transactions: "Payments & Roles",
                roles: "Payments & Roles",
                jobs: "Jobs & Settings",
                settings: "Settings"
              };

              const fallbackMatch =
                fallbackMap[baseSegment]?.toLowerCase() ===
                route.title.toLowerCase();
              const isMenuActive = isSubRouteActive || fallbackMatch;
              const isMenuOpen = openMenus[route.title] === true;

              return (
                <div key={index} className='mb-3'>
                  {/* Main Route Button */}
                  <button
                    onClick={() => {
                      setOpenMenus(prev => ({
                        ...prev,
                        [route.title]: !prev[route.title]
                      }));
                    }}
                    className={`flex w-full items-center justify-between rounded-[44px] px-6 py-4 font-semibold ${
                      isMenuActive ? "bg-[#559093]" : "bg-[#FFFFFF0A]"
                    } hover:bg-[#559093]`}
                  >
                    <div className='flex items-center gap-3'>
                      <Icon size={20} />
                      <span className='text-[16px] font-[400] whitespace-nowrap'>
                        {route.title}
                      </span>
                    </div>
                    {isMenuOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </button>

                  {/* Subroutes */}
                  {isMenuOpen && (
                    <div className='mt-2 ml-4 border-l border-[#ffffff30] pl-3'>
                      {route.subRoutes?.map((sub, subIdx) => {
                        if (typeof sub === "string") {
                          const slug = slugify(sub);
                          const fullPath = `${route.href.substring(0, route.href.lastIndexOf("/") + 1)}${slug}`;

                          return (
                            <Link
                              key={subIdx}
                              href={fullPath}
                              className={`mb-1 ml-4 block rounded-[12px] px-4 py-2 text-sm font-normal hover:bg-[#FFFFFF0A] ${
                                isExactPathMatch(fullPath) ? "bg-[#2B5558]" : ""
                              }`}
                            >
                              {sub}
                            </Link>
                          );
                        } else {
                          const isChildActive = sub.children.some(child =>
                            isExactPathMatch(
                              `${route.href.substring(0, route.href.lastIndexOf("/") + 1)}${slugify(child)}`
                            )
                          );

                          return (
                            <div key={sub.title} className='mb-2 ml-4'>
                              <button
                                onClick={() => toggleMenu(sub.title)}
                                className={`flex w-full items-center justify-between rounded-[12px] px-4 py-2 text-left hover:bg-[#FFFFFF0A] ${
                                  openMenus[sub.title] || isChildActive
                                    ? "bg-[#559093]"
                                    : ""
                                }`}
                              >
                                <span className='text-sm'>{sub.title}</span>
                                {openMenus[sub.title] ? (
                                  <IoIosArrowDown />
                                ) : (
                                  <IoIosArrowForward />
                                )}
                              </button>

                              {openMenus[sub.title] && (
                                <div className='ml-4 border-l border-[#ffffff30] pt-2 pl-3'>
                                  {sub.children.map((child, idx) => {
                                    const slug = slugify(child);
                                    const fullPath = `${route.href.substring(0, route.href.lastIndexOf("/") + 1)}${slug}`;

                                    return (
                                      <Link
                                        key={idx}
                                        href={fullPath}
                                        className={`mb-1 block rounded-[12px] px-3 py-2 text-sm hover:bg-[#FFFFFF0A] ${
                                          isExactPathMatch(fullPath)
                                            ? "bg-[#2B5558]"
                                            : ""
                                        }`}
                                      >
                                        {child}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Settings + Logout */}
        <div className='mt-6 flex flex-col gap-3'>
          <Link
            href='/admin/settings'
            className={`flex w-full items-center justify-between gap-3 rounded-[44px] px-6 py-4 transition-all ${
              pathname === "/admin/settings"
                ? "bg-[#2B5558] text-white"
                : "bg-[#FFFFFF0A] hover:bg-[#2B5558]"
            }`}
          >
            <div className='flex items-center gap-3'>
              <IoSettingsOutline size={20} />
              <p className='text-[16px] font-[400]'>Settings</p>
            </div>
            <IoIosArrowForward className='text-sm' />
          </Link>

          <button className='flex w-full items-center gap-3 rounded-full border border-[#ffffffa1] px-6 py-4 text-white hover:bg-[#2B5558]'>
            <CiLogout size={20} />
            <p className='text-[16px] font-[400]'>Logout</p>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
