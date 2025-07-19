"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import dummyImg from "@/assets/employer/home/employerImg.png";

type JobCardProps = {
  id: number;
  company: string;
  logo: string;
  match: number;
  title: string;
  description: string;
  tags: string[];
  rate: string;
  time: string;
  applied: boolean;
  saved: boolean;
};

const AllJobsCard = ({
  id,
  company,
  logo,
  match,
  title,
  description,
  tags,
  rate,
  time,
  applied,
  saved: initialSaved
}: JobCardProps) => {
  const router = useRouter();
  const [saved, setSaved] = useState(initialSaved);

  const handleView = () => {
    router.push(`/employee/job-details/${id}`);
  };

  const matchColor =
    match > 75
      ? "text-[#35CC6B] bg-[#35CC6B2B] border-[#35CC6B] border-[0.6px]"
      : match < 30
        ? "text-[#D95057] bg-[#D950572B] border-[#D95057] border-[0.6px]"
        : "text-[#35CC6B] bg-[#35CC6B2B] border-[#35CC6B] border-[0.6px]";

  return (
    <div className='flex h-full w-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
      <div className='flex-grow space-y-4'>
        {/* Company & Time */}
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex cursor-pointer items-center gap-2'>
            <div className='h-12 w-12 overflow-hidden rounded-full'>
              <Image
                src={dummyImg}
                alt={company}
                width={80}
                height={80}
                className='h-full w-full object-cover'
              />
            </div>
            <span className='text-md font-normal text-black'>{company}</span>
          </div>
          <span className='text-[14px] font-[400] whitespace-nowrap text-[#767676]'>
            {time}
          </span>
        </div>

        {/* Match Score */}
        <div
          className={`inline-block rounded-full px-3 py-1 text-xs font-normal ${matchColor}`}
        >
          Match Score: {match}%
        </div>

        {/* Title */}
        <h3 className='text-[22px] font-semibold text-[#1C252E]'>{title}</h3>

        {/* Description */}
        <p className='text-[12px] leading-5 font-normal text-[#767676]'>
          {description}
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='rounded-full border border-gray-300 px-3 py-1 text-xs leading-tight font-medium whitespace-nowrap text-[#1C1C1E]'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className='mt-4 flex flex-wrap items-center justify-between pt-4'>
        <span className='text-[18px] font-normal text-[#11142D]'>{rate}</span>
        <div className='flex flex-wrap items-center gap-2'>
          {applied && (
            <button className='rounded-full border border-gray-300 bg-white px-[10px] py-2 text-xs text-gray-600'>
              View Application
            </button>
          )}

          {!applied && (
            <button
              onClick={() => setSaved(!saved)}
              className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#EEF4F4]'
            >
              {saved ? (
                <BsBookmarkFill className='text-[#559092]' />
              ) : (
                <BsBookmark className='text-[#559093]' />
              )}
            </button>
          )}

          <button
            onClick={handleView}
            className={`rounded-full px-[10px] py-2 text-xs ${
              applied ? "bg-[#C3D4D4]" : "bg-[#559092]"
            } text-white`}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllJobsCard;
