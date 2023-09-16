import React, { useState } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';
import Toppings from './components/Toppings';


function App() {
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState(null);
  const baseImages = {
    'Thin Crust': '/images/thincrust.svg',
    'Pan Crust': '/images/pancrust.svg',
  };
  const toppingImages = {
    'Pepperoni': '/images/pepperoni.svg',
    'Mushroom': '/images/mushroom.svg',
    'Cheese': '/images/cheeseburst.jpg',
  };
  const handleBaseDragStart = (base) => {
    setSelectedBase(base);
  };

  const handleCircleDrop = (e) => {
    e.preventDefault();
    
  };

  const handleToppingDragStart = (topping) => {
    setSelectedToppings(topping);
  };


  return (
    <div className="App">
      <h1>Sammy's Pizzas</h1>
      <div className="pizza-builder">
        <div className="base-options">
          <h2>Available Bases</h2>
          <PizzaBase base="Thin Crust" onDragStart={handleBaseDragStart} />
          <PizzaBase base="Pan Crust" onDragStart={handleBaseDragStart} />
        </div>
        <div className="topping-options">
          <h2>Available Toppings</h2>
          <Toppings topping="Pepperoni" onDragStart={handleToppingDragStart} />
          <Toppings topping="Mushroom" onDragStart={handleToppingDragStart} />
          <Toppings topping="Cheese" onDragStart={handleToppingDragStart} />
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
              <p>{selectedBase} Base </p>
              
            </div>
          
          ) : (
            <p>Drop Base Here</p>
          )
        }
        {selectedToppings ? (
          <div>
          <img
            src={process.env.PUBLIC_URL + toppingImages[selectedToppings]}
            alt={`${selectedToppings} Topping`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            
          />
          <h3>Final Product: </h3>
          <p>{selectedToppings} Topping  with {selectedBase} Base</p>
          
        </div>

        ): (
          <p>Drop Base first</p>
        ) }
        </div>
      </div>
    </div>
  );
}

export default App;
