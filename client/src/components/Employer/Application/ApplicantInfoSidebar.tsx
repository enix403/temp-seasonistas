import Image from "next/image";
import avatar from "~/app/assets/employer/dashboard/applicant2.png";
import { CiMail, CiLocationOn, CiLinkedin } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

type Props = {
  applicant: {
    name: string;
    appliedDate: string;
    job: string;
    jobType: string;
    location: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    skills: string[];
  };
};

const ApplicantInfoSidebar = ({ applicant }: Props) => {
  return (
    <div className='space-y-6 rounded-xl bg-white p-6 shadow-sm'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <h3 className='text-lg leading-[22px] font-semibold'>
          Personal Detail
        </h3>
        <button className='rounded-full border border-[#EBECF0] px-4 py-[10px] text-[12px] font-light'>
          View Profile
        </button>
      </div>

      {/* Profile */}
      <div className='flex flex-col items-center space-y-1'>
        <div className='h-[95px] w-[95px]'>
          <Image
            src={avatar}
            alt='avatar'
            width={100}
            height={100}
            className='h-full w-full rounded-full object-cover'
          />
        </div>
        <p className='text-[18px] font-medium'>{applicant.name}</p>
        <p className='text-[12px] font-normal text-[#767676]'>
          Applied {applicant.appliedDate}
        </p>
      </div>

      <hr className='w-full text-[#EDEDED]' />

      {/* Job Info */}
      <div className='space-y-4'>
        <p className='text-[16px] font-normal'>Applied Job</p>
        <div className='space-y-1 rounded-[18px] bg-[#EEF4F4] px-3 py-4'>
          <p className='text-[16px] leading-[22px] font-medium'>
            {applicant.job}
          </p>
          <p className='text-xs font-normal text-[#767676]'>{`${applicant.jobType} · ${applicant.location}`}</p>
        </div>
      </div>

      <hr className='w-full text-[#EDEDED]' />

      {/* Contact */}
      <div className='space-y-4'>
        <p className='text-[16px] font-normal'>Contact Detail</p>
        <div className='space-y-4 text-sm'>
          <div className='flex items-center justify-start gap-4'>
            <div className='flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EEF4F4] text-black'>
              <CiMail size={15} />
            </div>
            <p className='font-light'>
              <span className='text-xs font-medium'>Email:</span>
              <br /> {applicant.email}
            </p>
          </div>
          <div className='flex items-center justify-start gap-4'>
            <div className='flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EEF4F4] text-black'>
              <BsTelephone size={15} />
            </div>
            <p className='font-light'>
              <span className='text-xs font-medium'>Phone:</span> <br />
              {applicant.phone}
            </p>
          </div>
          <div className='flex items-center justify-start gap-4'>
            <div className='flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EEF4F4] text-black'>
              <CiLocationOn size={15} />
            </div>
            <p className='font-light'>
              <span className='text-xs font-medium'>Address:</span> <br />
              {applicant.address}
            </p>
          </div>
          <div className='flex items-center justify-start gap-4'>
            <div className='flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#EEF4F4] text-black'>
              <CiLinkedin size={15} />
            </div>
            <p className='font-light'>
              <span className='text-xs font-medium'>Linkedin:</span> <br />
              {applicant.linkedin}
            </p>
          </div>
        </div>
      </div>
      <hr className='w-full text-[#EDEDED]' />
      {/* Skills */}
      <div className='space-y-4'>
        <p className='text-[16px] font-normal'>Skills</p>
        <div className='flex flex-wrap gap-2'>
          {applicant.skills.map((skill, i) => (
            <span
              key={i}
              className='rounded-full border border-[#EBECF0] px-3 py-1 text-[12px] leading-[24px] font-light'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfoSidebar;
