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
  Typography,
  Chip,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProfileSectionItem } from "../profileSectionCard";

interface AddSkillModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (item: ProfileSectionItem) => void;
  initialData?: ProfileSectionItem | null;
}

const skillLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert"
];

const suggestions = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe XD",
  "Sketch",
  "InVision",
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

const AddSkillModal: React.FC<AddSkillModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [level, setLevel] = useState(initialData?.level || skillLevels[0]);

  // Update state when modal opens/closes or initialData changes
  useEffect(() => {
    if (open) {
      setTitle(initialData?.title || "");
      setLevel(initialData?.level || skillLevels[0]);
    }
  }, [open, initialData]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit({
      ...(initialData?.id ? { id: initialData.id } : {}),
      title: title.trim(),
      level
    });

    setTitle("");
    setLevel(skillLevels[0]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTitle(suggestion);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px"
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", px: 3, pt: 3 }}>
        {initialData ? "Edit Skill" : "Add Skill"}
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
            placeholder='Enter skill name'
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

          <FormControl fullWidth size="small">
            <InputLabel>Skill Level</InputLabel>
            <Select
              value={level}
              label="Skill Level"
              onChange={(e) => setLevel(e.target.value)}
              sx={{
                borderRadius: 10
              }}
            >
              {skillLevels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ bgcolor: "#f5f5f5", p: "10px", borderRadius: "10px" }}>
            <Typography fontSize={17} fontWeight={600} mb={2}>
              Suggestions for you
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {suggestions.map((item, idx) => (
                <Chip
                  key={idx}
                  label={item}
                  variant='outlined'
                  onClick={() => handleSuggestionClick(item)}
                  sx={{
                    fontSize: 12,
                    borderRadius: 9,
                    px: 1.5,
                    height: 32,
                    cursor: "pointer"
                  }}
                />
              ))}
            </Box>
          </Box>

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
              {initialData ? "Save Changes" : "Add Skill"}
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillModal;
