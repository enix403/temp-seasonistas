"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import "react-circular-progressbar/dist/styles.css";
import { initialJobs } from "@/components/Employee/Home/JobData";
import linearCompany from "@/assets/employee/linearCompany.png";
import { useState } from "react";

const JobDetail = () => {
  const [isApplied, setIsApplied] = useState(false);
  const { id } = useParams();
  const router = useRouter();

  const jobId = Number(id);
  const job = initialJobs.find(job => job.id === jobId);

  if (!job) {
    return (
      <div className='p-8 text-center'>
        <h1 className='text-xl font-semibold'>Job Not Found</h1>
        <button
          className='mt-4 text-blue-600 underline'
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  const matchPercentage = job.match || 0;
  const handleApply = () => setIsApplied(true);

  function formatDate(date: Date): string {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit"
    });
  }

  return (
    <div className='mb-6'>
      <div className='mb-6'>
        <h1 className='mb-1 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
          Job Detail
        </h1>
        <div className='flex gap-2 text-sm'>
          <p className='text-sm leading-[22px] font-[400] text-[#1C252E]'>
            Overview <span className='text-[#919EAB]'>• Message</span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-6 rounded-xl bg-white p-6 lg:flex-row'>
        {/* Left */}
        <div className='w-full space-y-6 lg:w-2/3'>
          <div className='flex items-start justify-between'>
            <div className='space-y-1'>
              <h1 className='text-xl font-semibold'>{job.title}</h1>
              <div className='flex items-center gap-2 text-sm text-[#637381]'>
                <Image
                  src={linearCompany}
                  alt={job.company}
                  width={20}
                  height={20}
                  className='rounded-[3px]'
                />
                <span className='text-[#1C1C1E]'>{job.company}</span>
                <span className='text-[#1C1C1EB8]'>{job.location}</span>
              </div>
              <p className='text-[14px] font-normal text-[#637381]'>
                Posted on 26/04/2025 &nbsp; Expire on 28/04/025
              </p>
              <p className='text-[16px] font-normal text-[#1C1C1EB8]'>
                <strong className='font-semibold text-[#1C1C1E]'>
                  Job ID:
                </strong>{" "}
                {job.id}
              </p>
              <p className='text-sm font-normal text-[#1C1C1EB8]'>
                <strong className='font-semibold text-[#1C1C1E]'>Price:</strong>{" "}
                {job.rate}
              </p>
            </div>

            {job.status && (
              <div
                className={`rounded-full px-5 py-2 text-sm font-medium ${
                  job.status === "Submitted"
                    ? "bg-[#5B9E9E] text-white"
                    : job.status === "Rejected"
                      ? "border-[0.6px] border-[#D95057] bg-[#D950572B] text-[#D95057]"
                      : "border-[0.6px] border-[#35CC6B] bg-[#35CC6B2B] text-[#35CC6B]"
                }`}
              >
                {job.status}
              </div>
            )}
          </div>

          <div>
            <h2 className='mb-2 text-base font-semibold'>Responsibilities</h2>
            <ul className='list-disc space-y-1 pl-6 text-sm text-black'>
              <li>Execute design projects end-to-end across platforms.</li>
              <li>Collaborate with engineers and product managers.</li>
              <li>Lead in reviews and UX research testing.</li>
            </ul>
          </div>

          <div>
            <h2 className='mb-2 text-base font-semibold'>
              Qualifications and Skills
            </h2>
            <ul className='list-disc space-y-1 pl-6 text-sm text-black'>
              <li>BA/BS in Design or related field.</li>
              <li>3+ years of UX experience.</li>
              <li>Strong portfolio and collaboration skills.</li>
            </ul>
          </div>

          <div>
            <h2 className='mb-2 text-base font-semibold'>Preferred Skills</h2>
            <ul className='list-disc space-y-1 pl-6 text-sm text-black'>
              <li>Experience with prototyping.</li>
              <li>Strong time and project management.</li>
            </ul>
          </div>

          <div className='mt-6 flex flex-col gap-2 rounded-xl border px-4 py-4 shadow-sm'>
            {/* Left Side: Logo + Company Info */}
            <div className='flex w-full flex-col gap-4 sm:flex-row'>
              <div className='flex w-full flex-col gap-4 sm:flex-row'>
                <Image
                  src={linearCompany}
                  alt='Company logo'
                  width={48}
                  height={48}
                  className='shrink-0 rounded-lg'
                />

                <div className='flex flex-col'>
                  {/* Company Name */}
                  <h3 className='text-base font-semibold text-[#1A1A1A]'>
                    {job.company}
                  </h3>

                  {/* Type, Employees, Hiring */}
                  <div className='mt-1 flex flex-wrap items-center text-sm text-[#919EAB] sm:gap-2'>
                    <span>Telecommunications</span>
                    <span>•</span>
                    <span>6,424 employees</span>
                    <span>•</span>
                    <span className='font-medium text-[#35CC6B]'>
                      Actively Hiring
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: View Page Button */}
              <div className='self-start lg:self-center'>
                <button
                  onClick={() =>
                    router.push(`/employer/view-profile/${job.id}`)
                  }
                  className='text-base font-semibold whitespace-nowrap text-[#559093]'
                >
                  View Page
                </button>
              </div>
            </div>
            {/* Description */}
            <p className='mt-2 line-clamp-3 text-[13px] leading-[20px] text-[#454F5B]'>
              The right and contemporary use of technology is key to the
              progress of a nation. Keeping this in mind, Grameenphone always
              brings future-proof technology in order to facilitate your
              progress. The possibilities in this new world are immense and
              someone as bright as you should be the forerunner in leading the
              change...
            </p>
          </div>
        </div>

        {/* Right */}
        <div className='h-full w-full space-y-6 rounded-xl border p-6 lg:w-1/3'>
          {/* Overview Section */}
          <div>
            <h3 className='mb-4 text-base font-semibold'>Overview</h3>
            <ul className='list-inside list-disc space-y-2 text-[15px] text-gray-800'>
              {job.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
