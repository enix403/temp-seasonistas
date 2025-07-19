"use client";

import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

type ReportStatus = "Pending" | "Escalated";

interface AbuseReport {
  item: string;
  reason: string;
  reporter: string;
  time: string;
  users: string;
  status: ReportStatus;
}

const reports: AbuseReport[] = [
  {
    item: "User #1032",
    reason: "Spam messages",
    reporter: "User #1104",
    time: "2 min ago",
    users: "5 User",
    status: "Pending"
  },
  {
    item: "Job #4021",
    reason: "Fake company post",
    reporter: "User #1050",
    time: "10 min ago",
    users: "6 User",
    status: "Escalated"
  },
  {
    item: "User #1032",
    reason: "Spam messages",
    reporter: "User #1104",
    time: "2 min ago",
    users: "5 User",
    status: "Pending"
  },
  {
    item: "Job #4021",
    reason: "Fake company post",
    reporter: "User #1050",
    time: "10 min ago",
    users: "6 User",
    status: "Escalated"
  },
  {
    item: "User #1032",
    reason: "Spam messages",
    reporter: "User #1104",
    time: "2 min ago",
    users: "5 User",
    status: "Pending"
  },
  {
    item: "Job #4021",
    reason: "Fake company post",
    reporter: "User #1050",
    time: "10 min ago",
    users: "6 User",
    status: "Escalated"
  },
  {
    item: "User #1032",
    reason: "Spam messages",
    reporter: "User #1104",
    time: "2 min ago",
    users: "5 User",
    status: "Pending"
  }
];

export default function AbuseReportsPage() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <div className='relative w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Abuse Reports
      </h1>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='border-b px-6 py-5 text-[18px] font-semibold'>
          All Reports
        </h2>

        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Reported Item</th>
              <th className='px-6 py-4'>Reason</th>
              <th className='px-6 py-4'>Reported By</th>
              <th className='px-6 py-4'>Time</th>
              <th className='px-6 py-4'>Reported User</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'></th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr
                key={idx}
                className='relative border-t text-[12px] text-[#1C252E] hover:bg-[#F5F5F5]'
              >
                <td className='px-6 py-5'>{report.item}</td>
                <td className='px-6 py-5'>{report.reason}</td>
                <td className='px-6 py-5'>{report.reporter}</td>
                <td className='px-6 py-5'>{report.time}</td>
                <td className='px-6 py-5'>{report.users}</td>
                <td className='px-6 py-5'>
                  <span
                    className={`rounded-full border-[0.6px] px-4 py-2 text-xs font-medium ${
                      report.status === "Pending"
                        ? "border-[#F3C44D] bg-[#F3C44D2B] text-[#F3C44D]"
                        : "border-[#D95057] bg-[#D950572B] text-[#D95057]"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className='relative px-6 py-5'>
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-gray-500 hover:bg-[#E2E8F0]'
                  >
                    <FiMoreVertical size={16} />
                  </button>

                  {openDropdown === idx && (
                    <div className='absolute top-14 right-6 z-10 w-40 rounded-xl bg-white py-2 text-sm shadow-md'>
                      <button className='w-full px-4 py-2 text-left hover:bg-gray-100'>
                        Warn
                      </button>
                      <button className='w-full px-4 py-2 text-left hover:bg-gray-100'>
                        Suspend
                      </button>
                      <button className='w-full px-4 py-2 text-left hover:bg-gray-100'>
                        Delete
                      </button>
                      <button className='w-full px-4 py-2 text-left hover:bg-gray-100'>
                        Escalation
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openDropdown !== null && (
        <div onClick={closeDropdown} className='fixed inset-0 z-0' />
      )}
    </div>
  );
}
