import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Main';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          padding: '10px 20px',
          backgroundColor: 'var(--button-bg)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Main />
    </div>
  );
}

export default App;
