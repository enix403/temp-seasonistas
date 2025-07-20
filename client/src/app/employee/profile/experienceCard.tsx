import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddExperienceModal from "./modals/AddExperienceModal";
import { useCurrentUser, useUser } from "@/hooks/useCurrentUser";
import { format } from "date-fns";
import { apiRoutes } from "@/lib/api-routes";
import { ApiReplyError } from "@/lib/api-decls";

interface Experience {
  title: string;
  company: string;
  description?: string;
  dateStart: string;
  dateEnd?: string;
  currentlyActive: boolean;
}

const ExperienceCard = ({
  userId,
  editable = false
}: {
  userId?: string;
  editable?: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(
    null
  );
  const [deletingExperience, setDeletingExperience] =
    useState<Experience | null>(null);
  const [loading, setLoading] = useState(false);
  const { user, refreshUser } = useUser(userId);

  if (!user) {
    return null;
  }

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setOpenModal(true);
  };

  const handleClose = () => {
    setEditingExperience(null);
    setOpenModal(false);
  };

  const handleDelete = (experience: Experience) => {
    setDeletingExperience(experience);
  };

  const handleConfirmDelete = async () => {
    if (!deletingExperience) return;

    try {
      setLoading(true);

      // Filter out the experience to delete
      const updatedExperiences = user.experiences.filter(
        exp => exp !== deletingExperience
      );

      await apiRoutes.updateMe({
        experiences: updatedExperiences
      });

      await refreshUser();
      setDeletingExperience(null);
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
    return format(new Date(date), "MMMM yyyy");
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2,
        backgroundColor: "#fff",
        mb: "20px",
        mt: "20px"
      }}
    >
      <CardContent>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={1}
        >
          <Typography variant='h6' fontWeight={600}>
            Experiences
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
              Add Experience
            </Button>
          )}
        </Box>

        <Typography variant='body2' sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          Add experience to increase the chance of hiring
        </Typography>

        {user.experiences && user.experiences.length > 0 ? (
          user.experiences.map((experience, idx) => (
            <Box key={idx} mb={2}>
              <Grid container spacing={1}>
                <Grid size={{ xs: 12, md: 1 }}>
                  <Avatar
                    sx={{ width: 48, height: 48, bgcolor: "#4B8378" }}
                    variant='circular'
                  >
                    {experience.company.charAt(0)}
                  </Avatar>
                </Grid>
                <Grid size={{ xs: 12, md: 11 }}>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Typography fontWeight={600}>
                      {experience.title}{" "}
                      {experience.currentlyActive && (
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 16,
                            color: "#00c292",
                            ml: 0.5,
                            verticalAlign: "middle"
                          }}
                        />
                      )}
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
                          onClick={() => handleDelete(experience)}
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
                          onClick={() => handleEdit(experience)}
                        >
                          Edit
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <Typography
                    variant='body2'
                    fontWeight={500}
                    color='text.secondary'
                  >
                    {experience.company}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ fontSize: 13, color: "#555", mb: 1 }}
                  >
                    {formatDate(experience.dateStart, false)} -{" "}
                    {formatDate(experience.dateEnd, experience.currentlyActive)}
                  </Typography>
                </Grid>
                {experience.description && (
                  <Grid size={{ xs: 12 }}>
                    <Typography
                      variant='body2'
                      sx={{ fontSize: 13.5, color: "#333" }}
                    >
                      {experience.description}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              {idx < user.experiences.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))
        ) : (
          <Typography
            variant='body2'
            sx={{ color: "#666", textAlign: "center", py: 4 }}
          >
            No experience records added yet. Add your work experience to help
            employers understand your background.
          </Typography>
        )}
      </CardContent>

      {editable && (
        <>
          <AddExperienceModal
            open={openModal}
            onClose={handleClose}
            experience={editingExperience}
          />

          {/* Delete Confirmation Dialog */}
          <Dialog
            open={Boolean(deletingExperience)}
            onClose={() => setDeletingExperience(null)}
            maxWidth='xs'
            fullWidth
          >
            <DialogTitle>Delete Experience</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete this experience record? This
                action cannot be undone.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setDeletingExperience(null)}
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

export default ExperienceCard;
