"use client";

import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";

const JobFilterBar = ({
  search,
  onSearchChange,
  locationFilter,
  onLocationChange,
  availabilityFilter,
  onAvailabilityChange,
  skillFilter,
  onSkillChange
}: {
  search: string;
  onSearchChange: (value: string) => void;
  locationFilter: string;
  onLocationChange: (value: string) => void;
  availabilityFilter: string;
  onAvailabilityChange: (value: string) => void;
  skillFilter: string;
  onSkillChange: (value: string) => void;
}) => {
  return (
    <div className='flex w-full flex-wrap items-center gap-4 rounded-xl bg-white'>
      {/* Search Input */}
      <div className='relative flex h-[54px] max-w-[350px] min-w-[200px] flex-grow items-center gap-2 rounded-full border border-gray-300 px-4 py-2'>
        <CiSearch className='text-gray-500' size={24} />
        <input
          type='text'
          placeholder='Type Here Job Name'
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className='w-full bg-transparent text-[16px] font-[400] outline-none'
        />
      </div>

      {/* Location Select */}
      <div className='relative w-full max-w-[200px] min-w-[160px]'>
        <select
          value={locationFilter}
          onChange={e => onLocationChange(e.target.value)}
          className='h-[54px] w-full appearance-none rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-600'
        >
          <option value=''>Filter By Location</option>
          <option value='Pakistan'>Pakistan</option>
          <option value='India'>India</option>
          <option value='USA'>USA</option>
          <option value='UK'>UK</option>
        </select>
        <div className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transform'>
          <FiChevronDown size={18} />
        </div>
      </div>

      {/* Availability Select */}
      <div className='relative w-full max-w-[200px] min-w-[160px]'>
        <select
          value={availabilityFilter}
          onChange={e => onAvailabilityChange(e.target.value)}
          className='h-[54px] w-full appearance-none rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-600'
        >
          <option value=''>Filter By Availability</option>
          <option value='Remote'>Remote</option>
          <option value='Full Time'>Full Time</option>
          <option value='Part Time'>Part Time</option>
        </select>
        <div className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transform'>
          <FiChevronDown size={18} />
        </div>
      </div>

      {/* Skills Select */}
      <div className='relative w-full max-w-[200px] min-w-[160px]'>
        <select
          value={skillFilter}
          onChange={e => onSkillChange(e.target.value)}
          className='h-[54px] w-full appearance-none rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-600'
        >
          <option value=''>Select Skill</option>
          <option value='React.js'>React.js</option>
          <option value='Figma'>Figma</option>
          <option value='Node.js'>Node.js</option>
          <option value='SEO Writing'>SEO Writing</option>
        </select>
        <div className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transform'>
          <FiChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};

export default JobFilterBar;
