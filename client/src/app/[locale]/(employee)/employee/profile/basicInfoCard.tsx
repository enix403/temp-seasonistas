import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import EditProfileModal from "./modals/EditProfileModal";
import { useAtom } from 'jotai';
import { individualProfileAtom, companyProfileAtom, type IndividualProfileData, type CompanyProfileData } from "@/stores/profileAtoms";

interface BasicInfoCardProps {
  type: "individual" | "company";
  notEditable?: boolean;
}

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({ type, notEditable }: BasicInfoCardProps) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<"individual" | "company">("individual");
  const [individualProfile] = useAtom(individualProfileAtom);
  const [companyProfile] = useAtom(companyProfileAtom);

  if (type === "individual") {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          p: 4,
          maxWidth: "100%",
          m: "20px 0px",
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Basic Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Update profile information
            </Typography>
          </Box>

          {!notEditable && <Button
            variant="outlined"
            size="small"
            onClick={() => { setModalType("individual"); setOpen(true); }}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 550,
              borderColor: "#EBECF0",
              color: "#000000",
              fontSize: "0.875rem",
              px: 3,
              py: 0.8,
            }}
          >
            Edit Detail
          </Button>}
        </Stack>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Typography variant="body2" color="text.secondary">
              Email Address
            </Typography>
            <Typography fontWeight="bold">{individualProfile.email}</Typography>
          </div>
          <div>
            <Typography variant="body2" color="text.secondary">
              Gender
            </Typography>
            <Typography fontWeight="bold">{individualProfile.gender}</Typography>
          </div>
          <div>
            <Typography variant="body2" color="text.secondary">
              Phone Number
            </Typography>
            <Typography fontWeight="bold">{individualProfile.phoneNumber}</Typography>
          </div>
          <div>
            <Typography variant="body2" color="text.secondary">
              Location
            </Typography>
            <Typography fontWeight="bold">{individualProfile.location}</Typography>
          </div>
          <div>
            <Typography variant="body2" color="text.secondary">
              Website
            </Typography>
            <Typography fontWeight="bold">{individualProfile.website}</Typography>
          </div>
        </div>

        <EditProfileModal type={modalType} open={open} onClose={() => setOpen(false)} />
      </Box>
    );
  }

  // Company View
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        p: 4,
        maxWidth: "100%",
        m: "20px 0px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Basic Information
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Update profile information
          </Typography>
        </Box>

        {!notEditable && <Button
          variant="outlined"
          size="small"
          onClick={() => { setModalType("company"); setOpen(true); }}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: 550,
            borderColor: "gray",
            color: "#000000",
            fontSize: "0.875rem",
            px: 2.5,
          }}
        >
          Edit Detail
        </Button>}
      </Stack>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Typography variant="body2" color="text.secondary">
            Website
          </Typography>
          <Typography fontWeight="bold">{companyProfile.website}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            Industry
          </Typography>
          <Typography fontWeight="bold">{companyProfile.industry}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            Company Type
          </Typography>
          <Typography fontWeight="bold">{companyProfile.companyType}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            Company Size
          </Typography>
          <Typography fontWeight="bold">{companyProfile.companySize}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            Headquarters
          </Typography>
          <Typography fontWeight="bold">{companyProfile.headquarters}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="text.secondary">
            Year of Establishment
          </Typography>
          <Typography fontWeight="bold">{companyProfile.yearOfEstablishment}</Typography>
        </div>
      </div>

      <EditProfileModal type={modalType} open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default BasicInfoCard;
