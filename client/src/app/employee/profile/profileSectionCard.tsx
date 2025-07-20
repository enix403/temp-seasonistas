import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Grid,
  Paper
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddSkillModal from "./modals/AddSkillModal";
import AddSingleInputModal from "./modals/AddSingleInputModal";
import { toast } from "sonner";
import { apiRoutes } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/hooks/useCurrentUser";

export interface ProfileSectionItem {
  id?: string;
  title: string;
  level?: string;
}

interface ProfileSectionCardProps {
  userId?: string;
  title: string;
  description: string;
  addText: string;
  data: ProfileSectionItem[];
  footerText: string;
  fieldName: string; // The field name in the user model (e.g. 'skills', 'interests', 'goals')
  showLevel?: boolean; // Whether to show/edit level field
  onShowMore?: () => void;
  editable?: boolean;
}

const ProfileSectionCard = ({
  userId,
  title,
  description,
  addText,
  data,
  footerText,
  fieldName,
  showLevel = false,
  onShowMore,
  editable = false
}: ProfileSectionCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState<ProfileSectionItem | null>(
    null
  );

  // Get current user data
  const { user: userData, refreshUser } = useUser(userId);

  // Update user profile mutation
  const updateProfile = useMutation({
    mutationFn: apiRoutes.updateMe,
    onSuccess: () => {
      refreshUser();
      toast.success("Profile updated successfully");
    },
    onError: error => {
      toast.error(error.message || "Failed to update profile");
    }
  });

  const handleAdd = async (newItem: ProfileSectionItem) => {
    if (!userData) return;

    const currentItems = userData[fieldName] || [];
    // Add a unique ID to the new item
    const itemWithId = {
      ...newItem,
      id: crypto.randomUUID()
    };
    const updatedItems = [...currentItems, itemWithId];

    await updateProfile.mutateAsync({
      [fieldName]: updatedItems
    });

    setOpenModal(false);
  };

  const handleEdit = async (
    oldItem: ProfileSectionItem,
    newItem: ProfileSectionItem
  ) => {
    if (!userData) return;

    const currentItems = userData[fieldName] || [];
    const updatedItems = currentItems.map((item: ProfileSectionItem) =>
      // Use ID for comparison if available, otherwise fallback to title
      (item.id && item.id === oldItem.id) ||
      (!item.id && item.title === oldItem.title)
        ? { ...newItem, id: item.id || oldItem.id }
        : item
    );

    await updateProfile.mutateAsync({
      [fieldName]: updatedItems
    });

    setEditingItem(null);
    setOpenModal(false);
  };

  const handleDelete = async (itemToDelete: ProfileSectionItem) => {
    if (!userData) return;

    const currentItems = userData[fieldName] || [];
    const updatedItems = currentItems.filter(
      (item: ProfileSectionItem) =>
        // Use ID for comparison if available, otherwise fallback to title
        (item.id && item.id !== itemToDelete.id) ||
        (!item.id && item.title !== itemToDelete.title)
    );

    await updateProfile.mutateAsync({
      [fieldName]: updatedItems
    });
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
            {title}
          </Typography>

          {editable && (
            <Button
              variant='outlined'
              size='small'
              onClick={() => {
                setEditingItem(null);
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
                py: 0.8
              }}
            >
              {addText}
            </Button>
          )}
        </Box>

        <Typography variant='body2' sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          {description}
        </Typography>

        {/* Grid List */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2
          }}
        >
          {data.map((item, index) => (
            <Paper
              key={item.id || index}
              elevation={0}
              sx={{
                border: "1px solid #eee",
                borderRadius: 2,
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                {showLevel && item.level && (
                  <Typography
                    variant='body2'
                    sx={{ fontSize: 13, color: "#666" }}
                  >
                    {item.level}
                  </Typography>
                )}
              </Box>
              {editable && (
                <Box display='flex' gap={1}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      backgroundColor: "#888888",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon sx={{ color: "white", fontSize: 16 }} />
                  </Box>

                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      backgroundColor: "#4e9a8e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      setEditingItem(item);
                      setOpenModal(true);
                    }}
                  >
                    <EditIcon sx={{ color: "white", fontSize: 16 }} />
                  </Box>
                </Box>
              )}
            </Paper>
          ))}
        </Box>

        {/* Footer */}
        {onShowMore && (
          <Typography
            variant='body2'
            sx={{
              fontSize: 14,
              color: "#559093",
              fontWeight: 600,
              mt: 2,
              cursor: "pointer"
            }}
            onClick={onShowMore}
          >
            {footerText}
          </Typography>
        )}
      </CardContent>

      {editable && (
        <>
          {showLevel ? (
            <AddSkillModal
              open={openModal}
              onClose={() => {
                setEditingItem(null);
                setOpenModal(false);
              }}
              onSubmit={
                editingItem
                  ? newItem => handleEdit(editingItem, newItem)
                  : handleAdd
              }
              initialData={editingItem}
            />
          ) : (
            <AddSingleInputModal
              open={openModal}
              onClose={() => {
                setEditingItem(null);
                setOpenModal(false);
              }}
              type={fieldName}
              onSubmit={
                editingItem
                  ? newItem => handleEdit(editingItem, newItem)
                  : handleAdd
              }
              initialData={editingItem}
            />
          )}
        </>
      )}
    </Card>
  );
};

export default ProfileSectionCard;
