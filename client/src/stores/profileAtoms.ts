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