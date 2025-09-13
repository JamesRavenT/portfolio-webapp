import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './modules/App';
import './main.css';

//JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
