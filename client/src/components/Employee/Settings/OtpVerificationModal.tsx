"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaKey } from "react-icons/fa";

type Props = {
  onClose: () => void;
  onSubmit: (code: string) => void;
};

const OtpVerificationModal = ({ onClose, onSubmit }: Props) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length !== 4) return alert("Enter full 4-digit code");
    onSubmit(code);
  };

  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/30 px-4'>
      <div className='relative min-h-[350px] w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-lg text-gray-500'
        >
          <IoClose />
        </button>

        {/* Key Icon */}
        <div className='mt-2 mb-4 flex justify-center'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#559093] text-xl text-white'>
            <FaKey />
          </div>
        </div>

        {/* Title */}
        <h2 className='mb-1 text-lg font-semibold'>
          Authenticate Your Account
        </h2>
        <p className='mb-5 text-sm text-gray-500'>
          Protecting your tickets is our top priority. Please confirm your
          account by entering the authorization code sent to --2282.
        </p>

        {/* OTP Fields */}
        <div className='mb-4 flex justify-center gap-4'>
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type='text'
              inputMode='numeric'
              maxLength={1}
              className='h-12 w-12 rounded-full border text-center text-lg font-semibold text-gray-700 focus:outline-none'
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
            />
          ))}
        </div>

        {/* Reset Link */}
        <p className='mb-5 cursor-pointer text-xs text-gray-500 hover:underline'>
          Reset OTP?
        </p>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className='w-full rounded-full bg-[#559093] py-2 text-sm font-medium text-white'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpVerificationModal;
