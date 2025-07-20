import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Stack,
  Button,
  Box,
  Alert
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { apiRoutes } from "@/lib/api-routes";
import { useUser } from "@/hooks/useCurrentUser";
import { ApiReplyError } from "@/lib/api-decls";

interface AddAboutModalProps {
  userId?:string;
  open: boolean;
  onClose: () => void;
  savedData: string;
}

const AddAboutModal: React.FC<AddAboutModalProps> = ({
  userId,
  open,
  onClose,
  savedData
}) => {
  const { refreshUser } = useUser(userId);
  const [input, setInput] = useState(savedData || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setInput(savedData || "");
      setError(null);
    }
  }, [open, savedData]);

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);

      await apiRoutes.updateMe({
        bio: input
      });

      await refreshUser();
      onClose();
    } catch (err) {
      if (err instanceof ApiReplyError) {
        setError(err.errorMessage);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth
      PaperProps={{ sx: { borderRadius: "16px" } }}
    >
      <DialogTitle sx={{ fontWeight: "bold", px: 3, pt: 3 }}>
        Edit About
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          {error && (
            <Alert severity='error' sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Tell employers about yourself, your experience, and what you are looking for'
            multiline
            minRows={5}
            fullWidth
            disabled={loading}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: 3 }
            }}
          />

          <Box display='flex' justifyContent='flex-end' gap={1}>
            <Button
              variant='outlined'
              onClick={onClose}
              disabled={loading}
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                borderColor: "gray",
                color: "#000",
                fontSize: "14px",
                height: "40px",
                minWidth: "100px"
              }}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              onClick={handleSave}
              disabled={loading}
              sx={{
                backgroundColor: "#4B8378",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: "14px",
                height: "40px",
                minWidth: "100px",
                "&:hover": { backgroundColor: "#3a6b61" }
              }}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddAboutModal;
