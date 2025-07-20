"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  onClose: () => void;
  onConfirm: (data: { old: string; new: string; confirm: string }) => void;
};

const SetPasswordModal = ({ onClose, onConfirm }: Props) => {
  const [old, setOld] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    if (!old || !newPass || !confirm) return alert("Fill all fields");
    if (newPass !== confirm) return alert("Passwords do not match");
    onConfirm({ old, new: newPass, confirm });
  };

  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/30 px-4'>
      <div className='relative min-h-[350px] w-full max-w-lg rounded-2xl bg-white p-8'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-lg text-gray-500'
        >
          <IoClose />
        </button>

        <h2 className='mb-6 text-[18px] font-semibold'>Set New Password</h2>

        {/* Old Password */}
        <div className='mb-2'>
          <input
            type='password'
            placeholder='Old Password'
            value={old}
            onChange={e => setOld(e.target.value)}
            className='w-full rounded-full border border-gray-200 px-4 py-2 text-sm'
          />
          <p className='mt-2 cursor-pointer text-right text-xs text-[#6B7280]'>
            Forgot Password?
          </p>
        </div>

        {/* New Password */}
        <div className='mb-4'>
          <p className='mb-1 text-sm font-medium text-black'>New Password</p>
          <input
            type='password'
            placeholder='New Password'
            value={newPass}
            onChange={e => setNewPass(e.target.value)}
            className='w-full rounded-full border border-gray-200 px-4 py-2 text-sm'
          />
        </div>

        {/* Confirm Password */}
        <div className='mb-8'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            className='w-full rounded-full border border-gray-200 px-4 py-2 text-sm'
          />
        </div>

        {/* Buttons */}
        <div className='flex justify-end gap-4'>
          <button
            onClick={onClose}
            className='rounded-full border border-gray-300 px-6 py-2 text-sm'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='rounded-full bg-[#559093] px-6 py-2 text-sm font-medium text-white'
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordModal;
