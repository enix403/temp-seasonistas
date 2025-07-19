"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaTelegramPlane, FaCloudUploadAlt } from "react-icons/fa";

const ApplyJobModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    similarity: "",
    experience: "",
    skills: "",
    availability: "",
    language: "",
    message: ""
  });
  const [agree, setAgree] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { similarity, experience, skills, availability, language, message } =
      formData;
    if (
      similarity &&
      experience &&
      skills &&
      availability &&
      language &&
      message &&
      agree
    ) {
      setShowConfirm(true);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleConfirmSubmit = () => {
    setShowConfirm(false);
    onClose();
    console.log("✅ Application submitted:", formData);
  };

  const selectField = (field: string, label: string, options: string[]) => (
    <div className='relative'>
      <select
        className='h-[40px] w-full appearance-none rounded-full border px-4 pr-10 text-sm text-gray-700 sm:h-[52px]'
        value={formData[field as keyof typeof formData]}
        onChange={e => handleChange(field, e.target.value)}
        defaultValue=''
      >
        <option disabled hidden value=''>
          {label}
        </option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500' />
    </div>
  );

  return (
    <>
      {/* Main Modal */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        className='fixed inset-0 z-50 m-4 flex items-center justify-center'
      >
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm'
          aria-hidden='true'
        />
        <Dialog.Panel className='relative z-10 max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white py-6'>
          <button
            onClick={onClose}
            className='absolute top-3 right-4 text-xl text-gray-500'
          >
            <IoClose />
          </button>

          <div className='space-y-4 px-4 sm:px-6'>
            <Dialog.Title className='text-lg font-semibold'>
              Apply for this Position
            </Dialog.Title>

            <form onSubmit={handleSubmit} className='space-y-4'>
              {selectField("similarity", "Previous Role Similarity", [
                "Highly Similar",
                "Somewhat Similar",
                "Not Similar"
              ])}

              {selectField("experience", "Years of Experience", [
                "1-2 Years",
                "3-5 Years",
                "5+ Years"
              ])}

              {selectField("skills", "Skills Matching", [
                "Excellent Match",
                "Good Match",
                "Partial Match"
              ])}

              {selectField("availability", "Availability", [
                "Immediately",
                "Within 1 Month",
                "After 1 Month"
              ])}

              {selectField("language", "Language Ability", [
                "Fluent",
                "Intermediate",
                "Basic"
              ])}

              <textarea
                rows={4}
                placeholder='Write Here Message'
                className='w-full resize-none rounded-xl border p-2 text-sm sm:p-3'
                value={formData.message}
                onChange={e => handleChange("message", e.target.value)}
              />

              <div className='flex w-full cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-sm text-gray-600 sm:py-3'>
                <FaCloudUploadAlt />
                Upload CV
              </div>

              <div className='flex items-start gap-2 text-sm'>
                <input
                  type='checkbox'
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className='mt-1'
                />
                <span>
                  I confirm that all the information provided is accurate and up
                  to date.
                </span>
              </div>

              <div className='flex justify-end gap-4 sm:pt-2'>
                <button
                  type='button'
                  onClick={onClose}
                  className='rounded-full border px-4 py-2 text-sm text-gray-700'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='rounded-full bg-[#4A9696] px-4 py-2 text-sm text-white'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        className='fixed inset-0 z-50 flex items-center justify-center'
      >
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm' />

        <Dialog.Panel className='relative w-full max-w-sm space-y-5 rounded-xl bg-white p-6 text-center'>
          {/* Close Icon */}
          <button
            onClick={() => setShowConfirm(false)}
            className='absolute top-3 right-4 text-xl text-gray-500'
          >
            <IoClose />
          </button>

          {/* Icon */}
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4A9696]/10'>
            <FaTelegramPlane className='text-2xl text-[#4A9696]' />
          </div>

          <h2 className='text-md font-semibold'>
            Are you sure you want to apply?
          </h2>
          <p className='text-sm text-gray-500'>
            Once submitted, your application and CV will be sent to the
            employer. You won’t be able to edit your answers after submission.
          </p>

          <div className='flex justify-between gap-4 pt-2'>
            <button
              onClick={() => setShowConfirm(false)}
              className='flex-1 rounded-full border border-gray-300 py-2 text-sm'
            >
              Back
            </button>
            <button
              onClick={handleConfirmSubmit}
              className='flex-1 rounded-full bg-[#4A9696] py-2 text-sm text-white'
            >
              Yes Sure
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default ApplyJobModal;
