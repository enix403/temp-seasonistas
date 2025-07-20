"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  avatar: any;
  companyLogo: any;
  name: string;
  role: string;
  status: "Open to work" | "Open to Jobs";
  description: string;
  skills: string[];
  email: string;
  phone: string;
  location?: string;
  website?: string;
  isCompany?: boolean;
};

const UserCard = ({
  avatar,
  companyLogo,
  name,
  role,
  status,
  description,
  skills,
  email,
  phone,
  location,
  website,
  isCompany = false
}: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);
  const router = useRouter();

  return (
    <div className='relative flex min-h-[400px] flex-col justify-between rounded-xl border bg-white p-4 shadow-sm'>
      {/* Header */}
      <div className='relative mb-3 flex items-start justify-between'>
        <div
          className='flex cursor-pointer gap-3'
          onClick={() => router.push("/employee/view-profile/6")}
        >
          {isCompany ? (
            <div className='h-10 w-10 rounded-[4px]'>
              <Image
                src={companyLogo}
                alt={name}
                width={40}
                height={40}
                className='h-full w-full rounded-[4px] object-cover'
              />
            </div>
          ) : (
            <div className='h-10 w-10 rounded-full'>
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className='h-full w-full rounded-full object-cover'
              />
            </div>
          )}
          <div>
            <h3 className='text-sm font-[500]'>{name}</h3>
            <p className='text-[12px] font-[300] text-[#767676]'>{role}</p>
          </div>
        </div>
        <div className='relative' ref={dropdownRef}>
          <button
            className='rounded-full bg-[#F5F5F5] p-2'
            onClick={() => setDropdownOpen(prev => !prev)}
          >
            <BsThreeDotsVertical size={18} className='text-[#767676]' />
          </button>

          {dropdownOpen && (
            <div className='absolute right-0 z-10 mt-2 w-[150px] rounded-lg border bg-white text-sm shadow-md'>
              {location ? (
                <ul>
                  <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>
                    Following
                  </li>
                  <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>
                    Employees
                  </li>
                  <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>
                    Companies
                  </li>
                </ul>
              ) : (
                <ul>
                  <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>
                    Share Profile
                  </li>
                  <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>
                    Report
                  </li>
                  <li className='cursor-pointer px-4 py-2 hover:bg-gray-100'>
                    Unfollow
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      <hr className='mb-2 w-full' />
      <span
        className={`mb-3 max-w-[100px] rounded-full border-[0.6px] border-[#35CC6B] bg-[#35CC6B2B] px-3 py-2 text-center text-[10px] font-[400] whitespace-nowrap text-[#35CC6B]`}
      >
        {status}
      </span>
      {/* Description */}
      <p className='mb-2 text-[12px] leading-5 font-normal text-[#767676]'>
        {description}
      </p>

      {/* Skills or Jobs */}
      <p className='mb-1 text-[12px] font-medium'>
        {isCompany ? "Top Jobs" : "Top Skill"}
      </p>
      <div className='mb-3 flex flex-wrap gap-2'>
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className='rounded-[16px] border border-[#EBECF0] px-4 py-2 text-[10px] font-light'
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Contact Info */}
      <div className='mb-3 flex flex-col space-y-1 text-[13px]'>
        {!isCompany && (
          <div className='flex justify-between pt-2'>
            <div className='flex flex-col gap-[2px]'>
              <span className='text-[12px] font-medium'>Email:</span>
              <span className='text-[12px] font-light'>{email}</span>
              <button className='mt-4 w-full min-w-[130px] rounded-full border border-[#EBECF0] py-3 text-[10px] font-normal'>
                Message
              </button>
            </div>
            <div className='flex flex-col gap-[2px]'>
              <span className='text-[12px] font-medium'>Phone:</span>
              <span className='text-[12px] font-light'>{phone}</span>
              <button className='mt-4 w-full min-w-[130px] rounded-full bg-[#559093] py-3 text-[10px] font-semibold text-white'>
                {isCompany ? "Follow" : "Connect"}
              </button>
            </div>
          </div>
        )}

        {isCompany && (
          <div className='flex justify-between gap-2 pt-2'>
            <div className='flex flex-col justify-between gap-2'>
              <div className='flex flex-col gap-[2px]'>
                <span className='text-[12px] font-medium'>Email:</span>
                <span className='text-[12px] font-light'>{email}</span>
              </div>
              {location && (
                <div className='flex flex-col gap-[2px]'>
                  <span className='text-[12px] font-medium'>Location:</span>
                  <span className='text-[12px] font-light'>{location}</span>
                </div>
              )}
              <button className='mt-4 w-full min-w-[130px] rounded-full border border-[#EBECF0] py-3 text-[10px] font-normal'>
                Message
              </button>
            </div>
            <div className='flex flex-col justify-between gap-2'>
              <div className='flex flex-col gap-[2px]'>
                <span className='text-[12px] font-medium'>Phone:</span>
                <span className='text-[12px] font-light'>{phone}</span>
              </div>
              {website && (
                <div className='flex flex-col gap-[2px]'>
                  <span className='text-[12px] font-medium'>Website:</span>
                  <span className='text-[12px] font-light'>{website}</span>
                </div>
              )}
              <button className='mt-4 w-full min-w-[150px] rounded-full bg-[#559093] py-3 text-[10px] font-semibold text-white'>
                {isCompany ? "Follow" : "Connect"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
