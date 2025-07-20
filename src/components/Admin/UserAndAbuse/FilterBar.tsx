import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";

type Props = {
  fromEmployee: boolean;
};

const FilterBar = ({ fromEmployee }: Props) => {
  return (
    <div className='flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between'>
      {/* Search with icon */}
      <div className='relative w-full sm:w-[60%]'>
        <HiOutlineSearch
          className='absolute top-3.5 left-3 text-gray-400'
          size={18}
        />
        <input
          type='text'
          placeholder='Search Employee'
          className='w-full rounded-full border border-[#E2E8F0] py-3 pr-4 pl-10 text-sm placeholder:text-gray-400'
        />
      </div>

      {/* Filters group */}
      <div className='flex w-full flex-col gap-4 sm:w-[40%] sm:flex-row'>
        {/* Location Filter */}
        <div className='relative w-full'>
          <select className='w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-8 text-sm text-gray-600'>
            <option>Filter By Location</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-4 right-3 text-gray-500' />
        </div>

        {/* Skill / Industry Filter */}
        <div className='relative w-full'>
          <select className='w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-8 text-sm text-gray-600'>
            <option>
              {fromEmployee ? "Filter By Skill" : "Filter By Industry"}
            </option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-4 right-3 text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
