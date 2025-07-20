"use client";

import Image from "next/image";
import personLogo from "@/assets/Admin/person.png";

const admins = [
  { name: "Linear company", status: "Active" },
  { name: "Linear company", status: "Suspended" },
  { name: "Linear company", status: "Active" },
  { name: "Linear company", status: "Suspended" },
  { name: "Linear company", status: "Active" },
  { name: "Linear company", status: "Suspended" },
  { name: "Linear company", status: "Active" },
  { name: "Linear company", status: "Suspended" }
];

export default function AdminRolesPage() {
  return (
    <div className='w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Admin Roles
      </h1>

      <div className='mb-10 w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='px-6 py-5 text-[18px] font-semibold text-[#1C252E]'>
          All Admin
        </h2>

        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Admin Name</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, idx) => (
              <tr key={idx} className='border-t hover:bg-[#F9FAFB]'>
                <td className='mt-1 flex items-center gap-2 px-6 py-5'>
                  <Image
                    src={personLogo}
                    alt='avatar'
                    className='h-9 w-9 rounded-full object-cover'
                  />
                  {admin.name}
                </td>
                <td className='px-6 py-5'>
                  <span
                    className={`rounded-full px-4 py-[4px] text-xs font-medium ${
                      admin.status === "Active"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : "bg-[#FDEEEE] text-[#D84C4C]"
                    }`}
                  >
                    {admin.status}
                  </span>
                </td>
                <td className='cursor-pointer px-6 py-5 text-sm text-[#637381] underline hover:text-black'>
                  View Logs
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
