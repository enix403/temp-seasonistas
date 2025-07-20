"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Stack,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useUser } from "@/hooks/useCurrentUser";
import { apiRoutes } from "@/lib/api-routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface StatusModalProps {
  userId?: string;
  open: boolean;
  onClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ userId, open, onClose }) => {
  const { user, updateUser } = useUser(userId);
  const queryClient = useQueryClient();
  const [isLookingForJob, setIsLookingForJob] = useState(
    user?.isLookingForJob ?? true
  );

  // Update state when modal opens/closes or user data changes
  useEffect(() => {
    if (open && user) {
      setIsLookingForJob(user.isLookingForJob);
    }
  }, [open, user]);

  // Update user profile mutation
  const updateProfile = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Status updated successfully");
      onClose();
    },
    onError: error => {
      toast.error(error.message || "Failed to update status");
    }
  });

  const handleSave = async () => {
    await updateProfile.mutateAsync({
      isLookingForJob
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "20px",
          px: 3,
          py: 2
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", pl: 0, pr: 4, pb: 1 }}>
        Status
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pl: 0, pr: 0, pt: 1 }}>
        <Stack spacing={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isLookingForJob}
                onChange={() => setIsLookingForJob(true)}
                sx={{
                  color: "#559093",
                  "&.Mui-checked": {
                    color: "#559093"
                  },
                  borderRadius: "4px"
                }}
              />
            }
            label='I am looking for a job'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!isLookingForJob}
                onChange={() => setIsLookingForJob(false)}
                sx={{
                  color: "#559093",
                  "&.Mui-checked": {
                    color: "#559093"
                  },
                  borderRadius: "4px"
                }}
              />
            }
            label='I am not looking for a job'
          />
        </Stack>

        <Box mt={2}>
          <Typography
            variant='body2'
            sx={{ color: "text.secondary", fontSize: "13px" }}
          >
            Note: By hiding your status, your profile will be hidden from
            employers.
          </Typography>
        </Box>

        <Box mt={3} display='flex' justifyContent='flex-end' gap={1}>
          <Button
            variant='outlined'
            onClick={onClose}
            sx={{
              borderRadius: 20,
              textTransform: "none",
              px: 3,
              borderColor: "gray",
              color: "#000000",
              height: "40px",
              minWidth: "100px"
            }}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            onClick={handleSave}
            disabled={updateProfile.isPending}
            sx={{
              backgroundColor: "#4B8378",
              borderRadius: 20,
              textTransform: "none",
              "&:hover": { backgroundColor: "#3a6b61" },
              height: "40px",
              minWidth: "100px"
            }}
          >
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default StatusModal;
