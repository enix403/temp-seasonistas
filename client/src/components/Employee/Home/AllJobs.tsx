"use client";

import { useState } from "react";
import JobFilterBar from "./JobFilterBar";
import AllJobsCard from "./AllJobsCard";
import { initialJobs } from "./JobData";

const AllJobs = () => {
  const [activeTab, setActiveTab] = useState<"allJobs" | "savedJobs">(
    "allJobs"
  );
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryType, setSalaryType] = useState("");

  const filteredJobs = initialJobs.filter(job => {
    const matchTitle =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchLocation = location
      ? job.location.toLowerCase() === location.toLowerCase()
      : true;
    const matchExperience = experience
      ? job.tags.includes(`Experience: ${experience}`)
      : true;
    const matchJobType = jobType ? job.tags.includes(jobType) : true;
    const matchSalary = salaryType
      ? job.tags.includes(`Salary: ${salaryType}`)
      : true;

    return (
      matchTitle &&
      matchLocation &&
      matchExperience &&
      matchJobType &&
      matchSalary
    );
  });
  const handleClearAll = () => {
    setSearch("");
    setLocation("");
    setExperience("");
    setJobType("");
    setSalaryType("");
  };

  return (
    <div className='space-y-6 rounded-[16px] sm:bg-white sm:p-8'>
      {/* Tabs */}
      <div className='flex items-center gap-6 border-b'>
        <button
          onClick={() => setActiveTab("allJobs")}
          className={`border-b-2 pb-3.5 text-sm font-medium ${activeTab === "allJobs" ? "border-[#559092] text-black" : "border-transparent text-gray-500"}`}
        >
          All Jobs{" "}
          <span
            className={`rounded-[10px] px-3 py-2 ${activeTab === "allJobs" ? "bg-[#559093] text-white" : "bg-[#E2E2E2] text-[#637381]"}`}
          >
            {filteredJobs.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("savedJobs")}
          className={`border-b-2 pb-3.5 text-sm font-medium ${activeTab === "savedJobs" ? "border-[#559092] text-black" : "border-transparent text-gray-500"}`}
        >
          Saved Jobs{" "}
          <span
            className={`rounded-[10px] px-3 py-2 ${activeTab === "allJobs" ? "bg-[#E2E2E2] text-[#637381]" : "bg-[#559093] text-white"}`}
          >
            {initialJobs.filter(job => job.saved).length}
          </span>
        </button>
      </div>

      {/* Filter Bar */}
      <JobFilterBar
        search={search}
        location={location}
        experience={experience}
        jobType={jobType}
        salaryType={salaryType}
        onSearchChange={setSearch}
        onLocationChange={setLocation}
        onExperienceChange={setExperience}
        onJobTypeChange={setJobType}
        onSalaryTypeChange={setSalaryType}
        onClearFilter={handleClearAll}
      />

      {(search || location || experience || jobType || salaryType) && (
        <div className='mt-6 flex flex-col flex-wrap justify-start gap-4'>
          {/* Result Count */}
          <span className='text-base font-semibold text-black'>
            {filteredJobs.length}{" "}
            <span className='font-normal text-gray-500'>results found</span>
          </span>

          <div className='flex flex-wrap items-center gap-4'>
            {/* Active Filters Box */}
            <div className='flex flex-wrap items-center gap-3 rounded-[16px] border border-[#D0D5DD] bg-white px-5 py-3 text-[15px] shadow-sm'>
              <span className='mr-2 text-[15px] font-semibold text-black'>
                Filter:
              </span>
              {[
                jobType && {
                  label: `Job Type: ${jobType}`,
                  onRemove: () => setJobType("")
                },
                experience && {
                  label: `${experience} Experience`,
                  onRemove: () => setExperience("")
                },
                salaryType && {
                  label: `Salary: ${salaryType}`,
                  onRemove: () => setSalaryType("")
                },
                location && {
                  label: `Location: ${location}`,
                  onRemove: () => setLocation("")
                }
              ]
                .filter(
                  (f): f is { label: string; onRemove: () => void } => !!f
                )
                .map((filter, index) => (
                  <span
                    key={index}
                    className='flex items-center gap-1 rounded-full bg-[#F2F4F7] px-3 py-1.5 text-[15px] text-[#101828]'
                  >
                    {filter.label}
                    <button
                      onClick={filter.onRemove}
                      className='text-base text-gray-500 hover:text-black'
                    >
                      ×
                    </button>
                  </span>
                ))}
            </div>

            {/* Clear All Button */}
            <button
              onClick={handleClearAll}
              className='flex items-center gap-1 text-sm text-[15px] font-medium text-[#D92D20] hover:underline'
            >
              Clear
              <svg className='h-4 w-4 fill-current' viewBox='0 0 20 20'>
                <path d='M6 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h4a1 1 0 1 1 0 2h-1l-1.2 12.2A2 2 0 0 1 13.8 19H6.2a2 2 0 0 1-2-1.8L3 5H2a1 1 0 1 1 0-2h4V2zm2 3v10h2V5H8zm4 0v10h2V5h-2z' />
              </svg>
            </button>

            {/* Save Button with Border */}
            <button className='ml-auto rounded-full border-2 border-[#3B6B6E] bg-[#559093] px-5 py-2 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#41797b]'>
              Save
            </button>
          </div>
        </div>
      )}

      {/* Job Results */}
      {activeTab === "allJobs" && (
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
          {filteredJobs.map(job => (
            <AllJobsCard key={job.id} {...job} />
          ))}
        </div>
      )}

      {/* Saved Results */}
      {activeTab === "savedJobs" && (
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
          {initialJobs
            .filter(job => job.saved)
            .map(job => (
              <AllJobsCard key={job.id} {...job} />
            ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
