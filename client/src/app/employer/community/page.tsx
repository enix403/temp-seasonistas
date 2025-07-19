"use client";

import UserCard from "~/components/Employer/Community/UserCard";
import avatar from "~/app/assets/employer/dashboard/applicant2.png";
import companyLogo from "~/app/assets/employer/community/companyLogo.png";
import { IoIosArrowDown } from "react-icons/io";

const dummyUsers = [
  {
    name: "Ali Haider",
    role: "UI/UX Designer",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    isCompany: false
  },
  {
    name: "Ali Haider",
    role: "UI/UX Designer",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    isCompany: false
  },
  {
    name: "Ali Haider",
    role: "UI/UX Designer",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    isCompany: false
  },
  {
    name: "Linear company",
    role: "Telecommunications",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "UI/UX Designer", "Product Designer"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    location: "user@example.com",
    website: "@example.com",
    isCompany: true
  },
  {
    name: "Linear company",
    role: "Telecommunications",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "UI/UX Designer", "Product Designer"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    location: "user@example.com",
    website: "@example.com",
    isCompany: true
  },
  {
    name: "Linear company",
    role: "Telecommunications",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "UI/UX Designer", "Product Designer"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    location: "user@example.com",
    website: "@example.com",
    isCompany: true
  }
];

const CommunityPage = () => {
  const allCards = [...dummyUsers];

  return (
    <div className='mb-4 space-y-6 rounded-[16px] bg-white px-2 py-6 sm:px-6'>
      {/* Header */}
      <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
        {/* Input */}
        <input
          type='text'
          placeholder='Job title keywords or company'
          className='flex-1 rounded-full border border-gray-300 px-4 py-4 text-sm placeholder:text-gray-400'
        />

        {/* Select with Icon */}
        <div className='relative flex-1 md:max-w-[200px]'>
          <select className='w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-4 text-sm placeholder:text-gray-400'>
            <option>All Categories</option>
            <option>Design</option>
            <option>Development</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400' />
        </div>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'>
        {allCards.map((user, i) => (
          <UserCard
            key={i}
            avatar={avatar}
            companyLogo={companyLogo}
            name={user.name}
            role={user.role}
            status={user.status as any}
            description={user.description}
            skills={user.skills}
            email={user.email}
            phone={user.phone}
            location={user.location}
            website={user.website}
            isCompany={user.isCompany}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
