import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Stack,
  Button,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProfileSectionItem } from "../profileSectionCard";

interface AddSingleInputModalProps {
  open: boolean;
  onClose: () => void;
  type: string;
  onSubmit: (item: ProfileSectionItem) => void;
  initialData?: ProfileSectionItem | null;
}

const AddSingleInputModal: React.FC<AddSingleInputModalProps> = ({
  open,
  onClose,
  type,
  onSubmit,
  initialData
}) => {
  const [title, setTitle] = useState(initialData?.title || "");

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit({
      title: title.trim()
    });

    setTitle("");
  };

  const getTitle = () => {
    const action = initialData ? "Edit" : "Add";
    return `${action} ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px"
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", px: 3, pt: 3 }}>
        {getTitle()}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2}>
          <TextField
            placeholder={`Enter ${type}`}
            fullWidth
            size='small'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 10
              }
            }}
          />
          <Box display='flex' justifyContent='flex-end' gap={1}>
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
              onClick={handleSubmit}
              disabled={!title.trim()}
              sx={{
                backgroundColor: "#4B8378",
                borderRadius: 20,
                textTransform: "none",
                "&:hover": { backgroundColor: "#3a6b61" },
                height: "40px",
                minWidth: "100px"
              }}
            >
              {initialData ? "Save Changes" : "Add"}
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddSingleInputModal;
