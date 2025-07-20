import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import AddEducationModal from "./modals/AddEducationModal";
import { useUser } from "@/hooks/useCurrentUser";
import { format } from "date-fns";
import { apiRoutes } from "@/lib/api-routes";
import { ApiReplyError } from "@/lib/api-decls";

interface Education {
  degree: string;
  institure: string;
  grade: string;
  description?: string;
  dateStart: string;
  dateEnd?: string;
  currentlyActive: boolean;
}

const EducationCard = ({
  userId,
  editable = false
}: {
  userId?: string;
  editable?: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null
  );
  const [deletingEducation, setDeletingEducation] = useState<Education | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const { user, refreshUser } = useUser(userId);

  if (!user) {
    return null;
  }

  const handleEdit = (education: Education) => {
    setEditingEducation(education);
    setOpenModal(true);
  };

  const handleClose = () => {
    setEditingEducation(null);
    setOpenModal(false);
  };

  const handleDelete = (education: Education) => {
    setDeletingEducation(education);
  };

  const handleConfirmDelete = async () => {
    if (!deletingEducation) return;

    try {
      setLoading(true);

      // Filter out the education to delete
      const updatedEducations = user.educations.filter(
        edu => edu !== deletingEducation
      );

      await apiRoutes.updateMe({
        educations: updatedEducations
      });

      await refreshUser();
      setDeletingEducation(null);
    } catch (err) {
      if (err instanceof ApiReplyError) {
        console.error(err.errorMessage);
      } else {
        console.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string | undefined, currentlyActive: boolean) => {
    if (currentlyActive) return "Present";
    if (!date) return "";
    return format(new Date(date), "yyyy");
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        m: "20px 0px",
        backgroundColor: "#fff"
      }}
    >
      <CardContent>
        {/* Header */}
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={1}
        >
          <Typography variant='h6' fontWeight={600}>
            Education & Certifications
          </Typography>
          {editable && (
            <Button
              variant='outlined'
              size='small'
              onClick={() => setOpenModal(true)}
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 550,
                borderColor: "#EBECF0",
                color: "#000000",
                fontSize: "0.875rem",
                px: 3,
                py: 0.8
              }}
            >
              Add Education
            </Button>
          )}
        </Box>

        <Typography variant='body2' sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Add education to increase the chance of hiring
        </Typography>

        {/* Content */}
        {user.educations && user.educations.length > 0 ? (
          user.educations.map((education, index) => (
            <React.Fragment key={index}>
              <Box display='flex' mb={2}>
                <Avatar
                  variant='square'
                  sx={{ width: 48, height: 48, mr: 2, bgcolor: "#4B8378" }}
                >
                  {education.institure.charAt(0)}
                </Avatar>
                <Box flex={1}>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Typography fontWeight={600}>
                      {education.institure}
                    </Typography>
                    {editable && (
                      <Box display='flex' gap={2}>
                        <Typography
                          variant='body2'
                          sx={{
                            color: "#999",
                            fontWeight: 500,
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" }
                          }}
                          onClick={() => handleDelete(education)}
                        >
                          Delete
                        </Typography>

                        <Typography
                          variant='body2'
                          sx={{
                            color: "#4e9a8e",
                            fontWeight: 600,
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" }
                          }}
                          onClick={() => handleEdit(education)}
                        >
                          Edit
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <Typography sx={{ fontSize: 13, color: "#333" }}>
                    {education.degree}
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: "#555" }}>
                    Grade: {education.grade} &nbsp;&nbsp;•&nbsp;&nbsp;
                    {formatDate(education.dateStart, false)} -{" "}
                    {formatDate(education.dateEnd, education.currentlyActive)}
                  </Typography>

                  {education.description && (
                    <Typography sx={{ fontSize: 13.5, mt: 1.2, color: "#333" }}>
                      {education.description}
                    </Typography>
                  )}
                </Box>
              </Box>
              {index < user.educations.length - 1 && <Divider sx={{ my: 2 }} />}
            </React.Fragment>
          ))
        ) : (
          <Typography
            variant='body2'
            sx={{ color: "#666", textAlign: "center", py: 4 }}
          >
            No education records added yet. Add your education details to help
            employers understand your qualifications.
          </Typography>
        )}
      </CardContent>

      {editable && (
        <>
          <AddEducationModal
            userId={userId}
            open={openModal}
            onClose={handleClose}
            education={editingEducation}
          />

          {/* Delete Confirmation Dialog */}
          <Dialog
            open={Boolean(deletingEducation)}
            onClose={() => setDeletingEducation(null)}
            maxWidth='xs'
            fullWidth
          >
            <DialogTitle>Delete Education</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete this education record? This
                action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setDeletingEducation(null)}
                disabled={loading}
                sx={{ color: "text.secondary" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDelete}
                disabled={loading}
                color='error'
                variant='contained'
              >
                {loading ? "Deleting..." : "Delete"}
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Card>
  );
};

export default EducationCard;
