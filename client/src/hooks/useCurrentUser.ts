import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRoutes } from "@/lib/api-routes";
import { useAuthState } from "@/stores/auth-store";

export const USER_QUERY_KEY = ["user"] as const;

export function useCurrentUser() {
  const { token } = useAuthState();
  const queryClient = useQueryClient();

  const { data: user, ...rest } = useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: token ? apiRoutes.getMe : skipToken,
    staleTime: 0 // Allow refetching immediately when invalidated
  });

  const refreshUser = async () => {
    await queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });
  };

  return { user, refreshUser, ...rest };
}