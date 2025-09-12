import React from 'react';
import Home from './pages/Home';

function App() {
  return (
      <div>
        <header style={{ backgroundColor: '#d00', color: '#fff', padding: '1rem' }}>
          <nav>
            <span style={{ marginRight: '1rem' }}>Projekt</span>
            <span style={{ marginRight: '1rem' }}>Suche</span>
            <span style={{ marginRight: '1rem' }}>Beisteuern</span>
            <span>Sonstiges</span>
          </nav>
        </header>
        <Home />
      </div>
  );
}

export default App;
