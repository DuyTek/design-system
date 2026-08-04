import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import brandTheme from '../theme/BrandTheme';

export interface BrandUiProviderProps {
  children: React.ReactNode;
}

export const BrandUiProvider = ({ children }: BrandUiProviderProps) => (
  <ThemeProvider theme={brandTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
