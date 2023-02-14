import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { getTheme } from './style';
import { setSettings } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { queryClient } = setSettings();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getTheme('light')}>
        <Router />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
