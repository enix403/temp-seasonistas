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
  Typography,
  Chip,
  Grid,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { type Skill } from '@/stores/profileAtoms';

interface AddSkillModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (skill: Skill) => void;
  skill: Skill | null;
}

const suggestions = [
  'Figma', 'Adobe Illustrator', 'Adobe Photoshop',
  'Adobe Photoshop', 'Figma', 'Figma', 'Adobe Illustrator',
  'Adobe Photoshop', 'Adobe Photoshop', 'Figma'
];

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const AddSkillModal: React.FC<AddSkillModalProps> = ({ open, onClose, onSave, skill }) => {
  const [formData, setFormData] = useState<Omit<Skill, 'id'>>({
    title: '',
    level: 'Beginner'
  });

  useEffect(() => {
    if (skill) {
      setFormData({
        title: skill.title,
        level: skill.level
      });
    } else {
      setFormData({
        title: '',
        level: 'Beginner'
      });
    }
  }, [skill, open]);

  const handleChange = (field: keyof Omit<Skill, 'id'>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFormData(prev => ({
      ...prev,
      title: suggestion
    }));
  };

  const handleSubmit = () => {
    onSave(formData as Skill);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{
      sx: {
        borderRadius: '16px',
      },
    }}>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        {skill ? 'Edit Skill' : 'Add Skill'}
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2}>
          <TextField
            placeholder="Enter Skill"
            fullWidth
            size="small"
            value={formData.title}
            onChange={handleChange('title')}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 10
              }
            }}
          />

          <TextField
            select
            label="Skill Level"
            fullWidth
            size="small"
            value={formData.level}
            onChange={handleChange('level')}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 10
              }
            }}
          >
            {skillLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>

          <Box sx={{ bgcolor: "#f5f5f5", p: "10px", borderRadius: "10px" }}>
            <Typography fontSize={17} fontWeight={600} mb={2}>
              Suggestion for you
            </Typography>
            <div className="grid grid-cols-3 gap-2">
              {suggestions.map((item, idx) => (
                <Chip
                  key={idx}
                  label={item}
                  variant="outlined"
                  onClick={() => handleSuggestionClick(item)}
                  sx={{
                    fontSize: 12,
                    borderRadius: 9,
                    px: 1.5,
                    height: 32,
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </Box>

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
                '&:hover': { backgroundColor: '#3a6b61' },
                height: '40px',
                minWidth: '100px'
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

export default AddSkillModal;
