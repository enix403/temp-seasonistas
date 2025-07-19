"use client";

import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import companyLogo from "~/app/assets/Admin/companyLogo.png";
import { MdVerified } from "react-icons/md";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const VerifyModal = ({ onClose, onConfirm }: Props) => {
  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <div className='relative w-full max-w-lg rounded-2xl bg-white p-6'>
        {/* Close Icon */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-black'
        >
          <IoMdClose size={20} />
        </button>

        {/* Check Icon */}
        <div className='mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#E6F4F1]'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#3B978C] text-2xl font-bold text-white'>
            <MdVerified size={20} />
          </div>
        </div>

        {/* Title */}
        <h2 className='text-center text-xl font-semibold text-[#1C252E]'>
          Verify Company <span className='ml-1'>🎉</span>
        </h2>
        <p className='mt-2 text-center text-sm text-gray-500'>
          Are you sure you want to verify this business?
        </p>

        {/* Company Info */}
        <div className='mt-6 rounded-xl border p-4'>
          <div className='mb-3 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                src={companyLogo}
                alt='logo'
                className='h-6 w-6 rounded-md'
              />
              <span className='font-medium'>Linear company</span>
            </div>
            <span className='rounded-full border-[0.6px] border-[#D95057] bg-[#D950572B] px-3 py-1 text-xs text-[#D84C4C]'>
              Unverified
            </span>
          </div>
          <div className='space-y-2 text-sm text-[#1C252E]'>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Email</span>
              <span className='font-medium'>info@Linear company.com</span>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Website</span>
              <span className='font-medium'>www.Linear.com</span>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Industry</span>
              <span className='font-medium'>IT / Software</span>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Location</span>
              <span className='font-medium'>Punjab Pakistan</span>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between'>
              <span className='text-gray-500'>Company Size</span>
              <span className='font-medium'>2-10</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='mt-6 flex justify-end gap-4'>
          <button
            onClick={onClose}
            className='rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-[#1C252E]'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='rounded-full bg-[#3B978C] px-6 py-2 text-sm font-medium text-white hover:bg-[#357c71]'
          >
            Verify Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyModal;
