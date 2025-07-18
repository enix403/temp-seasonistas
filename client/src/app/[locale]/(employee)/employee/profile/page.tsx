'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import DashboardHome from './dashboardHome'
import DashboardCompanyHome from './dashboardCompanyHome'

export default function Dashboard() {
  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <DashboardHome />
    </Box>
  )
}
