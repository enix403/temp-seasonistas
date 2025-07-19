"use client";

import { useRouter } from "next/navigation";

type JobCardProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  rate: string;
};

const ActiveJobCard = ({
  id,
  title,
  date,
  description,
  tags,
  rate
}: JobCardProps) => {
  const router = useRouter();

  const handleView = () => {
    const jobSlug = title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/en/employer/job-details/${id}`);
  };

  return (
    <div className='flex h-full w-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
      {/* Title + Date */}
      <div className='mb-2 flex items-start justify-between'>
        <h3 className='text-[22px] font-[450] text-black'>{title}</h3>
        <span className='text-[12px] leading-[24px] font-[400] text-[#767676]'>
          {date}
        </span>
      </div>

      {/* Description */}
      <p className='mb-3 line-clamp-3 pr-5 text-sm font-[400] text-[#767676]'>
        {description}
      </p>

      {/* Tags */}
      <div className='mb-4 flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='rounded-full border border-gray-300 px-3 py-2 text-xs text-gray-700'
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className='mt-auto flex items-center justify-between pt-2'>
        <span className='text-[16px] font-[400] text-[#11142D]'>{rate}</span>
        <button
          onClick={handleView}
          className='shrink-0 rounded-full bg-[#559092] px-6 py-2 text-[10px] text-white'
        >
          View ad
        </button>
      </div>
    </div>
  );
};

export default ActiveJobCard;
