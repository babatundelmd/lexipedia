import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import ThemeProvider from './contexts/ThemeProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
