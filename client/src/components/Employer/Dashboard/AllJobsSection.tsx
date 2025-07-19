"use client";

import Image from "next/image";
import avatar1 from "@/assets/employer/dashboard/applicant1.png";
import avatar2 from "@/assets/employer/dashboard/applicant2.png";
import avatar3 from "@/assets/employer/dashboard/applicant3.png";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import WarningModal from "./WarningModal";
import { useRouter } from "next/navigation";

const jobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    status: "active",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...",
    tags: [
      "Experience: 3 Year",
      "Full Time",
      "Salary: Monthly",
      "Onsite Job",
      "Pakistan"
    ],
    applicants: 12
  },
  {
    id: 2,
    title: "UI/UX Designer",
    status: "active",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...",
    tags: [
      "Experience: 3 Year",
      "Full Time",
      "Salary: Monthly",
      "Onsite Job",
      "Pakistan"
    ],
    applicants: 12
  },
  {
    id: 3,
    title: "UI/UX Designer",
    status: "expired",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming user needs...",
    tags: [
      "Experience: 3 Year",
      "Full Time",
      "Salary: Monthly",
      "Onsite Job",
      "Pakistan"
    ],
    applicants: 12
  }
];

const AllJobsSection = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleRepost = () => {
    setShowModal(true);
  };

  return (
    <div className='mt-10 rounded-[16px] bg-white px-6 py-4'>
      <h2 className='mb-4 text-xl leading-[22px] font-[500]'>All Jobs</h2>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {jobs.map((job, i) => (
          <div
            key={i}
            className='relative space-y-4 rounded-xl border border-gray-200 bg-white p-6'
          >
            {/* Edit icon */}
            <button
              className='absolute top-4 right-4 rounded-full bg-[#E6F4EF] p-2 text-[#4F9A98] hover:text-[#3e7e79]'
              onClick={() => router.push(`/employer/post-details/${job.id}`)}
            >
              <FiEdit2 size={16} />
            </button>

            {/* Title + Status */}
            <h3 className='text-lg font-semibold'>{job.title}</h3>
            <span
              className={`inline-block rounded-full px-3 py-[2px] text-[10px] leading-[24px] font-[400] ${
                job.status === "active"
                  ? "border-[0.6px] border-[#35CC6B] bg-[#35CC6B2B] text-[#35CC6B]"
                  : "border-[0.6px] border-[#D95057] bg-[#D950572B] text-[#D95057]"
              }`}
            >
              {job.status === "active" ? "Job Active" : "Job Expired"}
            </span>

            {/* Description */}
            <p className='text-[12px] font-[400] text-gray-500'>
              {job.description}
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-2'>
              {job.tags.map((tag, j) => (
                <span
                  key={j}
                  className='rounded-[15.5px] border border-gray-300 px-3 py-1 text-[10px] leading-[24px] font-[300]'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Applicants */}
            <div className='flex items-center pt-1'>
              <div className='flex -space-x-3'>
                {[avatar1, avatar2, avatar3].map((img, i) => (
                  <div
                    key={i}
                    className='h-10 w-10 overflow-hidden rounded-full border-2 border-white'
                  >
                    <Image
                      src={img}
                      alt={`user${i + 1}`}
                      width={40}
                      height={40}
                      className='h-full w-full object-cover'
                    />
                  </div>
                ))}
                <span className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-[12px] font-[300] text-black'>
                  {job.applicants}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className='flex items-center justify-center gap-3 pt-1 2xl:gap-10'>
              <button
                onClick={handleRepost}
                className='w-fit min-w-[130px] rounded-full border border-gray-300 px-3 py-1 text-[10px] leading-[19px] font-[400] 2xl:min-w-[150px]'
              >
                Repost Job
              </button>
              <button
                onClick={() =>
                  router.push(`/employer/application/${job.id}`)
                }
                className='w-fit min-w-[130px] rounded-full bg-[#559093] px-3 py-1 text-[10px] leading-[19px] font-[600] text-white 2xl:min-w-[150px]'
              >
                View Applicants
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && <WarningModal setShowModal={setShowModal} />}
    </div>
  );
};

export default AllJobsSection;
