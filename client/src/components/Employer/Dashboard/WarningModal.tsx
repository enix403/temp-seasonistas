import { FaLocationArrow } from "react-icons/fa6";

type Props = {
  setShowModal: (value: boolean) => void;
};

const WarningModal = ({ setShowModal }: Props) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='relative max-h-[388px] w-[90%] max-w-[575px] rounded-2xl bg-white p-8 text-center'>
        <button
          onClick={() => setShowModal(false)}
          className='absolute top-5 right-5 text-[20px] font-[400]'
        >
          &times;
        </button>

        <div className='mb-4 flex justify-center'>
          <div className='rounded-full bg-[#5590931F] p-1'>
            <div className='rounded-full bg-[#5590934D] p-1'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#559093]'>
                <span className='text-white'>
                  <FaLocationArrow size={30} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 className='mb-3 text-[20px] leading-[20px] font-[600]'>
          Are you sure you want to Repost?
        </h2>
        <p className='mb-6 text-[16px] leading-[20px] font-[400] text-[#1C1C1EB8]'>
          Are you sure you want to repost this job? It will be published again
          for candidates to apply.
        </p>

        <div className='flex justify-end gap-4'>
          <button
            onClick={() => setShowModal(false)}
            className='rounded-full border border-[#1C1C1E1F] px-8 py-2 text-[16px] leading-[24px] font-[400]'
          >
            Back
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className='rounded-full bg-[#559092] px-8 py-2 text-[16px] leading-[24px] font-[400] text-white'
          >
            Yes Sure
          </button>
        </div>
      </div>
    </div>
  );
};
export default WarningModal;
