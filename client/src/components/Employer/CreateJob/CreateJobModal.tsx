import { IoWarning } from "react-icons/io5";

type Props = {
  setShowModal: (value: boolean) => void;
};

const CreateJobModal = ({ setShowModal }: Props) => {
  return (
    <div className='fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black/30'>
      <div className='relative max-h-[321px] w-[90%] max-w-[621px] rounded-2xl bg-white p-6 text-center'>
        <button
          onClick={() => setShowModal(false)}
          className='absolute top-5 right-5 text-[20px] font-[400]'
        >
          &times;
        </button>

        <div className='mb-4 flex justify-center'>
          <div className='rounded-full bg-[#D950571F] p-1'>
            <div className='rounded-full bg-[#D950574D] p-1'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#D95057]'>
                <span className='text-white'>
                  <IoWarning size={30} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 className='mb-2 text-[20px] leading-[20px] font-[600]'>
          You're Out of Credits
        </h2>
        <p className='mb-6 text-[16px] leading-[20px] font-[400] text-[#1C1C1EB8]'>
          You've used all your available credits for posting ads. To continue,
          please purchase a new plan or upgrade your existing one.
        </p>

        <div className='flex justify-end gap-4'>
          <button
            onClick={() => setShowModal(false)}
            className='rounded-full border border-[#1C1C1E1F] px-8 py-2 text-[16px] leading-[24px] font-[400]'
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className='rounded-full bg-[#559092] px-8 py-2 text-[16px] leading-[24px] font-[400] text-white'
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateJobModal;
