
import React from 'react';

function PizzaBase({ base, onDragStart }) {
  return (
    <div
      className="pizza-base"
      draggable
      onDragStart={() => onDragStart(base)}
    >
       
      {base}
    </div>
  );
}

export default PizzaBase;
