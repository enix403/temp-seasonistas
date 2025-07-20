"use client";

import { Dialog } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const SuccessModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackToHome = () => {
    onClose();

    if (pathname.includes("/employee/help-center")) {
      router.push("/employee/home");
    } else if (pathname.includes("/employer/help-center")) {
      router.push("/employer/home");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center px-4'
    >
      <div className='fixed inset-0 bg-black/40' />
      <Dialog.Panel className='relative z-50 w-full max-w-sm space-y-5 rounded-2xl bg-white p-6 text-center shadow-xl'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-lg text-gray-500'
        >
          <IoClose />
        </button>

        {/* Check Icon */}
        <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4A9696]'>
          <FaCheck className='text-xl text-white' />
        </div>

        {/* Title & Message */}
        <h3 className='text-lg font-semibold'>Request Sent Successfully</h3>
        <p className='text-sm text-gray-600'>
          Thank you for your feedback. Our team will review your report and get
          back to you shortly.
        </p>

        {/* Button */}
        <button
          onClick={handleBackToHome}
          className='rounded-full bg-[#4A9696] px-6 py-2 text-sm font-medium text-white'
        >
          Back to Home
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SuccessModal;
