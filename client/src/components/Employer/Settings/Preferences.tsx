'use client'
import React from 'react'

import { useForm } from 'react-hook-form'

type FormValues = {
    currency: 'EUR' | 'USD'
    rateType: 'month' | 'week' | 'day'
}

export default function Preferences() {
    const { register, handleSubmit, watch } = useForm<FormValues>({
        defaultValues: {
            currency: 'EUR',
            rateType: 'month',
        }
    })

    const onSubmit = (data: FormValues) => {
        console.log('Submitted:', data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-lg w-1/3">
            {/* Currency Select */}
            <div>
                <label className="block mb-1 font-medium">Currency</label>
                <select {...register('currency')} className="border px-2 py-2 rounded w-full">
                    <option value="EUR">€ Euro</option>
                    <option value="USD">$ Dollar</option>
                </select>
            </div>

            {/* Rate Type Select */}
            <div>
                <label className="block mb-1 font-medium">Rate Type</label>
                <select {...register('rateType')} className="border px-2 py-2 rounded w-full">
                    <option value="month">Per Month</option>
                    <option value="week">Per Week</option>
                    <option value="day">Per Day</option>
                </select>
            </div>

            <button className="px-6 py-2 text-sm font-semibold bg-[#559093] text-white rounded-full w-max">
                Save
            </button>
        </form>
    )
}

