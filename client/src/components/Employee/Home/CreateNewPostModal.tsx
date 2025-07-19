"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateNewPostModal = ({ isOpen, onClose }: Props) => {
  const [field, setField] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [schedule, setSchedule] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [seniority, setSeniority] = useState("");
  const [benefits, setBenefits] = useState("");
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (
      !field ||
      !salary ||
      !category ||
      !specialization ||
      !schedule ||
      !location ||
      !seniority ||
      !benefits
    ) {
      setError("Please fill out all required fields before creating the Job");
      return;
    }
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/60 px-4'>
      <div className='relative w-full max-w-xl rounded-[24px] bg-white p-6'>
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 text-gray-600'
          onClick={onClose}
        >
          <FiX size={22} />
        </button>

        <h2 className='mb-6 text-[18px] font-semibold'>
          Create Your Ideal Job
        </h2>

        <div className='space-y-4 text-sm font-normal'>
          <input
            className='styled-input'
            placeholder='Type Field'
            value={field}
            onChange={e => setField(e.target.value)}
          />
          <input
            className='styled-input'
            placeholder='Type Salary Range'
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />

          {/* Category Dropdown */}
          <div className='relative'>
            <select
              className='styled-input appearance-none pr-10'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value='' disabled hidden>
                Job Category
              </option>
              <option value='Frontend'>Frontend</option>
              <option value='Backend'>Backend</option>
              <option value='UI/UX'>UI/UX</option>
            </select>
            <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-base text-gray-500' />
          </div>

          <input
            className='styled-input'
            placeholder='Specialization'
            value={specialization}
            onChange={e => setSpecialization(e.target.value)}
          />

          {/* Work Schedule with DatePicker */}
          <div className='styled-input relative !w-[100%]'>
            <DatePicker
              selected={schedule}
              onChange={(date: Date | null) => setSchedule(date)}
              placeholderText='Work Schedule'
              className='mt-4 !w-[100%] pr-10'
              dateFormat='yyyy-MM-dd'
            />
            <SlCalender className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-base text-gray-500' />
          </div>

          <input
            className='styled-input'
            placeholder='Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />

          {/* Seniority Level */}
          <div className='relative'>
            <select
              className='styled-input appearance-none pr-10'
              value={seniority}
              onChange={e => setSeniority(e.target.value)}
            >
              <option value='' disabled hidden>
                Seniority Level
              </option>
              <option value='Junior'>Junior</option>
              <option value='Mid'>Mid</option>
              <option value='Senior'>Senior</option>
            </select>
            <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-base text-gray-500' />
          </div>

          {/* Benefits */}
          <div className='relative'>
            <select
              className='styled-input appearance-none pr-10'
              value={benefits}
              onChange={e => setBenefits(e.target.value)}
            >
              <option value='' disabled hidden>
                Desired Benefits
              </option>
              <option value='Remote'>Remote Work</option>
              <option value='Healthcare'>Healthcare</option>
              <option value='Stock Options'>Stock Options</option>
            </select>
            <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-base text-gray-500' />
          </div>

          {error && (
            <p className='-mb-3 flex items-center gap-1 pl-1 text-[13px] text-[#E53535]'>
              <span className='inline-block h-[6px] w-[6px] rounded-full bg-[#E53535]'></span>
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className='mt-8 flex items-center justify-between'>
          <button
            onClick={onClose}
            className='rounded-full border border-[#E0E0E0] bg-white px-6 py-2 text-sm font-medium text-black'
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className='rounded-full bg-[#2C8484] px-6 py-2 text-sm font-medium text-white'
          >
            Create
          </button>
        </div>
      </div>

      <style jsx>{`
        .styled-input {
          width: 100%;
          height: 54px;
          padding: 0 16px;
          border-radius: 9999px;
          border: 1px solid #e0e0e0;
          font-size: 14px;
          color: #444;
          background-color: #fff;
        }
        .styled-input::placeholder {
          color: #a0a0a0;
        }
      `}</style>
    </div>
  );
};

export default CreateNewPostModal;
