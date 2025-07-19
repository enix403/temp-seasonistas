"use client";

import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import logo from "~/app/assets/Admin/companyLogo.png";

const applications = [
  {
    title: "UI/UX Designer",
    company: "Lowe's Companies, Inc.",
    match: 72,
    status: "Accept",
    date: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    company: "Lowe's Companies, Inc.",
    match: 72,
    status: "Rejected",
    date: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    company: "Lowe's Companies, Inc.",
    match: 72,
    status: "Accept",
    date: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    company: "Lowe's Companies, Inc.",
    match: 72,
    status: "Rejected",
    date: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    company: "Lowe's Companies, Inc.",
    match: 72,
    status: "Accept",
    date: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    company: "Lowe's Companies, Inc.",
    match: 72,
    status: "Rejected",
    date: "2025-05-14"
  }
];

export default function AllJobApplyPage() {
  return (
    <div className='w-full'>
      <h2 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Job History
      </h2>
      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        {/* Header */}
        <h2 className='border-b px-6 py-5 text-[18px] font-semibold'>
          All Job Apply
        </h2>

        {/* Table */}
        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Job Title</th>
              <th className='px-6 py-4'>Company</th>
              <th className='px-6 py-4'>Match%</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'>Applied On</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((item, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                <td className='px-6 py-5 whitespace-nowrap'>{item.title}</td>
                <td className='mt-1 flex items-center gap-2 px-6 py-6 whitespace-nowrap'>
                  <div className='h-10 w-10 rounded-[4px]'>
                    <Image
                      src={logo}
                      alt='logo'
                      className='h-full w-full rounded-[4px] object-cover'
                    />
                  </div>
                  {item.company}
                </td>
                <td className='w-[80px] px-6 py-5'>
                  <CircularProgressbar
                    value={item.match}
                    text={`${item.match}%`}
                    styles={buildStyles({
                      textSize: "28px",
                      textColor: "#1C252E",
                      pathColor: "#3B978C",
                      trailColor: "#E5EAF2"
                    })}
                  />
                </td>
                <td className='px-6 py-5'>
                  <span
                    className={`rounded-full px-4 py-[4px] text-xs font-medium ${
                      item.status === "Accept"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : "bg-[#FDEEEE] text-[#D84C4C]"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className='px-6 py-5 whitespace-nowrap'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
