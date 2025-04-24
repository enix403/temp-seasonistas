"use client";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export type UserType = "employer" | "candidate";

interface UserTypeSelectorProps {
  onSelect: (type: UserType) => void;
  selectedType: UserType;
}

export function UserTypeSelector({
  onSelect,
  selectedType
}: UserTypeSelectorProps) {
  return (
    <div className='mx-auto flex w-full max-w-3xl flex-col gap-4 sm:flex-row md:flex-col xl:flex-row'>
      <button
        onClick={() => onSelect("employer")}
        className={cn(
          "flex-1 rounded-3xl p-6 text-left transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          selectedType === "employer"
            ? "bg-[#5a9b94] text-white focus:ring-teal-500"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400"
        )}
      >
        <div className='flex flex-col items-start'>
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
              selectedType === "employer" ? "bg-white" : "bg-white"
            )}
          >
            <User
              className={
                selectedType === "employer" ? "text-[#5a9b94]" : "text-gray-800"
              }
            />
          </div>
          <h3 className='mb-2 text-xl font-semibold'>Sign Up a Employer</h3>
          <p className='mb-3'>Find the right people for your team.</p>
          <p className='text-sm opacity-90'>
            Create your company profile, post job openings, and connect with
            qualified seasonal candidates.
          </p>
        </div>
      </button>

      {/* Candidate Card */}
      <button
        onClick={() => onSelect("candidate")}
        className={cn(
          "flex-1 rounded-3xl p-6 text-left transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          selectedType === "candidate"
            ? "bg-[#5a9b94] text-white focus:ring-teal-500"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400"
        )}
      >
        <div className='flex flex-col items-start'>
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
              selectedType === "candidate" ? "bg-white" : "bg-white"
            )}
          >
            <User
              className={
                selectedType === "candidate"
                  ? "text-[#5a9b94]"
                  : "text-gray-800"
              }
            />
          </div>
          <h3 className='mb-2 text-xl font-semibold'>Sign Up a Candidate</h3>
          <p className='mb-3'>Discover your next seasonal opportunity.</p>
          <p className='text-sm opacity-90'>
            Create your profile, explore job listings, and apply to positions
            that match your skills.
          </p>
        </div>
      </button>
    </div>
  );
}
