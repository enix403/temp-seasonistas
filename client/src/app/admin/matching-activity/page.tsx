"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import companyLogo from "@/assets/Admin/companyLogo.png";
import MetricCard from "@/components/Admin/Dashboards/Overview/MetricCard";
import arrow1 from "@/assets/Admin/arrow1.png";
import arrow5 from "@/assets/Admin/arrow5.png";

const dummyJobs = [
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Active"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Rejected"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Active"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Pending"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Active"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Rejected"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Active"
  },
  {
    title: "UI Designer",
    company: "Lanier Pvt Ltd",
    date: "2025-05-15",
    location: "Punjab Pakistan",
    category: "IT Industry",
    role: "Designer",
    status: "Rejected"
  }
];

export default function MatchingActivityPage() {
  return (
    <div className='w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Matching Activity
      </h1>

      {/* Stat Boxes */}
      <div className='mb-6 grid gap-5 md:grid-cols-3'>
        <MetricCard
          title='Match Success Rate'
          subtitle='last 7 days'
          value='74%'
          change={+2.6}
          arrowIcon={arrow1}
          bars={[5, 6, 3, 20, 25, 3, 17, 16]}
          barColor='#00A76F'
        />
        <MetricCard
          title='Matches This Month'
          subtitle='last 7 days'
          value='145'
          change={+0.2}
          arrowIcon={arrow1}
          bars={[5, 6, 20, 25, 3, 17, 16]}
          barColor='#559093'
        />
        <MetricCard
          title='Unmatched Opportunities'
          subtitle='last 7 days'
          value='78 jobs'
          change={-0.1}
          arrowIcon={arrow5}
          bars={[10, 10, 15, 5, 8, 20, 7, 16]}
          barColor='#FF5630'
        />
      </div>

      {/* Filter Bar */}
      <div className='mb-10 w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='px-6 pt-5 text-[18px] font-semibold text-[#1C252E]'>
          All Jobs
        </h2>

        <div className='flex flex-wrap items-center justify-between gap-4 px-6 py-5'>
          <div className='relative min-w-[200px] flex-1'>
            <HiOutlineSearch
              className='absolute top-[16px] left-4 text-gray-400'
              size={18}
            />
            <input
              type='text'
              placeholder='Search Job'
              className='w-full rounded-full border border-[#E2E8F0] py-3 pr-4 pl-10 text-sm placeholder:text-gray-400'
            />
          </div>
          {["Category", "Role", "Region"].map((filter, i) => (
            <div key={i} className='relative'>
              <select className='appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-8 text-sm text-gray-600'>
                <option>Filter By {filter}</option>
              </select>
              <IoIosArrowDown className='pointer-events-none absolute top-4 right-3 text-gray-500' />
            </div>
          ))}
        </div>

        {/* Table */}
        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Job Title</th>
              <th className='px-6 py-4'>Company</th>
              <th className='px-6 py-4'>Posted On</th>
              <th className='px-6 py-4'>Location</th>
              <th className='px-6 py-4'>Category</th>
              <th className='px-6 py-4'>Role</th>
              <th className='px-6 py-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyJobs.map((job, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                <td className='px-6 py-5'>{job.title}</td>
                <td className='mt-1 flex items-center gap-2 px-6 py-5'>
                  <Image
                    src={companyLogo}
                    alt='logo'
                    className='h-[29px] w-[29px] rounded-md'
                  />
                  {job.company}
                </td>
                <td className='px-6 py-5'>{job.date}</td>
                <td className='px-6 py-5'>{job.location}</td>
                <td className='px-6 py-5'>{job.category}</td>
                <td className='px-6 py-5'>{job.role}</td>
                <td className='px-6 py-5'>
                  <span
                    className={`rounded-full px-4 py-[4px] text-xs font-medium ${
                      job.status === "Active"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : job.status === "Rejected"
                          ? "bg-[#FDEEEE] text-[#D84C4C]"
                          : "bg-[#FEF3C7] text-[#D97706]"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
