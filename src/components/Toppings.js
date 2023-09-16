
import React from 'react';

function Toppings({ topping, onDragStart }) {
  return (
    <div
      className="pizza-topping"
      draggable
      onDragStart={() => onDragStart(topping)}
    >
      {topping}
    </div>
  );
}

export default Toppings;
