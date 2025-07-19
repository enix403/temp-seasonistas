"use client";

import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import { useState } from "react";
import FilterModal from "./FilterModal";

type Props = {
  search: string;
  location: string;
  experience: string;
  jobType: string;
  salaryType: string;
  onSearchChange: (val: string) => void;
  onLocationChange: (val: string) => void;
  onExperienceChange: (val: string) => void;
  onJobTypeChange: (val: string) => void;
  onSalaryTypeChange: (val: string) => void;
  onClearFilter: () => void;
};

const JobFilterBar = ({
  search,
  location,
  experience,
  jobType,
  salaryType,
  onSearchChange,
  onLocationChange,
  onExperienceChange,
  onJobTypeChange,
  onSalaryTypeChange
}: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  const handleFilterChange = (section: string, value: string) => {
    setSelectedFilters(prev => ({ ...prev, [section]: value }));

    if (section === "Experience Level") onExperienceChange(value.split(" ")[0]);
    if (section === "Job Type") onJobTypeChange(value);
    if (section === "Salary") onSalaryTypeChange(value);
  };

  return (
    <div className='flex w-full flex-wrap items-center gap-3'>
      <div className='flex h-[54px] min-w-[200px] flex-grow items-center rounded-full border border-gray-300 px-4'>
        <CiSearch className='text-xl text-gray-500' />
        <input
          type='text'
          placeholder='Job title keywords or company'
          className='w-full bg-transparent pl-3 text-sm outline-none'
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>

      <div className='relative min-w-[170px]'>
        <select
          value={location}
          onChange={e => onLocationChange(e.target.value)}
          className='h-[54px] w-full appearance-none rounded-full border border-gray-300 bg-white px-4 pr-10 text-sm text-gray-600'
        >
          <option value='' disabled hidden>
            Filter By Location
          </option>
          <option value='Pakistan'>Pakistan</option>
          <option value='India'>India</option>
          <option value='USA'>USA</option>
          <option value='UK'>UK</option>
        </select>
        <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-base text-gray-500' />
      </div>

      <div className='relative'>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          placeholderText='Filter By Date'
          className='h-[54px] rounded-full border border-gray-300 px-4 pr-10 text-sm text-gray-600'
        />
        <SlCalender className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-base text-gray-500' />
      </div>

      <button
        onClick={() => setShowModal(true)}
        className='flex h-[54px] items-center text-sm text-[#6A7381]'
      >
        <FiFilter className='mr-1' /> Filters
      </button>

      <FilterModal
        open={showModal}
        onClose={() => setShowModal(false)}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default JobFilterBar;
