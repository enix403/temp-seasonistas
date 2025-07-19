import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton
} from "@mui/material";
import defaultCoverImage from "@/assets/real/blank-cover.png";
import defaultProfileImage from "@/assets/real/blank-pfp.png";
import StatusModal from "./modals/StatusModal";
import ProfilePictureModal from "./modals/ProfilePictureModal";
import CoverPictureModal from "./modals/CoverPictureModal";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { CameraIcon } from "lucide-react";

const ProfileBarCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [pictureModalOpen, setPictureModalOpen] = useState(false);
  const [coverModalOpen, setCoverModalOpen] = useState(false);
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
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 180,
            backgroundColor: "#E5E7EB",
            cursor: "pointer",
            "&:hover .overlay": {
              opacity: 1
            }
          }}
          onClick={() => setCoverModalOpen(true)}
        >
          <img
            src={user?.coverPictureUrl || defaultCoverImage.src}
            alt='Profile Banner'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          {/* Hover Overlay */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.2s"
            }}
          >
            <IconButton
              size="small"
              sx={{ color: "white" }}
            >
              <CameraIcon />
            </IconButton>
          </Box>
        </Box>
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
        {/* Profile Picture with Upload Overlay */}
        <Box
          sx={{
            position: "relative",
            cursor: "pointer",
            "&:hover .overlay": {
              opacity: 1
            },
            width: 110,
            height: 110,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            backgroundColor: "#E5E7EB"
          }}
          onClick={() => setPictureModalOpen(true)}
        >
          <img
            alt={user?.fullName || 'Profile Picture'}
            src={user?.profilePictureUrl || defaultProfileImage.src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          {/* Hover Overlay */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.2s"
            }}
          >
            <IconButton
              size="small"
              sx={{ color: "white" }}
            >
              <CameraIcon />
            </IconButton>
          </Box>
        </Box>

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
          <Typography fontSize={18}>0 Follower</Typography>
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
          onClick={() => setStatusModalOpen(true)}
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
      <StatusModal open={statusModalOpen} onClose={() => setStatusModalOpen(false)} />
      <ProfilePictureModal open={pictureModalOpen} onClose={() => setPictureModalOpen(false)} />
      <CoverPictureModal open={coverModalOpen} onClose={() => setCoverModalOpen(false)} />
    </Box>
  );
};

export default ProfileBarCard;
