import { atom } from 'jotai';

export interface IndividualProfileData {
  email: string;
  gender: string;
  phoneNumber: string;
  location: string;
  website: string;
}

export interface CompanyProfileData {
  website: string;
  industry: string;
  companyType: string;
  companySize: string;
  headquarters: string;
  yearOfEstablishment: string;
}

export interface Education {
  id: string;
  instituteName: string;
  logoUrl: string;
  courseName: string;
  grade: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string | null;
  isCurrentlyWorking: boolean;
  description: string;
  logo: string;
  isVerified?: boolean;
}

export const individualProfileAtom = atom<IndividualProfileData>({
  email: '',
  gender: '',
  phoneNumber: '',
  location: '',
  website: '',
});

export const companyProfileAtom = atom<CompanyProfileData>({
  website: '',
  industry: '',
  companyType: '',
  companySize: '',
  headquarters: '',
  yearOfEstablishment: '',
});

export const aboutTextAtom = atom<string>(
  'I am a passionate UI/UX & Product Designer, dedicated to creating intuitive, user-friendly, and visually compelling digital experiences...'
);

export const educationsAtom = atom<Education[]>([
  {
    id: '1',
    instituteName: 'California Institute of the Arts',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/CalArts_logo.svg',
    courseName: 'UX Design Fundamentals',
    grade: 'A+',
    startYear: '2020',
    endYear: '2021',
    description: 'ShareTrip is the country\'s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...'
  }
]);

export const experiencesAtom = atom<Experience[]>([
  {
    id: '1',
    role: 'Sr. Product Designer',
    company: 'SharTrip Inc.',
    location: 'Dhaka, Bangladesh',
    employmentType: 'Full-time',
    startDate: '2022-01-01',
    endDate: null,
    isCurrentlyWorking: true,
    description: 'ShareTrip is the country\'s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/ShareTrip_Logo.png',
    isVerified: true
  },
  {
    id: '2',
    role: 'Product Designer',
    company: 'Grameenphone',
    location: 'Dhaka, Bangladesh',
    employmentType: 'Full-time',
    startDate: '2021-01-01',
    endDate: '2021-12-31',
    isCurrentlyWorking: false,
    description: 'ShareTrip is the country\'s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Grameenphone_logo.svg/1200px-Grameenphone_logo.svg.png',
    isVerified: true
  }
]);