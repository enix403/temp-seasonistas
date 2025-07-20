"use client";

import { IoClose } from "react-icons/io5";

interface Props {
  onClose: () => void;
}

const EditEmployeeModal = ({ onClose }: Props) => {
  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <div className='relative w-[90%] max-w-lg rounded-2xl bg-white p-6'>
        <button onClick={onClose} className='absolute top-4 right-4 text-black'>
          <IoClose size={20} />
        </button>
        <h2 className='mb-6 text-lg font-semibold text-[#1C252E]'>
          Edit Basic Information
        </h2>

        <form className='space-y-4'>
          <input
            type='email'
            placeholder='Email Address'
            className='w-full rounded-full border px-4 py-3 text-sm'
          />
          <select className='w-full rounded-full border px-4 py-3 text-sm'>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type='tel'
            placeholder='Phone Number'
            className='w-full rounded-full border px-4 py-3 text-sm'
          />
          <input
            type='text'
            placeholder='Location'
            className='w-full rounded-full border px-4 py-3 text-sm'
          />
          <input
            type='tel'
            placeholder='Phone Number'
            className='w-full rounded-full border px-4 py-3 text-sm'
          />
          <input
            type='url'
            placeholder='Website'
            className='w-full rounded-full border px-4 py-3 text-sm'
          />

          <div className='mt-4 flex justify-center gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='rounded-full border px-6 py-2 font-medium text-black'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-full bg-[#559093] px-6 py-2 font-medium text-white'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
