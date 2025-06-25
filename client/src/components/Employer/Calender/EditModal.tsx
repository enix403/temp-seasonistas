'use client'

import { useForm } from 'react-hook-form'

type EditFormValues = {
    jobRole: string
    date: string
    time: string
    location: string
}

const EditModal = ({
    onClose,
    onConfirm,
}: {
    onClose: () => void
    onConfirm: (data: EditFormValues) => void
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditFormValues>()

    const onSubmit = (data: EditFormValues) => {
        onConfirm(data)
    }

    return (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white px-6 py-6 rounded-2xl w-full max-w-sm mx-4 sm:mx-0 text-left space-y-6">
                <h2 className="text-[16px] font-semibold text-[#1C1C1E]">Edit Job Details</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Job Role</label>
                        <input
                            {...register('jobRole', { required: 'Job role is required' })}
                            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter job role"
                        />
                        {errors.jobRole && <p className="text-red-500 text-xs mt-1">{errors.jobRole.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            {...register('date', { required: 'Date is required' })}
                            className="w-full border rounded-md px-3 py-2 text-sm"
                        />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Time</label>
                        <input
                            type="time"
                            {...register('time', { required: 'Time is required' })}
                            className="w-full border rounded-md px-3 py-2 text-sm"
                        />
                        {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Location</label>
                        <input
                            {...register('location', { required: 'Location is required' })}
                            className="w-full border rounded-md px-3 py-2 text-sm"
                            placeholder="Enter location"
                        />
                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-[10px] text-sm rounded-full border border-[#E0E0E0] text-[#1C1C1E]"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-[10px] text-sm rounded-full bg-[#3B82F6] text-white font-medium"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditModal
