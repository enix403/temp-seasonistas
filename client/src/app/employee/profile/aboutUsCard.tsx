import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import AddAboutModal from "./modals/AddAboutModal";
import { useUser } from "@/hooks/useCurrentUser";

const AboutUsCard = ({
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
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        backgroundColor: "#fff"
      }}
    >
      <CardContent>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={1}
        >
          <Typography variant='h6' fontWeight={600}>
            About
          </Typography>
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
              Edit About
            </Button>
          )}
        </Box>

        <Typography variant='body2' sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Edit About to increase the chance of hiring
        </Typography>
        <Typography variant='body2' sx={{ fontSize: 14.5, color: "#333" }}>
          {user.bio || "Add a bio to tell employers about yourself"}{" "}
          {user.bio && user.bio.length > 150 && (
            <Typography
              component='span'
              sx={{ color: "#0073e6", fontWeight: 500, cursor: "pointer" }}
            >
              see more
            </Typography>
          )}
        </Typography>
      </CardContent>

      {editable && (
        <AddAboutModal
          userId={userId}
          open={open}
          onClose={() => setOpen(false)}
          savedData={user.bio || ""}
        />
      )}
    </Card>
  );
};

export default AboutUsCard;
