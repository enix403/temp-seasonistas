"use client";

import { Box } from "@mui/material";
import DashboardHome from "./dashboardHome";

export default function Dashboard() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "#f9f9f9",
        minHeight: "100vh"
      }}
    >
      <DashboardHome />
    </Box>
  );
}
