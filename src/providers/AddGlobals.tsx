"use client";

import { apiRoutes } from "@/lib/api-routes";
import { useEffect } from "react";

export default function AddGlobals() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).apiRoutes = apiRoutes;
    }
  }, []);
  return null;
}
