"use client";

type JobStatus = "Active" | "Expire" | "Accept";

interface Job {
  title: string;
  jobId: string;
  applications: string;
  status: JobStatus;
  postedOn: string;
}

const jobs: Job[] = [
  {
    title: "UI/UX Designer",
    jobId: "ADV000001",
    applications: "100 Applications",
    status: "Active",
    postedOn: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    jobId: "ADV000001",
    applications: "100 Applications",
    status: "Expire",
    postedOn: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    jobId: "ADV000001",
    applications: "100 Applications",
    status: "Accept",
    postedOn: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    jobId: "ADV000001",
    applications: "100 Applications",
    status: "Expire",
    postedOn: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    jobId: "ADV000001",
    applications: "100 Applications",
    status: "Accept",
    postedOn: "2025-05-14"
  },
  {
    title: "UI/UX Designer",
    jobId: "ADV000001",
    applications: "100 Applications",
    status: "Expire",
    postedOn: "2025-05-14"
  }
];

export default function JobListPage() {
  return (
    <div className='w-full'>
      <h2 className='mb-6 text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
        Jobs
      </h2>

      <div className='w-full overflow-x-auto rounded-2xl bg-white shadow-sm'>
        {/* Header */}
        <h2 className='border-b px-6 py-5 text-[18px] font-semibold'>
          All Job
        </h2>

        {/* Table */}
        <table className='w-full text-left text-sm text-[#1C252E]'>
          <thead className='bg-[#F5F5F5] font-medium text-[#637381]'>
            <tr>
              <th className='px-6 py-4'>Job Title</th>
              <th className='px-6 py-4'>Job Id</th>
              <th className='px-6 py-4'>Applications</th>
              <th className='px-6 py-4'>Status</th>
              <th className='px-6 py-4'>Posted On</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={idx}
                className='border-t text-[12px] text-[#1C252E] hover:bg-[#F9FAFB]'
              >
                <td className='px-6 py-6'>{job.title}</td>
                <td className='px-6 py-6'>{job.jobId}</td>
                <td className='px-6 py-6'>{job.applications}</td>
                <td className='px-6 py-6'>
                  <span
                    className={`rounded-full px-4 py-[4px] text-xs font-medium ${
                      job.status === "Active"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : job.status === "Accept"
                          ? "bg-[#DCFCE7] text-[#15803D]"
                          : "bg-[#FDEEEE] text-[#D84C4C]"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className='px-6 py-6'>{job.postedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
