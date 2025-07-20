"use client";

import Image from "next/image";
import avatar from "@/assets/Admin/person.png";

const auditLogs = [
  {
    admin: "Ali Hassan",
    avatar: "/avatars/admin.png", // ✅ make sure this image exists in public/avatars
    action: "Approved Job",
    target: "Job #4352",
    time: "2025-05-18 10:32 AM",
    ip: "192.168.1.10"
  },
  {
    admin: "Ali Hassan",
    avatar: "/avatars/admin.png",
    action: "Banned User",
    target: "User #1055",
    time: "2025-05-18 10:32 AM",
    ip: "192.168.1.10"
  },
  {
    admin: "Ali Hassan",
    avatar: "/avatars/admin.png",
    action: "Refunded Payment",
    target: "User #1102",
    time: "2025-05-18 10:32 AM",
    ip: "192.168.1.10"
  },
  {
    admin: "Ali Hassan",
    avatar: "/avatars/admin.png",
    action: "Edited Template",
    target: "Welcome Email",
    time: "2025-05-18 10:32 AM",
    ip: "192.168.1.10"
  },
  // Duplicate for sample visual consistency
  {
    admin: "Ali Hassan",
    avatar: "/avatars/admin.png",
    action: "Approved Job",
    target: "Job #4352",
    time: "2025-05-18 10:32 AM",
    ip: "192.168.1.10"
  }
];

export default function AuditLogsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Audit Logs
      </h1>
      <div className='overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h2 className='border-b px-4 py-4 text-[18px] font-semibold sm:px-6 sm:py-6 sm:text-[22px]'>
          All Logs
        </h2>

        <table className='w-full min-w-[700px] text-left text-sm text-gray-700'>
          <thead className='bg-[#F5F5F5] font-medium text-gray-500'>
            <tr>
              <th className='px-4 py-3 sm:px-6'>Admin Name</th>
              <th className='px-4 py-3 sm:px-6'>Action</th>
              <th className='px-4 py-3 sm:px-6'>Target</th>
              <th className='px-4 py-3 sm:px-6'>Time</th>
              <th className='px-4 py-3 sm:px-6'>IP Address</th>
            </tr>
          </thead>
          <tbody className='text-[#1C252E]'>
            {auditLogs.map((log, idx) => (
              <tr key={idx} className='border-t'>
                <td className='flex items-center gap-2 px-4 py-4 whitespace-nowrap sm:px-6'>
                  <div className='h-10 w-10'>
                    <Image
                      src={avatar}
                      alt={log.admin}
                      width={30}
                      height={30}
                      className='h-full w-full rounded-full object-cover'
                    />
                  </div>
                  <span>{log.admin}</span>
                </td>
                <td className='px-4 py-4 whitespace-nowrap sm:px-6'>
                  {log.action}
                </td>
                <td className='px-4 py-4 whitespace-nowrap sm:px-6'>
                  {log.target}
                </td>
                <td className='px-4 py-4 whitespace-nowrap sm:px-6'>
                  {log.time}
                </td>
                <td className='px-4 py-4 whitespace-nowrap sm:px-6'>
                  {log.ip}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
