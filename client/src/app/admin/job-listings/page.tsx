"use client";

import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { initialJobs } from "./jobData";

import companyLogo from "@/assets/Admin/companyLogo.png";
import FlagInfoModal from "~/components/Admin/Modal/FlagInfoModal";

export default function JobListingsPage() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showFlagModal, setShowFlagModal] = useState(false);
  const [flagData, setFlagData] = useState<any>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const router = useRouter();
  return (
    <div className='relative mb-10 w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Job Listings
      </h1>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h1 className='px-6 pt-5 text-[20px] font-semibold text-[#1C252E]'>
          All Jobs
        </h1>

        <div className='flex flex-wrap items-center justify-between gap-4 px-6 py-5'>
          <div className='relative min-w-[250px] flex-1'>
            <HiOutlineSearch
              className='absolute top-[16px] left-4 text-gray-400'
              size={18}
            />
            <input
              type='text'
              placeholder='Search Employee'
              className='w-full rounded-full border border-[#E2E8F0] py-4 pr-4 pl-10 text-sm placeholder:text-gray-400'
            />
          </div>
          <div className='relative'>
            <select className='appearance-none rounded-full border border-gray-300 bg-white px-4 py-4 pr-8 text-sm text-gray-600'>
              <option>Filter By Status</option>
            </select>
            <IoIosArrowDown className='pointer-events-none absolute top-5 right-3 text-gray-500' />
          </div>
        </div>

        {/* Table */}
        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5]'>
            <tr className='font-medium text-[#637381]'>
              <th className='px-6 py-4'>Job Title</th>
              <th className='px-6 py-4'>Company</th>
              <th className='px-6 py-4'>Posted On</th>
              <th className='px-6 py-4'>Location</th>
              <th className='px-6 py-4'>Flagged?</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'></th>
            </tr>
          </thead>
          <tbody>
            {initialJobs.map((job, idx) => (
              <tr key={job.id} className='relative border-t hover:bg-[#F9FAFB]'>
                <td
                  className='cursor-pointer px-6 py-5'
                  onClick={() =>
                    router.push(`/en/admin/job-listings/job-detail/${job.id}`)
                  }
                >
                  {job.title}
                </td>
                <td
                  className='mt-1 flex cursor-pointer items-center gap-2 px-6 py-5'
                  onClick={() =>
                    router.push(`/en/admin/job-listings/job-detail/${job.id}`)
                  }
                >
                  <Image
                    src={companyLogo}
                    alt='logo'
                    width={29}
                    height={29}
                    className='rounded-md'
                  />
                  {job.company}
                </td>
                <td
                  className='cursor-pointer px-6 py-5'
                  onClick={() =>
                    router.push(`/en/admin/job-listings/job-detail/${job.id}`)
                  }
                >
                  {job.date}
                </td>
                <td
                  className='cursor-pointer px-6 py-5'
                  onClick={() =>
                    router.push(`/en/admin/job-listings/job-detail/${job.id}`)
                  }
                >
                  {job.location}
                </td>
                <td
                  className='cursor-pointer px-6 py-5'
                  onClick={() =>
                    router.push(`/en/admin/job-listings/job-detail/${job.id}`)
                  }
                >
                  {job.match > 90 || job.status === "Rejected" ? (
                    <span className='text-xs font-medium text-[#D84C4C]'>
                      🚩 Yes
                    </span>
                  ) : (
                    <span className='text-sm text-gray-400'>---</span>
                  )}
                </td>
                <td
                  className='cursor-pointer px-6 py-5'
                  onClick={() =>
                    router.push(`/en/admin/job-listings/job-detail/${job.id}`)
                  }
                >
                  <span
                    className={`rounded-full border-[0.6px] px-4 py-[4px] text-xs font-medium ${
                      job.status === "Active"
                        ? "border-[#22C55E] bg-[#22C55E2B] text-[#22C55E]"
                        : job.status === "Rejected"
                          ? "border-[#D95057] bg-[#D950572B] text-[#D95057]"
                          : "border-[#F3C44D] bg-[#F3C44D2B] text-[#F3C44D]"
                    }`}
                  >
                    {job.status ?? "Pending"}
                  </span>
                </td>
                <td className='px-6 py-5'>
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] text-gray-500 hover:bg-[#E2E8F0]'
                  >
                    <FiMoreVertical size={16} />
                  </button>
                  {openDropdown === idx && (
                    <div className='absolute top-14 right-6 z-10 w-48 rounded-xl bg-white py-2 text-sm shadow-md'>
                      <button
                        className='w-full px-4 py-2 text-left hover:bg-gray-100'
                        onClick={() => setOpenDropdown(null)}
                      >
                        Approve
                      </button>
                      <button className='w-full px-4 py-2 text-left hover:bg-gray-100'>
                        Reject
                      </button>
                      <button
                        className='w-full px-4 py-2 text-left hover:bg-gray-100'
                        onClick={() => {
                          setFlagData({
                            title: job.title,
                            reportedItem: `Job #${job.id} – "${job.title}"`,
                            reportedBy: "User #1104 – Ali Raza",
                            flaggedOn: "2025-05-17 – 3:40 PM",
                            reason: "Fake Job",
                            reportCount: "3 Users have flagged this job"
                          });
                          setShowFlagModal(true);
                          setOpenDropdown(null);
                        }}
                      >
                        View Flagged
                      </button>

                      <button
                        className='w-full px-4 py-2 text-left hover:bg-gray-100'
                        onClick={() =>
                          router.push("job-listings/match-history")
                        }
                      >
                        Match history
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showFlagModal && (
        <FlagInfoModal
          data={flagData}
          onClose={() => setShowFlagModal(false)}
        />
      )}
    </div>
  );
}
