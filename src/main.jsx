/**
 * Main.jsx
 * Root entry point for rendering the React application
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './modules/App';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
