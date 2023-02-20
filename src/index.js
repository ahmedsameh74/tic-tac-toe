import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalProvider } from './context/ModalContext';
import { GameProvider } from './context/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ModalProvider>
  <GameProvider>
    <App />
  </GameProvider>
  </ModalProvider>
  </React.StrictMode>
);


