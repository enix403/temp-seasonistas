import Image from "next/image";
import { useRouter } from "next/navigation";

type Worker = {
  name: string;
  role: string;
  avatar: any;
  description: string;
  skills: string[];
};

type Props = {
  worker: Worker;
};

const WorkerProfileCard = ({ worker }: Props) => {
  const router = useRouter();
  return (
    <div className='w-full cursor-pointer space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
      {/* Header */}
      <div
        className='flex items-center gap-3'
        onClick={() => router.push("/employer/view-profile/4")}
      >
        <div className='h-10 w-10 overflow-hidden rounded-full bg-gray-200'>
          <Image
            src={worker.avatar}
            alt={worker.name}
            width={40}
            height={40}
            className='h-full w-full object-cover'
          />
        </div>

        <div>
          <h3 className='text-[16px] font-semibold text-[#11142D]'>
            {worker.name}
          </h3>
          <p className='text-sm text-gray-500'>{worker.role}</p>
        </div>
      </div>

      <hr className='border-gray-200' />

      {/* Description */}
      <p className='line-clamp-3 text-sm font-[400] text-[#767676]'>
        {worker.description}
      </p>

      {/* Skills */}
      <div>
        <p className='mb-2 text-sm font-medium text-gray-700'>Top Skill</p>
        <div className='flex flex-wrap gap-2'>
          {worker.skills.map((skill, i) => (
            <span
              key={i}
              className='rounded-full border border-gray-300 px-4 py-2 text-xs text-gray-700'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className='flex items-center gap-4 pt-2'>
        <button className='flex-1 rounded-full border border-gray-300 py-2 text-sm text-gray-700'>
          Message
        </button>
        <button className='flex-1 rounded-full bg-[#559092] py-2 text-sm text-white'>
          Invite
        </button>
      </div>
    </div>
  );
};

export default WorkerProfileCard;
