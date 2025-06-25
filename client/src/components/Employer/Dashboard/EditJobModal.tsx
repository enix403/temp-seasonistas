'use client'

import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { SlCalender } from "react-icons/sl"

type JobFormState = {
    title: string
    category: string
    specialism: string
    description: string
    responsibility: string
    requirements: string
    location: string
    salary: string
    type: string
    skills: string
    deadline: string
    detail: string
    q1: string
    q2: string
    q3: string
    q4: string
    cv: File | null
}

interface EditJobModalProps {
    onClose: () => void
    initialStep?: number
    initialData?: Partial<JobFormState>
    onSave?: (data: JobFormState) => void
}

const EditJobModal = ({ onClose, initialStep = 1, initialData = {}, onSave }: EditJobModalProps) => {
    const [step, setStep] = useState(initialStep)
    const [formData, setFormData] = useState<JobFormState>({
        title: '',
        category: '',
        specialism: '',
        description: '',
        responsibility: '',
        requirements: '',
        location: '',
        salary: '',
        type: '',
        skills: '',
        deadline: '',
        detail: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        cv: null,
        ...initialData
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const requiredFields: Record<number, (keyof JobFormState)[]> = {
        1: ['title', 'category', 'description'],
        2: ['responsibility', 'requirements', 'location'],
        3: ['salary', 'type', 'skills', 'deadline'],
        4: ['q1'],
    }

    const handleSave = () => {
        const fieldsToCheck = requiredFields[step]
        const emptyField = fieldsToCheck.find((key) => {
            const value = formData[key]
            return typeof value === 'string' ? value.trim() === '' : value === null
        })

        if (emptyField) {
            alert(`Please fill in the "${emptyField}" field.`)
            return
        }

        if (onSave) {
            onSave(formData)
        }
        onClose()
    }

    const nextStep = () => {
        if (step < 4) {
            setStep(step + 1)
        } else {
            handleSave()
        }
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center">
            <div className="bg-white rounded-2xl w-[95%] max-w-xl p-8 relative max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-xl">
                    <IoClose />
                </button>

                <h2 className="text-2xl font-semibold mb-6">Edit Job</h2>

                {/* Steps */}
                <div className="flex justify-between mb-6">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`flex-1 text-center text-sm font-medium pb-1 border-b-2 cursor-pointer transition-colors ${s === step
                                ? 'text-[#F3C44D] border-[#F3C44D]'
                                : s < step
                                    ? 'text-green-600 border-green-600'
                                    : 'text-gray-400 border-gray-300'
                                }`}
                            onClick={() => setStep(s)}
                        >
                            Step {s}
                        </div>
                    ))}
                </div>

                {/* Step Forms */}
                {step === 1 && (
                    <div className="space-y-5">
                        <input
                            name="title"
                            placeholder="Job Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <input
                            name="category"
                            placeholder="Job Category"
                            value={formData.category}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <div className="relative">
                            <select
                                name="specialism"
                                value={formData.specialism}
                                onChange={handleChange}
                                className="Employer-dashboard-input appearance-none pr-10 placeholder:text-sm"
                            >
                                <option value="">Select Specialism</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="fullstack">Fullstack</option>
                                <option value="ui/ux">UI/UX</option>
                                <option value="mobile">Mobile Development</option>
                                <option value="devops">DevOps</option>
                            </select>
                            <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        <textarea
                            name="description"
                            placeholder="Job Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="Employer-dashboard-input !rounded-[18px] h-24 placeholder:text-sm resize-none"
                        />
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-5">
                        <textarea
                            name="responsibility"
                            placeholder="Responsibility"
                            value={formData.responsibility}
                            onChange={handleChange}
                            className="Employer-dashboard-input !rounded-[18px] h-24 placeholder:text-sm resize-none"
                        />
                        <textarea
                            name="requirements"
                            placeholder="Requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            className="Employer-dashboard-input !rounded-[18px] h-24 placeholder:text-sm resize-none"
                        />
                        <input
                            name="location"
                            placeholder="Enter Location"
                            value={formData.location}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-5">
                        <input
                            name="salary"
                            placeholder="Salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <input
                            name="type"
                            placeholder="Job Type (e.g. Remote, Onsite, Hybrid)"
                            value={formData.type}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <input
                            name="skills"
                            placeholder="Required Skills (comma separated)"
                            value={formData.skills}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <div className="relative">
                            <input
                                type="text"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                placeholder="Deadline to Apply"
                                className="Employer-dashboard-input pr-10 placeholder:text-sm"
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                <SlCalender />
                            </span>
                        </div>
                        <input
                            name="detail"
                            placeholder="Other Details"
                            value={formData.detail}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-5">
                        <input
                            name="q1"
                            placeholder="Question 1"
                            value={formData.q1}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <input
                            name="q2"
                            placeholder="Question 2"
                            value={formData.q2}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <input
                            name="q3"
                            placeholder="Question 3"
                            value={formData.q3}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                        <input
                            name="q4"
                            placeholder="Question 4"
                            value={formData.q4}
                            onChange={handleChange}
                            className="Employer-dashboard-input placeholder:text-sm"
                        />
                    </div>
                )}

                {/* Navigation */}
                <div className="mt-8 flex justify-between">
                    <button
                        onClick={step === 1 ? onClose : prevStep}
                        className="min-w-[100px] px-6 py-2 rounded-full text-sm border border-[#E0E0E0] text-[#1C1C1E] hover:bg-gray-50 transition-colors"
                    >
                        {step === 1 ? 'Cancel' : 'Back'}
                    </button>

                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            className="min-w-[100px] px-6 py-2 rounded-full text-sm border border-[#559092] text-[#559092] hover:bg-[#559092] hover:text-white transition-colors"
                        >
                            Save
                        </button>
                        <button
                            onClick={nextStep}
                            className="min-w-[100px] px-6 py-2 rounded-full text-sm bg-[#559092] text-white hover:bg-[#4a7f81] transition-colors"
                        >
                            {step === 4 ? 'Save & Close' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditJobModal