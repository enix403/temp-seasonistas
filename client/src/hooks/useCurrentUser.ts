import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRoutes } from "@/lib/api-routes";
import { useAuthState } from "@/stores/auth-store";
import { useMemo } from "react";

const CURRENT_USER_ID = "__current__";

export function useUser(userId: string = CURRENT_USER_ID) {
  const { token } = useAuthState();
  const queryClient = useQueryClient();

  const queryKey = ["users", userId];

  const queryFn = useMemo(
    () =>
      userId === CURRENT_USER_ID
        ? token
          ? apiRoutes.getMe
          : skipToken
        : () => apiRoutes.getUser(userId),
    [userId]
  );

  const { data: user, ...rest } = useQuery({
    queryKey: queryKey,
    queryFn,
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
