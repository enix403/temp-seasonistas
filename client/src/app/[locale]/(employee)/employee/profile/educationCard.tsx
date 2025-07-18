import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import AddEducationModal from "./modals/AddEducationModal";
import { useAtom } from 'jotai';
import { educationsAtom, type Education } from "@/stores/profileAtoms";

interface EducationCardProps {
  notEditable?: boolean;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const getDuration = (education: Education) => {
  const startDate = formatDate(education.startDate);
  if (education.isCurrentlyStudying) {
    return `${startDate} to Present`;
  }
  return `${startDate} to ${education.endDate ? formatDate(education.endDate) : ''}`;
};

const EducationCard = ({ notEditable }: EducationCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [educations, setEducations] = useAtom(educationsAtom);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);

  const handleDelete = (id: string) => {
    setEducations(prev => prev.filter(edu => edu.id !== id));
  };

  const handleEdit = (education: Education) => {
    setEditingEducation(education);
    setOpenModal(true);
  };

  const handleSave = (education: Education) => {
    if (editingEducation) {
      // Update existing education
      setEducations(prev => prev.map(edu =>
        edu.id === editingEducation.id ? education : edu
      ));
    } else {
      // Add new education
      setEducations(prev => [...prev, { ...education, id: Date.now().toString() }]);
    }
    setOpenModal(false);
    setEditingEducation(null);
  };

  const displayedEducations = showAll ? educations : educations.slice(0, 1);
  const remainingCount = educations.length - 1;

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        m: "20px 0px",
        backgroundColor: "#fff",
      }}
    >
      <CardContent>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Education & Certifications
          </Typography>
          {!notEditable && <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setEditingEducation(null);
              setOpenModal(true);
            }}
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
            Add Education
          </Button>}
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Add education to increase the chance of hiring
        </Typography>

        {/* Content */}
        {displayedEducations.map((edu, idx) => (
          <Box key={edu.id} mb={2}>
            <Box display="flex" mb={2}>
              <Avatar
                src={edu.logoUrl}
                variant="square"
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box flex={1}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight={600}>
                    {edu.instituteName}
                  </Typography>
                  {!notEditable && <Box display="flex" gap={2}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#999",
                        fontWeight: 500,
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                      onClick={() => handleDelete(edu.id)}
                    >
                      Delete
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4e9a8e",
                        fontWeight: 600,
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                      onClick={() => handleEdit(edu)}
                    >
                      Edit
                    </Typography>
                  </Box>}
                </Box>

                <Typography sx={{ fontSize: 13, color: "#333" }}>
                  {edu.courseName}
                </Typography>
                <Typography sx={{ fontSize: 13, color: "#555" }}>
                  Grade: {edu.grade} &nbsp;&nbsp;•&nbsp;&nbsp; {getDuration(edu)}
                </Typography>

                <Typography sx={{ fontSize: 13.5, mt: 1.2, color: "#333" }}>
                  {edu.description}{" "}
                  <Typography
                    component="span"
                    sx={{ color: "#0073e6", fontWeight: 500 }}
                  >
                    See More
                  </Typography>
                </Typography>
              </Box>
            </Box>
            {idx < displayedEducations.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
        {remainingCount > 0 && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="body2"
              onClick={() => setShowAll(!showAll)}
              sx={{
                fontSize: 14,
                color: "#559093",
                fontWeight: 600,
                mt: 1,
                cursor: "pointer",
              }}
            >
              {showAll ? "Show Less" : `Show ${remainingCount} More Education${remainingCount > 1 ? 's' : ''}`}
            </Typography>
          </>
        )}
      </CardContent>
      <AddEducationModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingEducation(null);
        }}
        onSave={handleSave}
        education={editingEducation}
      />
    </Card>
  );
};

export default EducationCard;
