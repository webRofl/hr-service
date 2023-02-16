import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { getTheme } from './style';
import { setSettings } from './utils';
import { ErrorFallback } from './components/common';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { queryClient } = setSettings();

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={getTheme('light')}>
          <Router />
          <CssBaseline />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

reportWebVitals();
