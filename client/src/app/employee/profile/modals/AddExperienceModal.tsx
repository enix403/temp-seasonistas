import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  MenuItem,
  Stack,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  Alert
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { apiRoutes } from "@/lib/api-routes";
import { ApiReplyError } from "@/lib/api-decls";
import { format } from "date-fns";
import { useUser } from "@/hooks/useCurrentUser";

interface Experience {
  title: string;
  company: string;
  description?: string;
  dateStart: string;
  dateEnd?: string;
  currentlyActive: boolean;
  employmentType?: string;
}

interface AddExperienceModalProps {
  userId?: string;
  open: boolean;
  onClose: () => void;
  experience?: Experience | null;
}

const employmentTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance"
];

const formatDateForInput = (dateString: string | undefined) => {
  if (!dateString) return "";
  try {
    return format(new Date(dateString), "yyyy-MM-dd");
  } catch (e) {
    console.error("Invalid date:", dateString);
    return "";
  }
};

const AddExperienceModal: React.FC<AddExperienceModalProps> = ({
  userId,
  open,
  onClose,
  experience
}) => {
  const { user, refreshUser, updateUser } = useUser(userId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Experience>({
    title: "",
    company: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    currentlyActive: false,
    employmentType: "Full-time"
  });

  useEffect(() => {
    if (open && experience) {
      setFormData({
        title: experience.title,
        company: experience.company,
        description: experience.description || "",
        dateStart: formatDateForInput(experience.dateStart),
        dateEnd: formatDateForInput(experience.dateEnd),
        currentlyActive: experience.currentlyActive,
        employmentType: experience.employmentType || "Full-time"
      });
    } else if (open) {
      setFormData({
        title: "",
        company: "",
        description: "",
        dateStart: "",
        dateEnd: "",
        currentlyActive: false,
        employmentType: "Full-time"
      });
    }
    setError(null);
  }, [open, experience]);

  const handleChange =
    (field: keyof Experience) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: event.target.value
      }));
    };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      currentlyActive: event.target.checked,
      dateEnd: event.target.checked ? undefined : prev.dateEnd
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      // Validate required fields
      if (!formData.title || !formData.company || !formData.dateStart) {
        setError("Please fill in all required fields");
        return;
      }

      // Get current experiences array
      const currentExperiences = user?.experiences || [];

      let updatedExperiences;
      if (experience) {
        // Update existing experience
        updatedExperiences = currentExperiences.map(exp =>
          exp === experience ? formData : exp
        );
      } else {
        // Add new experience
        updatedExperiences = [...currentExperiences, formData];
      }

      await updateUser({
        experiences: updatedExperiences
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
      PaperProps={{
        sx: {
          borderRadius: "16px"
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", px: 3, pt: 3 }}>
        {experience ? "Edit Experience" : "Add Experience"}
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
            label='Job Title'
            placeholder='e.g., Software Engineer'
            value={formData.title}
            onChange={handleChange("title")}
            fullWidth
            size='small'
            required
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          />
          <TextField
            label='Company'
            placeholder='e.g., Google'
            value={formData.company}
            onChange={handleChange("company")}
            fullWidth
            size='small'
            required
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          />
          <TextField
            select
            label='Employment Type'
            value={formData.employmentType}
            onChange={handleChange("employmentType")}
            fullWidth
            size='small'
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          >
            {employmentTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.currentlyActive}
                onChange={handleCheckboxChange}
                disabled={loading}
                sx={{
                  color: "#559093",
                  "&.Mui-checked": {
                    color: "#559093"
                  }
                }}
              />
            }
            label='I am currently working in this role'
          />

          <TextField
            label='Start Date'
            type='date'
            value={formData.dateStart}
            onChange={handleChange("dateStart")}
            fullWidth
            size='small'
            required
            disabled={loading}
            InputLabelProps={{ shrink: true }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          />

          {!formData.currentlyActive && (
            <TextField
              label='End Date'
              type='date'
              value={formData.dateEnd}
              onChange={handleChange("dateEnd")}
              fullWidth
              size='small'
              disabled={loading}
              InputLabelProps={{ shrink: true }}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
            />
          )}

          <TextField
            label='Description'
            placeholder='Describe your role, responsibilities, and achievements'
            value={formData.description}
            onChange={handleChange("description")}
            multiline
            minRows={4}
            fullWidth
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
          />

          <Box display='flex' justifyContent='flex-end' gap={1}>
            <Button
              variant='outlined'
              onClick={onClose}
              disabled={loading}
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
              disabled={loading}
              sx={{
                backgroundColor: "#4B8378",
                borderRadius: 20,
                textTransform: "none",
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

export default AddExperienceModal;
