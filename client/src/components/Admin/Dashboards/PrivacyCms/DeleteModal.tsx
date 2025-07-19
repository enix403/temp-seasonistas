type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteModal = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <div className='w-[90%] max-w-md rounded-2xl bg-white p-10 text-center'>
        <h3 className='mb-2 text-left text-lg font-semibold text-[#1E1E1E]'>
          Delete
        </h3>
        <p className='mb-6 text-left text-sm text-[#637381]'>
          Are You Sure want to Delete FAQ?
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
            Yes Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
