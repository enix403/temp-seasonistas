"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DashboardHome from "../../profile/dashboardHome";
import DashboardCompanyHome from "../../profile/dashboardCompanyHome";

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState("Home");
  const notEditable = true;
  const renderContent = () => {
    switch (selectedView) {
      case "Home":
        return <DashboardHome notEditable={notEditable} />;
      case "Company(D)":
        return <DashboardCompanyHome notEditable={notEditable} />;
      case "Community":
        return <Typography>✉️ Compose or view sent emails here</Typography>;
      case "Calendar":
        return <Typography>📝 Manage your drafts here</Typography>;
      case "Settings":
        return <Typography>⚙️ Settings coming soon</Typography>;
      case "Logout":
        return <Typography>🔒 Logging out...</Typography>;
      default:
        return <Typography>Select a view</Typography>;
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "#f9f9f9",
        minHeight: "100vh"
      }}
    >
      {renderContent()}
    </Box>
  );
}
