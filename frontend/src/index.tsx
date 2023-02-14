import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { getTheme } from './style';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme('light')}>
      <Router />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
