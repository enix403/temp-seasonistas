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
  Alert,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { apiRoutes } from "@/lib/api-routes";
import { useCurrentUser, useUser } from "@/hooks/useCurrentUser";
import { ApiReplyError } from "@/lib/api-decls";
import { format } from "date-fns";

interface Education {
  degree: string;
  institure: string;
  grade: string;
  description?: string;
  dateStart: string;
  dateEnd?: string;
  currentlyActive: boolean;
}

interface AddEducationModalProps {
  userId?: string;
  open: boolean;
  onClose: () => void;
  education?: Education | null;
}

const formatDateForInput = (dateString: string | undefined) => {
  if (!dateString) return "";
  try {
    return format(new Date(dateString), "yyyy-MM-dd");
  } catch (e) {
    console.error("Invalid date:", dateString);
    return "";
  }
};

const AddEducationModal: React.FC<AddEducationModalProps> = ({
  userId,
  open,
  onClose,
  education
}) => {
  const { user, refreshUser } = useUser(userId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Education>({
    degree: "",
    institure: "",
    grade: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    currentlyActive: false
  });

  useEffect(() => {
    if (open && education) {
      setFormData({
        degree: education.degree,
        institure: education.institure,
        grade: education.grade,
        description: education.description || "",
        dateStart: formatDateForInput(education.dateStart),
        dateEnd: formatDateForInput(education.dateEnd),
        currentlyActive: education.currentlyActive
      });
    } else if (open) {
      setFormData({
        degree: "",
        institure: "",
        grade: "",
        description: "",
        dateStart: "",
        dateEnd: "",
        currentlyActive: false
      });
    }
    setError(null);
  }, [open, education]);

  const handleChange =
    (field: keyof Education) =>
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
      if (
        !formData.degree ||
        !formData.institure ||
        !formData.grade ||
        !formData.dateStart
      ) {
        setError("Please fill in all required fields");
        return;
      }

      // Get current educations array
      const currentEducations = user?.educations || [];

      let updatedEducations;
      if (education) {
        // Update existing education
        updatedEducations = currentEducations.map(edu =>
          edu === education ? formData : edu
        );
      } else {
        // Add new education
        updatedEducations = [...currentEducations, formData];
      }

      await apiRoutes.updateMe({
        educations: updatedEducations
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
        {education ? "Edit Education" : "Add Education"}
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
            label='Institution'
            placeholder='School/University/Institute name'
            value={formData.institure}
            onChange={handleChange("institure")}
            fullWidth
            size='small'
            required
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          />
          <TextField
            label='Degree'
            placeholder='e.g., Bachelor of Science in Computer Science'
            value={formData.degree}
            onChange={handleChange("degree")}
            fullWidth
            size='small'
            required
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
          />
          <TextField
            label='Grade'
            placeholder='e.g., A+, 3.8 GPA, First Class, etc.'
            value={formData.grade}
            onChange={handleChange("grade")}
            fullWidth
            size='small'
            required
            disabled={loading}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
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

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.currentlyActive}
                onChange={handleCheckboxChange}
                disabled={loading}
              />
            }
            label='Currently studying here'
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
            placeholder='Add any relevant details about your education'
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

export default AddEducationModal;
