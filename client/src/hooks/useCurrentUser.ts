import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRoutes } from "@/lib/api-routes";
import { useAuthState } from "@/stores/auth-store";

export function useCurrentUser() {
  const { token } = useAuthState();
  const queryClient = useQueryClient();

  const { data: user, ...rest } = useQuery({
    queryKey: ["me", token],
    queryFn: token ? apiRoutes.getMe : skipToken,
    staleTime: Infinity
  });

  const refreshUser = async () => {
    await queryClient.invalidateQueries({ queryKey: ["me", token] });
  };

  return { user, refreshUser, ...rest };
}