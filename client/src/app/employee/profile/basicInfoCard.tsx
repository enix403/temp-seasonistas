import React, { useState } from "react";
import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import EditProfileModal from "./modals/EditProfileModal";

type ProfileType = "individual" | "company";

const BasicInfoCard = () => {
  const [open, setOpen] = useState(false);

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
      </Stack>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Email Address
          </Typography>
          <Typography fontWeight='bold'>anamoulrouf.bd@gmail.com</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Gender
          </Typography>
          <Typography fontWeight='bold'>Male</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Phone Number
          </Typography>
          <Typography fontWeight='bold'>+8801759693045</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Location
          </Typography>
          <Typography fontWeight='bold'>Dhaka, Bangladesh</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='body2' color='text.secondary'>
            Website
          </Typography>
          <Typography fontWeight='bold'>www.anamoulrouf.com</Typography>
        </Grid>
      </Grid>

      <EditProfileModal
        type={"individual"}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default BasicInfoCard;
