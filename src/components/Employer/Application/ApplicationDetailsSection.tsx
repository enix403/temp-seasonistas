import { TiDocumentText } from "react-icons/ti";

type Props = {
  applicant: {
    name: string;
    email: string;
    phone: string;
    date: string;
    match: number;
    // other fields if needed
  };
};

const ApplicationDetailsSection = ({ applicant }: Props) => {
  return (
    <div className='space-y-6 rounded-xl bg-white p-6 shadow-sm'>
      <h2 className='text-lg leading-[22px] font-semibold'>
        Application Detail
      </h2>

      {/* Questions Section */}
      <div className='space-y-4'>
        {[1, 2, 3].map(num => (
          <div key={num}>
            <p className='text-[16px] leading-[24px] font-normal'>
              <span className='font-semibold'>Question {num}:</span> What
              interest you about this role?
            </p>
            <p className='mt-1 text-sm font-normal text-[#767676]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        ))}
      </div>

      {/* CV Section */}
      <div>
        <h3 className='text-[16px] leading-[22px] font-semibold'>
          Employee CV
        </h3>
        <div className='mt-2 flex flex-col items-center justify-between gap-2 rounded-lg border border-[#E4E4E4] p-4 sm:flex-row sm:gap-0'>
          <div className='flex items-center justify-center'>
            <TiDocumentText size={45} className='text-[#919EAB]' />
            <div>
              <p className='text-sm font-medium'>{applicant.name} CV.PDF</p>
              <p className='text-xs text-[#1C1C1EB8]'>Resume File</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <button className='rounded-full border border-[#EBECF0] px-[20px] py-[10px] text-[10px]'>
              View CV
            </button>
            <button className='rounded-full bg-[#559092] px-[20px] py-[10px] text-[10px] font-medium text-white'>
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className='border-y-2 border-[#EDEDED] py-6'>
        <h3 className='text-[16px] leading-[22px] font-semibold'>Experience</h3>
        <p className='mt-1 text-sm leading-[22px] font-medium'>
          UI/UX & Product Designer at Devscot Solution
        </p>
        <p className='text-xs leading-[24px] font-normal text-[#767676]'>
          April 2022 - June 2022 (2 year 3 Month)
        </p>
      </div>

      {/* Education */}
      <div className=''>
        <h3 className='text-[16px] leading-[22px] font-semibold'>Education</h3>
        <p className='mt-1 text-sm leading-[22px] font-medium'>
          Agriculture University of Faisalabad
        </p>
        <p className='text-xs leading-[24px] font-normal text-[#767676]'>
          April 2022 - June 2022
        </p>
      </div>
    </div>
  );
};

export default ApplicationDetailsSection;
