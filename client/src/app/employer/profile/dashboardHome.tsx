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
interface DashboardHomeProps {
  notEditable?: boolean;
}
export default function DashboardHome({ notEditable }: DashboardHomeProps) {
  const skills = [
    { title: "UX Design", level: "Expert" },
    { title: "UI Design", level: "Expert" },
    { title: "User Research", level: "Expert" },
    { title: "Design System", level: "Expert" }
  ];

  const interests = [
    { title: "Technology" },
    { title: "Sports & Fitness" },
    { title: "Law & Ethics" },
    { title: "Public Speaking" }
  ];

  const goals = [
    { title: "Become a senior analyst" },
    { title: "Launch my own startup" },
    { title: "Get a remote tech job" },
    { title: "Improve leadership skills" }
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 8.5 }}>
          <ProfileBarCard notEditable={notEditable} type={"company"} />

          <GraphCard />

          <AboutUsCard notEditable={notEditable} type={"company"} />
          <BasicInfoCard notEditable={notEditable} type={"company"} />

          <AllJobs />
          <AllPeople />
          <LocationCard notEditable={notEditable} />
        </Grid>
        <Grid size={{ xs: 12, lg: 3.5 }}>
          <RightBarCards />
        </Grid>
      </Grid>
    </>
  );
}
