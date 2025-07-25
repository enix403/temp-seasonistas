import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import cardImage from "@/assets/card_image.png";
import barGraph from "@/assets/barGraph.png"; // Your green bar graph icon
import arrowUp from "@/assets/arrowUp.png";
const GraphCard = () => {
  return (
    <Box sx={{ width: "100%", m: "20px 0px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              borderRadius: 2,
              p: 2.5,
              backgroundColor: "#fff",
              maxWidth: "100%"
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
            >
              {/* Left Side */}
              <Box>
                <Typography
                  variant='body2'
                  fontWeight={550}
                  color='#333'
                  mb={0.5}
                >
                  Profile Viewers
                </Typography>
                <Typography variant='h4' fontWeight={700}>
                  120
                </Typography>
              </Box>

              {/* Right Side Image */}
              <Box sx={{ width: 50, height: 50, mt: "20px" }}>
                <Image
                  src={barGraph}
                  alt='Bar Chart'
                  layout='responsive'
                  objectFit='contain'
                />
              </Box>
            </Stack>

            {/* Bottom Stats Row */}
            <Stack direction='row' alignItems='center' spacing={1} mt={1.5}>
              <Box sx={{ width: 18, height: 18 }}>
                <Image
                  src={arrowUp}
                  alt='Up Arrow'
                  layout='responsive'
                  objectFit='contain'
                />
              </Box>
              <Typography variant='body2' color='green' fontWeight={600}>
                +2.6%
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                last 30 days
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              borderRadius: 2,
              p: 2.5,
              backgroundColor: "#fff",
              maxWidth: "100%"
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-start'
            >
              {/* Left Side */}
              <Box>
                <Typography
                  variant='body2'
                  fontWeight={550}
                  color='#333'
                  mb={0.5}
                >
                  Search Appearance
                </Typography>
                <Typography variant='h4' fontWeight={700}>
                  200
                </Typography>
              </Box>

              {/* Right Side Image */}
              <Box sx={{ width: 50, height: 50, mt: "20px" }}>
                <Image
                  src={barGraph}
                  alt='Bar Chart'
                  layout='responsive'
                  objectFit='contain'
                />
              </Box>
            </Stack>

            {/* Bottom Stats Row */}
            <Stack direction='row' alignItems='center' spacing={1} mt={1.5}>
              <Box sx={{ width: 18, height: 18 }}>
                <Image
                  src={arrowUp}
                  alt='Up Arrow'
                  layout='responsive'
                  objectFit='contain'
                />
              </Box>
              <Typography variant='body2' color='green' fontWeight={600}>
                +0.2%
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                last 30 days
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphCard;
