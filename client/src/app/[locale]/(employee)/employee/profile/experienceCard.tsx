import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Button,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddExperienceModal from "./modals/AddExperienceModal";
import { useAtom } from 'jotai';
import { experiencesAtom, type Experience } from "@/stores/profileAtoms";

interface ExperienceCardProps {
  notEditable?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ notEditable }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [experiences, setExperiences] = useAtom(experiencesAtom);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);

  const handleDelete = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setOpenModal(true);
  };

  const handleSave = (experience: Experience) => {
    if (editingExperience) {
      // Update existing experience
      setExperiences(prev => prev.map(exp =>
        exp.id === editingExperience.id ? experience : exp
      ));
    } else {
      // Add new experience
      setExperiences(prev => [...prev, { ...experience, id: Date.now().toString() }]);
    }
    setOpenModal(false);
    setEditingExperience(null);
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 1);
  const remainingCount = experiences.length - 1;

  return (
    <Card
      sx={{
        maxWidth: '100%',
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        backgroundColor: "#fff",
        mb: "20px",
        mt: "20px",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            Experiences
          </Typography>
          {!notEditable &&
            <>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  setEditingExperience(null);
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
                Add Experience
              </Button>
            </>
          }
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Add experience to increase the chance of hiring
        </Typography>

        {displayedExperiences.map((exp, idx) => (
          <Box key={exp.id} mb={2}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-1">
                <Avatar
                  src={exp.logo}
                  alt={exp.company}
                  sx={{ width: 48, height: 48 }}
                  variant="circular"
                />
              </div>
              <div className="md:col-span-11">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight={600}>
                    {exp.role}{" "}
                    {exp.isVerified && (
                      <CheckCircleRoundedIcon
                        sx={{
                          fontSize: 16,
                          color: "#00c292",
                          ml: 0.5,
                          verticalAlign: "middle",
                        }}
                      />
                    )}
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
                      onClick={() => handleDelete(exp.id)}
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
                      onClick={() => handleEdit(exp)}
                    >
                      Edit
                    </Typography>
                  </Box>}
                </Box>

                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="text.secondary"
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 13, color: "#555", mb: 1 }}
                >
                  {exp.location} &nbsp;&nbsp; {exp.duration}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontSize: 13.5, color: "#333" }}
                >
                  {exp.description}{" "}
                  <Typography
                    component="span"
                    sx={{ color: "#0073e6", fontWeight: 500 }}
                  >
                    See More
                  </Typography>
                </Typography>
              </div>
            </div>
            {idx < displayedExperiences.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
        {remainingCount > 0 && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="body2"
              onClick={() => setShowAll(!showAll)}
              sx={{
                fontSize: 15,
                color: "#559093",
                fontWeight: 600,
                mt: 1,
                cursor: "pointer",
              }}
            >
              {showAll ? "Show Less" : `Show ${remainingCount} More Experience${remainingCount > 1 ? 's' : ''}`}
            </Typography>
          </>
        )}
      </CardContent>
      <AddExperienceModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingExperience(null);
        }}
        onSave={handleSave}
        experience={editingExperience}
      />
    </Card>
  );
};

export default ExperienceCard;
