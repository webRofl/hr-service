import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles, getTheme } from './style';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme('light')}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
