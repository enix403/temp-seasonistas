"use client";

import { useState } from "react";
import UserCard from "~/components/Employee/Community/UserCard";
import avatar from "~/app/assets/employer/dashboard/applicant2.png";
import companyLogo from "~/app/assets/employer/community/companyLogo.png";
import { FiSearch } from "react-icons/fi";
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
    name: "Sara Khan",
    role: "Frontend Developer",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    email: "user@example.com",
    phone: "+92 3XX XXXXXXX",
    isCompany: false
  },
  {
    name: "John Lee",
    role: "Backend Engineer",
    status: "Open to work",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Node.js", "Express", "MongoDB"],
    email: "john@example.com",
    phone: "+1 4XX XXX XXXX",
    isCompany: false
  },
  {
    name: "Linear company",
    role: "Telecommunications",
    status: "Open to Jobs",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Figma", "UI/UX Designer", "Product Designer"],
    email: "company@example.com",
    phone: "+92 3XX XXXXXXX",
    location: "Lahore, Pakistan",
    website: "linear.com",
    isCompany: true
  },
  {
    name: "DevSpark Ltd",
    role: "Software Solutions",
    status: "Open to Jobs",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["JavaScript", "React", "Node.js"],
    email: "hr@devspark.com",
    phone: "+44 7XX XXX XXXX",
    location: "London, UK",
    website: "devspark.io",
    isCompany: true
  },
  {
    name: "CreativeHive",
    role: "Design Agency",
    status: "Open to Jobs",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to craft intuitive, centered designs for our digital platforms. You will be responsible for transforming.",
    skills: ["Photoshop", "After Effects", "Illustrator"],
    email: "contact@creativehive.com",
    phone: "+61 4XX XXX XXX",
    location: "Sydney, Australia",
    website: "creativehive.au",
    isCompany: true
  }
];

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredUsers = dummyUsers.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skills.some(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Design" && user.skills.includes("Figma")) ||
      (selectedCategory === "Development" && user.skills.includes("React"));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className='mb-4 space-y-6 rounded-[16px] sm:bg-white sm:p-6'>
      {/* Search + Category Filter */}
      <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
        <div className='relative w-full md:w-4/5'>
          <input
            type='text'
            placeholder='Job title keywords or company'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-full rounded-full border border-gray-300 py-4 pr-4 pl-10 text-sm'
          />
          <FiSearch className='absolute top-1/2 left-4 -translate-y-1/2 text-base text-gray-500' />
        </div>

        <div className='relative w-full md:w-1/5'>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className='w-full appearance-none rounded-full border border-gray-300 px-4 py-4 pr-10 text-sm'
          >
            <option value='All'>All Categories</option>
            <option value='Design'>Design</option>
            <option value='Development'>Development</option>
          </select>
          <IoIosArrowDown className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500' />
        </div>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'>
        {filteredUsers.map((user, i) => (
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
