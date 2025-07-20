import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRoutes } from "@/lib/api-routes";
import { useAuthState } from "@/stores/auth-store";

const CURRENT_USER_ID = "__current__";

export function useUser(userId: string = CURRENT_USER_ID) {
  const { token } = useAuthState();
  const queryClient = useQueryClient();

  const queryKey = ["users", userId];

  const { data: user, ...rest } = useQuery({
    queryKey: queryKey,
    queryFn: token ? apiRoutes.getMe : skipToken,
    staleTime: 0 // Allow refetching immediately when invalidated
  });

  const refreshUser = async () => {
    await queryClient.invalidateQueries({ queryKey: queryKey });
  };

  return { user, refreshUser, ...rest };
}

export function useCurrentUser() {
  return useUser(CURRENT_USER_ID);
}
