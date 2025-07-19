import { useSetAuthState } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useLogin() {
  const setAuthState = useSetAuthState();
  const router = useRouter();

  return useCallback((user, accessToken) => {
    // TODO: should validate user ?
    setAuthState({
      token: accessToken,
      userId: user["_id"],
      userRole: user["role"]
    });
    router.replace("/employee");
  }, []);
}