import { IoClose } from "react-icons/io5";
import { HiReceiptRefund } from "react-icons/hi2";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

export default function RefundModal({ onClose, onConfirm }: Props) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='relative w-full max-w-md rounded-2xl bg-white px-6 py-8'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-black'
        >
          <IoClose size={20} />
        </button>

        <div className='flex flex-col items-center justify-center'>
          <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#558F92]'>
            <HiReceiptRefund size={28} color='white' />
          </div>
          <h2 className='mb-2 text-xl font-semibold text-[#1D2937]'>
            Refund Payment
          </h2>
          <p className='mb-6 text-center text-sm text-gray-500'>
            Are you sure you want to refund this transaction?
          </p>

          <div className='flex items-center gap-4'>
            <button
              onClick={onClose}
              className='rounded-full border px-6 py-2 text-sm text-[#1D2937] hover:bg-gray-100'
            >
              Back
            </button>
            <button
              onClick={onConfirm}
              className='rounded-full bg-[#558F92] px-6 py-2 text-sm text-white hover:bg-[#44737a]'
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
