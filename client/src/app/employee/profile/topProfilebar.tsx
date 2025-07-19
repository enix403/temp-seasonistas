import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";
import Image from "next/image";
import cardImage from "@/assets/card_image.png";
import profileImage1 from "@/assets/Ellipse 4149.png";
import StatusModal from "./modals/StatusModal";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ProfileBarCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const { user } = useCurrentUser();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "white",
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      {/* Header Image Banner */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={cardImage}
          alt='Profile Banner'
          style={{ width: "100%", height: "180px", objectFit: "contain" }}
          priority
        />
      </Box>

      {/* Profile Section */}
      <Box
        sx={{
          px: 3,
          py: 2,
          display: "flex",
          alignItems: "center",
          gap: 2
        }}
      >
        <Image
          alt={user?.fullName || 'Profile Picture'}
          src={profileImage1}
          style={{
            width: 110,
            height: 110,
            zIndex: 1,
            marginTop: -70
          }}
        />
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant='h5' fontWeight='bold'>
                {user?.fullName || "Loading..."}
              </Typography>
              <Chip
                label='#EMP001'
                size='small'
                variant='filled'
                sx={{ ml: "10px", bgcolor: "#f5f5f5" }}
              />
            </Box>
            <Typography
              sx={{ color: "gray", fontWeight: "500", fontSize: "14px" }}
            >
              {user?.bio || "No bio added"}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            textAlign: "right",
            color: "#559093"
          }}
        >
          <Typography fontSize={18}>451 Follower</Typography>
        </Box>
      </Box>

      <Divider sx={{ m: "0px 10px 10px 10px", borderColor: "#e0e0e0" }} />
      {/* Footer Actions */}
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        sx={{
          m: isMobile ? "16px" : "18px 28px",
          alignItems: isMobile ? "stretch" : "center"
        }}
      >
        {user?.isLookingForJob && (
          <Badge
            className={clsx(
              "bg-[#4e8c8a] px-3 py-1 text-white hover:bg-[#4e8c8a] text-lg",
              isMobile && "w-full"
            )}
          >
            Open to work
          </Badge>
        )}

        {/* Add Profile Section */}
        <Button
          variant='outlined'
          fullWidth={isMobile}
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            fontSize: isMobile ? "0.9rem" : "1rem",
            borderColor: "#ddd",
            color: "#000",
            "&:hover": {
              borderColor: "#bbb"
            }
          }}
        >
          Add Profile Section
        </Button>

        {/* Status */}
        <Button
          variant='outlined'
          fullWidth={isMobile}
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 500,
            px: 3,
            fontSize: isMobile ? "0.9rem" : "1rem",
            borderColor: "#ddd",
            color: "#000",
            cursor: "pointer",
            "&:hover": {
              borderColor: "#bbb"
            }
          }}
        >
          Status
        </Button>

        {/* More */}
        <Button
          variant='outlined'
          fullWidth={isMobile}
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 500,
            px: 3,
            fontSize: isMobile ? "0.9rem" : "1rem",
            borderColor: "#eee",
            color: "#000",
            "&:hover": {
              borderColor: "#ccc"
            }
          }}
        >
          More
        </Button>
      </Stack>
      <StatusModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default ProfileBarCard;
