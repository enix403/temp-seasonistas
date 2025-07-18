'use client'

import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  MenuItem,
  Stack,
  Button,
  Box
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAtom } from 'jotai'
import { individualProfileAtom, companyProfileAtom, type IndividualProfileData, type CompanyProfileData } from '@/stores/profileAtoms'

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  type: 'individual' | 'company';
}

const genders = ['Male', 'Female', 'Other'];
const industries = ['Retail', 'Technology', 'Finance'];
const companyTypes = ['Private Limited Company', 'Public Company', 'Sole Proprietorship'];
const companySizes = ['1-10 employees', '11-50 employees', '51-200 employees', '201-1000 employees', '1001-10000 employees', '10,001+ employees'];

const EditProfileModal: React.FC<EditProfileModalProps> = ({ open, onClose, type }) => {
  const [individualProfile, setIndividualProfile] = useAtom(individualProfileAtom);
  const [companyProfile, setCompanyProfile] = useAtom(companyProfileAtom);

  const [formData, setFormData] = useState<IndividualProfileData | CompanyProfileData>(
    type === 'individual' ? individualProfile : companyProfile
  );

  useEffect(() => {
    setFormData(type === 'individual' ? individualProfile : companyProfile);
  }, [type, individualProfile, companyProfile]);

  const handleChange = (field: keyof IndividualProfileData | keyof CompanyProfileData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: event.target.value
      }));
    };

  const handleSave = () => {
    if (type === 'individual') {
      setIndividualProfile(formData as IndividualProfileData);
    } else {
      setCompanyProfile(formData as CompanyProfileData);
    }
    onClose();
  };

  if (type === 'individual') {
    const data = formData as IndividualProfileData;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
          Edit Basic Information
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
          <Stack spacing={2.2}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email Address"
              fullWidth
              value={data.email}
              onChange={handleChange('email')}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            />
            <TextField
              variant="outlined"
              size="small"
              select
              value={data.gender}
              onChange={handleChange('gender')}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Phone Number"
              value={data.phoneNumber}
              onChange={handleChange('phoneNumber')}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Location"
              value={data.location}
              onChange={handleChange('location')}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Website"
              value={data.website}
              onChange={handleChange('website')}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
            />

            <Box display="flex" justifyContent="flex-end" gap={1}>
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{
                  borderRadius: '44px !important',
                  textTransform: 'none',
                  px: 3,
                  borderColor: 'gray',
                  color: '#000',
                  height: '40px',
                  minWidth: '100px'
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  backgroundColor: '#4B8378',
                  borderRadius: '44px !important',
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
  }

  // Company View
  const data = formData as CompanyProfileData;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>
        Edit Basic Information
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pt: 0, pb: 3 }}>
        <Stack spacing={2.2}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Website"
            value={data.website}
            onChange={handleChange('website')}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            select
            size="small"
            fullWidth
            value={data.industry}
            onChange={handleChange('industry')}
            label="Industry"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          >
            {industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            size="small"
            fullWidth
            value={data.companyType}
            onChange={handleChange('companyType')}
            label="Company Type"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          >
            {companyTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            size="small"
            fullWidth
            value={data.companySize}
            onChange={handleChange('companySize')}
            label="Company Size"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          >
            {companySizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Headquarters"
            value={data.headquarters}
            onChange={handleChange('headquarters')}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Year of Establishment"
            value={data.yearOfEstablishment}
            onChange={handleChange('yearOfEstablishment')}
            fullWidth
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 10 } }}
          />

          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                borderRadius: '44px !important',
                textTransform: 'none',
                px: 3,
                borderColor: 'gray',
                color: '#000',
                height: '40px',
                minWidth: '100px'
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: '#4B8378',
                borderRadius: '44px !important',
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
}

export default EditProfileModal
