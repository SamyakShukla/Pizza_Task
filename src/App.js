// src/App.js

import React, { useState } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';

function App() {
  const [selectedBase, setSelectedBase] = useState(null);

  const baseImages = {
    'Thin Crust': '/images/thincrust.svg',
    'Pan Crust': '/images/pancrust.svg',
  };

  const handleBaseDragStart = (base) => {
    setSelectedBase(base);
  };

  const handleCircleDrop = (e) => {
    e.preventDefault();
    // setSelectedBase(null);
  };

  return (
    <div className="App">
      <h1>We build Pizzas</h1>
      <div className="pizza-builder">
        <div className="base-options">
          <h2>Available Bases</h2>
          <PizzaBase base="Thin Crust" onDragStart={handleBaseDragStart} />
          <PizzaBase base="Pan Crust" onDragStart={handleBaseDragStart} />
        </div>
        <div
          className="empty-circle"
          onDrop={handleCircleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {selectedBase ? (
            <div>
              <img
                src={process.env.PUBLIC_URL + baseImages[selectedBase]}
                alt={`${selectedBase} Base`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                
              />
              <p>{selectedBase} Base</p>
            </div>
          ) : (
            <p>Drop Base Here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
