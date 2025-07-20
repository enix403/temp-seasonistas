import React from "react";
import { useCurrentUser, useUser } from "@/hooks/useCurrentUser";
import ImageUploadModal from "@/components/modals/ImageUploadModal";

interface ProfilePictureModalProps {
  userId?: string;
  open: boolean;
  onClose: () => void;
}

const ProfilePictureModal: React.FC<ProfilePictureModalProps> = ({
  userId,
  open,
  onClose
}) => {
  const { user } = useUser(userId);

  return (
    <ImageUploadModal
      open={open}
      onClose={onClose}
      title='Profile Picture'
      currentImageUrl={user?.profilePictureUrl}
      updateField='profilePictureUrl'
      aspectRatio={{ width: 1, height: 1 }}
      previewSize={{ width: 200, height: 200 }}
      modalSize='sm'
    />
  );
};

export default ProfilePictureModal;
