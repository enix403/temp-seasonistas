import { FaSearch } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const ActivityFeed = () => {
  const items = [
    {
      user: "Ali Ahmed",
      action: 'Issued the certificate for "Mathematics - Grade 10".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Jordan Michael",
      action: 'Promoted the student to "Grade 11".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Jordan Michael",
      action: 'Updated the student information for "Sara Khan".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Ali Ahmed",
      action: 'Issued the certificate for "Mathematics - Grade 10".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Jordan Michael",
      action: 'Promoted the student to "Grade 11".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Jordan Michael",
      action: 'Updated the student information for "Sara Khan".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Jordan Michael",
      action: 'Promoted the student to "Grade 11".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    },
    {
      user: "Jordan Michael",
      action: 'Updated the student information for "Sara Khan".',
      actor: "@Ibrahim Babak",
      date: "2 September 15:00"
    }
  ];

  return (
    <div className='!mb-10 w-full rounded-2xl bg-white p-6 shadow-sm'>
      <h2 className='mb-5 text-lg font-semibold text-[#1C252E]'>
        Latest Activity Feed
      </h2>

      {/* Filters */}
      <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center'>
        {/* Search */}
        <div className='flex h-[50px] min-w-[200px] flex-grow items-center rounded-full border border-gray-300 px-4'>
          <FaSearch className='text-base text-gray-400' />
          <input
            type='text'
            placeholder='Search user activity'
            className='w-full bg-transparent pl-2 text-sm outline-none'
          />
        </div>

        {/* Filter By Location */}
        <div className='relative w-full sm:w-auto'>
          <select className='h-[50px] w-full appearance-none rounded-full border border-gray-300 bg-white pr-10 pl-4 text-sm text-gray-600'>
            <option>Filter By Location</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400' />
        </div>

        {/* Filter By Date */}
        <div className='relative w-full sm:w-auto'>
          <select className='h-[50px] w-full appearance-none rounded-full border border-gray-300 bg-white pr-10 pl-4 text-sm text-gray-600'>
            <option>Filter By Date</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400' />
        </div>
      </div>

      {/* Timeline */}
      <ul className='relative ml-3 space-y-6 border-l-2 border-dashed border-[#637381]'>
        {items.map((item, idx) => (
          <li
            key={idx}
            className='relative ml-8 flex items-start justify-between gap-2'
          >
            {/* Timeline icon */}
            <span className='absolute top-0 -left-12 flex h-7 w-7 items-center justify-center rounded-full border border-[#CBD5E1] bg-[#F1F5F9]'>
              <FiClock size={13} className='text-[#637381]' />
            </span>

            {/* User activity */}
            <div className='flex-1 text-sm'>
              <strong className='font-semibold text-black'>{item.user}</strong>{" "}
              <span className='text-[#637381]'>{item.action}</span>{" "}
              <span className='font-medium text-[#559093]'>{item.actor}</span>
            </div>

            {/* Timestamp */}
            <div className='mt-0.5 text-xs whitespace-nowrap text-[#000000]'>
              {item.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
