import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Stack,
  Button,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { type Experience } from '@/stores/profileAtoms';

interface AddExperienceModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (experience: Experience) => void;
  experience: Experience | null;
}

const defaultExperience: Experience = {
  id: '',
  role: '',
  company: '',
  location: '',
  duration: '',
  description: '',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/ShareTrip_Logo.png', // Default logo
  isVerified: false
};

const AddExperienceModal: React.FC<AddExperienceModalProps> = ({ open, onClose, onSave, experience }) => {
  const [formData, setFormData] = useState<Experience>(defaultExperience);

  useEffect(() => {
    if (experience) {
      setFormData(experience);
    } else {
      setFormData(defaultExperience);
    }
  }, [experience, open]);

  const handleChange = (field: keyof Experience) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{
      sx: {
        borderRadius: '16px',
      },
    }}>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        {experience ? 'Edit Experience' : 'Add Experience'}
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          <TextField
            placeholder="Role"
            fullWidth
            size="small"
            value={formData.role}
            onChange={handleChange('role')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Company"
            fullWidth
            size="small"
            value={formData.company}
            onChange={handleChange('company')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Location"
            fullWidth
            size="small"
            value={formData.location}
            onChange={handleChange('location')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Duration (e.g., January 2022 to Present)"
            fullWidth
            size="small"
            value={formData.duration}
            onChange={handleChange('duration')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            multiline
            minRows={4}
            placeholder="Description"
            fullWidth
            value={formData.description}
            onChange={handleChange('description')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderRadius: 20, textTransform: 'none', px: 3, borderColor: "gray",
                color: "#000000",
                height: '40px',
                minWidth: '100px'
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: '#4B8378',
                borderRadius: 20,
                textTransform: 'none',
                height: '40px',
                minWidth: '100px',
                '&:hover': { backgroundColor: '#3a6b61' },
              }}
            >
              Save
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddExperienceModal;
