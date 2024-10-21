// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Importer le fichier CSS global

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
