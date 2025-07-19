import { skipToken, useQuery } from "@tanstack/react-query";
import { apiRoutes } from "@/lib/api-routes";
import { useAuthState } from "@/stores/auth-store";

export function useCurrentUser() {
  const { token } = useAuthState();

  const { data: user, ...rest } = useQuery({
    queryKey: ["me", token],
    queryFn: token ? apiRoutes.getMe : skipToken,
    staleTime: Infinity
  });

  return { user, ...rest };
}