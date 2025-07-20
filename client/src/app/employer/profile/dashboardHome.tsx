"use client";

import { Grid } from "@mui/material";

import ProfileBarCard from "@/app/employee/profile/topProfilebar";
import GraphCard from "./graphCards";
import BasicInfoCard from "@/app/employee/profile/basicInfoCard";
import AboutUsCard from "@/app/employee/profile/aboutUsCard";
import RightBarCards from "./rightBarCards";
import AllJobs from "./AllJobsCard";
import AllPeople from "./AllPeople";
import LocationCard from "./LocationCard";

interface DashboardHomeProps {
  notEditable?: boolean;
}

export default function DashboardHome({ notEditable }: DashboardHomeProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 8.5 }}>
          <ProfileBarCard profileTitleKey='companyName' />
          <GraphCard />
          <AboutUsCard />
          <BasicInfoCard />
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
