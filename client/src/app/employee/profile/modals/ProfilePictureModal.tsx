import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Stack,
  Typography,
  Alert,
  CircularProgress,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { apiRoutes } from "@/lib/api-routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

interface ProfilePictureModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfilePictureModal: React.FC<ProfilePictureModalProps> = ({ open, onClose }) => {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Upload file mutation
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("files", file);
      const urls = await apiRoutes.uploadFiles(file);
      return urls[0]; // Get the first URL since we're only uploading one file
    }
  });

  // Update profile mutation
  const updateProfile = useMutation({
    mutationFn: apiRoutes.updateMe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Profile picture updated successfully");
      handleClose();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update profile picture");
    }
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setSelectedFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }
    }
  });

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const url = await uploadMutation.mutateAsync(selectedFile);
      await updateProfile.mutateAsync({
        profilePictureUrl: url
      });
    } catch (error) {
      toast.error("Failed to upload image");
    }
  };

  const handleRemove = async () => {
    try {
      await updateProfile.mutateAsync({
        profilePictureUrl: null
      });
      setShowDeleteConfirm(false);
    } catch (error) {
      toast.error("Failed to remove profile picture");
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    onClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='sm'
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px"
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", px: 3, pt: 3 }}>
          Update Profile Picture
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
          <Stack spacing={3}>
            {/* Current Profile Picture */}
            {user?.profilePictureUrl && !previewUrl && (
              <Box textAlign="center">
                <Typography variant="subtitle1" gutterBottom>Current Picture</Typography>
                <Box position="relative" display="inline-block">
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: 2,
                      overflow: "hidden",
                      backgroundColor: "#E5E7EB"
                    }}
                  >
                    <img
                      src={user.profilePictureUrl}
                      alt="Current Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Box>
                  {user.profilePictureUrl && (
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => setShowDeleteConfirm(true)}
                      sx={{ position: "absolute", bottom: 8, right: 8 }}
                    >
                      Remove
                    </Button>
                  )}
                </Box>
              </Box>
            )}

            {/* Upload Section */}
            <Box
              {...getRootProps()}
              sx={{
                border: '2px dashed',
                borderColor: isDragActive ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                p: 3,
                textAlign: 'center',
                cursor: 'pointer',
                bgcolor: isDragActive ? 'action.hover' : 'background.paper'
              }}
            >
              <input {...getInputProps()} />
              <Stack spacing={1} alignItems="center">
                <Typography variant="h6">
                  {isDragActive ? "Drop the image here" : "Drop your image here"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  or
                </Typography>
                <Button variant="outlined">
                  Select File
                </Button>
                <Typography variant="caption" color="text.secondary">
                  PNG, JPG, GIF up to 5MB
                </Typography>
              </Stack>
            </Box>

            {/* Preview */}
            {previewUrl && (
              <Box textAlign="center">
                <Typography variant="subtitle1" gutterBottom>Preview</Typography>
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "#E5E7EB",
                    margin: "0 auto"
                  }}
                >
                  <img
                    src={previewUrl}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </Box>
              </Box>
            )}

            {/* Upload Button */}
            {selectedFile && (
              <Box display="flex" justifyContent="flex-end" gap={1}>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleUpload}
                  disabled={uploadMutation.isPending || updateProfile.isPending}
                >
                  Upload
                </Button>
              </Box>
            )}
          </Stack>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Remove Profile Picture?</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to remove your profile picture? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShowDeleteConfirm(false)}
            disabled={updateProfile.isPending}
          >
            Cancel
          </Button>
          <Button
            onClick={handleRemove}
            color="error"
            variant="contained"
            disabled={updateProfile.isPending}
            startIcon={updateProfile.isPending ? <CircularProgress size={20} /> : null}
          >
            {updateProfile.isPending ? 'Removing...' : 'Remove'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfilePictureModal;