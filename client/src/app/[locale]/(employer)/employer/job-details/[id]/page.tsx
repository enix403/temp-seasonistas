'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import 'react-circular-progressbar/dist/styles.css'
import { initialJobs } from '~/components/Employee/Home/JobData'
import linearCompany from '~/app/assets/employee/linearCompany.png'
import { useState } from 'react'


const JobDetail = () => {
    const [isApplied, setIsApplied] = useState(false)
    const { id } = useParams()
    const router = useRouter()

    const jobId = Number(id)
    const job = initialJobs.find(job => job.id === jobId)

    if (!job) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-xl font-semibold">Job Not Found</h1>
                <button
                    className="mt-4 text-blue-600 underline"
                    onClick={() => router.back()}
                >
                    Go Back
                </button>
            </div>
        )
    }

    const matchPercentage = job.match || 0
    const handleApply = () => setIsApplied(true)

    function formatDate(date: Date): string {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: '2-digit',
        })
    }

    return (
        <div className='mb-6'>
            <div className=' mb-6'>
                <h1 className='text-lg md:text-[26px] font-[400] leading-[22px] sm:pt-4 mb-1'>Job Detail</h1>
                <div className="text-sm flex gap-2">
                    <p className="text-sm leading-[22px] font-[400] text-[#1C252E]">Overview <span className='text-[#919EAB]'>• Message</span></p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-xl">
                {/* Left */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className='flex justify-between items-start'>
                        <div className="space-y-1">
                            <h1 className="text-xl font-semibold">{job.title}</h1>
                            <div className="flex items-center gap-2 text-sm text-[#637381]">
                                <Image src={linearCompany} alt={job.company} width={20} height={20} className='rounded-[3px]' />
                                <span className='text-[#1C1C1E]'>{job.company}</span>
                                <span className='text-[#1C1C1EB8]'>{job.location}</span>
                            </div>
                            <p className="text-[14px] text-[#637381] font-normal">
                                Posted on 26/04/2025 &nbsp; Expire on 28/04/025
                            </p>
                            <p className="text-[16px] text-[#1C1C1EB8] font-normal"><strong className='text-[#1C1C1E] font-semibold'>Job ID:</strong> {job.id}</p>
                            <p className="text-sm text-[#1C1C1EB8] font-normal"><strong className='text-[#1C1C1E] font-semibold'>Price:</strong> {job.rate}</p>
                        </div>

                        {job.status && (
                            <div className={`px-5 py-2 rounded-full text-sm font-medium ${job.status === 'Submitted'
                                ? 'bg-[#5B9E9E] text-white'
                                : job.status === 'Rejected'
                                    ? 'bg-[#D950572B] text-[#D95057] border-[#D95057] border-[0.6px]'
                                    : 'bg-[#35CC6B2B] text-[#35CC6B] border-[#35CC6B] border-[0.6px]'
                                }`}>
                                {job.status}
                            </div>
                        )}
                    </div>




                    <div>
                        <h2 className="text-base font-semibold mb-2">Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-black">
                            <li>Execute design projects end-to-end across platforms.</li>
                            <li>Collaborate with engineers and product managers.</li>
                            <li>Lead in reviews and UX research testing.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-base font-semibold mb-2">Qualifications and Skills</h2>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-black">
                            <li>BA/BS in Design or related field.</li>
                            <li>3+ years of UX experience.</li>
                            <li>Strong portfolio and collaboration skills.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-base font-semibold mb-2">Preferred Skills</h2>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-black">
                            <li>Experience with prototyping.</li>
                            <li>Strong time and project management.</li>
                        </ul>
                    </div>

                    <div className="border rounded-xl px-4 py-4 mt-6 shadow-sm flex flex-col gap-2">
                        {/* Left Side: Logo + Company Info */}
                        <div className='flex flex-col sm:flex-row gap-4 w-full'>
                            <div className=" flex flex-col sm:flex-row gap-4 w-full">
                                <Image src={linearCompany} alt="Company logo" width={48} height={48} className="rounded-lg shrink-0" />

                                <div className="flex flex-col">
                                    {/* Company Name */}
                                    <h3 className="text-base font-semibold text-[#1A1A1A]">{job.company}</h3>

                                    {/* Type, Employees, Hiring */}
                                    <div className="flex flex-wrap items-center sm:gap-2 text-sm text-[#919EAB] mt-1">
                                        <span>Telecommunications</span>
                                        <span>•</span>
                                        <span>6,424 employees</span>
                                        <span>•</span>
                                        <span className="text-[#35CC6B] font-medium">Actively Hiring</span>
                                    </div>


                                </div>
                            </div>

                            {/* Right Side: View Page Button */}
                            <div className="self-start lg:self-center">
                                <button onClick={() => router.push(`/en/employer/view-profile/${job.id}`)} className="text-[#559093] font-semibold text-base whitespace-nowrap">View Page</button>
                            </div>
                        </div>
                        {/* Description */}
                        <p className="text-[13px] text-[#454F5B] mt-2 leading-[20px] line-clamp-3">
                            The right and contemporary use of technology is key to the progress of a nation. Keeping this in mind, Grameenphone always brings future-proof technology in order to facilitate your progress. The possibilities in this new world are immense and someone as bright as you should be the forerunner in leading the change...
                        </p>
                    </div>



                </div>

                {/* Right */}
                <div className="w-full lg:w-1/3 border rounded-xl p-6 space-y-6 h-full">
                    {/* Overview Section */}
                    <div>
                        <h3 className="font-semibold text-base mb-4">Overview</h3>
                        <ul className="text-[15px] text-gray-800 list-disc list-inside space-y-2">
                            {job.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default JobDetail
