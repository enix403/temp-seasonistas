import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddSkillModal from "./modals/AddSkillModal";
import AddSingleInputModal from "./modals/AddSingleInputModal";
import { useAtom } from 'jotai';
import { skillsAtom, interestsAtom, goalsAtom, type Skill, type Interest, type Goal } from "@/stores/profileAtoms";

interface ProfileBarCardProps {
  notEditable?: boolean;
  title: string;
  description: string;
  addText: string;
  footerText: string;
  type: "skill" | "interest" | "goal";
}

const ProfileSectionCard = ({
  title,
  description,
  addText,
  footerText,
  type,
  notEditable
}: ProfileBarCardProps) => {
  const [openSkillModal, setSkillModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [editingItem, setEditingItem] = useState<Skill | Interest | Goal | null>(null);

  // Get the appropriate atom based on type
  const [skills, setSkills] = useAtom(skillsAtom);
  const [interests, setInterests] = useAtom(interestsAtom);
  const [goals, setGoals] = useAtom(goalsAtom);

  const data = type === 'skill' ? skills : type === 'interest' ? interests : goals;
  const setData = type === 'skill' ? setSkills : type === 'interest' ? setInterests : setGoals;

  const handleDelete = (id: string) => {
    setData(prev => prev.filter(item => item.id !== id));
  };

  const handleEdit = (item: Skill | Interest | Goal) => {
    setEditingItem(item);
    if (type === 'skill') {
      setSkillModal(true);
    } else {
      setOpenModal(true);
    }
  };

  const handleSave = (item: Skill | Interest | Goal) => {
    if (editingItem) {
      // Update existing item
      setData(prev => prev.map(prevItem =>
        prevItem.id === editingItem.id ? { ...item, id: editingItem.id } : prevItem
      ));
    } else {
      // Add new item
      setData(prev => [...prev, { ...item, id: Date.now().toString() }]);
    }

    if (type === 'skill') {
      setSkillModal(false);
    } else {
      setOpenModal(false);
    }
    setEditingItem(null);
  };

  const handleAdd = () => {
    setEditingItem(null);
    if (type === 'skill') {
      setSkillModal(true);
    } else {
      setOpenModal(true);
    }
  };

  const displayedItems = showAll ? data : data.slice(0, 4);
  const remainingCount = data.length - 4;

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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>

          {!notEditable && (
            <Button
              variant="outlined"
              size="small"
              onClick={handleAdd}
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
              {addText}
            </Button>
          )}
        </Box>

        <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: 13 }}>
          {description}
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayedItems.map((item) => (
            <Paper
              key={item.id}
              elevation={0}
              sx={{
                border: "1px solid #eee",
                borderRadius: 2,
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                {'level' in item && (
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 13, color: "#666" }}
                  >
                    {(item as Skill).level}
                  </Typography>
                )}
              </Box>
              {!notEditable && (
                <Box display="flex" gap={1}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      backgroundColor: "#888888",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(item.id)}
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
                      cursor: "pointer",
                    }}
                    onClick={() => handleEdit(item)}
                  >
                    <EditIcon sx={{ color: "white", fontSize: 16 }} />
                  </Box>
                </Box>
              )}
            </Paper>
          ))}
        </div>

        {remainingCount > 0 && (
          <Typography
            variant="body2"
            onClick={() => setShowAll(!showAll)}
            sx={{
              fontSize: 14,
              color: "#559093",
              fontWeight: 600,
              mt: 2,
              cursor: "pointer",
            }}
          >
            {showAll ? "Show Less" : `${footerText} (${remainingCount})`}
          </Typography>
        )}
      </CardContent>
      <AddSkillModal
        open={openSkillModal}
        onClose={() => {
          setSkillModal(false);
          setEditingItem(null);
        }}
        onSave={handleSave}
        skill={editingItem as Skill | null}
      />
      <AddSingleInputModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingItem(null);
        }}
        onSave={handleSave}
        item={editingItem}
        type={type === 'interest' ? 'interest' : 'goal'}
      />
    </Card>
  );
};

export default ProfileSectionCard;
