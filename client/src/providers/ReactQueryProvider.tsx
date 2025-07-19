"use client";

import type { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryDelay: failureCount =>
        Math.min(Math.pow(2, failureCount) * 1000, 24000),
      retry: 3,
      networkMode: "always",
      staleTime: Infinity
    }
  }
});

if (typeof window !== "undefined") {
  (window as any).queryClient = queryClient;
}

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  );
};
