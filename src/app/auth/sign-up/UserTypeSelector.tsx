import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserType } from "../common/UserType";

interface UserTypeCardProps {
  type: UserType;
  title: string;
  description: string;
  details: string;
  isSelected: boolean;
  onSelect: () => void;
}

function UserTypeCard({
  type,
  title,
  description,
  details,
  isSelected,
  onSelect
}: UserTypeCardProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex-1 rounded-3xl p-6 text-left transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none",
        isSelected
          ? "bg-primary text-white focus:ring-teal-500"
          : "bg-[#ECF2F9] text-gray-800 hover:bg-gray-200 focus:ring-gray-400"
      )}
    >
      <div className='flex flex-col items-start'>
        <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white'>
          <User className={isSelected ? "text-[#5a9b94]" : "text-gray-800"} />
        </div>
        <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
        <p className='mb-3'>{description}</p>
        <p className='text-sm opacity-90'>{details}</p>
      </div>
    </button>
  );
}

interface UserTypeSelectorProps {
  onSelect: (type: UserType) => void;
  selectedType: UserType;
}

export function UserTypeSelector({
  onSelect,
  selectedType
}: UserTypeSelectorProps) {
  const options = [
    {
      type: "employer" as UserType,
      title: "Sign Up a Employer",
      description: "Find the right people for your team.",
      details:
        "Create your company profile, post job openings, and connect with qualified seasonal employees."
    },
    {
      type: "employee" as UserType,
      title: "Sign Up a Candidate",
      description: "Discover your next seasonal opportunity.",
      details:
        "Create your profile, explore job listings, and apply to positions that match your skills."
    }
  ];

  return (
    <div className='mx-auto flex w-full max-w-3xl flex-col gap-4 sm:flex-row md:flex-col xl:flex-row'>
      {options.map(option => (
        <UserTypeCard
          key={option.type}
          type={option.type}
          title={option.title}
          description={option.description}
          details={option.details}
          isSelected={selectedType === option.type}
          onSelect={() => onSelect(option.type)}
        />
      ))}
    </div>
  );
}
