// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import App from './App';
import './index.css'; // Make sure your Tailwind CSS file is imported

// Get the root element
const container = document.getElementById('root'); // Get the root div from index.html
const root = ReactDOM.createRoot(container); // Create a root using createRoot

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
