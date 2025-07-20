"use client";

import { IoClose } from "react-icons/io5";
import Image from "next/image";
import companyLogo from "@/assets/Admin/companyLogo.png";

interface FlagInfoModalProps {
  onClose: () => void;
  data: {
    title: string;
    reportedItem: string;
    reportedBy: string;
    flaggedOn: string;
    reason: string;
    reportCount: string;
  };
}

const FlagInfoModal = ({ onClose, data }: FlagInfoModalProps) => {
  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <div className='relative min-h-[450px] w-full max-w-2xl rounded-2xl bg-white p-8'>
        {/* Close button */}
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-black'
          onClick={onClose}
        >
          <IoClose size={28} />
        </button>

        {/* Title */}
        <h2 className='mb-6 text-xl font-semibold text-[#1C252E]'>
          Flag Information
        </h2>

        {/* Card */}
        <div className='space-y-6 rounded-xl border p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Image
                src={companyLogo}
                alt='logo'
                width={28}
                height={28}
                className='rounded-md'
              />
              <span className='text-base font-medium text-[#1C252E]'>
                {data.title}
              </span>
            </div>
            <span className='rounded-full border border-[#F3C44D] bg-[#FFF4DE] px-5 py-1.5 text-sm font-semibold text-[#F3C44D]'>
              Under Review
            </span>
          </div>

          <div className='space-y-4 text-base'>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Reported Item</span>
              <span className='font-medium text-[#1C252E]'>
                {data.reportedItem}
              </span>
            </div>
            <hr />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Reported By</span>
              <span className='font-medium text-[#1C252E]'>
                {data.reportedBy}
              </span>
            </div>
            <hr />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Flagged On</span>
              <span className='font-medium text-[#1C252E]'>
                {data.flaggedOn}
              </span>
            </div>
            <hr />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Reason</span>
              <span className='font-medium text-[#1C252E]'>{data.reason}</span>
            </div>
            <hr />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Report Count</span>
              <span className='font-medium text-[#1C252E]'>
                {data.reportCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagInfoModal;
