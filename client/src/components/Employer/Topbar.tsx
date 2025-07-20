import Image from "next/image";
import { IoNotifications } from "react-icons/io5";
import userImg from "@/assets/employer/employerImg.png";
import flag from "@/assets/employer/country.png";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import defaultProfileImage from "@/assets/real/blank-pfp.png";
import Link from "next/link";

type Props = {};

const Topbar = (props: Props) => {
  const { user } = useCurrentUser();

  const router = useRouter();
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "";
  const pageName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  let title = "";
  if (pageName === "Home") {
    title = "Overview";
  } else if (pageName === "Dashboards") {
    title = "Dashboard";
  } else if (pageName === "Community") {
    title = "Connect & Grow";
  } else if (pageName === "Settings") {
    title = "Settings";
  } else if (pageName === "Profile") {
    title = "Profile Overview";
  }

  return (
    <div className='flex w-full flex-col-reverse items-start justify-between gap-4 pt-3 pb-6 sm:flex-row sm:items-center sm:px-6'>
      {/* Left - Page Title */}
      <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        {title}
      </h1>

      {/* Right - Icons + Profile */}
      <div className='flex items-center gap-4 self-end sm:self-auto'>
        {/* Flag */}
        <Image
          src={flag}
          alt='Language'
          width={24}
          height={24}
          className='rounded-sm'
        />

        {/* Notification */}
        <div className='relative'>
          <IoNotifications className='text-[22px] text-gray-700' />
          <span className='absolute -top-1 -right-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white'>
            4
          </span>
        </div>

        {/* Profile */}
        <Link href='/employer/profile'>
          <div className='flex cursor-pointer items-center gap-2'>
            <div className='relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gray-200'>
              <img
                alt={user?.fullName || "Profile Picture"}
                src={user?.profilePictureUrl || defaultProfileImage.src}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col leading-tight'>
              <span className='text-sm font-medium text-gray-800'>
                {user?.fullName}
              </span>
              <span className='text-xs text-gray-400'>{user?.role}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
