'use client';

import React from 'react';
import { AuthProvider } from '../lib/context/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/context/theme';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default ClientLayout;
