import React, { useState } from "react";
import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import EditProfileModal from "./modals/EditProfileModal";
import { useCurrentUser, useUser } from "@/hooks/useCurrentUser";

// Helper function to capitalize first letter
const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const BasicInfoCard = ({
  userId,
  editable = false
}: {
  userId?: string;
  editable?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const { user } = useUser(userId);

  if (!user) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        p: 4,
        maxWidth: "100%",
        m: "20px 0px"
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mb={3}
      >
        <Box>
          <Typography variant='h6' fontWeight='bold'>
            Basic Information
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Update profile information
          </Typography>
        </Box>

        {editable && (
          <Button
            variant='outlined'
            size='small'
            onClick={() => setOpen(true)}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 550,
              borderColor: "#EBECF0",
              color: "#000000",
              fontSize: "0.875rem",
              px: 3,
              py: 0.8
            }}
          >
            Edit Detail
          </Button>
        )}
      </Stack>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Email Address
          </Typography>
          <Typography fontWeight='bold'>{user.email}</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Gender
          </Typography>
          <Typography fontWeight='bold'>
            {user.gender ? capitalizeFirstLetter(user.gender) : "Not specified"}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Phone Number
          </Typography>
          <Typography fontWeight='bold'>
            {user.phoneCountryCode && user.phoneNumber
              ? `${user.phoneCountryCode} ${user.phoneNumber}`
              : "Not specified"}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Location
          </Typography>
          <Typography fontWeight='bold'>
            {user.addressCity && user.addressCountry
              ? `${user.addressCity}, ${user.addressCountry}`
              : "Not specified"}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Website
          </Typography>
          <Typography fontWeight='bold'>
            {user.website || "Not specified"}
          </Typography>
        </Grid>
      </Grid>

      {editable && (
        <EditProfileModal
          open={open}
          onClose={() => setOpen(false)}
          userId={userId}
          initialData={{
            email: user.email,
            gender: user.gender,
            phoneCountryCode: user.phoneCountryCode,
            phoneNumber: user.phoneNumber,
            addressCity: user.addressCity,
            addressCountry: user.addressCountry,
            website: user.website
          }}
        />
      )}
    </Box>
  );
};

export default BasicInfoCard;
