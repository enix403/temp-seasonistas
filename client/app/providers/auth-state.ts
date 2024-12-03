import { getDefaultStore, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type AuthStateData = {
  token: string;
  userRole: "admin" | "employer" | "employee";
};

const PERSISTANT_STORE_NAME = "authStateData-v1";

const stateAtom = atomWithStorage<AuthStateData | null>(
  PERSISTANT_STORE_NAME,
  null
);

export function getAuthState() {
  const store = getDefaultStore();
  let stateData = store.get(stateAtom);

  if (stateData == null) {
    let rawDataJson = localStorage.getItem(PERSISTANT_STORE_NAME);
    if (rawDataJson) {
      try {
        const parsed = JSON.parse(rawDataJson);
        if ("token" in parsed && "userRole" in parsed) {
          stateData = {
            token: parsed["token"],
            userRole: parsed["userRole"],
          };
        }
      } catch {
        stateData = null;
      }
    }
  }

  function login(token: string, user: any) {
    store.set(stateAtom, {
      token,
      userRole: user.role as any,
    });
  }

  function logout() {
    store.set(stateAtom, null);
  }

  return {
    login,
    logout,
    isLoggedIn: Boolean(stateData?.token),
    token: stateData?.token,
    userRole: stateData?.userRole,
  };
}

export function useAuthState() {
  const [stateData, setStateData] = useAtom(stateAtom);

  function login(token: string, user: any) {
    setStateData({
      token,
      userRole: user.role as any,
    });
  }

  function logout() {
    setStateData(null);
  }

  return {
    login,
    logout,
    isLoggedIn: Boolean(stateData?.token),
    token: stateData?.token,
    userRole: stateData?.userRole,
  };
}

// Temporary
export function useViewMode() {
  const { userRole } = useAuthState();
  return userRole ?? "employee";
}

if (typeof window !== "undefined") {
  (window as any).getAuthState = getAuthState;
}
