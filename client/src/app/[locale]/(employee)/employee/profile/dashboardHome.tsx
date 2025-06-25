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
  CardContent,
} from "@mui/material";
import cardImage from "~/app/assets/card_image.png";
import Image from "next/image";
import { Divider } from "@mui/material";
import barGraph from "~/app/assets/barGraph.png"; // Your green bar graph icon
import arrowUp from "~/app/assets/arrowUp.png";

import ProfileSectionCard from "./profileSectionCard";
import ProfileBarCard from "./topProfilebar";
import PercentageCard from "./profilePercentageCard";
import GraphCard from "./graphCards";
import BasicInfoCard from "./basicInfoCard";
import AboutUsCard from "./aboutUsCard";
import RightBarCards from "./rightBarCards";
import EducationCard from "./educationCard";
import ExperienceCard from "./experienceCard";

interface DashboardHomeProps {
  notEditable?: boolean
}
export default function DashboardHome({ notEditable }: DashboardHomeProps) {

  const skills = [
    { title: "UX Design", level: "Expert" },
    { title: "UI Design", level: "Expert" },
    { title: "User Research", level: "Expert" },
    { title: "Design System", level: "Expert" },
  ];

  const interests = [
    { title: "Technology" },
    { title: "Sports & Fitness" },
    { title: "Law & Ethics" },
    { title: "Public Speaking" },
  ];

  const goals = [
    { title: "Become a senior analyst" },
    { title: "Launch my own startup" },
    { title: "Get a remote tech job" },
    { title: "Improve leadership skills" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 8.5 }}>
          <ProfileBarCard notEditable={notEditable} type={"individual"} />

          {!notEditable && <PercentageCard />}

          <GraphCard />

          <BasicInfoCard notEditable={notEditable} type={"individual"} />

          <AboutUsCard notEditable={notEditable} type={"about"} />
          <EducationCard notEditable={notEditable} />
          <ExperienceCard notEditable={notEditable} />

          <ProfileSectionCard notEditable={notEditable}
            title="Skills"
            description="Add skills to increase the chance of hiring"
            addText="Add Skill"
            data={skills}
            type={"skill"}
            footerText="Show More Skill"
          />
          <ProfileSectionCard notEditable={notEditable}
            title="Interests"
            description="Add your interests to let employers understand your passion areas"
            addText="Add Interests"
            data={interests}
            type={"interest"}
            footerText="Show More Interests"
          />
          <ProfileSectionCard
            notEditable={notEditable}
            title="Goals"
            description="Mention your career goals to help employers align with your ambitions"
            addText="Add Goals"
            data={goals}
            type={"goal"}
            footerText="Show More Goals"
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 3.5 }}>
          <RightBarCards />
        </Grid>
      </Grid>
    </>
  );
}
