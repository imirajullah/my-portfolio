import React from 'react';
import './App.css';
import Main from './Main'; // ✅ Only import Main which controls routing

function App() {
  return (
    <div >
      <Main /> {/* ✅ Navbar will be conditionally shown from here */}
    </div>
  );
}

export default App;
