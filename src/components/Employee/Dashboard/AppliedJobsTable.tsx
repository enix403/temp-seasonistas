"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Dummy applied jobs data
import linearCompany from "@/assets/employee/linearCompany.png";
import loomCompany from "@/assets/employee/loomCompany.png";
import trainline2Company from "@/assets/employee/trainline2Company.png";
import trainlineCompany from "@/assets/employee/trainlineCompany.jpg";
import { useRouter } from "next/navigation";

export const appliedJobs = [
  {
    id: 1,
    company: "Linear company",
    logo: linearCompany,
    title: "UI/UX Designer",
    appliedDate: "22/11/2025",
    status: "Rejected"
  },
  {
    id: 2,
    company: "Trainline",
    logo: trainlineCompany,
    title: "UI/UX Designer",
    appliedDate: "22/11/2025",
    status: "Approved"
  },
  {
    id: 3,
    company: "Loom",
    logo: loomCompany,
    title: "UI/UX Designer",
    appliedDate: "22/11/2025",
    status: "Pending"
  },
  {
    id: 4,
    company: "Trainline",
    logo: trainline2Company,
    title: "UI/UX Designer",
    appliedDate: "22/11/2025",
    status: "Approved"
  },
  {
    id: 5,
    company: "Loom",
    logo: loomCompany,
    title: "Graphic Designer",
    appliedDate: "22/11/2025",
    status: "Approved"
  },
  {
    id: 6,
    company: "Linear company",
    logo: linearCompany,
    title: "Product Manager",
    appliedDate: "22/11/2025",
    status: "Rejected"
  },
  {
    id: 7,
    company: "Trainline",
    logo: trainlineCompany,
    title: "Backend Developer",
    appliedDate: "22/11/2025",
    status: "Pending"
  },
  {
    id: 8,
    company: "Linear company",
    logo: linearCompany,
    title: "QA Tester",
    appliedDate: "22/11/2025",
    status: "Approved"
  },
  {
    id: 9,
    company: "Loom",
    logo: loomCompany,
    title: "Frontend Developer",
    appliedDate: "22/11/2025",
    status: "Rejected"
  },
  {
    id: 10,
    company: "Trainline",
    logo: trainline2Company,
    title: "Content Writer",
    appliedDate: "22/11/2025",
    status: "Approved"
  },
  {
    id: 11,
    company: "Trainline",
    logo: trainlineCompany,
    title: "Mobile Developer",
    appliedDate: "22/11/2025",
    status: "Pending"
  },
  {
    id: 12,
    company: "Linear company",
    logo: linearCompany,
    title: "DevOps Engineer",
    appliedDate: "22/11/2025",
    status: "Approved"
  }
];

// Status color map
const statusColorMap: Record<string, string> = {
  Approved: "bg-[#22C55E2B] text-[#22C55E] border-[#22C55E]",
  Rejected: "bg-[#D950572B] text-[#D95057] border-[#D95057]",
  Pending: "bg-[#F3C44D2B] text-[#F3C44D] border-[#F3C44D]"
};

const AppliedJobsTable = () => {
  const [page, setPage] = useState(1);
  const jobsPerPage = 5;
  const totalPages = Math.ceil(appliedJobs.length / jobsPerPage);
  const paginatedJobs = appliedJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );
  const router = useRouter();
  return (
    <div className='rounded-xl bg-white p-6 shadow-sm'>
      <h2 className='mb-4 text-lg leading-[22px] font-semibold'>
        Applied Jobs
      </h2>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full text-left'>
          <thead>
            <tr className='bg-gray-100 text-[12px] font-medium text-[#637381]'>
              <th className='px-4 py-3'>Company</th>
              <th className='px-4 py-3'>Job Title</th>
              <th className='px-4 py-3'>Date Applied</th>
              <th className='px-4 py-3'>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedJobs.map(job => (
              <tr
                key={job.id}
                className='cursor-pointer border-t text-[12px] font-normal text-[#1C252E] hover:bg-gray-50'
                onClick={() => router.push("/employee/view-profile/4")}
              >
                <td className='flex items-center gap-3 px-4 py-4'>
                  <div className='h-9 w-9 rounded-[4px]'>
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={50}
                      height={50}
                      className='h-full w-full rounded-[4px] object-cover'
                    />
                  </div>
                  {job.company}
                </td>
                <td className='px-4 py-4'>{job.title}</td>
                <td className='px-4 py-4'>{job.appliedDate}</td>
                <td className='px-4 py-4'>
                  <span
                    className={`rounded-full border-[0.6px] px-3 py-[6px] text-xs ${statusColorMap[job.status]}`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='mt-4 flex items-center justify-between text-sm text-gray-500'>
        <div></div>
        <div className='flex items-center gap-4'>
          <span className='text-xs text-[#767676]'>
            {(page - 1) * jobsPerPage + 1}–
            {Math.min(page * jobsPerPage, appliedJobs.length)} of{" "}
            {appliedJobs.length}
          </span>
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className='rounded-full border p-2 hover:bg-gray-100 disabled:opacity-50'
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className='rounded-full border p-2 hover:bg-gray-100 disabled:opacity-50'
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsTable;
