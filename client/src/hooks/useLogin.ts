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

    // Redirect based on role
    if (user.role === "employer") {
      router.replace("/employer/profile");
    } else if (user.role === "employee") {
      router.replace("/employee/profile");
    } else {
      // Default to employee for any other role
      router.replace("/employee/profile");
    }
  }, [router, setAuthState]);
}