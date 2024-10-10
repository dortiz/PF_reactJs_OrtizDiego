// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia esto si usas una versión diferente de React
import App from './App'; // Asegúrate de que el nombre y la ruta sean correctos
import './styles/index.css'; // Asegúrate de que este archivo exista

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
