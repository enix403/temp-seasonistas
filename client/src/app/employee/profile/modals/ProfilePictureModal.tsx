import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ImageUploadModal from "@/components/modals/ImageUploadModal";

interface ProfilePictureModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfilePictureModal: React.FC<ProfilePictureModalProps> = ({ open, onClose }) => {
  const { user } = useCurrentUser();

  return (
    <ImageUploadModal
      open={open}
      onClose={onClose}
      title="Profile Picture"
      currentImageUrl={user?.profilePictureUrl}
      updateField="profilePictureUrl"
      aspectRatio={{ width: 1, height: 1 }}
      previewSize={{ width: 200, height: 200 }}
      modalSize="sm"
    />
  );
};

export default ProfilePictureModal;