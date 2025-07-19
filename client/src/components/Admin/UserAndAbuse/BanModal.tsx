type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const BanModal = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <div className='w-[90%] max-w-md rounded-2xl bg-white p-10 text-center'>
        <h3 className='mb-2 text-left text-lg font-semibold text-[#1E1E1E]'>
          Ban User
        </h3>
        <p className='mb-6 text-left text-sm text-[#637381]'>
          The user will be permanently blocked and will not be able to access
          their account again.
        </p>
        <div className='flex justify-end gap-4'>
          <button
            onClick={onCancel}
            className='min-w-[120px] rounded-full border border-[#1C1C1E1F] px-6 py-2 font-medium text-black'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='min-w-[120px] rounded-full bg-[#FF5630] px-6 py-2 font-medium text-white'
          >
            Yes Sure
          </button>
        </div>
      </div>
    </div>
  );
};

export default BanModal;
