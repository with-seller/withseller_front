import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';

import theme from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import LayoutPage from './pages/layout/LayoutPage';

const root = document.getElementById('root') as HTMLElement;
const rootElement = createRoot(root);

rootElement.render(
  <ThemeProvider theme={theme}>
    <Router>
      <LayoutPage>
        <App />
      </LayoutPage>
    </Router>
  </ThemeProvider>
);
