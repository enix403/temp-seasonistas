"use client";

import Image from "next/image";
import { GoPencil } from "react-icons/go";

import companyLogo from "@/assets/employer/community/companyLogo.png";

type Props = {
  company: string;
  role: string;
  date: string;
  time: string;
  location: string;
  index: number;
  isLast: boolean;
};

const InterviewRow = ({
  company,
  role,
  date,
  time,
  location,
  index,
  isLast
}: Props) => {
  return (
    <>
      <tr className='cursor-pointer hover:bg-[#F5F5F5]'>
        <td className='mt-2 flex items-center gap-3 px-6 py-4'>
          <div className='h-[32px] w-[32px] overflow-hidden rounded-[4px]'>
            <Image
              src={companyLogo}
              alt={company}
              width={40}
              height={40}
              className='h-full w-full object-cover'
            />
          </div>
          <p className='text-[12px] leading-[22px] font-[400]'>{company}</p>
        </td>
        <td className='px-6 py-4 text-[12px] leading-[22px] font-[400]'>
          {role}
        </td>
        <td className='px-6 py-4 text-[12px] leading-[22px] font-[400]'>
          {date}
        </td>
        <td className='px-6 py-4 text-[12px] leading-[22px] font-[400]'>
          {time}
        </td>
        <td className='px-6 py-4 text-[12px] leading-[22px] font-[400]'>
          {location}
        </td>
      </tr>

      {!isLast && (
        <tr>
          <td colSpan={6}>
            <hr className='border-gray-200' />
          </td>
        </tr>
      )}
    </>
  );
};

export default InterviewRow;
