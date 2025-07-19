"use client";

import { RiSendPlaneFill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const ConfirmScheduleModal = ({
  onClose,
  onConfirm
}: {
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/30'>
      <div className='relative w-[500px] rounded-2xl bg-white p-6 text-center'>
        {/* Close (X) Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-xl text-[#9E9E9E]'
        >
          <IoIosClose size={24} />
        </button>

        {/* Icon */}
        <div className='mb-4 flex justify-center'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#4F9A98] shadow'>
            <RiSendPlaneFill className='text-xl text-white' />
          </div>
        </div>

        {/* Heading */}
        <h2 className='mb-1 text-[16px] font-semibold text-[#1C1C1E]'>
          Confirm Schedule?
        </h2>
        <p className='mb-5 text-sm text-[#767676]'>
          Are you sure you want to confirm this interview appointment?
        </p>

        {/* Buttons */}
        <div className='flex justify-end gap-3 pt-2'>
          <button
            onClick={onClose}
            className='min-w-[100px] rounded-full border border-[#E0E0E0] px-6 py-2 text-sm font-medium text-[#1C1C1E]'
          >
            Back
          </button>
          <button
            onClick={onConfirm}
            className='min-w-[100px] rounded-full bg-[#4F9A98] px-6 py-2 text-sm font-medium text-white'
          >
            Yes Sure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmScheduleModal;
