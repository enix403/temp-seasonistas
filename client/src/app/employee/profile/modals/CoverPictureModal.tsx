import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ImageUploadModal from "@/components/modals/ImageUploadModal";

interface CoverPictureModalProps {
  open: boolean;
  onClose: () => void;
}

const CoverPictureModal: React.FC<CoverPictureModalProps> = ({ open, onClose }) => {
  const { user } = useCurrentUser();

  return (
    <ImageUploadModal
      open={open}
      onClose={onClose}
      title="Cover Image"
      currentImageUrl={user?.coverPictureUrl}
      updateField="coverPictureUrl"
      aspectRatio={{ width: 16, height: 9 }}
      previewSize={{ width: "100%", height: 200 }}
      modalSize="md"
    />
  );
};

export default CoverPictureModal;