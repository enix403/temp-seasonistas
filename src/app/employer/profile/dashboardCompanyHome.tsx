"use client";
import React, { useState } from "react";
import {
  Box,
  Avatar,
  Button,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Grid,
  IconButton,
  Card,
  CardContent
} from "@mui/material";
import cardImage from "@/assets/card_image.png";
import Image from "next/image";
import { Divider } from "@mui/material";
import barGraph from "@/assets/barGraph.png"; // Your green bar graph icon
import arrowUp from "@/assets/arrowUp.png";

import ProfileSectionCard from "./profileSectionCard";
import ProfileBarCard from "./topProfilebar";
import PercentageCard from "./profilePercentageCard";
import GraphCard from "./graphCards";
import BasicInfoCard from "./basicInfoCard";
import AboutUsCard from "./aboutUsCard";
import RightBarCards from "./rightBarCards";
import EducationCard from "./educationCard";
import ExperienceCard from "./experienceCard";
import AllJobs from "./AllJobsCard";
import AllPeople from "./AllPeople";
import LocationCard from "./LocationCard";
import AllJobsGrid from "./AllJobsGrid";
import AllJobPeopleGrid from "./AllJobPeopleGrid";
interface DashboardCompanyHomeProps {
  notEditable?: boolean;
}
export default function DashboardCompanyHomeProps({
  notEditable
}: DashboardCompanyHomeProps) {
  const [selectedView, setSelectedView] = useState<string>("home");
  const renderContent = () => {
    switch (selectedView) {
      case "home":
        return (
          <>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 12, lg: 8.5 }}>
                <ProfileBarCard notEditable={notEditable} type={"company"} />

                {/* <PercentageCard /> */}

                <GraphCard />
                <BasicInfoCard notEditable={notEditable} type={"company"} />
                <AboutUsCard notEditable={notEditable} type={"overview"} />
                <AllJobs changeView={setSelectedView} />
                <AllPeople changeView={setSelectedView} />
                <LocationCard notEditable={notEditable} />
              </Grid>
              <Grid size={{ xs: 12, lg: 3.5 }}>
                <RightBarCards />
              </Grid>
            </Grid>
          </>
        );
      case "job":
        return (
          <>
            <AllJobsGrid changeView={setSelectedView} />
          </>
        );
      case "people":
        return <AllJobPeopleGrid changeView={setSelectedView} />;

      default:
        return <Typography>Select a view</Typography>;
    }
  };

  return <>{renderContent()}</>;
}
