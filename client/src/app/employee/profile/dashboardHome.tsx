"use client";

import { Box } from "@mui/material";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import ProfileSectionCard from "./profileSectionCard";
import ProfileBarCard from "./topProfilebar";
import PercentageCard from "./profilePercentageCard";
import GraphCard from "./graphCards";
import BasicInfoCard from "./basicInfoCard";
import AboutUsCard from "./aboutUsCard";
import RightBarCards from "./rightBarCards";
import EducationCard from "./educationCard";
import ExperienceCard from "./experienceCard";

export default function DashboardHome() {
  const { user: userData } = useCurrentUser();

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ flex: "1 1 70%" }}>
        <ProfileBarCard />
        <PercentageCard />
        <GraphCard />
        <BasicInfoCard />
        <AboutUsCard />
        <EducationCard />
        <ExperienceCard />

        <ProfileSectionCard
          title='Skills'
          description='Add skills to increase the chance of hiring'
          addText='Add Skill'
          data={userData?.skills || []}
          fieldName="skills"
          showLevel={true}
          footerText='Show More Skills'
        />
        <ProfileSectionCard
          title='Interests'
          description='Add your interests to let employers understand your passion areas'
          addText='Add Interest'
          data={userData?.interests || []}
          fieldName="interests"
          footerText='Show More Interests'
        />
        <ProfileSectionCard
          title='Goals'
          description='Mention your career goals to help employers align with your ambitions'
          addText='Add Goal'
          data={userData?.goals || []}
          fieldName="goals"
          footerText='Show More Goals'
        />
      </Box>
      <Box sx={{ flex: "1 1 30%" }}>
        <RightBarCards />
      </Box>
    </Box>
  );
}
