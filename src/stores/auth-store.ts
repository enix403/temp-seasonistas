import { getDefaultStore, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import { atom } from "jotai";

export type AuthState = {
  token: string;
  userId: string;
  userRole: string;
};

const PERSISTANT_STORE_NAME = "authStateData";

export const stateAtom = atomWithStorage<AuthState>(
  PERSISTANT_STORE_NAME,
  {
    token: "",
    userId: "",
    userRole: ""
  },
  undefined,
  { getOnInit: true }
);

if (typeof window !== "undefined") {
  (window as any).defStore = getDefaultStore();
  (window as any).stateAtom = stateAtom;
}

export function getAuthState() {
  const store = getDefaultStore();
  return store.get(stateAtom);
}

export function useAuthState() {
  return useAtomValue(stateAtom);
}

export function useSetAuthState() {
  return useSetAtom(stateAtom);
}

export function useClearAuthState() {
  const setState = useSetAtom(stateAtom);
  return () => setState(RESET);
}

interface SignUpBasicInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

interface SignUpEmployeeInfo {
  phone: string;
  location: string;
  description: string;
  jobCategories: string[];
}

interface SignUpEmployerInfo {
  companyName: string;
  personName: string;
  companyIndustry: string;
  companyAddress: string;
  companyPhone: string;
}

interface SignUpState {
  basicInfo: SignUpBasicInfo | null;
  employeeInfo: SignUpEmployeeInfo | null;
  employerInfo: SignUpEmployerInfo | null;
}

const signUpAtom = atom<SignUpState>({
  basicInfo: null,
  employeeInfo: null,
  employerInfo: null
});

export function useSignUpStore() {
  const store = getDefaultStore();
  const setState = useSetAtom(signUpAtom);
  const state = useAtomValue(signUpAtom);

  return {
    ...state,
    setBasicInfo: (info: SignUpBasicInfo) =>
      setState(prev => ({ ...prev, basicInfo: info })),
    setEmployeeInfo: (info: SignUpEmployeeInfo) =>
      setState(prev => ({ ...prev, employeeInfo: info })),
    setEmployerInfo: (info: SignUpEmployerInfo) =>
      setState(prev => ({ ...prev, employerInfo: info })),
    clearSignUpData: () =>
      setState({ basicInfo: null, employeeInfo: null, employerInfo: null })
  };
}
