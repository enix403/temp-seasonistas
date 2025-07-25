import Image from "next/image";
import { IoNotifications } from "react-icons/io5";
import userImg from "@/assets/employer/employerImg.png";
import flag from "@/assets/employer/country.png";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Topbar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "";
  const pageName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  let title = "";
  if (pageName === "Home") {
    title = "Jobs Overview";
  } else if (pageName === "Dashboards") {
    title = "Dashboard";
  } else if (pageName === "Community") {
    title = "Connect & Grow";
  } else if (pageName === "Settings") {
    title = "Settings";
  } else if (pageName === "Profile") {
    title = "Profile Overview";
  }

  const handleProfile = () => {
    // router.push('/admin/profile')
  };

  return (
    <div className='flex w-full flex-col-reverse items-start justify-between gap-4 px-6 pt-3 pb-6 sm:flex-row sm:items-center'>
      {/* Title */}
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
        <div
          className='flex cursor-pointer items-center gap-2'
          onClick={handleProfile}
        >
          <Image
            src={userImg}
            alt='User'
            width={32}
            height={32}
            className='rounded-full'
          />
          <div className='flex flex-col leading-tight'>
            <span className='text-sm font-medium text-gray-800'>John Kaon</span>
            <span className='text-xs text-gray-400'>Artist</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
