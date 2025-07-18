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
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { type Education } from '@/stores/profileAtoms';

interface AddEducationModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (education: Education) => void;
  education: Education | null;
}

const defaultEducation: Education = {
  id: '',
  instituteName: '',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/CalArts_logo.svg', // Default logo
  courseName: '',
  grade: '',
  startDate: '',
  endDate: null,
  isCurrentlyStudying: false,
  description: ''
};

const AddEducationModal: React.FC<AddEducationModalProps> = ({ open, onClose, onSave, education }) => {
  const [formData, setFormData] = useState<Education>(defaultEducation);

  useEffect(() => {
    if (education) {
      setFormData(education);
    } else {
      setFormData(defaultEducation);
    }
  }, [education, open]);

  const handleChange = (field: keyof Education) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleCurrentlyStudyingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      isCurrentlyStudying: event.target.checked,
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
        {education ? 'Edit Education' : 'Add Education'}
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          <TextField
            placeholder="School"
            fullWidth
            size="small"
            value={formData.instituteName}
            onChange={handleChange('instituteName')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Course Name"
            fullWidth
            size="small"
            value={formData.courseName}
            onChange={handleChange('courseName')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            placeholder="Grade"
            fullWidth
            size="small"
            value={formData.grade}
            onChange={handleChange('grade')}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isCurrentlyStudying}
                onChange={handleCurrentlyStudyingChange}
                sx={{
                  p: 0.5,
                  color: "#559093",
                  '&.Mui-checked': {
                    color: "#559093",
                  },
                }}
              />
            }
            label="I am currently studying here"
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

          {!formData.isCurrentlyStudying && (
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

export default AddEducationModal;
