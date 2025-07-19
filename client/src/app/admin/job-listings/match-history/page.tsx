"use client";

import Image from "next/image";
import avatar from "~/app/assets/Admin/person.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const dummyMatches = [
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Applied"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Declined"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Applied"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Declined"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Applied"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Declined"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Declined"
  },
  {
    name: "Linear company",
    email: "dummy@gmail.com",
    location: "Punjab Pakistan",
    date: "2025-05-14",
    match: 72,
    status: "Applied"
  }
];

export default function JobMatchHistoryPage() {
  return (
    <div className='mb-10 w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Job Match
      </h1>
      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h1 className='px-6 py-5 text-[18px] font-semibold text-[#1C252E]'>
          All Employee
        </h1>
        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Employee Name</th>
              <th className='px-6 py-4'>Email</th>
              <th className='px-6 py-4'>Location</th>
              <th className='px-6 py-4'>Applied On</th>
              <th className='px-6 py-4'>Match%</th>
              <th className='px-6 py-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyMatches.map((item, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                <td className='mt-[10px] flex items-center gap-3 px-6 py-5'>
                  <Image
                    src={avatar}
                    alt='avatar'
                    className='h-8 w-8 rounded-full object-cover'
                  />
                  {item.name}
                </td>
                <td className='px-6 py-5'>{item.email}</td>
                <td className='px-6 py-5 whitespace-nowrap'>{item.location}</td>
                <td className='px-6 py-5'>{item.date}</td>
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
                    className={`rounded-full border-[0.6px] px-4 py-[4px] text-xs font-medium ${
                      item.status === "Applied"
                        ? "border-[#22C55E] bg-[#22C55E2B] text-[#22C55E]"
                        : "border-[#D95057] bg-[#D950572B] text-[#D95057]"
                    }`}
                  >
                    {item.status}
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
