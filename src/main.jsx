import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TagManager from 'react-gtm-module'; // Importa la librería
import './index.css';
import App from './App.jsx';

// Configura GTM con el ID de tu cliente
const tagManagerArgs = {
  gtmId: 'GTM-W334SJQM',
};

TagManager.initialize(tagManagerArgs); // Inicializa GTM

// Renderiza la app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);