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
  MenuItem,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { type Experience } from '@/stores/profileAtoms';

interface AddExperienceModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (experience: Experience) => void;
  experience: Experience | null;
}

const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'];

const defaultExperience: Experience = {
  id: '',
  role: '',
  company: '',
  location: '',
  employmentType: 'Full-time',
  startDate: '',
  endDate: null,
  isCurrentlyWorking: true,
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

  const handleCurrentlyWorkingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      isCurrentlyWorking: event.target.checked,
      endDate: event.target.checked ? null : prev.endDate
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
            placeholder="Job Title"
            fullWidth
            size="small"
            value={formData.role}
            onChange={handleChange('role')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Company Name"
            fullWidth
            size="small"
            value={formData.company}
            onChange={handleChange('company')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            select
            placeholder="Employment type"
            fullWidth
            size="small"
            value={formData.employmentType}
            onChange={handleChange('employmentType')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          >
            {employmentTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            placeholder="Location"
            fullWidth
            size="small"
            value={formData.location}
            onChange={handleChange('location')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isCurrentlyWorking}
                onChange={handleCurrentlyWorkingChange}
                sx={{
                  p: 0.5,
                  color: "#559093",
                  '&.Mui-checked': {
                    color: "#559093",
                  },
                }}
              />
            }
            label="I am currently working in this role"
            sx={{ fontSize: 13, ml: 0.5 }}
          />

          <TextField
            type="date"
            label="Start Date"
            value={formData.startDate}
            onChange={handleChange('startDate')}
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />

          {!formData.isCurrentlyWorking && (
            <TextField
              type="date"
              label="End Date"
              value={formData.endDate || ''}
              onChange={handleChange('endDate')}
              size="small"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            />
          )}

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
                borderRadius: 20,
                textTransform: 'none',
                px: 3,
                borderColor: "gray",
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
