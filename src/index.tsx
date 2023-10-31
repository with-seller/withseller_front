import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

const root = document.getElementById('root') as HTMLElement;
const rootElement = createRoot(root);

rootElement.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
