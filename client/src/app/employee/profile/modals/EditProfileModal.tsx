"use client";

import React, { useState } from "react";
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
  Alert
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { apiRoutes } from "@/lib/api-routes";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { ApiReplyError } from "@/lib/api-decls";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  type: "individual" | "company";
  initialData: {
    email: string;
    gender?: string;
    phoneCountryCode?: string;
    phoneNumber?: string;
    addressCity?: string;
    addressCountry?: string;
    website?: string;
  };
}

// Map display values to database values
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" }
];

const industries = ["Retail", "Technology", "Finance"];
const companyTypes = [
  "Private Limited Company",
  "Public Company",
  "Sole Proprietorship"
];
const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1001-10000 employees",
  "10,001+ employees"
];

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  open,
  onClose,
  type,
  initialData
}) => {
  const { refreshUser } = useCurrentUser();
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      await apiRoutes.updateMe({
        gender: formData.gender,
        phoneCountryCode: formData.phoneCountryCode,
        phoneNumber: formData.phoneNumber,
        addressCity: formData.addressCity,
        addressCountry: formData.addressCountry,
        website: formData.website
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
        Edit Basic Information
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
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {type === "individual" ? (
            <>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Email Address'
                value={formData.email}
                disabled
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
              <TextField
                variant='outlined'
                size='small'
                select
                value={formData.gender || ''}
                onChange={handleChange('gender')}
                fullWidth
                label="Gender"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              >
                {genderOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Box display="flex" gap={2}>
                <TextField
                  variant='outlined'
                  size='small'
                  placeholder='Country Code'
                  value={formData.phoneCountryCode || ''}
                  onChange={handleChange('phoneCountryCode')}
                  fullWidth
                  sx={{ flex: 1, "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
                />
                <TextField
                  variant='outlined'
                  size='small'
                  placeholder='Phone Number'
                  value={formData.phoneNumber || ''}
                  onChange={handleChange('phoneNumber')}
                  fullWidth
                  sx={{ flex: 2, "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
                />
              </Box>
              <TextField
                variant='outlined'
                size='small'
                placeholder='City'
                value={formData.addressCity || ''}
                onChange={handleChange('addressCity')}
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
              <TextField
                variant='outlined'
                size='small'
                placeholder='Country'
                value={formData.addressCountry || ''}
                onChange={handleChange('addressCountry')}
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
              <TextField
                variant='outlined'
                size='small'
                placeholder='Website'
                value={formData.website || ''}
                onChange={handleChange('website')}
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
            </>
          ) : (
            // Company form fields remain unchanged
            <>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Website'
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
              <TextField
                select
                size='small'
                fullWidth
                defaultValue='Retail'
                label='Industry'
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              >
                {industries.map(industry => (
                  <MenuItem key={industry} value={industry}>
                    {industry}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                size='small'
                fullWidth
                defaultValue='Public Company'
                label='Company Type'
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              >
                {companyTypes.map(type => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                size='small'
                fullWidth
                defaultValue='1-10 employees'
                label='Company Size'
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              >
                {companySizes.map(size => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Headquarters'
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
              <TextField
                variant='outlined'
                size='small'
                placeholder='Year of Establishment'
                fullWidth
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
              />
              <Box display='flex' gap={2}>
                <TextField
                  type='date'
                  variant='outlined'
                  size='small'
                  fullWidth
                  label='Start Date'
                  InputLabelProps={{ shrink: true }}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
                />
                <TextField
                  type='date'
                  variant='outlined'
                  size='small'
                  fullWidth
                  label='End Date'
                  InputLabelProps={{ shrink: true }}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 10 } }}
                />
              </Box>
            </>
          )}

          <Box display='flex' justifyContent='flex-end' gap={1}>
            <Button
              variant='outlined'
              onClick={onClose}
              disabled={loading}
              sx={{
                borderRadius: "44px !important",
                textTransform: "none",
                px: 3,
                borderColor: "gray",
                color: "#000",
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
                borderRadius: "44px !important",
                textTransform: "none",
                "&:hover": { backgroundColor: "#3a6b61" },
                height: "40px",
                minWidth: "100px"
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

export default EditProfileModal;
