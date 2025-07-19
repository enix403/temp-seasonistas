"use client";
import { FiMoreVertical } from "react-icons/fi";
import FilterBar from "@/components/Admin/UserAndAbuse/FilterBar";
import companyLogo from "@/assets/Admin/companyLogo.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import VerifyModal from "@/components/Admin/UserAndAbuse/VerifyModal";
import BanModal from "@/components/Admin/UserAndAbuse/BanModal";
import SuspendModal from "@/components/Admin/UserAndAbuse/SuspandModal";

const employers = Array.from({ length: 8 }).map((_, i) => ({
  businessName: "Lanier Pvt Ltd",
  email: "dummy@gmail.com",
  website: "www.Lanier.com",
  location: "Punjab Pakistan",
  userId: "EMP001",
  verification: "Verified",
  totalJobs: "17 Jobs",
  status: i % 2 === 0 ? "Active" : "Inactive"
}));

const EmployersTable = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);

  const router = useRouter();
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className='mb-10 w-full'>
      <h1 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Employers
      </h1>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        <h1 className='px-6 pt-5 text-[20px] font-semibold text-[#1C252E]'>
          All Employers
        </h1>
        {/* filter */}
        <FilterBar fromEmployee={false} />

        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm text-[#1C252E]'>
            <thead className='bg-[#F5F5F5] text-[12px] font-semibold text-[#637381]'>
              <tr>
                <th className='px-4 py-4 font-medium'>Business Name</th>
                <th className='px-4 py-4 font-medium'>Email</th>
                <th className='px-4 py-4 font-medium'>Website</th>
                <th className='px-4 py-4 font-medium'>Location</th>
                <th className='px-4 py-4 font-medium'>User ID</th>
                <th className='px-4 py-4 font-medium'>Verification</th>
                <th className='px-4 py-4 font-medium'>Total Job</th>
                <th className='px-4 py-4 font-medium'>Status</th>
                <th className='px-4 py-4 font-medium'></th>
              </tr>
            </thead>
            <tbody>
              {employers.map((emp, index) => (
                <tr
                  key={index}
                  className='cursor-pointer border-b hover:bg-gray-50'
                >
                  <td
                    className='flex items-center gap-3 px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    <div className='flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#ECEEFF]'>
                      <Image
                        src={companyLogo}
                        alt={emp.businessName}
                        className='h-full w-full rounded-[4px] object-cover'
                      />
                    </div>
                    {emp.businessName}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    {emp.email}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    {emp.website}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    {emp.location}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    {emp.userId}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    {emp.verification}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    {emp.totalJobs}
                  </td>
                  <td
                    className='px-3 py-5'
                    onClick={() => router.push("/admin/employers/profile")}
                  >
                    <span
                      className={`rounded-full border-[0.6px] px-3 py-1 text-xs font-medium ${
                        emp.status === "Active"
                          ? "border-[#22C55E] bg-[#22C55E2B] text-[#22C55E]"
                          : "border-[#D95057] bg-[#D950572B] text-[#D95057]"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className='relative px-3 py-5'>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] text-gray-500 hover:bg-[#E2E8F0]'
                    >
                      <FiMoreVertical size={16} />
                    </button>

                    {/* Dropdown */}
                    {openDropdown === index && (
                      <div className='absolute top-14 right-6 z-10 w-48 rounded-xl bg-white py-2 text-sm text-black shadow-md'>
                        <button
                          onClick={() => {
                            setShowVerifyModal(true);
                            setOpenDropdown(null);
                          }}
                          className='w-full px-4 py-2 text-left hover:bg-gray-100'
                        >
                          Verify Company
                        </button>

                        <button
                          onClick={() =>
                            router.push(
                              `/admin/employers/jobs/${emp.userId}`
                            )
                          }
                          className='w-full px-4 py-2 text-left hover:bg-gray-100'
                        >
                          View Jobs
                        </button>
                        <button
                          className='w-full px-4 py-2 text-left hover:bg-gray-100'
                          onClick={() =>
                            router.push(
                              `/admin/employers/payments/${emp.userId}`
                            )
                          }
                        >
                          Payments
                        </button>
                        <button
                          className='w-full px-4 py-2 text-left hover:bg-gray-100'
                          onClick={() => {
                            setShowSuspendModal(true);
                            setOpenDropdown(null);
                          }}
                        >
                          Suspend User
                        </button>
                        <button
                          className='w-full px-4 py-2 text-left hover:bg-gray-100'
                          onClick={() => {
                            setShowBanModal(true);
                            setOpenDropdown(null);
                          }}
                        >
                          Ban User
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showVerifyModal && (
        <VerifyModal
          onClose={() => setShowVerifyModal(false)}
          onConfirm={() => {
            setShowVerifyModal(false);
          }}
        />
      )}
      {showBanModal && (
        <BanModal
          onCancel={() => setShowBanModal(false)}
          onConfirm={() => {
            setShowBanModal(false);
          }}
        />
      )}
      {showSuspendModal && (
        <SuspendModal
          onCancel={() => setShowSuspendModal(false)}
          onConfirm={() => {
            setShowSuspendModal(false);
          }}
        />
      )}
    </div>
  );
};

export default EmployersTable;
