"use client";

import React from "react";
import { Box, Typography, CircularProgress, Stack } from "@mui/material";
import { useUser } from "@/hooks/useCurrentUser";

const PercentageCard = ({ userId }: { userId?: string }) => {
  const { user } = useUser(userId);

  const calculateCompletionPercentage = (user: any) => {
    if (!user) return 0;

    const requiredFields = [
      "fullName",
      "email",
      "bio",
      "gender",
      "dateOfBirth",
      "phoneNumber",
      "addressCountry",
      "addressCity",
      "contactEmail",
      "website"
    ];

    const arrayFields = [
      { name: "experiences", weight: 2 }, // More weight as it's more important
      { name: "educations", weight: 2 }, // More weight as it's more important
      { name: "skills", weight: 1.5 }, // Moderate weight
      { name: "interests", weight: 1 }, // Normal weight
      { name: "goals", weight: 1 } // Normal weight
    ];

    // Calculate basic fields completion
    const filledBasicFields = requiredFields.filter(
      field => user[field] && user[field].toString().trim() !== ""
    ).length;
    const basicFieldsPercentage =
      (filledBasicFields / requiredFields.length) * 50; // Basic fields worth 50%

    // Calculate array fields completion
    let arrayFieldsScore = 0;
    let totalArrayWeight = arrayFields.reduce(
      (sum, field) => sum + field.weight,
      0
    );

    arrayFields.forEach(field => {
      if (Array.isArray(user[field.name]) && user[field.name].length > 0) {
        arrayFieldsScore += field.weight;
      }
    });

    const arrayFieldsPercentage = (arrayFieldsScore / totalArrayWeight) * 50; // Array fields worth 50%

    // Calculate total percentage
    const totalPercentage = Math.round(
      basicFieldsPercentage + arrayFieldsPercentage
    );

    return Math.min(totalPercentage, 100); // Cap at 100%
  };

  const completionValue = calculateCompletionPercentage(user);

  const getMissingFields = () => {
    if (!user) return [];

    const missing: string[] = [];

    // Check basic information
    if (!user.bio?.trim()) missing.push("About");
    if (!user.gender) missing.push("Gender");
    if (!user.dateOfBirth) missing.push("Date of Birth");
    if (!user.phoneNumber) missing.push("Phone Number");
    if (!user.addressCountry || !user.addressCity) missing.push("Location");
    if (!user.website) missing.push("Website");

    // Check array fields
    if (!user.experiences?.length) missing.push("Experience");
    if (!user.educations?.length) missing.push("Education");
    if (!user.skills?.length) missing.push("Skills");
    if (!user.interests?.length) missing.push("Interests");
    if (!user.goals?.length) missing.push("Goals");

    return missing;
  };

  const missingFields = getMissingFields();

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: 4,
        p: { xs: 2, sm: 3 },
        width: "100%",
        mt: 3,
        mb: 4
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        alignItems='center'
      >
        {/* Circular Progress Section */}
        <Box position='relative' display='inline-flex'>
          <CircularProgress
            variant='determinate'
            value={completionValue}
            size={70}
            thickness={4}
            sx={{ color: "#4e8c8a", zIndex: 1 }}
          />
          <CircularProgress
            variant='determinate'
            value={100}
            size={70}
            thickness={4}
            sx={{
              color: "#555",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 0
            }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position='absolute'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Typography
              variant='caption'
              component='div'
              color='white'
              fontWeight='bold'
            >
              {`${completionValue}%`}
            </Typography>
          </Box>
        </Box>

        {/* Text Section */}
        <Box textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant='h6' fontWeight='bold'>
            Your profile is {completionValue}% complete
          </Typography>
          {missingFields.length > 0 && (
            <Typography
              variant='body2'
              sx={{ color: "#aaa", mt: 0.5, maxWidth: "500px" }}
            >
              Add more details like {missingFields.join(", ")} to complete your
              profile.
            </Typography>
          )}
          {missingFields.length === 0 && (
            <Typography
              variant='body2'
              sx={{ color: "#aaa", mt: 0.5, maxWidth: "500px" }}
            >
              Great job! Your profile is fully complete.
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default PercentageCard;
