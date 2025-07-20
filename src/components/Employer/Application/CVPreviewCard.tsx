import { FaFilePdf } from "react-icons/fa";

const CVPreviewCard = () => {
  return (
    <div className='flex items-center justify-between rounded-lg border border-[#E0E0E0] p-4'>
      <div className='flex items-center gap-2'>
        <FaFilePdf className='text-[#559092]' size={24} />
        <div>
          <p className='text-sm font-semibold'>Hammad CV.PDF</p>
          <p className='text-xs text-[#767676]'>Resume File</p>
        </div>
      </div>

      <div className='flex gap-3'>
        <button className='rounded-full border border-[#E0E0E0] px-4 py-1 text-[12px] font-[400]'>
          View CV
        </button>
        <button className='rounded-full bg-[#559092] px-4 py-1 text-[12px] font-[400] text-white'>
          Download
        </button>
      </div>
    </div>
  );
};

export default CVPreviewCard;
