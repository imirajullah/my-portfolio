import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';               // Optional: your global styles
import Main from './Main';         // ✅ Import your routing file
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />                       {/* ✅ Render your Main router file */}
  </React.StrictMode>
);

// Optional: Web Vitals performance reporting
reportWebVitals();

